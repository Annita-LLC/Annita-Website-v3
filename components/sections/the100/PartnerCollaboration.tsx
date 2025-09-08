"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Users, Target, Award, Globe, DollarSign, BookOpen, Heart, GraduationCap, Briefcase, Lightbulb, Handshake, Star, Zap, Shield, Camera, Mic, Laptop, Phone } from 'lucide-react'

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
    },
    {
      icon: GraduationCap,
      title: "Educational Partner",
      description: "Provide training, courses, or educational resources",
      benefits: [
        "Expand your educational reach",
        "Build relationships with future professionals",
        "Showcase your expertise",
        "Contribute to skill development"
      ],
      color: "indigo"
    },
    {
      icon: Briefcase,
      title: "Employment Partner",
      description: "Offer job opportunities and career guidance",
      benefits: [
        "Access to pre-trained talent",
        "Reduced recruitment costs",
        "Direct pipeline to skilled workers",
        "Community impact recognition"
      ],
      color: "teal"
    },
    {
      icon: Lightbulb,
      title: "Innovation Partner",
      description: "Support innovative projects and startup incubation",
      benefits: [
        "Access to innovative ideas",
        "Early-stage investment opportunities",
        "Technology transfer possibilities",
        "Innovation ecosystem building"
      ],
      color: "yellow"
    },
    {
      icon: Handshake,
      title: "Strategic Alliance",
      description: "Form long-term strategic partnerships",
      benefits: [
        "Mutual business growth",
        "Shared resources and expertise",
        "Market expansion opportunities",
        "Long-term relationship building"
      ],
      color: "pink"
    },
    {
      icon: Star,
      title: "Recognition Partner",
      description: "Provide awards, recognition, and certification",
      benefits: [
        "Brand association with excellence",
        "Recognition program expansion",
        "Community goodwill building",
        "Award program credibility"
      ],
      color: "red"
    },
    {
      icon: Zap,
      title: "Technology Partner",
      description: "Provide technology solutions and digital tools",
      benefits: [
        "Showcase your technology",
        "Access to user feedback",
        "Product development insights",
        "Technology adoption promotion"
      ],
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Provide security, legal, or compliance support",
      benefits: [
        "Professional service exposure",
        "Client relationship building",
        "Industry expertise demonstration",
        "Risk management support"
      ],
      color: "slate"
    },
    {
      icon: Camera,
      title: "Media & Marketing",
      description: "Support with marketing, media, and communications",
      benefits: [
        "Creative portfolio expansion",
        "Brand visibility opportunities",
        "Content creation showcase",
        "Marketing expertise demonstration"
      ],
      color: "emerald"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                    type.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                    type.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100' :
                    type.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100' :
                    type.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' :
                    type.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100' :
                    type.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100' :
                    type.color === 'cyan' ? 'bg-gradient-to-br from-cyan-50 to-cyan-100' :
                    type.color === 'slate' ? 'bg-gradient-to-br from-slate-50 to-slate-100' :
                    'bg-gradient-to-br from-emerald-50 to-emerald-100'
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      type.color === 'blue' ? 'bg-blue-600' :
                      type.color === 'green' ? 'bg-green-600' :
                      type.color === 'orange' ? 'bg-orange-600' :
                      type.color === 'purple' ? 'bg-purple-600' :
                      type.color === 'indigo' ? 'bg-indigo-600' :
                      type.color === 'teal' ? 'bg-teal-600' :
                      type.color === 'yellow' ? 'bg-yellow-600' :
                      type.color === 'pink' ? 'bg-pink-600' :
                      type.color === 'red' ? 'bg-red-600' :
                      type.color === 'cyan' ? 'bg-cyan-600' :
                      type.color === 'slate' ? 'bg-slate-600' :
                      'bg-emerald-600'
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
                            type.color === 'purple' ? 'bg-purple-600' :
                            type.color === 'indigo' ? 'bg-indigo-600' :
                            type.color === 'teal' ? 'bg-teal-600' :
                            type.color === 'yellow' ? 'bg-yellow-600' :
                            type.color === 'pink' ? 'bg-pink-600' :
                            type.color === 'red' ? 'bg-red-600' :
                            type.color === 'cyan' ? 'bg-cyan-600' :
                            type.color === 'slate' ? 'bg-slate-600' :
                            'bg-emerald-600'
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

          {/* Looking for Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              We're Looking for Partners
            </h3>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl border border-orange-200 text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Open for Partnership</h4>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
                We are currently open and actively looking for strategic partners to help us launch 
                The 100 program next year. We're seeking organizations that share our vision of 
                empowering Liberian youth and building the next generation of business leaders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">🏦</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Financial Partners</h5>
                  <p className="text-sm text-gray-600">Support mini-grants and program funding</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">🏢</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Corporate Partners</h5>
                  <p className="text-sm text-gray-600">Provide internships and mentorship</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">🌍</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Community Partners</h5>
                  <p className="text-sm text-gray-600">Support outreach and recruitment</p>
                </div>
              </div>
              <div className="mt-8 inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold">
                <span className="animate-pulse mr-2">●</span>
                Launching Next Year - Join Us!
                    </div>
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
              <button 
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                onClick={() => {
                  // Scroll to apply section, set active tab to apply, and switch to partner form
                  const applyTab = document.querySelector('[data-tab="apply"]') as HTMLElement
                  if (applyTab) {
                    applyTab.click()
                    // Wait a bit for the tab to switch, then set partner form
                    setTimeout(() => {
                      const partnerFormButton = document.querySelector('[data-form-type="partner"]') as HTMLElement
                      if (partnerFormButton) {
                        partnerFormButton.click()
                      }
                    }, 100)
                  }
                }}
              >
                Become a Partner
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                onClick={() => {
                  // Scroll to overview section
                  const overviewTab = document.querySelector('[data-tab="overview"]') as HTMLElement
                  if (overviewTab) {
                    overviewTab.click()
                  }
                }}
              >
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
