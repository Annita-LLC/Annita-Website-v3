"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import HeroSection from '@/components/sections/payments/HeroSection'
import FeaturesSection from '@/components/sections/payments/FeaturesSection'
import PaymentMethodsSection from '@/components/sections/payments/PaymentMethodsSection'
import CTASection from '@/components/sections/payments/CTASection'

const PaymentsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const paymentsStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnnitaPay",
    "description": "Secure payment gateway with escrow services and digital wallet solutions for African businesses",
    "url": "https://annita.com/payments",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Annita",
      "url": "https://annita.com"
    },
    "featureList": [
      "Escrow Protection",
      "Multi-Currency Support",
      "Mobile Money Integration",
      "Bank-Level Security",
      "Instant Transfers",
      "Business Accounts"
    ]
  }

  return (
    <>
      <SEOHead
        title="Payments - Secure Digital Payments & Escrow Services | Annita LLC"
        description="Send money instantly across Africa with bank-level security, escrow protection, and support for all major currencies. Trusted by millions for secure payments."
        keywords={[
          'African payments',
          'digital payments',
          'escrow protection',
          'secure transactions',
          'mobile money',
          'cross-border payments',
          'African fintech',
          'payment gateway',
          'digital wallet',
          'secure transfers',
          'multi-currency',
          'bank-level security',
          'instant payments',
          'business payments',
          'payment processing',
          'fraud protection',
          'transaction security',
          'African currencies',
          'payment solutions',
          'digital banking',
          'mobile payments',
          'online payments',
          'secure money transfer',
          'payment protection',
          'African payment platform',
          'trusted payments',
          'secure escrow',
          'payment verification',
          'transaction tracking',
          'payment compliance'
        ]}
        canonical="/payments"
        ogImage="/payments-og-image.jpg"
        structuredData={paymentsStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <HeroSection />
        <FeaturesSection />
        <PaymentMethodsSection />
        <CTASection />
      </div>
    </>
  )
}

export default PaymentsPage
