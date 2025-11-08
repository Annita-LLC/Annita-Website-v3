'use client'

import { useState, memo, Suspense } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import SecurityBadge from '@/components/ui/SecurityBadge'
import SecurityFeatures from '@/components/ui/SecurityFeatures'
import { 
  Truck, 
  Users, 
  Store, 
  MapPin, 
  Clock, 
  Package,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Shield,
  Globe,
  Route,
  Timer,
  Lock,
  Eye,
  Server
} from 'lucide-react'
import Button from '@/components/ui/Button'

const LogisticsPage = memo(() => {
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'logistics'>('logistics')

  const buyerFeatures = [
    'Real-time tracking',
    'Same-day/next-day delivery',
    'Secure delivery',
    'Delivery notifications',
    'Multiple delivery options',
    'Package insurance'
  ]

  const sellerFeatures = [
    'Vendor integration',
    'Same-day/next-day delivery',
    'Real-time tracking',
    'Warehousing & inventory management',
    'Automated shipping labels',
    'Delivery analytics'
  ]

  const logisticsFeatures = [
    'Vendor integration',
    'Same-day/next-day delivery',
    'Real-time tracking',
    'Warehousing & inventory management',
    'AI-powered route optimization',
    'Delivery analytics dashboard'
  ]

  const stats = {
    onTimeDelivery: 98.3,
    cities: 45,
    activeDeliveries: 234,
    drivers: 156
  }

  return (
    <>
      <SEOHead
        title="Annita Logistics - On-Demand Delivery Network | Annita LLC"
        description="Streamlined logistics for MSMEs without their own fleets. Real-time tracking and same-day delivery options with AI-powered route optimization."
        keywords={[
          'Annita Logistics',
          'delivery network',
          'logistics services',
          'real-time tracking',
          'same-day delivery',
          'route optimization',
          'warehousing',
          'inventory management'
        ]}
        canonical="/services/logistics"
        ogImage="/images/DEMO-Images/Annita Logistics.webp"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
        {/* Security Badge */}
        <SecurityBadge />

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2" />
                On-Demand Delivery Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Annita <span className="text-orange-600">Logistics</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Streamlined logistics for MSMEs without their own fleets. Real-time tracking 
                and same-day delivery options with <span className="text-orange-600 font-semibold">AI-powered route optimization</span>.
              </p>
            </div>

            {/* Stats - Premium Design */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Timer className="w-6 h-6 text-white" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.cities}</div>
                <div className="text-sm text-gray-600 mb-2">Cities Covered</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure delivery
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <Route className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stats.activeDeliveries}</div>
                <div className="text-sm text-gray-600 mb-2">Active Deliveries</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Package className="w-3 h-3 mr-1" />
                  In progress
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <Globe className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.drivers}</div>
                <div className="text-sm text-gray-600 mb-2">Drivers</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Route className="w-3 h-3 mr-1" />
                  Active network
                </div>
              </div>
            </div>

            {/* Demo Image - Optimized */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-orange-200/50 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Annita Logistics Demo</h3>
                  <p className="text-sm sm:text-base text-gray-600">Real-time Tracking</p>
                </div>
                <div className="relative mx-auto group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                    <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl" />}>
                      <img 
                        src="/images/DEMO-Images/Annita Logistics.webp" 
                        alt="Annita Logistics Demo" 
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
            <SecurityFeatures features={[
              {
                icon: Shield,
                title: 'Secure Delivery Network',
                description: '256-bit encryption for all logistics data and tracking information',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Lock,
                title: 'Package Protection',
                description: 'Insurance and secure handling with real-time monitoring',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Eye,
                title: 'Privacy Protection',
                description: 'GDPR-compliant data protection for delivery information',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Server,
                title: 'Secure Infrastructure',
                description: 'ISO 27001 certified with 99.9% uptime guarantee',
                color: 'from-orange-500 to-red-500'
              }
            ]} />

            {/* Role Tabs - Premium Design */}
            <div className="max-w-5xl mx-auto mt-16">
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
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Buyers
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Track your orders in real-time. Get same-day or next-day delivery with 
                      secure handling and delivery notifications.
                    </p>
                    <div className="space-y-3 mb-8">
                      {buyerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Track Delivery
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {activeRole === 'seller' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Store className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Sellers (MSMEs)
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Integrate logistics into your store. Access warehousing, inventory management, 
                      and automated shipping solutions.
                    </p>
                    <div className="space-y-3 mb-8">
                      {sellerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Integrate Logistics
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {activeRole === 'logistics' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Truck className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Logistics Providers
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Join our delivery network. Access AI-powered route optimization, real-time 
                      tracking, and comprehensive analytics dashboard.
                    </p>
                    <div className="space-y-3 mb-8">
                      {logisticsFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="group"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Join Logistics Network
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

LogisticsPage.displayName = 'LogisticsPage'

export default LogisticsPage
