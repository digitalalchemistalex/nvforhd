'use client'
// PageHero — editorial split layout
// Desktop: text left (42%) | photo right (58%) — dramatic, magazine-grade
// Mobile: full-bleed photo, text bottom-pinned
import React from 'react'
import Image from 'next/image'

interface PageHeroProps {
  kicker: string
  headline: React.ReactNode
  sub?: string
  photo: string
  photoPosition?: string
  stat1?: { n: string; label: string }
  stat2?: { n: string; label: string }
  stat3?: { n: string; label: string }
  accent?: string
}

export default function PageHero({
  kicker, headline, sub, photo,
  photoPosition = 'center',
  stat1, stat2, stat3,
  accent = 'var(--blue)',
}: PageHeroProps) {
  const stats = [stat1, stat2, stat3].filter(Boolean)

  return (
    <>
      <div className="ph-root">

        {/* LEFT PANEL — text */}
        <div className="ph-left">
          <div className="ph-bar" style={{ background: accent }} />
          <div className="ph-left-inner">
            <div className="ph-kicker" style={{ animationDelay: '0.1s' }}>{kicker}</div>
            <h1 className="ph-headline" style={{ animationDelay: '0.25s' }}>{headline}</h1>
            {sub && <p className="ph-sub" style={{ animationDelay: '0.4s' }}>{sub}</p>}
            {stats.length > 0 && (
              <div className="ph-stats" style={{ animationDelay: '0.55s' }}>
                {stats.map((s, i) => s && (
                  <div key={i} className="ph-stat">
                    <span className="ph-stat-n">{s.n}</span>
                    <span className="ph-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="ph-left-edge" />
        </div>

        {/* RIGHT PANEL — photo (next/image with priority for LCP) */}
        <div className="ph-right">
          <Image
            src={photo}
            alt=""
            fill
            priority
            quality={85}
            sizes="(max-width: 768px) 0vw, 58vw"
            style={{ objectFit: 'cover', objectPosition: photoPosition }}
            className="ph-photo-img"
          />
          <div className="ph-photo-fade" />
        </div>

        {/* MOBILE layers — same image, priority */}
        <div className="ph-mobile-photo">
          <Image
            src={photo}
            alt=""
            fill
            priority
            quality={80}
            sizes="(max-width: 768px) 100vw, 0vw"
            style={{ objectFit: 'cover', objectPosition: photoPosition }}
          />
        </div>
        <div className="ph-mobile-overlay" />

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ph-root {
          position: relative;
          display: grid;
          grid-template-columns: 42% 58%;
          min-height: clamp(520px, 62vh, 800px);
          overflow: hidden;
          background: var(--navy);
        }
        .ph-left {
          position: relative;
          display: flex;
          align-items: center;
          z-index: 2;
          padding: clamp(6rem,10vw,9rem) 0 clamp(3rem,5vw,5rem) 0;
        }
        .ph-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
        }
        .ph-left-inner {
          padding: 0 clamp(2rem,4vw,4.5rem) 0 clamp(2.5rem,5vw,5rem);
          width: 100%;
        }
        .ph-left-edge {
          position: absolute;
          right: 0; top: 8%; bottom: 8%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
        }
        .ph-kicker {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--sans);
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(59,130,246,0.9);
          margin-bottom: 1.75rem;
          animation: fadeup 0.8s var(--ease) both;
        }
        .ph-kicker::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 2px;
          background: currentColor;
          flex-shrink: 0;
        }
        .ph-headline {
          font-family: var(--serif);
          font-weight: 300;
          font-size: clamp(3rem, 5.2vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.025em;
          color: #fff;
          margin-bottom: 1.75rem;
          animation: fadeup 1s var(--ease) both;
        }
        .ph-sub {
          font-size: clamp(0.85rem, 1.2vw, 0.98rem);
          line-height: 1.9;
          color: rgba(245,242,234,0.6);
          font-weight: 300;
          max-width: 400px;
          margin-bottom: 2.5rem;
          border-left: 2px solid rgba(59,130,246,0.35);
          padding-left: 1rem;
          animation: fadeup 0.9s var(--ease) both;
        }
        .ph-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          animation: fadeup 0.9s var(--ease) both;
        }
        .ph-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .ph-stat-n {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 300;
          color: rgba(59,130,246,0.9);
          line-height: 1;
        }
        .ph-stat-label {
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,242,234,0.38);
          font-weight: 600;
          font-family: var(--sans);
        }
        .ph-right {
          position: relative;
          overflow: hidden;
        }
        .ph-photo-img {
          animation: drift 22s ease-in-out infinite alternate;
          will-change: transform;
        }
        .ph-photo-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--navy) 0%, rgba(8,12,24,0.55) 20%, rgba(8,12,24,0.1) 55%, transparent 100%);
          z-index: 1;
        }
        .ph-mobile-photo { display: none; position: relative; }
        .ph-mobile-overlay { display: none; }

        @media (max-width: 768px) {
          .ph-root {
            grid-template-columns: 1fr;
            min-height: clamp(500px, 78vh, 680px);
            align-items: flex-end;
          }
          .ph-mobile-photo {
            display: block;
            position: absolute;
            inset: 0;
            overflow: hidden;
          }
          .ph-mobile-photo img {
            animation: drift 22s ease-in-out infinite alternate;
          }
          .ph-mobile-overlay {
            display: block;
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(8,12,24,0.97) 0%, rgba(8,12,24,0.65) 45%, rgba(8,12,24,0.1) 100%);
          }
          .ph-right { display: none; }
          .ph-left {
            grid-column: 1;
            padding: 0 0 2.5rem 0;
            align-items: flex-end;
          }
          .ph-left-inner { padding: 0 1.5rem 0 1.75rem; }
          .ph-left-edge { display: none; }
          .ph-headline { font-size: clamp(2.8rem, 11vw, 4.5rem); }
          .ph-sub { font-size: 0.88rem; max-width: 100%; }
          .ph-stats { gap: 1.5rem; }
          .ph-stat-n { font-size: clamp(1.6rem, 7vw, 2.2rem); }
        }
      `}} />
    </>
  )
}
