'use client'

import { useState, memo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import SecurityBadge from '@/components/ui/SecurityBadge'
import SecurityFeatures from '@/components/ui/SecurityFeatures'
import { 
  CreditCard, 
  Users, 
  Truck, 
  Shield, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Lock,
  Zap,
  Activity,
  Store,
  Eye,
  Server
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AnnitaPayPage = memo(() => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'logistics'>('buyer')

  const buyerFeatures = [
    'Multi-currency support for 54+ African currencies',
    'Escrow payment protection for secure transactions',
    'Mobile POS solutions for merchants',
    'Bridge-Powered Stablecoin Infrastructure',
    'Real-time settlements',
    'Bank-level security'
  ]

  const sellerFeatures = [
    'Multi-currency support for 54+ African currencies',
    'Escrow payment protection for secure transactions',
    'Mobile POS solutions for merchants',
    'Bridge-Powered Stablecoin Infrastructure',
    'Real-time settlements',
    'Bank-level security'
  ]

  const logisticsFeatures = [
    'Multi-currency support for 54+ African currencies',
    'Escrow payment protection for secure transactions',
    'Real-time settlements',
    'Mobile payment solutions',
    'Transaction tracking',
    'Bank-level security'
  ]

  const stats = {
    securityScore: 99.9,
    countries: 23,
    activeUsers: 8923,
    transactions: 15420
  }

  return (
    <>
      <SEOHead
        title="AnnitaPay - Africa's Unified Financial Engine | Annita LLC"
        description="AnnitaPay enables MSMEs and individuals to move, store, issue, and grow money seamlessly without borders. Trade confidently in 54+ African currencies with real-time settlements and escrow protection."
        keywords={[
          'AnnitaPay',
          'digital payments',
          'African currencies',
          'escrow protection',
          'mobile POS',
          'stablecoin',
          'cross-border payments',
          'financial services'
        ]}
        canonical="/services/annitapay"
        ogImage="/images/DEMO-Images/AnnitaPay.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
        {/* Security Badge */}
        <SecurityBadge />

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <CreditCard className="w-4 h-4 mr-2" />
                Africa's Unified Financial Engine
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                AnnitaPay
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                AnnitaPay enables MSMEs and individuals to move, store, issue, and grow money seamlessly 
                without borders. Trade confidently in 54+ African currencies with real-time settlements 
                and escrow protection.
              </p>
            </div>

            {/* Stats - Premium Design */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stats.securityScore}%</div>
                <div className="text-sm text-gray-600 mb-2">Security Score</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Shield className="w-3 h-3 mr-1" />
                  Bank-level security
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.countries}</div>
                <div className="text-sm text-gray-600 mb-2">Countries</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Globe className="w-3 h-3 mr-1" />
                  Global reach
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">{stats.activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-2">Active Users</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Growing daily
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <Zap className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.transactions.toLocaleString()}</div>
                <div className="text-sm text-gray-600 mb-2">Transactions</div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <Activity className="w-3 h-3 mr-1" />
                  Real-time
                </div>
              </div>
            </div>

            {/* Demo Image - Optimized */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-orange-200/50 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">AnnitaPay Demo</h3>
                  <p className="text-sm sm:text-base text-gray-600">Secure • Encrypted • Protected</p>
                </div>
                <div className="relative mx-auto group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                    <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl" />}>
                      <img 
                        src="/images/DEMO-Images/AnnitaPay.jpg" 
                        alt="AnnitaPay Demo" 
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
                title: 'Bank-Grade Encryption',
                description: '256-bit SSL/TLS encryption for all financial transactions',
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
                description: 'ISO 27001 & PCI DSS certified with 99.9% uptime guarantee',
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
                  <div className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Features for Buyers</h2>
                        <p className="text-gray-600 mt-1">Secure payment solutions</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Make secure payments with escrow protection. Support for 54+ African currencies 
                      with real-time settlements and bank-level security.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {buyerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        onClick={() => setIsDownloadModalOpen(true)}
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get Started
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-300"
                        onClick={() => window.location.href = '/demo'}
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                )}

                {activeRole === 'seller' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Store className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Sellers (MSMEs)
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Accept payments securely with escrow protection. Mobile POS solutions and 
                      multi-currency support to grow your business across Africa.
                    </p>
                    <div className="space-y-3 mb-8">
                      {sellerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="group"
                        onClick={() => setIsDownloadModalOpen(true)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.location.href = '/demo'}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                )}

                {activeRole === 'logistics' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Truck className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Logistics Providers
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Process payments and track transactions in real-time. Multi-currency support 
                      and secure payment processing for your logistics operations.
                    </p>
                    <div className="space-y-3 mb-8">
                      {logisticsFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="group"
                        onClick={() => setIsDownloadModalOpen(true)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.location.href = '/demo'}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Download Choice Modal */}
        <DownloadChoiceModal
          isOpen={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
        />
      </div>
    </>
  )
})

AnnitaPayPage.displayName = 'AnnitaPayPage'

export default AnnitaPayPage
