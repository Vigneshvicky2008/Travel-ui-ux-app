/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- Add this part to fix the error
  },
}

module.exports = nextConfig
