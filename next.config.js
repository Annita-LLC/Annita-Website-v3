/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable SSR and optimizations
  // output: 'export',
  trailingSlash: true,
  images: {
    // Enable Next.js image optimization
    // unoptimized: false, // default is false, so remove this
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'localhost',
      'annita.vercel.app',
      'annita.com',
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    // Optimize image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/staff/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, private',
          },
        ],
      },
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Enable faster builds
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide-react',
            chunks: 'all',
            priority: 20,
          },
          // Separate heavy libraries
          react: {
            test: /[\\/]node_modules[\\/]react[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 30,
          },
        },
      }
    }

    // Add compression and optimization
    if (!dev) {
      config.optimization.minimize = true
      config.optimization.usedExports = true
    }

    return config
  },
}

module.exports = nextConfig
