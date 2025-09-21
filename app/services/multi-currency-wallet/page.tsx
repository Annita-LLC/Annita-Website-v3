'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  Wallet, 
  Globe, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Play,
  ExternalLink,
  Star,
  Zap,
  Lock,
  CreditCard,
  TrendingUp
} from 'lucide-react'

const MultiCurrencyWalletPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: Globe,
      title: "54+ African Currencies",
      description: "Support for all major African currencies with real-time conversion rates",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Advanced encryption and fraud protection for secure transactions",
      color: "green"
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send and receive money instantly across African countries",
      color: "orange"
    },
    {
      icon: Lock,
      title: "Escrow Protection",
      description: "Secure transactions with funds held until delivery confirmation",
      color: "purple"
    }
  ]

  const supportedCurrencies = [
    { code: "NGN", name: "Nigerian Naira", country: "Nigeria" },
    { code: "KES", name: "Kenyan Shilling", country: "Kenya" },
    { code: "GHS", name: "Ghanaian Cedi", country: "Ghana" },
    { code: "ZAR", name: "South African Rand", country: "South Africa" },
    { code: "EGP", name: "Egyptian Pound", country: "Egypt" },
    { code: "MAD", name: "Moroccan Dirham", country: "Morocco" },
    { code: "TND", name: "Tunisian Dinar", country: "Tunisia" },
    { code: "DZD", name: "Algerian Dinar", country: "Algeria" }
  ]

  return (
    <>
      <SEOHead
        title="Multi-Currency Digital Wallet - Annita"
        description="Handle 54+ African currencies seamlessly with our secure digital wallet. Send, receive, and manage money across Africa with real-time conversion rates."
        keywords={[
          'digital wallet', 'multi-currency', 'African currencies', 'money transfer',
          'cross-border payments', 'escrow protection', 'secure transactions'
        ]}
        canonical="/services/multi-currency-wallet"
        ogImage="/images/og/multi-currency-wallet.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Wallet className="w-4 h-4 mr-2" />
                    Multi-Currency Digital Wallet
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Handle <span className="text-blue-600">54+ African Currencies</span> Seamlessly
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Send, receive, and manage money across Africa with our secure digital wallet. 
                    Real-time conversion rates, instant transfers, and bank-grade security.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Wallet className="w-5 h-5 mr-2" />
                      Join Waitlist
                    </button>
                    <button 
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                      className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Try V1.0 Now
                    </button>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Wallet className="w-4 h-4 text-blue-600" />
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-blue-600">Annita Wallet</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Built specifically for African businesses with enterprise-grade features and local support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supported Currencies Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Supported <span className="text-green-600">Currencies</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Trade confidently in 54+ African currencies with real-time conversion rates.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {supportedCurrencies.map((currency, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-2">{currency.code}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{currency.name}</div>
                    <div className="text-xs text-gray-600">{currency.country}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

export default MultiCurrencyWalletPage
