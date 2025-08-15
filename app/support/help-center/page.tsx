import { Metadata } from 'next'
import { 
  Search, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail, 
  Video,
  FileText,
  Users,
  Settings,
  CreditCard,
  Truck,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Help Center - Annita Support',
  description: 'Get help and support for all Annita services. Find answers to common questions, tutorials, and contact our support team.',
}

const HelpCenterPage = () => {
  const helpCategories = [
    {
      icon: CreditCard,
      title: 'Payments & Billing',
      description: 'Help with AnnitaPay, transactions, and billing issues',
      articles: 15,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Shipping, tracking, and delivery support',
      articles: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Marketplace',
      description: 'Buying, selling, and marketplace features',
      articles: 20,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'App issues, bugs, and technical problems',
      articles: 18,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Account setup, security, and profile management',
      articles: 10,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Business Services',
      description: 'ERP, AI tools, and business features',
      articles: 14,
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const popularArticles = [
    {
      title: 'How to set up your first store',
      category: 'Marketplace',
      views: '2.5k',
      readTime: '3 min'
    },
    {
      title: 'Understanding AnnitaPay fees',
      category: 'Payments',
      views: '1.8k',
      readTime: '5 min'
    },
    {
      title: 'Track your delivery in real-time',
      category: 'Logistics',
      views: '1.2k',
      readTime: '2 min'
    },
    {
      title: 'Secure your account with 2FA',
      category: 'Security',
      views: '980',
      readTime: '4 min'
    }
  ]

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      response: 'Usually responds in 2 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      response: 'Response within 24 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      response: 'Available 8AM-6PM GMT',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing for complex issues',
      response: 'By appointment only',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Find answers to your questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find help articles organized by topic. Click on any category to explore related guides and tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most viewed help articles and tutorials from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                    {article.category}
                  </span>
                  <span>{article.views} views</span>
                  <span>{article.readTime} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="text-sm text-gray-500 mb-6">{channel.response}</div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Get Help
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Quick Actions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Download User Guide</h4>
                      <p className="text-sm text-gray-600">Complete platform documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">System Status</h4>
                      <p className="text-sm text-gray-600">Check if services are running</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                    <Users className="w-6 h-6 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Forum</h4>
                      <p className="text-sm text-gray-600">Connect with other users</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer">
                    <Zap className="w-6 h-6 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Report Bug</h4>
                      <p className="text-sm text-gray-600">Help us improve the platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenterPage
