import { Metadata } from 'next'
import { 
  UserPlus, 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  ArrowRight,
  Download,
  MessageSquare,
  Building2,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partners - Join Annita\'s Ecosystem',
  description: 'Partner with Annita to grow your business. Become a technology partner, reseller, or integration partner in Africa\'s fastest-growing digital ecosystem.',
}

const PartnersPage = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your technology with Annita\'s platform',
      icon: Zap,
      benefits: [
        'API access and documentation',
        'Joint go-to-market opportunities',
        'Technical support and training',
        'Revenue sharing model'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Reseller Partners',
      description: 'Sell Annita solutions to your customers',
      icon: Users,
      benefits: [
        'Competitive commission rates',
        'Marketing materials and support',
        'Dedicated partner manager',
        'Training and certification'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'System Integrators',
      description: 'Build custom solutions for enterprise clients',
      icon: Building2,
      benefits: [
        'Custom development support',
        'Enterprise sales opportunities',
        'Technical consulting services',
        'White-label options'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategic Partners',
      description: 'Joint ventures and strategic collaborations',
      icon: UserPlus,
      benefits: [
        'Exclusive market access',
        'Joint product development',
        'Shared resources and expertise',
        'Long-term partnership benefits'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const currentPartners = [
    {
      name: 'Afreximbank',
      logo: '🏦',
      category: 'Financial Institution',
      description: 'Strategic partnership for cross-border trade facilitation',
      achievements: ['MANSA platform integration', 'Trade finance solutions', 'Regional expansion support']
    },
    {
      name: 'Orange Telecom',
      logo: '📱',
      category: 'Telecommunications',
      description: 'Mobile money integration and rural connectivity',
      achievements: ['Mobile money integration', 'Rural agent network', 'Digital inclusion programs']
    },
    {
      name: 'African Union',
      logo: '🌍',
      category: 'Government',
      description: 'Digital transformation for African MSMEs',
      achievements: ['Policy advocacy', 'Capacity building', 'Regional coordination']
    },
    {
      name: 'Ecobank Group',
      logo: '🏛️',
      category: 'Banking',
      description: 'Financial services integration and expansion',
      achievements: ['Payment processing', 'Banking integration', 'Financial inclusion']
    }
  ]

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through our platform'
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Expand your reach across Africa with our established network'
    },
    {
      icon: Star,
      title: 'Brand Recognition',
      description: 'Associate with Africa\'s leading digital platform'
    },
    {
      icon: Users,
      title: 'Customer Access',
      description: 'Connect with millions of MSMEs across the continent'
    }
  ]

  const successStories = [
    {
      partner: 'TechCorp Africa',
      story: 'Increased revenue by 300% through Annita integration',
      metrics: ['300% revenue growth', '50,000+ new users', '15 new markets']
    },
    {
      partner: 'Digital Solutions Ltd',
      story: 'Successfully launched in 5 new African countries',
      metrics: ['5 new countries', '200% user growth', '25% cost reduction']
    },
    {
      partner: 'Innovation Hub',
      story: 'Developed custom solutions for enterprise clients',
      metrics: ['10 enterprise clients', '$2M+ in contracts', '95% client satisfaction']
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
                              <UserPlus className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Partner with Annita
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Join Africa's fastest-growing digital ecosystem. Together, we can 
              transform how businesses operate across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-blue-600 text-white hover:bg-blue-700 group">
                <MessageSquare className="w-5 h-5 mr-2" />
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-gray-900">
                <Download className="w-5 h-5 mr-2" />
                Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 btn-sm bg-blue-600 text-white hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across Africa and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{partner.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{partner.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  {partner.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with Annita?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of joining Africa's most innovative digital ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our partners are achieving remarkable results with Annita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.partner}</h3>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <div className="space-y-2">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Become a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our partner ecosystem and start growing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply</h3>
              <p className="text-gray-600">Submit your partnership application online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Review</h3>
              <p className="text-gray-600">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Onboard</h3>
              <p className="text-gray-600">Complete training and setup process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600">Start growing with Annita</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Partner with Annita?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful partners who are already growing their business 
              with Africa's leading digital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <MessageSquare className="w-5 h-5 mr-2" />
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <Download className="w-5 h-5 mr-2" />
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
