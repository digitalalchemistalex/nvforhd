import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-golf'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>

      {/* ── PRE-FOOTER CTA BAND — cream, maximum contrast, last ask ── */}
      <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner" style={{
          padding: 'clamp(3rem,5vw,5.5rem) var(--px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem,5vw,6rem)',
          alignItems: 'center',
        }} className="footer-cta-grid">

          {/* Left — the mission in one sentence */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>May 29, 2026 · Truckee, CA</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.05, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              You just read about<br />
              <em style={{ color: 'var(--ink-dim)' }}>real families, real lives.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-mid)', lineHeight: 1.8, maxWidth: '420px' }}>
              HD takes everything from the people it touches — memory, movement, time. A golf tournament won&apos;t cure it. But it funds the care and research that might. And it already funded one baby&apos;s life.
            </p>
          </div>

          {/* Right — the ask, solid and clear */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* Primary — Donate */}
            <a href={DONATE} target="_blank" rel="noopener" style={{
              display: 'block', textAlign: 'center',
              background: 'var(--blue)', color: '#fff',
              padding: '1.2rem 2rem',
              fontSize: '0.75rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', fontWeight: 700,
              textDecoration: 'none', fontFamily: 'var(--sans)',
              transition: 'background 0.2s',
            }}>
              Donate Now — 100% to HD Families →
            </a>

            {/* Secondary — Golf */}
            <a href={GOLF} target="_blank" rel="noopener" style={{
              display: 'block', textAlign: 'center',
              background: 'transparent', color: 'var(--ink)',
              border: '2px solid var(--ink)',
              padding: '1.15rem 2rem',
              fontSize: '0.75rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', fontWeight: 600,
              textDecoration: 'none', fontFamily: 'var(--sans)',
              transition: 'all 0.2s',
            }}>
              Play Golf — May 29, 2026 ↗
            </a>

            {/* Trust signals */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', paddingTop: '0.5rem', flexWrap: 'wrap' }}>
              {['Nevada Non-Profit', '100% to Cause', 'No Overhead'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.68rem', color: 'var(--ink-dim)', fontWeight: 500 }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER — navy, but readable, not a black hole ── */}
      <div style={{ background: 'var(--navy)' }}>
        <div className="inner" style={{ padding: 'clamp(3rem,5vw,5rem) var(--px) 0' }}>

          {/* Top row — logo + mission + nav + contact */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="footer-main-grid">

            {/* Brand */}
            <div>
              <Image
                src="/images/logo.png"
                alt="NVforHD — Cure Huntington's Disease"
                width={130} height={95}
                style={{ height: '44px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)', marginBottom: '1.25rem', display: 'block' }}
              />
              <p style={{ fontSize: '0.85rem', lineHeight: 1.85, color: 'rgba(249,248,246,0.65)', fontWeight: 300, maxWidth: '220px', marginBottom: '1.5rem' }}>
                Nevada non-profit fighting Huntington&apos;s Disease through community, golf, and direct impact since 2024.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="tel:7756918860" style={{ color: 'rgba(249,248,246,0.8)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>📞</span> 775-691-8860
                </a>
                <a href="mailto:info@nvforhd.com" style={{ color: 'rgba(249,248,246,0.8)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>✉</span> info@nvforhd.com
                </a>
              </div>
            </div>

            {/* Navigate */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>Navigate</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Causes'], ['/blog', 'Blog'], ['/gallery', 'Gallery'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} style={{ color: 'rgba(249,248,246,0.65)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The cause */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>The Cause</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[['/cause', "What is HD?"], ['/impact', 'The Puccini Family'], ['/causes', '2024 · 2025 · 2026'], ['/story', 'Our Story'], ['/terms', 'Terms'], ['/cancellation', 'Cancellation']].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} style={{ color: 'rgba(249,248,246,0.65)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we've done — social proof in the footer */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>Impact to Date</div>
              {[
                { n: '$50K+', label: 'Raised in 2 years' },
                { n: '1',     label: 'HD-free baby funded' },
                { n: '90+',   label: 'Families at UC Davis' },
              ].map(({ n, label }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 600, color: '#fff', lineHeight: 1, flexShrink: 0 }}>{n}</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(249,248,246,0.5)', lineHeight: 1.4 }}>{label}</span>
                </div>
              ))}
              <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a href="https://health.ucdavis.edu/huntingtons-disease" target="_blank" rel="noopener" style={{ fontSize: '0.72rem', color: 'rgba(249,248,246,0.45)', textDecoration: 'none', lineHeight: 1.6 }}>
                  2026 Beneficiary: UC Davis HD<br />Center of Excellence ↗
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', padding: 'clamp(1.25rem,2vw,1.75rem) 0', fontSize: '0.68rem', color: 'rgba(249,248,246,0.3)' }}>
            <span>© 2026 NVforHD · Nevada Non-Profit · 2600 Mill St. #400, Reno NV 89502</span>
            <span>
              Tournament logistics by{' '}
              <a href="https://www.golfthehighsierra.com?utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-gths" target="_blank" rel="noopener" style={{ color: 'rgba(249,248,246,0.45)', textDecoration: 'none' }}>
                Golf The High Sierra
              </a>
            </span>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .footer-cta-grid  { grid-template-columns: 1fr !important; }
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 540px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </footer>
  )
}
