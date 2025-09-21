'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Award, 
  TrendingUp, 
  Users, 
  Target, 
  ExternalLink, 
  Linkedin,
  ArrowRight,
  Download,
  Globe,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function AwardsPage() {

  const awards = [
    {
      id: 'orange-prize',
      title: "1st Place - Orange Social Venture Prize 2024",
      organization: "Orange Social Venture Prize",
      year: "2024",
      image: "/images/awards/orange-social-venture-prize-2024.jpg",
      description: "Annita was awarded 1st Place in the Orange Social Venture Prize 2024 – Liberia National Grand Prize, receiving a $3,000 USD grant for our innovative digital platform.",
      impact: "Received $3,000 USD grant for platform development",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_i-give-all-the-glory-to-my-lord-and-savior-activity-7235399030187397120-Otrb"
    },
    {
      id: 'ean-fellowship',
      title: "Enterprise African Network (EAN) Fellowship",
      organization: "African Union",
      year: "2024",
      image: "/images/awards/ean-fellowship-2024.jpg",
      description: "Annita has been selected as one of the 50 innovative small businesses for the inaugural Enterprise African Network (EAN) Fellowship Programme, participating in the prestigious third AU Micro, Small, and Medium Enterprise (MSME) Forum.",
      impact: "Selected among 50 innovative businesses across Africa",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-has-been-selected-as-one-of-the-50-activity-7231565059083104256-NRVM"
    },
    {
      id: 'smart-liberia',
      title: "9th Place Winner - SMART Liberia ESP",
      organization: "SMART Liberia",
      year: "2024",
      image: "/images/awards/smart-liberia-esp-2024.jpg",
      description: "Back-to-back wins as the 9th place winner at SMART Liberia's ESP, receiving the L$75,000 prize for our innovative business model and social impact.",
      impact: "Received L$75,000 prize for business innovation",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_back-to-back-wins-not-luck-grace-humbled-activity-7235717012008697857-B4fQ"
    },
    {
      id: 'mansa-platform',
      title: "Mansa Platform Partnership",
      organization: "Mansa Due Diligence",
      year: "2024",
      image: "/images/awards/mansa-platform-2024.jpg",
      description: "Annita joins the Mansa platform, strengthening our position in the African business ecosystem and expanding our reach across the continent.",
      impact: "Enhanced business credibility and continental reach",
      featured: false,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-joins-the-mansa-platform-strengthening-activity-7303127700020350977-ykKT"
    }
  ]

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
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Awards & Recognition
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Achievements</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Celebrating our achievements and the impact we've made across Africa 
                through innovative technology and digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a
                  href="/download"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Awards Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Awards & <span className="text-orange-500">Recognition</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 text-center max-w-4xl mx-auto leading-relaxed">
                Discover our prestigious awards and recognitions that showcase our commitment 
                to innovation and impact across Africa.
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced Awards List */}
              <div className="space-y-8 sm:space-y-10">
                {awards.map((award, index) => (
                  <div
                    key={award.id}
                    className="w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-gray-200 bg-white hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                      <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{award.title}</h3>
                          <p className="text-sm sm:text-base text-gray-600">{award.organization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">{award.year}</div>
                        {award.featured && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-orange-100 text-orange-700">
                            ⭐ Featured
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">{award.description}</p>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-200">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                        <span className="text-sm sm:text-base font-semibold text-gray-700">Impact:</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{award.impact}</p>
                    </div>

                    {/* LinkedIn Link */}
                    {award.linkedinUrl && (
                      <div className="mt-6 sm:mt-8">
                        <a 
                          href={award.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          View LinkedIn Post
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
