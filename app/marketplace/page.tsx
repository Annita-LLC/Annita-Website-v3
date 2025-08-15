import { Metadata } from 'next'
import { 
  ShoppingCart, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annita Marketplace - Africa\'s Premier E-commerce Platform',
  description: 'Discover Annita Marketplace, Africa\'s simplest multivendor e-commerce platform for MSMEs. Easy onboarding, secure payments, and cross-border trade.',
}

const MarketplacePage = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Easy Onboarding',
      description: 'Get your store online in minutes with our simplified vendor registration process'
    },
    {
      icon: Users,
      title: 'Multivendor Support',
      description: 'Host thousands of vendors on a single platform with individual storefronts'
    },
    {
      icon: Globe,
      title: 'Pan-African Reach',
      description: 'Access customers across 54 African countries through AfCFTA integration'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security with escrow protection for all transactions'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights to optimize your product listings and sales'
    },
    {
      icon: Zap,
      title: 'Mobile-First Design',
      description: 'Optimized for basic smartphones with low-data mode for rural users'
    }
  ]

  const benefits = [
    'Instant digital presence for offline businesses',
    'Product catalog management with bulk upload',
    'Advanced search and filtering capabilities',
    'Customer reviews and ratings system',
    'Inventory tracking and management',
    'Order fulfillment and tracking',
    'Multi-language support',
    'Cross-border payment processing'
  ]

  const stats = [
    { number: '3,000+', label: 'Active Vendors' },
    { number: '50,000+', label: 'Products Listed' },
    { number: '54', label: 'African Countries' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita Marketplace
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Africa's simplest multivendor e-commerce platform, empowering MSMEs to reach customers across the continent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                Start Selling
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Watch Demo
              </button>
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
              Why Choose Annita Marketplace?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Africa's unique challenges and opportunities, 
              our platform makes e-commerce accessible to businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed Online
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From product listing to order fulfillment, Annita Marketplace provides 
                all the tools you need to build a successful online business.
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
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Setup</h4>
                    <p className="text-sm text-gray-600">Get started in under 10 minutes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Payments</h4>
                    <p className="text-sm text-gray-600">Escrow protection for all transactions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-600">Access customers across Africa</p>
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Selling Online?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful vendors who have transformed their businesses 
              with Annita Marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Your Store
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketplacePage
