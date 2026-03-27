import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import fs from 'fs'
import path from 'path'

function fileMtime(relPath: string): Date {
  try {
    const abs = path.join(process.cwd(), relPath)
    return fs.statSync(abs).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nvforhd.com'

  const posts = getAllPosts().map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: fileMtime('app/page.tsx'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: fileMtime('app/about/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/causes`,
      lastModified: fileMtime('app/causes/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: getAllPosts().length
        ? new Date(Math.max(...getAllPosts().map(p => new Date(p.date).getTime())))
        : fileMtime('app/blog/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/sponsors`,
      lastModified: fileMtime('app/sponsors/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/gallery`,
      lastModified: fileMtime('app/gallery/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: fileMtime('app/contact/page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${base}/terms`,
      lastModified: fileMtime('app/terms/page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/cancellation`,
      lastModified: fileMtime('app/cancellation/page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...posts,
  ]
}

