'use client'

import { useState } from 'react'

const PRODUCTS = [
  { id: 'mulligans',      label: 'Mulligans',               amount: 2000,  priceId: 'price_1TYvT5HzjKRbp7zjyt0TsbwP' },
  { id: 'raffle-100',     label: 'Raffle Tickets (20/$100)', amount: 10000, priceId: 'price_1TYvQbHzjKRbp7zjqNo0CrKe' },
  { id: 'raffle-50',      label: 'Raffle Tickets (5/$50)',   amount: 5000,  priceId: 'price_1TYvPZHzjKRbp7zjeunXt1kH' },
]

type Step = 'selecting' | 'waiting' | 'success' | 'error'

export default function POSPage() {
  const [step, setStep]                = useState<Step>('selecting')
  const [selectedProduct, setSelected] = useState<typeof PRODUCTS[0] | null>(null)
  const [log, setLog]                  = useState<string[]>([])

  const addLog = (msg: string) => setLog(prev => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev.slice(0, 19)])

  async function charge(product: typeof PRODUCTS[0]) {
    setSelected(product)
    setStep('waiting')
    addLog(`Charging ${product.label} — $${(product.amount / 100).toFixed(2)}`)

    const piRes = await fetch('/api/terminal/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: product.amount, description: product.label }),
    })
    const piData = await piRes.json()
    if (piData.error) { addLog(`❌ ${piData.error}`); setStep('error'); return }
    addLog('Payment intent created')

    const collectRes = await fetch('/api/terminal/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_intent_id: piData.id }),
    })
    const collectData = await collectRes.json()
    if (collectData.error) { addLog(`❌ ${collectData.error}`); setStep('error'); return }

    addLog('Reader is prompting for card — tap/insert/swipe')
    pollForCompletion(piData.id)
  }

  async function pollForCompletion(intentId: string) {
    let attempts = 0
    const poll = async () => {
      attempts++
      if (attempts > 60) { addLog('⏱ Timed out'); setStep('error'); return }
      const res = await fetch(`/api/terminal/status?pi=${intentId}`)
      const data = await res.json()
      if (data.status === 'succeeded') { addLog('✅ Payment complete!'); setStep('success') }
      else if (data.status === 'canceled' || data.status === 'requires_payment_method') { addLog('❌ Canceled or failed'); setStep('error') }
      else setTimeout(poll, 2000)
    }
    setTimeout(poll, 2000)
  }

  async function cancelPayment() {
    addLog('Canceling...')
    await fetch('/api/terminal/cancel', { method: 'POST' })
    setStep('selecting')
    setSelected(null)
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
        .pos-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 24px; margin-bottom: 20px; }
        .pos-card h2 { margin: 0 0 16px; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; border-radius: 10px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
        .btn:hover { opacity: 0.85; }
        .btn-primary { background: ${blue}; color: #fff; }
        .btn-danger { background: #dc2626; color: #fff; }
        .btn-success { background: #16a34a; color: #fff; }
        .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 600px) { .product-grid { grid-template-columns: 1fr; } }
        .product-btn { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.15s; color: #fff; }
        .product-btn:hover { background: rgba(37,99,235,0.3); border-color: ${blue}; }
        .product-btn .p-label { font-size: 14px; font-weight: 600; display: block; margin-bottom: 8px; }
        .product-btn .p-amount { font-size: 24px; font-weight: 700; color: #93C5FD; }
        .log-box { background: rgba(0,0,0,0.4); border-radius: 10px; padding: 14px; max-height: 180px; overflow-y: auto; font-family: monospace; font-size: 12px; color: rgba(255,255,255,0.65); }
        .log-box p { margin: 0 0 4px; }
        .waiting-box { text-align: center; padding: 32px 0; }
        .spinner { width: 48px; height: 48px; border: 3px solid rgba(255,255,255,0.15); border-top-color: ${blue}; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 20px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .center-box { text-align: center; padding: 32px 0; }
      ` }} />

      <div className="pos-wrap">
        <div className="pos-header">
          <h1>NVforHD POS</h1>
          <span className="pos-badge">Staff Only</span>
        </div>

        {step === 'selecting' && (
          <div className="pos-card">
            <h2>Select Product</h2>
            <div className="product-grid">
              {PRODUCTS.map(p => (
                <div className="product-btn" key={p.id} onClick={() => charge(p)}>
                  <span className="p-label">{p.label}</span>
                  <span className="p-amount">${(p.amount / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'waiting' && (
          <div className="pos-card">
            <div className="waiting-box">
              <div className="spinner" />
              <h2 style={{ margin: '0 0 8px', fontSize: 20, textTransform: 'none', letterSpacing: 0, color: '#fff' }}>{selectedProduct?.label}</h2>
              <p style={{ color: '#93C5FD', margin: '0 0 24px', fontSize: 32, fontWeight: 700 }}>${((selectedProduct?.amount || 0) / 100).toFixed(2)}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 24px' }}>Reader is prompting for card...</p>
              <button className="btn btn-danger" onClick={cancelPayment}>Cancel</button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
              <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>{selectedProduct?.label}</h2>
              <p style={{ color: '#93C5FD', margin: '0 0 24px', fontSize: 28, fontWeight: 700 }}>${((selectedProduct?.amount || 0) / 100).toFixed(2)}</p>
              <button className="btn btn-success" onClick={() => { setStep('selecting'); setSelected(null) }}>Next Payment</button>
            </div>
          </div>
        )}

        {step === 'error' && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 56, marginBottom: 12 }}>❌</div>
              <h2 style={{ margin: '0 0 20px', fontSize: 20 }}>Payment Failed</h2>
              <button className="btn btn-primary" onClick={() => { setStep('selecting'); setSelected(null) }}>Try Again</button>
            </div>
          </div>
        )}

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
