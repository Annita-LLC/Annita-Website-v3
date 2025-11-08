'use client'

import { useState, lazy, Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  ShoppingCart, 
  Store, 
  Truck, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Shield,
  Globe,
  Package,
  Search,
  Star,
  CreditCard,
  MapPin,
  Zap,
  Lock,
  Eye,
  Award,
  Server,
  Activity
} from 'lucide-react'
import Button from '@/components/ui/Button'

// Lazy load heavy components for better performance
const OptimizedImage = dynamic(() => import('@/components/ui/OptimizedImage'), {
  ssr: true,
  loading: () => <div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl" />
})

const MarketplacePage = memo(() => {
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'logistics'>('buyer')

  const buyerFeatures = [
    'KYC-verified businesses through Smile ID',
    'Escrow payment protection for secure transactions',
    'RFQ-based sourcing with multiple responses',
    'Multi-currency support for 30+ African currencies',
    'Pan-African network across all AfCFTA regions',
    'Quality assurance and comprehensive certifications'
  ]

  const sellerFeatures = [
    'KYC-verified businesses through Smile ID',
    'Escrow payment protection for secure transactions',
    'RFQ-based sourcing with multiple responses',
    'Multi-currency support for 30+ African currencies',
    'Pan-African network across all AfCFTA regions',
    'Quality assurance and comprehensive certifications'
  ]

  const logisticsFeatures = [
    'Vendor integration',
    'Same-day/next-day delivery',
    'Real-time tracking',
    'Warehousing & inventory management'
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Grade Encryption',
      description: '256-bit SSL/TLS encryption for all transactions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with 2FA and biometric verification',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR-compliant data protection and zero-knowledge architecture',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'ISO 27001 certified with 99.9% uptime guarantee',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const stats = {
    activeUsers: 1275,
    productsSold: 8989,
    onTimeDelivery: 98.3,
    cities: 45
  }

  return (
    <>
      <SEOHead
        title="Annita Marketplace - Multivendor E-commerce Platform | Annita LLC"
        description="Unlike generic marketplaces, Annita is built for African businesses featuring KYC-verified suppliers, escrow payment protection, and RFQ-based sourcing. Connect with authentic African suppliers and grow your business across the continent."
        keywords={[
          'Annita Marketplace',
          'multivendor marketplace',
          'African marketplace',
          'KYC verified suppliers',
          'escrow payment protection',
          'RFQ sourcing',
          'African e-commerce',
          'cross-border trade',
          'AfCFTA',
          'African suppliers'
        ]}
        canonical="/services/marketplace"
        ogImage="/images/DEMO-Images/Annita Marketplace.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Security Badge - Top of Page */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 text-center text-sm font-medium">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Bank-Grade Security • 256-bit Encryption • ISO 27001 Certified • Zero Data Leaks</span>
            <Shield className="w-4 h-4" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Multivendor E-commerce Platform
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Annita <span className="text-orange-600">Marketplace</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Unlike generic marketplaces, Annita is built for African businesses featuring 
                <span className="text-orange-600 font-semibold"> KYC-verified suppliers</span>, 
                <span className="text-orange-600 font-semibold"> escrow payment protection</span>, and 
                <span className="text-orange-600 font-semibold"> RFQ-based sourcing</span>. 
                Connect with authentic African suppliers and grow your business across the continent.
              </p>
            </div>

            {/* Stats - Premium Design */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-2">Active Users</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% today
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stats.productsSold.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-2">Products Sold</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% today
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">{stats.onTimeDelivery}%</div>
                <div className="text-sm text-gray-600 mb-2">On-Time Delivery</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2.3% this week
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.cities}</div>
                <div className="text-sm text-gray-600 mb-2">Cities Covered</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure delivery
                </div>
              </div>
            </div>

            {/* Demo Image - Optimized */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-orange-200/50 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Annita Marketplace Demo</h3>
                  <p className="text-sm sm:text-base text-gray-600">Multivendor Platform</p>
                </div>
                <div className="relative mx-auto group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                    <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl" />}>
                      <img 
                        src="/images/DEMO-Images/Annita Marketplace.jpg" 
                        alt="Annita Marketplace Demo" 
                        className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="high"
                      />
                    </Suspense>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
                </div>
              </div>
            </div>

            {/* Security Features Section */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Bank-Grade Security
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Premium Protection, <span className="text-orange-600">Zero Compromises</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Your data and transactions are protected with military-grade encryption and enterprise-level security infrastructure.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Tabs - Premium Design */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveRole('buyer')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                    activeRole === 'buyer'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Users className="w-5 h-5 inline mr-2" />
                  For Buyers
                </button>
                <button
                  onClick={() => setActiveRole('seller')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                    activeRole === 'seller'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Store className="w-5 h-5 inline mr-2" />
                  For Sellers (MSMEs)
                </button>
                <button
                  onClick={() => setActiveRole('logistics')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                    activeRole === 'logistics'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Truck className="w-5 h-5 inline mr-2" />
                  For Logistics
                </button>
              </div>

              {/* Role-specific Content - Premium Design */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200/50">
                {activeRole === 'buyer' && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Features for Buyers</h2>
                        <p className="text-gray-600 mt-1">Premium shopping experience</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Discover and purchase from verified African suppliers. Access authentic products 
                      with secure payment protection and quality assurance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {buyerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Explore Marketplace
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {activeRole === 'seller' && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                        <Store className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Features for Sellers (MSMEs)</h2>
                        <p className="text-gray-600 mt-1">Grow your business across Africa</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Grow your business by connecting with buyers across Africa. Get KYC-verified, 
                      access escrow protection, and reach customers in all AfCFTA regions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {sellerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Start Selling
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {activeRole === 'logistics' && (
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                        <Truck className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Features for Logistics Providers</h2>
                        <p className="text-gray-600 mt-1">Join our delivery network</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Integrate with the marketplace to provide delivery services. Access real-time 
                      tracking, route optimization, and warehousing solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {logisticsFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Join Logistics Network
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
})

MarketplacePage.displayName = 'MarketplacePage'

export default MarketplacePage
