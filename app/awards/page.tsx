"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Award, Trophy, Star, TrendingUp, Users, Target, Heart, Globe, Zap, Shield } from 'lucide-react'

const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: 'all', label: 'All Awards', count: 15 },
    { id: 'tech', label: 'Technology', count: 6 },
    { id: 'business', label: 'Business', count: 4 },
    { id: 'community', label: 'Community', count: 3 },
    { id: 'innovation', label: 'Innovation', count: 2 }
  ]

  const awards = [
    // Technology Awards
    {
      id: 1,
      title: "Best Fintech Platform 2024",
      organization: "Africa Tech Awards",
      category: "tech",
      year: "2024",
      image: "/images/awards/best-fintech-2024.jpg",
      description: "Recognized for our innovative AnnitaPay platform that's revolutionizing digital payments across Africa.",
      impact: "Reached 1M+ users across 15 countries",
      featured: true
    },
    {
      id: 2,
      title: "Digital Innovation Award",
      organization: "West Africa Digital Summit",
      category: "tech",
      year: "2024",
      image: "/images/awards/digital-innovation-2024.jpg",
      description: "Awarded for our comprehensive digital ecosystem that addresses real challenges in African markets.",
      impact: "Launched 5 new digital services",
      featured: true
    },
    {
      id: 3,
      title: "Best Mobile App",
      organization: "Liberia Tech Awards",
      category: "tech",
      year: "2023",
      image: "/images/awards/best-mobile-app-2023.jpg",
      description: "Our mobile application was recognized for its user-friendly design and comprehensive functionality.",
      impact: "500K+ app downloads",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Excellence",
      organization: "Africa Security Conference",
      category: "tech",
      year: "2023",
      image: "/images/awards/cybersecurity-excellence-2023.jpg",
      description: "Recognized for implementing industry-leading security measures to protect user data and transactions.",
      impact: "Zero security breaches since launch",
      featured: false
    },
    {
      id: 5,
      title: "AI Innovation Award",
      organization: "Africa AI Summit",
      category: "tech",
      year: "2023",
      image: "/images/awards/ai-innovation-2023.jpg",
      description: "Awarded for our AI-powered features that enhance user experience and business efficiency.",
      impact: "Improved user engagement by 40%",
      featured: false
    },
    {
      id: 6,
      title: "Best API Platform",
      organization: "Developer Awards Africa",
      category: "tech",
      year: "2023",
      image: "/images/awards/best-api-platform-2023.jpg",
      description: "Our developer-friendly API platform was recognized for its comprehensive documentation and ease of integration.",
      impact: "10K+ developer integrations",
      featured: false
    },

    // Business Awards
    {
      id: 7,
      title: "Startup of the Year",
      organization: "Liberia Business Awards",
      category: "business",
      year: "2024",
      image: "/images/awards/startup-of-year-2024.jpg",
      description: "Recognized as the most promising startup in Liberia for our rapid growth and market impact.",
      impact: "300% year-over-year growth",
      featured: true
    },
    {
      id: 8,
      title: "Best Customer Service",
      organization: "West Africa Customer Experience Awards",
      category: "business",
      year: "2023",
      image: "/images/awards/best-customer-service-2023.jpg",
      description: "Awarded for our exceptional customer support and dedication to user satisfaction.",
      impact: "98% customer satisfaction rate",
      featured: false
    },
    {
      id: 9,
      title: "Most Innovative Business Model",
      organization: "Africa Innovation Summit",
      category: "business",
      year: "2023",
      image: "/images/awards/innovative-business-model-2023.jpg",
      description: "Recognized for our unique approach to solving African business challenges through technology.",
      impact: "Created 500+ new jobs",
      featured: false
    },
    {
      id: 10,
      title: "Best Employer",
      organization: "Liberia Workplace Awards",
      category: "business",
      year: "2023",
      image: "/images/awards/best-employer-2023.jpg",
      description: "Awarded for our commitment to employee development, diversity, and workplace excellence.",
      impact: "95% employee retention rate",
      featured: false
    },

    // Community Awards
    {
      id: 11,
      title: "Community Impact Award",
      organization: "Liberia Community Foundation",
      category: "community",
      year: "2024",
      image: "/images/awards/community-impact-2024.jpg",
      description: "Recognized for The 100 Initiative and our commitment to youth empowerment and community development.",
      impact: "100+ youth trained and employed",
      featured: true
    },
    {
      id: 12,
      title: "Digital Literacy Champion",
      organization: "UNESCO",
      category: "community",
      year: "2023",
      image: "/images/awards/digital-literacy-champion-2023.jpg",
      description: "Awarded for our efforts in bringing digital education to rural communities across Liberia.",
      impact: "50+ rural communities reached",
      featured: false
    },
    {
      id: 13,
      title: "Youth Empowerment Award",
      organization: "African Youth Foundation",
      category: "community",
      year: "2023",
      image: "/images/awards/youth-empowerment-2023.jpg",
      description: "Recognized for our commitment to creating opportunities for young Africans in the tech sector.",
      impact: "200+ youth internships provided",
      featured: false
    },

    // Innovation Awards
    {
      id: 14,
      title: "Most Innovative Company",
      organization: "Africa Innovation Awards",
      category: "innovation",
      year: "2024",
      image: "/images/awards/most-innovative-2024.jpg",
      description: "Recognized for our groundbreaking approach to solving African challenges through technology.",
      impact: "5+ innovative products launched",
      featured: true
    },
    {
      id: 15,
      title: "Breakthrough Innovation",
      organization: "Global Innovation Forum",
      category: "innovation",
      year: "2023",
      image: "/images/awards/breakthrough-innovation-2023.jpg",
      description: "Awarded for our revolutionary digital payment solution that's transforming financial inclusion.",
      impact: "Enabled 2M+ unbanked users",
      featured: false
    }
  ]

  const filteredAwards = activeCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === activeCategory)

  const featuredAwards = awards.filter(award => award.featured)
  const regularAwards = filteredAwards.filter(award => !award.featured)

  const stats = [
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Users, value: "1M+", label: "Users Impacted" },
    { icon: Target, value: "15", label: "Countries Reached" },
    { icon: TrendingUp, value: "300%", label: "Growth Rate" }
  ]

  return (
    <>
      <SEOHead
        title="Awards & Recognition - Annita LLC"
        description="Discover Annita's achievements, awards, and recognition for our innovative contributions to Africa's digital transformation."
        keywords={[
          'awards',
          'recognition',
          'achievements',
          'Annita',
          'Africa',
          'tech awards',
          'innovation awards',
          'business awards',
          'community awards',
          'digital transformation',
          'fintech awards',
          'startup awards',
          'technology recognition',
          'African tech',
          'Liberia awards',
          'West Africa',
          'digital innovation',
          'business excellence',
          'community impact',
          'youth empowerment',
          'technology leadership',
          'industry recognition',
          'achievement awards',
          'excellence awards',
          'innovation recognition',
          'business success',
          'technology advancement',
          'digital excellence',
          'community development',
          'social impact',
          'entrepreneurship awards',
          'MSME recognition',
          'African innovation',
          'tech ecosystem',
          'digital economy',
          'business growth',
          'technology adoption',
          'digital inclusion',
          'economic development',
          'sustainable technology'
        ]}
        canonical="/awards"
        ogImage="/images/awards/best-fintech-2024.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Awards & <span className="text-orange-200">Recognition</span>
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Celebrating our achievements and the impact we've made across Africa
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">15+ Awards</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">4 Categories</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">2023-2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Awards */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Featured <span className="text-orange-600">Awards</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our most prestigious recognitions and achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {award.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                        {award.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600 font-medium mb-3">{award.organization}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{award.description}</p>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold text-orange-700">Impact</span>
                      </div>
                      <p className="text-orange-700 text-sm">{award.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Awards Grid */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                All <span className="text-orange-600">Awards</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Complete list of our achievements and recognitions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {award.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                        {award.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600 font-medium text-sm mb-3">{award.organization}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{award.description}</p>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-orange-600" />
                        <span className="text-xs font-medium text-gray-700">Impact:</span>
                      </div>
                      <p className="text-gray-700 text-xs mt-1">{award.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Join Our Success Story
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Be part of a company that's making a real difference in Africa's digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  Join Our Team
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AwardsPage
