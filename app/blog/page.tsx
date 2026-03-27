import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: "NVforHD Blog | Huntington's Disease Stories & Updates",
  description: "Stories from HD families, Huntington's Disease education, and updates on NVforHD's annual charity golf tournament raising funds for a cure in Nevada.",
  openGraph: {
    title: 'Blog | NVforHD — Huntington\'s Disease News & Stories',
    description: "Read stories from HD families, learn about Huntington's Disease, and follow NVforHD's annual charity golf tournament raising funds for a cure in Northern Nevada.",
    images: [{ url: '/images/event-crowd.jpg', width: 1200, height: 630, alt: 'NVforHD Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | NVforHD — Huntington\'s Disease News & Stories',
    description: 'Stories, education, and updates from NVforHD.',
    images: ['/images/event-crowd.jpg'],
  },
  alternates: { canonical: 'https://www.nvforhd.com/blog' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nvforhd.com/blog' },
  ],
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  Education:      { bg: 'var(--blue-hd)',    color: '#fff' },
  Impact:         { bg: 'var(--gold-dark)',  color: '#fff' },
  Event:          { bg: 'var(--ink)',        color: 'var(--cream)' },
  'Get Involved': { bg: '#2D6A4F',           color: '#fff' },
  General:        { bg: 'var(--ink-dim)',    color: '#fff' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.find(p => p.featured) ?? posts[0]
  const rest = posts.filter(p => p.slug !== featured?.slug)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'NVforHD Blog',
    description: 'Stories, education, and updates from NVforHD — Nevada\'s HD charity golf tournament.',
    url: 'https://nvforhd.com/blog',
    publisher: {
      '@type': 'NonprofitOrganization',
      name: 'NVforHD',
      url: 'https://nvforhd.com',
    },
  }

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        kicker="NVforHD Blog"
        headline={<>Stories from<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>the fight.</em></>}
        sub="Education, impact stories, and updates from our community. Every post is written to help HD families, raise awareness, and fund the cure."
        photo="/images/event-crowd.jpg"
        photoPosition="center 35%"
      />

      {/* Featured post — full-width highlight */}
      {featured && (
        <section className="section-light on-light" style={{ padding: 'var(--py-lg) var(--px)', position: 'relative' }}>
          <div className="divider-dark" />
          <div className="inner">
            <ScrollReveal>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', marginBottom: '2rem', fontWeight: 500 }}>
                ✦ Featured
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,4vw,6rem)', alignItems: 'center' }}
                className="featured-post-grid">
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--cream-2)' }}>
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverAlt}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="featured-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,24,0.35), transparent)' }} />
                </div>
                <div>
                  <CategoryBadge category={featured.category} />
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3vw,3.2rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.15, marginTop: '1rem', marginBottom: '1.25rem' }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--ink-dim)', marginBottom: '2rem' }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '2px solid var(--ink)', paddingBottom: '2px' }}>
                      Read Article →
                    </span>
                    <Meta date={featured.date} readingTime={featured.readingTime} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Rest of posts — card grid */}
      {rest.length > 0 && (
        <section className="on-light" style={{ background: 'var(--cream-2)', padding: 'var(--py-lg) var(--px)' }}>
          <div className="inner">
            <ScrollReveal style={{ marginBottom: 'clamp(2rem,4vw,4rem)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--ink-dimmer)', fontWeight: 500 }}>
                All Posts
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'clamp(1rem,2vw,2rem)' }}>
              {rest.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.07}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--cream-3)', height: '100%', transition: 'box-shadow 0.25s, transform 0.25s' }}
                    className="post-card">
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--cream-2)', flexShrink: 0 }}>
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="card-img"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div style={{ padding: 'clamp(1.25rem,2vw,1.75rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <CategoryBadge category={post.category} />
                      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3, marginTop: '0.75rem', marginBottom: '0.75rem', flex: 1 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--ink-dim)', marginBottom: '1.25rem' }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--cream-3)' }}>
                        <Meta date={post.date} readingTime={post.readingTime} />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Read →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="section-dark dark-section on-dark" style={{ padding: 'var(--py-md) var(--px)' }}>
        <div className="divider-gold" />
        <div className="inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div className="kicker" style={{ marginBottom: '0.75rem' }}>May 29, 2026</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>
              Ready to make a difference?
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--white-dim)', maxWidth: '420px', lineHeight: 1.75 }}>
              Join us at Gray&apos;s Crossing in Truckee. Play golf. Donate. Fight HD.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://www.tripsee.travel/merchant/book/index.html?ref=2026NVforHDGolfTournament&utm_source=nvforhd&utm_medium=blog&utm_campaign=2026tournament&utm_content=blog-cta"
              target="_blank" rel="noopener" className="btn-gold">
              Register to Play →
            </a>
            <a href="/contact" className="btn-outline-gold">Donate / Contact</a>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINK HUB ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(2.5rem,4vw,4rem) var(--px)', borderTop: '1px solid var(--cream-3)' }}>
        <div className="inner hub-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
          {[
            { href: '/causes', title: 'Our Charity Causes', desc: 'See exactly where every dollar raised goes — year by year.' },
            { href: '/about', title: 'Meet the Board', desc: 'The people behind NVforHD and their personal connection to HD.' },
            { href: '/sponsors', title: 'Sponsor the Tournament', desc: 'Put your brand on the fight. Packages from $100.' },
            { href: '/contact', title: 'Play or Donate', desc: 'Register for May 29 or donate directly to HD families.' },
          ].map(({ href, title, desc }) => (
            <a key={href} href={href} style={{ display: 'block', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--cream-3)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--blue)', marginBottom: '0.4rem' }}>{title} →</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.6 }}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .featured-post-grid { grid-template-columns: 1fr !important; }
        }
        .post-card:hover {
          box-shadow: 0 8px 40px rgba(28,26,22,0.12);
          transform: translateY(-3px);
        }
        .post-card:hover .card-img {
          transform: scale(1.04);
          transition: transform 0.6s ease;
        }
        .featured-post-grid:hover .featured-img {
          transform: scale(1.03);
        }
      `}</style>
    </>
  )
}

function CategoryBadge({ category }: { category: string }) {
  const style = CATEGORY_COLORS[category] ?? CATEGORY_COLORS.General
  return (
    <span style={{
      display: 'inline-block',
      background: style.bg,
      color: style.color,
      fontSize: '0.55rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 700,
      padding: '0.25rem 0.6rem',
      fontFamily: 'var(--sans)',
    }}>
      {category}
    </span>
  )
}

function Meta({ date, readingTime }: { date: string; readingTime: number }) {
  return (
    <span style={{ fontSize: '0.7rem', color: 'var(--ink-dimmer)', fontFamily: 'var(--sans)' }}>
      {formatDate(date)} · {readingTime} min read
    </span>
  )
}
