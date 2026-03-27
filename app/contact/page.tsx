'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=contact'

const INTENTS = [
  { id: 'play',      icon: '⛳', title: 'I want to play golf',   sub: 'May 29 · Gray\'s Crossing · Truckee',   color: 'var(--blue)' },
  { id: 'donate',    icon: '💙', title: 'I want to donate',       sub: '100% goes to UC Davis HD families',     color: 'var(--blue)' },
  { id: 'sponsor',   icon: '🏆', title: 'I want to sponsor',      sub: 'Title · Gold · Lunch · Hole Signs',     color: 'var(--ink)' },
  { id: 'volunteer', icon: '🙌', title: 'I want to volunteer',    sub: 'Free · Tournament day · Truckee',       color: 'var(--ink)' },
  { id: 'family',    icon: '❤️', title: 'My family has HD',       sub: 'Resources · Support · Community',       color: '#C0392B' },
  { id: 'media',     icon: '📰', title: 'Media / Press',          sub: 'Story · Interview · Coverage',          color: 'var(--ink)' },
]

const SPONSOR_TIERS = [
  { id: 'title',  label: '🏆 Title Sponsor',  price: '$3,500',      includes: 'Logo everywhere · 4 golfers · lunch · prime recognition' },
  { id: 'gold',   label: '🥇 Gold Sponsor',    price: '$3,000',      includes: '4 golfers · lunch · course signage' },
  { id: 'lunch',  label: '🍽 Lunch Sponsor',   price: '$3,000',      includes: 'Lunch credit · 4 golfers · recognition' },
  { id: 'hole',   label: '📍 Hole Sign',        price: '$100+',       includes: 'Your name or brand on a hole sign' },
  { id: 'custom', label: '✨ Custom / Other',  price: 'Let\'s talk', includes: 'Something specific in mind? Tell us.' },
]

const VOLUNTEER_ROLES = [
  { id: 'registration', label: 'Registration desk',            desc: 'Check-in players, hand out materials' },
  { id: 'marshal',      label: 'On-course marshal',            desc: 'Keep pace of play, assist players on holes' },
  { id: 'dinner',       label: 'Dinner & awards setup',        desc: 'Help with post-round dinner and ceremony' },
  { id: 'social',       label: 'Social media / photography',   desc: 'Capture the day for our channels' },
  { id: 'general',      label: 'General help',                 desc: 'Wherever needed — flexible on the day' },
]

const MEDIA_TYPES = [
  { id: 'feature',   label: 'Feature story',    desc: 'In-depth piece on NVforHD or HD awareness' },
  { id: 'interview', label: 'Interview',         desc: 'Sean Schaeffer available for broadcast or print' },
  { id: 'news',      label: 'Event coverage',    desc: 'Tournament day coverage, May 29' },
  { id: 'social',    label: 'Social / digital',  desc: 'Reel, post, or digital content' },
  { id: 'podcast',   label: 'Podcast',           desc: 'HD awareness or charity/non-profit angle' },
]

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.9rem 1rem',
  border: '1.5px solid var(--cream-3)',
  background: 'var(--cream)',
  fontSize: '0.95rem', color: 'var(--ink)',
  outline: 'none', fontFamily: 'var(--sans)',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.6rem',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'var(--ink-dim)', fontWeight: 600,
  marginBottom: '0.5rem', fontFamily: 'var(--sans)',
}

