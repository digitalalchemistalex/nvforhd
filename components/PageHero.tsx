// Shared hero component for all sub-pages
// Each page gets: full-height-ish hero, real photo bg, animated headline, kicker, subtitle
// Light or dark variant depending on which photo is used

interface PageHeroProps {
  kicker: string
  headline: React.ReactNode
  sub?: string
  photo: string          // path to bg photo
  photoPosition?: string // css background-position, default 'center'
  stat1?: { n: string; label: string }
  stat2?: { n: string; label: string }
  stat3?: { n: string; label: string }
}

export default function PageHero({ kicker, headline, sub, photo, photoPosition = 'center', stat1, stat2, stat3 }: PageHeroProps) {
  const stats = [stat1, stat2, stat3].filter(Boolean)
  return (
    <div style={{
      position: 'relative',
      minHeight: 'clamp(480px, 55vh, 700px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--navy)',
    }}>
      {/* Real photo — high opacity, properly lit */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: photoPosition,
        opacity: 0.45,
        animation: 'drift 25s ease-in-out infinite alternate',
        willChange: 'transform',
      }} />

      {/* Gradient overlay — dark at bottom where text sits, lighter at top */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(8,12,24,0.35) 0%, rgba(8,12,24,0.55) 40%, rgba(8,12,24,0.92) 80%, rgba(8,12,24,0.98) 100%)',
      }} />

      {/* Left-side vignette so text is always readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(8,12,24,0.85) 0%, rgba(8,12,24,0.4) 50%, transparent 100%)',
      }} />

      {/* Gold top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))', zIndex: 2 }} />

      {/* Content */}
      <div className="inner" style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(1.5rem,4vw,5rem)',
        paddingTop: 'clamp(7rem,14vw,11rem)',
        paddingBottom: 'clamp(3rem,5vw,5rem)',
        width: '100%',
      }}>
        {/* Kicker */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.875rem',
          fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold)', fontFamily: 'var(--sans)', fontWeight: 600,
          marginBottom: '1.5rem',
          animation: 'fadeup 0.8s var(--ease) 0.1s both',
        }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          {kicker}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(3rem, 7vw, 8rem)',
          lineHeight: 0.92, letterSpacing: '-0.015em',
          color: '#FFFFFF',
          marginBottom: sub ? '1.5rem' : stats.length ? '3rem' : 0,
          animation: 'fadeup 1s var(--ease) 0.25s both',
          textShadow: '0 4px 40px rgba(0,0,0,0.4)',
          maxWidth: '900px',
        }}>
          {headline}
        </h1>

        {/* Subtitle */}
        {sub && (
          <p style={{
            fontSize: 'clamp(0.9rem,1.5vw,1.1rem)', fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(245,242,234,0.75)',
            maxWidth: '580px',
            marginBottom: stats.length ? '3rem' : 0,
            animation: 'fadeup 0.9s var(--ease) 0.45s both',
          }}>
            {sub}
          </p>
        )}

        {/* Optional stats row */}
        {stats.length > 0 && (
          <div style={{
            display: 'flex', gap: 'clamp(1.5rem,4vw,4rem)',
            flexWrap: 'wrap',
            animation: 'fadeup 0.9s var(--ease) 0.6s both',
          }}>
            {stats.map((s, i) => s && (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,234,0.45)', fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)', zIndex: 2 }} />
    </div>
  )
}
