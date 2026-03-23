import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Charity Causes — 2024 & 2025',
  description: "NVforHD selects one cause per year. 2024: HelpCureHD — IVF for HD families. 2025 & 2026: UC Davis HD Center of Excellence serving 90+ Northern Nevada families. Learn more.",
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
      <Nav />

      {/* Header — event photo as texture */}
      <div style={{ position: 'relative', background: 'var(--deep)', padding: '11rem 5rem 5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/hd-ribbon.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07, filter: 'grayscale(20%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,12,20,0.7) 0%, rgba(10,12,20,0.95) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <div className="kicker" style={{ marginBottom: '1.5rem' }}>Our Charity Causes</div>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,6vw,7rem)', marginBottom: '1.5rem' }}>
            One cause.<br /><em>Every year.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(245,242,234,0.65)', fontWeight: 300, maxWidth: '600px', lineHeight: 1.8 }}>
            Every dollar raised at NVforHD goes directly to one chosen cause. No overhead. No splitting. We pick the most impactful target each year and give everything.
          </p>
        </div>
      </div>

      {/* 2026 — current */}
      <section style={{ background: 'var(--void)', padding: '7rem 5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle event photo bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-green.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.06, filter: 'grayscale(30%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem,8vw,9rem)', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}>2026</div>
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                  Current Year — Active
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 300, color: '#fff' }}>
                  UC Davis HD Center of Excellence
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <ScrollReveal>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.75)', fontWeight: 300, marginBottom: '1.5rem' }}>
                For 2026 we are returning to support the <strong style={{ color: '#fff', fontWeight: 600 }}>UC Davis Huntington&apos;s Disease Center of Excellence</strong> — the only specialty HD clinic serving Northern Nevada and our own beautiful Christine.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.75)', fontWeight: 300, marginBottom: '2.5rem' }}>
                This clinic operates entirely on private donation. Without continued support, over 90 families in our region lose access to the specialised neurologists, psychiatrists, and genetic counselors who guide them through their worst days. <strong style={{ color: '#fff', fontWeight: 600 }}>Your round of golf directly funds this team.</strong>
              </p>
              <a href={BOOK} target="_blank" rel="noopener" className="btn-gold">
                Support This Cause — Register Now →
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <Image src="/images/uc-davis.png" alt="UC Davis Health" width={120} height={50} style={{ height: '40px', width: 'auto', objectFit: 'contain', background: '#fff', padding: '6px 10px', borderRadius: '4px' }} />
                  <div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.2rem' }}>The HD Care Team</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: '#fff', fontWeight: 300 }}>UC Davis Medical Center, Sacramento</div>
                  </div>
                </div>
                {ucDavisTeam.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '1rem', marginBottom: '0.85rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0, fontWeight: 600 }}>—</span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(245,242,234,0.72)', fontWeight: 300, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(245,242,234,0.08)', fontSize: '0.88rem', color: 'rgba(245,242,234,0.55)', fontWeight: 300 }}>
                  Serving <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>90+ Northern Nevada families</strong> — the only HD specialty care for hundreds of miles.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2025 */}
      <section style={{ background: 'var(--deep)', padding: '7rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(245,242,234,0.08),transparent)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/event-group-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05, filter: 'grayscale(40%)' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem,8vw,9rem)', fontWeight: 300, color: 'rgba(245,242,234,0.06)', lineHeight: 1 }}>2025</div>
              <div>
                <div style={{ display: 'inline-block', border: '1px solid rgba(245,242,234,0.12)', color: 'rgba(245,242,234,0.45)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                  Completed
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 300, color: '#fff' }}>
                  UC Davis HD Center of Excellence
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '900px' }}>
            <ScrollReveal>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }}>
                In 2025 we made a deliberate change — shifting our focus to help <strong style={{ color: '#fff', fontWeight: 600 }}>more people in our Northern Nevada region</strong> with the kind of specialised care they cannot access anywhere else nearby.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }}>
                We chose to support the <strong style={{ color: '#fff', fontWeight: 600 }}>Huntington&apos;s Disease Center of Excellence at UC Davis</strong> — the closest specialty care our community can reach for vital services tailored specifically to those suffering from HD.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300 }}>
                By choosing the amazing team at UC Davis, we were able to directly assist over <strong style={{ color: '#fff', fontWeight: 600 }}>45 Northern Nevada patients</strong> afflicted with Huntington&apos;s Disease — with 2 neurologists, 2 psychiatrists, a genetic counselor, social worker, physical therapists, and research coordinators all dedicated to HD.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2024 — with real Puccini letter image */}
      <section style={{ background: 'var(--void)', padding: '7rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(245,242,234,0.08),transparent)' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(4rem,8vw,9rem)', fontWeight: 300, color: 'rgba(245,242,234,0.05)', lineHeight: 1 }}>2024</div>
              <div>
                <div style={{ display: 'inline-block', border: '1px solid rgba(245,242,234,0.12)', color: 'rgba(245,242,234,0.45)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                  Inaugural Year · Sold Out
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,2.5vw,2.5rem)', fontWeight: 300, color: '#fff' }}>
                  HelpCureHD — IVF for HD Families
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <ScrollReveal>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }}>
                  NVforHD is a Nevada based organisation dedicated to helping raise awareness of Huntington&apos;s Disease. The cause is near and dear to our hearts because it has affected someone very close to us.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }}>
                  For 2024, we announced that all proceeds from our inaugural event would benefit{' '}
                  <a href="http://www.helpcurehd.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=causes-2024" target="_blank" rel="noopener" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>HelpCureHD</a>
                  {' '}— an incredible organisation inspired by Lee Smith, mother of MLB veteran Joe Smith. Lee was diagnosed with HD in 2012 and passed in 2020, just shy of her 62nd birthday.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300, marginBottom: '1.5rem' }}>
                  Joe and his wife, TNT reporter Allie LaForce, are fulfilling a promise made to Lee to end Huntington&apos;s disease, one family at a time. HelpCureHD provides families in financial need the ability to have babies free from this awful disease — <strong style={{ color: '#fff', fontWeight: 600 }}>helping over 135 families nationally.</strong>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'rgba(245,242,234,0.72)', fontWeight: 300 }}>
                  Our 2024 goal was to raise enough to help <strong style={{ color: '#fff', fontWeight: 600 }}>one family end the cycle of pain and suffering.</strong> We achieved it. Helping one family with IVF potentially saves hundreds of future people — with just one act of kindness.
                </p>
              </ScrollReveal>
            </div>

            {/* The real Puccini letter */}
            <ScrollReveal delay={0.15}>
              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/rb-letter.png"
                  alt="Thank you letter from Rylee and Brandon Puccini — 'Expecting!' — showing Rylee pregnant after IVF funded by NVforHD 2024 golf tournament"
                  width={791} height={1024}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
                />
                <div style={{
                  position: 'absolute', bottom: '-1rem', left: '1.5rem', right: '1.5rem',
                  padding: '1.2rem 1.5rem',
                  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                  backdropFilter: 'blur(12px)',
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(245,242,234,0.8)' }}>
                    &ldquo;Thank you for gifting us with the miracle of life — and specifically life that is Huntington&apos;s free.&rdquo;
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold)', marginTop: '0.4rem', letterSpacing: '0.05em' }}>
                    — Rylee and Brandon Puccini, 2026
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
