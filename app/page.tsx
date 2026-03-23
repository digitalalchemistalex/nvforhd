import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import LetterSection from '@/components/LetterSection'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Golf Tournament May 29, 2026",
  description: 'NVforHD raises funds to fight Huntington\'s Disease through an annual golf tournament at Gray\'s Crossing, Truckee CA. Donate or play — May 29, 2026.',
  openGraph: {
    title: "Let's Cure HD | NVforHD",
    description: 'Donate or play golf to fight Huntington\'s Disease. Annual tournament May 29, 2026 — Gray\'s Crossing Golf Club, Truckee CA.',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'
const D50  = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-50'
const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-500'

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NVforHD Annual Golf Tournament 2026',
  startDate: '2026-05-29',
  endDate: '2026-05-29',
  location: {
    '@type': 'Place',
    name: "Gray's Crossing Golf Club",
    address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA', addressCountry: 'US' },
  },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
  description: 'Annual charity golf tournament raising funds to fight Huntington\'s Disease.',
  url: 'https://nvforhd.com',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Huntington\'s Disease?', acceptedAnswer: { '@type': 'Answer', text: 'Huntington\'s Disease is a hereditary terminal brain disorder with no known cure, causing deterioration of nerve cells with symptoms similar to Parkinson\'s, ALS, and Alzheimer\'s simultaneously.' } },
    { '@type': 'Question', name: 'How does NVforHD raise money?', acceptedAnswer: { '@type': 'Answer', text: 'Through an annual charity golf tournament. In 2024 the inaugural event raised $25,000. Donations are also accepted directly without playing golf.' } },
    { '@type': 'Question', name: 'When is the 2026 NVforHD tournament?', acceptedAnswer: { '@type': 'Answer', text: 'May 29, 2026 at Gray\'s Crossing Golf Club in Truckee, California.' } },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />

      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative', height: '100vh', minHeight: '720px',
        display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
        background: 'var(--void)',
      }}>
        {/* Background — Ken Burns drift */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1650306560962-1be6c20e1f7f?w=2200&q=90&fit=crop')",
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          transform: 'scale(1.07)',
          animation: 'drift 28s ease-in-out infinite alternate',
          willChange: 'transform',
        }} />

        {/* Cinematic overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(5,6,10,0.97) 0%, rgba(5,6,10,0.75) 45%, rgba(5,6,10,0.15) 100%), linear-gradient(to top, rgba(5,6,10,1) 0%, rgba(5,6,10,0.5) 35%, transparent 65%)',
        }} />
        {/* Gold rim top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.35 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', padding: '0 5rem 7rem', width: '100%' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '2.2rem',
            animation: 'fadeup 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both',
          }}>
            <span style={{ width: '36px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
            Nevada for Huntington&apos;s Disease &nbsp;·&nbsp; Truckee, California
          </div>

          {/* H1 */}
          <h1 className="display" style={{
            fontSize: 'clamp(4.5rem, 8vw, 10.5rem)',
            animation: 'fadeup 1.1s cubic-bezier(0.16,1,0.3,1) 0.55s both',
          }}>
            Let&apos;s<br />
            <em>Cure</em> <span className="gold">HD.</span>
          </h1>

          {/* Date */}
          <div style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
            color: 'rgba(245,242,234,0.38)',
            margin: '1.2rem 0 3.5rem',
            animation: 'fadeup 0.9s cubic-bezier(0.16,1,0.3,1) 0.85s both',
          }}>
            May 29, 2026 &nbsp;·&nbsp; Gray&apos;s Crossing Golf Club
          </div>

          {/* Hook */}
          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.85,
            color: 'var(--dim)', maxWidth: '480px',
            marginBottom: '3rem',
            borderLeft: '1px solid rgba(201,168,76,0.3)', paddingLeft: '1.5rem',
            animation: 'fadeup 0.9s cubic-bezier(0.16,1,0.3,1) 1s both',
          }}>
            Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease.
            He didn&apos;t hold a fundraiser.<br />
            <strong style={{ color: 'rgba(245,242,234,0.88)', fontWeight: 500 }}>He started a fight. Two years in — $50,000 raised, one family changed forever.</strong>
          </p>

          {/* DONATE BLOCK IN HERO */}
          <div style={{ animation: 'fadeup 0.9s cubic-bezier(0.16,1,0.3,1) 1.15s both' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--dimmer)', marginBottom: '1rem' }}>
              Make a donation — choose an amount
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <a href={D50}  target="_blank" rel="noopener" className="amt-btn">$50</a>
              <a href={D150} target="_blank" rel="noopener" className="amt-btn featured">$150</a>
              <a href={D500} target="_blank" rel="noopener" className="amt-btn">$500</a>
              <a href="mailto:info@nvforhd.com?subject=Custom%20Donation" className="amt-btn">Custom →</a>
            </div>
            <a href={GOLF} target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--dimmer)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
