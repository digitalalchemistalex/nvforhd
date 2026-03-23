import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact NVforHD — call Sean at 775-691-8860 or email info@nvforhd.com. Questions about the May 29, 2026 tournament, donations, or sponsorships.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Get in Touch</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,5vw,6rem)' }}>
            We&apos;d love to<br /><em>hear from you.</em>
          </h1>
        </div>
      </div>

      <section style={{ background: 'var(--void)', padding: '8rem 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>

          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {[
                { label: 'Call Sean', value: '775-691-8860', href: 'tel:7756918860', note: 'For event questions, hotel discount rooms at Atlantis & Peppermill, and sponsorship enquiries' },
                { label: 'Email', value: 'info@nvforhd.com', href: 'mailto:info@nvforhd.com', note: 'For donation questions, volunteer opportunities, or general enquiries' },
                { label: 'Book Your Golf Spot', value: 'May 29, 2026 — Gray\'s Crossing', href: 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament', note: 'Reserve via TripSee Travel. 2024 sold out — register early.' },
              ].map(({ label, value, href, note }) => (
                <div key={label} style={{ borderBottom: '1px solid rgba(245,242,234,0.06)', paddingBottom: '3rem' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>{label}</div>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    className="contact-link"
                    style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}
                  >{value}</a>
                  <p style={{ fontSize: '0.82rem', color: 'var(--dimmer)', fontWeight: 300, lineHeight: 1.6 }}>{note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div style={{ padding: '3rem', border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.02)' }}>
              <div className="kicker" style={{ marginBottom: '1.5rem' }}>Send a Message</div>
              <form action="mailto:info@nvforhd.com" method="get" encType="text/plain">
                {[
                  { label: 'Your Name', name: 'name', type: 'text' },
                  { label: 'Your Email', name: 'email', type: 'email' },
                ].map(({ label, name, type }) => (
                  <div key={name} style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dimmer)', marginBottom: '0.5rem' }}>{label}</label>
                    <input type={type} name={name} required style={{
                      width: '100%', background: 'rgba(245,242,234,0.04)',
                      border: '1px solid rgba(245,242,234,0.1)', padding: '0.85rem 1rem',
                      color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--sans)',
                      outline: 'none', transition: 'border-color 0.2s',
                    }} />
                  </div>
                ))}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dimmer)', marginBottom: '0.5rem' }}>Your Message</label>
                  <textarea name="body" rows={5} required style={{
                    width: '100%', background: 'rgba(245,242,234,0.04)',
                    border: '1px solid rgba(245,242,234,0.1)', padding: '0.85rem 1rem',
                    color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--sans)',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                  }} />
                </div>
                <button type="submit" className="btn-gold" style={{ width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
