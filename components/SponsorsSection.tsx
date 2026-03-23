'use client'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const LINKS = {
  aguirre: 'https://www.aguirreriley.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-aguirre',
  ucDavis: 'https://health.ucdavis.edu?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-ucdavis',
  cHawk:   'https://c-hawk.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-chawk',
  rtnnv:   'https://rebuildingtogethernnv.org?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-rtnnv',
  gths:    'https://www.golfthehighsierra.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-gths',
}

export default function SponsorsSection() {
  return (
    /* Dark navy — creates contrast after light packages section */
    <section id="sponsors" className="section-dark dark-section on-dark" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
      <div className="photo-texture" style={{ backgroundImage: "url('/images/event-booth.jpg')", opacity: 0.07, filter: 'grayscale(30%)' }} />
      <div className="divider-gold" />
      {/* Ghost year */}
      <div style={{ position: 'absolute', right: '-1rem', bottom: '-4rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,16vw,20rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>2025</div>

      <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '3rem', marginBottom: 'clamp(3rem,5vw,6rem)', flexWrap: 'wrap' }}>
          <div>
            <div className="kicker" style={{ marginBottom: '1rem' }}>2025 Sponsors</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5rem)', color: 'var(--white)' }}>
              Those who made it <em style={{ color: 'var(--white-dimmer)' }}>possible.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '260px', textAlign: 'right', fontSize: '0.85rem', color: 'var(--white-dimmer)', fontWeight: 300, lineHeight: 1.75 }}>
            Every sponsor on this page directly funds the fight against Huntington&apos;s Disease.
          </p>
        </ScrollReveal>

        {/* ── TITLE SPONSOR — full width ── */}
        <ScrollReveal style={{ marginBottom: '2px' }}>
          <a href={LINKS.aguirre} target="_blank" rel="noopener"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textDecoration: 'none', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderTop: '3px solid var(--gold)', transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background='rgba(201,168,76,0.10)')}
            onMouseLeave={e => (e.currentTarget.style.background='rgba(201,168,76,0.06)')}>
            <div style={{ background: '#fff', padding: 'clamp(2rem,4vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px', borderRight: '1px solid rgba(201,168,76,0.15)' }}>
              <Image src="/images/aguirre-riley.png" alt="Aguirre Riley P.C. — Estate Planning, Business & Tax Law" width={260} height={110} style={{ width: '100%', maxWidth: '240px', height: 'auto', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: 'clamp(2rem,3vw,3.5rem)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem' }}>🏆 Title Sponsor</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 300, color: '#fff', marginBottom: '0.75rem' }}>Aguirre Riley, P.C.</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '340px' }}>Estate Planning, Business &amp; Tax Law. Northern Nevada&apos;s trusted legal partner — proudly supporting the fight against Huntington&apos;s Disease.</p>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>aguirreriley.com ↗</div>
            </div>
          </a>
        </ScrollReveal>

        {/* ── UC Davis + C-Hawk side by side ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2px' }}>
          {[
            { href: LINKS.ucDavis, logo: '/images/uc-davis.png', logoBg: '#fff', alt: 'UC Davis Health — HD Center of Excellence', badge: '⭐ Platinum · 2025 & 2026 Charity Partner', name: 'UC Davis Health', desc: 'HD Center of Excellence — the only HD specialty clinic serving 90+ Northern Nevada families.', link: 'health.ucdavis.edu', border: 'rgba(192,200,216,0.3)' },
            { href: LINKS.cHawk,   logo: '/images/c-hawk.png',   logoBg: '#1A4A1A', alt: 'C-Hawk Technology — Advanced Manufacturing & Engineering', badge: '🥇 Gold Sponsor', name: 'C-Hawk Technology', desc: 'Advanced Manufacturing & Engineering. Proud supporter of NVforHD\'s mission.', link: 'c-hawk.com', border: 'rgba(201,168,76,0.15)' },
          ].map(({ href, logo, logoBg, alt, badge, name, desc, link, border }) => (
            <a key={href} href={href} target="_blank" rel="noopener"
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'rgba(255,255,255,0.03)', border: `1px solid ${border}`, transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.background='rgba(255,255,255,0.03)')}>
              <div style={{ background: logoBg, padding: 'clamp(1.5rem,3vw,3rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '130px' }}>
                <Image src={logo} alt={alt} width={200} height={80} style={{ width: '100%', maxWidth: '180px', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: 'clamp(1.2rem,2vw,2rem)', flex: 1 }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--white-dimmer)', fontWeight: 600, marginBottom: '0.5rem' }}>{badge}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.4rem)', color: '#fff', marginBottom: '0.4rem' }}>{name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{desc}</p>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.7 }}>{link} ↗</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Hole sponsors compact grid ── */}
        <ScrollReveal style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--white-dimmer)', fontWeight: 500, whiteSpace: 'nowrap' }}>⛳ Hole &amp; Event Sponsors</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px' }}>
            {[
              { name: 'Matt & Kari Woodhead', sub: 'Lunch Sponsor', url: null },
              { name: 'Pace Supply Corp', sub: 'Hole Sponsor', url: null },
              { name: 'Blue Reef Enterprises', sub: 'Builders · Hole Sponsor', url: null },
              { name: 'Washoe Wealth Advisors', sub: 'Hole Sponsor', url: null },
              { name: 'Golf The High Sierra', sub: 'Event Partner', url: LINKS.gths },
              { name: 'Flowing Tide Pub', sub: 'Hole Sponsor', url: null },
              { name: 'Rebuilding Together NV', sub: 'Event Partner', url: LINKS.rtnnv },
            ].map(({ name, sub, url }) => {
              const inner = (
                <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '0.75rem', alignItems: 'center', height: '100%', transition: 'background 0.2s' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'rgba(245,242,234,0.82)' }}>{name}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--white-dimmer)', marginTop: '0.1rem' }}>{sub}{url && ' ↗'}</div>
                  </div>
                </div>
              )
              return url ? (
                <a key={name} href={url} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}
                  onMouseEnter={e => ((e.currentTarget.firstChild as HTMLElement).style.background='rgba(201,168,76,0.07)')}
                  onMouseLeave={e => ((e.currentTarget.firstChild as HTMLElement).style.background='rgba(255,255,255,0.025)')}>
                  {inner}
                </a>
              ) : <div key={name}>{inner}</div>
            })}
          </div>
        </ScrollReveal>

        {/* ── Become sponsor CTA ── */}
        <ScrollReveal style={{ marginTop: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center', padding: 'clamp(2rem,3vw,3rem) clamp(2rem,3vw,3.5rem)', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.18)' }}>
            <div>
              <div className="kicker" style={{ marginBottom: '0.75rem' }}>2026 Opportunities</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>Become a 2026 Sponsor</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: 1.7 }}>
                Title ($3,500), Gold ($3,000), Lunch ($3,000), hole signs ($100), and custom partnerships available.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'center', flexShrink: 0 }}>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-cta" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>Enquire Now →</a>
              <a href="tel:7756918860" style={{ fontSize: '0.68rem', color: 'var(--white-dimmer)', textDecoration: 'none' }}>775-691-8860</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
