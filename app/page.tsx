import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import PackagesSection from '@/components/PackagesSection'
import SponsorsSection from '@/components/SponsorsSection'
import MobileCTADock from '@/components/MobileCTADock'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Let's Cure HD — NVforHD Charity Golf Tournament May 29, 2026",
  description: "NVforHD raises funds to fight Huntington's Disease — a fatal, hereditary brain disorder with no cure. Annual golf tournament May 29, 2026. $50K+ raised. One HD-free baby funded.",
  openGraph: {
    title: "NVforHD — Let's Cure Huntington's Disease",
    description: "Golf tournament May 29, 2026. $50K+ raised. One HD-free baby funded. 90+ Nevada families served.",
    images: [{ url: '/images/hero-couple.jpg', width: 1200, height: 630 }],
  },
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-golf'
const D100 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=hero-donate'

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'NVforHD Charity Golf Tournament 2026',
  startDate: '2026-05-29T12:00:00-07:00',
  location: { '@type': 'Place', name: "Gray's Crossing Golf Club", address: { '@type': 'PostalAddress', addressLocality: 'Truckee', addressRegion: 'CA', addressCountry: 'US' } },
  organizer: { '@type': 'NonprofitOrganization', name: 'NVforHD', url: 'https://nvforhd.com' },
  description: "Annual charity golf tournament raising funds for the UC Davis Huntington's Disease Center of Excellence.",
  url: 'https://nvforhd.com',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "What is Huntington's Disease?", acceptedAnswer: { '@type': 'Answer', text: "Huntington's Disease (HD) is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells and is likened to having Parkinson's, ALS, and Alzheimer's simultaneously. Every child of an HD parent has a 50% chance of inheriting it." } },
    { '@type': 'Question', name: 'What does NVforHD do?', acceptedAnswer: { '@type': 'Answer', text: "NVforHD is a Nevada non-profit that hosts an annual charity golf tournament and directs 100% of proceeds to one chosen HD cause each year. In 2024 we raised $25,000 to fund IVF for an HD family. In 2025 and 2026 we fund the UC Davis HD Center of Excellence, which serves 90+ Northern Nevada families." } },
    { '@type': 'Question', name: 'When is the 2026 NVforHD golf tournament?', acceptedAnswer: { '@type': 'Answer', text: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble format." } },
    { '@type': 'Question', name: 'How can I donate to NVforHD without playing golf?', acceptedAnswer: { '@type': 'Answer', text: "Direct donations start at $100 and go straight to the UC Davis HD Center of Excellence. Email info@nvforhd.com or call 775-691-8860." } },
  ],
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════════
          HERO — Full-bleed human photo. The story before the event.
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '640px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* The photo — couple embracing. This IS every HD family. */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/hero-couple.jpg"
            alt="A couple embracing — the human face of Huntington's Disease"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
            quality={90}
          />
        </div>

        {/* Gradient: dark left where text sits, photo breathes on the right */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(6,13,26,0.95) 0%, rgba(6,13,26,0.82) 40%, rgba(6,13,26,0.35) 70%, rgba(6,13,26,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.7) 0%, transparent 40%)' }} />

        {/* Blue top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', zIndex: 3 }} />

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--px)', paddingTop: 'clamp(7rem,14vw,10rem)', paddingBottom: 'clamp(4rem,8vw,6rem)', width: '100%' }}>
          <div style={{ maxWidth: '640px' }}>

            {/* Eyebrow — establishes who this is for before anything else */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', animation: 'fadeup 0.8s var(--ease) 0.2s both' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(29,78,216,0.9)' }}>For every family living with HD</span>
            </div>

            {/* The real headline — not a slogan, a statement of war */}
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.8rem,7.5vw,8rem)', fontWeight: 300, lineHeight: 0.9, letterSpacing: '-0.025em', color: '#fff', marginBottom: '2rem', animation: 'fadeup 1s var(--ease) 0.35s both' }}>
              HD takes<br />
              everything.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>We fight back.</em>
            </h1>

            {/* The human hook — Sean's story, 2 sentences */}
            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1.5rem', marginBottom: '2.5rem', animation: 'fadeup 0.9s var(--ease) 0.55s both' }}>
              <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.85, color: 'rgba(255,255,255,0.82)', fontWeight: 300 }}>
                Sean Schaeffer&apos;s wife Christine was diagnosed with Huntington&apos;s Disease — a fatal, hereditary brain disorder with no cure. He didn&apos;t grieve quietly.{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>He raised $50,000 and funded a family&apos;s future.</strong>
              </p>
            </div>

            {/* CTAs — donate first, golf second. Priority order matters. */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', animation: 'fadeup 0.9s var(--ease) 0.7s both' }}>
              <a href={D100} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '1.1rem 2.4rem' }}>
                Donate Now →
              </a>
              <a href={GOLF} target="_blank" rel="noopener" className="btn btn-ghost-dark" style={{ fontSize: '0.7rem' }}>
                Play Golf — May 29
              </a>
            </div>

            {/* Trust line */}
            <p style={{ marginTop: '1.5rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', animation: 'fadeup 0.9s var(--ease) 0.85s both' }}>
              100% to UC Davis HD Center of Excellence · May 29, 2026 · Gray&apos;s Crossing, Truckee CA
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }} className="scroll-indicator">
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '24px', background: 'linear-gradient(to bottom, transparent, rgba(29,78,216,0.8))', animation: 'scrolldrop 2.2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — White. Giant. Impossible to ignore.
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { n: '$50K', sup: '+', label: 'Raised', sub: 'In 2 years. From zero.' },
            { n: '90',   sup: '+', label: 'HD Families', sub: 'Served at UC Davis' },
            { n: '1',    sup: '',  label: 'HD-Free Baby', sub: 'Funded. On the way.', blue: true },
            { n: '0',    sup: '',  label: 'Known Cures', sub: 'That\'s why we fight.' },
          ].map(({ n, sup, label, sub, blue }, i) => (
            <ScrollReveal key={n + i} delay={i * 0.08} style={{ padding: 'clamp(2.5rem,4vw,4.5rem) clamp(1.5rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,6vw,7rem)', fontWeight: 600, lineHeight: 1, color: blue ? 'var(--blue)' : 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                {n}<span style={{ color: 'var(--blue)', fontSize: '0.45em', fontWeight: 400 }}>{sup}</span>
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--ink-dim)' }}>{sub}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE DISEASE — Make them understand before they scroll past
      ══════════════════════════════════════════ */}
      <section id="cause" style={{ background: 'var(--cream)', padding: 'var(--py-xl) var(--px)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--serif)', fontSize: 'clamp(12rem,20vw,26rem)', fontWeight: 700, fontStyle: 'italic', color: 'rgba(17,24,39,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>HD</div>

        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>

          {/* The visceral reframe — not stats, reality */}
          <ScrollReveal>
            <div style={{ maxWidth: '860px', marginBottom: 'clamp(5rem,8vw,9rem)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Huntington&apos;s Disease</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,6vw,7.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '2.5rem' }} className="speakable">
                Terminal. Hereditary.<br />
                <em style={{ color: 'var(--ink-dim)' }}>No cure.</em>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 4rem' }} className="disease-copy-grid">
                <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.9, color: 'var(--ink-mid)', fontWeight: 300 }}>
                  HD destroys nerve cells — a process likened to experiencing <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Parkinson&apos;s, ALS, and Alzheimer&apos;s at the same time.</strong> It is always fatal. There is no approved treatment that slows it.
                </p>
                <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.9, color: 'var(--ink-mid)', fontWeight: 300 }}>
                  If your parent has HD, <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>flip a coin.</strong> That is your statistical chance of inheriting it. Most people find out after they&apos;ve already had children who may carry the same gene.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 facts — white cards, blue number, human copy */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--cream-3)' }} className="facts-grid">
            {[
              { n: '01', head: 'No cure exists', body: 'Researchers are making real progress. But today, in 2026, there is no drug that stops or slows HD. Every family affected right now needs support — not promises.' },
              { n: '02', head: 'But the cycle can be broken', body: 'IVF with preimplantation genetic testing means a child can be born completely HD-free. The mutation stops with this generation. That is what your donation buys.' },
              { n: '03', head: '90+ families, one clinic', body: 'The UC Davis HD Center of Excellence is the only specialist HD care within reach of Northern Nevada. 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, physical therapists. It runs on private donation.' },
              { n: '04', head: 'This is local', body: 'These are families in Reno, Sparks, the Sierra Foothills. They make a 130-mile drive to Sacramento because it is the closest specialist help. Your $100 keeps that clinic open for them.' },
            ].map(({ n, head, body }) => (
              <ScrollReveal key={n}>
                <div style={{ background: 'var(--white)', padding: 'clamp(2rem,3.5vw,3.5rem)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.72rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.12em', marginBottom: '1.25rem' }}>{n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.9rem', lineHeight: 1.2 }}>{head}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--ink-dim)' }}>{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rylee's quote — dark navy block, right after the disease facts */}
          <ScrollReveal delay={0.1} style={{ marginTop: '1.5px' }}>
            <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem,5vw,5rem)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="quote-cta-grid">
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.8vw,2.5rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', lineHeight: 1.4, marginBottom: '1.5rem' }}>
                    &ldquo;Thank you for gifting us life that is Huntington&apos;s free. Every time we look at our future child it will be a reminder of the kindness you all showed us.&rdquo;
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600 }}>
                    — Rylee &amp; Brandon Puccini · Their IVF was funded by the 2024 NVforHD Tournament
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'stretch' }}>
                  <a href={D100} target="_blank" rel="noopener" className="btn btn-primary" style={{ textAlign: 'center', whiteSpace: 'nowrap', fontSize: '0.68rem' }}>Fund the Next Family →</a>
                  <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', textAlign: 'center' }}>or play golf May 29</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PUCCINI — Full emotional moment. The proof it works.
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Full-bleed pregnant sunset behind everything */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/pregnant-sunset.jpg"
            alt="A couple holding hands at sunset — Rylee and Brandon's story"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            quality={85}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.88)' }} />
        </div>

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--py-xl) var(--px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="puccini-grid">

            {/* Left — the baby hands image */}
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                {/* Offset frame */}
                <div style={{ position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px', border: '1px solid rgba(29,78,216,0.4)', zIndex: 0 }} />
                <Image
                  src="/images/baby-hands.jpg"
                  alt="Two parents' hands cradling their newborn baby's hand — the result of IVF funded by NVforHD"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
                  quality={90}
                />
                {/* Caption overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '1.5rem', background: 'linear-gradient(to top, rgba(6,13,26,0.9), transparent)' }}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                    Brandon &amp; Rylee Puccini · 2025 · HD-Free
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — the letter, the story, the ask */}
            <ScrollReveal delay={0.15}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: '18px', height: '2px', background: 'var(--gold-light)' }} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-light)' }}>What your money did in 2024</span>
                </div>

                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5.5vw,6rem)', fontWeight: 300, lineHeight: 0.95, color: '#fff', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                  &ldquo;Rylee is<br />pregnant.&rdquo;
                </h2>

                <p style={{ fontSize: 'clamp(1rem,1.4vw,1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontWeight: 300 }}>
                  The 2024 NVforHD golf tournament raised $25,000. That money went to <strong style={{ color: '#fff' }}>HelpCureHD</strong>, who funded IVF with genetic screening for Brandon and Rylee Puccini — a young couple carrying the HD gene. The embryo transfer was successful. They heard the heartbeat.
                </p>

                <p style={{ fontSize: 'clamp(1rem,1.4vw,1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', fontWeight: 300 }}>
                  Their baby will never have Huntington&apos;s Disease. <strong style={{ color: '#fff' }}>That baby exists because people bought a round of golf.</strong>
                </p>

                {/* Donate inline */}
                <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: 'clamp(1.5rem,3vw,2.5rem)', backdropFilter: 'blur(20px)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', color: '#fff', marginBottom: '0.5rem' }}>Fund the next family.</div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                    In 2026 your donation funds the UC Davis clinic that serves 90+ families right now. Every amount matters.
                  </p>
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-end' }}>
                    <a href={D100} target="_blank" rel="noopener" className="amt-btn on-dark">$100</a>
                    <a href={D100} target="_blank" rel="noopener" className="amt-btn on-dark featured" style={{ marginTop: '1.2rem' }}>$250</a>
                    <a href={D100} target="_blank" rel="noopener" className="amt-btn on-dark">$500</a>
                  </div>
                  <a href={GOLF} target="_blank" rel="noopener" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                    Prefer to play golf? Book May 29 →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE — Track record. Builds trust.
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(3rem,5vw,5.5rem)', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Our Track Record</span>
              </div>
              <h2 className="display on-light" style={{ fontSize: 'clamp(2.5rem,5vw,6rem)' }}>
                Three years.<br /><em>Real results.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '240px', fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', textAlign: 'right', fontWeight: 300 }}>
              Every dollar to one cause. No overhead. No splitting. Just impact.
            </p>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { year: '2024', tag: 'Inaugural · Sold Out', curr: false, title: '$25,000 for HelpCureHD', body: "Sold out in days. Every dollar funded IVF for Brandon & Rylee Puccini. Rylee is now pregnant with an HD-free baby.", href: '/causes', cta: 'Their story →' },
              { year: '2025', tag: 'UC Davis · 90+ Families', curr: false, title: 'HD Center of Excellence', body: 'Funded the only HD specialty clinic in Northern Nevada — 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, and physical therapists.', href: '/causes', cta: 'Read more →' },
              { year: '2026', tag: "May 29 · Register Now", curr: true,  title: 'UC Davis — Again', body: "Returning to protect the clinic that serves 90+ Northern Nevada families. One round of golf or a $100 donation keeps the lights on.", href: GOLF, cta: 'Join us →' },
            ].map(({ year, tag, curr, title, body, href, cta }, i) => (
              <ScrollReveal key={year} delay={i * 0.12}>
                <div className="year-block">
                  {curr && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', transform: 'scaleX(1)' }} />}
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,6vw,5.5rem)', fontWeight: 700, color: curr ? 'rgba(29,78,216,0.08)' : 'rgba(17,24,39,0.06)', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{year}</div>
                  <div style={{ display: 'inline-block', background: curr ? 'var(--blue-light)' : 'var(--cream-2)', border: curr ? '1px solid var(--blue-faint)' : '1px solid var(--cream-3)', color: curr ? 'var(--blue)' : 'var(--ink-dim)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', marginBottom: '1rem', fontWeight: 600 }}>{tag}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '1rem' }}>{title}</div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--ink-dim)', fontWeight: 300, flex: 1 }}>{body}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined}
                    style={{ marginTop: '2rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PackagesSection />
      <SponsorsSection />

      {/* ══════════════════════════════════════════
          FAQ / AEO BLOCK
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--white)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <ScrollReveal style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Common Questions</span>
            </div>
          </ScrollReveal>
          {[
            { q: "What is Huntington's Disease?", a: "Huntington's Disease is a hereditary, fatal brain disorder with no known cure. It causes progressive breakdown of nerve cells — likened to Parkinson's, ALS, and Alzheimer's simultaneously. Every child of a parent with HD has a 50% chance of inheriting the gene mutation that causes it." },
            { q: "What does NVforHD do with tournament proceeds?", a: "100% of tournament proceeds go to one chosen HD cause each year — zero overhead, zero splitting. In 2024 we funded IVF for a family carrying the HD gene (Brandon & Rylee Puccini, now expecting an HD-free baby). In 2025 and 2026 we fund the UC Davis Huntington's Disease Center of Excellence, serving 90+ Northern Nevada families." },
            { q: "When and where is the 2026 tournament?", a: "Friday, May 29, 2026 at Gray's Crossing Golf Club in Truckee, California. 12:00 PM shotgun start. Four-person scramble. Discount hotel rooms at Atlantis and Peppermill — call Sean at 775-691-8860." },
            { q: "Can I donate without playing golf?", a: "Yes. Direct donations start at $100 and go to the same cause. Email info@nvforhd.com or call 775-691-8860." },
            { q: "What is the UC Davis HD Center of Excellence?", a: "The only HD specialty clinic serving Northern Nevada — 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 physical therapists, 3 research coordinators. 130 miles from Reno. Runs entirely on private donation." },
          ].map(({ q, a }, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div style={{ borderBottom: '1px solid var(--cream-3)', padding: '2rem 0' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.05rem,1.8vw,1.35rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.9rem', lineHeight: 1.3 }}>{q}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--ink-dim)' }} className="speakable">{a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .disease-copy-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: 1fr !important; }
          .quote-cta-grid { grid-template-columns: 1fr !important; }
          .puccini-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />
    </>
  )
}
