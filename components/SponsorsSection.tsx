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
            {/* Flip: white card on cream section — maximum contrast, stands out from dark sponsors above */}
            <div style={{
              background: 'var(--white)',
              border: '2px solid var(--blue)',
              padding: 'clamp(2.5rem,4vw,4rem)',
              position: 'relative',
              overflow: 'hidden',
            }} className="sponsor-cta-grid">
              {/* Attention corner — can't miss it */}
              <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--blue)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, padding: '0.35rem 1rem' }}>
                Limited Spots · 2026
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.1 }}>
                  Put your name on the fight<br />against Huntington's Disease.
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: '0' }}>
                  Title ($3,500) · Gold ($3,000) · Lunch ($3,000) · Hole signs ($100) · Custom packages available.<br />
                  <strong style={{ color: 'var(--ink)' }}>Your logo on the course. Your name in the fight. 100% goes to UC Davis HD families.</strong>
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'stretch', flexShrink: 0 }}>
                <a
                  href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=sponsors-cta"
                  style={{
                    display: 'block', textAlign: 'center',
                    background: 'var(--blue)', color: '#fff',
                    padding: '1.1rem 1.5rem',
                    fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontWeight: 700, textDecoration: 'none',
                    fontFamily: 'var(--sans)', whiteSpace: 'nowrap',
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-dark)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                  Get Sponsorship Info →
                </a>
                <a href="tel:7756918860" style={{ display: 'block', textAlign: 'center', fontSize: '0.72rem', color: 'var(--ink-dim)', textDecoration: 'none', fontWeight: 500 }}>
                  📞 775-691-8860 · Call Sean
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
