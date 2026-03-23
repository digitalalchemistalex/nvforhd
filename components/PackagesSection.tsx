'use client'
import ScrollReveal from '@/components/ScrollReveal'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=packages'

const pkgs = [
  { id: 'title',  badge: '🏆 Title Sponsor',  price: 3500, label: 'Title Sponsor',     what: '4 golfers + lunch + logo everywhere', cta: 'Secure Title Sponsorship',  urgent: 'Only 1 available',  top: true  },
  { id: 'gold',   badge: '🥇 Gold Sponsor',   price: 3000, label: 'Gold Sponsor',      what: '4 golfers + lunch + logo at all events', cta: 'Become a Gold Sponsor', urgent: '2 spots left',       top: true  },
  { id: 'lunch',  badge: '🍽 Lunch Sponsor',  price: 3000, label: 'Lunch Sponsor',     what: '4 golfers included + lunch sponsor credit', cta: 'Sponsor the Lunch',   urgent: '1 spot available',  top: true  },
  { id: 'four',   badge: '⛳ Foursome',        price: 880,  label: 'Golf for 4',        what: 'Golf + box lunch for your group of 4',   cta: 'Book Your Foursome',     urgent: null,                top: false },
  { id: 'single', badge: '⛳ Single Golfer',   price: 220,  label: 'Single Entry',      what: 'Full round + box lunch',                 cta: 'Reserve My Spot',        urgent: null,                top: false },
  { id: 'silver', badge: '🤝 Remote Sponsor', price: 500,  label: "Can't Make It?",    what: 'Support from anywhere — no golf required', cta: 'Sponsor Remotely',     urgent: null,                top: false },
  { id: 'donate', badge: '💙 Direct Donation',price: 100,  label: 'Just Donate',       what: '100% to UC Davis HD Center — no golf needed', cta: 'Donate $100 Now →', urgent: 'Most impactful',  top: false },
  { id: 'hole',   badge: '📍 Hole Sponsor',   price: 100,  label: 'Hole Sign',         what: 'Your name on the course. Every golfer sees it.', cta: 'Sponsor a Hole',   urgent: null,               top: false },
  { id: 'vol',    badge: '🙌 Volunteer',      price: 0,    label: 'Volunteer',         what: 'Help run the day — registration, holes, dinner', cta: 'Volunteer Free',   urgent: null,               top: false },
]

export default function PackagesSection() {
  const top  = pkgs.filter(p => p.top)
  const rest = pkgs.filter(p => !p.top)

  return (
    <section id="packages" className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
      <div className="divider-dark" />
      <div className="inner">

        {/* Header */}
        <ScrollReveal style={{ marginBottom: 'clamp(2.5rem,5vw,5rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>May 29, 2026 · 12:00 PM Shotgun</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <h2 className="display on-light" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)' }}>
              Join us. <em>Your way.</em>
            </h2>
            <p style={{ maxWidth: '260px', fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--ink-dim)', textAlign: 'right' }}>
              Gray&apos;s Crossing — a stunning Sierra Nevada course. Every ticket funds the fight against HD.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Top tier sponsorships — high contrast, bold ── */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
          {top.map(({ id, badge, price, label, what, cta, urgent }, i) => (
            <ScrollReveal key={id} delay={i * 0.1}>
              <div style={{ background: 'var(--white)', border: '1px solid var(--cream-3)', borderTop: '3px solid var(--blue)', padding: 'clamp(1.8rem,3vw,2.8rem)', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {urgent && (
                  <div style={{ position: 'absolute', top: '-1px', right: '1.5rem', background: 'var(--blue)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, padding: '0.28rem 0.7rem' }}>
                    {urgent}
                  </div>
                )}
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '0.75rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                  ${price.toLocaleString()}
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--ink-dim)', marginBottom: '1rem', fontWeight: 400 }}>{label}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-mid)', lineHeight: 1.7, flex: 1, marginBottom: '1.75rem' }}>{what}</p>
                {/* Big blue button — impossible to miss */}
                <a href={BOOK} target="_blank" rel="noopener" style={{
                  display: 'block', textAlign: 'center',
                  background: 'var(--blue)', color: '#fff',
                  padding: '1rem 1rem', fontSize: '0.7rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: 700, textDecoration: 'none',
                  fontFamily: 'var(--sans)',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-dark)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                  {cta} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Lower packages — warm cream, strong CTA ── */}
        <div className="grid-3" style={{ gap: '1px', background: 'var(--cream-3)' }}>
          {rest.map(({ id, badge, price, label, what, cta, urgent }) => (
            <ScrollReveal key={id}>
              <div style={{ background: 'var(--white)', padding: 'clamp(1.4rem,2.5vw,2rem)', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', height: '100%' }}>
                <div style={{ flexShrink: 0, paddingTop: '0.2rem', minWidth: '60px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: price === 0 ? 'var(--ink-dim)' : 'var(--blue)', lineHeight: 1 }}>
                    {price === 0 ? 'Free' : `$${price}`}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 600 }}>{badge}</span>
                    {urgent && <span style={{ fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, padding: '0.15rem 0.5rem' }}>{urgent}</span>}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.98rem', color: 'var(--ink)', marginBottom: '0.3rem', fontWeight: 400 }}>{label}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6, marginBottom: '0.85rem' }}>{what}</p>
                  {/* Solid inline CTA — not a tiny text link */}
                  <a href={BOOK} target="_blank" rel="noopener" style={{
                    display: 'inline-block',
                    background: id === 'donate' ? 'var(--blue)' : 'var(--ink)',
                    color: '#fff',
                    fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontWeight: 700, textDecoration: 'none',
                    padding: '0.6rem 1.1rem',
                    fontFamily: 'var(--sans)',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}>
                    {cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hotel note */}
        <ScrollReveal style={{ marginTop: '2rem' }}>
          <div style={{ padding: '1.2rem 2rem', background: 'var(--blue-light)', border: '1px solid var(--blue-faint)', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>🏨</span>
            <div>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-mid)', fontWeight: 500 }}>Discount rooms at Atlantis &amp; Peppermill in Reno — </span>
              <a href="tel:7756918860" style={{ fontSize: '0.88rem', color: 'var(--blue)', fontWeight: 700, textDecoration: 'none' }}>Call Sean: 775-691-8860</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