>
              ⛳ Play golf instead — May 29, 2026 →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '3rem', right: '5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          color: 'rgba(245,242,234,0.15)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          animation: 'fadeup 1s cubic-bezier(0.16,1,0.3,1) 2s both',
        }}>
          <div style={{ width: '1px', height: '56px', background: 'rgba(245,242,234,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '28px',
              background: 'linear-gradient(to bottom, transparent, var(--gold))',
              animation: 'scrolldrop 2.2s ease-in-out infinite',
            }} />
          </div>
          Scroll
        </div>
      </section>

      {/* ═══ THE CAUSE ═══ */}
      <section id="cause" style={{ background: 'var(--deep)', padding: '10rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.2),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem', alignItems: 'start' }}>

          <ScrollReveal>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(7rem,12vw,16rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.04)', lineHeight: 0.85, userSelect: 'none', marginBottom: '-4rem' }}>HD</div>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>The Disease</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.2rem,3.5vw,4.5rem)', marginBottom: '2rem' }}>
              Terminal.<br />Hereditary.<br /><em>No cure.</em>
            </h2>
            <p className="body-text">Huntington&apos;s Disease is a brain disorder with no known cure. It is terminal and causes deterioration of nerve cells — likened to having <strong>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong></p>
            <p className="body-text" style={{ marginTop: '1rem' }}>Every child of an HD parent faces a <strong>50% chance of inheriting it.</strong> It strikes entire generations. This disease struck our family. It will not defeat us.</p>
          </ScrollReveal>

          <div>
            {[
              { n: '01', t: <><strong>No known cure exists.</strong> HD is always fatal. Symptoms appear between ages 30–50. Every year without a cure means more families destroyed.</> },
              { n: '02', t: <><strong>50% hereditary transmission rate.</strong> Every child of an HD patient faces a coin flip for their entire future and the futures of their children.</> },
              { n: '03', t: <><strong>UC Davis HD Center of Excellence</strong> is the only specialty clinic serving Northern Nevada — 90+ families depend on it. It runs entirely on private donation.</> },
              { n: '04', t: <><strong>IVF with genetic screening breaks the cycle.</strong> Children can be born HD-free. Your donation funds this for families who cannot afford it alone.</> },
            ].map(({ n, t }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.5rem',
                  padding: '2rem 0', borderBottom: '1px solid rgba(245,242,234,0.06)',
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.75rem', color: 'var(--gold-d)', fontWeight: 300, paddingTop: '0.3rem' }}>{n}</div>
                  <div className="body-text" style={{ fontSize: '0.88rem' }}>{t}</div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="gold-card" style={{ marginTop: '3rem', padding: '2rem' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(245,242,234,0.55)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  &ldquo;Every time we look at our future child it will be a reminder of the kindness you showed us.&rdquo;
                  <strong style={{ color: 'var(--white)', fontWeight: 400, fontStyle: 'normal' }}> — Rylee Puccini, 2026</strong>
                </p>
                <DonateBlock />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ background: 'var(--void)', padding: '0 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised in our\nfirst two years' },
            { n: '90',   sup: '+', label: 'Northern Nevada\nHD families served' },
            { n: '135',  sup: '+', label: 'IVF families helped\nnationally' },
            { n: '1',    sup: '',  label: 'HD-free baby\non the way', gold: true },
          ].map(({ n, sup, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.12} style={{
              padding: '4.5rem 3rem',
              borderRight: i < 3 ? '1px solid rgba(201,168,76,0.07)' : 'none',
              paddingLeft: i === 0 ? 0 : undefined,
              paddingRight: i === 3 ? 0 : undefined,
            }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,4vw,5.5rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : 'var(--white)', marginBottom: '0.5rem' }}>
                {n}<span style={{ color: 'var(--gold)' }}>{sup}</span>
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dimmer)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section id="years" style={{ background: 'var(--deep)', padding: '8rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '5rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5.5rem)' }}>
              Three years.<br /><em>Real results.</em>
            </h2>
            <p style={{ maxWidth: '300px', textAlign: 'right', fontSize: '0.82rem', lineHeight: 1.75, color: 'var(--dimmer)', fontWeight: 300 }}>
              Every dollar raised at this tournament goes directly to one chosen cause. No overhead. No ambiguity. Just impact.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(201,168,76,0.07)' }}>
            {[
              {
                year: '2024', tag: 'Inaugural · Sold Out',
                title: '$25,000 for HelpCureHD',
                body: 'First tournament. Sold out. Every dollar funded IVF with genetic screening so Brandon and Rylee Puccini could have children free from Huntington\'s. Rylee is now pregnant.',
                result: 'One family. One life. ↓',
              },
              {
                year: '2025', tag: 'UC Davis · 90+ Families',
                title: 'HD Center of Excellence',
                body: 'We funded the only HD specialty clinic serving Northern Nevada — neurologists, psychiatrists, genetic counselors, all dedicated to HD. 90+ families depend on it entirely.',
                result: '90 families. One clinic. →',
              },
              {
                year: '2026', tag: "May 29 · Gray's Crossing",
                title: 'UC Davis — Again',
                body: 'The clinic operates entirely on private donation. Your contribution keeps 90+ families in the best HD care available in Northern Nevada. No golf required to help.',
                result: 'Donate or play now. →',
              },
            ].map(({ year, tag, title, body, result }, i) => (
              <ScrollReveal key={year} delay={i * 0.15}>
                <div style={{ background: 'var(--deep)', padding: '3.5rem', position: 'relative', height: '100%' }}
                  className="year-block">
                  <style>{`.year-block:hover { background: rgba(201,168,76,0.035) !important; } .year-block::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); } .year-block:hover::after { transform:scaleX(1); }`}</style>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '5rem', fontWeight: 300, color: 'rgba(201,168,76,0.09)', lineHeight: 1, marginBottom: '2rem' }}>{year}</div>
                  <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.28)', color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.22rem 0.7rem', marginBottom: '1.5rem' }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2, marginBottom: '1rem' }}>{title}</div>
                  <p className="body-text" style={{ fontSize: '0.83rem' }}>{body}</p>
                  <div style={{ marginTop: '2rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gold)' }}>{result}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PUCCINI LETTER ═══ */}
      <LetterSection />

      {/* ═══ SPONSORS ═══ */}
      <section id="sponsors" style={{ background: 'var(--deep)', padding: '8rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal style={{ marginBottom: '5rem' }}>
            <div className="kicker" style={{ marginBottom: '1rem' }}>2025 Sponsors</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,4.5rem)' }}>
              Those who made it <em>possible.</em>
            </h2>
          </ScrollReveal>

          {[
            { tier: 'Title Sponsor', isTitle: true, sponsors: [{ name: 'Aguirre Riley', sub: 'Estate Planning · Business & Tax Law' }] },
            { tier: 'Platinum Sponsor', isTitle: false, sponsors: [{ name: 'UC Davis Health', sub: '2025 & 2026 Charity Partner' }] },
            { tier: 'Gold Sponsor', isTitle: false, sponsors: [{ name: 'C-Hawk', sub: '' }] },
            { tier: 'Lunch & Hole Sponsors', isTitle: false, sponsors: [
              { name: 'Matt & Kari Woodhead', sub: 'Lunch Sponsor' },
              { name: 'Pace Supply Corp', sub: '' },
              { name: 'Woodhead Family', sub: '' },
              { name: 'Blue Reef Enterprises', sub: 'Builders' },
              { name: 'Washoe Wealth Advisors', sub: '' },
              { name: 'Golf The High Sierra', sub: '' },
              { name: 'Flowing Tide Pub', sub: '' },
              { name: 'Rebuilding Together NV', sub: 'Northern Nevada' },
            ]},
          ].map(({ tier, isTitle, sponsors }) => (
            <ScrollReveal key={tier} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--dimmer)', whiteSpace: 'nowrap' }}>{tier}</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(245,242,234,0.06)' }} />
              </div>
              <div style={{ display: 'flex', gap: '1px', flexWrap: 'wrap' }}>
                {sponsors.map(({ name, sub }) => (
                  <div key={name} className={isTitle ? "sponsor-cell-title" : "sponsor-cell-hover"}
                  >
                    <div style={{ fontFamily: 'var(--serif)', fontSize: isTitle ? '1.25rem' : '1.05rem', fontWeight: 400, color: isTitle ? 'var(--gold)' : 'rgba(245,242,234,0.75)' }}>{name}</div>
                    {sub && <div style={{ fontSize: '0.68rem', color: 'var(--dimmer)', marginTop: '0.3rem' }}>{sub}</div>}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}

          {/* Become a sponsor CTA */}
          <ScrollReveal>
            <div style={{ marginTop: '4rem', padding: '2.5rem', border: '1px solid rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.5rem' }}>Become a 2026 Sponsor</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--dim)', fontWeight: 300 }}>Hole sponsors, title sponsors, and event partners — contact Sean directly to discuss opportunities.</p>
              </div>
              <a href="mailto:info@nvforhd.com?subject=2026%20Sponsorship%20Enquiry" className="btn-outline-gold" style={{ whiteSpace: 'nowrap' }}>
                Enquire about sponsorship →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
