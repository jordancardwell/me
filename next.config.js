/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/me',
  assetPath:'/me',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
