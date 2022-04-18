/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
