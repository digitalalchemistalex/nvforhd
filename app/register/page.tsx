'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/image'

const PACKAGES = [
  {
    id: 'raffle-5',
    name: 'Raffle Tickets',
    price: '$50',
    badge: '5 tickets',
    highlight: false,
    description: '5 raffle tickets. Every ticket directly funds the UC Davis HD Center of Excellence — specialist care for 90+ Northern Nevada families.',
    icon: '🎟️',
    priceId: 'price_1TYvPZHzjKRbp7zjeunXt1kH',
  },
  {
    id: 'raffle-20',
    name: 'Raffle Tickets',
    price: '$100',
    badge: '20 tickets',
    highlight: true,
    label: 'Best Value',
    description: '20 raffle tickets for $100 — 4× more chances, 2× the impact. The most popular choice from past events.',
    icon: '🎟️',
    priceId: 'price_1TYvQbHzjKRbp7zjqNo0CrKe',
  },
  {
    id: 'mulligan',
    name: 'Mulligan',
    price: '$20',
    badge: 'per shot',
    highlight: false,
    description: 'One second chance on your worst shot. Purchase in advance or on the day at Gray\'s Crossing.',
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
        alert('Something went wrong. Call Sean at 775-691-8860.')
        setLoading(null)
      }
    } catch {
      alert('Something went wrong. Call Sean at 775-691-8860.')
      setLoading(null)
    }
  }

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="reg-hero">
        <Image
          src="/images/event-green.jpg"
          alt="Gray's Crossing Golf Club"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div className="reg-hero-overlay" />
        <div className="reg-hero-content">
          <p className="reg-hero-eyebrow">May 29, 2026 · Gray's Crossing · Truckee, CA</p>
          <h1 className="reg-hero-h1">Play. Win. Cure.</h1>
          <p className="reg-hero-sub">Raffle tickets &amp; mulligans — every dollar to the UC Davis HD Center of Excellence</p>
          <a href="#packages" className="reg-hero-cta">See Packages ↓</a>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="reg-trust-bar">
        {['100% to UC Davis HD Center', '$30K raised last year', '90+ families served', 'Nevada Non-Profit'].map(t => (
          <div key={t} className="reg-trust-item">
            <span className="reg-trust-dot" />
            {t}
          </div>
        ))}
      </div>

      {/* ── PACKAGES ── */}
      <main id="packages" className="reg-main">
        <div className="reg-container">

          <div className="reg-header">
            <h2 className="reg-h2">Choose Your Package</h2>
            <p className="reg-lead">Secure your spot before May 29 — last event sold out fast.</p>
          </div>

          <div className="reg-grid">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className={`reg-card${pkg.highlight ? ' reg-card--featured' : ''}`}>
                {pkg.highlight && <div className="reg-card-badge">{pkg.label}</div>}
                <div className="reg-card-icon">{pkg.icon}</div>
                <div className="reg-card-top">
                  <h3 className="reg-card-name">{pkg.name}</h3>
                  <div className="reg-card-price">{pkg.price}</div>
                  <div className="reg-card-tickets">{pkg.badge}</div>
                </div>
                <p className="reg-card-desc">{pkg.description}</p>
                <button
                  onClick={() => handleBuy(pkg.priceId, pkg.id)}
                  disabled={loading === pkg.id}
                  className={`reg-card-btn${pkg.highlight ? ' reg-card-btn--featured' : ''}`}
                >
                  {loading === pkg.id ? (
                    <span className="reg-btn-loading">
                      <span className="reg-spinner" /> Redirecting…
                    </span>
                  ) : (
                    `Buy Now →`
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Event photo strip */}
          <div className="reg-photo-strip">
            <Image src="/images/event-crowd.jpg" alt="NVforHD 2024 tournament" width={400} height={260} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <Image src="/images/event-foursome-1.jpg" alt="Golfers at Gray's Crossing" width={400} height={260} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <Image src="/images/event-action.jpg" alt="Tournament action" width={400} height={260} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>

          {/* Contact */}
          <div className="reg-contact">
            <p>Questions? Call Sean directly:</p>
            <a href="tel:7756918860" className="reg-contact-phone">775-691-8860</a>
            <a href="mailto:info@nvforhd.com" className="reg-contact-email">info@nvforhd.com</a>
          </div>

        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── HERO ── */
        .reg-hero {
          position: relative;
          height: clamp(420px, 60vh, 680px);
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .reg-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,13,26,0.92) 0%, rgba(6,13,26,0.45) 50%, rgba(6,13,26,0.2) 100%);
          z-index: 1;
        }
        .reg-hero-content {
          position: relative;
          z-index: 2;
          padding: clamp(2rem,5vw,4rem) clamp(1.25rem,5vw,5rem);
          max-width: 700px;
        }
        .reg-hero-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-bright);
          font-weight: 700;
          margin: 0 0 0.75rem;
          font-family: var(--sans);
        }
        .reg-hero-h1 {
          font-family: var(--serif);
          font-size: clamp(3rem, 8vw, 5.5rem);
          color: #fff;
          font-weight: 700;
          line-height: 1;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }
        .reg-hero-sub {
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
          margin: 0 0 2rem;
          max-width: 480px;
          font-weight: 300;
        }
        .reg-hero-cta {
          display: inline-block;
          padding: 0.85rem 2rem;
          background: var(--blue);
          color: #fff;
          text-decoration: none;
          font-family: var(--sans);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: background 0.2s;
        }
        .reg-hero-cta:hover { background: var(--blue-mid); }

        /* ── TRUST BAR ── */
        .reg-trust-bar {
          background: var(--navy);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem 2.5rem;
          padding: 1rem clamp(1.25rem,4vw,4rem);
          border-bottom: 1px solid rgba(59,130,246,0.2);
        }
        .reg-trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          font-family: var(--sans);
          font-weight: 500;
          white-space: nowrap;
        }
        .reg-trust-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
        }

        /* ── MAIN ── */
        .reg-main {
          background: var(--cream);
          padding: clamp(3rem,6vw,5rem) 0 clamp(3rem,6vw,5rem);
        }
        .reg-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem,4vw,3rem);
        }
        .reg-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .reg-h2 {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: var(--navy);
          font-weight: 700;
          margin: 0 0 0.75rem;
          letter-spacing: -0.02em;
        }
        .reg-lead {
          font-size: 1rem;
          color: var(--ink-mid);
          margin: 0;
          line-height: 1.7;
        }

        /* ── CARDS GRID ── */
        .reg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          align-items: start;
        }
        .reg-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-top: 3px solid #e5e7eb;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .reg-card:hover {
          box-shadow: 0 8px 32px rgba(11,22,40,0.1);
          transform: translateY(-2px);
        }
        .reg-card--featured {
          border-top: 3px solid var(--blue);
          box-shadow: 0 4px 24px rgba(59,130,246,0.12);
        }
        .reg-card--featured:hover {
          box-shadow: 0 12px 40px rgba(59,130,246,0.18);
        }
        .reg-card-badge {
          position: absolute;
          top: -1px;
          right: 1.5rem;
          background: var(--blue);
          color: #fff;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          font-family: var(--sans);
        }
        .reg-card-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .reg-card-top { display: flex; flex-direction: column; gap: 0.2rem; }
        .reg-card-name {
          font-family: var(--serif);
          font-size: 1.4rem;
          color: var(--navy);
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .reg-card-price {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--blue);
          font-family: var(--sans);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .reg-card-tickets {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--ink-dim);
          font-family: var(--sans);
        }
        .reg-card-desc {
          font-size: 0.875rem;
          color: var(--ink-mid);
          line-height: 1.75;
          margin: 0;
          flex-grow: 1;
        }
        .reg-card-btn {
          display: block;
          width: 100%;
          padding: 0.95rem;
          background: var(--navy);
          color: #fff;
          border: none;
          font-family: var(--sans);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: auto;
        }
        .reg-card-btn:hover:not(:disabled) { background: var(--navy-mid); }
        .reg-card-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .reg-card-btn--featured {
          background: var(--blue);
        }
        .reg-card-btn--featured:hover:not(:disabled) { background: var(--blue-mid); }
        .reg-btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .reg-spinner {
          width: 12px;
          height: 12px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: reg-spin 0.6s linear infinite;
          display: inline-block;
          flex-shrink: 0;
        }
        @keyframes reg-spin { to { transform: rotate(360deg); } }

        /* ── PHOTO STRIP ── */
        .reg-photo-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 3rem;
          height: 200px;
          overflow: hidden;
        }
        .reg-photo-strip > * {
          overflow: hidden;
          position: relative;
        }

        /* ── CONTACT ── */
        .reg-contact {
          text-align: center;
          padding: 2rem;
          border: 1px solid #e5e7eb;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .reg-contact p {
          font-size: 0.85rem;
          color: var(--ink-dim);
          margin: 0;
        }
        .reg-contact-phone {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--navy);
          text-decoration: none;
          font-family: var(--serif);
          letter-spacing: -0.01em;
        }
        .reg-contact-phone:hover { color: var(--blue); }
        .reg-contact-email {
          font-size: 0.85rem;
          color: var(--blue);
          text-decoration: none;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .reg-hero-content {
            padding: 2rem 1.25rem;
          }
          .reg-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .reg-card--featured {
            order: -1;
          }
          .reg-photo-strip {
            grid-template-columns: 1fr 1fr;
            height: 160px;
          }
          .reg-photo-strip > *:last-child {
            display: none;
          }
          .reg-trust-bar {
            gap: 0.4rem 1.25rem;
          }
        }
        @media (max-width: 480px) {
          .reg-photo-strip {
            grid-template-columns: 1fr;
            height: 200px;
          }
          .reg-photo-strip > *:nth-child(2),
          .reg-photo-strip > *:last-child {
            display: none;
          }
        }
      ` }} />
    </>
  )
}
