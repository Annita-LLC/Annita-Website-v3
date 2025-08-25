"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Award, Trophy, Star, TrendingUp, Users, Target, Heart, Globe, Zap, Shield, ExternalLink, Linkedin } from 'lucide-react'

// LinkedIn Embed Component
const LinkedInEmbed = ({ url }: { url: string }) => {
  if (!url) return null

  // Convert LinkedIn post URL to embed URL
  const getEmbedUrl = (postUrl: string) => {
    // Handle different LinkedIn URL formats
    if (postUrl.includes('/posts/')) {
      const postId = postUrl.split('/posts/')[1]?.split('?')[0]
      return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${postId}/`
    }
    return postUrl
  }

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Linkedin className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">LinkedIn Post</span>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <iframe
          src={getEmbedUrl(url)}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="LinkedIn Post"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: 'all', label: 'All Awards', count: 4 },
    { id: 'tech', label: 'Technology', count: 1 },
    { id: 'business', label: 'Business', count: 3 }
  ]

  const awards = [
    // Technology Awards
    {
      id: 1,
      title: "1st Place - Orange Social Venture Prize 2024",
      organization: "Orange Social Venture Prize",
      category: "tech",
      year: "2024",
      image: "/images/awards/orange-social-venture-prize-2024.jpg",
      description: "Annita was awarded 1st Place in the Orange Social Venture Prize 2024 – Liberia National Grand Prize, receiving a $3,000 USD grant for our innovative digital platform.",
      impact: "Received $3,000 USD grant for platform development",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_i-give-all-the-glory-to-my-lord-and-savior-activity-7235399030187397120-Otrb"
    },
    {
      id: 2,
      title: "Enterprise African Network (EAN) Fellowship",
      organization: "African Union",
      category: "business",
      year: "2024",
      image: "/images/awards/ean-fellowship-2024.jpg",
      description: "Annita has been selected as one of the 50 innovative small businesses for the inaugural Enterprise African Network (EAN) Fellowship Programme, participating in the prestigious third AU Micro, Small, and Medium Enterprise (MSME) Forum.",
      impact: "Selected among 50 innovative businesses across Africa",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-has-been-selected-as-one-of-the-50-activity-7231565059083104256-NRVM"
    },
    {
      id: 3,
      title: "9th Place Winner - SMART Liberia ESP",
      organization: "SMART Liberia",
      category: "business",
      year: "2024",
      image: "/images/awards/smart-liberia-esp-2024.jpg",
      description: "Back-to-back wins as the 9th place winner at SMART Liberia's ESP, receiving the L$75,000 prize for our innovative business model and social impact.",
      impact: "Received L$75,000 prize for business innovation",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_back-to-back-wins-not-luck-grace-humbled-activity-7235717012008697857-B4fQ"
    },
    {
      id: 4,
      title: "Mansa Platform Partnership",
      organization: "Mansa Due Diligence",
      category: "business",
      year: "2024",
      image: "/images/awards/mansa-platform-2024.jpg",
      description: "Annita joins the Mansa platform, strengthening our position in the African business ecosystem and expanding our reach across the continent.",
      impact: "Enhanced business credibility and continental reach",
      featured: false,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-joins-the-mansa-platform-strengthening-activity-7303127700020350977-ykKT"
    }
  ]

  const filteredAwards = activeCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === activeCategory)

  const featuredAwards = awards.filter(award => award.featured)
  const regularAwards = filteredAwards.filter(award => !award.featured)

  const stats = [
    { icon: Award, value: "4", label: "Awards Won" },
    { icon: Users, value: "50", label: "Innovative Businesses Selected" },
    { icon: Target, value: "3", label: "Major Prizes" },
    { icon: TrendingUp, value: "100%", label: "Success Rate" }
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
                <span className="bg-white/20 px-4 py-2 rounded-full">4 Awards</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">2 Categories</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">2024</span>
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
                    {award.linkedinUrl && <LinkedInEmbed url={award.linkedinUrl} />}
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
                    {award.linkedinUrl && <LinkedInEmbed url={award.linkedinUrl} />}
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
