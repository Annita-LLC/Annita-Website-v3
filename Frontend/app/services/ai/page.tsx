'use client'

import { useState, memo, Suspense } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import SecurityBadge from '@/components/ui/SecurityBadge'
import SecurityFeatures from '@/components/ui/SecurityFeatures'
import { 
  Brain, 
  Users, 
  Store, 
  Truck, 
  Sparkles, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Zap,
  Target,
  Activity,
  Shield,
  Lock,
  Eye,
  Server
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AIPage = memo(() => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'logistics'>('seller')

  const buyerFeatures = [
    'AI-powered product recommendations',
    'Automated customer support',
    'Predictive analytics',
    'Smart search and discovery',
    'Personalized shopping experience',
    'Intelligent price comparisons'
  ]

  const sellerFeatures = [
    'AI-powered business insights',
    'Automated customer support',
    'Predictive analytics',
    'Smart inventory management',
    'Demand forecasting',
    'Automated pricing optimization'
  ]

  const logisticsFeatures = [
    'AI-powered route optimization',
    'Predictive delivery analytics',
    'Smart inventory management',
    'Automated dispatch',
    'Demand forecasting',
    'Real-time learning and adaptation'
  ]

  const stats = {
    aiAccuracy: 99.4,
    processingSpeed: 0.010,
    activeAI: 156,
    efficiency: 95.8
  }

  return (
    <>
      <SEOHead
        title="Annita AI - Artificial Intelligence Platform | Annita LLC"
        description="Intelligent automation and AI-powered insights to optimize business operations and drive growth for MSMEs with real-time learning and adaptation."
        keywords={[
          'Annita AI',
          'artificial intelligence',
          'AI platform',
          'business intelligence',
          'predictive analytics',
          'automated support',
          'smart inventory',
          'machine learning'
        ]}
        canonical="/services/ai"
        ogImage="/images/DEMO-Images/Annita AI.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
        {/* Security Badge */}
        <SecurityBadge />

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Artificial Intelligence Platform
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Annita <span className="text-orange-600">AI</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Intelligent automation and AI-powered insights to optimize business operations 
                and drive growth for MSMEs with <span className="text-orange-600 font-semibold">real-time learning and adaptation</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">{stats.aiAccuracy}%</div>
                <div className="text-sm text-gray-600 mb-1">AI Accuracy</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +0.3% today
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.processingSpeed}s</div>
                <div className="text-sm text-gray-600 mb-1">Processing Speed</div>
                <div className="flex items-center text-xs text-green-600">
                  <Zap className="w-3 h-3 mr-1" />
                  Ultra-fast
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.activeAI}</div>
                <div className="text-sm text-gray-600 mb-1">Active AI Models</div>
                <div className="flex items-center text-xs text-green-600">
                  <Brain className="w-3 h-3 mr-1" />
                  Running
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stats.efficiency}%</div>
                <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                <div className="flex items-center text-xs text-green-600">
                  <Target className="w-3 h-3 mr-1" />
                  Optimized
                </div>
              </div>
            </div>

            {/* Demo Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-200 shadow-2xl">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Annita AI Demo</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Intelligent Assistant</p>
                </div>
                <div className="relative mx-auto group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                    <img 
                      src="/images/DEMO-Images/Annita AI.jpg" 
                      alt="Annita AI Demo" 
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
                      Get personalized product recommendations, intelligent search, and automated 
                      customer support powered by AI.
                    </p>
                    <div className="space-y-3 mb-8">
                      {buyerFeatures.map((feature, index) => (
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
                        Try AI Now
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

                {activeRole === 'seller' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Store className="w-6 h-6 mr-3 text-orange-600" />
                      Features for Sellers (MSMEs)
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Optimize your business operations with AI-powered insights, automated 
                      customer support, and smart inventory management.
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
                        Try AI Now
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
                      Optimize routes, predict demand, and automate dispatch with AI-powered 
                      logistics solutions.
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
                        Try AI Now
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

AIPage.displayName = 'AIPage'

export default AIPage
