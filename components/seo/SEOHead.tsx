"use client"

import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: any
  noIndex?: boolean
  noFollow?: boolean
}

const SEOHead = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}: SEOHeadProps) => {
  const fullTitle = title.includes('Annita') ? title : `${title} | Annita`
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description
  
  const defaultKeywords = [
    'Annita',
    'Africa',
    'digital platform',
    'e-commerce',
    'fintech',
    'AI',
    'MSMEs',
    'logistics',
    'marketing',
    'communication',
    'African Continental Free Trade Area',
    'AfCFTA',
    'Liberia',
    'West Africa',
    'digital transformation',
    'business solutions',
    'payment gateway',
    'escrow services',
    'digital wallet',
    'on-demand delivery',
    'multivendor marketplace',
    'financial inclusion',
    'rural development',
    'women empowerment',
    'sustainable development',
    'job creation',
    'economic growth'
  ]

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords])).join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Annita Team" />
      <meta name="robots" content={noIndex ? 'noindex' : 'index'} />
      <meta name="robots" content={noFollow ? 'nofollow' : 'follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`https://annita.com${canonical}`} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`https://annita.com${canonical || ''}`} />
      <meta property="og:image" content={`https://annita.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Annita" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://annita.com${ogImage}`} />
      <meta name="twitter:creator" content="@annita_africa" />
      <meta name="twitter:site" content="@annita_africa" />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#FF6600" />
      <meta name="msapplication-TileColor" content="#FF6600" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Annita" />
      <meta name="application-name" content="Annita" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="LR" />
      <meta name="geo.country" content="Liberia" />
      <meta name="geo.placename" content="Monrovia" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Business District" />
      <meta name="business:contact_data:locality" content="Monrovia" />
      <meta name="business:contact_data:region" content="Liberia" />
      <meta name="business:contact_data:postal_code" content="1000" />
      <meta name="business:contact_data:country_name" content="Liberia" />
      <meta name="business:contact_data:phone_number" content="+231 123 456 789" />
      <meta name="business:contact_data:email" content="contact@annita.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/fonts/zen-dots.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/lora.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Additional Performance Optimizations */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Head>
  )
}

export default SEOHead
