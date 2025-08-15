import { Metadata } from 'next'
import { 
  Heart, 
  Globe, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Lightbulb
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Annita - Africa\'s Digital Growth Engine',
  description: 'Learn about Annita\'s mission to empower 5 million MSMEs across Africa by 2029. Discover our story, values, and the team driving Africa\'s digital revolution.',
}

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering every African business to reach their full potential'
    },
    {
      icon: Globe,
      title: 'Inclusion',
      description: 'Making digital tools accessible to underserved communities across Africa'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building secure, reliable platforms that businesses can depend on'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously innovating to solve Africa\'s unique challenges'
    }
  ]

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Launched MVP with multivendor marketplace, generating $500 in initial revenue'
    },
    {
      year: '2022',
      title: 'Growth',
      description: 'Onboarded 3,000+ vendors and 1,500+ buyers, achieved $2,500 revenue (+400% growth)'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Won Orange Social Venture Prize (1st Place) and scaled to $8,000 revenue (+220% growth)'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Named Top 50 Businesses in Africa by African Union, reached $17,000 revenue (+112% growth)'
    }
  ]

  const team = [
    {
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      achievement: 'Led MVP launch and awards wins',
      description: 'Visionary leader with experience in African startups'
    },
    {
      name: 'Emmanuel Z. Weh',
      role: 'CTO',
      achievement: 'Expert in scalable platforms',
      description: 'Oversees tech architecture for low-connectivity environments'
    },
    {
      name: 'Siah Fallah',
      role: 'CMO',
      achievement: 'Drives marketing strategies',
      description: 'Focused on MSME engagement and growth'
    },
    {
      name: 'Victor Coleman',
      role: 'Senior Frontend Engineer',
      achievement: 'Builds user-friendly interfaces',
      description: 'Ensures mobile-first design excellence'
    },
    {
      name: 'Lamber Kpukuyou',
      role: 'Senior Backend Engineer',
      achievement: 'Handles secure integrations',
      description: 'Manages payments and logistics systems'
    }
  ]

  const achievements = [
    { number: '3,000+', label: 'Active Vendors' },
    { number: '1,500+', label: 'Active Buyers' },
    { number: '90%', label: 'Customer Satisfaction' },
    { number: '70%', label: 'Seller Retention' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Annita
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Africa's digital heartbeat, empowering MSMEs to thrive in the digital era 
              and catalyzing global economic growth across the continent
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, 
                fintech, AI-driven tools, communication, marketing, logistics, and lifestyle services.
              </p>
              <p className="text-gray-600">
                We empower businesses and individuals with accessible, affordable, and innovative 
                solutions, providing connectivity and convenience to drive growth and success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower 5 million Micro, Small, and Medium Enterprises (MSMEs) across Africa 
                and beyond by 2029, catalyzing global economic growth and job creation.
              </p>
              <p className="text-gray-600">
                With a special focus on underserved communities, including rural and women-led 
                businesses, we aim to transform Africa's economic landscape through digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from product development to customer service, 
              ensuring we stay true to our mission of empowering Africa's MSMEs.
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

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to Africa's leading all-in-one digital platform, 
              here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/4 text-center lg:text-left">
                  <div className="text-4xl font-bold gradient-text mb-2">{milestone.year}</div>
                  <div className="text-lg font-semibold text-gray-900">{milestone.title}</div>
                </div>
                <div className="lg:w-3/4">
                  <p className="text-lg text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines tech expertise, market knowledge, and entrepreneurial 
              vision to drive Africa's digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Achievement:</strong> {member.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers represent the real impact we're making in empowering 
              African businesses and driving economic growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Africa's Digital Revolution
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of the movement that's transforming Africa's economic landscape 
              and empowering millions of businesses across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <Heart className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
