'use client'

import { useState } from 'react'
import { Suspense } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import StatsSection from '@/components/sections/StatsSection'
// import AboutSection from '@/components/sections/AboutSection'

import TrustedPartnersSection from '@/components/sections/TrustedPartnersSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import WelcomeLoader from '@/components/ui/WelcomeLoader'

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true)

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
  }

  if (showWelcome) {
    return <WelcomeLoader onComplete={handleWelcomeComplete} />
  }

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <StatsSection />
      </Suspense>
      
      {/* AboutSection removed - team section moved to /about page */}
      

      
      <Suspense fallback={<LoadingSpinner />}>
        <TrustedPartnersSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>
    </>
  )
}
