'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=nav-play-golf'

const NAV_LINKS = [
  { href: '/#cause',    label: 'The Cause' },
  { href: '/#years',    label: 'Our Story' },
  { href: '/#letter',   label: 'Impact' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/causes',    label: 'Causes' },
  { href: '/sponsors',  label: 'Sponsors' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '0.9rem 4rem' : '1.8rem 4rem',
      background: scrolled ? 'rgba(5,6,10,0.97)' : 'rgba(5,6,10,0.25)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <Image
          src="/images/logo.png"
          alt="NVforHD — Cure Huntington's Disease"
          width={110} height={80}
          style={{ height: '40px', width: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.1)' }}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
          className="desktop-nav">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                color: 'rgba(245,242,234,0.72)', textDecoration: 'none',
                fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 400, transition: 'color 0.2s', fontFamily: 'var(--sans)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,234,0.72)')}
              >{label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
          <a href={DONATE} target="_blank" rel="noopener" className="btn-gold"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.68rem' }}>
            Donate Now
          </a>
          <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold"
            style={{ padding: '0.65rem 1.2rem', fontSize: '0.68rem' }}>
            Play May 29 ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .desktop-nav { display: none !important; } }
        @media (max-width: 640px) {
          nav { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
      `}</style>
    </nav>
  )
}
