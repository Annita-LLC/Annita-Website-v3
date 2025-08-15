import { Metadata } from 'next'
import { 
  Truck, 
  MapPin, 
  Clock, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Package,
  Users,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annita Logistics - On-Demand Delivery Network',
  description: 'Annita Logistics provides end-to-end delivery solutions for African businesses. Same-day delivery, real-time tracking, and cross-border shipping.',
}

const LogisticsPage = () => {
  const features = [
    {
      icon: Truck,
      title: 'Same-Day Delivery',
      description: 'Express delivery options for urgent shipments across major cities'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your shipments in real-time with GPS-enabled delivery tracking'
    },
    {
      icon: Globe,
      title: 'Cross-Border Shipping',
      description: 'Seamless cross-border delivery across African countries via AfCFTA'
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Insurance coverage and secure handling for all shipments'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock logistics operations and customer support'
    },
    {
      icon: Users,
      title: 'Local Partners',
      description: 'Network of trusted local delivery partners across Africa'
    }
  ]

  const benefits = [
    'Reduce delivery costs by up to 40%',
    'Improve customer satisfaction with fast delivery',
    'Expand your market reach across borders',
    'Real-time shipment tracking and notifications',
    'Flexible delivery options and scheduling',
    'Warehouse and inventory management',
    'Last-mile delivery optimization',
    'Returns and reverse logistics support'
  ]

  const stats = [
    { number: '24h', label: 'Average Delivery Time' },
    { number: '50+', label: 'Countries Covered' },
    { number: '99%', label: 'On-Time Delivery' },
    { number: '$2-5', label: 'Per Delivery Cost' }
  ]

  const services = [
    { name: 'Express Delivery', icon: Zap, color: 'from-orange-500 to-red-500', description: 'Same-day and next-day delivery' },
    { name: 'Standard Delivery', icon: Package, color: 'from-blue-500 to-cyan-500', description: '2-5 business days' },
    { name: 'Cross-Border', icon: Globe, color: 'from-purple-500 to-pink-500', description: 'International shipping' },
    { name: 'Warehousing', icon: Shield, color: 'from-green-500 to-emerald-500', description: 'Storage and fulfillment' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita Logistics
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              End-to-end delivery solutions for African businesses with real-time tracking, 
              same-day delivery, and cross-border shipping capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-orange-600 hover:bg-gray-100 group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-orange-600">
                Track Package
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
              Why Choose Annita Logistics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for Africa's unique logistics challenges, our platform provides 
              reliable, affordable, and efficient delivery solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Delivery Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From same-day delivery to cross-border shipping, we offer a complete 
              range of logistics services to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center group hover:shadow-medium transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
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
                Streamline Your Delivery Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Annita Logistics helps businesses reduce delivery costs, improve customer 
                satisfaction, and expand their market reach across Africa.
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
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Same-day and next-day options</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-Time Tracking</h4>
                    <p className="text-sm text-gray-600">GPS-enabled shipment tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Border</h4>
                    <p className="text-sm text-gray-600">International shipping support</p>
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
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Optimize Your Delivery?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Annita Logistics to streamline 
              their delivery operations and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-orange-600 hover:bg-gray-100 group">
                <Truck className="w-5 h-5 mr-2" />
                Start Shipping
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-orange-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogisticsPage
