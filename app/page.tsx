import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import LetterSection from '@/components/LetterSection'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Golf Tournament May 29, 2026",
  description: "NVforHD raises funds to fight Huntington's Disease through an annual charity golf tournament at Gray's Crossing, Truckee CA. Donate or play — May 29, 2026.",
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'
const D50  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-50'
const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-500'

// Curated Unsplash images — contextually matched to each section
const IMG = {
  // Golf course with Sierra Nevada pine mountains — matches Old Greenwood / Gray's Crossing
  hero: 'https://images.unsplash.com/photo-1723772502867-24dbac169716?w=2400&q=90&fit=crop&fm=jpg',
  // Four generations of hands reaching toward center — HD is a family disease
  cause: 'https://images.unsplash.com/photo-1761233976686-f43410a4f5d8?w=1600&q=85&fit=crop&fm=jpg',
  // Couple holding ultrasound — mirrors the Puccini letter exactly
  letter: 'https://images.unsplash.com/photo-1770134846141-a7a11976145d?w=2200&q=90&fit=crop&fm=jpg',
  // Golden hour fairway — warm, dramatic, tournament feel
  fairway: 'https://images.unsplash.com/photo-1582483955632-66bf303c11dc?w=2000&q=85&fit=crop&fm=jpg',
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NVforHD Annual Golf Tournament 2026',
  startDate: '2026-05-29',
  location: { '@type': 'Place', name: "Gray's Crossing Golf Club", address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA' } },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <Nav />

      {/* ═══════════════════════════════════════════════
          HERO — Sierra golf course, pine trees, mountains
          Psychology: Establish place + gravitas immediately
      ═══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '720px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--void)' }}>

        {/* Hero photo — Sierra Nevada golf course with pine mountains */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${IMG.hero}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          transform: 'scale(1.06)',
          animation: 'drift 30s ease-in-out infinite alternate',
          willChange: 'transform',
        }} />

        {/* Cinematic overlay — strong left dark, fades right, heavy bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(108deg, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.78) 38%, rgba(5,6,10,0.3) 65%, rgba(5,6,10,0.15) 100%), linear-gradient(to top, rgba(5,6,10,1) 0%, rgba(5,6,10,0.7) 28%, transparent 55%)',
        }} />

        {/* Gold hairline top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.55 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', padding: '0 5rem 7rem', width: '100%' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold)', fontWeight: 500, marginBottom: '2.5rem',
            animation: 'fadeup 0.9s var(--ease) 0.2s both',
          }}>
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
            Nevada for Huntington&apos;s Disease &nbsp;·&nbsp; Truckee, California
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(5rem, 9.5vw, 12rem)',
            fontWeight: 300, lineHeight: 0.88, color: '#FFFFFF',
            letterSpacing: '-0.02em', marginBottom: '0.12em',
            animation: 'fadeup 1.1s var(--ease) 0.45s both',
            textShadow: '0 4px 48px rgba(0,0,0,0.6)',
          }}>
            Let&apos;s<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.42)' }}>Cure</em>{' '}
            <span style={{ color: 'var(--gold)' }}>HD.</span>
          </h1>

          <div style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2vw, 1.8rem)', color: 'rgba(245,242,234,0.6)',
            margin: '1.5rem 0 4rem', letterSpacing: '0.02em',
            animation: 'fadeup 0.9s var(--ease) 0.75s both',
          }}>
            May 29, 2026 &nbsp;·&nbsp; Gray&apos;s Crossing Golf Club
          </div>

          <p style={{
            fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(245,242,234,0.82)', maxWidth: '500px', marginBottom: '3.5rem',
            borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem',
            animation: 'fadeup 0.9s var(--ease) 0.95s both',
          }}>
            Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease.
            He didn&apos;t hold a fundraiser.<br />
            <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>He started a fight. Two years in — $50,000 raised, one family changed forever.</strong>
          </p>

          <div style={{ animation: 'fadeup 0.9s var(--ease) 1.1s both' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.52)', marginBottom: '1.2rem', fontWeight: 500 }}>
              Make a donation — choose an amount
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.2rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <a href={D50}  target="_blank" rel="noopener" className="amt-btn">$50</a>
              <a href={D150} target="_blank" rel="noopener" className="amt-btn featured" style={{ marginTop: '1.2rem' }}>$150</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
              <a href="mailto:info@nvforhd.com?subject=Custom%20Donation" className="amt-btn">Custom →</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}>
              ⛳ Play golf instead — May 29, 2026 →
            </a>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '3rem', right: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: 'rgba(245,242,234,0.25)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', animation: 'fadeup 1s var(--ease) 2.2s both' }}>
          <div style={{ width: '1px', height: '60px', background: 'rgba(245,242,234,0.12)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30px', background: 'linear-gradient(to bottom,transparent,var(--gold))', animation: 'scrolldrop 2.5s ease-in-out infinite' }} />
          </div>
          Scroll
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE CAUSE — Family hands image as background texture
          Psychology: FEEL before facts. Intergenerational = HD's real weight.
      ═══════════════════════════════════════════════ */}
      <section id="cause" style={{ background: 'var(--deep)', padding: '10rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />

        {/* Hands image — faint background texture showing the human story */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%',
          backgroundImage: `url('${IMG.cause}')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.12,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }} />

        {/* Ghost HD text */}
        <div style={{ position: 'absolute', right: '2rem', top: '3rem', fontFamily: 'var(--serif)', fontSize: 'clamp(12rem,20vw,26rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>HD</div>

        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start', position: 'relative' }}>
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>The Disease</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5.5rem)', marginBottom: '2.5rem' }}>
              Terminal.<br />Hereditary.<br /><em>No cure.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.78)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Huntington&apos;s Disease is a brain disorder with no known cure. Terminal. Caused by a single inherited gene — it causes deterioration of nerve cells, combining the cruelty of <strong style={{ color: '#fff', fontWeight: 600 }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.78)', fontWeight: 300 }}>
              Every child of an HD parent has a <strong style={{ color: '#fff', fontWeight: 600 }}>50% chance of inheriting it.</strong> It doesn&apos;t just take one person — it haunts entire families, generation after generation.
            </p>
          </ScrollReveal>

          <div>
            {[
              { n: '01', t: <><strong style={{color:'#fff',fontWeight:600}}>No known cure exists.</strong> HD is always fatal. Symptoms typically emerge between ages 30–50 — after most people have already had children, who may carry the same gene.</> },
              { n: '02', t: <><strong style={{color:'#fff',fontWeight:600}}>50% hereditary transmission rate.</strong> A single coin flip decides the future of every child born to an HD parent. IVF with genetic screening can change that.</> },
              { n: '03', t: <><strong style={{color:'#fff',fontWeight:600}}>UC Davis HD Center of Excellence</strong> is the only specialty clinic serving Northern Nevada&apos;s 90+ HD families. It operates entirely on private donation — without it, those families have nowhere to turn.</> },
              { n: '04', t: <><strong style={{color:'#fff',fontWeight:600}}>Your donation breaks the cycle.</strong> One round of golf, one donation — it funded a genetic IVF procedure that means Rylee and Brandon Puccini&apos;s child will never carry this disease.</> },
            ].map(({ n, t }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.5rem', padding: '2rem 0', borderBottom: '1px solid rgba(245,242,234,0.08)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.75rem', color: 'var(--gold-d)', fontWeight: 300, paddingTop: '0.3rem' }}>{n}</div>
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.72)', fontWeight: 300 }}>{t}</div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="gold-card" style={{ marginTop: '3rem', padding: '2.5rem' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.12rem', color: 'rgba(245,242,234,0.78)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  &ldquo;Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
                  <strong style={{ color: 'var(--gold)', fontWeight: 500, fontStyle: 'normal', display: 'block', marginTop: '0.75rem', fontSize: '0.9rem' }}>— Rylee Puccini, 2026</strong>
                </p>
                <DonateBlock />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS — Pure dark, numbers speak for themselves
          Psychology: BELIEVE — proof it works, after you've felt it
      ═══════════════════════════════════════════════ */}
      <section style={{ background: 'var(--void)', padding: '0 5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle fairway image as very faint backdrop */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${IMG.fairway}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 60%',
          opacity: 0.04,
        }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(201,168,76,0.15)', position: 'relative' }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised in our\nfirst two years' },
            { n: '90',   sup: '+', label: 'Northern Nevada\nHD families served' },
            { n: '135',  sup: '+', label: 'IVF families helped\nnationally' },
            { n: '1',    sup: '',  label: 'HD-free baby\non the way', gold: true },
          ].map(({ n, sup, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.1} style={{
              padding: '5rem 3rem',
              borderRight: i < 3 ? '1px solid rgba(201,168,76,0.08)' : 'none',
              paddingLeft: i === 0 ? 0 : undefined,
              paddingRight: i === 3 ? 0 : undefined,
            }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,5vw,6.5rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : '#FFFFFF', marginBottom: '0.75rem' }}>
                {n}<span style={{ color: 'var(--gold)', fontSize: '0.6em' }}>{sup}</span>
              </div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 500 }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TIMELINE — Year cards, gold hover line
          Psychology: WITNESS — the arc of three years
      ═══════════════════════════════════════════════ */}
      <section id="years" style={{ background: 'var(--deep)', padding: '8rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '5rem', gap: '3rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6.5rem)' }}>
              Three years.<br /><em>Real results.</em>
            </h2>
            <p style={{ maxWidth: '280px', textAlign: 'right', fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.52)', fontWeight: 300 }}>
              Every dollar raised goes directly to one chosen cause. No overhead. No ambiguity.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', title: '$25,000 for HelpCureHD', body: "First tournament. Sold out. Every dollar funded IVF with genetic screening so Brandon and Rylee Puccini could have children free from Huntington's. Rylee is now pregnant.", result: 'One family. One life. ↓' },
              { year: '2025', tag: 'UC Davis · 90+ Families', title: 'HD Center of Excellence', body: 'We funded the only HD specialty clinic serving Northern Nevada — neurologists, psychiatrists, genetic counselors, all dedicated to HD. 90+ families depend on it entirely.', result: '90 families. One clinic. →' },
              { year: '2026', tag: "May 29 · Gray's Crossing", title: 'UC Davis — Again', body: 'The clinic operates entirely on private donation. Your contribution keeps 90+ families in the best HD care available in Northern Nevada. No golf required to help.', result: 'Donate or play now. →' },
            ].map(({ year, tag, title, body, result }, i) => (
              <ScrollReveal key={year} delay={i * 0.15}>
                <div className="year-block">
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '5.5rem', fontWeight: 300, color: 'rgba(201,168,76,0.1)', lineHeight: 1, marginBottom: '2.5rem' }}>{year}</div>
                  <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--gold)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.25rem 0.8rem', marginBottom: '1.5rem', fontWeight: 500 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.2rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(245,242,234,0.65)', fontWeight: 300 }}>{body}</p>
                  <div style={{ marginTop: '2.5rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--gold)' }}>{result}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PUCCINI LETTER — Couple with ultrasound photo
          Psychology: THE MOMENT — proof + emotion combined
      ═══════════════════════════════════════════════ */}
      <LetterSection />

      {/* ═══════════════════════════════════════════════
          SPONSORS
      ═══════════════════════════════════════════════ */}
      <section id="sponsors" style={{ background: 'var(--deep)', padding: '8rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal style={{ marginBottom: '5rem' }}>
            <div className="kicker" style={{ marginBottom: '1rem' }}>2025 Sponsors</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5.5rem)' }}>
              Those who made it <em>possible.</em>
            </h2>
          </ScrollReveal>

          {[
            { tier: 'Title Sponsor', isTitle: true, sponsors: [{ name: 'Aguirre Riley', sub: 'Estate Planning · Business & Tax Law' }] },
            { tier: 'Platinum Sponsor', isTitle: false, sponsors: [{ name: 'UC Davis Health', sub: '2025 & 2026 Charity Partner' }] },
            { tier: 'Gold Sponsor', isTitle: false, sponsors: [{ name: 'C-Hawk', sub: '' }] },
            { tier: 'Lunch & Hole Sponsors', isTitle: false, sponsors: [
              { name: 'Matt & Kari Woodhead', sub: 'Lunch Sponsor' }, { name: 'Pace Supply Corp', sub: '' },
              { name: 'Woodhead Family', sub: '' }, { name: 'Blue Reef Enterprises', sub: 'Builders' },
              { name: 'Washoe Wealth Advisors', sub: '' }, { name: 'Golf The High Sierra', sub: '' },
              { name: 'Flowing Tide Pub', sub: '' }, { name: 'Rebuilding Together NV', sub: 'Northern Nevada' },
            ]},
          ].map(({ tier, isTitle, sponsors }) => (
            <ScrollReveal key={tier} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.4)', whiteSpace: 'nowrap', fontWeight: 500 }}>{tier}</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,242,234,0.08)' }} />
              </div>
              <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
                {sponsors.map(({ name, sub }) => (
                  <div key={name} className="sp-cell" style={{ background: isTitle ? 'rgba(201,168,76,0.06)' : 'rgba(245,242,234,0.03)', border: `1px solid ${isTitle ? 'rgba(201,168,76,0.25)' : 'rgba(245,242,234,0.08)'}`, padding: '1.8rem 2.5rem', minWidth: isTitle ? '300px' : '200px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: isTitle ? '1.3rem' : '1.05rem', fontWeight: 400, color: isTitle ? 'var(--gold)' : 'rgba(245,242,234,0.85)' }}>{name}</div>
                    {sub && <div style={{ fontSize: '0.7rem', color: 'rgba(245,242,234,0.4)', marginTop: '0.35rem' }}>{sub}</div>}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div style={{ marginTop: '4rem', padding: '3rem 4rem', border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(201,168,76,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 300, color: '#FFFFFF', marginBottom: '0.6rem' }}>Become a 2026 Sponsor</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(245,242,234,0.62)', fontWeight: 300 }}>Hole sponsors, title sponsors, and event partners — contact Sean directly.</p>
              </div>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" className="btn-outline-gold" style={{ whiteSpace: 'nowrap' }}>Enquire about sponsorship →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
