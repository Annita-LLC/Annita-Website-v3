import type { Metadata } from 'next'
import { Zen_Dots, Lora } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/ui/CookieConsent'
import OfflineBanner from '@/components/ui/OfflineBanner'

const zenDots = Zen_Dots({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-zen-dots',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Annita - Africa\'s First All-in-One Digital Platform',
    template: '%s | Annita'
  },
  description: 'Annita is Africa\'s premier digital platform, offering integrated e-commerce, fintech, AI, and logistics solutions. Empowering 450M+ African MSMEs with innovative technology for digital transformation.',
  keywords: [
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
    'economic growth',
    'African tech',
    'digital payments',
    'mobile money',
    'business automation',
    'supply chain',
    'cross-border trade',
    'African innovation',
    'tech startup',
    'digital economy'
  ],
  authors: [{ name: 'Annita Team' }],
  creator: 'Annita',
  publisher: 'Annita',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.an-nita.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
      'pt-PT': '/pt',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.an-nita.com',
    title: 'Annita - Africa\'s First All-in-One Digital Platform',
    description: 'Empowering 450M+ African MSMEs with integrated e-commerce, fintech, AI, and logistics solutions.',
    siteName: 'Annita',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Annita - Africa\'s Digital Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annita - Africa\'s First All-in-One Digital Platform',
    description: 'Empowering 450M+ African MSMEs with integrated e-commerce, fintech, AI, and logistics solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@annita_africa',
    site: '@annita_africa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'msapplication-TileColor': '#0ea5e9',
    'theme-color': '#0ea5e9',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Annita',
    'application-name': 'Annita',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${zenDots.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Annita",
                             "url": "https://www.an-nita.com",
               "logo": "https://www.an-nita.com/logo.png",
              "description": "Africa's first all-in-one digital platform, combining e-commerce, fintech, AI, communication, marketing, logistics, and more into a single ecosystem.",
              "foundingDate": "2021",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Liberia",
                "addressRegion": "West Africa"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                                 "email": "annitallc@gmail.com"
              },
              "sameAs": [
                "https://twitter.com/annita_africa",
                "https://facebook.com/annita.africa",
                "https://linkedin.com/company/annita-africa",
                "https://instagram.com/annita_africa"
              ],
              "offers": {
                "@type": "Offer",
                "description": "All-in-one digital platform for MSMEs",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`${zenDots.variable} ${lora.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <CookieConsent />
        <OfflineBanner />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
