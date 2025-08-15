import { Metadata } from 'next'
import { 
  MessageSquare, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Megaphone,
  TrendingUp,
  Smartphone,
  Play,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Annita Connect - Communication & Marketing Suite',
  description: 'Annita Connect provides AI-driven marketing tools, customer engagement, and analytics for African businesses. Targeted ads and communication solutions.',
}

const ConnectPage = () => {
  const features = [
    {
      icon: Target,
      title: 'Targeted Advertising',
      description: 'AI-powered ad targeting to reach your ideal customers with precision'
    },
    {
      icon: MessageSquare,
      title: 'Customer Engagement',
      description: 'Multi-channel communication tools for better customer relationships'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Intelligent insights to optimize your marketing campaigns and ROI'
    },
    {
      icon: Users,
      title: 'Audience Building',
      description: 'Grow your customer base with smart audience segmentation'
    },
    {
      icon: Zap,
      title: 'Automated Campaigns',
      description: 'Set up automated marketing campaigns that work 24/7'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Optimized for mobile engagement across all devices'
    }
  ]

  const benefits = [
    'Reduce customer acquisition costs by up to 60%',
    'Increase customer retention with personalized campaigns',
    'Real-time analytics and performance tracking',
    'Multi-channel marketing automation',
    'AI-powered content optimization',
    'Advanced audience segmentation',
    'A/B testing and optimization tools',
    'Integration with Annita Marketplace'
  ]

  const stats = [
    { number: '60%', label: 'Lower CAC' },
    { number: '3x', label: 'Higher Engagement' },
    { number: '24/7', label: 'Automation' },
    { number: 'AI-Powered', label: 'Optimization' }
  ]

  const tools = [
    { name: 'Smart Ads', icon: Target, color: 'from-purple-500 to-pink-500', description: 'AI-targeted advertising campaigns' },
    { name: 'Customer Chat', icon: MessageSquare, color: 'from-blue-500 to-cyan-500', description: 'Real-time customer support' },
    { name: 'Analytics', icon: BarChart3, color: 'from-green-500 to-emerald-500', description: 'Advanced performance insights' },
    { name: 'Automation', icon: Zap, color: 'from-orange-500 to-red-500', description: 'Marketing workflow automation' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita Connect
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              AI-driven marketing and communication suite designed to help African businesses 
              connect with customers and grow their market presence
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

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Annita Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for Africa's unique marketing challenges, our platform provides 
              affordable, effective, and AI-powered marketing solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Powerful Marketing Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns 
              in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center group hover:shadow-medium transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Grow Your Business with Smart Marketing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Annita Connect helps businesses reduce marketing costs, improve customer 
                engagement, and drive sustainable growth through AI-powered insights.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Targeting</h4>
                    <p className="text-sm text-gray-600">AI-powered audience targeting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics</h4>
                    <p className="text-sm text-gray-600">Real-time performance insights</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automation</h4>
                    <p className="text-sm text-gray-600">24/7 marketing automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Annita Connect to reduce costs, 
              improve engagement, and drive sustainable growth.
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

export default ConnectPage
