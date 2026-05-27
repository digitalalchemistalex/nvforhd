'use client'

import { useState, useEffect } from 'react'

const PRODUCTS = [
  { id: 'mulligan',   label: 'Mulligan',                 amount: 2000,  priceId: 'price_1TYvT5HzjKRbp7zjyt0TsbwP' },
  { id: 'raffle-100', label: 'Raffle Tickets (20/$100)', amount: 10000, priceId: 'price_1TYvQbHzjKRbp7zjqNo0CrKe' },
  { id: 'raffle-50',  label: 'Raffle Tickets (5/$50)',   amount: 5000,  priceId: 'price_1TYvPZHzjKRbp7zjeunXt1kH' },
]

const STORAGE_KEY = 'nvforhd_pos_transactions'

type Step = 'selecting' | 'waiting' | 'success' | 'error'
type Transaction = { time: string; product: string; amount: number; status: 'success' | 'failed' }

export default function POSPage() {
  const [step, setStep]                  = useState<Step>('selecting')
  const [selectedProduct, setSelected]   = useState<typeof PRODUCTS[0] | null>(null)
  const [log, setLog]                    = useState<string[]>([])
  const [transactions, setTransactions]  = useState<Transaction[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setTransactions(JSON.parse(saved))
    } catch {}
  }, [])

  const addLog = (msg: string) => setLog(prev => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev.slice(0, 19)])

  const addTransaction = (product: typeof PRODUCTS[0], status: 'success' | 'failed') => {
    setTransactions(prev => {
      const updated = [{
        time: new Date().toLocaleTimeString(),
        product: product.label,
        amount: product.amount,
        status,
      }, ...prev]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch {}
      return updated
    })
  }

  const totalCollected = transactions.filter(t => t.status === 'success').reduce((sum, t) => sum + t.amount, 0)
  const totalCount = transactions.filter(t => t.status === 'success').length

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
    if (piData.error) { addLog(`❌ ${piData.error}`); addTransaction(product, 'failed'); setStep('error'); return }
    addLog('Payment intent created')

    const collectRes = await fetch('/api/terminal/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_intent_id: piData.id }),
    })
    const collectData = await collectRes.json()
    if (collectData.error) { addLog(`❌ ${collectData.error}`); addTransaction(product, 'failed'); setStep('error'); return }

    addLog('Reader is prompting for card...')
    pollForCompletion(piData.id, product)
  }

  async function pollForCompletion(intentId: string, product: typeof PRODUCTS[0]) {
    let attempts = 0
    const poll = async () => {
      attempts++
      if (attempts > 60) { addLog('⏱ Timed out'); addTransaction(product, 'failed'); setStep('error'); return }
      const res = await fetch(`/api/terminal/status?pi=${intentId}`)
      const data = await res.json()
      if (data.status === 'succeeded') {
        addLog('✅ Payment complete!')
        addTransaction(product, 'success')
        setStep('success')
      } else if (data.status === 'canceled' || data.status === 'requires_payment_method') {
        addLog('❌ Canceled or failed')
        addTransaction(product, 'failed')
        setStep('error')
      } else setTimeout(poll, 2000)
    }
    setTimeout(poll, 2000)
  }

  async function cancelPayment() {
    addLog('Canceling...')
    try {
      const res = await fetch('/api/terminal/cancel', { method: 'POST' })
      const data = await res.json()
      if (data.error) {
        addLog(`❌ Cancel failed: ${data.error}`)
      } else {
        addLog('✅ Canceled — reader cleared')
      }
    } catch (e: any) {
      addLog(`❌ Cancel error: ${e?.message}`)
    }
    setStep('selecting')
    setSelected(null)
  }

  const navy = '#0B1628'
  const blue = '#2563EB'

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; background: #F4F6FB; }
        .pos-wrap { min-height: 100vh; background: #F4F6FB; color: #0D1B3E; font-family: system-ui, sans-serif; padding: 24px; max-width: 900px; margin: 0 auto; }
        .pos-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; background: #fff; border-radius: 16px; padding: 16px 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        .pos-header-left { display: flex; align-items: center; gap: 14px; }
        .pos-header-left img { height: 48px; width: auto; }
        .pos-header h1 { margin: 0; font-size: 18px; font-weight: 700; color: #0D1B3E; }
        .pos-badge { background: #2B5BE0; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
        .stat-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .stat-card .stat-val { font-size: 28px; font-weight: 700; color: #2B5BE0; }
        .stat-card .stat-label { font-size: 11px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }
        .pos-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .pos-card h2 { margin: 0 0 16px; font-size: 13px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.06em; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; border-radius: 10px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
        .btn:hover { opacity: 0.85; }
        .btn-primary { background: #2B5BE0; color: #fff; }
        .btn-danger { background: #dc2626; color: #fff; }
        .btn-success { background: #16a34a; color: #fff; }
        .product-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .product-btn { background: #F4F6FB; border: 2px solid #E5E7EB; border-radius: 14px; padding: 28px 16px; cursor: pointer; text-align: center; transition: all 0.15s; color: #0D1B3E; }
        .product-btn:hover { background: #EEF2FF; border-color: #2B5BE0; }
        .product-btn .p-label { font-size: 15px; font-weight: 600; display: block; margin-bottom: 10px; color: #374151; }
        .product-btn .p-amount { font-size: 36px; font-weight: 700; color: #2B5BE0; }
        .log-box { background: #F4F6FB; border-radius: 10px; padding: 14px; max-height: 140px; overflow-y: auto; font-family: monospace; font-size: 12px; color: #6B7280; }
        .log-box p { margin: 0 0 4px; }
        .waiting-box { text-align: center; padding: 32px 0; }
        .spinner { width: 48px; height: 48px; border: 3px solid #E5E7EB; border-top-color: #2B5BE0; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 20px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .center-box { text-align: center; padding: 32px 0; }
        .tx-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .tx-table th { text-align: left; color: #9CA3AF; font-weight: 600; padding: 6px 8px; border-bottom: 1px solid #E5E7EB; font-size: 11px; text-transform: uppercase; }
        .tx-table td { padding: 8px; border-bottom: 1px solid #F3F4F6; color: #374151; }
        .badge-success { background: #DCFCE7; color: #16a34a; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
        .badge-failed { background: #FEE2E2; color: #dc2626; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
      ` }} />

      <div className="pos-wrap">
        <div className="pos-header">
          <div className="pos-header-left">
            <img src="/images/logo.png" alt="NVforHD" />
            <h1>NVforHD POS</h1>
          </div>
          <span className="pos-badge">Staff Only</span>
        </div>

        {/* ── STATS ── */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-val">{totalCount}</div>
            <div className="stat-label">Payments</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">${(totalCollected / 100).toFixed(0)}</div>
            <div className="stat-label">Collected</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{transactions.filter(t => t.status === 'failed').length}</div>
            <div className="stat-label">Failed</div>
          </div>
        </div>

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
          </div>
        )}

        {/* ── WAITING ── */}
        {step === 'waiting' && (
          <div className="pos-card">
            <div className="waiting-box">
              <div className="spinner" />
              <h2 style={{ margin: '0 0 8px', fontSize: 20, textTransform: 'none', letterSpacing: 0, color: '#0D1B3E' }}>{selectedProduct?.label}</h2>
              <p style={{ color: '#2B5BE0', margin: '0 0 24px', fontSize: 32, fontWeight: 700 }}>${((selectedProduct?.amount || 0) / 100).toFixed(2)}</p>
              <p style={{ color: '#6B7280', margin: '0 0 24px' }}>Reader is prompting for card...</p>
              <button className="btn btn-danger" onClick={cancelPayment}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── SUCCESS ── */}
        {step === 'success' && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
              <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>{selectedProduct?.label}</h2>
              <p style={{ color: '#2B5BE0', margin: '0 0 24px', fontSize: 28, fontWeight: 700 }}>${((selectedProduct?.amount || 0) / 100).toFixed(2)}</p>
              <button className="btn btn-success" onClick={() => { setStep('selecting'); setSelected(null) }}>Next Payment</button>
            </div>
          </div>
        )}

        {/* ── ERROR ── */}
        {step === 'error' && (
          <div className="pos-card">
            <div className="center-box">
              <div style={{ fontSize: 56, marginBottom: 12 }}>❌</div>
              <h2 style={{ margin: '0 0 20px', fontSize: 20 }}>Payment Failed</h2>
              <button className="btn btn-primary" onClick={() => { setStep('selecting'); setSelected(null) }}>Try Again</button>
            </div>
          </div>
        )}

        {/* ── TRANSACTION LOG ── */}
        {transactions.length > 0 && (
          <div className="pos-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>Transaction History</h2>
              <button className="btn" style={{ background: 'rgba(220,38,38,0.2)', color: '#f87171', border: '1px solid rgba(220,38,38,0.3)', padding: '6px 14px', fontSize: 12 }}
                onClick={() => { if(confirm('Clear all transaction history?')) { setTransactions([]); try { localStorage.removeItem('nvforhd_pos_transactions') } catch {} } }}>
                Clear History
              </button>
            </div>
            <table className="tx-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td style={{ color: 'rgba(255,255,255,0.5)' }}>{t.time}</td>
                    <td>{t.product}</td>
                    <td style={{ color: '#93C5FD', fontWeight: 600 }}>${(t.amount / 100).toFixed(2)}</td>
                    <td><span className={t.status === 'success' ? 'badge-success' : 'badge-failed'}>{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      </div>
    </>
  )
}
