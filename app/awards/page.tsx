import { Metadata } from 'next'
import { 
  Award,
  Star,
  Trophy,
  Medal,
  Badge,
  FileText,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  Heart,
  Play,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Awards & Recognition - Annita',
  description: 'Discover the awards, recognition, and achievements that validate Annita\'s impact on Africa\'s digital economy.',
}

const AwardsPage = () => {
  const awards = [
    {
      icon: Award,
      title: 'Orange Social Venture Prize',
      subtitle: '1st Place Winner',
      year: '2023',
      description: 'Recognized for innovative social impact in Africa\'s digital economy',
      category: 'Social Innovation',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Star,
      title: 'Top 50 Businesses in Africa',
      subtitle: 'African Union Recognition',
      year: '2024',
      description: 'Named among the most promising businesses driving Africa\'s economic growth',
      category: 'Business Excellence',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Trophy,
      title: 'Afreximbank Partnership',
      subtitle: 'MANSA Platform Integration',
      year: '2022',
      description: 'Selected as a trusted partner for cross-border trade facilitation',
      category: 'Strategic Partnership',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Medal,
      title: 'Digital Innovation Award',
      subtitle: 'West Africa Tech Summit',
      year: '2023',
      description: 'Awarded for breakthrough digital solutions for MSMEs',
      category: 'Technology Innovation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Badge,
      title: 'Financial Inclusion Champion',
      subtitle: 'Central Bank Recognition',
      year: '2024',
      description: 'Recognized for advancing financial inclusion in underserved communities',
      category: 'Financial Services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Startup of the Year',
      subtitle: 'Liberia Innovation Hub',
      year: '2023',
      description: 'Awarded for exceptional growth and impact in the startup ecosystem',
      category: 'Startup Excellence',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const milestones = [
    {
      icon: Users,
      title: '3,000+ Vendors',
      description: 'Active platform users',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: '400% Growth',
      description: 'Year-over-year revenue increase',
      year: '2022-2023'
    },
    {
      icon: Globe,
      title: '5 Countries',
      description: 'Pan-African expansion',
      year: '2024'
    },
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Platform reliability',
      year: '2024'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Aisha Bello',
      role: 'Director, African Union',
      content: 'Annita represents the future of African digital commerce. Their innovative approach to empowering MSMEs is exactly what our continent needs.',
      avatar: 'AB'
    },
    {
      name: 'Jean-Pierre Nzabandora',
      role: 'CEO, Orange Social Venture',
      content: 'Annita\'s commitment to social impact through technology is exemplary. They\'re not just building a business, they\'re building Africa\'s future.',
      avatar: 'JN'
    },
    {
      name: 'Sarah Mwangi',
      role: 'Head of Innovation, Afreximbank',
      content: 'The integration with MANSA platform demonstrates Annita\'s capability to handle complex cross-border trade requirements.',
      avatar: 'SM'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Recognized Excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Awards & <span className="text-orange-500">Recognition</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover the awards, recognition, and achievements that validate our impact on Africa's digital economy and our commitment to empowering MSMEs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These prestigious awards recognize our innovative approach to solving Africa's digital challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={award.title} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-primary-600 mb-2">{award.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <div className="text-lg font-semibold text-gray-700 mb-3">{award.subtitle}</div>
                <p className="text-gray-600 mb-4">{award.description}</p>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {award.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey of growth and impact in numbers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.title}</div>
                <div className="text-gray-600 mb-1">{milestone.description}</div>
                <div className="text-sm text-primary-600 font-medium">{milestone.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from key stakeholders and industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Award-Winning Platform
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Be part of the success story that's transforming Africa's digital landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AwardsPage
