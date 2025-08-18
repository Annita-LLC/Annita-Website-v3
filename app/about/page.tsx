'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/about/HeroSection'
import MissionVisionSection from '@/components/sections/about/MissionVisionSection'
import ValuesSection from '@/components/sections/about/ValuesSection'
import JourneySection from '@/components/sections/about/JourneySection'
import TeamSection from '@/components/sections/about/TeamSection'
import CTASection from '@/components/sections/about/CTASection'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita LLC",
    "url": "https://annita.com",
    "logo": "https://annita.com/images/blog/Annita's%20Logo.png",
    "description": "Africa's first all-in-one digital platform integrating e-commerce, fintech, AI-driven tools, and lifestyle services",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Monrovia",
      "addressCountry": "Liberia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@annita.com"
    },
    "sameAs": [
      "https://linkedin.com/company/annita-llc",
      "https://twitter.com/annita_llc"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Christopher O. Fallah",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Emmanuel Z. Weh",
        "jobTitle": "CTO"
      },
      {
        "@type": "Person",
        "name": "Siah Fallah",
        "jobTitle": "CMO"
      }
    ]
  }

  return (
    <>
      <SEOHead
        title="About Us - Annita LLC | Empowering Africa's Digital Future"
        description="Learn about Annita LLC, Africa's leading all-in-one digital platform. Discover our mission to empower 5 million MSMEs across Africa by 2029 through innovative e-commerce, fintech, and AI solutions."
        keywords={[
          'Annita LLC',
          'about Annita',
          'African digital platform',
          'e-commerce Africa',
          'fintech Africa',
          'AI solutions Africa',
          'MSME empowerment',
          'digital transformation Africa',
          'African startup',
          'Liberia tech company',
          'African innovation',
          'digital platform Africa',
          'business solutions Africa',
          'African entrepreneurship',
          'tech company Africa',
          'digital services Africa',
          'African business platform',
          'innovation Africa',
          'digital economy Africa',
          'African technology',
          'business empowerment Africa',
          'digital solutions Africa',
          'African fintech',
          'e-commerce platform Africa',
          'African digital services',
          'business technology Africa',
          'African digital innovation',
          'platform solutions Africa',
          'African business technology',
          'digital business Africa',
          'African platform company',
          'business platform Africa',
          'African digital business',
          'technology platform Africa',
          'African business solutions',
          'digital platform company',
          'African tech platform',
          'business innovation Africa',
          'African digital platform',
          'technology solutions Africa',
          'African business platform',
          'digital innovation Africa'
        ]}
        canonical="/about"
        ogImage="/about-og-image.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <MissionVisionSection />
        <ValuesSection />
        <JourneySection />
        <TeamSection />
        <CTASection />
      </div>
    </>
  )
}

export default AboutPage
