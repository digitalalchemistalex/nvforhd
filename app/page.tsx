import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import LetterSection from '@/components/LetterSection'
import SponsorsSection from '@/components/SponsorsSection'
import PackagesSection from '@/components/PackagesSection'
import MobileCTADock from '@/components/MobileCTADock'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Charity Golf Tournament May 29, 2026",
  description: "Annual charity golf tournament at Gray's Crossing, Truckee CA — May 29, 2026. All proceeds to UC Davis HD Center of Excellence. Packages from $100.",
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-golf'
const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-donate-100'

export default function HomePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />

      {/* ══════════════════════════════════════
          HERO — Dark, full photo, cinematic
      ══════════════════════════════════════ */}
      <section className="section-hero dark-section" style={{ height: '100vh', minHeight: '640px', display: 'flex', alignItems: 'flex-end' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-crowd.jpg')", opacity: 0.35, animation: 'drift 30s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(5,6,10,0.96) 0%, rgba(5,6,10,0.78) 45%, rgba(5,6,10,0.25) 100%), linear-gradient(to top, rgba(5,6,10,1) 0%, rgba(5,6,10,0.5) 35%, transparent 65%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.6),transparent)' }} />

        <div className="inner on-dark" style={{ padding: 'clamp(1.5rem,4vw,5rem)', paddingBottom: 'clamp(5rem,10vw,8rem)', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '2rem', animation: 'fadeup 0.9s var(--ease) 0.2s both' }}>
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
            Nevada for Huntington&apos;s Disease &nbsp;·&nbsp; Truckee, California
          </div>

          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4.5rem,10vw,13rem)', fontWeight: 300, lineHeight: 0.88, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '0.15em', animation: 'fadeup 1.1s var(--ease) 0.4s both', textShadow: '0 4px 60px rgba(0,0,0,0.4)' }}>
            Let&apos;s<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>Cure</em>{' '}
            <span style={{ color: 'var(--gold)' }}>HD.</span>
          </h1>

          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem,2vw,1.6rem)', color: 'rgba(245,242,234,0.62)', margin: '1.2rem 0 2.5rem', animation: 'fadeup 0.9s var(--ease) 0.7s both' }}>
            May 29, 2026 &nbsp;·&nbsp; Gray&apos;s Crossing Golf Club &nbsp;·&nbsp; 12:00 PM Shotgun
          </p>

          <p style={{ fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,242,234,0.82)', maxWidth: '480px', marginBottom: '3rem', borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', animation: 'fadeup 0.9s var(--ease) 0.9s both' }}>
            Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease.
            He didn&apos;t hold a fundraiser. <strong style={{ color: '#fff' }}>He started a fight.</strong><br />
            Two years in — <strong style={{ color: '#fff' }}>$50,000 raised, one family changed forever.</strong>
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeup 0.9s var(--ease) 1.05s both' }}>
            <a href={D100} target="_blank" rel="noopener" className="btn-gold">Donate $100 →</a>
            <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold">Play Golf May 29 ↗</a>
          </div>
        </div>

        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '3rem', right: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: 'rgba(245,242,234,0.22)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', zIndex: 2 }}>
          <div style={{ width: '1px', height: '60px', background: 'rgba(245,242,234,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30px', background: 'linear-gradient(to bottom,transparent,var(--gold))', animation: 'scrolldrop 2.5s ease-in-out infinite' }} />
          </div>
          Scroll
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE DISEASE — LIGHT section
      ══════════════════════════════════════ */}
      <section id="cause" className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        {/* HD ghost text */
        <div style={{ position: 'absolute', right: '-1rem', bottom: '-3rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(28,26,22,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>HD</div>

        <div className="inner grid-2">
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>The Disease</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)', marginBottom: '2rem', color: 'var(--ink)' }}>
              Terminal.<br />Hereditary.<br /><em style={{ color: 'var(--ink-dimmer)' }}>No cure.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
              HD is a brain disorder with no known cure — terminal. It causes deterioration of nerve cells likened to having <strong style={{ color: 'var(--ink)' }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)' }}>
              Every child of an HD parent has a <strong style={{ color: 'var(--ink)' }}>50% chance of inheriting it.</strong> This disease struck our family. It will not defeat us.
            </p>
          </ScrollReveal>

          <div>
            {[
              { n: '01', body: <><strong>No known cure.</strong> HD is always fatal. Symptoms emerge 30–50 — after most people have already had children who may carry the same gene.</> },
              { n: '02', body: <><strong>50% hereditary rate.</strong> IVF with genetic screening permanently breaks the cycle. Your donation funds this for families who cannot afford it.</> },
              { n: '03', body: <><strong>UC Davis HD Center of Excellence</strong> — the only specialty clinic serving 90+ Northern Nevada HD families. Runs entirely on private donation.</> },
              { n: '04', body: <><strong>Every dollar goes direct.</strong> $100 donation. $220 single golfer. $880 foursome. Zero overhead. All to UC Davis HD.</> },
            ].map(({ n, body }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.2rem', padding: '1.75rem 0', borderBottom: `1px solid var(--cream-3)` }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.78rem', color: 'var(--gold-dark)', paddingTop: '0.2rem' }}>{n}</div>
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--ink-dim)' }}>{body}</div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="card-light" style={{ marginTop: '2.5rem', padding: '2.5rem', borderRadius: '2px' }}>
                <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink-dim)', lineHeight: 1.75, marginBottom: '2rem', borderLeft: '3px solid var(--gold-dark)', paddingLeft: '1.25rem' }}>
                  &ldquo;Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
                  <strong style={{ color: 'var(--gold-dark)', fontWeight: 600, fontStyle: 'normal', display: 'block', marginTop: '0.5rem', fontSize: '0.85rem' }}>— Rylee Puccini, 2026</strong>
                </blockquote>
                <div className="on-light"><DonateBlock /></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — Dark navy band
      ══════════════════════════════════════ */}
      <section className="section-dark dark-section on-dark" style={{ position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-carts.jpg')", opacity: 0.08, filter: 'grayscale(20%)' }} />
        <div className="inner grid-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)', position: 'relative', zIndex: 1 }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised in our\nfirst two years' },
            { n: '90',   sup: '+', label: 'Northern Nevada\nHD families served' },
            { n: '135',  sup: '+', label: 'IVF families helped\nnation-wide' },
            { n: '1',    sup: '',  label: 'HD-free baby\non the way', gold: true },
          ].map(({ n, sup, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.1} style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1rem,3vw,3rem)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5vw,6rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : '#fff', marginBottom: '0.75rem' }}>
                {n}<span style={{ color: 'var(--gold)', fontSize: '0.55em' }}>{sup}</span>
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--white-dimmer)', lineHeight: 1.65, whiteSpace: 'pre-line', fontWeight: 500 }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE — Light section
      ══════════════════════════════════════ */}
      <section id="years" className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem,5vw,5rem)', gap: '2rem', flexWrap: 'wrap' }}>
              <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6rem)', color: 'var(--ink)' }}>
                Three years.<br /><em style={{ color: 'var(--ink-dimmer)' }}>Real results.</em>
              </h2>
              <p style={{ maxWidth: '260px', textAlign: 'right', fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300 }}>
                Every dollar goes to one chosen cause. No overhead. Just impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3 on-light" style={{ gap: '1.5rem' }}>
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', title: '$25,000 for HelpCureHD', body: "Sold out. Every dollar funded IVF so Brandon and Rylee Puccini could have children free from Huntington's. Rylee is now pregnant.", cta: 'Their story →', href: '/causes' },
              { year: '2025', tag: 'UC Davis · 90+ Families', title: 'HD Center of Excellence', body: 'Funded the only HD specialty clinic in Northern Nevada — neurologists, psychiatrists, genetic counselors dedicated entirely to HD.', cta: 'Read more →', href: '/causes' },
              { year: '2026', tag: "May 29 · Gray's Crossing", title: 'UC Davis — Again', body: "Peter Jacobsen course. 12PM shotgun. Every registration keeps UC Davis HD running for 90+ Northern Nevada families.", cta: 'Join us →', href: GOLF },
            ].map(({ year, tag, title, body, cta, href }, i) => (
              <ScrollReveal key={year} delay={i * 0.15}>
                <div className="year-block">
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,5vw,5rem)', fontWeight: 300, color: 'rgba(28,26,22,0.08)', lineHeight: 1, marginBottom: '1.5rem' }}>{year}</div>
                  <div style={{ display: 'inline-block', background: 'var(--cream-2)', border: '1px solid var(--cream-3)', color: 'var(--ink-dimmer)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.2rem 0.7rem', marginBottom: '1rem', fontWeight: 600 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.45rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300, flex: 1 }}>{body}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ marginTop: '2rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gold-dark)', textDecoration: 'none' }}>
                    {cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Letter, Packages, Sponsors each have their own bg */}
      <LetterSection />
      <PackagesSection />
      <SponsorsSection />
      <Footer />
    </>
  )
}

