import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | NVforHD',
  description: 'Thank you for supporting NVforHD and the fight against Huntington\'s Disease.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '70vh', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

          {/* Icon */}
          <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>💙</div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            color: 'var(--navy)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Thank you.
          </h1>

          {/* Subhead */}
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--ink)',
            lineHeight: 1.8,
            marginBottom: '0.75rem',
          }}>
            Your registration is confirmed. A receipt has been sent to your email.
          </p>

          <p style={{
            fontSize: '1rem',
            color: 'var(--gray)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            We&rsquo;ll see you on <strong>May 29, 2026</strong> at Gray&rsquo;s Crossing Golf Club, Truckee CA.
            Sean will be in touch with day-of details.
          </p>

          {/* Divider */}
          <div style={{ height: '2px', background: 'var(--blue)', width: '48px', margin: '0 auto 2rem' }} />

          {/* UC Davis note */}
          <div style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid var(--blue)',
            padding: '1.25rem 1.5rem',
            textAlign: 'left',
            marginBottom: '2.5rem',
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--navy)' }}>Your support goes directly to the UC Davis HD Center of Excellence</strong> — 
              specialist care for 90+ Northern Nevada families living with Huntington&rsquo;s Disease.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '0.85rem 2rem',
              background: 'var(--blue)',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--sans)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              Back to Home
            </Link>

            <Link href="/causes" style={{
              display: 'inline-block',
              padding: '0.85rem 2rem',
              border: '2px solid var(--navy)',
              color: 'var(--navy)',
              textDecoration: 'none',
              fontFamily: 'var(--sans)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              Our 2026 Cause
            </Link>
          </div>

          {/* Contact */}
          <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--gray)' }}>
            Questions? Call Sean at{' '}
            <a href="tel:7756918860" style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>
              775-691-8860
            </a>
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
