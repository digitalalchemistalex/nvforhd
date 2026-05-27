'use client'

import { useState, useEffect } from 'react'

const PRODUCTS = [
  { id: 'mulligan',    label: 'Mulligan',                 amount: 2000  },
  { id: 'raffle-100',  label: 'Raffle Tickets (20/$100)', amount: 10000 },
  { id: 'raffle-50',   label: 'Raffle Tickets (5/$50)',   amount: 5000  },
]

const STORAGE_KEY = 'nvforhd_pos_transactions'

type Step = 'selecting' | 'qty' | 'waiting' | 'success' | 'error'
type Transaction = { time: string; product: string; qty: number; amount: number; status: 'success' | 'failed' }

export default function POSPage() {
  const [step, setStep]              = useState<Step>('selecting')
  const [product, setProduct]        = useState<typeof PRODUCTS[0] | null>(null)
  const [qty, setQty]                = useState(1)
  const [log, setLog]                = useState<string[]>([])
  const [transactions, setTx]        = useState<Transaction[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setTx(JSON.parse(saved))
    } catch {}
  }, [])

  const addLog = (msg: string) => setLog(prev => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev.slice(0, 19)])

  const saveTx = (p: typeof PRODUCTS[0], q: number, status: 'success' | 'failed') => {
    setTx(prev => {
      const next = [{ time: new Date().toLocaleTimeString(), product: p.label, qty: q, amount: p.amount * q, status }, ...prev]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const totalCollected = transactions.filter(t => t.status === 'success').reduce((s, t) => s + t.amount, 0)
  const totalCount     = transactions.filter(t => t.status === 'success').length

  function selectProduct(p: typeof PRODUCTS[0]) {
    setProduct(p)
    setQty(1)
    setStep('qty')
  }

  async function charge() {
    if (!product) return
    const total = product.amount * qty
    const label = qty > 1 ? `${product.label} x${qty}` : product.label

    setStep('waiting')
    addLog(`Charging ${label} — $${(total / 100).toFixed(2)}`)

    const piRes = await fetch('/api/terminal/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total, description: label }),
    })
    const piData = await piRes.json()
    if (piData.error) { addLog(`❌ ${piData.error}`); saveTx(product, qty, 'failed'); setStep('error'); return }
    addLog('Payment intent created')

    const collectRes = await fetch('/api/terminal/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_intent_id: piData.id }),
    })
    const collectData = await collectRes.json()
    if (collectData.error) { addLog(`❌ ${collectData.error}`); saveTx(product, qty, 'failed'); setStep('error'); return }

    addLog('Reader is prompting for card...')
    pollForCompletion(piData.id)
  }

  async function pollForCompletion(intentId: string) {
    if (!product) return
    let attempts = 0
    const p = product
    const q = qty
    const poll = async () => {
      attempts++
      if (attempts > 60) { addLog('⏱ Timed out'); saveTx(p, q, 'failed'); setStep('error'); return }
      const res  = await fetch(`/api/terminal/status?pi=${intentId}`)
      const data = await res.json()
      if (data.status === 'succeeded') {
        addLog('✅ Payment complete!')
        saveTx(p, q, 'success')
        setStep('success')
      } else if (data.status === 'canceled' || data.status === 'requires_payment_method') {
        addLog('❌ Canceled or failed')
        saveTx(p, q, 'failed')
        setStep('error')
      } else setTimeout(poll, 2000)
    }
    setTimeout(poll, 2000)
  }

  async function cancelPayment() {
    addLog('Canceling...')
    try {
      const res  = await fetch('/api/terminal/cancel', { method: 'POST' })
      const data = await res.json()
      addLog(data.error ? `❌ Cancel failed: ${data.error}` : '✅ Canceled — reader cleared')
    } catch (e: any) {
      addLog(`❌ Cancel error: ${e?.message}`)
    }
    setStep('selecting')
    setProduct(null)
  }

  function reset() { setStep('selecting'); setProduct(null); setQty(1) }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; background: #F4F6FB; }
        .pos-wrap { min-height: 100vh; background: #F4F6FB; color: #0D1B3E; font-family: system-ui, sans-serif; padding: 20px; max-width: 900px; margin: 0 auto; }
        .pos-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; background: #fff; border-radius: 14px; padding: 14px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        .pos-header-left { display: flex; align-items: center; gap: 12px; }
        .pos-header-left img { height: 44px; width: auto; }
        .pos-header h1 { margin: 0; font-size: 17px; font-weight: 700; color: #0D1B3E; }
        .pos-badge { background: #2B5BE0; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
        .stat-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 12px; padding: 14px; text-align: center; }
        .stat-card .sv { font-size: 26px; font-weight: 700; color: #2B5BE0; }
        .stat-card .sl { font-size: 11px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 3px; }
        .pos-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 14px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .pos-card h2 { margin: 0 0 14px; font-size: 12px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.06em; }
        .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .product-btn { background: #F4F6FB; border: 2px solid #E5E7EB; border-radius: 12px; padding: 22px 12px; cursor: pointer; text-align: center; transition: all 0.12s; }
        .product-btn:hover { background: #EEF2FF; border-color: #2B5BE0; }
        .product-btn .p-label { font-size: 13px; font-weight: 600; display: block; margin-bottom: 8px; color: #374151; }
        .product-btn .p-amount { font-size: 28px; font-weight: 700; color: #2B5BE0; }
        .qty-box { text-align: center; padding: 16px 0; }
        .qty-product { font-size: 20px; font-weight: 700; color: #111; margin-bottom: 4px; }
        .qty-unit { font-size: 14px; color: #9CA3AF; margin-bottom: 24px; }
        .qty-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 24px; }
        .qty-btn { width: 52px; height: 52px; border-radius: 50%; border: 2px solid #E5E7EB; background: #F4F6FB; font-size: 26px; font-weight: 300; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.12s; color: #374151; }
        .qty-btn:hover { border-color: #2B5BE0; background: #EEF2FF; }
        .qty-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .qty-num { font-size: 52px; font-weight: 800; color: #0D1B3E; width: 80px; text-align: center; }
        .qty-total { font-size: 36px; font-weight: 700; color: #2B5BE0; margin-bottom: 28px; }
        .btn-row { display: flex; gap: 12px; justify-content: center; }
        .btn { padding: 13px 28px; border-radius: 10px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
        .btn:hover { opacity: 0.85; }
        .btn-primary { background: #2B5BE0; color: #fff; }
        .btn-ghost { background: #F3F4F6; color: #6B7280; }
        .btn-danger { background: #dc2626; color: #fff; }
        .btn-success { background: #16a34a; color: #fff; }
        .waiting-box { text-align: center; padding: 28px 0; }
        .spinner { width: 48px; height: 48px; border: 3px solid #E5E7EB; border-top-color: #2B5BE0; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 18px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .center-box { text-align: center; padding: 28px 0; }
        .log-box { background: #F4F6FB; border-radius: 8px; padding: 12px; max-height: 120px; overflow-y: auto; font-family: monospace; font-size: 12px; color: #6B7280; }
        .log-box p { margin: 0 0 3px; }
        .tx-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .tx-table th { text-align: left; color: #9CA3AF; font-weight: 600; padding: 5px 8px; border-bottom: 1px solid #E5E7EB; font-size: 11px; text-transform: uppercase; }
        .tx-table td { padding: 8px; border-bottom: 1px solid #F3F4F6; color: #374151; }
        .badge-ok  { background: #DCFCE7; color: #16a34a; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
        .badge-fail { background: #FEE2E2; color: #dc2626; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
      ` }} />

      <div className="pos-wrap">

        {/* Header */}
        <div className="pos-header">
          <div className="pos-header-left">
            <img src="/images/logo.png" alt="NVforHD" />
            <h1>NVforHD POS</h1>
          </div>
          <span className="pos-badge">Staff Only</span>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card"><div className="sv">{totalCount}</div><div className="sl">Payments</div></div>
          <div className="stat-card"><div className="sv">${(totalCollected / 100).toFixed(0)}</div><div className="sl">Collected</div></div>
          <div className="stat-card"><div className="sv">{transactions.filter(t => t.status === 'failed').length}</div><div className="sl">Failed</div></div>
        </div>

        {/* SELECT */}
        {step === 'selecting' && (
          <div className="pos-card">
            <h2>Select Product</h2>
            <div className="product-grid">
              {PRODUCTS.map(p => (
                <div className="product-btn" key={p.id} onClick={() => selectProduct(p)}>
                  <span className="p-label">{p.label}</span>
                  <span className="p-amount">${(p.amount / 100).toFixed(0)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QTY */}
        {step === 'qty' && product && (
          <div className="pos-card">
            <div className="qty-box">
              <div className="qty-product">{product.label}</div>
              <div className="qty-unit">${(product.amount / 100).toFixed(0)} each</div>
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty <= 1}>−</button>
                <div className="qty-num">{qty}</div>
                <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <div className="qty-total">${((product.amount * qty) / 100).toFixed(2)}</div>
              <div className="btn-row">
                <button className="btn btn-ghost" onClick={reset}>Back</button>
                <button className="btn btn-primary" onClick={charge}>Charge ${((product.amount * qty) / 100).toFixed(2)}</button>
              </div>
            </div>
          </div>
        )}

        {/* WAITING */}
        {step === 'waiting' && product && (
          <div className="pos-card">
            <div className="waiting-box">
              <div className="spinner" />
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0D1B3E', marginBottom: 6 }}>
                {qty > 1 ? `${product.label} x${qty}` : product.label}
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#2B5BE0', marginBottom: 16 }}>
                ${((product.amount * qty) / 100).toFixed(2)}
              </div>
              <p style={{ color: '#6B7280', margin: '0 0 24px' }}>Reader is prompting for card...</p>
              <button className="btn btn-danger" onClick={cancelPayment}>Cancel</button>
            </div>
          </div>
        )}

        {/* SUCCESS */}
        {step === 'success' && product && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 52, marginBottom: 10 }}>✅</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
                {qty > 1 ? `${product.label} x${qty}` : product.label}
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: '#16a34a', marginBottom: 24 }}>
                ${((product.amount * qty) / 100).toFixed(2)}
              </div>
              <button className="btn btn-success" onClick={reset}>Next Payment</button>
            </div>
          </div>
        )}

        {/* ERROR */}
        {step === 'error' && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 52, marginBottom: 10 }}>❌</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Payment Failed</div>
              <button className="btn btn-primary" onClick={reset}>Try Again</button>
            </div>
          </div>
        )}

        {/* TX LOG */}
        {transactions.length > 0 && (
          <div className="pos-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <h2 style={{ margin: 0 }}>Transaction History</h2>
              <button style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: 12, cursor: 'pointer' }}
                onClick={() => { if (confirm('Clear history?')) { setTx([]); try { localStorage.removeItem(STORAGE_KEY) } catch {} } }}>
                Clear
              </button>
            </div>
            <table className="tx-table">
              <thead>
                <tr><th>Time</th><th>Product</th><th>Qty</th><th>Amount</th><th>Status</th></tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.time}</td>
                    <td>{t.product}</td>
                    <td>{t.qty}</td>
                    <td style={{ fontWeight: 600 }}>${(t.amount / 100).toFixed(2)}</td>
                    <td><span className={t.status === 'success' ? 'badge-ok' : 'badge-fail'}>{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* LOG */}
        <div className="pos-card">
          <h2>Log</h2>
          <div className="log-box">
            {log.length === 0 && <p>No activity yet.</p>}
            {log.map((l, i) => <p key={i}>{l}</p>)}
          </div>
        </div>

      </div>
    </>
  )
}
