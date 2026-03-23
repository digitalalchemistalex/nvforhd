'use client'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function SponsorsSection() {
  return (
    <section id="sponsors" style={{
      background: 'var(--deep)',
      padding: 'var(--py-md) var(--px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />

      {/* Atmospheric ghost year */}
      <div style={{
        position: 'absolute', right: '-1rem', bottom: '-4rem',
        fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)',
        fontWeight: 300, fontStyle: 'italic',
        color: 'rgba(201,168,76,0.03)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>2025</div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <ScrollReveal style={{ marginBottom: '6rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '3rem' }}>
          <div>
            <div className="kicker" style={{ marginBottom: '1rem' }}>2025 Sponsors</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)' }}>
              Those who made it <em>possible.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '280px', textAlign: 'right', fontSize: '0.88rem', color: 'rgba(245,242,234,0.45)', fontWeight: 300, lineHeight: 1.75 }}>
            Every sponsor on this page is directly funding the fight against Huntington&apos;s Disease.
          </p>
        </ScrollReveal>

        {/* ── TITLE SPONSOR — Full width, maximum prominence ── */}
        <ScrollReveal style={{ marginBottom: '2px' }}>
          <a
            href="https://www.aguirreriley.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.25)',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              transition: 'background 0.4s, border-color 0.4s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.1)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.06)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.25)'
            }}
          >
            {/* Gold top sweep */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.3))' }} />

            {/* Logo side */}
            <div style={{
              padding: 'clamp(2rem,4vw,4rem) clamp(1.5rem,4vw,4rem)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRight: '1px solid rgba(201,168,76,0.12)',
              background: '#fff',
              minHeight: '200px',
            }}>
              <Image
                src="/images/aguirre-riley.png"
                alt="Aguirre Riley — Estate Planning, Business & Tax Law"
                width={280} height={120}
                style={{ width: '100%', maxWidth: '280px', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Info side */}
            <div style={{ padding: 'clamp(2rem,4vw,4rem) clamp(1.5rem,4vw,4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'var(--gold)', fontWeight: 700, marginBottom: '1.5rem',
              }}>
                <span style={{ width: '20px', height: '2px', background: 'var(--gold)' }} />
                🏆 Title Sponsor
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1rem' }}>
                Aguirre Riley, P.C.
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300, lineHeight: 1.75, marginBottom: '2rem', maxWidth: '380px' }}>
                Estate Planning, Business &amp; Tax Law. Northern Nevada&apos;s trusted legal partner — proudly supporting the fight against Huntington&apos;s Disease.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                aguirreriley.com <span style={{ fontSize: '0.85rem' }}>↗</span>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* ── PLATINUM + GOLD — side by side, prominent ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2px' }} className="sponsors-pair">

          {/* UC Davis Health — Platinum */}
          <ScrollReveal>
            <a
              href="https://health.ucdavis.edu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', flexDirection: 'column',
                background: 'rgba(192,200,216,0.05)',
                border: '1px solid rgba(192,200,216,0.15)',
                textDecoration: 'none', height: '100%',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(192,200,216,0.09)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(192,200,216,0.28)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(192,200,216,0.05)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(192,200,216,0.15)'
              }}
            >
              <div style={{ height: '2px', background: 'linear-gradient(90deg, #C0C8D8, transparent)' }} />
              {/* Logo block */}
              <div style={{ background: '#fff', padding: 'clamp(1.5rem,3vw,3rem) clamp(1.5rem,3vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
                <Image
                  src="/images/uc-davis.png"
                  alt="UC Davis Health — HD Center of Excellence"
                  width={220} height={90}
                  style={{ width: '100%', maxWidth: '220px', height: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div style={{ padding: 'clamp(1.5rem,2.5vw,2.5rem) clamp(1.2rem,2.5vw,3rem)', flex: 1 }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C0C8D8', fontWeight: 600, marginBottom: '0.75rem' }}>⭐ Platinum Sponsor · 2025 &amp; 2026 Charity Partner</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300, color: '#fff', marginBottom: '0.6rem' }}>UC Davis Health</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,234,0.55)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  HD Center of Excellence — the only specialty Huntington&apos;s Disease clinic serving 90+ Northern Nevada families.
                </p>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C0C8D8', opacity: 0.7 }}>health.ucdavis.edu ↗</div>
              </div>
            </a>
          </ScrollReveal>

          {/* C-Hawk — Gold */}
          <ScrollReveal delay={0.1}>
            <a
              href="https://c-hawk.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', flexDirection: 'column',
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.12)',
                textDecoration: 'none', height: '100%',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.08)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.25)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.04)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.12)'
              }}
            >
              {/* Logo block — green bg matches C-Hawk brand */}
              <div style={{ background: '#1A4A1A', padding: 'clamp(1.5rem,3vw,3rem) clamp(1.5rem,3vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
                <Image
                  src="/images/c-hawk.png"
                  alt="C-Hawk Technology — Advanced Manufacturing & Engineering"
                  width={200} height={80}
                  style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div style={{ padding: 'clamp(1.5rem,2.5vw,2.5rem) clamp(1.2rem,2.5vw,3rem)', flex: 1 }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-d)', fontWeight: 600, marginBottom: '0.75rem' }}>🥇 Gold Sponsor</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300, color: '#fff', marginBottom: '0.6rem' }}>C-Hawk Technology</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,234,0.55)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  Advanced Manufacturing &amp; Engineering. Proud sponsor and supporter of NVforHD&apos;s mission to cure Huntington&apos;s Disease.
                </p>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-d)', opacity: 0.8 }}>c-hawk.com ↗</div>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* ── LUNCH SPONSOR ── */}
        <ScrollReveal style={{ marginBottom: '2px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '3rem',
            background: 'rgba(245,242,234,0.03)', border: '1px solid rgba(245,242,234,0.08)',
            padding: '2.5rem 4rem',
          }}>
            <div style={{ background: '#2a3a2a', padding: '1.2rem 2rem', borderRadius: '4px', flexShrink: 0, minWidth: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/woodhead.jpg"
                alt="Matt & Kari Woodhead — Lunch Sponsor"
                width={120} height={60}
                style={{ width: '100%', maxWidth: '120px', height: '50px', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', fontWeight: 500, marginBottom: '0.4rem' }}>🍽 Lunch Sponsor</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: '#fff', fontWeight: 300 }}>Matt &amp; Kari Woodhead</div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,234,0.45)', fontWeight: 300, marginTop: '0.3rem' }}>Generously sponsoring lunch for all participants</p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── HOLE SPONSORS — compact grid ── */}
        <ScrollReveal>
          <div style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.38)', fontWeight: 500, whiteSpace: 'nowrap' }}>⛳ Hole Sponsors</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(245,242,234,0.07)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px' }}>
              {[
                { name: 'Pace Supply Corp', url: null },
                { name: 'Woodhead Family', url: null },
                { name: 'Blue Reef Enterprises', sub: 'Builders', url: null },
                { name: 'Washoe Wealth Advisors', url: null },
                { name: 'Golf The High Sierra', url: 'https://www.golfthehighsierra.com' },
                { name: 'Flowing Tide Pub', url: null },
                { name: 'Rebuilding Together NV', sub: 'Northern Nevada', url: 'https://rebuildingtogethernnv.org' },
              ].map(({ name, sub, url }) => (
                url ? (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{
                    padding: '1.4rem 1.8rem',
                    background: 'rgba(245,242,234,0.03)',
                    border: '1px solid rgba(245,242,234,0.07)',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.06)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.2)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,242,234,0.03)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,242,234,0.07)'
                  }}
                  >
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.7, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(245,242,234,0.85)', fontWeight: 400 }}>{name}</div>
                      {sub && <div style={{ fontSize: '0.7rem', color: 'rgba(245,242,234,0.38)', marginTop: '0.1rem' }}>{sub}</div>}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(201,168,76,0.6)' }}>↗</span>
                  </a>
                ) : (
                  <div key={name} style={{
                    padding: '1.4rem 1.8rem',
                    background: 'rgba(245,242,234,0.03)',
                    border: '1px solid rgba(245,242,234,0.07)',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                  }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.5, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'rgba(245,242,234,0.78)', fontWeight: 400 }}>{name}</div>
                      {sub && <div style={{ fontSize: '0.7rem', color: 'rgba(245,242,234,0.35)', marginTop: '0.1rem' }}>{sub}</div>}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── BECOME A SPONSOR CTA ── */}
        <ScrollReveal>
          <div style={{
            marginTop: '5rem',
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: '2rem', alignItems: 'center',
            padding: 'clamp(2rem,3vw,3.5rem) clamp(1.5rem,3vw,4rem)',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}>
            <div>
              <div className="kicker" style={{ marginBottom: '1rem' }}>2026 Opportunities</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.1 }}>
                Become a <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>2026 Sponsor</em>
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, lineHeight: 1.7 }}>
                Title sponsorships ($3,500), Gold ($3,000), Lunch ($3,000), hole signs ($100), and custom partnerships available. Your logo seen by every golfer, every hole.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" className="btn-gold" style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>
                Enquire Now →
              </a>
              <a href="tel:7756918860" style={{ fontSize: '0.72rem', color: 'rgba(245,242,234,0.45)', textDecoration: 'none', textAlign: 'center' }}>
                Call Sean: 775-691-8860
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
