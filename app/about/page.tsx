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
      "email": "annitallc@gmail.com"
    },
    "sameAs": [
      "https://linkedin.com/company/annita-africa",
      "https://twitter.com/annita_africa"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Christopher O. Fallah",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Emmanuel Z. Weh",
        "jobTitle": "CTO"
      },
      {
        "@type": "Siah Fallah",
        "jobTitle": "CMO"
      },
      {
        "@type": "Person",
        "name": "Lamber Kpukuyou",
        "jobTitle": "CTO"
      }
    ],
    "award": [
      "Orange Social Venture Prize Winner 2024",
      "African Union EAN Fellowship 2024",
      "SMART Liberia Winner 2024",
      "Mansa Platform Partner 2025"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "All African Countries"
      }
    ],
    "numberOfEmployees": "10-50",
    "slogan": "Africa's Leading All-in-One Digital Platform"
  }

  return (
    <>
      <SEOHead
        title="About Us - Annita | Empowering Africa's Digital Future"
        description="Learn about Annita, Africa's leading all-in-one digital platform. Discover our mission to empower 5 million MSMEs across Africa by 2029 through innovative e-commerce, fintech, and AI solutions."
        keywords={[
          'Annita',
          'about Annita',
          'African digital platform',
          'e-commerce Africa',
          'fintech Africa',
          'AI solutions Africa',
          'MSME empowerment',
          'digital transformation Africa',
          'African startup',
          'Liberia tech company',
          'African innovation',
          'digital platform Africa',
          'business solutions Africa',
          'innovation Africa',
          'digital economy Africa',
          'African technology',
          'business empowerment Africa',
          'digital solutions Africa',
          'African fintech',
          'e-commerce platform Africa',
          'African digital services',
          'business technology Africa',
          'African digital innovation',
          'platform solutions Africa',
          'African business technology',
          'digital business Africa',
          'African platform company',
          'business platform Africa',
          'African digital business',
          'technology platform Africa',
          'African business solutions',
          'digital platform company',
          'African tech platform',
          'business innovation Africa',
          'African digital platform',
          'technology solutions Africa',
          'African business platform',
          'digital innovation Africa',
          'Orange Social Venture Prize',
          'African Union Fellowship',
          'Mansa Platform',
          'SMART Liberia',
          'Christopher O Fallah',
          'Annita leadership'
        ]}
        canonical="/about"
        ogImage="/about-og-image.jpg"
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
                    <div className="text-2xl sm:text-3xl font-bold text-white">54</div>
                    <div className="text-sm text-orange-200">African Countries</div>
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

        {/* Empowering Africa's Future Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Empowering Africa's Future Through <span className="text-orange-500">Innovation</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Africa's first all-in-one digital platform combining e-commerce, fintech, AI, and more. Empowering MSMEs with innovative solutions and connectivity.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">5M</div>
                  <div className="text-gray-600 font-medium">MSMEs Coverage</div>
                  <div className="text-sm text-gray-500 mt-2">Target by 2029</div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">54</div>
                  <div className="text-gray-600 font-medium">African Countries</div>
                  <div className="text-sm text-gray-500 mt-2">Pan-African reach</div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div className="text-3xl font-bold text-green-500 mb-2">2021</div>
                  <div className="text-gray-600 font-medium">Founded</div>
                  <div className="text-sm text-gray-500 mt-2">Innovation since day one</div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💼</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Team Members</div>
                  <div className="text-sm text-gray-500 mt-2">Expert professionals</div>
                </div>
              </div>

              {/* Mission & Vision Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Our Mission */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, fintech, AI-driven tools, communication, marketing, logistics, and lifestyle services. We empower businesses and individuals with accessible, affordable, and innovative solutions, providing connectivity and convenience to drive growth and success.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <p className="text-orange-700 font-medium">Learn More</p>
                  </div>
                </div>

                {/* Our Vision */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🔮</span>
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To empower 5 million Micro, Small, and Medium Enterprises (MSMEs) across Africa and beyond by 2029, catalyzing global economic growth and job creation. With a special focus on underserved communities, including rural and women-led businesses, we aim to transform Africa's economic landscape through digital innovation.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-blue-700 font-medium">Discover More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-orange-500">Goals</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Transforming African Business through comprehensive digital solutions and unwavering commitment to excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuously developing cutting-edge solutions that address Africa's unique business challenges and opportunities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Inclusive Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Making digital tools accessible to underserved communities, including rural areas and women-led businesses across Africa.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Trust & Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building secure, reliable platforms that businesses can depend on, with bank-grade security and escrow protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our Core <span className="text-orange-500">Values</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  These values guide everything we do, from product development to customer service, ensuring we stay true to our mission of empowering Africa's MSMEs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <h3 className="text-2xl font-bold">Innovation & Impact</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Annita is committed to continuous innovation and creating meaningful impact. We push boundaries to solve Africa's unique challenges, developing solutions that drive real economic growth and social progress.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Cutting-edge technology solutions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Sustainable business practices</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Community-driven development</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold">Empowerment</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We believe in empowering every African business to reach their full potential. Our platform provides the tools, resources, and support needed to thrive in today's digital economy.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Comprehensive business tools</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">24/7 expert support</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Educational resources</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-bold">Inclusion</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Making digital tools accessible to underserved communities across Africa. We ensure our platform serves all African businesses, regardless of location or size.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Rural area accessibility</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Multi-language support</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Affordable pricing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🔒</span>
                    </div>
                    <h3 className="text-2xl font-bold">Trust</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Building secure, reliable platforms that businesses can depend on. Trust is the foundation of our relationship with every African business we serve.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Bank-grade security</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Escrow protection</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Transparent policies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-orange-500">Journey</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  From a simple e-commerce idea to expanding into Africa's first all-in-one digital platform, here's our gradual evolution and growth story.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-300 hidden md:block"></div>

                <div className="space-y-12">
                  {/* Timeline Item 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">1</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">August 2021 - MVP Launch</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 1</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Launched MVP with multi-vendor marketplace and ads. Our first step into Africa's digital commerce space, focusing on connecting local businesses with customers.
                      </p>
                      <div className="flex items-center text-sm text-orange-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">First paying customers secured</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">2</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">June 2022 - Product Validation & First Paying Users</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 2</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Achieved product-market fit with our first paying customers and validated our business model. Expanded from basic marketplace to include payment processing.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">Product-market fit achieved</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">3</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">May 2023 - Cross-Border MSME Onboarding Begins</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 3</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Expanded beyond local markets to serve Micro, Small, and Medium Enterprises across borders. Integrated cross-border payment solutions and expanded to multiple African countries.
                      </p>
                      <div className="flex items-center text-sm text-green-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">Cross-border expansion completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">4</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">March 2024 - Major Awards & Recognitions</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 4</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Won Orange Social Venture Prize (1st Place) and Named Top 50 Businesses in Africa by the African Union. Became a trusted partner in the African digital ecosystem.
                      </p>
                      <div className="flex items-center text-sm text-purple-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">International recognition received</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 5 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">5</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Q1 2025 - Onboarded to MANSA Platform</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 5</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Validated by Afreximbank's MANSA as a trusted and credible cross-border trade partner. This milestone opens doors to institutional financing and expanded market access.
                      </p>
                      <div className="flex items-center text-sm text-red-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">Institutional validation achieved</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 6 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <span className="text-white text-xl font-bold">6</span>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Q2 2025 - AnnitaPay Testing Phase</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Phase 6</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Development and testing of our proprietary payment solution, enhancing our platform capabilities and providing seamless financial services to African businesses.
                      </p>
                      <div className="flex items-center text-sm text-indigo-600">
                        <span className="font-medium">Key Achievement:</span>
                        <span className="ml-2">Proprietary payment solution launched</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Meet Our <span className="text-orange-500">Team</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Our diverse team combines tech expertise, market knowledge, and entrepreneurial spirit to build Africa's leading digital platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Christopher O. Fallah */}
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                    CF
                  </div>
                  <h3 className="text-xl font-bold mb-2">Christopher O. Fallah</h3>
                  <p className="text-orange-500 font-semibold mb-4">CEO & Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Visionary leader with experience in African startups and strategic business development. Founded Annita to transform Africa's digital landscape.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                  </div>
                </div>

                {/* Siah Fallah */}
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                    SF
                  </div>
                  <h3 className="text-xl font-bold mb-2">Siah Fallah</h3>
                  <p className="text-orange-500 font-semibold mb-4">Chief Marketing Officer (CMO)</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Focused on MSME engagement and growth strategies. Expert in digital marketing and community building across African markets.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  </div>
                </div>

                {/* Lamber Kpukuyou */}
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                    LK
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lamber Kpukuyou</h3>
                  <p className="text-orange-500 font-semibold mb-4">Chief Technology Officer (CTO)</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Manages payments and logistics systems with expertise in backend development, security, and scalable platform architecture.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                  </div>
                </div>

                {/* Emmanuel Z. Weh */}
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                    EW
                  </div>
                  <h3 className="text-xl font-bold mb-2">Emmanuel Z. Weh</h3>
                  <p className="text-orange-500 font-semibold mb-4">Chief Operating Officer (COO)</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Oversees daily operations and business development. Expert in African market dynamics and operational excellence.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Join Our Mission CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Join Our <span className="text-orange-500">Mission?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Be part of Africa's largest digital transformation. Connect with our team to learn how we're empowering MSMEs across the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl font-semibold text-white shadow-xl transition-all duration-300 inline-block text-center"
                >
                  Try V1.0 Now
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 bg-white hover:bg-gray-50 border-2 border-orange-500 text-orange-500 hover:text-orange-600 rounded-xl font-semibold shadow-xl transition-all duration-300 inline-block text-center"
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
