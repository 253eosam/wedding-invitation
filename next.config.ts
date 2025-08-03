import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production' // build 시점

const nextConfig: NextConfig = {
  output: 'export',
  ...(isProd && {
    basePath: '/wedding-invitation',
    assetPrefix: '/wedding-invitation/',
    images: {
      unoptimized: true, // 'export' 모드에서는 필수
    },
  }),
}

export default nextConfig
