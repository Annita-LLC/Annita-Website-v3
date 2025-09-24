'use client'

import { useState } from 'react'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Zap,
  Star,
  Shield,
  Globe,
  MessageSquare,
  FileText,
  PieChart,
  Activity,
  BookOpen,
  Terminal,
  ShoppingBag,
  Package
} from 'lucide-react'
import Button from '@/components/ui/Button'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import CTASection from '@/components/sections/CTASection'

const BusinessAIPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const businessFeatures = [
    {
      icon: Shield,
      title: 'AI-Powered Customer Verification',
      description: 'Advanced document verification with computer vision and OCR technology. Complete verification in under 5 minutes with 99.5% accuracy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Intelligent Fraud Detection',
      description: 'Real-time fraud monitoring with machine learning algorithms. Detect suspicious activities with 95% accuracy across all transactions',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Business Analytics',
      description: 'Comprehensive business intelligence with predictive analytics, revenue forecasting, and market trend identification',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'AI-driven customer segmentation, behavior analysis, and risk assessment for better business decisions',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Support',
      description: 'Provide instant customer support with intelligent chatbots',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FileText,
      title: 'Secure Data Management',
      description: 'End-to-end encryption, secure cloud storage, and compliance with international data protection standards',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in 10+ African languages with offline functionality for areas with limited connectivity',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const dailyUseCases = [
    {
      title: 'Customer Onboarding & Verification',
      description: 'Streamline customer verification with AI-powered document processing and risk assessment',
      icon: Shield,
      benefits: [
        '99.5% accuracy in document verification',
        '5-minute verification process (vs 2-3 days manual)',
        'Real-time facial recognition matching',
        'Comprehensive risk assessment scoring'
      ]
    },
    {
      title: 'Fraud Detection & Prevention',
      description: 'Protect your business with real-time fraud monitoring and risk assessment',
      icon: Target,
      benefits: [
        '95% accuracy in fraud detection',
        '80% reduction in financial losses',
        'Real-time transaction monitoring',
        'Automated risk assessment'
      ]
    },
    {
      title: 'Business Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive business intelligence',
      icon: BarChart3,
      benefits: [
        'Real-time performance monitoring',
        'Predictive revenue forecasting',
        'Customer behavior analysis',
        'Market trend identification'
      ]
    },
    {
      title: 'Compliance & Security',
      description: 'Ensure regulatory compliance with secure data management',
      icon: Shield,
      benefits: [
        'End-to-end data encryption',
        'International compliance standards',
        'Audit trails for all activities',
        'Role-based access control'
      ]
    }
  ]

  const businessBenefits = [
    '99.5% accuracy in customer verification (vs manual 2-3 days)',
    '95% fraud detection accuracy reducing losses by 80%',
    '5-minute customer onboarding process',
    'Real-time business analytics and insights',
    'Enterprise-level security and compliance',
    'Multi-language support for African markets',
    'Offline functionality for limited connectivity areas',
    'Cross-platform integration with Annita ecosystem'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg border border-white/30">
                <Brain className="w-5 h-5 mr-2" />
                Annita AI Assistant
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Annita <span className="text-orange-200">AI</span>
              </h1>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
                Transform your daily life with AI-powered personal assistance. From health and fitness to productivity and creativity, Annita's personal AI is here to help you live better.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">99.5%</div>
                  <div className="text-sm text-orange-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-orange-200">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-orange-200">Languages</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/demo'}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Annita AI
                </button>
                <button 
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </button>
              </div>
            </div>

            {/* Visualization Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Assistant</h3>
                  <p className="text-orange-200">Personal AI for daily life</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Personal Assistant</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Health & Wellness</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Learning Companion</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Creative Assistant</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Business AI Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI can transform every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Use Cases Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI can make your business operations smarter and more efficient
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {dailyUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">{useCase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{useCase.description}</p>
                <div className="space-y-2 sm:space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
                Why Choose Business AI?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of having an AI assistant that understands your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
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
  )
}

export default BusinessAIPage
