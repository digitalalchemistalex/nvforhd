'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=contact'

const INTENTS = [
  {
    id: 'play',
    icon: '⛳',
    title: 'I want to play golf',
    sub: 'May 29 · Gray\'s Crossing · Truckee',
    color: 'var(--blue)',
    placeholder: 'How many in your group? Any questions about the day, format, or what\'s included?',
    subject: '2026 Golf Registration Enquiry',
    cta: 'Or register directly:',
    ctaLink: BOOK,
    ctaLabel: 'Book your spot →',
  },
  {
    id: 'donate',
    icon: '💙',
    title: 'I want to donate',
    sub: '100% goes to UC Davis HD families',
    color: 'var(--blue)',
    placeholder: 'Any questions about how donations are used, tax receipts, or setting up a recurring gift?',
    subject: 'Donation Enquiry',
    cta: 'Or donate directly:',
    ctaLink: BOOK,
    ctaLabel: 'Donate now →',
  },
  {
    id: 'sponsor',
    icon: '🏆',
    title: 'I want to sponsor',
    sub: 'Title · Gold · Lunch · Hole Signs',
    color: 'var(--ink)',
    placeholder: 'Which sponsorship tier interests you? Tell us about your business and we\'ll find the right fit.',
    subject: '2026 Sponsorship Enquiry',
    cta: null,
    ctaLink: null,
    ctaLabel: null,
  },
  {
    id: 'volunteer',
    icon: '🙌',
    title: 'I want to volunteer',
    sub: 'Free · Tournament day · Truckee',
    color: 'var(--ink)',
    placeholder: 'Tell us a bit about yourself and what you\'d like to help with — registration, on-course, dinner setup.',
    subject: 'Volunteer Enquiry',
    cta: null,
    ctaLink: null,
    ctaLabel: null,
  },
  {
    id: 'family',
    icon: '❤️',
    title: 'My family has HD',
    sub: 'Resources · Support · Community',
    color: '#C0392B',
    placeholder: 'Share whatever you\'re comfortable sharing. We\'re HD families too — we understand, and we\'ll respond personally.',
    subject: 'HD Family — Reaching Out',
    cta: 'Specialist HD care near you:',
    ctaLink: 'https://health.ucdavis.edu/huntingtons-disease',
    ctaLabel: 'UC Davis HD Center ↗',
  },
  {
    id: 'media',
    icon: '📰',
    title: 'Media / Press',
    sub: 'Story · Interview · Coverage',
    color: 'var(--ink)',
    placeholder: 'Publication, story angle, and deadline? Sean is available for interviews about NVforHD and HD awareness.',
    subject: 'Media Enquiry',
    cta: null,
    ctaLink: null,
    ctaLabel: null,
  },
]

