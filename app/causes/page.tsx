import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import VideoTestimonial from '@/components/VideoTestimonial'

export const metadata: Metadata = {
  title: "How NVforHD Funds the Fight Against Huntington's Disease",
  description: "Every dollar raised goes to one cause. 2024: IVF for an HD-free baby. 2025 & 2026: UC Davis HD Center serving 90+ Nevada families. See where your donation goes.",
  openGraph: {
    title: 'NVforHD Charity Causes — One Worthy Cause Every Year',
    description: '2024: HelpCureHD IVF funding. 2025 & 2026: UC Davis HD Center of Excellence serving 90+ Northern Nevada families.',
    images: [{ url: '/images/event-crowd.jpg', width: 1200, height: 630, alt: 'NVforHD Charity Causes' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVforHD Charity Causes — One Worthy Cause Every Year',
    description: '2025 & 2026: UC Davis HD Center of Excellence serving 90+ Northern Nevada families.',
    images: ['/images/event-crowd.jpg'],
  },
  alternates: { canonical: 'https://www.nvforhd.com/causes' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'Charity Causes', item: 'https://www.nvforhd.com/causes' },
  ],
}

const causesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What charity does NVforHD support in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2026 NVforHD is supporting the UC Davis Huntington\'s Disease Center of Excellence in Sacramento, CA — the closest specialist HD care for Northern Nevada families. The clinic serves over 90 families in the region and operates on private donations.' },
    },
    {
      '@type': 'Question',
      name: 'What did NVforHD fund in 2024?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2024 NVforHD raised $25,000 for HelpCureHD, funding IVF treatment for Brandon and Rylee Puccini — enabling them to have a baby free from Huntington\'s Disease.' },
    },
    {
      '@type': 'Question',
      name: 'How does NVforHD choose its charity cause each year?',
      acceptedAnswer: { '@type': 'Answer', text: 'Each year NVforHD selects one cause that directly supports Huntington\'s Disease treatment, awareness, or family assistance. The cause is chosen based on where funds can have the greatest direct impact on HD patients and families.' },
    },
    {
      '@type': 'Question',
      name: 'How many families does the UC Davis HD Center serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'The UC Davis Huntington\'s Disease Center of Excellence in Sacramento serves over 90 Northern Nevada families. The team includes 2 movement disorder neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 physical therapists, and 3 research coordinators.' },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NVforHD Charity Causes',
  url: 'https://www.nvforhd.com/causes',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.speakable-causes'],
  },
}

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=causes'

const ucDavisTeam = [
  '2 Movement Disorder Neurologists — specialising in HD',
  '2 Psychiatrists with specialised HD training',
  '1 HD Genetic Counselor',
  '1 HD Social Worker',
  '2 Physical Therapists with neuro specialty and experience in HD',
  '3 Research Coordinators (funded by study grants)',
]

