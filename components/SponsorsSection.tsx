import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

interface Sponsor {
  name: string
  sub?: string
  logo?: string
  logoBg?: string
}

const tiers: { tier: string; badge: string; badgeColor: string; sponsors: Sponsor[] }[] = [
  {
    tier: 'Title Sponsor',
    badge: '🏆 Title',
    badgeColor: '#C9A84C',
    sponsors: [{
      name: 'Aguirre Riley',
      sub: 'Estate Planning, Business & Tax Law',
      logo: '/images/aguirre-riley.png',
      logoBg: '#fff',
    }],
  },
  {
    tier: 'Platinum Sponsor',
    badge: '⭐ Platinum',
    badgeColor: '#C0C8D8',
    sponsors: [{
      name: 'UC Davis Health',
      sub: '2025 & 2026 Charity Partner',
      logo: '/images/uc-davis.png',
      logoBg: '#fff',
    }],
  },
  {
    tier: 'Gold Sponsor',
    badge: '🥇 Gold',
    badgeColor: '#D4A84C',
    sponsors: [{
      name: 'C-Hawk',
      logo: '/images/c-hawk.png',
      logoBg: '#1A4A1A',
    }],
  },
  {
    tier: 'Lunch Sponsor',
    badge: '🍽 Lunch',
    badgeColor: '#8899AA',
    sponsors: [{
      name: 'Matt & Kari Woodhead',
      sub: 'Lunch Sponsor',
      logo: '/images/woodhead.jpg',
      logoBg: '#2a3a2a',
    }],
  },
  {
    tier: 'Hole Sponsors',
    badge: '⛳ Hole',
    badgeColor: '#667788',
    sponsors: [
      { name: 'Pace Supply Corp' },
      { name: 'Woodhead Family' },
      { name: 'Blue Reef Enterprises', sub: 'Builders' },
      { name: 'Washoe Wealth Advisors' },
      { name: 'Golf The High Sierra' },
      { name: 'Flowing Tide Pub' },
      { name: 'Rebuilding Together NV', sub: 'Northern Nevada' },
    ],
  },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" style={{
      background: 'var(--deep)',
      padding: '8rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />

      {/* Ghost text atmosphere */}
      <div style={{
        position: 'absolute', right: '-2rem', bottom: '-3rem',
        fontFamily: 'var(--serif)', fontSize: 'clamp(8rem,14vw,18rem)',
        fontWeight: 300, fontStyle: 'italic',
        color: 'rgba(201,168,76,0.025)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>2025</div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <ScrollReveal style={{ marginBottom: '6rem' }}>
          <div className="kicker" style={{ marginBottom: '1rem' }}>2025 Sponsors</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)' }}>
            Those who made it <em>possible.</em>
          </h2>
        </ScrollReveal>

        {/* Logo tiers — Title, Platinum, Gold, Lunch get real logos */}
        <div style={{ marginBottom: '5rem' }}>
          {tiers.filter(t => t.tier !== 'Hole Sponsors').map(({ tier, badge, badgeColor, sponsors }, ti) => (
            <ScrollReveal key={tier} delay={ti * 0.1} style={{ marginBottom: '2px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: tier === 'Title Sponsor' ? '180px 1fr' : '180px 1fr',
                alignItems: 'center',
                background: tier === 'Title Sponsor' ? 'rgba(201,168,76,0.06)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${tier === 'Title Sponsor' ? 'rgba(201,168,76,0.22)' : 'rgba(255,255,255,0.07)'}`,
                padding: '2rem 3rem',
                gap: '3rem',
                transition: 'background 0.3s',
              }}>
                {/* Tier label */}
                <div>
                  <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: badgeColor, fontWeight: 600, marginBottom: '0.3rem',
                  }}>{badge}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{tier}</div>
                </div>

                {/* Sponsor logos */}
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {sponsors.map(({ name, sub, logo, logoBg }) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      {logo && (
                        <div style={{
                          background: logoBg || '#fff',
                          borderRadius: '6px',
                          padding: '10px 16px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          minWidth: '120px', height: '60px',
                          flexShrink: 0,
                        }}>
                          <Image
                            src={logo}
                            alt={name}
                            width={120} height={50}
                            style={{ width: 'auto', height: '40px', objectFit: 'contain', display: 'block' }}
                          />
                        </div>
                      )}
                      <div>
                        <div style={{
                          fontFamily: 'var(--serif)',
                          fontSize: tier === 'Title Sponsor' ? '1.4rem' : '1.1rem',
                          fontWeight: 400,
                          color: tier === 'Title Sponsor' ? 'var(--gold)' : 'rgba(255,255,255,0.88)',
                        }}>{name}</div>
                        {sub && (
                          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.2rem', letterSpacing: '0.02em' }}>{sub}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hole sponsors — compact grid with gold dots */}
        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 500, whiteSpace: 'nowrap' }}>⛳ Hole Sponsors</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2px' }}>
              {tiers.find(t => t.tier === 'Hole Sponsors')!.sponsors.map(({ name, sub }) => (
                <div key={name} style={{
                  padding: '1.4rem 1.8rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  transition: 'all 0.25s',
                }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.82)', fontWeight: 400 }}>{name}</div>
                    {sub && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)', marginTop: '0.1rem' }}>{sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Become a sponsor CTA */}
        <ScrollReveal>
          <div style={{
            marginTop: '5rem',
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: '4rem', alignItems: 'center',
            padding: '3.5rem 4rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}>
            <div>
              <div className="kicker" style={{ marginBottom: '1rem' }}>2026 Opportunities</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.1 }}>
                Become a <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>2026 Sponsor</em>
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.7 }}>
                Title sponsorships, hole sponsorships, and event partnerships available. Contact Sean directly — 775-691-8860.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" className="btn-gold" style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>
                Enquire Now →
              </a>
              <a href="tel:7756918860" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', textAlign: 'center' }}>
                775-691-8860
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
