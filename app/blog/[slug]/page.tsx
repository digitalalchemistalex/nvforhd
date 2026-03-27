import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog'

const DONATE = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=blog-inline-donate'
const GOLF   = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=website&utm_campaign=2026tournament&utm_content=blog-inline-golf'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | NVforHD`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : ['/images/hero-couple.jpg'],
      type: 'article',
    },
    alternates: {
      canonical: `https://nvforhd.com/blog/${post.slug}`,
    },
  }
}

// Per-category CTAs — each audience gets what they need
const CATEGORY_CTA: Record<string, { headline: string; sub: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string }> = {
  'Education': {
    headline: 'HD affects 1 in 10,000 people. Your awareness matters.',
    sub: 'Share this page. Join our tournament. Fund the UC Davis clinic that serves 90+ Northern Nevada families.',
    primary: 'Donate to UC Davis HD Care →', primaryHref: DONATE,
    secondary: 'Play Golf May 29', secondaryHref: GOLF,
  },
  'Impact': {
    headline: "This is what $25,000 from a golf tournament did.",
    sub: "Your seat at the table changes families. Join us May 29 at Gray's Crossing, Truckee.",
    primary: 'Register for the Tournament →', primaryHref: GOLF,
    secondary: 'Or donate without playing', secondaryHref: DONATE,
  },
  'Event': {
    headline: "Spots are limited. 2024 sold out in days.",
    sub: "May 29, 2026 · Gray's Crossing, Truckee CA · 12PM Shotgun · Lunch included.",
    primary: 'Book Your Spot Now →', primaryHref: GOLF,
    secondary: 'Sponsor instead →', secondaryHref: 'mailto:info@nvforhd.com?subject=2026 Sponsorship',
  },
  'Sponsors': {
    headline: "Your business belongs in this fight.",
    sub: "Title, Gold, Lunch, and Hole sponsorships available. 100% to HD families. Call Sean: 775-691-8860.",
    primary: 'Enquire About Sponsorship →', primaryHref: 'mailto:info@nvforhd.com?subject=2026 Sponsorship',
    secondary: 'Or register to play', secondaryHref: GOLF,
  },
  'default': {
    headline: 'Every dollar goes directly to HD families.',
    sub: '100% to UC Davis HD Center of Excellence. No overhead. Real impact.',
    primary: 'Donate Now →', primaryHref: DONATE,
    secondary: 'Play Golf May 29', secondaryHref: GOLF,
  },
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^---$/gm, '<hr />')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hbluiop])(.+)$/gm, (m) => m.trim() ? m : '')
    .replace(/^<\/p><p>(<h[1-6]|<ul|<blockquote|<hr)/gm, '$1')
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const cta = CATEGORY_CTA[post.category] || CATEGORY_CTA['default']
  const related = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3)
  const bodyHtml = renderMarkdown(post.body)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'NVforHD', url: 'https://nvforhd.com' },
    publisher: { '@type': 'Organization', name: 'NVforHD', logo: { '@type': 'ImageObject', url: 'https://nvforhd.com/images/logo.png' } },
    image: post.coverImage ? `https://nvforhd.com${post.coverImage}` : 'https://nvforhd.com/images/hero-couple.jpg',
    url: `https://nvforhd.com/blog/${post.slug}`,
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO — full bleed cover image ── */}
      <div style={{ position: 'relative', height: 'clamp(380px,55vw,600px)', overflow: 'hidden' }}>
        <Image
          src={post.coverImage || '/images/hero-couple.jpg'}
          alt={post.coverAlt || post.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          priority quality={88}
        />
        {/* Dark gradient so headline reads */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.97) 0%, rgba(6,13,26,0.6) 45%, rgba(6,13,26,0.15) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)', zIndex: 3 }} />

        {/* Content over image — bottom aligned */}
        <div className="inner" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--px)', paddingBottom: 'clamp(2.5rem,4vw,4rem)', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--sans)' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem' }}>›</span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--sans)' }}>{post.category}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,4vw,4rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em', maxWidth: '800px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--sans)' }}>{formatDate(post.date)}</span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--sans)' }}>{post.readingTime} min read</span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: '0.68rem', color: 'var(--blue-faint)', fontFamily: 'var(--sans)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE + SIDEBAR ── */}
      <section style={{ background: 'var(--white)', padding: 'clamp(3rem,5vw,6rem) var(--px)' }}>
        <div className="inner blog-layout">

          {/* Article body */}
          <article>
            {/* Excerpt / standfirst */}
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,2vw,1.35rem)', lineHeight: 1.75, color: 'var(--ink-mid)', marginBottom: '3rem', borderLeft: '3px solid var(--blue)', paddingLeft: '1.5rem', fontStyle: 'italic' }}>
              {post.excerpt}
            </p>

            {/* Body content */}
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: `<p>${bodyHtml}</p>` }} />

            {/* ── INLINE CTA — placed after article body, before author ── */}
            <ScrollReveal style={{ margin: '3.5rem 0' }}>
              <div style={{ background: 'var(--navy)', padding: 'clamp(2rem,4vw,3.5rem)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)' }} />
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 300, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {cta.headline}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.75rem' }}>{cta.sub}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={cta.primaryHref} target={cta.primaryHref.startsWith('http') ? '_blank' : undefined} rel={cta.primaryHref.startsWith('http') ? 'noopener' : undefined}
                    style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '0.9rem 1.75rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                    {cta.primary}
                  </a>
                  <a href={cta.secondaryHref} target={cta.secondaryHref.startsWith('http') ? '_blank' : undefined} rel={cta.secondaryHref.startsWith('http') ? 'noopener' : undefined}
                    style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1.5px solid rgba(255,255,255,0.25)', padding: '0.88rem 1.5rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                    {cta.secondary}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 0', borderTop: '1px solid var(--cream-3)', borderBottom: '1px solid var(--cream-3)' }}>
              <Image src="/images/logo.png" alt="NVforHD" width={48} height={48} style={{ height: '36px', width: 'auto', objectFit: 'contain', opacity: 0.7 }} />
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>NVforHD</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--ink-dim)' }}>Nevada for HD · Non-profit fighting Huntington&apos;s Disease</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://nvforhd.com/blog/${post.slug}`)}`} target="_blank" rel="noopener"
                  style={{ fontSize: '0.62rem', color: 'var(--blue)', textDecoration: 'none', fontFamily: 'var(--sans)', fontWeight: 600, border: '1px solid var(--blue-faint)', padding: '0.35rem 0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Share →
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Sticky donate card */}
            <div style={{ background: 'var(--white)', border: '2px solid var(--blue)', padding: '1.75rem', marginBottom: '2rem', position: 'sticky', top: '90px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--blue)' }} />
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                Fight HD today.
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                100% to UC Davis HD Center of Excellence. 90+ Northern Nevada families depend on this clinic.
              </p>
              <a href={DONATE} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'var(--blue)', color: '#fff', padding: '0.9rem', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--sans)', marginBottom: '0.5rem' }}>
                Donate Now →
              </a>
              <a href={GOLF} target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--cream-3)', padding: '0.85rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--sans)' }}>
                Play Golf May 29
              </a>
              <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.6rem', color: 'var(--ink-faint)' }}>
                ★ Most donors give $250
              </p>
            </div>

            {/* Event quick facts */}
            <div style={{ background: 'var(--cream)', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--sans)' }}>2026 Tournament</div>
              {[
                ['📅', 'May 29, 2026'],
                ['📍', "Gray's Crossing, Truckee CA"],
                ['⛳', '12:00 PM Shotgun'],
                ['🏆', '4-person scramble'],
                ['💙', '100% to UC Davis HD'],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ flexShrink: 0, fontSize: '0.85rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-mid)', lineHeight: 1.4 }}>{text}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="inner" style={{ marginTop: 'clamp(3rem,5vw,6rem)', paddingTop: 'clamp(2rem,4vw,4rem)', borderTop: '1px solid var(--cream-3)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '18px', height: '2px', background: 'var(--blue)' }} />
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--blue)' }}>Read More</span>
            </div>
            <div className="blog-related-grid">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ background: 'var(--cream)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}>
                    <div style={{ position: 'relative', height: '180px', flexShrink: 0 }}>
                      <Image src={p.coverImage || '/images/hd-ribbon.jpg'} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.5) 0%, transparent 60%)' }} />
                      <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'var(--blue)', color: '#fff', fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, padding: '0.2rem 0.6rem', fontFamily: 'var(--sans)' }}>
                        {p.category}
                      </div>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.5rem' }}>{p.title}</div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}>{p.excerpt.substring(0, 100)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── LAYOUT ── */
        .blog-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: clamp(3rem,5vw,6rem);
          align-items: start;
        }
        .blog-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ── BODY TYPOGRAPHY ── */
        .blog-body p { font-size: clamp(0.95rem,1.4vw,1.05rem); line-height: 2; color: var(--ink-mid); margin-bottom: 1.5rem; font-weight: 300; }
        .blog-body h2 { font-family: var(--serif); font-size: clamp(1.5rem,2.5vw,2rem); font-weight: 400; color: var(--ink); margin: 2.5rem 0 1rem; line-height: 1.2; }
        .blog-body h3 { font-family: var(--serif); font-size: clamp(1.15rem,2vw,1.45rem); font-weight: 400; color: var(--ink); margin: 2rem 0 0.75rem; line-height: 1.25; }
        .blog-body strong { color: var(--ink); font-weight: 600; }
        .blog-body em { font-style: italic; }
        .blog-body a { color: var(--blue); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .blog-body ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-body li { font-size: clamp(0.95rem,1.4vw,1.05rem); line-height: 1.85; color: var(--ink-mid); margin-bottom: 0.5rem; }
        .blog-body blockquote { border-left: 3px solid var(--blue); padding: 1rem 1.5rem; margin: 2rem 0; background: var(--blue-light); font-style: italic; color: var(--ink-mid); }
        .blog-body hr { border: none; border-top: 1px solid var(--cream-3); margin: 2.5rem 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .blog-layout { grid-template-columns: 1fr !important; }
          .blog-sidebar { display: none; }
          .blog-related-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) {
          .blog-sidebar { display: block; }
        }
      ` }} />
    </>
  )
}
