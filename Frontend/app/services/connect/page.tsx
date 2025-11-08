'use client'

import { useState, memo, Suspense } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import SecurityBadge from '@/components/ui/SecurityBadge'
import SecurityFeatures from '@/components/ui/SecurityFeatures'
import { 
  MessageSquare, 
  Users, 
  Store, 
  Truck, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Activity,
  Heart,
  BarChart3,
  Shield,
  Lock,
  Eye,
  Server
} from 'lucide-react'
import Button from '@/components/ui/Button'

const ConnectPage = memo(() => {
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'logistics'>('seller')

  const buyerFeatures = [
    'Targeted advertising',
    'Customer engagement tools',
    'AI-driven insights',
    'Analytics and reporting',
    'Personalized recommendations',
    'Social media integration'
  ]

  const sellerFeatures = [
    'Targeted advertising',
    'Customer engagement tools',
    'AI-driven insights',
    'Analytics and reporting',
    'Campaign management',
    'Social media management'
  ]

  const logisticsFeatures = [
    'Customer communication',
    'Delivery notifications',
    'AI-driven insights',
    'Analytics and reporting',
    'Route communication',
    'Customer feedback'
  ]

  const stats = {
    avgEngagement: 92.5,
    activeCampaigns: 23,
    messagesSent: 10000,
    customerSatisfaction: 98
  }

  return (
    <>
      <SEOHead
        title="Annita Connect - Communication & Marketing Suite | Annita LLC"
        description="Lowers customer acquisition costs through affordable, data-backed marketing and customer engagement tools with AI-powered audience targeting."
        keywords={[
          'Annita Connect',
          'communication suite',
          'marketing tools',
          'customer engagement',
          'AI-driven insights',
          'targeted advertising',
          'analytics',
          'social media management'
        ]}
        canonical="/services/connect"
        ogImage="/images/DEMO-Images/Annita Connect.webp"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Security Badge */}
        <SecurityBadge />

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Communication & Marketing Suite
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Annita <span className="text-orange-600">Connect</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Lowers customer acquisition costs through affordable, data-backed marketing 
                and customer engagement tools with <span className="text-orange-600 font-semibold">AI-powered audience targeting</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.avgEngagement}%</div>
                <div className="text-sm text-gray-600 mb-1">Avg Engagement</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.2% this month
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.activeCampaigns}</div>
                <div className="text-sm text-gray-600 mb-1">Active Campaigns</div>
                <div className="flex items-center text-xs text-green-600">
                  <Activity className="w-3 h-3 mr-1" />
                  Running smoothly
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.messagesSent.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-1">Messages Sent</div>
                <div className="flex items-center text-xs text-green-600">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  This month
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stats.customerSatisfaction}%</div>
                <div className="text-sm text-gray-600 mb-1">Customer Satisfaction</div>
                <div className="flex items-center text-xs text-green-600">
                  <Heart className="w-3 h-3 mr-1" />
                  High rating
                </div>
              </div>
            </div>

            {/* Demo Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-200 shadow-2xl">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Annita Connect Demo</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Marketing Dashboard</p>
                </div>
                <div className="relative mx-auto group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                    <img 
                      src="/images/DEMO-Images/Annita Connect.webp" 
                      alt="Annita Connect Demo" 
                      className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
                </div>
              </div>
            </div>

            {/* Role Tabs */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveRole('buyer')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeRole === 'buyer'
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Users className="w-5 h-5 inline mr-2" />
                  For Buyers
                </button>
                <button
                  onClick={() => setActiveRole('seller')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeRole === 'seller'
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Store className="w-5 h-5 inline mr-2" />
                  For Sellers (MSMEs)
                </button>
                <button
                  onClick={() => setActiveRole('logistics')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeRole === 'logistics'
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Truck className="w-5 h-5 inline mr-2" />
                  For Logistics
                </button>
              </div>

              {/* Role-specific Content */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                {activeRole === 'buyer' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Buyers
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Stay engaged with personalized marketing, recommendations, and communication 
                      tools. Get insights and analytics about your preferences.
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
                      Start Engaging
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
                      Lower customer acquisition costs with affordable, data-backed marketing. 
                      AI-powered audience targeting and comprehensive analytics.
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
                      Start Campaign
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
                      Communicate with customers effectively. Send delivery notifications, 
                      track customer feedback, and analyze communication performance.
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
                      Start Communicating
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

ConnectPage.displayName = 'ConnectPage'

export default ConnectPage
