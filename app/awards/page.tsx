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
import CTASection from '@/components/sections/CTASection'
import Link from 'next/link'

export default function AwardsPage() {
  const awards = [
    {
      id: 'orange-prize',
      title: "1st Place - Orange Social Venture Prize 2024",
      organization: "Orange Social Venture Prize",
      year: "2024",
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
      description: "Annita joins the Mansa platform, strengthening our position in the African business ecosystem and expanding our reach across the continent.",
      impact: "Enhanced business credibility and continental reach",
      featured: false,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-joins-the-mansa-platform-strengthening-activity-7303127700020350977-ykKT"
    }
  ]

  const stats = [
    { icon: Award, value: "4", label: "Awards Won" },
    { icon: Users, value: "50", label: "Selected" },
    { icon: Target, value: "3", label: "Major Prizes" },
    { icon: TrendingUp, value: "100%", label: "Success Rate" }
  ]

  return (
    <>
      <SEOHead
        title="Awards & Recognition - Annita"
        description="Discover Annita's achievements, awards, and recognition for our innovative contributions to Africa's digital transformation."
        keywords={['awards', 'recognition', 'achievements', 'Annita', 'Africa']}
        canonical="/awards"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Awards & Recognition
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-orange-200">Achievements</span>
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Celebrating our achievements and the impact we've made across Africa through innovative technology and digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://annita.company.site/products"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Try V1.0 Now
              </a>
              <a
                href="/contact-sales"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Awards & <span className="text-orange-500">Recognition</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our prestigious awards and recognitions that showcase our commitment to innovation and impact across Africa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className={`group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 ${
                    award.featured ? 'shadow-xl ring-2 ring-orange-200' : 'shadow-lg'
                  }`}
                >
                  {award.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ FEATURED
                      </div>
                    </div>
                  )}

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                            {award.year}
                          </div>
                          <p className="text-sm text-gray-600 font-medium">{award.organization}</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                      {award.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {award.description}
                    </p>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200 mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        <span className="text-sm font-semibold text-gray-700">Impact</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{award.impact}</p>
                    </div>

                    {award.linkedinUrl && (
                      <a
                        href={award.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        View LinkedIn Post
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Celebrate your achievements and join thousands of MSMEs using Annita to grow their revenue, reach new customers, and streamline operations across Africa."
      />
    </>
  )
}