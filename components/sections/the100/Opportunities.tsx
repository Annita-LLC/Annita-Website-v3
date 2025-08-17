"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Users, DollarSign, Target, Award, Globe } from 'lucide-react'

const Opportunities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const opportunities = [
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      description: "Gain hands-on experience at Annita LLC and partner organizations",
      benefits: [
        "Real-world business experience",
        "Professional networking",
        "Skill development in your field",
        "Potential for full-time employment",
        "Mentorship from industry experts"
      ],
      color: "orange"
    },
    {
      icon: Users,
      title: "Affiliate Program",
      description: "Serve as Annita LLC affiliates and earn while you learn",
      benefits: [
        "Commission-based earnings",
        "Flexible work schedule",
        "Marketing and sales training",
        "Business development skills",
        "Performance-based rewards"
      ],
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Mini-Grants",
      description: "Access funding to start your own business ventures",
      benefits: [
        "Up to $5,000 in startup funding",
        "Business plan support",
        "Financial management training",
        "Ongoing mentorship",
        "Access to business networks"
      ],
      color: "green"
    }
  ]

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      story: "Through The 100 program, I received a mini-grant to launch my software development company. Today, I employ 5 people and serve clients across Liberia.",
      achievement: "Founded TechLib Solutions"
    },
    {
      name: "Michael Doe",
      role: "Marketing Specialist",
      story: "The internship at Annita LLC gave me the skills and confidence to start my own digital marketing agency. I now work with major brands in Liberia.",
      achievement: "Launched Digital Marketing Agency"
    },
    {
      name: "Grace Williams",
      role: "Business Consultant",
      story: "As an affiliate, I learned valuable sales and networking skills. I've since started my own consulting business helping other entrepreneurs.",
      achievement: "Established Consulting Firm"
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
              <span className="text-orange-600">Opportunities</span> for Participants
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond the training program, participants gain access to exclusive opportunities 
              that can transform their careers and launch their entrepreneurial journeys.
            </p>
          </motion.div>

          {/* Main Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-8 ${
                  opportunity.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100' :
                  opportunity.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                  'bg-gradient-to-br from-green-50 to-green-100'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    opportunity.color === 'orange' ? 'bg-orange-600' :
                    opportunity.color === 'blue' ? 'bg-blue-600' :
                    'bg-green-600'
                  }`}>
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{opportunity.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          opportunity.color === 'orange' ? 'bg-orange-600' :
                          opportunity.color === 'blue' ? 'bg-blue-600' :
                          'bg-green-600'
                        }`}></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-orange-600 font-medium">{story.role}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{story.story}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-700 font-semibold text-sm">{story.achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Professional certification opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Access to industry conferences and events</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Resume building and interview preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Ongoing professional development</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Network Access</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Alumni network of successful entrepreneurs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Mentor connections across industries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Partnership opportunities with Annita LLC</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Access to investor networks</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Seize These Opportunities?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join The 100 and unlock a world of possibilities. Apply now to start your 
              journey toward becoming a successful entrepreneur and business leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                onClick={() => {
                  // Scroll to apply section and set active tab
                  const applyTab = document.querySelector('[data-tab="apply"]') as HTMLElement
                  if (applyTab) {
                    applyTab.click()
                  }
                }}
              >
                Apply Now
              </button>
              <button 
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
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

export default Opportunities
