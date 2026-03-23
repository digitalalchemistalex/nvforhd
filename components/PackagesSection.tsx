import ScrollReveal from '@/components/ScrollReveal'

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=packages'

const pkgs = [
  { id: 'title',  badge: '🏆 Title Sponsor',  price: 3500, label: 'Title Sponsor',    desc: '4 golfers · Lunch · Logo at all events', cta: 'Become Title Sponsor', top: true },
  { id: 'gold',   badge: '🥇 Gold Sponsor',   price: 3000, label: 'Gold Sponsor',     desc: '4 golfers · Lunch · Logo at all events', cta: 'Become Gold Sponsor', top: true },
  { id: 'lunch',  badge: '🍽 Lunch Sponsor',  price: 3000, label: 'Lunch Sponsor',    desc: '4 golfers included · Lunch sponsorship', cta: 'Become Lunch Sponsor', top: true },
  { id: 'four',   badge: '⛳ Golf + Lunch',    price: 880,  label: 'Foursome',         desc: 'Golf & box lunch for 4 players',         cta: 'Book Foursome', top: false },
  { id: 'single', badge: '⛳ Single',          price: 220,  label: 'Single Golfer',    desc: 'Single golfer with box lunch',           cta: 'Book Single', top: false },
  { id: 'silver', badge: '🤝 Remote',          price: 500,  label: 'Silver Sponsor',   desc: "Can't make it? Sponsor from afar",       cta: 'Sponsor Remotely', top: false },
  { id: 'donate', badge: '💙 Donation',        price: 100,  label: '$100 Donation',    desc: 'No golf required. Direct to UC Davis HD',cta: 'Donate $100', top: false },
  { id: 'hole',   badge: '📍 Hole Sign',       price: 100,  label: 'Hole Sign Sponsor',desc: 'Your name on a hole sign at the event',  cta: 'Sponsor a Hole', top: false },
  { id: 'vol',    badge: '🙌 Free',            price: 0,    label: 'Volunteer',        desc: "Want to help on the day? Sign up free",  cta: 'Volunteer', top: false },
]

export default function PackagesSection() {
  const top = pkgs.filter(p => p.top)
  const rest = pkgs.filter(p => !p.top)
  return (
    /* Light section — packages are highly scannable on white */
    <section id="packages" className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
      <div className="divider-dark" />
      <div className="inner">
        <ScrollReveal style={{ marginBottom: 'clamp(2.5rem,5vw,5rem)' }}>
          <div className="kicker" style={{ marginBottom: '1rem' }}>May 29, 2026 · 12:00 PM Shotgun</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)', color: 'var(--ink)' }}>
              Join us. <em style={{ color: 'var(--ink-dimmer)' }}>Your way.</em>
            </h2>
            <p style={{ maxWidth: '280px', fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--ink-dim)', textAlign: 'right' }}>
              Gray&apos;s Crossing Golf Club — Peter Jacobsen designed, sister to Old Greenwood. Lunch included with most packages.
            </p>
          </div>
        </ScrollReveal>

        {/* Top tier — 3 cols */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
          {top.map(({ id, badge, price, label, desc, cta }, i) => (
            <ScrollReveal key={id} delay={i * 0.1}>
              <div className="card-light" style={{ padding: 'clamp(1.8rem,3vw,2.8rem)', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '3px solid var(--gold-dark)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 700, marginBottom: '0.75rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: 'var(--ink)', marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1, marginBottom: '1rem' }}>
                  ${price.toLocaleString()}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-dim)', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{desc}</p>
                <a href={BOOK} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'var(--ink)', color: 'var(--cream)', padding: '0.85rem 1rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', transition: 'background 0.2s' }}>
                  {cta} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lower packages — compact list style */}
        <div className="grid-3" style={{ gap: '1px', background: 'var(--cream-3)' }}>
          {rest.map(({ id, badge, price, label, desc, cta }) => (
            <ScrollReveal key={id}>
              <div style={{ background: 'var(--cream)', padding: 'clamp(1.2rem,2.5vw,1.8rem) clamp(1.2rem,2.5vw,2rem)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', height: '100%' }}>
                <div style={{ flexShrink: 0, paddingTop: '0.1rem' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 300, color: price === 0 ? 'var(--ink-dimmer)' : 'var(--gold-dark)', lineHeight: 1 }}>
                    {price === 0 ? 'Free' : `$${price}`}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', marginBottom: '0.25rem', fontWeight: 600 }}>{badge}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{label}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.55, marginBottom: '0.6rem' }}>{desc}</p>
                  <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: 600 }}>{cta} →</a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hotel note */}
        <ScrollReveal style={{ marginTop: '2rem' }}>
          <div style={{ padding: '1.2rem 2rem', background: 'var(--blue-light)', border: '1px solid #C7D7F7', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>🏨</span>
            <div>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-dim)' }}>Discount rooms at Atlantis &amp; Peppermill, Reno — </span>
              <a href="tel:7756918860" style={{ fontSize: '0.88rem', color: 'var(--blue-hd)', fontWeight: 600, textDecoration: 'none' }}>Call Sean: 775-691-8860</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
