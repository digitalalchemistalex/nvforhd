/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'nv-for-hd-v1757363743.websitepro-cdn.com',
      },
    ],
  },
}

module.exports = nextConfig
