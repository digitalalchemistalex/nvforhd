'use client'
import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-golf'

export default function Footer() {
  return (
    <footer>

      {/* ═══════════════════════════════════════════
          BAND 1 — CREAM. Last conversion moment.
          Person who scrolled everything ends up here.
          Give them one clear reason to act.
      ═══════════════════════════════════════════ */}
      <div style={{
        background: 'var(--white)',
        borderTop: '3px solid var(--blue)',
      }}>
        <div style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: 'clamp(3.5rem,6vw,6rem) var(--px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2.5rem,5vw,6rem)',
          alignItems: 'center',
        }}>

          {/* Left: the final emotional statement */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,3.5vw,3.5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              You just read about<br />
              <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>real people, real stakes.</em>
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--ink-mid)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '400px' }}>
              HD is terminal. It has no cure. The families in this story didn&apos;t choose it — but you can choose to help.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['Nevada Non-Profit', '100% to Cause', 'No Overhead'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--ink-dim)', fontWeight: 500 }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: two clear CTAs stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <a href={DONATE} target="_blank" rel="noopener"
              style={{
                display: 'block', textAlign: 'center',
                background: 'var(--blue)', color: '#fff',
                padding: '1.25rem 2rem',
                fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'var(--sans)',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-dark)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
              Donate Now — 100% to HD Families →
            </a>
            <a href={GOLF} target="_blank" rel="noopener"
              style={{
                display: 'block', textAlign: 'center',
                background: 'transparent', color: 'var(--ink)',
                border: '2px solid var(--ink)',
                padding: '1.2rem 2rem',
                fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'var(--sans)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)' }}>
              Play Golf — May 29, 2026 ↗
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--ink-faint)', marginTop: '0.25rem' }}>
              Gray&apos;s Crossing, Truckee CA · 12:00 PM Shotgun
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BAND 2 — NAVY. Info layer. Legible.
          Not a black hole. Navy #0B1628 with
          text at proper readable opacity.
      ═══════════════════════════════════════════ */}
      <div style={{ background: 'var(--navy)' }}>
        <div style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: 'clamp(3rem,5vw,5rem) var(--px) 0',
        }}>

          {/* 4-col grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1.4fr',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>

            {/* Col 1 — Brand */}
            <div>
              <Image src="/images/logo.png" alt="NVforHD" width={130} height={95}
                style={{ height: '42px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)', display: 'block', marginBottom: '1.25rem' }} />
              <p style={{ fontSize: '0.85rem', lineHeight: 1.85, color: 'rgba(249,248,246,0.7)', fontWeight: 300, maxWidth: '220px', marginBottom: '1.5rem' }}>
                Nevada non-profit fighting Huntington&apos;s Disease through community, golf, and direct impact since 2024.
              </p>
              <a href="tel:7756918860" style={{ display: 'block', color: 'rgba(249,248,246,0.85)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '0.5rem' }}>📞 775-691-8860</a>
              <a href="mailto:info@nvforhd.com" style={{ display: 'block', color: 'rgba(249,248,246,0.85)', textDecoration: 'none', fontSize: '0.85rem' }}>✉ info@nvforhd.com</a>
            </div>

            {/* Col 2 — Navigate */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Causes'], ['/blog', 'Blog'], ['/gallery', 'Gallery'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact']].map(([href, label]) => (
                  <Link key={href} href={href} style={{ color: 'rgba(249,248,246,0.7)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>{label}</Link>
                ))}
              </div>
            </div>

            {/* Col 3 — The Cause */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.25rem', fontWeight: 600 }}>The Cause</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[['/cause', 'What is HD?'], ['/impact', 'The Puccini Family'], ['/causes', '2024 · 2025 · 2026'], ['/story', 'Our Story'], ['/terms', 'Terms'], ['/cancellation', 'Cancellation']].map(([href, label]) => (
                  <Link key={href} href={href} style={{ color: 'rgba(249,248,246,0.7)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}>{label}</Link>
                ))}
              </div>
            </div>

            {/* Col 4 — Impact stats — social proof that never leaves */}
            <div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', marginBottom: '1.5rem', fontWeight: 600 }}>What We&apos;ve Done</div>
              {[
                { n: '$50K+', label: 'Raised in 2 years' },
                { n: '1',     label: 'HD-free baby funded' },
                { n: '90+',   label: 'Families at UC Davis' },
              ].map(({ n, label }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.1rem' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 600, color: '#fff', lineHeight: 1, flexShrink: 0 }}>{n}</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(249,248,246,0.55)', lineHeight: 1.4 }}>{label}</span>
                </div>
              ))}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a href="https://health.ucdavis.edu/huntingtons-disease" target="_blank" rel="noopener"
                  style={{ fontSize: '0.72rem', color: 'rgba(249,248,246,0.45)', textDecoration: 'none', lineHeight: 1.7 }}>
                  2026 Beneficiary:<br />UC Davis HD Center of Excellence ↗
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '0.75rem',
            padding: '1.5rem 0 calc(1.5rem + env(safe-area-inset-bottom, 0px))',
            fontSize: '0.68rem', color: 'rgba(249,248,246,0.28)',
          }}>
            <span>© 2026 NVforHD · Nevada Non-Profit · 2600 Mill St. #400, Reno NV 89502</span>
            <span>
              Tournament logistics by{' '}
              <a href="https://www.golfthehighsierra.com?utm_source=nvforhd" target="_blank" rel="noopener"
                style={{ color: 'rgba(249,248,246,0.45)', textDecoration: 'none' }}>Golf The High Sierra</a>
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        footer > div:first-child > div {
          align-items: center;
        }
        @media (max-width: 900px) {
          footer > div:first-child > div { grid-template-columns: 1fr !important; }
          footer > div:last-child > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 540px) {
          footer > div:last-child > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </footer>
  )
}
