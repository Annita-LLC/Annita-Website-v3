import { Metadata } from 'next'
import Link from 'next/link'
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
  GraduationCap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - Join Annita\'s Mission',
  description: 'Join Annita\'s mission to empower Africa\'s MSMEs. Explore career opportunities in technology, business, and innovation.',
}

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

  const openPositions = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / Monrovia, Liberia',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build beautiful, responsive user interfaces for our platform',
      requirements: [
        'Expert in React, TypeScript, and modern frontend technologies',
        'Experience with Next.js and state management',
        'Strong UI/UX design principles',
        'Experience with mobile-first development'
      ]
    },
    {
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'Remote / Monrovia, Liberia',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and build scalable backend systems',
      requirements: [
        'Expert in Node.js, Python, or Go',
        'Experience with microservices architecture',
        'Database design and optimization',
        'API design and security best practices'
      ]
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Monrovia, Liberia',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead product strategy and development for our platform',
      requirements: [
        'Experience in fintech or e-commerce products',
        'Strong analytical and strategic thinking',
        'User research and data analysis skills',
        'Experience with agile development methodologies'
      ]
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'West Africa',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive partnerships and business growth across Africa',
      requirements: [
        'Experience in B2B sales and partnerships',
        'Knowledge of African markets and business landscape',
        'Strong networking and relationship building skills',
        'Experience in fintech or e-commerce industry'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build AI/ML models to optimize business operations',
      requirements: [
        'Expert in Python, R, or similar languages',
        'Experience with machine learning frameworks',
        'Statistical analysis and modeling skills',
        'Experience with big data technologies'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / Monrovia, Liberia',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure customer satisfaction and platform adoption',
      requirements: [
        'Experience in customer success or account management',
        'Strong communication and problem-solving skills',
        'Experience with CRM systems',
        'Passion for helping customers succeed'
      ]
    }
  ]

  const teamStats = [
    { number: '25+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '50%', label: 'Women in Leadership' },
    { number: '95%', label: 'Employee Satisfaction' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Help us empower millions of African MSMEs through innovative technology. 
              Be part of something bigger than yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-blue-600 text-white hover:bg-blue-700 group">
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-gray-900">
                <Heart className="w-5 h-5 mr-2" />
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse, talented team working together to transform Africa's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help us build the future of African commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-blue-600 font-medium">{position.department}</p>
                  </div>
                  <Link href="/careers/apply">
                    <button className="btn-sm bg-blue-600 text-white hover:bg-blue-700">
                      Apply Now
                    </button>
                  </Link>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{position.experience}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you don't see a position that fits, we'd still love to hear from you. 
              Send us your resume and tell us how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <Briefcase className="w-5 h-5 mr-2" />
                View All Positions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/careers/apply">
                <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  <Heart className="w-5 h-5 mr-2" />
                  Send Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
