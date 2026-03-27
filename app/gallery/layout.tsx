import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2024 Event Gallery | NVforHD — Huntington\'s Disease Charity Golf',
  description: 'Photos from the NVforHD 2024 charity golf tournament at Old Greenwood Golf Club, Truckee CA. Our first event raised $25,000 and sold out.',
  openGraph: {
    title: 'NVforHD 2024 Event Gallery',
    description: 'Photos from our inaugural 2024 charity golf tournament. $25,000 raised. Sold out.',
    images: ['/gallery/DSC0572-scaled.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://nvforhd.com/gallery',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
