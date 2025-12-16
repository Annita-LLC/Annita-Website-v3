'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'

export default function CareersPage() {
  return (
    <>
      <SEOHead
        title="Careers - Join Annita's Mission"
        description="Join Annita's mission to empower Africa's MSMEs. Explore career opportunities in technology, business, and innovation."
        keywords={['careers', 'jobs', 'Annita']}
        canonical="/careers"
      />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Careers at Annita</h1>
          <p className="text-lg text-gray-600">Join our mission to empower Africa's MSMEs.</p>
        </div>
      </div>
    </>
  )
}