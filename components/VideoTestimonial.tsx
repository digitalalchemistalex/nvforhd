'use client'

import { useState, useRef } from 'react'

interface VideoTestimonialProps {
  youtubeId: string
  name: string
  role: string
  quote: string
}

export default function VideoTestimonial({ youtubeId, name, role, quote }: VideoTestimonialProps) {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}
        className="vt-card"
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={thumbnailUrl}
            alt={`${name} testimonial`}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
            className="vt-thumb"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,26,0.45)', transition: 'background 0.3s' }} className="vt-overlay" />
          {/* Play button */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(29,78,216,0.5)' }} className="vt-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
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
          ref={overlayRef}
          onClick={(e) => { if (e.target === overlayRef.current) setIsOpen(false) }}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)', padding: '1rem' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '860px' }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '-2.5rem', right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              Close
            </button>
            <div style={{ aspectRatio: '16/9', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={`${name} — testimonial`}
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
        .vt-card:hover .vt-overlay { background: rgba(6,13,26,0.2); }
        .vt-card:hover .vt-play { transform: scale(1.08); }
        .vt-play { transition: transform 0.2s ease; }
      ` }} />
    </>
  )
}
