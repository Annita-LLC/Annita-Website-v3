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
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Business AI - Annita',
  description: 'AI-powered business intelligence and automation tools to help your business grow, optimize operations, and make data-driven decisions.',
}

const BusinessAIPage = () => {
  const features = [
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

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML models that learn from your data and improve over time',
      benefits: [
        'Pattern recognition in customer behavior',
        'Predictive modeling for sales forecasting',
        'Anomaly detection for fraud prevention',
        'Recommendation engines for products'
      ]
    },
    {
      icon: Globe,
      title: 'Natural Language Processing',
      description: 'Understand and process customer communications automatically',
      benefits: [
        'Sentiment analysis of customer feedback',
        'Automated email categorization',
        'Voice-to-text transcription',
        'Multi-language support'
      ]
    },
    {
      icon: PieChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      benefits: [
        'Real-time performance monitoring',
        'Custom report generation',
        'Data visualization and dashboards',
        'Trend analysis and forecasting'
      ]
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation',
      benefits: [
        'Workflow automation',
        'Document processing',
        'Inventory management',
        'Order processing optimization'
      ]
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase sales with AI-powered product recommendations and pricing optimization',
      icon: ShoppingBag,
      metrics: [
        '30% increase in conversion rates',
        '25% reduction in cart abandonment',
        '40% improvement in customer lifetime value'
      ]
    },
    {
      title: 'Customer Service Enhancement',
      description: 'Provide 24/7 support with intelligent chatbots and automated responses',
      icon: MessageSquare,
      metrics: [
        '80% faster response times',
        '60% reduction in support costs',
        '95% customer satisfaction rate'
      ]
    },
    {
      title: 'Financial Management',
      description: 'Optimize cash flow and reduce financial risks with AI insights',
      icon: TrendingUp,
      metrics: [
        '50% faster financial reporting',
        '35% reduction in late payments',
        '90% accuracy in cash flow predictions'
      ]
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Streamline logistics and inventory management with predictive analytics',
      icon: Package,
      metrics: [
        '40% reduction in inventory costs',
        '60% faster delivery times',
        '85% improvement in demand forecasting'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      role: 'CEO, TechStart Africa',
      content: 'Annita\'s AI has transformed our business operations. We\'ve seen a 40% increase in efficiency and our customers love the personalized experience.',
      avatar: 'DC'
    },
    {
      name: 'Maria Santos',
      role: 'Operations Manager, RetailPlus',
      content: 'The predictive analytics have helped us optimize our inventory and reduce costs significantly. It\'s like having a crystal ball for our business.',
      avatar: 'MS'
    },
    {
      name: 'James Okafor',
      role: 'Founder, DigitalCommerce',
      content: 'Our customer service has improved dramatically with the AI chatbot. We can now handle 10x more inquiries without increasing our team size.',
      avatar: 'JO'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Business AI Intelligence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI That <span className="text-orange-500">Understands</span> Your Business
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to make data-driven decisions, 
              optimize operations, and grow your business with unprecedented precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              AI-Powered Business Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI can transform every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge artificial intelligence technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={capability.title} className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              Real-World Business Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are using AI to achieve remarkable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              What Our Business Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses using our AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of businesses already using AI to transform their operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
              For More AI Features, Download the App
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get access to advanced AI tools, real-time insights, and mobile-optimized features that will take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="xl"
                icon={Download}
                className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App Now
              </Button>
              <Button
                variant="outline"
                size="xl"
                icon={Play}
                className="text-lg font-bold border-white text-white hover:bg-white hover:text-orange-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessAIPage
