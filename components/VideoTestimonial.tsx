'use client'

import { useState } from 'react'

interface VideoTestimonialProps {
  youtubeId: string
  name: string
  role: string
  quote: string
  fallbackImage?: string  // site image used as thumbnail (YouTube thumbnails blocked for unlisted videos)
}

export default function VideoTestimonial({ youtubeId, name, role, quote, fallbackImage = '/images/event-group-1.jpg' }: VideoTestimonialProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}
        className="vt-card"
      >
        {/* Thumbnail — uses fallback site image */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--navy)' }}>
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={`${name} — HD family story`}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
            className="vt-thumb"
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.55)', transition: 'background 0.3s' }} className="vt-overlay" />
          {/* Play button */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(29,78,216,0.6)' }} className="vt-play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* "Watch Story" label */}
          <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(6,13,26,0.8)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.25rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--blue)"><path d="M8 5v14l11-7z"/></svg>
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Watch Story</span>
          </div>
        </div>

        {/* Quote */}
        <div style={{ padding: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
            &ldquo;{quote}&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--blue)', flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '0.78rem', color: '#fff', letterSpacing: '0.04em' }}>{name}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          onClick={(e) => { if ((e.target as HTMLElement).dataset.overlay) setIsOpen(false) }}
          data-overlay="true"
          style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(6px)', padding: '1rem' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '860px' }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '-2.5rem', right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              Close
            </button>
            <div style={{ aspectRatio: '16/9', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={`${name} — HD family story`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--serif)', color: '#fff', fontSize: '1rem' }}>{name}</div>
              <div style={{ fontFamily: 'var(--sans)', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '0.2rem' }}>{role}</div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .vt-card:hover .vt-thumb { transform: scale(1.04); }
        .vt-card:hover .vt-overlay { background: rgba(6,13,26,0.3) !important; }
        .vt-play { transition: transform 0.2s ease; }
        .vt-card:hover .vt-play { transform: scale(1.1); }
      ` }} />
    </>
  )
}
