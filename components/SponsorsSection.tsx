'use client'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const UTM = '?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content='

const LINKS = {
  aguirre:      `https://www.aguirreriley.com${UTM}sponsors-aguirre`,
  ucDavis:      `https://health.ucdavis.edu/huntingtons-disease${UTM}sponsors-ucdavis`,
  cHawk:        `https://c-hawk.com${UTM}sponsors-chawk`,
  rtnnv:        `https://rebuildingtogethernnv.org${UTM}sponsors-rtnnv`,
  gths:         `https://www.golfthehighsierra.com${UTM}sponsors-gths`,
  paceSup:      `https://www.pacesupply.com${UTM}sponsors-pace`,
  flowingTide:  `https://flowingtidepub.com${UTM}sponsors-flowingtide`,
}

export default function SponsorsSection() {
  return (
    <>
      {/* ── DARK SECTION: Title + Major Sponsors ── */}
      <section id="sponsors" className="section-dark dark-section on-dark" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-booth.jpg')", opacity: 0.07, filter: 'grayscale(30%)' }} />
        <div className="divider-gold" />

        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
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
            <a href={LINKS.aguirre} target="_blank" rel="noopener noreferrer"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderTop: '3px solid #E8C97A', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.07)')}
              onMouseLeave={e => (e.currentTarget.style.background='rgba(255,255,255,0.04)')}>
              <div style={{ background: '#fff', padding: 'clamp(2rem,4vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <Image src="/images/aguirre-riley.png" alt="Aguirre Riley P.C. — Estate Planning, Business & Tax Law" width={260} height={110} style={{ width: '100%', maxWidth: '240px', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: 'clamp(2rem,3vw,3.5rem)' }}>
                <div style={{ display: 'inline-block', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem', background: '#E8C97A', color: '#0F1729', padding: '0.3rem 0.75rem' }}>🏆 Title Sponsor</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 300, color: '#fff', marginBottom: '0.75rem' }}>Aguirre Riley, P.C.</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '340px' }}>
                  Estate Planning, Business &amp; Tax Law. Northern Nevada&apos;s trusted legal partner — proudly supporting the fight against Huntington&apos;s Disease.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8C97A', fontWeight: 600, background: 'rgba(232,201,122,0.1)', border: '1px solid rgba(232,201,122,0.3)', padding: '0.45rem 0.9rem' }}>
                  aguirreriley.com ↗
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* ── UC Davis + C-Hawk side by side ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2px' }}>
            {[
              {
                href: LINKS.ucDavis,
                logo: '/images/uc-davis.png', logoBg: '#fff',
                alt: 'UC Davis Health — Huntington\'s Disease Center of Excellence',
                badgeText: 'Platinum · 2025 & 2026 Charity Partner',
                badgeBg: '#1D4ED8', badgeColor: '#fff',
                name: 'UC Davis Health',
                desc: 'Huntington\'s Disease Center of Excellence — the only HD specialty clinic serving 90+ Northern Nevada families.',
                linkLabel: 'health.ucdavis.edu',
                accentTop: '#1D4ED8',
              },
              {
                href: LINKS.cHawk,
                logo: '/images/c-hawk.png', logoBg: '#1A4A1A',
                alt: 'C-Hawk Technology — Advanced Manufacturing & Engineering',
                badgeText: 'Gold Sponsor',
                badgeBg: '#E8C97A', badgeColor: '#0F1729',
                name: 'C-Hawk Technology',
                desc: 'Advanced Manufacturing & Engineering. Proud supporter of NVforHD\'s mission to defeat Huntington\'s Disease.',
                linkLabel: 'c-hawk.com',
                accentTop: '#E8C97A',
              },
            ].map(({ href, logo, logoBg, alt, badgeText, badgeBg, badgeColor, name, desc, linkLabel, accentTop }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderTop: `3px solid ${accentTop}`, transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background='rgba(255,255,255,0.03)')}>
                <div style={{ background: logoBg, padding: 'clamp(1.5rem,3vw,3rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '130px' }}>
                  <Image src={logo} alt={alt} width={200} height={80} style={{ width: '100%', maxWidth: '180px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: 'clamp(1.2rem,2vw,2rem)', flex: 1 }}>
                  <div style={{ display: 'inline-block', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem', background: badgeBg, color: badgeColor, padding: '0.25rem 0.6rem' }}>{badgeText}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.8vw,1.4rem)', color: '#fff', marginBottom: '0.4rem' }}>{name}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--white-dim)', lineHeight: 1.65, marginBottom: '1rem' }}>{desc}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8C97A', fontWeight: 600, background: 'rgba(232,201,122,0.08)', border: '1px solid rgba(232,201,122,0.25)', padding: '0.35rem 0.75rem' }}>
                    {linkLabel} ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHT SECTION: Hole & Event Sponsors ── */}
      <section className="on-light" style={{ background: 'var(--cream)', padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        {/* subtle top rule */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--blue-hd) 30%, var(--blue-hd) 70%, transparent)' }} />

        <div className="inner">
          <ScrollReveal style={{ marginBottom: 'clamp(2.5rem,4vw,5rem)' }}>
            <div className="kicker" style={{ marginBottom: '0.75rem' }}>⛳ Hole &amp; Event Sponsors</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', maxWidth: '520px', lineHeight: 1.75 }}>
              These generous businesses and individuals sponsored holes and events at the 2025 tournament — every sign on the course was a direct contribution to the cure.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
            {[
              { name: 'Matt & Kari Woodhead',  sub: 'Lunch Sponsor',              url: null },
              { name: 'Pace Supply Corp',       sub: 'Hole Sponsor',               url: LINKS.paceSup },
              { name: 'Blue Reef Enterprises',  sub: 'Builders · Hole Sponsor',    url: null },
              { name: 'Washoe Wealth Advisors', sub: 'Hole Sponsor',               url: null },
              { name: 'Golf The High Sierra',   sub: 'Event Partner',              url: LINKS.gths },
              { name: 'Flowing Tide Pub',       sub: 'Hole Sponsor',               url: LINKS.flowingTide },
              { name: 'Rebuilding Together NV', sub: 'Event Partner',              url: LINKS.rtnnv },
            ].map(({ name, sub, url }) => {
              const card = (
                <div style={{
                  padding: '1.4rem 1.6rem',
                  background: '#fff',
                  border: '1px solid var(--cream-3)',
                  borderLeft: `3px solid ${url ? 'var(--blue-hd)' : 'var(--cream-3)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  height: '100%',
                  transition: 'box-shadow 0.2s, border-left-color 0.2s',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.3 }}>{name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--ink-dim)', marginTop: '0.25rem', letterSpacing: '0.04em' }}>{sub}</div>
                  </div>
                  {url && (
                    <div style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blue-hd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#fff', fontWeight: 700 }}>↗</div>
                  )}
                </div>
              )
              return url ? (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}
                  onMouseEnter={e => { const d = e.currentTarget.firstChild as HTMLElement; d.style.boxShadow='0 4px 20px rgba(29,78,216,0.12)'; d.style.borderLeftColor='var(--blue-hd)' }}
                  onMouseLeave={e => { const d = e.currentTarget.firstChild as HTMLElement; d.style.boxShadow='none'; d.style.borderLeftColor='var(--blue-hd)' }}>
                  {card}
                </a>
              ) : <div key={name}>{card}</div>
            })}
          </div>

          {/* ── Become sponsor CTA ── */}
          <ScrollReveal style={{ marginTop: '4rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '3rem',
              alignItems: 'center',
              padding: 'clamp(2rem,3vw,3rem) clamp(2rem,3vw,3.5rem)',
              background: 'var(--navy)',
              borderLeft: '4px solid var(--blue-hd)',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--white-dimmer)', fontWeight: 600, marginBottom: '0.75rem' }}>2026 Opportunities</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>Become a 2026 Sponsor</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: 1.7 }}>
                  Title ($3,500), Gold ($3,000), Lunch ($3,000), hole signs ($100), and custom partnerships available.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'center', flexShrink: 0 }}>
                <a
                  href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-cta"
                  style={{
                    background: 'var(--blue-hd)', color: '#fff', padding: '1rem 2.2rem',
                    fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    fontWeight: 700, textDecoration: 'none', display: 'inline-block',
                    fontFamily: 'var(--sans)', whiteSpace: 'nowrap', transition: 'background 0.25s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background='#1A3A9E')}
                  onMouseLeave={e => (e.currentTarget.style.background='var(--blue-hd)')}>
                  Enquire Now →
                </a>
                <a href="tel:7756918860" style={{ fontSize: '0.68rem', color: 'var(--white-dimmer)', textDecoration: 'none' }}>775-691-8860</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
