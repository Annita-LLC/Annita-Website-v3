import { Metadata } from 'next'
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Zap, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  DollarSign,
  Smartphone,
  Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AnnitaPay - Secure Payment Gateway & Digital Wallet',
  description: 'AnnitaPay offers secure payment processing, escrow services, and digital wallet solutions for African businesses. Multi-currency support and fraud protection.',
}

const PaymentsPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'Secure transactions with funds held until delivery confirmation'
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Support for all major African currencies and international payments'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money Integration',
      description: 'Seamless integration with local mobile money services'
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: '256-bit encryption and fraud detection systems'
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Real-time payment processing and instant settlements'
    },
    {
      icon: Users,
      title: 'Business Accounts',
      description: 'Dedicated business accounts with advanced features'
    }
  ]

  const benefits = [
    'Reduce fraud risk with escrow protection',
    'Accept payments from anywhere in Africa',
    'Lower transaction fees than traditional banks',
    'Real-time transaction tracking',
    'Automated reconciliation and reporting',
    'API integration for custom solutions',
    '24/7 customer support',
    'Compliance with local regulations'
  ]

  const stats = [
    { number: '99.9%', label: 'Security Rate' },
    { number: '50+', label: 'Currencies Supported' },
    { number: '24/7', label: 'Transaction Processing' },
    { number: '1-3%', label: 'Transaction Fees' }
  ]

  const paymentMethods = [
    { name: 'Credit/Debit Cards', icon: CreditCard, color: 'from-blue-500 to-cyan-500' },
    { name: 'Mobile Money', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { name: 'Bank Transfers', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
    { name: 'Digital Wallet', icon: Shield, color: 'from-orange-500 to-red-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AnnitaPay
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Secure payment gateway with escrow services and digital wallet solutions 
              designed for Africa's unique financial landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-green-600 hover:bg-gray-100 group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-green-600">
                View Pricing
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
              Why Choose AnnitaPay?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for Africa's unique financial challenges, AnnitaPay provides 
              secure, affordable, and accessible payment solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Multiple Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accept payments from customers using their preferred payment method, 
              whether it's mobile money, cards, or bank transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center group hover:shadow-medium transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-sm text-gray-600">Secure and instant processing</p>
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
                Secure, Fast, and Affordable
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AnnitaPay combines the security of traditional banking with the 
                convenience of modern digital payments, making it perfect for African businesses.
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
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escrow Protection</h4>
                    <p className="text-sm text-gray-600">Funds held until delivery confirmation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Currency</h4>
                    <p className="text-sm text-gray-600">Support for 50+ currencies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Processing</h4>
                    <p className="text-sm text-gray-600">Real-time transaction processing</p>
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Accept Secure Payments?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AnnitaPay to process 
              payments securely and efficiently across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-green-600 hover:bg-gray-100 group">
                <CreditCard className="w-5 h-5 mr-2" />
                Start Accepting Payments
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-green-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentsPage
