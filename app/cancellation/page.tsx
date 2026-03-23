import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'NVforHD Cancellation Policy for the annual golf tournament.',
}

export default function CancellationPage() {
  const prose: React.CSSProperties = { fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }

  return (
    <>
      <Nav />
      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Legal</div>
          <h1 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5rem)' }}>Cancellation Policy</h1>
        </div>
      </div>
      <section style={{ background: 'var(--void)', padding: '6rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ padding: '3rem', border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(201,168,76,0.04)', marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Golf Events — 14 Day Policy</div>
            <p style={prose}>Golf Events are refundable <strong style={{ color: '#fff' }}>14 days prior to the event date</strong> unless otherwise posted on the registration site. The 2026 tournament is <strong style={{ color: '#fff' }}>May 29, 2026</strong> — cancellations must be submitted by May 15, 2026.</p>
          </div>

          <p style={prose}>NV for HD provides its clientele with a <strong style={{ color: '#fff' }}>72-hour cancellation policy</strong> for all services, with the exception of large group outings which are defined by an individual contract provided to the group leader.</p>

          <p style={prose}>Cancellation policies for certain clients can vary and NV for HD will pass on the client (host) cancellation policy. All customers are given the chance to review and agree to cancellation policies inside each event registration portal.</p>

          <p style={prose}>To view the cancellation policy for the 2026 tournament, click the Book Now button on our site or visit the registration portal directly.</p>

          <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(245,242,234,0.08)' }}>
            <p style={{ ...prose, color: 'rgba(245,242,234,0.5)', fontSize: '0.85rem' }}>
              Questions about cancellations?<br />
              <a href="tel:7756918860" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Call Sean: 775-691-8860</a>
              {' · '}
              <a href="mailto:info@nvforhd.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>info@nvforhd.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
