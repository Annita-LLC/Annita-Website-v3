'use client'

import { motion } from 'framer-motion'
import {
  DollarSign,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import Button from '@/components/ui/Button'

const V3AnnouncementSection = () => {


  const currentFeatures = [
    {
      id: 'live-marketplace',
      icon: Globe,
      title: "Live Marketplace",
      description: "Real vendors selling, real customers buying - right now.",
      status: "Live",
      link: "/maintenance",
      details: [
        "Active marketplace with real transactions",
        "Verified vendors and customers",
        "Secure payment processing",
        "Live support and assistance"
      ]
    },
    {
      id: 'active-community',
      icon: Users,
      title: "Active Community",
      description: "3,000+ vendors already using our platform.",
      status: "Active",
      link: "/maintenance",
      details: [
        "Growing vendor community",
        "Active user engagement",
        "Community-driven features",
        "Regular platform updates"
      ]
    },
    {
      id: 'revenue-generation',
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Proven business model with real transactions.",
      status: "Proven",
      link: "/maintenance",
      details: [
        "Successful revenue model",
        "Real transaction processing",
        "Sustainable business growth",
        "Measurable financial results"
      ]
    },
    {
      id: 'market-validation',
      icon: CheckCircle,
      title: "Market Validation",
      description: "Real users, real feedback, real growth.",
      status: "Validated",
      link: "/maintenance",
      details: [
        "User feedback integration",
        "Market demand validation",
        "Continuous improvement",
        "Data-driven development"
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Live & Active
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Annita <span className="text-green-200">V1.0</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-green-100 mb-6">
                Live Marketplace Powering African Business
              </h2>

              <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Real vendors selling, real customers buying.
                <br />
                <span className="font-semibold">Join the active community today.</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold">3,000+</div>
                  <div className="text-xs sm:text-sm text-green-200">Active Vendors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold">Live</div>
                  <div className="text-xs sm:text-sm text-green-200">Marketplace</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold">Proven</div>
                  <div className="text-xs sm:text-sm text-green-200">Business Model</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl sm:text-3xl font-bold">54</div>
                  <div className="text-xs sm:text-sm text-green-200">Countries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/maintenance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white text-green-600 shadow-lg"
                >
                  Try V1.0 Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current live features that are already empowering thousands of businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {currentFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(feature.link, '_blank')}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.status === 'Live' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'Live'
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {feature.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                    <span>Try it now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                🚀 Join the Live Marketplace
              </h3>
              <p className="text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Start your business journey with our proven V1.0 platform that's already empowering thousands of African entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/maintenance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Try V1.0 Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default V3AnnouncementSection
