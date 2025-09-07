'use client'

import { useState } from 'react'
import { 
  Brain, 
  Smartphone, 
  Heart, 
  BookOpen, 
  Camera,
  MessageSquare,
  Calendar,
  ShoppingBag,
  Music,
  Video,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Zap,
  Users,
  Star,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react'
import Button from '@/components/ui/Button'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import CTASection from '@/components/sections/CTASection'

const PersonalAIPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const personalFeatures = [
    {
      icon: Smartphone,
      title: 'Smart Personal Assistant',
      description: 'Manage your daily tasks, reminders, and schedule with AI-powered organization',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness Coach',
      description: 'Get personalized health tips, workout plans, and wellness recommendations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BookOpen,
      title: 'Learning Companion',
      description: 'AI-powered study assistance, language learning, and skill development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'Creative Assistant',
      description: 'Generate ideas, edit photos, create content, and unleash your creativity',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Social Media Manager',
      description: 'Create engaging posts, manage your social presence, and grow your following',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShoppingBag,
      title: 'Smart Shopping',
      description: 'Find the best deals, compare prices, and make informed purchasing decisions',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const dailyUseCases = [
    {
      title: 'Morning Routine Optimization',
      description: 'Get personalized morning routines based on your goals and schedule',
      icon: Calendar,
      benefits: [
        'Smart alarm recommendations',
        'Weather-based outfit suggestions',
        'Traffic-aware commute planning',
        'Breakfast and nutrition tips'
      ]
    },
    {
      title: 'Personal Finance Management',
      description: 'Track expenses, set budgets, and get financial advice tailored to you',
      icon: TrendingUp,
      benefits: [
        'Automatic expense categorization',
        'Smart savings recommendations',
        'Investment insights',
        'Bill payment reminders'
      ]
    },
    {
      title: 'Health & Fitness Tracking',
      description: 'Monitor your health metrics and get personalized fitness recommendations',
      icon: Heart,
      benefits: [
        'Workout plan generation',
        'Nutrition tracking and advice',
        'Sleep quality analysis',
        'Stress management tips'
      ]
    },
    {
      title: 'Entertainment & Hobbies',
      description: 'Discover new interests, get recommendations, and enhance your leisure time',
      icon: Music,
      benefits: [
        'Personalized content recommendations',
        'Hobby discovery and learning',
        'Social activity suggestions',
        'Creative project ideas'
      ]
    }
  ]

  const personalBenefits = [
    'Save 2+ hours daily on routine tasks',
    'Improve health and wellness outcomes',
    'Learn new skills faster',
    'Stay organized and productive',
    'Make better financial decisions',
    'Discover new interests and hobbies',
    'Connect with like-minded people',
    'Achieve personal goals more effectively'
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Annita AI Assistant
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Annita <span className="text-orange-500">AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transform your daily life with AI-powered personal assistance. From health and fitness to productivity and creativity, 
              Annita's personal AI is here to help you live better.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                icon={Play}
                className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = '/demo'}
              >
                Try Annita AI
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Download}
                className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Annita AI Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI can enhance every aspect of your personal life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {personalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Use Cases Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Transform Your Daily Life
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI can make your everyday activities smarter and more efficient
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {dailyUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">{useCase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{useCase.description}</p>
                <div className="space-y-2 sm:space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                      <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
                Why Choose Annita AI?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of having an AI assistant that understands your personal needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CTASection />

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default PersonalAIPage
