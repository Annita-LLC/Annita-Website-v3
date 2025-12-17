'use client'

import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/about/HeroSection'
import MissionVisionSection from '@/components/sections/about/MissionVisionSection'
import ValuesSection from '@/components/sections/about/ValuesSection'
import JourneySection from '@/components/sections/about/JourneySection'
import TeamSection from '@/components/sections/about/TeamSection'
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
      }
    ]
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
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Mission & Vision */}
        <section className="py-10 sm:py-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <MissionVisionSection />
        </section>

        {/* Our Values */}
        <section className="py-10 sm:py-14">
          <ValuesSection />
        </section>


        {/* Our Journey */}
        <section className="py-10 sm:py-14 bg-gradient-to-br from-gray-50 to-orange-50">
          <JourneySection />
        </section>


        {/* Leadership Team */}
        <section className="py-10 sm:py-14 bg-gradient-to-br from-purple-50 to-pink-50">
          <TeamSection />
        </section>

        {/* Call to Action */}
        <section className="py-10 sm:py-14 bg-gradient-to-br from-orange-50 to-red-50">
          <CTASection {...aboutCTAProps} />
        </section>
      </div>
    </>
  )
}

export default AboutPage
