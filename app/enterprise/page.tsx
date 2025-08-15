import { Metadata } from 'next'
import { 
  Building2, 
  Shield, 
  Users, 
  Globe, 
  Zap,
  Lock,
  BarChart3,
  Headphones,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  MessageSquare,
  Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Annita for Large Organizations',
  description: 'Enterprise-grade solutions for corporations, government agencies, and large organizations. Custom integrations, dedicated support, and compliance.',
}

const EnterprisePage = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified, GDPR compliant, and bank-level encryption',
      features: ['Multi-factor authentication', 'Role-based access control', 'Audit trails', 'Data encryption at rest']
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated account management and technical support',
      features: ['Dedicated success manager', 'Priority support queue', 'Custom training programs', 'On-site implementation']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with 99.99% uptime SLA',
      features: ['Global CDN', 'Auto-scaling', 'Disaster recovery', 'Geographic redundancy']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Custom reporting and business intelligence dashboards',
      features: ['Custom dashboards', 'Real-time reporting', 'Predictive analytics', 'Data export APIs']
    }
  ]

  const useCases = [
    {
      title: 'Government Agencies',
      description: 'Digital transformation for public sector organizations',
      icon: Building2,
      benefits: ['Compliance with government standards', 'Secure data handling', 'Integration with existing systems', 'Cost optimization']
    },
    {
      title: 'Financial Institutions',
      description: 'Banking and fintech integration solutions',
      icon: Shield,
      benefits: ['PCI DSS compliance', 'Real-time transaction processing', 'Fraud detection', 'Regulatory reporting']
    },
    {
      title: 'Retail Chains',
      description: 'Multi-location retail management platform',
      icon: Users,
      benefits: ['Centralized inventory management', 'Unified customer experience', 'Cross-location analytics', 'Supply chain optimization']
    },
    {
      title: 'Manufacturing',
      description: 'Supply chain and logistics optimization',
      icon: Globe,
      benefits: ['End-to-end traceability', 'Supplier management', 'Quality control', 'Cost reduction']
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CTO, African Development Bank',
      company: 'African Development Bank',
      content: 'Annita\'s enterprise solution has transformed our digital infrastructure. The platform\'s scalability and security have exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Head of Digital Innovation',
      company: 'Ecobank Group',
      content: 'The integration capabilities and dedicated support team have made our digital transformation seamless and efficient.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Director of Operations',
      company: 'Liberia Revenue Authority',
      content: 'Annita\'s compliance features and government-grade security have been crucial for our digital modernization efforts.',
      rating: 5
    }
  ]

  const plans = [
    {
      name: 'Enterprise Starter',
      price: '$50,000',
      period: '/year',
      description: 'Perfect for mid-size organizations',
      features: [
        'Up to 10,000 users',
        'Basic custom integrations',
        'Email support',
        'Standard SLA (99.9%)',
        'Basic analytics',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Enterprise Pro',
      price: '$150,000',
      period: '/year',
      description: 'Ideal for large corporations',
      features: [
        'Up to 100,000 users',
        'Advanced custom integrations',
        'Dedicated account manager',
        'Premium SLA (99.99%)',
        'Advanced analytics',
        'Custom reporting',
        'Priority support',
        'On-site training'
      ],
      popular: true
    },
    {
      name: 'Enterprise Ultimate',
      price: 'Custom',
      period: '',
      description: 'For Fortune 500 companies',
      features: [
        'Unlimited users',
        'Full custom development',
        'Dedicated support team',
        'Custom SLA',
        'Predictive analytics',
        'White-label options',
        '24/7 phone support',
        'On-site implementation'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Transform your organization with Annita's enterprise-grade platform. 
              Built for scale, security, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-blue-600 text-white hover:bg-blue-700 group">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-gray-900">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the most demanding organizations with security, scalability, and support at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for specific industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizations are transforming their operations with Annita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-soft relative ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading organizations across Africa who trust Annita for their digital transformation. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <Headphones className="w-5 h-5 mr-2" />
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnterprisePage
