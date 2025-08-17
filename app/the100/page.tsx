"use client"

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/the100/HeroSection'
import ProgramOverview from '@/components/sections/the100/ProgramOverview'
import ProgramStructure from '@/components/sections/the100/ProgramStructure'
import Opportunities from '@/components/sections/the100/Opportunities'
import ApplicationForms from '@/components/sections/the100/ApplicationForms'
import PartnerCollaboration from '@/components/sections/the100/PartnerCollaboration'
import ImpactTestimonials from '@/components/sections/the100/ImpactTestimonials'
import ContactSection from '@/components/sections/the100/ContactSection'

const The100Page = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",
    "name": "The 100 - Annita LLC Youth Empowerment Initiative",
    "description": "A comprehensive six-month training program for 100 Liberian youths in business skills, marketing, and mentorship, with internship opportunities and mini-grants for business startups.",
    "provider": {
      "@type": "Organization",
      "name": "Annita LLC",
      "url": "https://annita.com"
    },
    "educationalLevel": "High School, College",
    "timeRequired": "P6M",
    "teaches": [
      "Business Skills",
      "Marketing",
      "Mentorship",
      "Entrepreneurship",
      "Digital Skills"
    ],
    "location": {
      "@type": "Place",
      "addressCountry": "Liberia"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <>
      <SEOHead
        title="The 100 - Youth Empowerment Initiative | Annita LLC"
        description="Join The 100 initiative by Annita LLC - A comprehensive 6-month training program for 100 Liberian youths in business skills, marketing, and mentorship. Apply now for internship opportunities and mini-grants to start your own business."
        keywords={[
          'The 100',
          'youth empowerment',
          'Liberian youths',
          'business training',
          'mentorship program',
          'internship opportunities',
          'mini-grants',
          'entrepreneurship',
          'business skills',
          'marketing training',
          'Annita LLC',
          'Liberia youth development',
          'career development',
          'business mentorship',
          'youth leadership',
          'skills development',
          'business education',
          'startup funding',
          'affiliate program',
          'youth employment',
          'business coaching',
          'professional development',
          'youth entrepreneurship',
          'business opportunities',
          'career training',
          'youth empowerment program',
          'business skills training',
          'mentorship initiative',
          'youth development program',
          'entrepreneurial training',
          'business education program',
          'youth leadership development',
          'skills training program',
          'business mentorship program',
          'youth career development',
          'entrepreneurship training',
          'business opportunity program',
          'youth skills development',
          'professional training program'
        ]}
        canonical="/the100"
        ogImage="/the100-og-image.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        
        {/* Navigation Tabs */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'structure', label: 'Program Structure' },
                { id: 'opportunities', label: 'Opportunities' },
                { id: 'apply', label: 'Apply Now' },
                { id: 'partners', label: 'Partners' },
                { id: 'impact', label: 'Impact' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  data-tab={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-16 sm:py-20">
          {activeTab === 'overview' && <ProgramOverview />}
          {activeTab === 'structure' && <ProgramStructure />}
          {activeTab === 'opportunities' && <Opportunities />}
          {activeTab === 'apply' && <ApplicationForms />}
          {activeTab === 'partners' && <PartnerCollaboration />}
          {activeTab === 'impact' && <ImpactTestimonials />}
          {activeTab === 'contact' && <ContactSection />}
        </div>
      </div>
    </>
  )
}

export default The100Page
