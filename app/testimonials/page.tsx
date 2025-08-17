"use client"

import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/testimonials/HeroSection'
import StatsSection from '@/components/sections/testimonials/StatsSection'
import TestimonialsGrid from '@/components/sections/testimonials/TestimonialsGrid'
import CTASection from '@/components/sections/testimonials/CTASection'

const TestimonialsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Customer Testimonials - Annita LLC",
    "description": "Read and watch testimonials from our satisfied customers across Africa",
    "url": "https://annita.com/testimonials",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Customer Reviews and Testimonials"
    }
  }

  return (
    <>
      <SEOHead
        title="Customer Testimonials - Annita LLC"
        description="Read and watch testimonials from our satisfied customers across Africa. Real stories from businesses and individuals who have transformed their lives with Annita."
        keywords={[
          'testimonials',
          'customer reviews',
          'video testimonials',
          'customer feedback',
          'Annita reviews',
          'user testimonials',
          'customer success stories',
          'business testimonials',
          'personal testimonials',
          'African testimonials',
          'Liberia testimonials',
          'customer satisfaction',
          'user feedback',
          'success stories',
          'customer experiences',
          'product reviews',
          'service reviews',
          'platform reviews',
          'AI testimonials',
          'digital transformation testimonials',
          'payment platform reviews',
          'e-commerce testimonials',
          'logistics testimonials',
          'business growth testimonials',
          'personal development testimonials',
          'fitness testimonials',
          'education testimonials',
          'health testimonials',
          'creative testimonials',
          'entrepreneur testimonials',
          'startup testimonials'
        ]}
        canonical="/testimonials"
        ogImage="/images/testimonials-page.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <StatsSection />
        <TestimonialsGrid />
        <CTASection />
      </div>
    </>
  )
}

export default TestimonialsPage
