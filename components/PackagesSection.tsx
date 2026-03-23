import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=packages'

const packages = [
  { id: 'title',  tier: 'Title Sponsor',    price: 3500, highlight: true,  badge: 'Title Sponsor',    desc: '4 golfers · Lunch · Logo at all events', cta: 'Become Title Sponsor' },
  { id: 'gold',   tier: 'Gold Sponsor',     price: 3000, highlight: false, badge: 'Gold Sponsor',     desc: '4 golfers · Lunch · Logo at all events', cta: 'Become Gold Sponsor' },
  { id: 'lunch',  tier: 'Lunch Sponsor',    price: 3000, highlight: false, badge: 'Lunch Sponsor',    desc: '4 golfers · Lunch sponsorship recognition', cta: 'Become Lunch Sponsor' },
  { id: 'four',   tier: 'Foursome',         price: 880,  highlight: false, badge: 'Golf + Lunch',     desc: 'Golf & box lunch for 4 players', cta: 'Book Foursome' },
  { id: 'single', tier: 'Single Golfer',    price: 220,  highlight: false, badge: 'Golf + Lunch',     desc: 'Single golfer & box lunch', cta: 'Book Single' },
  { id: 'silver', tier: 'Silver Sponsor',   price: 500,  highlight: false, badge: 'Remote Sponsor',   desc: "Can't make it? Sponsor from afar.", cta: 'Become Silver Sponsor' },
  { id: 'donate', tier: '$100 Donation',    price: 100,  highlight: false, badge: 'Donate',           desc: 'No golf required. Direct support for UC Davis HD.', cta: 'Donate $100' },
  { id: 'hole',   tier: 'Hole Sign Sponsor',price: 100,  highlight: false, badge: 'Hole Sign',        desc: 'Your name on a hole sign at the event.', cta: 'Sponsor a Hole' },
  { id: 'vol',    tier: 'Volunteer',        price: 0,    highlight: false, badge: 'Free',             desc: "Don't golf but want to help? Sign up!", cta: 'Volunteer' },
]

export default function PackagesSection() {
  return (
    <section id="packages" className="sec-pad-md" style={{ background: 'var(--void)', position: 'relative' }}>
      <div className="sec-divider" />
      <div className="inner">
        <ScrollReveal style={{ marginBottom: 'clamp(2.5rem,5vw,5rem)' }}>
          <div className="kicker" style={{ marginBottom: '1rem' }}>May 29, 2026 · 12:00 PM Shotgun</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)', marginBottom: '1.2rem' }}>
            Join us. <em>Your way.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300, maxWidth: '560px', lineHeight: 1.8 }}>
            Gray&apos;s Crossing Golf Club — Peter Jacobsen designed, sister course to Old Greenwood. Registration 10:30 AM. Lunch included with most packages.
          </p>
        </ScrollReveal>

        {/* Top 3 sponsor packages */}
        <div className="pkg-grid-top grid-3" style={{ marginBottom: '2px' }}>
          {packages.slice(0, 3).map(({ id, tier, price, highlight, badge, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.1}>
              <div style={{ background: highlight ? 'rgba(201,168,76,0.07)' : 'var(--deep)', padding: 'clamp(2rem,4vw,3rem)', border: highlight ? '1px solid rgba(201,168,76,0.2)' : 'none', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)' }} />}
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: highlight ? 'var(--gold)' : 'rgba(245,242,234,0.38)', fontWeight: 600, marginBottom: '0.75rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.4rem)', color: '#fff', marginBottom: '0.4rem' }}>{tier}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: highlight ? 'var(--gold)' : '#fff', lineHeight: 1, marginBottom: '1.2rem' }}>${price.toLocaleString()}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,234,0.58)', fontWeight: 300, lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{desc}</p>
                <a href={BOOK} target="_blank" rel="noopener" className={highlight ? 'btn-gold' : 'btn-outline-gold'} style={{ textAlign: 'center', display: 'block' }}>{cta} →</a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Golf packages */}
        <div className="pkg-grid-mid grid-3" style={{ marginBottom: '2px' }}>
          {packages.slice(3, 6).map(({ id, tier, price, badge, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.08}>
              <div style={{ background: 'var(--deep)', padding: 'clamp(1.5rem,3vw,2.5rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.35)', marginBottom: '0.6rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#fff', marginBottom: '0.4rem' }}>{tier}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 300, color: 'rgba(245,242,234,0.85)', lineHeight: 1, marginBottom: '1rem' }}>{price === 0 ? 'Free' : `$${price.toLocaleString()}`}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,234,0.5)', fontWeight: 300, lineHeight: 1.65, flex: 1, marginBottom: '1.2rem' }}>{desc}</p>
                <a href={BOOK} target="_blank" rel="noopener" className="btn-outline-gold" style={{ textAlign: 'center', display: 'block', fontSize: '0.65rem', padding: '0.65rem 1rem' }}>{cta} →</a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Donation + hole + volunteer */}
        <div className="pkg-grid-bottom grid-3">
          {packages.slice(6).map(({ id, tier, price, badge, desc, cta }) => (
            <ScrollReveal key={id}>
              <div style={{ background: 'var(--deep)', padding: 'clamp(1.2rem,2vw,1.8rem)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.28)', marginBottom: '0.25rem' }}>{badge}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 300, color: price === 0 ? 'rgba(245,242,234,0.55)' : 'var(--gold)', lineHeight: 1 }}>{price === 0 ? 'Free' : `$${price}`}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>{tier}</div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(245,242,234,0.45)', fontWeight: 300, lineHeight: 1.5, marginBottom: '0.6rem' }}>{desc}</p>
                  <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{cta} →</a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hotel note */}
        <ScrollReveal style={{ marginTop: '2.5rem' }}>
          <div style={{ padding: 'clamp(1rem,2vw,1.5rem) clamp(1.2rem,3vw,2.5rem)', border: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.02)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🏨</span>
            <div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.72)', marginBottom: '0.2rem' }}>Discount rooms at Atlantis &amp; Peppermill, Reno</div>
              <a href="tel:7756918860" style={{ fontSize: '0.78rem', color: 'var(--gold)', textDecoration: 'none' }}>Call Sean: 775-691-8860</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
