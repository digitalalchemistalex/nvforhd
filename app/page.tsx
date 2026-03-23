import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import LetterSection from '@/components/LetterSection'
import SponsorsSection from '@/components/SponsorsSection'
import PackagesSection from '@/components/PackagesSection'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Golf Tournament May 29, 2026",
  description: "Annual charity golf tournament at Gray's Crossing, Truckee CA on May 29, 2026. Peter Jacobsen designed course. Shotgun start 12PM. Packages from $100 donation to $3,500 title sponsorship.",
}

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'
const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'
const D220 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'
const D500 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'

const IMG = {
  hero:    'https://images.unsplash.com/photo-1723772502867-24dbac169716?w=2400&q=90&fit=crop&fm=jpg',
  cause:   'https://images.unsplash.com/photo-1761233976686-f43410a4f5d8?w=1600&q=85&fit=crop&fm=jpg',
  fairway: 'https://images.unsplash.com/photo-1582483955632-66bf303c11dc?w=2000&q=85&fit=crop&fm=jpg',
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NVforHD Annual Golf Tournament 2026',
  startDate: '2026-05-29T12:00',
  endDate: '2026-05-29T18:00',
  location: {
    '@type': 'Place',
    name: "Gray's Crossing Golf Club",
    description: "Peter Jacobsen designed — sister course to Old Greenwood",
    address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA', addressCountry: 'US' },
  },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
  offers: [
    { '@type': 'Offer', name: 'Title Sponsor', price: '3500', priceCurrency: 'USD', url: BOOK },
    { '@type': 'Offer', name: 'Golf + Lunch Foursome', price: '880', priceCurrency: 'USD', url: BOOK },
    { '@type': 'Offer', name: 'Single Golfer + Lunch', price: '220', priceCurrency: 'USD', url: BOOK },
    { '@type': 'Offer', name: '$100 Donation', price: '100', priceCurrency: 'USD', url: BOOK },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <Nav />

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '720px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--void)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${IMG.hero}')`, backgroundSize: 'cover', backgroundPosition: 'center 40%', transform: 'scale(1.06)', animation: 'drift 30s ease-in-out infinite alternate', willChange: 'transform' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(108deg, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.78) 38%, rgba(5,6,10,0.3) 65%, rgba(5,6,10,0.15) 100%), linear-gradient(to top, rgba(5,6,10,1) 0%, rgba(5,6,10,0.7) 28%, transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.55 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', padding: '0 5rem 7rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '2.5rem', animation: 'fadeup 0.9s var(--ease) 0.2s both' }}>
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.7 }} />
            Nevada for Huntington&apos;s Disease &nbsp;·&nbsp; Truckee, California
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(5rem, 9.5vw, 12rem)', fontWeight: 300, lineHeight: 0.88, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '0.12em', animation: 'fadeup 1.1s var(--ease) 0.45s both', textShadow: '0 4px 48px rgba(0,0,0,0.6)' }}>
            Let&apos;s<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.42)' }}>Cure</em>{' '}
            <span style={{ color: 'var(--gold)' }}>HD.</span>
          </h1>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.8rem)', color: 'rgba(245,242,234,0.6)', margin: '1.5rem 0 4rem', letterSpacing: '0.02em', animation: 'fadeup 0.9s var(--ease) 0.75s both' }}>
            May 29, 2026 &nbsp;·&nbsp; Gray&apos;s Crossing Golf Club &nbsp;·&nbsp; 12:00 PM Shotgun
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(245,242,234,0.82)', maxWidth: '500px', marginBottom: '3.5rem', borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', animation: 'fadeup 0.9s var(--ease) 0.95s both' }}>
            Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease.
            He didn&apos;t hold a fundraiser.<br />
            <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>He started a fight. Two years in — $50,000 raised, one family changed forever.</strong>
          </p>

          {/* Hero CTAs — now show real entry points */}
          <div style={{ animation: 'fadeup 0.9s var(--ease) 1.1s both' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.52)', marginBottom: '1.2rem', fontWeight: 500 }}>
              Choose how you want to help
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={D100} target="_blank" rel="noopener" className="btn-gold">Donate $100 →</a>
              <a href={D220} target="_blank" rel="noopener" className="btn-outline-gold">Play Golf — $220 ↗</a>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>
                ⛳ Foursome $880
              </a>
              <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>
                🏆 Sponsor from $500
              </a>
              <a href={BOOK} target="_blank" rel="noopener" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>
                🙌 Volunteer — Free
              </a>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '3rem', right: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: 'rgba(245,242,234,0.25)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', animation: 'fadeup 1s var(--ease) 2.2s both' }}>
          <div style={{ width: '1px', height: '60px', background: 'rgba(245,242,234,0.12)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30px', background: 'linear-gradient(to bottom,transparent,var(--gold))', animation: 'scrolldrop 2.5s ease-in-out infinite' }} />
          </div>
          Scroll
        </div>
      </section>

      {/* ══ THE CAUSE ══ */}
      <section id="cause" style={{ background: 'var(--deep)', padding: '10rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: `url('${IMG.cause}')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)' }} />
        <div style={{ position: 'absolute', right: '2rem', top: '3rem', fontFamily: 'var(--serif)', fontSize: 'clamp(12rem,20vw,26rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(201,168,76,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>HD</div>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start', position: 'relative' }}>
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>The Disease</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,5.5rem)', marginBottom: '2.5rem' }}>
              Terminal.<br />Hereditary.<br /><em>No cure.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.78)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Huntington&apos;s Disease is a brain disorder with no known cure. Terminal. Caused by a single inherited gene — combining the cruelty of <strong style={{ color: '#fff', fontWeight: 600 }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s simultaneously.</strong>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.78)', fontWeight: 300 }}>
              Every child of an HD parent has a <strong style={{ color: '#fff', fontWeight: 600 }}>50% chance of inheriting it.</strong> It haunts entire families across generations. This disease struck our family. We will not stop fighting.
            </p>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: <><strong style={{color:'#fff',fontWeight:600}}>No known cure exists.</strong> HD is always fatal. Symptoms emerge between ages 30–50 — after most people have already had children who may carry the same gene.</> },
              { n: '02', t: <><strong style={{color:'#fff',fontWeight:600}}>50% hereditary transmission rate.</strong> A single coin flip decides every child&apos;s future. IVF with genetic screening permanently breaks the cycle.</> },
              { n: '03', t: <><strong style={{color:'#fff',fontWeight:600}}>UC Davis HD Center of Excellence</strong> — the only specialty HD clinic serving 90+ Northern Nevada families. It runs entirely on private donation.</> },
              { n: '04', t: <><strong style={{color:'#fff',fontWeight:600}}>Your $100 donation matters.</strong> Or play golf for $220. Or sponsor a hole for $100. Every package funds UC Davis HD directly.</> },
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

      {/* ══ STATS ══ */}
      <section style={{ background: 'var(--void)', padding: '0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${IMG.fairway}')`, backgroundSize: 'cover', backgroundPosition: 'center 60%', opacity: 0.04 }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(201,168,76,0.15)', position: 'relative' }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised in our\nfirst two years' },
            { n: '90',   sup: '+', label: 'Northern Nevada\nHD families served' },
            { n: '135',  sup: '+', label: 'IVF families helped\nnation-wide' },
            { n: '1',    sup: '',  label: 'HD-free baby\non the way', gold: true },
          ].map(({ n, sup, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.1} style={{ padding: '5rem 3rem', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.08)' : 'none', paddingLeft: i === 0 ? 0 : undefined, paddingRight: i === 3 ? 0 : undefined }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,5vw,6.5rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : '#FFFFFF', marginBottom: '0.75rem' }}>
                {n}<span style={{ color: 'var(--gold)', fontSize: '0.6em' }}>{sup}</span>
              </div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 500 }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section id="years" style={{ background: 'var(--deep)', padding: '8rem 5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '5rem', gap: '3rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,6.5rem)' }}>Three years.<br /><em>Real results.</em></h2>
            <p style={{ maxWidth: '280px', textAlign: 'right', fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.52)', fontWeight: 300 }}>Every dollar raised goes directly to one chosen cause. No overhead. No ambiguity.</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', title: '$25,000 for HelpCureHD', body: "First tournament sold out. Every dollar funded IVF with genetic screening so Brandon and Rylee Puccini could have children free from Huntington's. Rylee is now pregnant.", result: 'One family. One life. ↓' },
              { year: '2025', tag: 'UC Davis · 90+ Families', title: 'HD Center of Excellence', body: 'We funded the only HD specialty clinic serving Northern Nevada — neurologists, psychiatrists, genetic counselors, all dedicated to HD. 90+ families depend on it entirely.', result: '90 families. One clinic. →' },
              { year: '2026', tag: "May 29 · Gray's Crossing", title: 'UC Davis — Again', body: "Peter Jacobsen designed Gray's Crossing. 12PM shotgun start. Every registration, every donation keeps UC Davis HD running for 90+ Northern Nevada families.", result: 'Join us. →' },
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

      {/* ══ PUCCINI LETTER ══ */}
      <LetterSection />

      {/* ══ PACKAGES & PRICING ══ */}
      <PackagesSection />

      {/* ══ SPONSORS ══ */}
      <SponsorsSection />

      <Footer />
    </>
  )
}
