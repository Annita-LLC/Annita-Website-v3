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
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Intelligent Business Analytics & Fraud Detection
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Annita AI for <span className="text-orange-500">MSMEs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Africa's first comprehensive AI platform for Micro, Small, and Medium Enterprises. 
              Experience AI-powered customer verification (99.5% accuracy), intelligent fraud detection (95% accuracy), 
              and advanced business analytics designed specifically for African markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                icon={Play}
                className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = '/demo'}
              >
                Try Business AI
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Download}
                className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Download App
              </Button>
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
