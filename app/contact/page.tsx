'use client'
import { useState } from 'react'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=contact'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mailto fallback — real form can be wired to Resend later
    const subject = encodeURIComponent(`NVforHD enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:info@nvforhd.com?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <>
      <Nav />
      <PageHero
        kicker="Get in Touch"
        headline={<>We&apos;d love to<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.35)' }}>hear from you.</em></>}
        sub="Questions about the tournament, sponsorships, donations, or volunteering? Sean and the team are here."
        photo="/images/event-carts.jpg"
        photoPosition="center 50%"
      />

      {/* Contact content — light section */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner grid-2" style={{ gap: 'clamp(3rem,6vw,8rem)' }}>

          {/* Left — contact details */}
          <div>
            {[
              {
                icon: '📞',
                label: 'Call Sean',
                value: '775-691-8860',
                href: 'tel:7756918860',
                note: 'For event questions, hotel discounts at Atlantis & Peppermill, and sponsorship enquiries'
              },
              {
                icon: '✉',
                label: 'Email',
                value: 'info@nvforhd.com',
                href: 'mailto:info@nvforhd.com',
                note: 'For donation questions, volunteer opportunities, or general enquiries'
              },
              {
                icon: '⛳',
                label: 'Book Your Spot',
                value: 'May 29, 2026 — Gray\'s Crossing',
                href: BOOK,
                note: 'Reserve via TripSee Travel. 2024 sold out — register early.'
              },
              {
                icon: '📍',
                label: 'Our Address',
                value: '2600 Mill St. #400',
                href: null,
                note: 'Reno, Nevada 89502'
              },
            ].map(({ icon, label, value, href, note }, i) => (
              <div key={label} style={{ paddingBottom: 'clamp(1.5rem,3vw,2.5rem)', marginBottom: 'clamp(1.5rem,3vw,2.5rem)', borderBottom: i < 3 ? '1px solid var(--cream-3)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{icon}</span>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 700 }}>{label}</div>
                </div>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,2vw,1.5rem)', color: 'var(--ink)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem', transition: 'color 0.2s' }}>
                    {value}
                  </a>
                ) : (
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,2vw,1.5rem)', color: 'var(--ink)', marginBottom: '0.4rem' }}>{value}</div>
                )}
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-dimmer)', lineHeight: 1.6, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>

          {/* Right — contact form */}
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '2rem', lineHeight: 1.1 }}>
              Send us a message
            </h2>

            {sent ? (
              <div style={{ padding: '2.5rem', background: 'rgba(139,105,20,0.08)', border: '1px solid rgba(139,105,20,0.25)', borderLeft: '3px solid var(--gold-dark)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>Message sent! ✓</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', lineHeight: 1.7 }}>Your email client should have opened. Sean will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { id: 'name',    label: 'Your name',    type: 'text',  placeholder: 'First and last name' },
                  { id: 'email',   label: 'Your email',   type: 'email', placeholder: 'your@email.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', fontWeight: 600, marginBottom: '0.5rem' }}>{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid var(--cream-3)', background: '#fff', fontSize: '0.95rem', color: 'var(--ink)', outline: 'none', fontFamily: 'var(--sans)', transition: 'border-color 0.2s' }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', fontWeight: 600, marginBottom: '0.5rem' }}>Your message</label>
                  <textarea
                    id="message" rows={5} placeholder="How can we help?" required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid var(--cream-3)', background: '#fff', fontSize: '0.95rem', color: 'var(--ink)', outline: 'none', fontFamily: 'var(--sans)', resize: 'vertical', minHeight: '140px' }}
                  />
                </div>
                <button type="submit" style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '1rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'background 0.2s', alignSelf: 'flex-start' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
