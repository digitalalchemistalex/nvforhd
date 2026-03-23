import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: '2025 Sponsors',
  description: 'NVforHD 2025 sponsors including Title Sponsor Aguirre Riley, Platinum Sponsor UC Davis Health, Gold Sponsor C-Hawk, and hole sponsors. Become a 2026 sponsor.',
}

interface Sponsor { name: string; sub?: string }
interface Tier { tier: string; isTitle: boolean; sponsors: Sponsor[] }

const tiers: Tier[] = [
  { tier: 'Title Sponsor', isTitle: true, sponsors: [{ name: 'Aguirre Riley', sub: 'Estate Planning · Business & Tax Law' }] },
  { tier: 'Platinum Sponsor', isTitle: false, sponsors: [{ name: 'UC Davis Health', sub: '2025 & 2026 Charity Partner' }] },
  { tier: 'Gold Sponsor', isTitle: false, sponsors: [{ name: 'C-Hawk' }] },
  { tier: 'Lunch Sponsor', isTitle: false, sponsors: [{ name: 'Matt & Kari Woodhead', sub: 'Lunch Sponsor' }] },
  { tier: 'Hole Sponsors', isTitle: false, sponsors: [
    { name: 'Pace Supply Corp' },
    { name: 'Woodhead Family' },
    { name: 'Blue Reef Enterprises Builders' },
    { name: 'Washoe Wealth Advisors' },
    { name: 'Golf The High Sierra' },
    { name: 'Flowing Tide Pub' },
  ]},
  { tier: 'Event Partners', isTitle: false, sponsors: [
    { name: 'Rebuilding Together Northern Nevada', sub: 'www.rtnnv.org · 775.395.9808' },
  ]},
]

export default function SponsorsPage() {
  return (
    <>
      <Nav />
      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>2025 Sponsors</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,5vw,6rem)' }}>
            Those who made it<br /><em>possible.</em>
          </h1>
        </div>
      </div>
      <section style={{ background: 'var(--void)', padding: '8rem 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {tiers.map(({ tier, isTitle, sponsors }) => (
            <ScrollReveal key={tier} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--dimmer)', whiteSpace: 'nowrap' }}>{tier}</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,242,234,0.06)' }} />
              </div>
              <div style={{ display: 'flex', gap: '1px', flexWrap: 'wrap' }}>
                {sponsors.map(({ name, sub }) => (
                  <div key={name} style={{
                    background: isTitle ? 'rgba(201,168,76,0.04)' : 'rgba(245,242,234,0.02)',
                    border: `1px solid ${isTitle ? 'rgba(201,168,76,0.2)' : 'rgba(245,242,234,0.07)'}`,
                    padding: '2rem 3rem', minWidth: isTitle ? '340px' : '220px',
                    transition: 'all 0.3s',
                  }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: isTitle ? '1.4rem' : '1.1rem', fontWeight: 400, color: isTitle ? 'var(--gold)' : 'rgba(245,242,234,0.8)' }}>{name}</div>
                    {sub && <div style={{ fontSize: '0.7rem', color: 'var(--dimmer)', marginTop: '0.4rem' }}>{sub}</div>}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal>
            <div style={{ marginTop: '6rem', padding: '4rem 5rem', border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.02)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
              <div>
                <div className="kicker" style={{ marginBottom: '1rem' }}>2026 Opportunities</div>
                <h2 className="display" style={{ fontSize: 'clamp(1.8rem,3vw,3rem)', marginBottom: '1rem' }}>
                  Become a <em>2026 Sponsor</em>
                </h2>
                <p className="body-text">Join an event that is growing every year. Title sponsorships, hole sponsorships, and custom event partnerships available.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" className="btn-gold">Enquire Now →</a>
                <a href="tel:7756918860" style={{ fontSize: '0.72rem', color: 'var(--dimmer)', textDecoration: 'none' }}>or call: 775-691-8860</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  )
}
