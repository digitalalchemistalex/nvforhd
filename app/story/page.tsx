import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import MobileCTADock from '@/components/MobileCTADock'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Our Story - Three Years of Fighting HD | NVforHD",
  description: "Sean Schaeffer's wife Christine was diagnosed with Huntington's Disease. He didn't hold a fundraiser. He started a fight. $50,000 raised. One HD-free baby. 90+ families served.",
  openGraph: {
    images: [{ url: '/images/hero-couple.jpg' }],
  },
}

const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=story-golf'
const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=story-donate'

export default function StoryPage() {
  return (
    <>
      <Nav />
      <MobileCTADock />

      {/* ═══════════════════════════════════
          HERO — Sean's decision. The origin.
          Full bleed. The couple photo.
      ═══════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/hero-couple.jpg" alt="Sean and Christine Schaeffer" fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }} priority quality={90} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(6,13,26,0.97) 0%, rgba(6,13,26,0.85) 45%, rgba(6,13,26,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.8) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', zIndex: 3 }} />

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--px)', paddingTop: 'clamp(8rem,16vw,12rem)', paddingBottom: 'clamp(5rem,10vw,8rem)', width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(29,78,216,0.9)' }}>The Origin Story · Founded 2024</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.5rem,7vw,8rem)', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.025em', color: '#fff', marginBottom: '2.5rem' }}>
                He didn&apos;t grieve.<br />
                <em style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>He started</em><br />
                a fight.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1.75rem', marginBottom: '3rem' }}>
                <p style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontWeight: 300 }}>
                  Sean Schaeffer spent 30 years building companies, running operations, creating things. When his wife Christine was diagnosed with Huntington&apos;s Disease — a terminal, hereditary brain disorder with no cure — he did what builders do.
                </p>
                <p style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
                  <strong style={{ color: '#fff' }}>He built something to fight it.</strong>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#2024" style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '1rem 2rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                  Read the Story ↓
                </a>
                <a href={DONATE} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1.5px solid rgba(255,255,255,0.3)', padding: '1rem 2rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                  Donate Now
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll hint */}
          <div style={{ position: 'absolute', bottom: '3rem', right: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }} className="scroll-indicator">
            <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '25px', background: 'linear-gradient(to bottom, transparent, rgba(29,78,216,0.8))', animation: 'scrolldrop 2.2s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          YEAR 2024 — The First Fight
          Left: event crowd photo. Right: the story.
      ═══════════════════════════════════ */}
      <section id="2024" style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        {/* Year watermark */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-1rem', top: '-2rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)', fontWeight: 700, color: 'rgba(17,24,39,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>2024</div>

        <div className="inner" style={{ padding: 'var(--py-xl) var(--px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="story-grid">

            {/* Photo */}
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px', border: '1px solid var(--cream-3)', zIndex: 0 }} />
                <Image src="/images/event-crowd.jpg" alt="The inaugural 2024 NVforHD golf tournament — sold out" width={900} height={600}
                  style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center', display: 'block', position: 'relative', zIndex: 1, boxShadow: '0 24px 60px rgba(17,24,39,0.14)' }} />
                {/* Year badge over photo */}
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, zIndex: 2, padding: '2rem 1.75rem 1.75rem', background: 'linear-gradient(to top, rgba(17,24,39,0.85), transparent)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Old Greenwood Golf Club · Truckee, CA · 2024</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.15}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--blue)', color: '#fff', fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.8rem' }}>Year One · Inaugural</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', color: 'var(--ink-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sold Out</div>
              </div>

              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                $25,000.<br />
                <em style={{ color: 'var(--ink-dim)', fontStyle: 'italic' }}>One family&apos;s<br />entire future.</em>
              </h2>

              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink-mid)', marginBottom: '1.25rem', fontWeight: 300 }}>
                The first NVforHD tournament sold out before many people knew what it was. Sean had a phone, a cause, and a network. He worked it. Every spot filled.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink-mid)', marginBottom: '1.25rem', fontWeight: 300 }}>
                Every dollar went to <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>HelpCureHD</strong> — a nonprofit founded by MLB pitcher Joe Smith after his mother Lee died of HD in 2020. HelpCureHD funds IVF with genetic screening so families carrying the gene can have children who are HD-free.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink-mid)', marginBottom: '2rem', fontWeight: 300 }}>
                HelpCureHD vetted the candidates and selected Brandon and Rylee Puccini. <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>The embryo transfer was successful. They heard the heartbeat.</strong>
              </p>

              <Link href="/impact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--blue)', textDecoration: 'none' }}>
                Read the Puccini story →
              </Link>
            </ScrollReveal>
          </div>

          {/* Rylee quote — full width pull */}
          <ScrollReveal delay={0.1} style={{ marginTop: 'clamp(4rem,7vw,7rem)' }}>
            <div style={{ borderLeft: '4px solid var(--blue)', paddingLeft: 'clamp(2rem,4vw,4rem)', maxWidth: '860px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1.5rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.35, marginBottom: '1.25rem' }}>
                &ldquo;Thank you for gifting us life that is Huntington&apos;s free. Every time we look at our future child it will be a reminder of the kindness you all showed us.&rdquo;
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
                — Rylee Puccini, 2026 · Funded by the 2024 NVforHD Tournament
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
          YEAR 2025 — Protecting the clinic
          Dark section, photo right, text left
      ═══════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-1rem', top: '-2rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>2025</div>

        <div className="inner" style={{ padding: 'var(--py-xl) var(--px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'center' }} className="story-grid">

            {/* Content — left */}
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(29,78,216,0.3)', border: '1px solid var(--blue)', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.8rem' }}>Year Two · 2025</div>
              </div>

              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 300, color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                The closest clinic<br />
                <em style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>is 130 miles<br />from home.</em>
              </h2>

              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '1.25rem', fontWeight: 300 }}>
                In 2025 we made a deliberate shift. Instead of funding a single family, we asked: what would protect the most people in our region right now?
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '1.25rem', fontWeight: 300 }}>
                The answer was the <strong style={{ color: '#fff', fontWeight: 600 }}>UC Davis Huntington&apos;s Disease Center of Excellence</strong> in Sacramento. The only specialist HD clinic within reach of Northern Nevada. Over 90 families in Reno, Sparks, and the Sierra Foothills make that drive because there is no alternative.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', fontWeight: 300 }}>
                The clinic runs on private donation. Without it, those 90 families lose access to neurologists, psychiatrists, genetic counselors, and social workers who specialize specifically in HD. <strong style={{ color: '#fff' }}>NVforHD funds that team.</strong>
              </p>

              {/* UC Davis team breakdown */}
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.75rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', fontWeight: 600 }}>The UC Davis HD Team</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem' }}>
                  {['2 Movement Disorder Neurologists', '2 HD-specialized Psychiatrists', '1 Genetic Counselor', '1 Social Worker', '2 Physical Therapists', '3 Research Coordinators'].map(role => (
                    <div key={role} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, paddingBottom: '0.5rem' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, marginTop: '0.4rem' }} />
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Photo — right */}
            <ScrollReveal delay={0.15}>
              <div style={{ position: 'relative' }}>
                <Image src="/images/event-group-2.jpg" alt="2025 NVforHD tournament — funding UC Davis HD Center" width={900} height={600}
                  style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center top', display: 'block', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }} />
                {/* UC Davis logo overlay */}
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'rgba(6,13,26,0.9)', padding: '0.75rem 1.25rem', backdropFilter: 'blur(12px)' }}>
                  <Image src="/images/uc-davis.png" alt="UC Davis Health" width={100} height={40} style={{ height: '28px', width: 'auto', display: 'block' }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          YEAR 2026 — The Call to Action
          Light, urgent, forward-looking.
      ═══════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Course photo full bleed background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/images/course-1.jpg" alt="Gray's Crossing Golf Club, Truckee CA" fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }} quality={85} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.82)' }} />
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', right: '-1rem', bottom: '-3rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)', fontWeight: 700, color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em' }}>2026</div>

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'var(--py-xl) var(--px)' }}>
          <div style={{ maxWidth: '700px' }}>
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--blue)', color: '#fff', fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.8rem' }}>Year Three · May 29, 2026</div>
                <div style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)', color: 'var(--gold-light)', fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, padding: '0.3rem 0.8rem' }}>Registration Open</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem,5vw,6rem)', fontWeight: 300, color: '#fff', lineHeight: 0.95, marginBottom: '2rem', letterSpacing: '-0.025em' }}>
                The story isn&apos;t over.<br />
                <em style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Chapter three<br />needs you.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.75)', marginBottom: '1.25rem', fontWeight: 300 }}>
                We return to Gray&apos;s Crossing on <strong style={{ color: '#fff' }}>May 29, 2026</strong> — a Peter Jacobsen-designed course in the Sierra Nevada pines outside Truckee. For the second year running, every dollar goes directly to the UC Davis HD Center.
              </p>
              <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.75)', marginBottom: '3rem', fontWeight: 300 }}>
                The 90+ families who depend on that clinic don&apos;t know your name. But they benefit from your round of golf. <strong style={{ color: '#fff' }}>That&apos;s what this has always been about.</strong>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={GOLF} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '1.15rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', transition: 'background 0.2s' }}>
                  Register to Play →
                </a>
                <a href={DONATE} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', padding: '1.1rem 2rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                  Donate Without Playing
                </a>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
                12:00 PM Shotgun · Four-Person Scramble · Lunch Included · Gray&apos;s Crossing, Truckee CA
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAND — light, clean, credible
      ═══════════════════════════════════ */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)' }}>
        <div className="inner stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { n: '$25K', label: 'Raised', sub: '2024 · First year' },
            { n: '$25K+', label: 'Raised', sub: '2025 · UC Davis' },
            { n: '$50K+', label: 'Total raised', sub: 'Two years combined' },
            { n: '1', label: 'HD-free baby', sub: 'On the way', blue: true },
          ].map(({ n, label, sub, blue }, i) => (
            <ScrollReveal key={n + i} delay={i * 0.08} style={{ padding: 'clamp(2.5rem,4vw,4rem) clamp(1.5rem,3vw,3rem)', borderRight: i < 3 ? '1px solid var(--cream-3)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5vw,5.5rem)', fontWeight: 600, lineHeight: 1, color: blue ? 'var(--blue)' : 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>{n}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--ink-dim)' }}>{sub}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .stats-grid  { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />
    </>
  )
}
