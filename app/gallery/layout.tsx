import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "NVforHD 2024 Golf Tournament Photos | Truckee CA",
  description: "See photos from our sold-out 2024 charity golf tournament at Old Greenwood, Truckee CA. $25,000 raised for Huntington's Disease families in one day.",
  openGraph: {
    title: 'NVforHD 2024 Golf Tournament Photos | Truckee CA',
    description: 'Photos from our inaugural 2024 charity golf tournament. $25,000 raised. Sold out.',
    images: [{ url: '/gallery/DSC0572-scaled.jpg', width: 1200, height: 800, alt: 'NVforHD 2024 Golf Tournament' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVforHD 2024 Event Gallery',
    description: 'Photos from our inaugural 2024 charity golf tournament. $25,000 raised.',
    images: ['/gallery/DSC0572-scaled.jpg'],
  },
  alternates: { canonical: 'https://www.nvforhd.com/gallery' },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'NVforHD 2024 Golf Tournament Gallery',
  description: 'Photos from the NVforHD 2024 charity golf tournament at Old Greenwood Golf Club, Truckee CA.',
  url: 'https://www.nvforhd.com/gallery',
  associatedMedia: [
    { '@type': 'ImageObject', contentUrl: 'https://www.nvforhd.com/gallery/DSC0572-scaled.jpg', name: 'NVforHD 2024 Tournament Registration' },
    { '@type': 'ImageObject', contentUrl: 'https://www.nvforhd.com/gallery/DSC0588-scaled.jpg', name: 'NVforHD 2024 Players on Course' },
    { '@type': 'ImageObject', contentUrl: 'https://www.nvforhd.com/gallery/DSC0602-scaled.jpg', name: 'NVforHD 2024 Fairway Shot' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nvforhd.com' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://www.nvforhd.com/gallery' },
  ],
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
