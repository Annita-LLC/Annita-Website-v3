import { Metadata } from 'next'
import { 
  Brain,
  Zap,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Shield,
  Globe,
  Lightbulb,
  Cpu,
  Database,
  Eye,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'AI & Analytics - Annita',
  description: 'Discover how Annita\'s AI-powered analytics and insights help businesses make data-driven decisions and optimize their operations.',
}

const AIPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast sales, inventory needs, and customer behavior with AI-powered predictions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Reach the right customers at the right time with AI-driven marketing campaigns',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Automatically optimize pricing, inventory, and marketing strategies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep understanding of customer preferences and behavior patterns',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const aiCapabilities = [
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms that learn from your business data',
      benefits: ['Predictive modeling', 'Pattern recognition', 'Automated decision making']
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Process and analyze massive amounts of business data in real-time',
      benefits: ['Real-time insights', 'Data visualization', 'Trend analysis']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'AI-powered image recognition for product cataloging and quality control',
      benefits: ['Product recognition', 'Quality assurance', 'Automated tagging']
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Understand and respond to customer queries in multiple languages',
      benefits: ['Multi-language support', 'Sentiment analysis', 'Automated responses']
    }
  ]

  const useCases = [
    {
      title: 'Inventory Management',
      description: 'Predict demand and optimize stock levels automatically',
      icon: TrendingUp,
      metrics: ['30% reduction in stockouts', '25% decrease in excess inventory', '40% faster restocking']
    },
    {
      title: 'Customer Segmentation',
      description: 'Identify and target high-value customer segments',
      icon: Users,
      metrics: ['50% increase in conversion rates', '35% higher customer lifetime value', '60% better targeting accuracy']
    },
    {
      title: 'Price Optimization',
      description: 'Dynamic pricing based on demand, competition, and market conditions',
      icon: Target,
      metrics: ['20% increase in profit margins', '15% higher sales volume', 'Real-time price adjustments']
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection and prevention systems',
      icon: Shield,
      metrics: ['99.9% fraud detection rate', '90% reduction in false positives', 'Real-time transaction monitoring']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Fashion Forward',
      content: 'Annita\'s AI insights helped us increase our sales by 40% in just 3 months. The predictive analytics are game-changing.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, TechMart',
      content: 'The inventory optimization AI saved us thousands in storage costs and eliminated stockouts completely.',
      avatar: 'MC'
    },
    {
      name: 'Aisha Bello',
      role: 'Marketing Director, BeautyHub',
      content: 'AI-powered customer segmentation helped us target our campaigns perfectly, resulting in 3x higher ROI.',
      avatar: 'AB'
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
              AI-Powered Intelligence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Understands</span> Your Business
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI technology transforms every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Real-World AI Applications
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
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
    </div>
  )
}

export default AIPage
