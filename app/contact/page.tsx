"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/contact/HeroSection'
import ContactMethodsSection from '@/components/sections/contact/ContactMethodsSection'
import ContactFormSection from '@/components/sections/contact/ContactFormSection'

const ContactPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Annita - Get Support and Assistance",
    "description": "Contact Annita for support, partnerships, or any questions about our all-in-one digital platform. Multiple contact methods available including email, phone, and live chat.",
    "url": "https://annita.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Annita LLC",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@annita.com",
          "telephone": "+231 123 456 789",
          "availableLanguage": ["English", "French", "Portuguese"]
        }
      ]
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Us - Get Support and Assistance | Annita LLC"
        description="Contact Annita for support, partnerships, or any questions about our all-in-one digital platform. Multiple contact methods available including email, phone, and live chat."
        keywords={[
          'contact Annita',
          'Annita support',
          'customer service',
          'technical support',
          'business inquiry',
          'partnership contact',
          'help desk',
          'customer care',
          'support team',
          'contact information',
          'phone support',
          'email support',
          'live chat',
          'business hours',
          'response time',
          'customer assistance',
          'technical assistance',
          'business development',
          'partnership opportunities',
          'enterprise contact',
          'sales inquiry',
          'billing support',
          'account help',
          'platform support',
          'African support',
          'local support',
          'multilingual support',
          '24/7 support',
          'urgent support',
          'priority support'
        ]}
        canonical="/contact"
        ogImage="/contact-og-image.jpg"
        structuredData={contactStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <ContactMethodsSection />
        <ContactFormSection />
      </div>
    </>
  )
}

export default ContactPage
