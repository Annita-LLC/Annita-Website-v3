"use client"

import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/privacy/HeroSection'
import NavigationSection from '@/components/sections/privacy/NavigationSection'
import ContentSections from '@/components/sections/privacy/ContentSections'
import FAQSection from '@/components/sections/privacy/FAQSection'
import ContactSection from '@/components/sections/privacy/ContactSection'

const PrivacyPage = () => {
  const lastUpdated = "March 15, 2024"
  const effectiveDate = "March 15, 2024"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Annita",
    "description": "Comprehensive privacy policy explaining how Annita collects, uses, and protects your personal information with GDPR compliance and data security measures.",
    "url": "https://www.an-nita.com/privacy",
    "mainEntity": {
      "@type": "Organization",
      "name": "Annita",
      "privacyPolicy": {
        "@type": "WebPage",
        "url": "https://www.an-nita.com/privacy"
      }
    }
  }

  return (
    <>
      <SEOHead
        title="Privacy Policy - Annita | Your Data Security & Rights"
        description="Learn how Annita protects your personal information with bank-grade security, GDPR compliance, and transparent data practices. Exercise your privacy rights with confidence."
        keywords={[
          'privacy policy',
          'data protection',
          'GDPR compliance',
          'data security',
          'privacy rights',
          'Annita privacy',
          'personal data',
          'data encryption',
          'privacy controls',
          'data rights',
          'privacy protection',
          'secure platform',
          'data privacy',
          'user privacy',
          'data handling',
          'privacy regulations',
          'data compliance',
          'privacy standards',
          'data governance',
          'privacy framework',
          'secure data',
          'privacy assurance',
          'data trust',
          'privacy transparency'
        ]}
        canonical="/privacy"
        ogImage="/images/privacy-policy.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen">
        {/* Hero Section - Trust & Security Focus */}
        <HeroSection />

        {/* Navigation Section - Easy Access to All Sections */}
        <NavigationSection />

        {/* Content Sections - Detailed Privacy Information */}
        <ContentSections />

        {/* FAQ Section - Common Privacy Questions */}
        <FAQSection />

        {/* Contact Section - Privacy Team & Rights Requests */}
        <ContactSection />
      </div>
    </>
  )
}

export default PrivacyPage
