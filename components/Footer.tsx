import Image from 'next/image'
import Link from 'next/link'

const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--void)',
      padding: '6rem 5rem 4rem',
      borderTop: '1px solid rgba(201,168,76,0.08)',
    }}>
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
        gap: '5rem', marginBottom: '4rem',
      }}>
        <div>
          <Image src="/images/logo.png" alt="NVforHD" width={120} height={87}
            style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.5, marginBottom: '1.5rem', display: 'block' }} />
          <p style={{ fontSize: '0.82rem', lineHeight: 1.85, color: 'rgba(245,242,234,0.25)', fontWeight: 300, maxWidth: '270px' }}>
            A Nevada non-profit raising awareness and funds to battle Huntington&apos;s Disease — one round of golf at a time.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.65rem', color: 'rgba(245,242,234,0.15)' }}>
            Tournament logistics by{' '}
            <a href="https://www.golfthehighsierra.com" target="_blank" rel="noopener"
              style={{ color: 'rgba(245,242,234,0.18)', textDecoration: 'none' }}>
              Golf The High Sierra
            </a>
          </p>
        </div>

        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.18)', marginBottom: '1.2rem' }}>Navigate</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/causes', 'Charity Causes'], ['/sponsors', 'Sponsors'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(245,242,234,0.35)', textDecoration: 'none', fontSize: '0.82rem' }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.18)', marginBottom: '1.2rem' }}>Legal</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/terms" style={{ color: 'rgba(245,242,234,0.35)', textDecoration: 'none', fontSize: '0.82rem' }}>Terms &amp; Conditions</Link></li>
            <li><Link href="/cancellation" style={{ color: 'rgba(245,242,234,0.35)', textDecoration: 'none', fontSize: '0.82rem' }}>Cancellation Policy</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.18)', marginBottom: '1.2rem' }}>Contact</div>
          <a href="tel:7756918860" style={{ display: 'block', color: 'rgba(245,242,234,0.35)', textDecoration: 'none', fontSize: '0.82rem', marginBottom: '0.6rem' }}>775-691-8860</a>
          <a href="mailto:info@nvforhd.com" style={{ display: 'block', color: 'rgba(245,242,234,0.35)', textDecoration: 'none', fontSize: '0.82rem', marginBottom: '1rem' }}>info@nvforhd.com</a>
          <a href={D150} target="_blank" rel="noopener" className="btn-outline-gold"
            style={{ fontSize: '0.65rem', padding: '0.7rem 1.4rem' }}>
            Donate — Any Amount ↗
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: '2rem', borderTop: '1px solid rgba(245,242,234,0.05)',
        fontSize: '0.68rem', color: 'rgba(245,242,234,0.18)',
      }}>
        <span>© 2026 NVforHD. All rights reserved.</span>
        <span>
          Photos:{' '}
          <a href="https://unsplash.com/@supergios" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.18)', textDecoration: 'none' }}>Jonny Gios</a>
          {' '}&amp;{' '}
          <a href="https://unsplash.com/@haozlife" target="_blank" rel="noopener" style={{ color: 'rgba(245,242,234,0.18)', textDecoration: 'none' }}>Hao Zhang</a>
          {' '}on Unsplash
        </span>
      </div>
    </footer>
  )
}
