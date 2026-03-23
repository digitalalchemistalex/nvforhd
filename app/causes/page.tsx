import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import DonateBlock from '@/components/DonateBlock'

export const metadata: Metadata = {
  title: 'Charity Causes — 2024, 2025 & 2026',
  description: 'NVforHD selects one charity cause per year. 2024: HelpCureHD (IVF for HD families). 2025 & 2026: UC Davis HD Center of Excellence, serving 90+ Northern Nevada families.',
}

export default function CausesPage() {
  return (
    <>
      <Nav />

      <div style={{ background: 'var(--deep)', padding: '12rem 5rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.15),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Our Charity Causes</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,5vw,6rem)' }}>
            One cause.<br /><em>Every year.</em>
          </h1>
          <p className="body-text" style={{ maxWidth: '600px', marginTop: '2rem' }}>
            Every dollar raised at NVforHD goes directly to one chosen cause. No overhead. No splitting between organisations. We pick the most impactful target each year and go all in.
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--void)', padding: '8rem 5rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.07)' }}>

          {/* 2026 */}
          <ScrollReveal>
            <div style={{ background: 'var(--void)', padding: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '5rem', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}>2026</div>
                <div>
                  <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.22rem 0.7rem', marginBottom: '0.75rem' }}>Current Year</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--white)' }}>UC Davis HD Center of Excellence</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                <div>
                  <p className="body-text">For 2026 we are once again supporting the UC Davis Huntington&apos;s Disease Center of Excellence — the only specialty HD clinic serving Northern Nevada. This clinic directly helps our own family and over 90 others in our region.</p>
                  <p className="body-text" style={{ marginTop: '1rem' }}>This clinic operates entirely on private donation. Without continued support, 90+ families lose access to the specialised neurologists, psychiatrists, genetic counselors, and social workers who guide them through their worst days.</p>
                  <div style={{ marginTop: '2.5rem' }}>
                    <DonateBlock />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>The UC Davis HD Team</div>
                  {[
                    '2 Movement Disorder Neurologists — specialising in HD',
                    '2 Psychiatrists with specialised HD training',
                    '1 HD Genetic Counselor',
                    '1 HD Social Worker',
                    '2 Physical Therapists with HD specialty',
                    '3 Research Coordinators (grant-funded)',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.7rem', marginTop: '0.2rem', flexShrink: 0 }}>—</span>
                      <span className="body-text" style={{ fontSize: '0.85rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2025 */}
          <ScrollReveal>
            <div style={{ background: 'rgba(245,242,234,0.01)', padding: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '5rem', fontWeight: 300, color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>2025</div>
                <div>
                  <div style={{ display: 'inline-block', border: '1px solid rgba(245,242,234,0.1)', color: 'rgba(245,242,234,0.4)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.22rem 0.7rem', marginBottom: '0.75rem' }}>Completed</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--white)' }}>UC Davis HD Center of Excellence</div>
                </div>
              </div>
              <p className="body-text" style={{ maxWidth: '700px' }}>In 2025 we shifted our focus to regional impact — funding the closest HD specialty care for Northern Nevada families. The UC Davis team serves over 45 Northern Nevada patients with the kind of specialised care they cannot access anywhere else in the region.</p>
            </div>
          </ScrollReveal>

          {/* 2024 */}
          <ScrollReveal>
            <div style={{ background: 'rgba(245,242,234,0.01)', padding: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '5rem', fontWeight: 300, color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>2024</div>
                <div>
                  <div style={{ display: 'inline-block', border: '1px solid rgba(245,242,234,0.1)', color: 'rgba(245,242,234,0.4)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.22rem 0.7rem', marginBottom: '0.75rem' }}>Inaugural Year · Sold Out</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--white)' }}>HelpCureHD — IVF for HD Families</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                <div>
                  <p className="body-text">Our 2024 cause was <a href="http://www.helpcurehd.com" target="_blank" rel="noopener" style={{ color: 'var(--gold)', textDecoration: 'none' }}>HelpCureHD</a> — an organisation inspired by Lee Smith, mother of MLB veteran Joe Smith. Lee was diagnosed with HD in 2012 and passed in 2020. Her son Joe and his wife, TNT reporter Allie LaForce, created HelpCureHD to fulfil a promise: end Huntington&apos;s disease, one family at a time.</p>
                  <p className="body-text" style={{ marginTop: '1rem' }}>HelpCureHD provides IVF funding so families carrying the HD gene can have children who are genetically Huntington&apos;s free. The organisation has helped over 135 families nationally.</p>
                  <p className="body-text" style={{ marginTop: '1rem' }}>Our 2024 goal was to raise enough to fund one family&apos;s IVF journey. <strong>We achieved it.</strong> Brandon and Rylee Puccini were chosen. Rylee is now pregnant with a Huntington&apos;s-free baby.</p>
                </div>
                <div style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(245,242,234,0.6)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                    &ldquo;Rylee is pregnant! We had a successful embryo transfer at the Santa Barbara Fertility Center. Thank you for gifting us the miracle of life — and specifically life that is Huntington&apos;s free.&rdquo;
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gold)' }}>
                    — Rylee and Brandon Puccini, 2026
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
