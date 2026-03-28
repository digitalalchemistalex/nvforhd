'use client'
import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=footer-golf'

export default function Footer() {
  return (
    <footer>

      {/* ═══════════════════════════════════════
          BAND 1 — WHITE CTA. Last conversion.
          2-col desktop / 1-col mobile
      ═══════════════════════════════════════ */}
      <div className="footer-cta-band">
        <div className="footer-cta-inner">
          <div className="footer-cta-left">
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,3.2rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              You just read about<br />
              <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>real people, real stakes.</em>
            </div>
            <p style={{ fontSize: 'clamp(0.9rem,1.4vw,1rem)', color: 'var(--ink-mid)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '400px' }}>
              HD is terminal. No cure. The families in this story didn&apos;t choose it — but you can choose to help.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Nevada Non-Profit', '100% to Cause', 'No Overhead'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', color: 'var(--ink-dim)', fontWeight: 500 }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="footer-cta-right">
            <a href={DONATE} target="_blank" rel="noopener" className="footer-btn-primary">
              Donate Now — 100% to HD Families →
            </a>
            <a href={GOLF} target="_blank" rel="noopener" className="footer-btn-secondary">
              Play Golf — May 29, 2026 ↗
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.68rem', color: 'var(--ink-faint)' }}>
              Gray&apos;s Crossing, Truckee CA · 12:00 PM Shotgun
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BAND 2 — NAVY INFO
          Uses CSS classes so media queries work
      ═══════════════════════════════════════ */}
      <div className="footer-navy">
        <div className="footer-navy-inner">

          {/* 4-col → 2-col → 1-col via CSS class */}
          <div className="footer-cols">

            {/* Col 1 — Brand */}
            <div className="footer-col-brand">
              <Image src="/images/logo.png" alt="NVforHD" width={110} height={80}
                style={{ height: '38px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)', display: 'block', marginBottom: '1rem' }} />
              <p className="footer-brand-copy">
                Nevada non-profit fighting Huntington&apos;s Disease through community, golf, and direct impact since 2024.
              </p>
              <a href="tel:7756918860" className="footer-contact-link">📞 775-691-8860</a>
              <a href="mailto:info@nvforhd.com" className="footer-contact-link">✉ info@nvforhd.com</a>
            </div>

            {/* Col 2 — Navigate */}
            <div>
              <div className="footer-col-head">Navigate</div>
              <div className="footer-link-list">
                {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Causes'], ['/blog', 'Blog'], ['/gallery', 'Gallery'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact']].map(([href, label]) => (
                  <Link key={href} href={href} className="footer-link">{label}</Link>
                ))}
              </div>
            </div>

            {/* Col 3 — The Cause */}
            <div>
              <div className="footer-col-head">The Cause</div>
              <div className="footer-link-list">
                {[['/cause', 'What is HD?'], ['/impact', 'The Puccini Family'], ['/causes', '2024 · 2025 · 2026'], ['/story', 'Our Story'], ['/terms', 'Terms'], ['/cancellation', 'Cancellation']].map(([href, label]) => (
                  <Link key={href} href={href} className="footer-link">{label}</Link>
                ))}
              </div>
            </div>

            {/* Col 4 — Impact Stats */}
            <div className="footer-col-stats">
              <div className="footer-col-head">What We&apos;ve Done</div>
              <div className="footer-stats-block">
                {[
                  { n: '$50K+', label: 'Raised in 2 years' },
                  { n: '1',     label: 'HD-free baby funded' },
                  { n: '90+',   label: 'Families at UC Davis' },
                ].map(({ n, label }) => (
                  <div key={n} className="footer-stat-row">
                    <span className="footer-stat-n">{n}</span>
                    <span className="footer-stat-label">{label}</span>
                  </div>
                ))}
              </div>
              <div className="footer-stat-divider" />
              <a href="https://health.ucdavis.edu/huntingtons-disease" target="_blank" rel="noopener" className="footer-ucd-link">
                <span className="footer-ucd-year">2026 Beneficiary:</span>
                <span className="footer-ucd-name">UC Davis HD Center ↗</span>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span>© 2026 NVforHD · Nevada Non-Profit · 2600 Mill St. #400, Reno NV 89502</span>
            <span>
              Tournament logistics by{' '}
              <a href="https://www.golfthehighsierra.com?utm_source=nvforhd" target="_blank" rel="noopener" className="footer-gths-link">Golf The High Sierra</a>
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ─── CTA BAND ─── */
        .footer-cta-band {
          background: var(--white);
          border-top: 3px solid var(--blue);
        }
        .footer-cta-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: clamp(3rem,5vw,5.5rem) var(--px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem,5vw,5rem);
          align-items: center;
        }
        .footer-cta-right {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .footer-btn-primary {
          display: block;
          text-align: center;
          background: var(--blue);
          color: #fff;
          padding: 1.2rem 1.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          font-family: var(--sans);
          transition: background 0.2s;
        }
        .footer-btn-primary:hover { background: var(--blue-dark); }
        .footer-btn-secondary {
          display: block;
          text-align: center;
          background: transparent;
          color: var(--ink);
          border: 2px solid var(--ink);
          padding: 1.15rem 1.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
          font-family: var(--sans);
          transition: all 0.2s;
        }
        .footer-btn-secondary:hover { background: var(--ink); color: #fff; }

        /* ─── NAVY ─── */
        .footer-navy { background: var(--navy); }
        .footer-navy-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: clamp(3rem,5vw,5rem) var(--px) 0;
        }
        .footer-cols {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-col-head {
          font-size: 0.58rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(249,248,246,0.4);
          margin-bottom: 1.25rem;
          font-weight: 600;
          font-family: var(--sans);
        }
        .footer-brand-copy {
          font-size: 0.82rem;
          line-height: 1.85;
          color: rgba(249,248,246,0.65);
          font-weight: 300;
          max-width: 210px;
          margin-bottom: 1rem;
        }
        .footer-contact-link {
          display: block;
          color: rgba(249,248,246,0.8);
          text-decoration: none;
          font-size: 0.82rem;
          margin-bottom: 0.4rem;
        }
        .footer-link-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-link {
          color: rgba(249,248,246,0.65);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 300;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #fff; }

        /* ─── STATS COL ─── */
        .footer-col-stats {
          display: flex;
          flex-direction: column;
        }
        .footer-stats-block {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .footer-stat-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          padding: 0.55rem 0;
        }
        .footer-stat-n {
          font-family: var(--serif);
          font-size: 1.75rem;
          font-weight: 400;
          color: rgba(249,248,246,0.95);
          line-height: 1;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .footer-stat-label {
          font-size: 0.72rem;
          color: rgba(249,248,246,0.45);
          line-height: 1.4;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        .footer-stat-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 0.85rem 0;
          width: 60%;
        }
        .footer-ucd-link {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .footer-ucd-link:hover { opacity: 0.85; }
        .footer-ucd-year {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(249,248,246,0.35);
          font-family: var(--sans);
        }
        .footer-ucd-name {
          font-family: var(--serif);
          font-size: 0.95rem;
          color: rgba(249,248,246,0.65);
          font-style: italic;
          letter-spacing: 0.01em;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.5rem 0 calc(1.5rem + env(safe-area-inset-bottom, 0px));
          font-size: 0.65rem;
          color: rgba(249,248,246,0.65);
        }
        .footer-gths-link {
          color: rgba(249,248,246,0.4);
          text-decoration: none;
        }

        /* ─── MOBILE ─── */
        @media (max-width: 768px) {
          .footer-cta-inner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
          .footer-cta-left { text-align: left; }
          .footer-cols {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-col-brand { grid-column: 1 / -1; }
          .footer-brand-copy { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
          .footer-btn-primary, .footer-btn-secondary { font-size: 0.7rem; padding: 1rem; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      ` }} />
    </footer>
  )
}
