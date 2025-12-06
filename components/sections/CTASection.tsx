"use client"

import dynamic from 'next/dynamic'

// Lazy-load CTA section for faster initial page paint across all pages using it
const CTASection = dynamic(() => import('./CTASectionInner'), {
  ssr: false,
  loading: () => <section className="py-8 sm:py-12" />,
})

export default CTASection
