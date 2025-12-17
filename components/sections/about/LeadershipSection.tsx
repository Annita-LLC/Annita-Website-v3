"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  MapPin,
  Calendar,
  Award,
  Target,
  Code,
  Users,
  TrendingUp,
  MessageSquare,
  Globe,
  Shield
} from 'lucide-react'

const LeadershipSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      id: 'christopher',
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      bio: 'Visionary leader with experience in African startups, strategic leadership, and market development. Founded Annita to democratize digital commerce across Africa.',
      avatar: 'CF',
      avatarColor: 'from-blue-500 to-cyan-500',
      location: 'Monrovia, Liberia',
      joined: '2021',
      expertise: ['Strategic Leadership', 'African Markets', 'Startup Growth'],
      social: { linkedin: '#', twitter: '#' },
      achievements: ['Orange Prize Winner', 'African Union Fellow', 'Mansa Partner']
    },
    {
      id: 'siah',
      name: 'Siah Fallah',
      role: 'Chief Marketing Officer',
      bio: 'Digital marketing expert focused on MSME engagement and growth strategies. Drives brand awareness and user acquisition across African markets.',
      avatar: 'SF',
      avatarColor: 'from-purple-500 to-pink-500',
      location: 'Bridgetown, Barbados',
      joined: '2021',
      expertise: ['Digital Marketing', 'MSME Engagement', 'Growth Strategy'],
      social: { linkedin: '#', twitter: '#' },
      achievements: ['Marketing Excellence', 'User Growth', 'Brand Strategy']
    },
    {
      id: 'lamber',
      name: 'Lamber Kpukuyou',
      role: 'Chief Technology Officer',
      bio: 'Backend development expert managing payments and logistics systems. Leads technical innovation and platform scalability for African markets.',
      avatar: 'LK',
      avatarColor: 'from-green-500 to-emerald-500',
      location: 'Monrovia, Liberia',
      joined: '2025',
      expertise: ['Backend Development', 'Payment Systems', 'Security'],
      social: { linkedin: '#', twitter: '#' },
      achievements: ['Technical Leadership', 'System Architecture', 'Security Implementation']
    }
  ]

  const boardMembers = [
    {
      name: 'Emmanuel Z. Weh',
      role: 'Board Advisor',
      bio: 'Technology strategist and entrepreneur with deep expertise in African fintech and digital transformation initiatives.',
      avatar: 'EW',
      avatarColor: 'from-orange-500 to-red-500',
      expertise: 'Fintech Strategy'
    },
    {
      name: 'Sarah Johnson',
      role: 'Board Member',
      bio: 'Experienced business leader with extensive knowledge in African market development and international partnerships.',
      avatar: 'SJ',
      avatarColor: 'from-cyan-500 to-blue-500',
      expertise: 'Business Strategy'
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Leadership Team
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Visionaries Behind{'\n'}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Africa's Digital Revolution
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines deep African market knowledge, technical expertise,
              and entrepreneurial spirit to build the continent's leading digital platform.
            </p>
          </motion.div>

          {/* Executive Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
              Executive Leadership
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Avatar & Basic Info */}
                    <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-blue-50">
                      <div className={`w-24 h-24 bg-gradient-to-r ${member.avatarColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                        <span className="text-2xl font-bold text-white">{member.avatar}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-blue-600 font-semibold">{member.role}</p>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                      {/* Location & Join Date */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {member.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          Joined {member.joined}
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h5>
                        <div className="space-y-2">
                          {member.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm text-gray-600">
                              <Award className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Globe className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
              Board Advisors & Strategic Partners
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${member.avatarColor} rounded-xl flex items-center justify-center shadow-lg`}>
                      <span className="text-lg font-bold text-white">{member.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-500 mt-1">{member.expertise}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Culture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Our Culture: Innovation Meets Purpose
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe that Africa's digital future is built by Africans, for Africans.
              Our team embodies this spirit through continuous innovation, deep market understanding,
              and an unwavering commitment to our mission.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Target className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Mission-Driven</h4>
                <p className="text-sm text-blue-100">Every decision we make advances our mission to empower 5 million MSMEs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Users className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Collaborative</h4>
                <p className="text-sm text-purple-100">We work together across borders, cultures, and expertise areas.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <TrendingUp className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Growth-Oriented</h4>
                <p className="text-sm text-indigo-100">We continuously learn, adapt, and scale our impact across Africa.</p>
              </div>
            </div>
          </motion.div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision of transforming Africa's business landscape.
                Help us build the future of digital commerce across the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                  View Open Positions
                </button>
                <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-900 shadow-lg transition-all duration-300">
                  Send Us a Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