export default function ContactPage() {
  const [intent, setIntent]               = useState<string | null>(null)
  const [sponsorTier, setSponsorTier]     = useState('')
  const [volunteerRoles, setVolunteerRoles] = useState<string[]>([])
  const [mediaType, setMediaType]         = useState('')
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState<string | null>(null)
  const [form, setForm]     = useState({
    name: '', email: '', phone: '',
    groupSize: '', groupNames: '',
    donateAmount: '',
    businessName: '', businessWebsite: '',
    availability: '', volunteerNote: '',
    publication: '', deadline: '', storyAngle: '',
    message: '',
    _hp: '', // honeypot
  })

  const selected = INTENTS.find(i => i.id === intent)
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggleRole = (id: string) =>
    setVolunteerRoles(r => r.includes(id) ? r.filter(x => x !== id) : [...r, id])

  const resetForm = () => {
    setIntent(null); setSent(false); setSponsorTier(''); setVolunteerRoles([]); setMediaType(''); setError(null)
    setForm({ name: '', email: '', phone: '', groupSize: '', groupNames: '', donateAmount: '', businessName: '', businessWebsite: '', availability: '', volunteerNote: '', publication: '', deadline: '', storyAngle: '', message: '', _hp: '' })
  }

  const buildSubject = () => {
    if (intent === 'sponsor' && sponsorTier) {
      const t = SPONSOR_TIERS.find(t => t.id === sponsorTier)
      return `[NVforHD] Sponsorship — ${t?.label} — ${form.name}`
    }
    if (intent === 'media' && mediaType) {
      const t = MEDIA_TYPES.find(t => t.id === mediaType)
      return `[NVforHD] Media — ${t?.label} — ${form.publication || form.name}`
    }
    const map: Record<string, string> = {
      play: `[NVforHD] Golf Registration — ${form.name}`,
      donate: `[NVforHD] Donation Enquiry — ${form.name}`,
      volunteer: `[NVforHD] Volunteer — ${form.name}`,
      family: `[NVforHD] HD Family — ${form.name}`,
    }
    return map[intent || ''] || `[NVforHD] Enquiry — ${form.name}`
  }

  const buildBody = () => {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      `Enquiry type: ${selected?.title}`,
      '',
    ]
    if (intent === 'play') {
      lines.push(`Group size: ${form.groupSize || 'Not specified'}`)
      if (form.groupNames) lines.push(`Group members: ${form.groupNames}`)
      if (form.message) lines.push(`\nMessage:\n${form.message}`)
    }
    if (intent === 'donate') {
      if (form.donateAmount) lines.push(`Intended donation: ${form.donateAmount}`)
      if (form.message) lines.push(`\nMessage:\n${form.message}`)
    }
    if (intent === 'sponsor') {
      const t = SPONSOR_TIERS.find(t => t.id === sponsorTier)
      lines.push(`Sponsorship tier: ${t?.label || 'Not selected'} (${t?.price || ''})`)
      lines.push(`Includes: ${t?.includes || ''}`)
      if (form.businessName) lines.push(`Business name: ${form.businessName}`)
      if (form.businessWebsite) lines.push(`Website: ${form.businessWebsite}`)
      if (form.message) lines.push(`\nMessage:\n${form.message}`)
    }
    if (intent === 'volunteer') {
      const roles = volunteerRoles.map(r => VOLUNTEER_ROLES.find(v => v.id === r)?.label).filter(Boolean)
      lines.push(`Volunteer roles: ${roles.length ? roles.join(', ') : 'Not specified'}`)
      if (form.availability) lines.push(`Availability: ${form.availability}`)
      if (form.volunteerNote) lines.push(`Additional info: ${form.volunteerNote}`)
    }
    if (intent === 'media') {
      const t = MEDIA_TYPES.find(t => t.id === mediaType)
      lines.push(`Media type: ${t?.label || 'Not specified'}`)
      if (form.publication) lines.push(`Publication / outlet: ${form.publication}`)
      if (form.deadline) lines.push(`Deadline: ${form.deadline}`)
      if (form.storyAngle) lines.push(`\nStory angle:\n${form.storyAngle}`)
      if (form.message) lines.push(`\nAdditional:\n${form.message}`)
    }
    if (intent === 'family') {
      if (form.message) lines.push(`Message:\n${form.message}`)
    }
    return lines.filter(Boolean).join('\n')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form._hp) { setSent(true); return } // honeypot caught a bot
    setLoading(true); setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: buildSubject(),
          body: buildBody(),
          replyTo: form.email,
          name: form.name,
          intentTitle: selected?.title || intent || '',
        }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Something went wrong. Please email us directly at info@nvforhd.com or call 775-691-8860.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />

      {/* PAGE HEADER */}
      <section style={{ background: 'var(--white)', paddingTop: 'clamp(7rem,14vw,10rem)', paddingBottom: 'clamp(2.5rem,4vw,4rem)', paddingLeft: 'var(--px)', paddingRight: 'var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            Tell us why<br /><em style={{ color: 'var(--ink-dim)', fontStyle: 'italic' }}>you&apos;re here.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.4vw,1.1rem)', color: 'var(--ink-mid)', maxWidth: '520px', lineHeight: 1.8 }}>
            We read every message personally. Choose what brings you here — it helps us respond with exactly what you need.
          </p>
        </div>
      </section>

      {/* INTENT SELECTOR */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-dim)', marginBottom: '1.5rem', fontFamily: 'var(--sans)' }}>
            What brings you here?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="intent-grid">
            {INTENTS.map(({ id, icon, title, sub, color }) => (
              <button key={id}
                onClick={() => { resetForm(); setIntent(id) }}
                style={{ background: 'var(--white)', border: intent === id ? `2px solid ${color}` : '2px solid var(--cream-3)', padding: 'clamp(1.25rem,2vw,1.75rem)', textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', gap: '0.4rem', boxShadow: intent === id ? '0 4px 20px rgba(17,24,39,0.1)' : 'none', transform: intent === id ? 'translateY(-2px)' : 'none', position: 'relative' }}>
                {intent === id && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: color }} />}
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{icon}</span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', fontWeight: 500, color: intent === id ? color : 'var(--ink)', lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--ink-dim)', fontFamily: 'var(--sans)' }}>{sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FORM — shown after intent selected */}
      {intent && (
        <section style={{ background: 'var(--white)', padding: 'clamp(3rem,5vw,5rem) var(--px)', borderBottom: '1px solid var(--cream-3)' }}>
          <div className="inner contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'start' }}>

            {/* LEFT — context + smart selectors */}
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
                    <div style={{ fontSize: '0.88rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>Foursome: $880 · Single: $220 · Sponsorships from $3,000</div>
                  </div>
                  <a href={BOOK} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--blue)', color: '#fff', padding: '0.9rem 1.75rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                    Book your spot directly →
                  </a>
                </>
              )}

              {intent === 'donate' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>Every dollar goes directly to UC Davis HD Center of Excellence.</p>
                  <div style={{ background: 'var(--blue-light)', border: '1px solid var(--blue-faint)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>What your donation funds</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                      $100 · Keeps a family in specialist care<br />
                      $250 · Most chosen by our donors<br />
                      $500 · Funds a month of HD counseling
                    </div>
                  </div>
                  <a href={BOOK} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--blue)', color: '#fff', padding: '0.9rem 1.75rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                    Donate directly →
                  </a>
                </>
              )}

              {intent === 'sponsor' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.25rem' }}>Your brand on the course, in the fight, and associated with something genuinely good.</p>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--sans)' }}>Select your sponsorship tier</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {SPONSOR_TIERS.map(t => (
                      <button key={t.id} type="button" onClick={() => setSponsorTier(t.id)}
                        style={{ display: 'flex', gap: '1rem', padding: '0.85rem 1rem', background: sponsorTier === t.id ? 'var(--blue-light)' : 'var(--cream)', border: sponsorTier === t.id ? '2px solid var(--blue)' : '1px solid var(--cream-3)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s', width: '100%' }}>
                        <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--blue)', minWidth: '72px', fontSize: '0.9rem', flexShrink: 0 }}>{t.price}</span>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t.label}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--ink-dim)' }}>{t.includes}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {intent === 'volunteer' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.25rem' }}>Tournament day is May 29 at Gray&apos;s Crossing, Truckee. No experience needed — just willingness.</p>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--sans)' }}>Which roles interest you? (pick all that apply)</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {VOLUNTEER_ROLES.map(r => (
                      <button key={r.id} type="button" onClick={() => toggleRole(r.id)}
                        style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: volunteerRoles.includes(r.id) ? 'var(--blue-light)' : 'var(--cream)', border: volunteerRoles.includes(r.id) ? '2px solid var(--blue)' : '1px solid var(--cream-3)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s', width: '100%' }}>
                        <span style={{ width: '16px', height: '16px', border: `2px solid ${volunteerRoles.includes(r.id) ? 'var(--blue)' : 'var(--cream-3)'}`, background: volunteerRoles.includes(r.id) ? 'var(--blue)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', transition: 'all 0.15s' }}>
                          {volunteerRoles.includes(r.id) && <span style={{ color: '#fff', fontSize: '0.6rem', fontWeight: 700 }}>✓</span>}
                        </span>
                        <div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>{r.label}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--ink-dim)' }}>{r.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {intent === 'media' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.25rem' }}>Sean is available for interviews. We have photography, event footage, and the Puccini family story on request. HD is underreported — we welcome coverage.</p>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--sans)' }}>Type of coverage</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {MEDIA_TYPES.map(t => (
                      <button key={t.id} type="button" onClick={() => setMediaType(t.id)}
                        style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: mediaType === t.id ? 'var(--blue-light)' : 'var(--cream)', border: mediaType === t.id ? '2px solid var(--blue)' : '1px solid var(--cream-3)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s', width: '100%' }}>
                        <div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>{t.label}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--ink-dim)' }}>{t.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {intent === 'family' && (
                <>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1rem' }}>We are an HD family too. Sean&apos;s wife Christine was diagnosed with HD — this organisation was built from that diagnosis.</p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--ink-mid)', marginBottom: '1.5rem' }}>You are not alone. We will respond to you personally — not with a template.</p>
                  <div style={{ background: '#FFF5F5', border: '1px solid #FECACA', padding: '1.25rem 1.5rem', borderLeft: '3px solid #C0392B' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C0392B', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--sans)' }}>Closest HD specialist care</div>
                    <a href="https://health.ucdavis.edu/huntingtons-disease" target="_blank" rel="noopener" style={{ fontSize: '0.9rem', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>UC Davis HD Center of Excellence →</a>
                    <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', marginTop: '0.3rem' }}>Sacramento, CA · Serves Northern Nevada · 90+ families</div>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT — form */}
            <div>
              {sent ? (
                <div style={{ padding: '3rem 2.5rem', background: 'var(--blue-light)', border: '2px solid var(--blue)', borderTop: '4px solid var(--blue)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Message sent ✓</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-mid)', lineHeight: 1.75 }}>We&apos;ll respond within 24 hours. Sean reads every message personally.</p>
                  <button onClick={resetForm} style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--blue)', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--sans)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: 0 }}>
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2vw,1.7rem)', color: 'var(--ink)', marginBottom: '0.25rem' }}>Your message to Sean</div>

                  {/* Honeypot — invisible to humans, bots fill it */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input tabIndex={-1} autoComplete="off" value={form._hp} onChange={e => set('_hp', e.target.value)} />
                  </div>

                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Your full name</label>
                    <input type="text" placeholder="First and last name" required autoComplete="name"
                      value={form.name} onChange={e => set('name', e.target.value)}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email address</label>
                    <input type="email" placeholder="your@email.com" required autoComplete="email"
                      value={form.email} onChange={e => set('email', e.target.value)}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                    <input type="tel" placeholder="Optional — for quick follow-up" autoComplete="tel"
                      value={form.phone} onChange={e => set('phone', e.target.value)}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                  </div>

                  {/* PLAY fields */}
                  {intent === 'play' && <>
                    <div>
                      <label style={labelStyle}>Group size</label>
                      <select value={form.groupSize} onChange={e => set('groupSize', e.target.value)} required
                        style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="">Select…</option>
                        <option>1 — Single ($220)</option>
                        <option>2 — Two players</option>
                        <option>3 — Three players</option>
                        <option>4 — Full foursome ($880)</option>
                        <option>Multiple foursomes</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Group member names <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                      <input type="text" placeholder="e.g. John Smith, Jane Doe…"
                        value={form.groupNames} onChange={e => set('groupNames', e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                  </>}

                  {/* DONATE fields */}
                  {intent === 'donate' && (
                    <div>
                      <label style={labelStyle}>Intended donation <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                      <select value={form.donateAmount} onChange={e => set('donateAmount', e.target.value)}
                        style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="">Select…</option>
                        <option>$100</option>
                        <option>$250 — most chosen</option>
                        <option>$500</option>
                        <option>$1,000</option>
                        <option>Custom — I&apos;ll mention it below</option>
                      </select>
                    </div>
                  )}

                  {/* SPONSOR fields */}
                  {intent === 'sponsor' && <>
                    <div>
                      <label style={labelStyle}>Business name</label>
                      <input type="text" placeholder="Your company or organisation" required
                        value={form.businessName} onChange={e => set('businessName', e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Website <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                      <input type="url" placeholder="https://yourbusiness.com"
                        value={form.businessWebsite} onChange={e => set('businessWebsite', e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                  </>}

                  {/* VOLUNTEER fields */}
                  {intent === 'volunteer' && <>
                    <div>
                      <label style={labelStyle}>Availability on May 29</label>
                      <select value={form.availability} onChange={e => set('availability', e.target.value)} required
                        style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="">Select…</option>
                        <option>Full day (8am–6pm)</option>
                        <option>Morning only (8am–1pm) — setup + tee-off</option>
                        <option>Afternoon only (1pm–6pm) — on-course + dinner</option>
                        <option>Evening only (4pm–6pm) — dinner + awards</option>
                        <option>Flexible — whatever is needed</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Anything else we should know? <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                      <textarea rows={3} placeholder="Skills, experience, dietary requirements, questions…"
                        value={form.volunteerNote} onChange={e => set('volunteerNote', e.target.value)}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                  </>}

                  {/* MEDIA fields */}
                  {intent === 'media' && <>
                    <div>
                      <label style={labelStyle}>Publication / outlet / channel</label>
                      <input type="text" placeholder="e.g. Reno Gazette Journal, KTVN, your podcast…" required
                        value={form.publication} onChange={e => set('publication', e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Deadline <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}>(optional)</span></label>
                      <input type="text" placeholder="e.g. April 15, flexible, ASAP…"
                        value={form.deadline} onChange={e => set('deadline', e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Story angle / what you&apos;re looking for</label>
                      <textarea rows={4} placeholder="Tell us the angle — we&apos;ll make sure the right person responds…" required
                        value={form.storyAngle} onChange={e => set('storyAngle', e.target.value)}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                  </>}

                  {/* Message — all intents except media (has storyAngle) and volunteer (has volunteerNote) */}
                  {intent !== 'media' && intent !== 'volunteer' && (
                    <div>
                      <label style={labelStyle}>
                        {intent === 'family' ? 'Share whatever you\'re comfortable sharing' : 'Anything else?'}
                        {intent !== 'family' && <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '0.72rem' }}> (optional)</span>}
                      </label>
                      <textarea rows={4}
                        placeholder={
                          intent === 'play'    ? 'Questions about the day, format, or discounted hotel rooms?' :
                          intent === 'donate'  ? 'Questions about tax receipts, recurring donations, how funds are used?' :
                          intent === 'sponsor' ? 'Specific ideas, custom requests, or anything we should know?' :
                          'We read every word. You\'re not alone.'
                        }
                        required={intent === 'family'}
                        value={form.message} onChange={e => set('message', e.target.value)}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--cream-3)')} />
                    </div>
                  )}

                  {error && (
                    <div style={{ background: '#FFF5F5', border: '1px solid #FECACA', padding: '1rem', fontSize: '0.85rem', color: '#C0392B', lineHeight: 1.6 }}>
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={loading}
                    style={{ background: loading ? 'var(--ink-dim)' : 'var(--blue)', color: '#fff', padding: '1.1rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'var(--sans)', alignSelf: 'flex-start', transition: 'background 0.2s' }}>
                    {loading ? 'Sending…' : 'Send to Sean →'}
                  </button>
                  <p style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', marginTop: '-0.25rem' }}>
                    We respond within 24 hours · Sean reads every message personally
                  </p>
                </form>
              )}
            </div>

          </div>
        </section>
      )}

      {/* DIRECT CONTACT */}
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
              {href
                ? <a href={href} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>{value}</a>
                : <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: '#fff', marginBottom: '0.5rem' }}>{value}</div>
              }
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
