import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'
import MobileCTADock from '@/components/MobileCTADock'

export const metadata: Metadata = {
  title: "The Cause — What is Huntington's Disease | NVforHD",
  description: "Huntington's Disease is terminal, hereditary, and has no cure. Learn why NVforHD fights for HD families in Northern Nevada and beyond.",
}

export default function CausePage() {
  return (
    <>
      <Nav />
      <MobileCTADock />

      <PageHero
        kicker="Nevada for Huntington's Disease"
        headline={<>Terminal.<br /><em style={{ color: 'rgba(255,255,255,0.35)' }}>Hereditary.</em><br /><span style={{ color: 'var(--gold)' }}>No cure.</span></>}
        sub="HD destroys nerve cells — likened to Parkinson's, ALS, and Alzheimer's at the same time. Every child of an HD parent has a 50% chance of inheriting it."
        photo="/images/hd-ribbon.jpg"
        photoPosition="center"
        stat1={{ n: '1 in 10K', label: 'people have HD globally' }}
        stat2={{ n: '50%', label: 'hereditary rate' }}
        stat3={{ n: '0', label: 'known cures' }}
      />

      {/* What is HD */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
        <div className="divider-dark" />
        <div style={{ position: 'absolute', right: '-1rem', bottom: '-3rem', fontFamily: 'var(--serif)', fontSize: 'clamp(10rem,18vw,22rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(28,26,22,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>HD</div>

        <div className="inner grid-2">
          <ScrollReveal>
            <div className="kicker" style={{ marginBottom: '1.5rem' }}>The Disease</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem,4.5vw,5.5rem)', marginBottom: '2rem', color: 'var(--ink)' }}>
              A fight that spans<br /><em style={{ color: 'var(--ink-dimmer)' }}>generations.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
              HD is a hereditary brain disorder with no known cure — terminal. It causes deterioration of nerve cells likened to having <strong style={{ color: 'var(--ink)' }}>Parkinson's, ALS, and Alzheimer's simultaneously.</strong>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
              Symptoms typically emerge between ages 30–50 — after most people have already had children who may carry the same gene. Every child of an HD parent faces a <strong style={{ color: 'var(--ink)' }}>50% chance of inheriting it.</strong>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink-dim)' }}>
              This disease struck Sean Schaeffer's family when his wife Christine was diagnosed. NVforHD exists because of that diagnosis — and because of the hundreds of other families in Northern Nevada living the same reality.
            </p>
          </ScrollReveal>

          <div>
            {[
              { n: '01', body: <><strong>No known cure.</strong> HD is always fatal. Researchers are making progress but there is no approved treatment that slows or stops the disease.</> },
              { n: '02', body: <><strong>50% hereditary rate.</strong> IVF with preimplantation genetic testing permanently breaks the cycle. One procedure — no HD for future generations.</> },
              { n: '03', body: <><strong>UC Davis HD Center of Excellence</strong> — the only HD specialty clinic serving 90+ Northern Nevada families. 2 neurologists, 2 psychiatrists, 1 genetic counselor, 1 social worker, 2 PTs. Runs on private donation.</> },
              { n: '04', body: <><strong>1 in 10,000 people globally have HD.</strong> Approximately 30,000 Americans are symptomatic. Another 200,000 are at risk of inheriting it.</> },
            ].map(({ n, body }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.2rem', padding: '1.75rem 0', borderBottom: '1px solid var(--cream-3)' }}>
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

      {/* Stats band */}
      <section className="section-dark dark-section on-dark" style={{ position: 'relative' }}>
        <div className="photo-texture" style={{ backgroundImage: "url('/images/event-carts.jpg')", opacity: 0.08, filter: 'grayscale(20%)' }} />
        <div className="inner grid-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)', position: 'relative', zIndex: 1 }}>
          {[
            { n: '30,000', label: 'Americans\nsymptomatic today' },
            { n: '200K+', label: 'at risk of\ninheriting HD' },
            { n: '90+', label: 'Northern NV\nfamilies at UC Davis' },
            { n: '50%', label: 'hereditary rate —\never generation', gold: true },
          ].map(({ n, label, gold }, i) => (
            <ScrollReveal key={n} delay={i * 0.1} style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1rem,3vw,3rem)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem,5vw,6rem)', fontWeight: 300, lineHeight: 1, color: gold ? 'var(--gold)' : '#fff', marginBottom: '0.75rem' }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--white-dimmer)', lineHeight: 1.65, whiteSpace: 'pre-line', fontWeight: 500 }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