export default function ContactPage() {
  const [intent, setIntent] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const selected = INTENTS.find(i => i.id === intent)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`[NVforHD] ${selected?.subject || 'General Enquiry'} — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nEnquiry type: ${selected?.title || 'General'}\n\n${form.message}`)
    window.open(`mailto:info@nvforhd.com?subject=${sub}&body=${body}`)
    setSent(true)
  }

  return (
    <>
      <Nav />

      {/* ── PAGE HEADER — light, direct ── */}
      <section style={{ background: 'var(--white)', paddingTop: 'clamp(7rem,14vw,10rem)', paddingBottom: 'clamp(2.5rem,4vw,4rem)', paddingLeft: 'var(--px)', paddingRight: 'var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            Tell us why<br />
            <em style={{ color: 'var(--ink-dim)', fontStyle: 'italic' }}>you&apos;re here.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', color: 'var(--ink-mid)', maxWidth: '520px', lineHeight: 1.8 }}>
            We read every message personally. Choose what brings you here — it helps us respond with exactly what you need.
          </p>
        </div>
      </section>

      {/* ── INTENT SELECTOR ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-dim)', marginBottom: '1.5rem', fontFamily: 'var(--sans)' }}>
            What brings you here?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="intent-grid">
            {INTENTS.map(({ id, icon, title, sub, color }) => (
              <button
                key={id}
                onClick={() => { setIntent(id); setSent(false); setForm({ name: '', email: '', message: '' }) }}
                style={{
                  background: intent === id ? 'var(--white)' : 'var(--white)',
                  border: intent === id ? `2px solid ${color}` : '2px solid var(--cream-3)',
                  padding: 'clamp(1.25rem,2vw,1.75rem)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  boxShadow: intent === id ? '0 4px 20px rgba(17,24,39,0.1)' : 'none',
                  transform: intent === id ? 'translateY(-2px)' : 'none',
                  position: 'relative',
                }}>
                {intent === id && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: color }} />}
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{icon}</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', fontWeight: 500, color: intent === id ? color : 'var(--ink)', lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--ink-dim)', fontFamily: 'var(--sans)' }}>{sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM — only shows after intent selected ── */}
      {intent && (
        <section style={{ background: 'var(--white)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
          <div className="inner contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'start' }}>

            {/* Left — context for this intent */}
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,2.8vw,2.5rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                {selected?.icon} {selected?.title}
              </div>
              {intent === 'play' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>The 2024 tournament sold out. Register early for 2026.</p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>Four-person scramble · Gray&apos;s Crossing, Truckee · May 29 · 12PM Shotgun · Lunch included.</p>
                  <div style={{ background: 'var(--blue-light)', border: '1px solid var(--blue-faint)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>Package Prices</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                      Foursome: $880 · Single: $220 · Sponsorships from $3,000
                    </div>
                  </div>
                </>
              )}
              {intent === 'donate' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>Every dollar goes directly to UC Davis HD Center of Excellence — no overhead, no splitting.</p>
                  <div style={{ background: 'var(--blue-light)', border: '1px solid var(--blue-faint)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>What your donation funds</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                      $100 · Keeps a family in specialist care<br />
                      $250 · Most chosen by our donors<br />
                      $500 · Funds a month of HD counseling
                    </div>
                  </div>
                </>
              )}
              {intent === 'sponsor' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>Your brand on the course, in the fight, and associated with something genuinely good.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {[['🏆 Title', '$3,500', 'Logo everywhere · 4 golfers · lunch'], ['🥇 Gold', '$3,000', '4 golfers · lunch · course signage'], ['🍽 Lunch', '$3,000', 'Lunch credit · 4 golfers'], ['📍 Hole Sign', '$100+', 'Your name on the course']].map(([tier, price, inc]) => (
                      <div key={tier} style={{ display: 'flex', gap: '1rem', padding: '0.75rem 1rem', background: 'var(--cream)', border: '1px solid var(--cream-3)' }}>
                        <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--blue)', minWidth: '60px', fontSize: '0.9rem' }}>{price}</span>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tier}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--ink-dim)' }}>{inc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {intent === 'family' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>We are an HD family too. Sean&apos;s wife Christine was diagnosed with HD — this organization was built from that diagnosis.</p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>You are not alone. We will respond to you personally — not with a template.</p>
                  <div style={{ background: '#FFF5F5', border: '1px solid #FECACA', padding: '1.25rem 1.5rem', borderLeft: '3px solid #C0392B', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C0392B', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>Closest HD specialist care</div>
                    <a href="https://health.ucdavis.edu/huntingtons-disease" target="_blank" rel="noopener" style={{ fontSize: '0.9rem', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>UC Davis HD Center of Excellence →</a>
                    <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', marginTop: '0.3rem' }}>Sacramento, CA · Serves Northern Nevada · 90+ families</div>
                  </div>
                </>
              )}
              {intent === 'volunteer' && (
                <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>Tournament day is May 29 at Gray&apos;s Crossing, Truckee. We need help with registration, hole management, and post-round dinner. No experience needed — just willingness.</p>
              )}
              {intent === 'media' && (
                <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>Sean is available for interviews. We have photography, event footage, and the Puccini family story available on request. HD is an underreported disease — we welcome coverage.</p>
              )}
              {selected?.ctaLink && (
                <a href={selected.ctaLink} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--blue)', color: '#fff', padding: '0.9rem 1.75rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                  {selected.ctaLabel}
                </a>
              )}
            </div>

            {/* Right — the form */}
            <div>
              {sent ? (
                <div style={{ padding: '3rem 2.5rem', background: 'var(--blue-light)', border: '2px solid var(--blue)', borderTop: '4px solid var(--blue)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                    Message sent ✓
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-mid)', lineHeight: 1.75 }}>
                    Your email client should have opened with a pre-filled message to Sean. We&apos;ll respond within 24 hours.
                  </p>
                  <button onClick={() => { setSent(false); setIntent(null) }} style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--blue)', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--sans)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: 0 }}>
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2vw,1.7rem)', color: 'var(--ink)', marginBottom: '0.25rem' }}>Your message to Sean</div>
                  {[
                    { id: 'name', label: 'Your full name', type: 'text', placeholder: 'First and last name' },
                    { id: 'email', label: 'Your email address', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>{label}</label>
                      <input id={id} type={type} placeholder={placeholder} required autoComplete={id}
                        value={form[id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                        style={{ width: '100%', padding: '0.9rem 1rem', border: '1.5px solid var(--cream-3)', background: 'var(--cream)', fontSize: '0.95rem', color: 'var(--ink)', outline: 'none', fontFamily: 'var(--sans)', transition: 'border-color 0.2s' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>Your message</label>
                    <textarea id="message" rows={5} placeholder={selected?.placeholder || 'How can we help?'} required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '0.9rem 1rem', border: '1.5px solid var(--cream-3)', background: 'var(--cream)', fontSize: '0.95rem', color: 'var(--ink)', outline: 'none', fontFamily: 'var(--sans)', resize: 'vertical', minHeight: '140px', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')}
                    />
                  </div>
                  <button type="submit" style={{ background: 'var(--blue)', color: '#fff', padding: '1.1rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)', alignSelf: 'flex-start', transition: 'background 0.2s' }}>
                    Send to Sean →
                  </button>
                  <p style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', marginTop: '-0.25rem' }}>
                    Opens your email client · No account needed · We respond within 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── DIRECT CONTACT — always visible ── */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem,5vw,5rem) var(--px)' }}>
        <div className="inner contact-direct-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {[
            { icon: '📞', label: 'Call Sean directly', value: '775-691-8860', href: 'tel:7756918860', note: 'Golf, sponsorship, hotel discounts, anything.' },
            { icon: '✉', label: 'Email the team', value: 'info@nvforhd.com', href: 'mailto:info@nvforhd.com', note: 'Donations, questions, media, HD families.' },
            { icon: '📍', label: 'Mailing address', value: '2600 Mill St. #400', href: null, note: 'Reno, Nevada 89502' },
          ].map(({ icon, label, value, href, note }) => (
            <div key={label} style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{icon}</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.45)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>{label}</div>
              {href ? (
                <a href={href} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>{value}</a>
              ) : (
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: '#fff', marginBottom: '0.5rem' }}>{value}</div>
              )}
              <p style={{ fontSize: '0.78rem', color: 'rgba(249,248,246,0.5)', lineHeight: 1.6, margin: 0 }}>{note}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .intent-grid          { grid-template-columns: 1fr 1fr !important; }
          .contact-grid         { grid-template-columns: 1fr !important; }
          .contact-direct-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .intent-grid { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />
    </>
  )
}
