'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const D150 = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHD-Donate-150'
const GOLF = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '1rem 5rem' : '2rem 5rem',
      background: scrolled ? 'rgba(5,6,10,0.96)' : 'rgba(5,6,10,0.3)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <Link href="/" style={{ flexShrink: 0 }}>
        <Image src="/images/logo.png" alt="NVforHD — Cure Huntington's Disease" width={120} height={87}
          style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} priority />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { href: '/#cause', label: 'The Cause' },
            { href: '/#years', label: 'Our Story' },
            { href: '/#letter', label: 'Impact' },
            { href: '/#sponsors', label: 'Sponsors' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                color: 'rgba(245,242,234,0.72)', textDecoration: 'none',
                fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                fontWeight: 400, transition: 'color 0.2s', fontFamily: 'var(--sans)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,234,0.72)')}
              >{label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href={D150} target="_blank" rel="noopener" className="btn-gold"
            style={{ padding: '0.7rem 1.6rem', fontSize: '0.72rem' }}>
            Donate Now
          </a>
          <a href={GOLF} target="_blank" rel="noopener" className="btn-outline-gold"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.72rem' }}>
            Play May 29 ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
