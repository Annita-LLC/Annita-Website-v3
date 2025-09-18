'use client'

import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import HeroSection from '@/components/sections/hero/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
// import AfricanBusinessFeatures from '@/components/sections/AfricanBusinessFeatures'
import V3AnnouncementSection from '@/components/sections/V3AnnouncementSection'
// import AboutSection from '@/components/sections/AboutSection'

import TrustedPartnersSection from '@/components/sections/TrustedPartnersSection'

import CTASection from '@/components/sections/CTASection'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import WelcomeLoader from '@/components/ui/WelcomeLoader'
import SEOHead from '@/components/seo/SEOHead'

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Check if welcome loader has been shown in this session
    const hasShownWelcome = sessionStorage.getItem('annita-welcome-shown')
    if (!hasShownWelcome) {
      setShowWelcome(true)
    }
  }, [])

  const handleWelcomeComplete = () => {
    sessionStorage.setItem('annita-welcome-shown', 'true')
    setShowWelcome(false)
  }

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita - Africa's First AI-Powered All-in-One Digital Platform",
    "description": "Annita is Africa's first all-in-one digital platform, combining e-commerce, fintech, Artificial Intelligence, communication, marketing, logistics, and more into a single ecosystem. We empower MSMEs and individuals with innovative AI-powered solutions, connectivity, and convenience.",
    "url": "https://annita.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Annita",
      "logo": {
        "@type": "ImageObject",
        "url": "https://annita.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Annita",
      "description": "Africa's first all-in-one digital platform empowering MSMEs",
      "url": "https://annita.com",
      "logo": "https://annita.com/logo.png",
      "foundingDate": "2021",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Liberia",
        "addressRegion": "West Africa"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@annita.com"
      },
      "sameAs": [
        "https://twitter.com/annita_africa",
        "https://facebook.com/annita.africa",
        "https://linkedin.com/company/annita-africa",
        "https://instagram.com/annita_africa"
      ],
      "offers": {
        "@type": "Offer",
        "description": "All-in-one digital platform for MSMEs",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  }

  if (showWelcome) {
    return (
      <div className="fixed inset-0 z-[60] bg-slate-900">
        <WelcomeLoader onComplete={handleWelcomeComplete} />
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title="Annita - Africa's First AI-Powered All-in-One Digital Platform"
        description="Built for African businesses. Cross-border trade, institutional backing, seamless integration. Connect with authentic African suppliers and grow your business."
        keywords={[
          'Annita',
          'Africa digital platform',
          'all-in-one platform',
          'e-commerce platform',
          'fintech solutions',
          'AI services',
          'MSME empowerment',
          'African business platform',
          'digital transformation',
          'payment gateway',
          'escrow services',
          'digital wallet',
          'on-demand delivery',
          'multivendor marketplace',
          'financial inclusion',
          'rural development',
          'women empowerment',
          'sustainable development',
          'job creation',
          'economic growth',
          'African Continental Free Trade Area',
          'AfCFTA',
          'Liberia',
          'West Africa',
          'business solutions',
          'logistics',
          'marketing',
          'communication',
          'African startups',
          'small business platform',
          'micro-enterprises',
          'digital commerce',
          'mobile payments',
          'cross-border trade',
          'African innovation',
          'technology platform',
          'business growth',
          'digital economy',
          'African entrepreneurship',
          'business tools',
          'digital services',
          'KYC verified businesses',
          'Smile ID verification',
          'escrow payment protection',
          'RFQ based sourcing',
          'multi-currency support',
          'African currencies',
          'pan-African network',
          'AfCFTA regions',
          'institutional backing',
          'African bank partnerships',
          'trade finance',
          'connected ecosystem',
          'continental trade tools',
          'verified suppliers',
          'authentic African suppliers',
          'quality assurance',
          'comprehensive certifications',
          'real-time conversion tracking',
          'integrated financing solutions',
          'African marketplace',
          'cross-border trade facilitation',
          'African business ecosystem',
          'verified users',
          'due diligence',
          'secure transactions',
          'African business features',
          'generic marketplace alternative',
          'African-focused platform',
          'continental integration',
          'African trade platform'
        ]}
        canonical="/"
        ogImage="/home-og-image.jpg"
        structuredData={homeStructuredData}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
      
      {/* AfricanBusinessFeatures moved to service pages for detailed content */}
      
      <Suspense fallback={<LoadingSpinner />}>
        <V3AnnouncementSection />
      </Suspense>
      
      {/* AboutSection removed - team section moved to /about page */}
      

      
      <Suspense fallback={<LoadingSpinner />}>
        <TrustedPartnersSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>

      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>
    </>
  )
}
