"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Users, Target, Award, Globe, DollarSign, BookOpen, Heart } from 'lucide-react'

const PartnerCollaboration = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const partnershipTypes = [
    {
      icon: Building,
      title: "Internship Provider",
      description: "Offer internship opportunities to program participants",
      benefits: [
        "Access to talented young professionals",
        "Fresh perspectives and innovative ideas",
        "Potential future employees",
        "Corporate social responsibility fulfillment"
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: "Mentorship Support",
      description: "Provide mentors to guide participants",
      benefits: [
        "Develop leadership skills in your team",
        "Give back to the community",
        "Network with future entrepreneurs",
        "Enhance company reputation"
      ],
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Funding Partner",
      description: "Support mini-grants and program funding",
      benefits: [
        "Direct impact on youth development",
        "Tax benefits and recognition",
        "Partnership with Annita LLC",
        "Brand visibility and goodwill"
      ],
      color: "orange"
    },
    {
      icon: BookOpen,
      title: "Resource Provider",
      description: "Share expertise, tools, or facilities",
      benefits: [
        "Utilize underused resources",
        "Build relationships with participants",
        "Showcase your capabilities",
        "Contribute to community growth"
      ],
      color: "purple"
    }
  ]

  const currentPartners = [
    {
      name: "Liberia Bank for Development and Investment",
      logo: "🏦",
      type: "Financial Partner",
      contribution: "Mini-grant funding and financial literacy training"
    },
    {
      name: "Liberia Chamber of Commerce",
      logo: "🏢",
      type: "Network Partner",
      contribution: "Business networking and mentorship opportunities"
    },
    {
      name: "Liberia Business Association",
      logo: "📈",
      type: "Industry Partner",
      contribution: "Industry insights and internship placements"
    },
    {
      name: "Liberia Youth Network",
      logo: "🌍",
      type: "Community Partner",
      contribution: "Community outreach and participant recruitment"
    }
  ]

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partner <span className="text-orange-600">Collaboration</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us in empowering Liberia's next generation of business leaders. 
              Partner with The 100 initiative and make a lasting impact on youth development 
              and economic growth.
            </p>
          </motion.div>

          {/* Why Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Why Partner With The 100?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Direct Impact",
                  description: "See immediate results in youth development and community growth"
                },
                {
                  icon: Heart,
                  title: "Strategic Partnership",
                  description: "Build long-term relationships with Annita LLC and future leaders"
                },
                {
                  icon: Award,
                  title: "Recognition",
                  description: "Gain positive brand exposure and corporate social responsibility recognition"
                },
                {
                  icon: Globe,
                  title: "Network Access",
                  description: "Connect with other partners and expand your business network"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Partnership Opportunities
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className={`p-8 ${
                    type.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                    type.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                    type.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100' :
                    'bg-gradient-to-br from-purple-50 to-purple-100'
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      type.color === 'blue' ? 'bg-blue-600' :
                      type.color === 'green' ? 'bg-green-600' :
                      type.color === 'orange' ? 'bg-orange-600' :
                      'bg-purple-600'
                    }`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>
                  </div>
                  <div className="p-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Benefits for Your Organization:</h5>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            type.color === 'blue' ? 'bg-blue-600' :
                            type.color === 'green' ? 'bg-green-600' :
                            type.color === 'orange' ? 'bg-orange-600' :
                            'bg-purple-600'
                          }`}></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Current Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{partner.name}</h4>
                      <p className="text-orange-600 font-medium text-sm">{partner.type}</p>
                      <p className="text-gray-600 text-sm mt-1">{partner.contribution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Partnership Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Contact",
                  description: "Reach out to discuss partnership opportunities"
                },
                {
                  step: "2",
                  title: "Discussion",
                  description: "Meet to explore collaboration possibilities"
                },
                {
                  step: "3",
                  title: "Agreement",
                  description: "Finalize partnership terms and commitments"
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Begin collaboration and support The 100"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join our network of partners and help us empower 100 Liberian youths 
              to become successful entrepreneurs and business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PartnerCollaboration
