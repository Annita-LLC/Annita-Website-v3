import { Suspense } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <FeaturesSection />
          <ServicesSection />
          <TestimonialsSection />
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
