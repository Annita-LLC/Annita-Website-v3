"use client"

import Link from 'next/link'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Play,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'



const CareersPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Impact',
      description: 'We are driven by the mission to empower millions of African businesses'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to solve complex challenges'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We think globally while acting locally across Africa'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements and global team collaboration'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building and social events'
    }
  ]

  const openPositions = []

  const teamStats = [
    { number: '25+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '50%', label: 'Women in Leadership' },
    { number: '95%', label: 'Employee Satisfaction' }
  ]

  const careersStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Careers at Annita",
    "description": "Join Annita's mission to empower Africa's MSMEs. Explore career opportunities in technology, business, and innovation.",
    "url": "https://annita.com/careers",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Annita",
      "url": "https://annita.com",
      "logo": "https://annita.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Liberia",
        "addressRegion": "West Africa"
      }
    },
    "employmentType": "Full-time",
    "workHours": "40 hours per week",
    "benefits": [
      "Competitive Salary",
      "Health & Wellness",
      "Learning & Growth",
      "Remote Work",
      "Recognition",
      "Team Events"
    ]
  }

  return (
    <>
      <SEOHead
        title="Careers - Join Annita's Mission"
        description="Join Annita's mission to empower Africa's MSMEs. Explore career opportunities in technology, business, and innovation. Competitive salary, health benefits, remote work, and continuous learning opportunities. Build the future of African digital commerce."
        keywords={[
          'careers at Annita',
          'Annita jobs',
          'job opportunities',
          'career opportunities',
          'work at Annita',
          'join Annita',
          'employment',
          'hiring',
          'job openings',
          'remote work',
          'technology jobs',
          'business jobs',
          'innovation jobs',
          'African tech jobs',
          'Liberia jobs',
          'West Africa jobs',
          'engineering jobs',
          'frontend engineer',
          'backend engineer',
          'full-stack developer',
          'product manager',
          'data scientist',
          'marketing manager',
          'sales representative',
          'customer success',
          'business development',
          'competitive salary',
          'health benefits',
          'equity options',
          'learning opportunities',
          'career development',
          'team collaboration',
          'global perspective',
          'passion for impact',
          'innovation culture',
          'diverse teams',
          'African business',
          'digital transformation',
          'fintech careers',
          'e-commerce careers',
          'AI careers',
          'logistics careers',
          'marketing careers',
          'sales careers',
          'customer service careers',
          'business careers',
          'startup careers',
          'tech startup jobs',
          'African startup',
          'MSME empowerment',
          'social impact jobs'
        ]}
        canonical="/careers"
        ogImage="/careers-og-image.jpg"
        structuredData={careersStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Users className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-orange-500">Join Our Mission</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
              Help us empower millions of African MSMEs through innovative technology. 
              Be part of something bigger than yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                icon={Play}
                className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Download}
                className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse, talented team working together to transform Africa's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Why Work at Annita?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Vacancy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              No Vacancy at the Moment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We currently don't have any open positions available. However, we're always looking for talented individuals 
              who are passionate about our mission to empower African MSMEs.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-soft max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-600 mb-6">
                We encourage you to check back regularly for new opportunities, or send us your resume for future consideration. 
                We'll keep your information on file and reach out when suitable positions become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers/apply">
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={Download}
                    className="w-full sm:w-auto"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Follow Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Life at Annita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what it's like to work with our amazing team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Culture</h3>
              <p className="text-gray-600">
                We celebrate diversity and create an environment where everyone feels valued and heard.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast-Paced Growth</h3>
              <p className="text-gray-600">
                Join a rapidly growing company where you can make a real impact and grow your career.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Work on technology that's transforming how millions of people do business across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Interested in Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              While we don't have open positions right now, we're always interested in connecting with talented individuals 
              who share our passion for empowering African MSMEs. Send us your resume for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers/apply">
                <Button
                  variant="gradient"
                  size="xl"
                  icon={Download}
                  className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="glass"
                  size="xl"
                  icon={Play}
                  className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default CareersPage
