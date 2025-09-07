import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Business AI - Annita',
  description: 'AI-powered business intelligence and automation tools to help your business grow, optimize operations, and make data-driven decisions.',
}

const BusinessAIPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const businessFeatures = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and customer behavior with AI-powered insights',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'Understand your customers better with AI-driven segmentation and analysis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live dashboards and insights',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Support',
      description: 'Provide instant customer support with intelligent chatbots',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Protect your business with AI-powered security and fraud prevention',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const dailyUseCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase sales with AI-powered product recommendations and pricing optimization',
      icon: ShoppingBag,
      benefits: [
        '30% increase in conversion rates',
        '25% reduction in cart abandonment',
        '40% improvement in customer lifetime value',
        'Smart inventory management'
      ]
    },
    {
      title: 'Customer Service Enhancement',
      description: 'Provide 24/7 support with intelligent chatbots and automated responses',
      icon: MessageSquare,
      benefits: [
        '80% faster response times',
        '60% reduction in support costs',
        '95% customer satisfaction rate',
        'Multi-language support'
      ]
    },
    {
      title: 'Financial Management',
      description: 'Optimize cash flow and reduce financial risks with AI insights',
      icon: TrendingUp,
      benefits: [
        '50% faster financial reporting',
        '35% reduction in late payments',
        '90% accuracy in cash flow predictions',
        'Automated expense tracking'
      ]
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Streamline logistics and inventory management with predictive analytics',
      icon: Package,
      benefits: [
        '40% reduction in inventory costs',
        '60% faster delivery times',
        '85% improvement in demand forecasting',
        'Real-time tracking and alerts'
      ]
    }
  ]

  const businessBenefits = [
    'Increase revenue by up to 300% with AI insights',
    'Reduce operational costs by 40% through automation',
    'Improve customer satisfaction by 95%',
    'Make data-driven decisions with real-time analytics',
    'Scale operations efficiently with smart automation',
    'Protect your business with AI-powered security',
    'Optimize marketing campaigns for better ROI',
    'Streamline supply chain and logistics operations'
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
              Business AI Intelligence
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              AI That <span className="text-orange-500">Understands</span> Your Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to make data-driven decisions, 
              optimize operations, and grow your business with unprecedented precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                icon={Play}
                className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
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
