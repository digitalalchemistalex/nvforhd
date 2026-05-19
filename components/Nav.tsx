'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-golf'

const NAV_LINKS = [
  { href: '/',          label: 'Home',       sub: null },
  { href: '/cause',     label: 'The Cause',  sub: "What is Huntington's Disease?" },
  { href: '/story',     label: 'Our Story',  sub: 'How NVforHD began · $50K raised' },
  { href: '/causes',    label: 'Causes',     sub: '2024 HelpCureHD · 2025/26 UC Davis' },
  { href: '/impact',    label: 'Impact',     sub: 'The Puccini family · UC Davis families' },
  { href: '/gallery',   label: 'Gallery',    sub: '47 photos from the 2024 tournament' },
  { href: '/blog',      label: 'Blog',       sub: 'Patient stories, HD education & news' },
  { href: '/sponsors',  label: 'Sponsors',   sub: 'Aguirre Riley · UC Davis · C-Hawk' },
  { href: '/about',     label: 'About Us',   sub: 'Meet the 4-member board' },
  { href: '/contact',   label: 'Contact',    sub: 'info@nvforhd.com · 775-691-8860' },
]

// Mobile tab bar — 5 primary destinations only
// Order: understand HD → where money goes → primary action → social proof
const TAB_ITEMS = [
  { href: '/',         label: 'Home',    icon: HomeIcon },
  { href: '/cause',    label: 'HD',      icon: CauseIcon },
  { href: '/causes',   label: 'Causes',  icon: CausesIcon },
  { href: DONATE,      label: 'Donate',  icon: HeartIcon,  external: true, primary: true },
  { href: '/gallery',  label: 'Gallery', icon: GalleryIcon },
]

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setCtaVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '0.75rem clamp(1.25rem,4vw,4rem)' : '1.4rem clamp(1.25rem,4vw,4rem)',
        background: scrolled ? 'rgba(6,13,26,0.97)' : menuOpen ? 'rgba(6,13,26,0.99)' : 'rgba(6,13,26,0.15)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(29,78,216,0.2)' : '1px solid transparent',
        transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
      }}>
        {/* Logo */}
        <Link href="/" onClick={close} style={{ flexShrink: 0, zIndex: 10 }}>
          <Image src="/images/logo.png" alt="NVforHD" width={110} height={80}
            style={{ height: '36px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)', display: 'block' }}
            priority />
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '1.1rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.filter(l => l.href !== '/').map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                color: pathname === href ? '#fff' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontSize: '0.64rem',
                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: pathname === href ? 600 : 400,
                transition: 'color 0.2s', fontFamily: 'var(--sans)',
                borderBottom: pathname === href ? '1.5px solid var(--blue)' : '1.5px solid transparent',
                paddingBottom: '2px',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs — static + sticky donate after scroll */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', transition: 'all 0.3s' }} className="desktop-nav">
          {ctaVisible && (
            <a href={DONATE} target="_blank" rel="noopener" style={{
              background: 'var(--blue)', color: '#fff', padding: '0.6rem 1.3rem',
              fontSize: '0.64rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)',
              animation: 'fadeup 0.3s ease both',
            }}>
              Donate Now
            </a>
          )}
          <a href={GOLF} target="_blank" rel="noopener" style={{
            border: '1.5px solid rgba(255,255,255,0.6)', color: 'rgba(255,255,255,0.95)',
            padding: '0.58rem 1.1rem', fontSize: '0.64rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--sans)', fontWeight: 400,
          }}>
            Play May 29 ↗
          </a>
        </div>

        {/* Hamburger — desktop only, hidden on mobile (tab bar handles mobile) */}
        <button onClick={() => setMenuOpen(o => !o)} className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', zIndex: 10, display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '5px' }}>
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--snow)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--snow)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--snow)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
        </button>
      </nav>

      {/* Desktop slide-down menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 680,
        background: 'rgba(6,13,26,0.98)', backdropFilter: 'blur(24px)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        overflowY: 'auto',
        paddingTop: 'clamp(5rem,14vw,8rem)',
        paddingBottom: 'clamp(2rem,6vw,4rem)',
        paddingLeft: 'clamp(1.5rem,6vw,3.5rem)',
        paddingRight: 'clamp(1.5rem,6vw,3.5rem)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--blue), rgba(29,78,216,0.3))' }} />
        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map(({ href, label, sub }, i) => (
            <Link key={href} href={href} onClick={close} style={{
              display: 'block', padding: '1.25rem 0',
              borderBottom: '1px solid rgba(249,248,246,0.07)',
              textDecoration: 'none',
              animation: menuOpen ? `fadeup 0.5s ease ${i * 0.04 + 0.1}s both` : 'none',
            }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,5vw,2.5rem)', fontWeight: 300, color: pathname === href ? 'var(--blue-faint)' : '#fff', lineHeight: 1, marginBottom: sub ? '0.35rem' : 0 }}>{label}</div>
              {sub && <div style={{ fontSize: '0.72rem', color: 'rgba(249,248,246,0.72)', fontWeight: 300 }}>{sub}</div>}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', animation: menuOpen ? 'fadeup 0.5s ease 0.5s both' : 'none' }}>
          <a href={DONATE} target="_blank" rel="noopener" onClick={close}
            style={{ display: 'block', textAlign: 'center', background: 'var(--blue)', color: '#fff', padding: '1.1rem', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
            Donate Now — from $100
          </a>
          <a href={GOLF} target="_blank" rel="noopener" onClick={close}
            style={{ display: 'block', textAlign: 'center', border: '1.5px solid rgba(255,255,255,0.55)', color: 'rgba(255,255,255,0.95)', padding: '1.1rem', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
            Play Golf — May 29, 2026 ↗
          </a>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <a href="tel:7756918860" style={{ fontSize: '0.78rem', color: 'rgba(249,248,246,0.70)', textDecoration: 'none' }}>📞 775-691-8860 · Call Sean</a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE BOTTOM TAB BAR
          Replaces hamburger on <900px
          Always visible. 5 primary tabs.
          Active tab: blue indicator + label
      ══════════════════════════════ */}
      <div style={{
        display: 'none',
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 800,
        background: 'rgba(6,13,26,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(96,165,250,0.35)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        height: 'calc(58px + env(safe-area-inset-bottom, 0px))',
      }} className="mobile-tab-bar">
        {TAB_ITEMS.map(({ href, label, icon: Icon, external, primary }) => {
          const isActive = !external && (href === '/' ? pathname === '/' : pathname.startsWith(href))
          return (
            <a
              key={href}
              href={external ? href : undefined}
              {...(!external ? { onClick: (e) => { e.preventDefault(); window.location.href = href } } : {})}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener' : undefined}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                flex: 1, gap: '3px', textDecoration: 'none', cursor: 'pointer',
                padding: '8px 0',
                background: primary ? 'var(--blue)' : 'transparent',
                position: 'relative',
                transition: 'background 0.2s',
              }}>
              {isActive && !primary && (
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '32px', height: '3px', background: '#60A5FA', borderRadius: '0 0 3px 3px' }} />
              )}
              <Icon active={isActive} primary={!!primary} />
              <span style={{
                fontSize: '0.56rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                fontFamily: 'var(--sans)', fontWeight: isActive || primary ? 700 : 400,
                color: primary ? '#fff' : isActive ? 'var(--blue-faint)' : 'rgba(255,255,255,0.75)',
                lineHeight: 1,
              }}>{label}</span>
            </a>
          )
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
          .mobile-tab-bar { display: flex !important; }
          body { padding-bottom: calc(58px + env(safe-area-inset-bottom, 0px)) !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-tab-bar { display: none !important; }
        }
        .mobile-tab-bar a:active { opacity: 0.7; }
      ` }} />
    </>
  )
}

// ── SVG Tab Icons ──
function HomeIcon({ active, primary }: { active: boolean; primary?: boolean }) {
  const c = primary ? '#fff' : active ? '#ffffff' : 'rgba(255,255,255,0.75)'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function CauseIcon({ active, primary }: { active: boolean; primary?: boolean }) {
  const c = primary ? '#fff' : active ? '#ffffff' : 'rgba(255,255,255,0.75)'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
function CausesIcon({ active, primary }: { active: boolean; primary?: boolean }) {
  const c = primary ? '#fff' : active ? '#ffffff' : 'rgba(255,255,255,0.75)'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function HeartIcon({ active, primary }: { active: boolean; primary?: boolean }) {
  const c = primary ? '#fff' : active ? '#ffffff' : 'rgba(255,255,255,0.75)'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={primary ? 'rgba(255,255,255,0.75)' : 'none'} stroke={c} strokeWidth={primary ? 2 : active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9 11 12 14 22 4" />
    </svg>
  )
}
function GalleryIcon({ active, primary }: { active: boolean; primary?: boolean }) {
  const c = primary ? '#fff' : active ? '#ffffff' : 'rgba(255,255,255,0.75)'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}
