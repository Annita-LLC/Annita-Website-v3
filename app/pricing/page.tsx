import { Metadata } from 'next'
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Users,
  CreditCard,
  Truck,
  MessageSquare,
  Play,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Annita Pricing - Affordable Plans for African Businesses',
  description: 'Choose the perfect Annita plan for your business. From Growth to Premium, we offer affordable pricing with powerful features for African MSMEs.',
}

const PricingPage = () => {
  const plans = [
    {
      name: 'Growth',
      price: '$5',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic marketplace access',
        'Up to 100 products',
        'Standard payment processing',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Pro',
      price: '$15',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Everything in Growth',
        'Unlimited products',
        'Advanced payment features',
        'Priority support',
        'Advanced analytics',
        'Marketing tools',
        'Logistics integration',
        'API access'
      ],
      popular: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Premium',
      price: '$30',
      period: '/month',
      description: 'For established businesses with advanced needs',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options',
        'Advanced AI features',
        'Cross-border capabilities',
        'Custom reporting',
        '24/7 phone support'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Scalable Plans',
      description: 'Start small and grow with your business needs'
    },
    {
      icon: Shield,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges'
    },
    {
      icon: Zap,
      title: 'Easy Upgrades',
      description: 'Upgrade or downgrade your plan anytime'
    },
    {
      icon: Globe,
      title: 'Local Pricing',
      description: 'Pricing optimized for African markets'
    }
  ]

  const addOns = [
    {
      name: 'Additional Users',
      price: '$2',
      period: '/user/month',
      description: 'Add team members to your account'
    },
    {
      name: 'Advanced Analytics',
      price: '$10',
      period: '/month',
      description: 'Enhanced reporting and insights'
    },
    {
      name: 'Custom Integrations',
      price: '$50',
      period: '/month',
      description: 'Connect with your existing systems'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Choose the perfect plan for your business. Start free and scale as you grow. 
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include our core features. Upgrade anytime as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-soft ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="gradient"
                  size="xl"
                  icon={Play}
                  className="w-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started Free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Annita?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is designed to be accessible to businesses of all sizes, 
              with powerful features that help you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your experience with these optional add-ons designed for specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <div className="flex items-baseline justify-center mb-3">
                  <span className="text-2xl font-bold text-gray-900">{addon.price}</span>
                  <span className="text-gray-600 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day free trial on all plans. No credit card required to start.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, mobile money, and bank transfers across Africa.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer discounts for nonprofits?</h3>
              <p className="text-gray-600">Yes, we offer special pricing for registered nonprofits and educational institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Annita to grow and succeed. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
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

export default PricingPage