export default function CausesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(causesFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Nav />
      <PageHero
        kicker="Our Charity Causes"
        headline={<>One cause.<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.35)' }}>Every year.</em></>}
        sub="Every dollar raised at NVforHD goes directly to one chosen cause. No overhead. No splitting. We pick the most impactful target each year and give everything."
        photo="/images/event-foursome-1.jpg"
        photoPosition="center 40%"
        stat1={{ n: '$50K+', label: 'Total raised' }}
        stat2={{ n: '90+', label: 'HD families served' }}
        stat3={{ n: '3', label: 'Causes funded' }}
      />

      {/* 2026 — light section, current year */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: 'clamp(2.5rem,4vw,4rem)', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(6rem,12vw,11rem)', fontWeight: 700, color: 'rgba(17,24,39,0.1)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.03em' }}>2026</div>
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(139,105,20,0.1)', border: '1px solid rgba(139,105,20,0.3)', color: 'var(--gold-dark)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  ✦ Current Year — Active
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2.5rem)', color: 'var(--ink)' }}>UC Davis HD Center of Excellence</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            <ScrollReveal>
              <p className="speakable-causes" style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
                For 2026 we are returning to support the <strong style={{ color: 'var(--ink)' }}>UC Davis Huntington&apos;s Disease Center of Excellence</strong> — the only specialty HD clinic serving Northern Nevada and our own beautiful Christine.
              </p>
              <p className="speakable-causes" style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '2.5rem' }}>
                This clinic operates entirely on private donation. Without continued support, over 90 families in our region lose access to the specialised neurologists, psychiatrists, and genetic counselors who guide them through their worst days. <strong style={{ color: 'var(--ink)' }}>Your round of golf directly funds this team.</strong>
              </p>
              <a href={BOOK} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'var(--ink)', color: 'var(--cream)', padding: '1rem 2.5rem', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', transition: 'background 0.2s' }}>
                Support This Cause →
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-light" style={{ padding: 'clamp(1.8rem,3vw,2.8rem)', borderTop: '3px solid var(--gold-dark)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.8rem', flexWrap: 'wrap' }}>
                  <div style={{ background: '#fff', padding: '8px 12px', border: '1px solid var(--cream-3)', borderRadius: '4px' }}>
                    <Image src="/images/uc-davis.png" alt="UC Davis Health" width={110} height={44} style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 700 }}>The HD Care Team</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)' }}>UC Davis Medical Center, Sacramento</div>
                  </div>
                </div>
                {ucDavisTeam.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.875rem', marginBottom: '0.8rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold-dark)', fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0, fontWeight: 700 }}>—</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--cream-3)', fontSize: '0.85rem', color: 'var(--ink-dim)' }}>
                  Serving <strong style={{ color: 'var(--gold-dark)' }}>90+ Northern Nevada families</strong> — the only HD specialty care for hundreds of miles.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2025 — dark navy */}
      <section className="section-dark dark-section on-dark" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-group-1.jpg')", opacity: 0.08, filter: 'grayscale(30%)' }} />
        <div className="divider-gold" />
        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: 'clamp(2.5rem,4vw,4rem)', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(6rem,12vw,11rem)', fontWeight: 700, color: 'rgba(255,255,255,0.12)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.03em' }}>2025</div>
              <div>
                <div style={{ display: 'inline-block', border: '1px solid rgba(245,242,234,0.12)', color: 'var(--white-dimmer)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>Completed</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2.5rem)', color: '#fff' }}>UC Davis HD Center of Excellence</div>
              </div>
            </div>
          </ScrollReveal>
          <div style={{ maxWidth: '820px' }}>
            <ScrollReveal>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--white-dim)', marginBottom: '1.5rem' }}>
                In 2025 we made a deliberate change — shifting our focus to help <strong style={{ color: '#fff' }}>more people in our Northern Nevada region</strong> with specialised care they cannot access anywhere else nearby.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--white-dim)', marginBottom: '1.5rem' }}>
                We chose the <strong style={{ color: '#fff' }}>Huntington&apos;s Disease Center of Excellence at UC Davis</strong> — the closest specialty care our community can reach. By choosing this team, we were able to directly assist over <strong style={{ color: '#fff' }}>45 Northern Nevada patients</strong> with 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, physical therapists, and research coordinators all dedicated to HD.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          TESTIMONIALS — UC Davis families
          Placed between 2025 and 2024 sections
          Maximum relevance: both speakers are UC Davis patients
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: 'var(--py-lg) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>From the Families We Serve</span>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4.5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              What UC Davis<br /><em style={{ color: 'var(--ink-dim)' }}>means to us.</em>
            </h2>
            <p style={{ marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-dim)', maxWidth: '560px', margin: '1.25rem auto 0' }}>
              Hear directly from families whose lives were changed by the same care team your donation supports.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }} className="causes-testimonials-grid">
            <VideoTestimonial
              youtubeId="7nDr5ous818"
              name="Tiffany"
              role="HD Family — UC Davis Patient"
              quote="From the moment we connected with them we were surrounded by people who understood what we were going through. They didn't just treat the medical side — they cared about the whole journey."
            />
            <VideoTestimonial
              youtubeId="zij5RaT5GsY"
              name="Mikey & Holly"
              role="HD Patient & Family — UC Davis Care Team"
              quote="Their care for us is not transactional — they are in this journey with us. We cannot have the quality of life that we have if it wasn't for them."
            />
            <VideoTestimonial
              youtubeId="7jrefyflRVc"
              name="Leilani Dunmoyer"
              role="Gene-Positive — UC Davis Patient Family"
              quote="We just felt hopeless and helpless — and then we found the UC Davis Center of Excellence. They have become like family right from the get-go."
            />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 900px) { .causes-testimonials-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .causes-testimonials-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* 2024 — light with Puccini letter */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div className="inner">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: 'clamp(2.5rem,4vw,4rem)', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(6rem,12vw,11rem)', fontWeight: 700, color: 'rgba(17,24,39,0.1)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.03em' }}>2024</div>
              <div>
                <div style={{ display: 'inline-block', background: 'var(--cream-2)', border: '1px solid var(--cream-3)', color: 'var(--ink-dimmer)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>Inaugural Year · Sold Out</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2.5vw,2.5rem)', color: 'var(--ink)' }}>HelpCureHD — IVF for HD Families</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            <ScrollReveal>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
                For 2024 all proceeds benefited <a href="http://www.helpcurehd.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=causes-2024" target="_blank" rel="noopener" style={{ color: 'var(--gold-dark)', fontWeight: 600, textDecoration: 'none' }}>HelpCureHD</a> — an organisation inspired by Lee Smith, mother of MLB veteran Joe Smith. Lee was diagnosed with HD in 2012 and passed in 2020 just shy of her 62nd birthday.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
                Joe and his wife, TNT reporter Allie LaForce, are fulfilling a promise to end Huntington&apos;s disease one family at a time. HelpCureHD funds IVF with genetic screening so children can be born HD-free — helping <strong style={{ color: 'var(--ink)' }}>over 135 families nationally.</strong>
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)' }}>
                Our 2024 goal was to raise enough to help <strong style={{ color: 'var(--ink)' }}>one family end the cycle of pain and suffering.</strong> We achieved it. Brandon and Rylee Puccini are now expecting — the baby is HD-free.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/rb-letter.png"
                  alt="Expecting! — Thank you letter from Rylee and Brandon Puccini after IVF funded by NVforHD 2024 golf tournament"
                  width={791} height={1024}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px', boxShadow: '0 16px 60px rgba(28,26,22,0.15)' }}
                />
                <div style={{ marginTop: '1.25rem', padding: '1.2rem 1.5rem', background: 'var(--cream-2)', border: '1px solid var(--cream-3)', borderLeft: '3px solid var(--gold-dark)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-dim)', lineHeight: 1.75 }}>
                    &ldquo;Thank you for gifting us with the miracle of life — and specifically life that is Huntington&apos;s free.&rdquo;
                  </p>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', marginTop: '0.5rem', fontWeight: 600 }}>— Rylee and Brandon Puccini, 2026</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(2.5rem,4vw,4rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner hub-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
          {[
            { href: '/sponsors', title: 'Become a Sponsor', desc: 'Put your name on the cause. Packages from $100.' },
            { href: '/about', title: 'Meet the Board', desc: 'The people who choose and steward every cause.' },
            { href: '/blog', title: 'Read the IVF Story', desc: 'How $25,000 gave the Puccini family an HD-free baby.' },
            { href: '/contact', title: 'Donate Now', desc: '100% goes directly to UC Davis HD families.' },
          ].map(({ href, title, desc }) => (
            <a key={href} href={href} style={{ display: 'block', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--cream-3)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--blue)', marginBottom: '0.4rem' }}>{title} →</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
