import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'NVforHD — Let\'s Cure Huntington\'s Disease',
    template: '%s | NVforHD — Cure Huntington\'s Disease',
  },
  description: 'NVforHD is a Nevada non-profit raising awareness and funds to battle Huntington\'s Disease through an annual golf tournament. Donate or play — May 29, 2026 at Gray\'s Crossing, Truckee CA.',
  metadataBase: new URL('https://www.nvforhd.com'),
  alternates: { canonical: 'https://www.nvforhd.com' },
  openGraph: {
    siteName: 'NVforHD',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-couple.jpg', width: 1200, height: 630, alt: 'NVforHD — Nevada\'s fight against Huntington\'s Disease' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nvforhd',
    images: ['/images/hero-couple.jpg'],
  },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'NVforHD',
  alternateName: 'Nevada for HD',
  url: 'https://www.nvforhd.com',
  logo: 'https://www.nvforhd.com/images/logo.png',
  description: 'Nevada non-profit raising awareness and funds to battle Huntington\'s Disease.',
  telephone: '+17756918860',
  email: 'info@nvforhd.com',
  foundingDate: '2024',
  areaServed: 'Nevada',
  sameAs: [
    'https://health.ucdavis.edu/huntingtons-disease',
    'https://hdsa.org',
    'https://www.helpcurehd.com',
    'https://www.guidestar.org/profile/nvforhd',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="dzMmgHd7knYIS59vlZo5Nz23g1-IdTioOAfHhI0LfFU" />
        {/* Font preconnect — must come before stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts — non-blocking: load as print, swap to all on load. Eliminates render-blocking. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-expect-error onload is valid here
          onLoad="this.media='all'"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        {/* Preload LCP hero — must match exact URL next/image serves to avoid preload mismatch */}
        <link rel="preload" as="image" href="/images/hero-couple.jpg" fetchPriority="high"
          imageSrcSet="/_next/image?url=%2Fimages%2Fhero-couple.jpg&w=640&q=85 640w, /_next/image?url=%2Fimages%2Fhero-couple.jpg&w=828&q=85 828w, /_next/image?url=%2Fimages%2Fhero-couple.jpg&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Fhero-couple.jpg&w=1200&q=85 1200w, /_next/image?url=%2Fimages%2Fhero-couple.jpg&w=1920&q=85 1920w"
          imageSizes="100vw"
        />
        {/* GA4 — deferred until after load to not compete with LCP/FCP */}
        <script dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load',function(){var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-3KT4C16M4V';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','G-3KT4C16M4V');});`
        }} />
        {/* Microsoft Clarity — deferred until after load to not compete with LCP/FCP */}
        <script dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load',function(){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","w35406jzvc");});`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
