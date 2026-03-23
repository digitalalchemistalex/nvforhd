import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  }
}

const BOOK = 'https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=blog&utm_campaign=2026tournament&utm_content=post-sidebar'

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const fallback = allPosts.filter(p => p.slug !== post.slug).slice(0, 2)
  const suggestions = related.length >= 2 ? related : fallback

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://nvforhd.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'NVforHD',
      url: 'https://nvforhd.com',
    },
    publisher: {
      '@type': 'NonprofitOrganization',
      name: 'NVforHD',
      url: 'https://nvforhd.com',
      logo: { '@type': 'ImageObject', url: 'https://nvforhd.com/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nvforhd.com/blog/${post.slug}` },
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article hero */}
      <div style={{
        position: 'relative',
        minHeight: 'clamp(380px,45vh,560px)',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: 'var(--navy)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${post.coverImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.4,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,24,0.2) 0%, rgba(8,12,24,0.92) 75%, rgba(8,12,24,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,12,24,0.8) 0%, rgba(8,12,24,0.3) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />

        <div className="inner" style={{ position: 'relative', zIndex: 2, padding: 'clamp(1.5rem,4vw,5rem)', paddingTop: 'clamp(7rem,14vw,10rem)', paddingBottom: 'clamp(2.5rem,4vw,4rem)', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.65rem', color: 'rgba(245,242,234,0.45)', fontFamily: 'var(--sans)' }}>
            <Link href="/blog" style={{ color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--gold)' }}>{post.category}</span>
          </div>

          <div style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, padding: '0.25rem 0.7rem', marginBottom: '1.25rem', fontFamily: 'var(--sans)' }}>
            {post.category}
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontWeight: 300,
            fontSize: 'clamp(2rem,5vw,5rem)',
            lineHeight: 1.05,
            color: '#fff',
            maxWidth: '800px',
            marginBottom: '1.5rem',
            animation: 'fadeup 0.9s var(--ease) 0.2s both',
          }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.72rem', color: 'rgba(245,242,234,0.52)', fontFamily: 'var(--sans)', animation: 'fadeup 0.9s var(--ease) 0.35s both' }}>
            <span>By {post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)' }} />
      </div>

      {/* Article body + sidebar */}
      <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)' }}>
        <div className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'clamp(3rem,6vw,8rem)', alignItems: 'start' }} className="article-layout">

            {/* Body */}
            <article>
              <ScrollReveal>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.35rem)', lineHeight: 1.9, color: 'var(--ink-dim)', marginBottom: '2rem', fontStyle: 'italic' }}>
                  {post.excerpt}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="prose-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }} />
              </ScrollReveal>

              {/* Back link */}
              <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--cream-3)' }}>
                <Link href="/blog" style={{ fontSize: '0.72rem', color: 'var(--ink-dim)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                  ← All Posts
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              <ScrollReveal delay={0.2}>
                {/* Event CTA */}
                <div style={{ background: 'var(--navy)', padding: '2rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 700 }}>May 29, 2026</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1.2 }}>Join the Tournament</div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(245,242,234,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Gray&apos;s Crossing Golf Club, Truckee CA. Four-person scramble. 100% to UC Davis HD Center.
                  </p>
                  <a href={BOOK} target="_blank" rel="noopener" className="btn-gold" style={{ display: 'block', textAlign: 'center', fontSize: '0.66rem', padding: '0.85rem 1rem' }}>
                    Reserve Your Spot →
                  </a>
                  <a href="/contact" style={{ display: 'block', textAlign: 'center', marginTop: '0.6rem', fontSize: '0.65rem', color: 'rgba(245,242,234,0.45)', textDecoration: 'none' }}>
                    Donate without playing
                  </a>
                </div>

                {/* Stats */}
                <div style={{ background: 'var(--cream-2)', border: '1px solid var(--cream-3)', padding: '1.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', marginBottom: '1.25rem', fontWeight: 600 }}>NVforHD by the Numbers</div>
                  {[
                    { n: '$50K+', label: 'Raised in 2 years' },
                    { n: '90+',   label: 'HD families served' },
                    { n: '1',     label: 'HD-free baby funded' },
                  ].map(({ n, label }) => (
                    <div key={n} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '0.9rem' }}>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--gold-dark)', lineHeight: 1, flexShrink: 0 }}>{n}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--ink-dim)', lineHeight: 1.4 }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Related posts */}
                {suggestions.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', marginBottom: '1rem', fontWeight: 600 }}>More Posts</div>
                    {suggestions.map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: 'block', textDecoration: 'none', padding: '0.9rem 0', borderBottom: '1px solid var(--cream-3)' }}>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.35, marginBottom: '0.25rem' }}>{p.title}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--ink-dimmer)' }}>{p.readingTime} min · {p.category}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          aside { position: static !important; }
        }
        .prose-body { font-family: var(--sans); font-size: clamp(0.95rem, 1.4vw, 1.05rem); line-height: 1.9; color: var(--ink-dim); }
        .prose-body h2 { font-family: var(--serif); font-size: clamp(1.4rem,2.5vw,2rem); font-weight: 400; color: var(--ink); margin: 3rem 0 1rem; line-height: 1.2; }
        .prose-body h3 { font-family: var(--serif); font-size: clamp(1.1rem,2vw,1.4rem); font-weight: 400; color: var(--ink); margin: 2rem 0 0.75rem; }
        .prose-body p { margin-bottom: 1.5rem; }
        .prose-body strong { color: var(--ink); font-weight: 600; }
        .prose-body a { color: var(--gold-dark); text-decoration: underline; text-underline-offset: 3px; }
        .prose-body ul, .prose-body ol { margin: 0 0 1.5rem 1.5rem; }
        .prose-body li { margin-bottom: 0.5rem; }
        .prose-body blockquote { border-left: 3px solid var(--gold-dark); padding-left: 1.5rem; margin: 2rem 0; font-family: var(--serif); font-style: italic; font-size: clamp(1rem,1.6vw,1.2rem); color: var(--ink); line-height: 1.75; }
        .prose-body hr { border: none; border-top: 1px solid var(--cream-3); margin: 3rem 0; }
      `}</style>
    </>
  )
}

// Minimal markdown-to-HTML — handles headings, bold, italic, links, lists, blockquotes, hr, paragraphs
function markdownToHtml(md: string): string {
  // Remove trailing --- (our post footer separator)
  let html = md.replace(/\n---\s*$/, '')

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>')

  // HR
  html = html.replace(/^---$/gm, '<hr>')

  // Blockquote
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')

  // Unordered list — collect runs
  html = html.replace(/((?:^- .+\n?)+)/gm, (match) => {
    const items = match.trim().split('\n').map(l => `<li>${l.replace(/^- /, '')}</li>`).join('')
    return `<ul>${items}</ul>`
  })

  // Bold + italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

  // Links [text](url)
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

  // Paragraphs — wrap bare lines not already tagged
  html = html
    .split(/\n{2,}/)
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (/^<(h[123]|ul|ol|blockquote|hr)/.test(block)) return block
      return `<p>${block.replace(/\n/g, ' ')}</p>`
    })
    .join('\n')

  return html
}
