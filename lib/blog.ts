import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string          // ISO string — e.g. "2026-03-20"
  author: string
  category: string      // e.g. "Education", "Event", "Impact"
  coverImage: string    // /images/... path
  coverAlt: string
  readingTime: number   // minutes
  featured?: boolean
  body: string          // raw markdown (everything after frontmatter)
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta: Record<string, string> = {}
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = val
  })
  return { meta, body: match[2] }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { meta, body } = parseFrontmatter(raw)
    return {
      slug,
      title:       meta.title       ?? '',
      excerpt:     meta.excerpt      ?? '',
      date:        meta.date         ?? '',
      author:      meta.author       ?? 'NVforHD',
      category:    meta.category     ?? 'General',
      coverImage:  meta.coverImage   ?? '/images/course-1.jpg',
      coverAlt:    meta.coverAlt     ?? '',
      readingTime: parseInt(meta.readingTime ?? '4', 10),
      featured:    meta.featured === 'true',
      body,
    } satisfies BlogPost
  })
  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { meta, body } = parseFrontmatter(raw)
  return {
    slug,
    title:       meta.title       ?? '',
    excerpt:     meta.excerpt      ?? '',
    date:        meta.date         ?? '',
    author:      meta.author       ?? 'NVforHD',
    category:    meta.category     ?? 'General',
    coverImage:  meta.coverImage   ?? '/images/course-1.jpg',
    coverAlt:    meta.coverAlt     ?? '',
    readingTime: parseInt(meta.readingTime ?? '4', 10),
    featured:    meta.featured === 'true',
    body,
  }
}

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
