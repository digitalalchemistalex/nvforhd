import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nvforhd.com'
  const now = new Date()

  const posts = getAllPosts().map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: base,                    lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/causes`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/sponsors`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/terms`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/cancellation`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    ...posts,
  ]
}
