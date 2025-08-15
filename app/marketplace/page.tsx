import { Metadata } from 'next'
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  CreditCard,
  Package,
  Tag
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketplace - Annita',
  description: 'Discover Africa\'s largest multivendor marketplace. Buy and sell with confidence using our secure escrow system and integrated logistics.',
}

const MarketplacePage = () => {
  const stats = [
    { number: '3,000+', label: 'Active Vendors', icon: Users },
    { number: '50,000+', label: 'Products Listed', icon: Package },
    { number: '99.9%', label: 'Secure Transactions', icon: Shield },
    { number: '24/7', label: 'Customer Support', icon: Zap }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Secure Escrow Payments',
      description: 'Your money is protected until you receive your order. No more payment scams.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Integrated Logistics',
      description: 'Same-day and next-day delivery across Africa with real-time tracking.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Smart Search & Filters',
      description: 'Find exactly what you need with AI-powered search and advanced filters.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Pan-African Reach',
      description: 'Buy from vendors across Africa. Cross-border trade made simple.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Pay with mobile money, cards, or bank transfers. All secure and instant.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All products are verified and quality-checked before listing.'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Compare prices across vendors and get the best deals.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Returns',
      description: '30-day return policy with hassle-free refunds.'
    }
  ]

  const categories = [
    { name: 'Electronics', icon: Zap, count: '5,234', color: 'from-blue-500 to-cyan-500' },
    { name: 'Fashion', icon: Tag, count: '12,456', color: 'from-pink-500 to-rose-500' },
    { name: 'Home & Garden', icon: Package, count: '8,901', color: 'from-green-500 to-emerald-500' },
    { name: 'Sports', icon: TrendingUp, count: '3,567', color: 'from-orange-500 to-red-500' },
    { name: 'Books', icon: Award, count: '2,345', color: 'from-purple-500 to-indigo-500' },
    { name: 'Beauty', icon: Star, count: '6,789', color: 'from-yellow-500 to-amber-500' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Africa's Largest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Multivendor Marketplace
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Buy and sell with confidence. Secure payments, integrated logistics, and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700 text-white px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Start Selling
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Annita Marketplace?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the most comprehensive marketplace platform specifically for African businesses and consumers.
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

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover millions of products across all categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={category.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Shop with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every purchase is protected by our comprehensive buyer protection program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of successful vendors and start selling today. 
              No setup fees, no monthly charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700 text-white px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                Start Selling Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketplacePage
