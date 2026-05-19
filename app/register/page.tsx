'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const PACKAGES = [
  {
    id: 'raffle-5',
    name: 'Raffle Tickets',
    price: '$50',
    badge: '5 tickets',
    description: '5 raffle tickets for the May 29 tournament. Every ticket supports the UC Davis HD Center of Excellence.',
    icon: '🎟️',
    priceId: 'price_1TYvPZHzjKRbp7zjeunXt1kH',
  },
  {
    id: 'raffle-20',
    name: 'Raffle Tickets',
    price: '$100',
    badge: '20 tickets — best value',
    description: '20 raffle tickets for $100. Double your chances and double your impact for HD families.',
    icon: '🎟️',
    priceId: 'price_1TYvQbHzjKRbp7zjqNo0CrKe',
  },
  {
    id: 'mulligan',
    name: 'Mulligan',
    price: '$20',
    badge: 'per mulligan',
    description: 'Get a second chance on your worst shot. Purchase on the day or in advance.',
    icon: '⛳',
    priceId: 'price_1TYvT5HzjKRbp7zjyt0TsbwP',
  },
]

export default function RegisterPage() {
  const [loading, setLoading] = useState<string | null>(null)

  async function handleBuy(priceId: string, packageId: string) {
    setLoading(packageId)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again or call Sean at 775-691-8860.')
        setLoading(null)
      }
    } catch {
      alert('Something went wrong. Please try again or call Sean at 775-691-8860.')
      setLoading(null)
    }
  }

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)', minHeight: '70vh', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '0.75rem' }}>
              May 29, 2026 · Gray&rsquo;s Crossing · Truckee CA
            </p>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--navy)', fontWeight: 700, lineHeight: 1.2, margin: '0 0 1rem' }}>
              Register &amp; Support
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
              100% of proceeds go directly to the UC Davis Huntington&rsquo;s Disease Center of Excellence.
            </p>
          </div>

          {/* Package Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderTop: '4px solid var(--blue)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ fontSize: '2rem' }}>{pkg.icon}</div>
                <div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--navy)', margin: '0 0 0.25rem', fontWeight: 700 }}>
                    {pkg.name}
                  </h2>
                  <p style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--blue)', margin: '0 0 0.35rem' }}>
                    {pkg.price}
                  </p>
                  <span style={{ display: 'inline-block', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--blue)', background: 'var(--blue-faint)', padding: '0.2rem 0.6rem' }}>
                    {pkg.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-mid)', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                  {pkg.description}
                </p>
                <button
                  onClick={() => handleBuy(pkg.priceId, pkg.id)}
                  disabled={loading === pkg.id}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.9rem',
                    background: loading === pkg.id ? 'var(--ink-dim)' : 'var(--blue)',
                    color: '#fff',
                    border: 'none',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: loading === pkg.id ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading === pkg.id ? 'Redirecting...' : 'Buy Now →'}
                </button>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--ink-dim)', lineHeight: 1.8 }}>
            Questions? Call Sean directly at{' '}
            <a href="tel:7756918860" style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>775-691-8860</a>
            {' '}or email{' '}
            <a href="mailto:info@nvforhd.com" style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>info@nvforhd.com</a>
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
