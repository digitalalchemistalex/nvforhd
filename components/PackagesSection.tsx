import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'

const packages = [
  {
    id: 'title',
    tier: 'Title Sponsor',
    price: 3500,
    highlight: true,
    badge: '🏆 Premium',
    desc: '4 golfers · Lunch · Company name & logo displayed at all events',
    cta: 'Become Title Sponsor',
  },
  {
    id: 'gold',
    tier: 'Gold Sponsor',
    price: 3000,
    highlight: false,
    badge: '⭐ Sponsor',
    desc: '4 golfers · Lunch · Company name & logo displayed at all events',
    cta: 'Become Gold Sponsor',
  },
  {
    id: 'lunch',
    tier: 'Lunch Sponsor',
    price: 3000,
    highlight: false,
    badge: '🍽 Sponsor',
    desc: '4 golfers · Lunch included · Lunch sponsorship recognition',
    cta: 'Become Lunch Sponsor',
  },
  {
    id: 'foursome',
    tier: 'Foursome',
    price: 880,
    highlight: false,
    badge: '⛳ Golf',
    desc: 'Golf & box lunch for four players. Best value for a group.',
    cta: 'Book Foursome',
  },
  {
    id: 'single',
    tier: 'Single Golfer',
    price: 220,
    highlight: false,
    badge: '⛳ Golf',
    desc: "Single golfer & box lunch. Perfect if you're flying solo.",
    cta: 'Book Single',
  },
  {
    id: 'silver',
    tier: 'Silver Sponsor',
    price: 500,
    highlight: false,
    badge: '💛 Donate',
    desc: "Can't make it to the tournament? Sponsor from afar. Your name recognised.",
    cta: 'Become Silver Sponsor',
  },
  {
    id: 'donate',
    tier: '$100 Donation',
    price: 100,
    highlight: false,
    badge: '💛 Donate',
    desc: 'No golf required. Pure support for the cause. Every dollar goes directly to UC Davis HD.',
    cta: 'Donate $100',
  },
  {
    id: 'hole',
    tier: 'Hole Sign Sponsor',
    price: 100,
    highlight: false,
    badge: '📍 Sign',
    desc: 'Your name or company on a hole sign at the event.',
    cta: 'Sponsor a Hole',
  },
  {
    id: 'volunteer',
    tier: 'Volunteer',
    price: 0,
    highlight: false,
    badge: '🙌 Free',
    desc: "Don't golf but want to help? Sign up to volunteer. It's going to be a fun day.",
    cta: 'Volunteer Sign Up',
  },
]

export default function PackagesSection() {
  return (
    <section id="packages" style={{
      background: 'var(--void)',
      padding: '8rem 5rem',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <ScrollReveal style={{ marginBottom: '5rem' }}>
          <div className="kicker" style={{ marginBottom: '1rem' }}>May 29, 2026 · 12:00 PM Shotgun Start</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)', marginBottom: '1.5rem' }}>
            Join us. <em>Your way.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, maxWidth: '600px', lineHeight: 1.8 }}>
            Gray&apos;s Crossing Golf Club, Truckee CA — Peter Jacobsen designed, sister course to Old Greenwood.
            Registration 10:30 AM · Shotgun 12:00 PM · Lunch included with most packages.
          </p>
        </ScrollReveal>

        {/* Packages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'rgba(201,168,76,0.07)',
          marginBottom: '2px',
        }}>
          {packages.slice(0, 3).map(({ id, tier, price, highlight, badge, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.1}>
              <div style={{
                background: highlight ? 'rgba(201,168,76,0.07)' : 'var(--deep)',
                padding: '3rem',
                border: highlight ? '1px solid rgba(201,168,76,0.2)' : 'none',
                position: 'relative',
                height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                {highlight && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'var(--gold)',
                  }} />
                )}
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: highlight ? 'var(--gold)' : 'rgba(245,242,234,0.4)', fontWeight: 600, marginBottom: '1rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, color: '#fff', marginBottom: '0.5rem' }}>{tier}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,3.5vw,4rem)', fontWeight: 300, color: highlight ? 'var(--gold)' : '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
                  ${price.toLocaleString()}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300, lineHeight: 1.75, flex: 1, marginBottom: '2rem' }}>{desc}</p>
                <a href={BOOK} target="_blank" rel="noopener"
                  className={highlight ? 'btn-gold' : 'btn-outline-gold'}
                  style={{ textAlign: 'center', display: 'block' }}>
                  {cta} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary packages — golf + donations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'rgba(201,168,76,0.05)',
          marginBottom: '2px',
        }}>
          {packages.slice(3, 6).map(({ id, tier, price, badge, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.08}>
              <div style={{ background: 'var(--deep)', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', fontWeight: 500, marginBottom: '0.75rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, color: '#fff', marginBottom: '0.4rem' }}>{tier}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 300, color: 'rgba(245,242,234,0.85)', lineHeight: 1, marginBottom: '1.2rem' }}>
                  {price === 0 ? 'Free' : `$${price.toLocaleString()}`}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,234,0.55)', fontWeight: 300, lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{desc}</p>
                <a href={BOOK} target="_blank" rel="noopener" className="btn-outline-gold" style={{ textAlign: 'center', display: 'block', fontSize: '0.68rem' }}>
                  {cta} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Donation + hole + volunteer row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'rgba(201,168,76,0.04)' }}>
          {packages.slice(6).map(({ id, tier, price, badge, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.08}>
              <div style={{ background: 'var(--deep)', padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.32)', marginBottom: '0.3rem' }}>{badge}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 300, color: price === 0 ? 'rgba(245,242,234,0.6)' : 'var(--gold)', lineHeight: 1 }}>
                    {price === 0 ? 'Free' : `$${price}`}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>{tier}</div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(245,242,234,0.48)', fontWeight: 300, lineHeight: 1.6, marginBottom: '0.75rem' }}>{desc}</p>
                  <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
                    {cta} →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hotel deal note */}
        <ScrollReveal style={{ marginTop: '3rem' }}>
          <div style={{ padding: '1.5rem 2.5rem', border: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.02)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏨</div>
            <div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.75)', fontWeight: 400, marginBottom: '0.2rem' }}>Discount rooms available at Atlantis &amp; Peppermill, Reno</div>
              <a href="tel:7756918860" style={{ fontSize: '0.8rem', color: 'var(--gold)', textDecoration: 'none' }}>Call Sean for details: 775-691-8860</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
