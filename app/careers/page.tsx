'use client'

import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'

export default function CareersPage() {
  return (
    <>
      <SEOHead
        title="Careers - Join Annita's Mission"
        description="Join Annita's mission to empower Africa's MSMEs. Explore career opportunities in technology, business, and innovation."
        canonical="/careers"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                Join Our Team
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Join Our <span className="text-orange-200">Mission</span>
              </h1>
              <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Help us empower millions of African MSMEs through innovative technology. Be part of something bigger than yourself.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold">8+</div>
                  <div className="text-xs sm:text-sm text-orange-200">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold">Remote</div>
                  <div className="text-xs sm:text-sm text-orange-200">Work Style</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold">Impact</div>
                  <div className="text-xs sm:text-sm text-orange-200">Driven</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Elements */}
            <div className="relative">
              {/* Team Excellence Visualization */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Team Excellence</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-orange-200">8+ Team Members</span>
                    <span className="font-semibold text-white">Growing</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-orange-200">Remote Work</span>
                    <span className="font-semibold text-white">Flexible</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-orange-200">Impact Driven</span>
                    <span className="font-semibold text-white">Passionate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-orange-200">Success Rate</span>
                    <span className="font-semibold text-white">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Opportunities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for passionate individuals to join our mission. Submit your application and we'll contact you when opportunities arise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Engineering */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering</h3>
                <p className="text-gray-600 mb-4">Build scalable applications and contribute to our platform development</p>
                <div className="flex items-center text-sm text-gray-500">
                  Various levels • Remote / Liberia
                </div>
              </div>

              {/* Product */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product</h3>
                <p className="text-gray-600 mb-4">Lead product strategy and drive innovation across our platform</p>
                <div className="flex items-center text-sm text-gray-500">
                  Various levels • Remote / Liberia
                </div>
              </div>

              {/* Marketing */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing</h3>
                <p className="text-gray-600 mb-4">Develop and execute marketing strategies for African markets</p>
                <div className="flex items-center text-sm text-gray-500">
                  Various levels • Remote / Liberia
                </div>
              </div>

              {/* Sales */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales</h3>
                <p className="text-gray-600 mb-4">Drive business growth through strategic partnerships and sales</p>
                <div className="flex items-center text-sm text-gray-500">
                  Various levels • Remote / Liberia
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get notified about future opportunities</h3>
              <p className="text-gray-600 mb-6">
                Leave your contact information and we'll reach out when positions become available.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Apply for Future Roles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Growing Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">8+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">1+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">Growing</div>
                <div className="text-gray-600">Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Growing Team?"
        subtitle="Be part of a passionate team transforming African businesses. Apply now and help us build the future of digital commerce across the continent."
      />
    </>
  )
}