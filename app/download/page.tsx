'use client'

import { useState } from 'react'
import { 
  Download, 
  Smartphone, 
  CheckCircle, 
  Star,
  ArrowRight,
  QrCode,
  Globe,
  Zap,
  ExternalLink
} from 'lucide-react'
import Button from '@/components/ui/Button'
import SEOHead from '@/components/seo/SEOHead'

const DownloadPage = () => {


  const features = [
    'Secure payments with AnnitaPay',
    'Shop from thousands of vendors',
    'Real-time delivery tracking',
    'AI-powered business tools',
    'Multi-language support',
    'Offline functionality',
    'Push notifications',
    'Biometric authentication'
  ]

  const appStats = [
    { number: '5M+', label: 'Downloads' },
    { number: '4.8', label: 'App Store Rating' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ]

  const downloadStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita Mobile App",
    "description": "Africa's all-in-one digital platform mobile app with secure payments, marketplace, AI tools, and real-time tracking",
    "url": "https://annita.com/download",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android",
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
      "Secure payments with AnnitaPay",
      "Shop from thousands of vendors",
      "Real-time delivery tracking",
      "AI-powered business tools",
      "Multi-language support",
      "Offline functionality",
      "Push notifications",
      "Biometric authentication"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000000"
    }
  }

  return (
    <>
      <SEOHead
        title="Download Annita - Africa's All-in-One Digital Platform"
        description="Download Annita's mobile app and access Africa's all-in-one digital platform. Secure payments, marketplace shopping, AI tools, real-time tracking, and more. Available on iOS and Android with 5M+ downloads and 4.8-star rating."
        keywords={[
          'download Annita',
          'Annita mobile app',
          'Annita app download',
          'iOS app',
          'Android app',
          'mobile application',
          'Africa digital platform',
          'all-in-one platform',
          'secure payments',
          'marketplace app',
          'AI tools',
          'real-time tracking',
          'mobile money',
          'e-commerce app',
          'business tools',
          'offline functionality',
          'push notifications',
          'biometric authentication',
          'multi-language support',
          'App Store',
          'Google Play',
          'mobile banking',
          'digital wallet',
          'shopping app',
          'delivery tracking',
          'business app',
          'African app',
          'MSME app',
          'small business app',
          'entrepreneur app',
          'digital transformation',
          'mobile commerce',
          'fintech app',
          'logistics app',
          'marketing app',
          'communication app',
          'mobile payments',
          'cross-border payments',
          'local payments',
          'mobile security',
          'app security',
          'data protection',
          'privacy protection'
        ]}
        canonical="/download"
        ogImage="/download-og-image.jpg"
        structuredData={downloadStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-10 h-10" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Download <span className="text-orange-500">Annita</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8">
                  Get Africa's all-in-one digital platform on your mobile device
                </p>
                
                {/* Download Buttons */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#" 
                      className="inline-block transform hover:scale-105 transition-transform duration-200"
                    >
                      <img 
                        src="/images/Icons/Download_on_the_App_Store_Badge.svg.webp" 
                        alt="Download on App Store" 
                        className="h-8"
                      />
                    </a>
                    <a 
                      href="#" 
                      className="inline-block transform hover:scale-105 transition-transform duration-200"
                    >
                      <img 
                        src="/images/Icons/google-play-badge-en.webp" 
                        alt="Get it on Google Play" 
                        className="h-8"
                      />
                    </a>
                  </div>
                  <p className="text-sm text-white/70">
                    Available on App Store and Google Play Store
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
                    <div className="w-64 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* App Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {appStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all Annita services from your mobile device with our powerful app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download Annita for your preferred mobile platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* iOS */}
            <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
              <p className="text-gray-600 mb-6">
                Download from the App Store for iPhone and iPad
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600">4.8/5</span>
                </div>
                <a 
                  href="#" 
                  className="inline-block transform hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="/images/Icons/Download_on_the_App_Store_Badge.svg.webp" 
                    alt="Download on App Store" 
                    className="h-6"
                  />
                </a>
                <p className="text-xs text-gray-500">
                  Requires iOS 13.0 or later
                </p>
              </div>
            </div>

            {/* Android */}
            <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
              <p className="text-gray-600 mb-6">
                Download from Google Play Store for Android devices
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600">4.7/5</span>
                </div>
                <a 
                  href="#" 
                  className="inline-block transform hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="/images/Icons/google-play-badge-en.webp" 
                    alt="Get it on Google Play" 
                    className="h-6"
                  />
                </a>
                <p className="text-xs text-gray-500">
                  Requires Android 8.0 or later
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Download Section with QR Codes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Download Annita App
              </h2>
              <p className="text-xl text-gray-600">
                Get the complete Annita experience on your mobile device
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* iOS Download */}
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
                  <p className="text-gray-600 mb-6">
                    Download for iPhone and iPad from the App Store
                  </p>
                  
                  {/* QR Code */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 inline-block">
                    <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                      <QrCode className="w-24 h-24 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3">Scan to download from App Store</p>
                  </div>
                  
                  {/* App Store Button */}
                  <a 
                    href="#" 
                    className="inline-block transform hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src="/images/app-store-badge.png" 
                      alt="Download on the App Store"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Android Download */}
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
                  <p className="text-gray-600 mb-6">
                    Download for Android devices from Google Play Store
                  </p>
                  
                  {/* QR Code */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 inline-block">
                    <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                      <QrCode className="w-24 h-24 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3">Scan to download from Play Store</p>
                  </div>
                  
                  {/* Google Play Button */}
                  <a 
                    href="#" 
                    className="inline-block transform hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src="/images/google-play-badge.png" 
                      alt="Get it on Google Play"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Download Links */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-soft inline-block">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Direct Download Links</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#" 
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download for iOS</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download for Android</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                System Requirements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">iOS Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• iOS 13.0 or later</li>
                    <li>• iPhone, iPad, or iPod touch</li>
                    <li>• 100MB available space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Android Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Android 8.0 or later</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• 150MB available space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </>
  )
}

export default DownloadPage
