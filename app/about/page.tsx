'use client'

import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/about/HeroSection'
import StorySection from '@/components/sections/about/StorySection'
import ImpactSection from '@/components/sections/about/ImpactSection'
import LeadershipSection from '@/components/sections/about/LeadershipSection'
import CTASection from '@/components/sections/CTASection'

// About page specific CTA content
const aboutCTAProps = {
  title: "Ready to Join Our Mission?",
  subtitle: "Be part of Africa's largest digital transformation. Connect with our team to learn how we're empowering MSMEs across the continent."
}

const AboutPage = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita",
    "url": "https://www.an-nita.com",
    "logo": "https://www.an-nita.com/favicon.png",
    "description": "Africa's leading all-in-one digital platform integrating e-commerce, fintech, AI-driven tools, and lifestyle services",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Monrovia",
      "addressCountry": "Liberia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "annitallc@gmail.com"
    },
    "sameAs": [
      "https://linkedin.com/company/annita-africa",
      "https://twitter.com/annita_africa"
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
      },
      {
        "@type": "Person",
        "name": "Lamber Kpukuyou",
        "jobTitle": "CTO"
      }
    ],
    "award": [
      "Orange Social Venture Prize Winner 2024",
      "African Union EAN Fellowship 2024",
      "SMART Liberia Winner 2024",
      "Mansa Platform Partner 2025"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "All African Countries"
      }
    ],
    "numberOfEmployees": "10-50",
    "slogan": "Africa's Leading All-in-One Digital Platform"
  }

  return (
    <>
      <SEOHead
        title="About Us - Annita | Empowering Africa's Digital Future"
        description="Learn about Annita, Africa's leading all-in-one digital platform. Discover our mission to empower 5 million MSMEs across Africa by 2029 through innovative e-commerce, fintech, and AI solutions."
        keywords={[
          'Annita',
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
          'digital innovation Africa',
          'Orange Social Venture Prize',
          'African Union Fellowship',
          'Mansa Platform',
          'SMART Liberia',
          'Christopher O Fallah',
          'Annita leadership'
        ]}
        canonical="/about"
        ogImage="/about-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen">
        {/* Hero Section - Professional positioning as Africa's leading platform */}
        <HeroSection />

        {/* Story Section - Our unique position and market leadership */}
        <StorySection />

        {/* Impact Section - Real achievements and market position */}
        <ImpactSection />

        {/* Leadership Section - Professional team presentation */}
        <LeadershipSection />

        {/* Call to Action */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <CTASection {...aboutCTAProps} />
        </section>
      </div>
    </>
  )
}

export default AboutPage
