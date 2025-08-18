"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/marketplace/HeroSection'
import FeaturesSection from '@/components/sections/marketplace/FeaturesSection'
import CategoriesSection from '@/components/sections/marketplace/CategoriesSection'
import CTASection from '@/components/sections/marketplace/CTASection'

const MarketplacePage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const marketplaceStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Marketplace",
    "description": "Africa's largest multivendor marketplace with secure escrow payments and integrated logistics",
    "url": "https://annita.com/marketplace",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/marketplace/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <>
      <SEOHead
        title="Marketplace - Africa's Largest Multivendor Platform | Annita LLC"
        description="Buy and sell across Africa with secure escrow payments, integrated logistics, and AI-powered search. Join thousands of vendors and millions of customers."
        keywords={[
          'African marketplace',
          'multivendor platform',
          'secure payments',
          'escrow protection',
          'cross-border trade',
          'African e-commerce',
          'online shopping',
          'vendor platform',
          'secure transactions',
          'logistics integration',
          'AI-powered search',
          'mobile money payments',
          'African businesses',
          'digital commerce',
          'marketplace platform',
          'secure shopping',
          'product categories',
          'vendor registration',
          'buyer protection',
          'seller tools',
          'payment gateway',
          'delivery tracking',
          'quality guarantee',
          'return policy',
          'customer support',
          'African vendors',
          'local products',
          'international shipping',
          'marketplace security',
          'trusted platform'
        ]}
        canonical="/marketplace"
        ogImage="/marketplace-og-image.jpg"
        structuredData={marketplaceStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <CTASection />
      </div>
    </>
  )
}

export default MarketplacePage
