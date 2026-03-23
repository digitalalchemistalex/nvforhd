import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'NVforHD Cancellation Policy for the annual golf tournament.',
}

export default function CancellationPage() {
  return (
    <>
      <Nav />
      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Legal</div>
          <h1 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5rem)' }}>Cancellation Policy</h1>
        </div>
      </div>
      <section style={{ background: 'var(--void)', padding: '6rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="body-text">Cancellation Policy content coming soon. Please contact <a href="mailto:info@nvforhd.com" style={{ color: 'var(--gold)' }}>info@nvforhd.com</a> or call <a href="tel:7756918860" style={{ color: 'var(--gold)' }}>775-691-8860</a> with any questions.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
