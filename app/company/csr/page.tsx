"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Heart, 
  Users, 
  Globe, 
  BookOpen, 
  DollarSign, 
  Target, 
  Award, 
  Lightbulb,
  TreePine,
  Shield,
  GraduationCap,
  Building,
  Zap,
  Star,
  Users2,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const CSRPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const currentInitiatives = [
    {
      icon: Users,
      title: "The 100 Youth Empowerment Program",
      description: "Comprehensive six-month training program for 100 Liberian youths in business skills, marketing, and mentorship",
      status: "Launching 2025",
      impact: "100 youths annually",
      color: "orange"
    },
    {
      icon: BookOpen,
      title: "Digital Skills Training",
      description: "Providing digital literacy and technology training to underserved communities across Liberia",
      status: "Active",
      impact: "500+ individuals trained",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "MSME Support Program",
      description: "Supporting micro, small, and medium enterprises with digital tools and business development resources",
      status: "Active",
      impact: "3,000+ businesses supported",
      color: "green"
    },
    {
      icon: Globe,
      title: "Cross-Border Trade Facilitation",
      description: "Enabling African MSMEs to access regional and international markets through our platform",
      status: "Active",
      impact: "15+ African countries",
      color: "purple"
    }
  ]

  const plannedInitiatives = [
    {
      icon: GraduationCap,
      title: "Annita Academy",
      description: "Comprehensive online learning platform offering business, technology, and entrepreneurship courses",
      timeline: "2025-2026",
      target: "10,000+ learners across Africa",
      color: "indigo"
    },
    {
      icon: TreePine,
      title: "Green Business Initiative",
      description: "Supporting environmentally sustainable businesses and promoting green entrepreneurship",
      timeline: "2025-2027",
      target: "500+ green businesses",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Women Entrepreneurship Program",
      description: "Dedicated support program for women entrepreneurs with mentorship, funding, and networking opportunities",
      timeline: "2025-2026",
      target: "1,000+ women entrepreneurs",
      color: "pink"
    },
    {
      icon: Building,
      title: "Rural Development Initiative",
      description: "Bringing digital commerce and business opportunities to rural communities across Africa",
      timeline: "2026-2028",
      target: "100+ rural communities",
      color: "teal"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hubs",
      description: "Establishing innovation centers in major African cities to support tech startups and entrepreneurs",
      timeline: "2026-2030",
      target: "10+ innovation hubs",
      color: "yellow"
    },
    {
      icon: Heart,
      title: "Community Health Initiative",
      description: "Supporting healthcare access and wellness programs in underserved communities",
      timeline: "2027-2030",
      target: "50+ communities",
      color: "red"
    }
  ]

  const impactMetrics = [
    {
      icon: Users,
      title: "People Impacted",
      value: "10,000+",
      description: "Individuals directly supported through our programs"
    },
    {
      icon: Building,
      title: "Businesses Supported",
      value: "3,000+",
      description: "MSMEs empowered through our platform"
    },
    {
      icon: Globe,
      title: "Countries Reached",
      value: "15+",
      description: "African nations with active programs"
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      value: "$2M+",
      description: "Estimated economic value generated"
    }
  ]

  const focusAreas = [
    {
      icon: Target,
      title: "Youth Development",
      description: "Empowering the next generation of African leaders through education, mentorship, and opportunity creation"
    },
    {
      icon: TrendingUp,
      title: "Economic Inclusion",
      description: "Ensuring all Africans have access to economic opportunities and digital commerce"
    },
    {
      icon: Star,
      title: "Innovation & Technology",
      description: "Promoting technological advancement and digital transformation across Africa"
    },
    {
      icon: Users2,
      title: "Community Building",
      description: "Fostering strong, connected communities that support each other's growth and development"
    }
  ]

  return (
    <>
      <SEOHead
        title="Corporate Social Responsibility - Annita LLC"
        description="Learn about Annita's commitment to social impact across Liberia and Africa. Discover our current initiatives and future plans for youth empowerment, economic inclusion, and community development."
        keywords="CSR, corporate social responsibility, social impact, youth empowerment, Africa, Liberia, community development, economic inclusion"
        canonicalUrl="/company/csr"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Making a Difference Across Africa
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Corporate Social <span className="text-orange-200">Responsibility</span>
                </h1>
                <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                  At Annita, we believe in creating positive change that extends far beyond business success. 
                  Our commitment to social impact drives everything we do across Liberia and Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Impact <span className="text-orange-600">So Far</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Through our various initiatives, we've made a meaningful difference in the lives of thousands across Africa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h4>
                    <p className="text-gray-600 text-sm">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-orange-600">Focus Areas</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We concentrate our efforts on four key areas that drive sustainable social impact across Africa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Initiatives */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Current <span className="text-orange-600">Initiatives</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These are the programs and initiatives we're actively running to create positive change.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentInitiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className={`p-8 ${
                      initiative.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100' :
                      initiative.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                      initiative.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                      'bg-gradient-to-br from-purple-50 to-purple-100'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          initiative.color === 'orange' ? 'bg-orange-600' :
                          initiative.color === 'blue' ? 'bg-blue-600' :
                          initiative.color === 'green' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}>
                          <initiative.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{initiative.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              initiative.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {initiative.status}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">{initiative.description}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <Target className="w-4 h-4 mr-1" />
                            <span className="font-medium">{initiative.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planned Initiatives */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Future <span className="text-orange-600">Plans</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our ambitious roadmap for expanding our social impact across Africa in the coming years.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plannedInitiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className={`p-6 ${
                      initiative.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100' :
                      initiative.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100' :
                      initiative.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100' :
                      initiative.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100' :
                      initiative.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' :
                      'bg-gradient-to-br from-red-50 to-red-100'
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        initiative.color === 'indigo' ? 'bg-indigo-600' :
                        initiative.color === 'emerald' ? 'bg-emerald-600' :
                        initiative.color === 'pink' ? 'bg-pink-600' :
                        initiative.color === 'teal' ? 'bg-teal-600' :
                        initiative.color === 'yellow' ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}>
                        <initiative.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className="text-gray-700 text-sm mb-4">{initiative.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{initiative.timeline}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Target className="w-3 h-3 mr-1" />
                          <span>{initiative.target}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Join Us in Making a Difference
                </h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Together, we can create lasting positive change across Africa. 
                  Whether you're an individual, organization, or business, there are many ways to get involved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center">
                    <Users2 className="w-5 h-5 mr-2" />
                    Partner With Us
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Support Our Mission
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CSRPage
