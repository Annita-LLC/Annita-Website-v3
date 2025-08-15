import { Metadata } from 'next'
import { 
  ShoppingBag, 
  Search, 
  Truck, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Shopping - Annita E-commerce Platform',
  description: 'Discover millions of products from African vendors. Shop securely with Annita\'s comprehensive e-commerce platform.',
}

const ShoppingPage = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find exactly what you need with AI-powered search',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Shop with confidence using AnnitaPay',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly and reliably',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Verified Vendors',
      description: 'Shop from trusted and verified sellers',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Beauty & Health',
    'Sports & Outdoors',
    'Books & Media',
    'Automotive',
    'Food & Beverages'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Shop with Annita
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Discover millions of products from African vendors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Shop with Annita?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of African e-commerce with our comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of product categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category}</h3>
                <div className="flex items-center justify-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Browse</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join millions of customers who trust Annita for their shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShoppingPage
