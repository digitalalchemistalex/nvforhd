'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-golf'

const NAV_LINKS = [
  { href: '/',          label: 'Home',       sub: null },
  { href: '/cause',     label: 'The Cause',  sub: 'What is Huntington\'s Disease' },
  { href: '/story',     label: 'Our Story',  sub: '$50K raised · 3 years' },
  { href: '/impact',    label: 'Impact',     sub: 'The Puccini family · IVF success' },
  { href: '/causes',    label: 'Causes',     sub: '2024 HelpCureHD · 2025/26 UC Davis' },
  { href: '/blog',      label: 'Blog',       sub: 'HD education, stories & event news' },
  { href: '/gallery',   label: 'Gallery',    sub: '47 photos from the 2024 tournament' },
  { href: '/sponsors',  label: 'Sponsors',   sub: 'Aguirre Riley · UC Davis · C-Hawk' },
  { href: '/about',     label: 'About Us',   sub: 'Meet the 4-member board' },
  { href: '/contact',   label: 'Contact',    sub: 'info@nvforhd.com · 775-691-8860' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  const navBg = menuOpen
    ? 'rgba(8,12,24,0.99)'
    : scrolled
      ? 'rgba(8,12,24,0.97)'
      : 'rgba(5,6,10,0.2)'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled || menuOpen ? '0.85rem clamp(1.25rem,4vw,4rem)' : '1.6rem clamp(1.25rem,4vw,4rem)',
        background: navBg,
        backdropFilter: 'blur(24px)',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(201,168,76,0.14)' : '1px solid transparent',
        transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
      }}>
        <Link href="/" onClick={close} style={{ flexShrink: 0, zIndex: 10 }}>
          <Image
            src="/images/logo.png"
            alt="NVforHD — Cure Huntington's Disease"
            width={110} height={80}
            style={{ height: '38px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.15)', display: 'block' }}
            priority
          />
        </Link>

        <ul className="desktop-nav" style={{ display: 'flex', gap: '1.8rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          {NAV_LINKS.filter(l => l.href !== '/').map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                color: 'rgba(245,242,234,0.68)', textDecoration: 'none',
                fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 400, transition: 'color 0.2s', fontFamily: 'var(--sans)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,234,0.68)')}
              >{label}</Link>
            </li>
          ))}
        </ul>

        <div className="desktop-nav" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <a href={DONATE} target="_blank" rel="noopener" className="btn-gold"
            style={{ padding: '0.6rem 1.3rem', fontSize: '0.66rem' }}>
            Donate Now
          </a>
          <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.66rem' }}>
            Play May 29 ↗
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(o => !o)}
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '0.5rem', zIndex: 10, display: 'none',
            flexDirection: 'column', justifyContent: 'center', gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--gold)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--gold)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--gold)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
        </button>
      </nav>

      <div style={{
        position: 'fixed', inset: 0, zIndex: 680,
        background: 'rgba(8,12,24,0.98)',
        backdropFilter: 'blur(24px)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        overflowY: 'auto',
        paddingTop: 'clamp(5rem,14vw,8rem)',
        paddingBottom: 'clamp(2rem,6vw,4rem)',
        paddingLeft:  'clamp(1.5rem,6vw,3.5rem)',
        paddingRight: 'clamp(1.5rem,6vw,3.5rem)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.3))' }} />

        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map(({ href, label, sub }, i) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              style={{
                display: 'block',
                padding: '1.25rem 0',
                borderBottom: '1px solid rgba(245,242,234,0.07)',
                textDecoration: 'none',
                animation: menuOpen ? `fadeup 0.5s ease ${i * 0.05 + 0.1}s both` : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,5vw,2.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: sub ? '0.35rem' : 0 }}>
                {label}
              </div>
              {sub && (
                <div style={{ fontSize: '0.72rem', color: 'rgba(245,242,234,0.38)', fontWeight: 300, letterSpacing: '0.02em' }}>{sub}</div>
              )}
            </Link>
          ))}
        </nav>

        <div style={{
          marginTop: '2.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
          animation: menuOpen ? 'fadeup 0.5s ease 0.55s both' : 'none',
        }}>
          <a href={DONATE} target="_blank" rel="noopener" onClick={close}
            className="btn-gold"
            style={{ display: 'block', textAlign: 'center', padding: '1.1rem', fontSize: '0.75rem' }}>
            Donate Now — from $100
          </a>
          <a href={GOLF} target="_blank" rel="noopener" onClick={close}
            className="btn-outline-gold"
            style={{ display: 'block', textAlign: 'center', padding: '1.1rem', fontSize: '0.75rem' }}>
            Play Golf — May 29, 2026 ↗
          </a>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <a href="tel:7756918860" style={{ fontSize: '0.78rem', color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>
              📞 775-691-8860 &nbsp;·&nbsp; Call Sean
            </a>
          </div>
        </div>
      </div>

    </>
  )
}
