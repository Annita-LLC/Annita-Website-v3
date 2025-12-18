'use client'

import SEOHead from '@/components/seo/SEOHead'

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita",
    "url": "https://www.an-nita.com",
    "logo": "https://www.an-nita.com/favicon.png",
    "description": "Africa's first all-in-one digital platform integrating e-commerce, fintech, AI-driven tools, and lifestyle services",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Monrovia",
      "addressCountry": "Liberia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@annita.com"
    },
    "sameAs": [
      "https://linkedin.com/company/annita-africa",
      "https://twitter.com/annita_africa"
    ]
  }

  return (
    <>
      <SEOHead
        title="About Us - Annita | Empowering Africa's Digital Future"
        description="Learn about Annita, Africa's leading all-in-one digital platform. Discover our mission to empower 5 million MSMEs across Africa by 2029 through innovative e-commerce, fintech, and AI solutions."
        keywords={[
          'Annita', 'about Annita', 'African digital platform', 'e-commerce Africa', 'fintech Africa',
          'AI solutions Africa', 'MSME empowerment', 'digital transformation Africa', 'African startup',
          'Liberia tech company', 'African innovation', 'digital platform Africa', 'business solutions Africa',
          'innovation Africa', 'digital economy Africa', 'African technology', 'business empowerment Africa',
          'digital solutions Africa', 'African fintech', 'e-commerce platform Africa', 'African digital services',
          'business technology Africa', 'African digital innovation', 'platform solutions Africa',
          'African business technology', 'digital business Africa', 'African platform company',
          'business platform Africa', 'African digital business', 'technology platform Africa',
          'African business solutions', 'digital platform company', 'African tech platform',
          'business innovation Africa', 'African digital platform', 'technology solutions Africa',
          'African business platform', 'digital innovation Africa'
        ]}
        canonical="/about"
        ogImage="/images/about-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg border border-white/30">
                  <span className="w-5 h-5 mr-2">🏢</span>
                  About Annita
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Empowering Africa's <span className="text-orange-200">Digital Future</span>
                </h1>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
                  Africa's first all-in-one digital platform combining e-commerce, fintech, AI, communication, marketing, logistics, and more into a single ecosystem.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">2021</div>
                    <div className="text-sm text-orange-200">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">5M</div>
                    <div className="text-sm text-orange-200">MSMEs Target</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">2035</div>
                    <div className="text-sm text-orange-200">Vision</div>
                  </div>
                </div>
              </div>

              {/* Visualization Card */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                    <p className="text-orange-200">Transforming African business through innovation</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">E-commerce</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">Fintech</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">AI Solutions</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">Logistics</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, fintech, AI-driven tools, communication, marketing, logistics, and lifestyle services. We empower businesses and individuals with accessible, affordable, and innovative solutions, providing connectivity and convenience to drive growth and success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="text-orange-500">Vision</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower 5 million Micro, Small, and Medium Enterprises (MSMEs) across Africa and beyond by 2029, catalyzing global economic growth and job creation. With a special focus on underserved communities, including rural and women-led businesses, we aim to transform Africa's economic landscape through digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="text-orange-500">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">Continuously pushing boundaries to solve Africa's unique challenges</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Inclusion</h3>
                <p className="text-gray-600">Making digital tools accessible to underserved communities across Africa</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Trust</h3>
                <p className="text-gray-600">Building secure, reliable platforms that businesses can depend on</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Impact</h3>
                <p className="text-gray-600">Creating lasting positive change in African communities and economies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="text-orange-500">Journey</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">August 2021 - MVP Launch</h3>
                    <p className="text-gray-600">Launched our first MVP with multi-vendor marketplace and basic advertising features</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">June 2022 - Product Validation</h3>
                    <p className="text-gray-600">Achieved product-market fit with our first paying customers and validated business model</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">May 2023 - Cross-Border Expansion</h3>
                    <p className="text-gray-600">Expanded beyond local markets to serve MSMEs across multiple African countries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">March 2024 - Major Recognition</h3>
                    <p className="text-gray-600">Won Orange Social Venture Prize and became part of African Union EAN Fellowship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Meet Our <span className="text-orange-500">Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  CF
                </div>
                <h3 className="text-xl font-bold mb-2">Christopher O. Fallah</h3>
                <p className="text-orange-500 mb-4">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Visionary leader driving Africa's digital transformation</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  SF
                </div>
                <h3 className="text-xl font-bold mb-2">Siah Fallah</h3>
                <p className="text-orange-500 mb-4">CMO</p>
                <p className="text-gray-600 text-sm">Leading marketing and MSME engagement strategies</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  LK
                </div>
                <h3 className="text-xl font-bold mb-2">Lamber Kpukuyou</h3>
                <p className="text-orange-500 mb-4">CTO</p>
                <p className="text-gray-600 text-sm">Leading our technology and platform development</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Be part of Africa's largest digital transformation. Connect with our team to learn how we're empowering MSMEs across the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl font-semibold text-white shadow-xl transition-all duration-300"
                >
                  Try V1.0 Now
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 bg-white hover:bg-gray-50 border-2 border-orange-500 text-orange-500 hover:text-orange-600 rounded-xl font-semibold shadow-xl transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
