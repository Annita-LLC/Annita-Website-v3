import { Metadata } from 'next'
import { motion } from 'framer-motion'
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
import Button from '@/components/ui/Button'

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
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: -1,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: -1,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Africa's Largest Marketplace
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Buy & Sell with{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Confidence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              Join 3,000+ vendors and millions of buyers in Africa's most trusted marketplace. 
              Secure payments, integrated logistics, and 24/7 support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="gradient"
                size="lg"
                icon={ShoppingCart}
                className="text-lg font-bold"
              >
                Start Selling
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Search}
                className="text-lg font-bold"
              >
                Browse Products
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Annita Marketplace?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the most comprehensive marketplace platform specifically for African businesses and consumers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover millions of products across all categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} products</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Shop with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every purchase is protected by our comprehensive buyer protection program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Ready to Start Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Join thousands of successful vendors and start selling today. 
              No setup fees, no monthly charges.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="gradient"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="text-lg font-bold"
              >
                Start Selling Now
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Users}
                className="text-lg font-bold"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketplacePage
