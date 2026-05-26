'use client'

import { useEffect, useState, useRef } from 'react'

// ── Types (minimal subset of Stripe Terminal JS we actually use) ──────────────
type TerminalInstance = {
  discoverReaders: (opts: object) => Promise<{ discoveredReaders?: ReaderObj[]; error?: { message: string } }>
  connectReader: (reader: ReaderObj) => Promise<{ reader?: ReaderObj; error?: { message: string } }>
  collectPaymentMethod: (secret: string) => Promise<{ paymentIntent?: object; error?: { message: string } }>
  processPayment: (pi: object) => Promise<{ paymentIntent?: object; error?: { message: string } }>
  disconnectReader: () => Promise<void>
}
type ReaderObj = { id: string; label: string; status: string; ip_address?: string }

declare global {
  interface Window {
    StripeTerminal: {
      create: (opts: {
        onFetchConnectionToken: () => Promise<string>
        onUnexpectedReaderDisconnect: () => void
      }) => TerminalInstance
    }
  }
}

// ── Products ──────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 'golfer-single',  label: 'Single Golfer',      amount: 22000 },
  { id: 'golfer-foursome',label: 'Foursome',            amount: 79900 },
  { id: 'donation-50',    label: 'Donation $50',        amount: 5000  },
  { id: 'donation-100',   label: 'Donation $100',       amount: 10000 },
  { id: 'donation-250',   label: 'Donation $250',       amount: 25000 },
  { id: 'donation-500',   label: 'Donation $500',       amount: 50000 },
]

type Step = 'idle' | 'connecting' | 'connected' | 'selecting' | 'charging' | 'success' | 'error'

