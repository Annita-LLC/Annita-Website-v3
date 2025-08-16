import { Metadata } from 'next'
import { 
  Heart, 
  Activity, 
  Apple, 
  Dumbbell, 
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Target
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Health & Wellness - Annita',
  description: 'Access health and wellness services on Annita. Get personalized health guidance, fitness tracking, and wellness resources.',
}

const HealthPage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track your vital signs and health metrics',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Apple,
      title: 'Nutrition Guidance',
      description: 'Get personalized meal plans and nutrition advice',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Programs',
      description: 'Access workout routines and exercise plans',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Wellness Tracking',
      description: 'Monitor your overall wellness journey',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const services = [
    'Health Assessments',
    'Fitness Tracking',
    'Nutrition Planning',
    'Mental Wellness',
    'Sleep Analysis',
    'Stress Management',
    'Meditation Guides',
    'Health Education'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Health & Wellness</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Your journey to better health starts here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Health Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health and wellness tools to support your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Health Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a wide range of health and wellness services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service}</h3>
                <div className="flex items-center justify-center text-red-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Improve Your Health?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users on their health and wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthPage
