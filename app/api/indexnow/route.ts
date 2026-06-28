import { NextResponse } from 'next/server'

const KEY = 'nvforhd-aba04caf6b7c4aa7bd2d16bd36ed44fa'
const HOST = 'www.nvforhd.com'

const URLS = [
  'https://www.nvforhd.com',
  'https://www.nvforhd.com/cause',
  'https://www.nvforhd.com/story',
  'https://www.nvforhd.com/causes',
  'https://www.nvforhd.com/impact',
  'https://www.nvforhd.com/about',
  'https://www.nvforhd.com/sponsors',
  'https://www.nvforhd.com/gallery',
  'https://www.nvforhd.com/blog',
  'https://www.nvforhd.com/blog/huntingtons-disease-symptoms-stages',
  'https://www.nvforhd.com/blog/what-is-huntingtons-disease',
  'https://www.nvforhd.com/blog/is-huntingtons-disease-hereditary',
  'https://www.nvforhd.com/blog/genetic-testing-huntingtons-disease-guide',
  'https://www.nvforhd.com/blog/ivf-genetic-testing-huntingtons-disease',
  'https://www.nvforhd.com/blog/hd-family-story-tiffany-uc-davis',
  'https://www.nvforhd.com/blog/hd-family-story-mikey-holly-uc-davis',
  'https://www.nvforhd.com/blog/hd-family-story-leilani-dunmoyer-uc-davis',
  'https://www.nvforhd.com/blog/huntingtons-disease-northern-nevada-care',
  'https://www.nvforhd.com/blog/huntingtons-disease-support-nevada',
  'https://www.nvforhd.com/blog/nvforhd-2025-year-in-review',
  'https://www.nvforhd.com/blog/grays-crossing-golf-club-truckee',
  'https://www.nvforhd.com/blog/nvforhd-golf-tournament-2026',
  'https://www.nvforhd.com/blog/nvforhd-transparency-where-money-goes',
  'https://www.nvforhd.com/blog/charity-golf-sponsorship-nevada',
  'https://www.nvforhd.com/blog/how-to-help-huntingtons-disease-nevada',
]

// POST /api/indexnow — submit all URLs to IndexNow (Bing, Yandex)
export async function POST() {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: URLS,
  }

  const results: Record<string, number> = {}

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ]

  await Promise.allSettled(
    endpoints.map(async (endpoint) => {
      const r = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      })
      results[endpoint] = r.status
    })
  )

  return NextResponse.json({ submitted: URLS.length, results })
}

// GET — return status
export async function GET() {
  return NextResponse.json({ key: KEY, urls: URLS.length, host: HOST })
}