export default function POSPage() {
  const terminalRef = useRef<TerminalInstance | null>(null)
  const [sdkReady, setSdkReady]   = useState(false)
  const [step, setStep]           = useState<Step>('idle')
  const [readers, setReaders]     = useState<ReaderObj[]>([])
  const [connectedReader, setConnectedReader] = useState<ReaderObj | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null)
  const [log, setLog]             = useState<string[]>([])
  const [customAmount, setCustomAmount] = useState('')

  const addLog = (msg: string) => setLog(prev => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev.slice(0, 19)])

  // Load Stripe Terminal JS SDK
  useEffect(() => {
    if (document.getElementById('stripe-terminal-js')) { setSdkReady(true); return }
    const script = document.createElement('script')
    script.id  = 'stripe-terminal-js'
    script.src = 'https://js.stripe.com/terminal/v1/'
    script.onload = () => setSdkReady(true)
    document.head.appendChild(script)
  }, [])

  // Init terminal once SDK ready
  useEffect(() => {
    if (!sdkReady || terminalRef.current) return
    terminalRef.current = window.StripeTerminal.create({
      onFetchConnectionToken: async () => {
        const res = await fetch('/api/terminal/connection-token', { method: 'POST' })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        return data.secret
      },
      onUnexpectedReaderDisconnect: () => {
        addLog('⚠️ Reader disconnected unexpectedly')
        setConnectedReader(null)
        setStep('idle')
      },
    })
    addLog('Terminal SDK initialized')
  }, [sdkReady])

  async function discoverReaders() {
    if (!terminalRef.current) return
    setStep('connecting')
    addLog('Discovering readers...')
    const result = await terminalRef.current.discoverReaders({ simulated: false, discovery_method: 'internet' })
    if (result.error) {
      addLog(`❌ Discovery error: ${result.error.message}`)
      setStep('error')
      return
    }
    const found = result.discoveredReaders || []
    setReaders(found)
    addLog(`Found ${found.length} reader(s)`)
    setStep(found.length > 0 ? 'connected' : 'error')
  }

  async function connectReader(reader: ReaderObj) {
    if (!terminalRef.current) return
    addLog(`Connecting to ${reader.label || reader.id}...`)
    const result = await terminalRef.current.connectReader(reader)
    if (result.error) {
      addLog(`❌ Connect error: ${result.error.message}`)
      setStep('error')
      return
    }
    setConnectedReader(reader)
    setStep('selecting')
    addLog(`✅ Connected to ${reader.label || reader.id}`)
  }

  async function charge(product: typeof PRODUCTS[0]) {
    if (!terminalRef.current) return
    setSelectedProduct(product)
    setStep('charging')
    addLog(`Charging ${product.label} — $${(product.amount / 100).toFixed(2)}`)

    // 1. Create PaymentIntent
    const piRes = await fetch('/api/terminal/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: product.amount, description: product.label }),
    })
    const piData = await piRes.json()
    if (piData.error) { addLog(`❌ PI error: ${piData.error}`); setStep('error'); return }

    // 2. Collect card
    addLog('Waiting for card tap/swipe/insert...')
    const collectResult = await terminalRef.current.collectPaymentMethod(piData.client_secret)
    if (collectResult.error) { addLog(`❌ Collect error: ${collectResult.error.message}`); setStep('selecting'); return }

    // 3. Process
    addLog('Processing...')
    const processResult = await terminalRef.current.processPayment(collectResult.paymentIntent!)
    if (processResult.error) { addLog(`❌ Process error: ${processResult.error.message}`); setStep('selecting'); return }

    addLog(`✅ Payment succeeded — ${product.label}`)
    setStep('success')
  }

  async function chargeCustom() {
    const cents = Math.round(parseFloat(customAmount) * 100)
    if (isNaN(cents) || cents < 100) { addLog('❌ Enter a valid amount (min $1.00)'); return }
    await charge({ id: 'custom', label: `Custom $${(cents / 100).toFixed(2)}`, amount: cents })
  }

  function reset() {
    setStep('selecting')
    setSelectedProduct(null)
    setCustomAmount('')
  }

  const navy = '#0B1628'
  const blue = '#2563EB'

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; background: ${navy}; }
        .pos-wrap { min-height: 100vh; background: ${navy}; color: #fff; font-family: system-ui, sans-serif; padding: 24px; }
        .pos-header { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
        .pos-header h1 { margin: 0; font-size: 22px; font-weight: 700; }
        .pos-badge { background: ${blue}; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
        .pos-badge.green { background: #16a34a; }
        .pos-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 24px; margin-bottom: 20px; }
        .pos-card h2 { margin: 0 0 16px; font-size: 16px; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.06em; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; border-radius: 10px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
        .btn:hover { opacity: 0.85; }
        .btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .btn-primary { background: ${blue}; color: #fff; }
        .btn-ghost { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
        .btn-success { background: #16a34a; color: #fff; }
        .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 600px) { .product-grid { grid-template-columns: repeat(2, 1fr); } }
        .product-btn { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 16px 12px; cursor: pointer; text-align: center; transition: all 0.15s; color: #fff; }
        .product-btn:hover { background: rgba(37,99,235,0.3); border-color: ${blue}; }
        .product-btn .p-label { font-size: 13px; font-weight: 600; display: block; margin-bottom: 6px; }
        .product-btn .p-amount { font-size: 20px; font-weight: 700; color: #93C5FD; }
        .reader-item { display: flex; align-items: center; justify-content: space-between; padding: 14px; background: rgba(255,255,255,0.06); border-radius: 10px; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.1); }
        .reader-info { font-size: 14px; }
        .reader-info strong { display: block; font-weight: 600; }
        .reader-info span { color: rgba(255,255,255,0.5); font-size: 12px; }
        .log-box { background: rgba(0,0,0,0.4); border-radius: 10px; padding: 14px; max-height: 180px; overflow-y: auto; font-family: monospace; font-size: 12px; color: rgba(255,255,255,0.65); }
        .log-box p { margin: 0 0 4px; }
        .custom-row { display: flex; gap: 10px; margin-top: 12px; }
        .custom-row input { flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 12px 16px; color: #fff; font-size: 16px; outline: none; }
        .custom-row input::placeholder { color: rgba(255,255,255,0.35); }
        .success-box { text-align: center; padding: 32px 0; }
        .success-box .checkmark { font-size: 56px; margin-bottom: 12px; }
        .success-box h2 { margin: 0 0 8px; font-size: 26px; }
        .success-box p { color: rgba(255,255,255,0.6); margin: 0 0 24px; }
        .charging-box { text-align: center; padding: 32px 0; }
        .spinner { width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.15); border-top-color: ${blue}; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 16px; }
        @keyframes spin { to { transform: rotate(360deg); } }
      ` }} />

      <div className="pos-wrap">
        <div className="pos-header">
          <h1>NVforHD POS</h1>
          {connectedReader
            ? <span className="pos-badge green">● {connectedReader.label || connectedReader.id}</span>
            : <span className="pos-badge">Staff Only</span>
          }
        </div>

        {/* ── IDLE / DISCOVER ── */}
        {(step === 'idle' || step === 'error') && (
          <div className="pos-card">
            <h2>Reader</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 0, marginBottom: 20, fontSize: 14 }}>
              Make sure the S710 is powered on and connected to the same network.
            </p>
            <button className="btn btn-primary" onClick={discoverReaders} disabled={!sdkReady}>
              {sdkReady ? 'Discover Readers' : 'Loading SDK...'}
            </button>
          </div>
        )}

        {/* ── DISCOVERING ── */}
        {step === 'connecting' && (
          <div className="pos-card">
            <div className="charging-box">
              <div className="spinner" />
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Searching for readers...</p>
            </div>
          </div>
        )}

        {/* ── READERS LIST ── */}
        {step === 'connected' && (
          <div className="pos-card">
            <h2>Select Reader</h2>
            {readers.map(r => (
              <div className="reader-item" key={r.id}>
                <div className="reader-info">
                  <strong>{r.label || r.id}</strong>
                  <span>{r.ip_address || r.status}</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '8px 18px', fontSize: 14 }} onClick={() => connectReader(r)}>
                  Connect
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ── PRODUCT SELECT ── */}
        {step === 'selecting' && (
          <div className="pos-card">
            <h2>Select Product</h2>
            <div className="product-grid">
              {PRODUCTS.map(p => (
                <div className="product-btn" key={p.id} onClick={() => charge(p)}>
                  <span className="p-label">{p.label}</span>
                  <span className="p-amount">${(p.amount / 100).toFixed(0)}</span>
                </div>
              ))}
            </div>
            <div className="custom-row">
              <input
                type="number"
                placeholder="Custom amount ($)"
                value={customAmount}
                onChange={e => setCustomAmount(e.target.value)}
                min="1"
                step="1"
              />
              <button className="btn btn-ghost" onClick={chargeCustom}>Charge</button>
            </div>
          </div>
        )}

        {/* ── CHARGING ── */}
        {step === 'charging' && (
          <div className="pos-card">
            <div className="charging-box">
              <div className="spinner" />
              <h2 style={{ margin: '0 0 8px' }}>{selectedProduct?.label}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                ${((selectedProduct?.amount || 0) / 100).toFixed(2)} — Present card to reader
              </p>
            </div>
          </div>
        )}

        {/* ── SUCCESS ── */}
        {step === 'success' && (
          <div className="pos-card">
            <div className="success-box">
              <div className="checkmark">✅</div>
              <h2>Payment Complete</h2>
              <p>{selectedProduct?.label} — ${((selectedProduct?.amount || 0) / 100).toFixed(2)}</p>
              <button className="btn btn-success" onClick={reset}>Next Payment</button>
            </div>
          </div>
        )}

        {/* ── LOG ── */}
        <div className="pos-card">
          <h2>Log</h2>
          <div className="log-box">
            {log.length === 0 && <p>No activity yet.</p>}
            {log.map((l, i) => <p key={i}>{l}</p>)}
          </div>
        </div>

        {connectedReader && step !== 'charging' && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <button className="btn btn-ghost" style={{ fontSize: 13 }} onClick={async () => {
              await terminalRef.current?.disconnectReader()
              setConnectedReader(null)
              setStep('idle')
              addLog('Reader disconnected')
            }}>
              Disconnect Reader
            </button>
          </div>
        )}
      </div>
    </>
  )
}
