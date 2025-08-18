'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/download/HeroSection'
import AppStatsSection from '@/components/sections/download/AppStatsSection'
import FeaturesSection from '@/components/sections/download/FeaturesSection'
import QRCodeSection from '@/components/sections/download/QRCodeSection'
import CTASection from '@/components/sections/download/CTASection'

const DownloadPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const downloadStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita Mobile App",
    "description": "Africa's all-in-one digital platform mobile app with secure payments, marketplace, AI tools, and real-time tracking",
    "url": "https://annita.com/download",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Annita",
      "url": "https://annita.com"
    },
    "featureList": [
      "Secure payments with AnnitaPay",
      "Shop from thousands of vendors",
      "Real-time delivery tracking",
      "AI-powered business tools",
      "Multi-language support",
      "Offline functionality",
      "Push notifications",
      "Biometric authentication"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000000"
    }
  }

  return (
    <>
      <SEOHead
        title="Download Annita - Africa's All-in-One Digital Platform"
        description="Download Annita's mobile app and access Africa's all-in-one digital platform. Secure payments, marketplace shopping, AI tools, real-time tracking, and more. Available on iOS and Android with 5M+ downloads and 4.8-star rating."
        keywords={[
          'download Annita',
          'Annita mobile app',
          'Annita app download',
          'iOS app',
          'Android app',
          'mobile application',
          'Africa digital platform',
          'all-in-one platform',
          'secure payments',
          'marketplace app',
          'AI tools',
          'real-time tracking',
          'mobile money',
          'e-commerce app',
          'business tools',
          'offline functionality',
          'push notifications',
          'biometric authentication',
          'multi-language support',
          'App Store',
          'Google Play',
          'mobile banking',
          'digital wallet',
          'shopping app',
          'delivery tracking',
          'business app',
          'African app',
          'MSME app',
          'small business app',
          'entrepreneur app',
          'digital transformation',
          'mobile commerce',
          'fintech app',
          'logistics app',
          'marketing app',
          'communication app',
          'mobile payments',
          'cross-border payments',
          'local payments',
          'mobile security',
          'app security',
          'data protection',
          'privacy protection'
        ]}
        canonical="/download"
        ogImage="/download-og-image.jpg"
        structuredData={downloadStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <AppStatsSection />
        <FeaturesSection />
        <QRCodeSection />
        <CTASection />
      </div>
    </>
  )
}

export default DownloadPage
