'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  PenTool, 
  Image, 
  Video, 
  FileText, 
  Palette, 
  Zap, 
  Star,
  Globe,
  Download,
  ExternalLink,
  Shield,
  Brain,
  Camera,
  Mic,
  Monitor
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'

const CreatorStudioPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Generate text, images, and videos with AI assistance",
      features: ["Text generation", "Image creation", "Video editing", "Content optimization"]
    },
    {
      icon: PenTool,
      title: "Creative Tools",
      description: "Professional design and editing tools",
      features: ["Graphic design", "Video editing", "Audio editing", "Templates"]
    },
    {
      icon: Image,
      title: "Image Processing",
      description: "Advanced image editing and enhancement",
      features: ["Photo editing", "Filters", "Resizing", "Format conversion"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Complete video creation and editing suite",
      features: ["Video editing", "Transitions", "Effects", "Export options"]
    }
  ]

  const stats = [
    { label: "AI Models", value: "10+", icon: Brain },
    { label: "Templates", value: "500+", icon: PenTool },
    { label: "Formats", value: "20+", icon: FileText },
    { label: "Languages", value: "10+", icon: Globe }
  ]

  return (
    <>
      <SEOHead
        title="Annita Creator Studio - AI-Powered Content Creation"
        description="Create professional content with AI-powered tools for text, images, and videos. Perfect for African creators and businesses."
        keywords={[
          'content creation',
          'AI tools',
          'video editing',
          'image editing',
          'text generation',
          'creative tools',
          'content studio'
        ]}
        canonical="/services/creator-studio"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <PenTool className="w-4 h-4 mr-2" />
                  AI Content Creation
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Annita <span className="text-orange-200">Creator Studio</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  AI-powered content generation for text, images, and videos. 
                  Create professional content with advanced tools designed for African creators.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">AI</div>
                    <div className="text-xs sm:text-sm text-orange-200">Powered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">500+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Templates</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">20+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Formats</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">10+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Languages</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <PenTool className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Creating
                  </button>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Creator Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Creator Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">AI Content Generation</span>
                      <span className="font-semibold text-white">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">500+ Templates</span>
                      <span className="font-semibold text-white">Professional</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">20+ Formats</span>
                      <span className="font-semibold text-white">Versatile</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Advanced Content Creation Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to create professional content with AI assistance and advanced tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.features.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Creator Studio Performance
              </h2>
              <p className="text-lg text-gray-600">
                Powerful tools and AI assistance for content creators.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start creating professional content with AI-powered tools and advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                <PenTool className="w-5 h-5 mr-2" />
                Start Creating
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  )
}

export default CreatorStudioPage
