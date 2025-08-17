"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  Activity, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Smartphone,
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Clock,
  Star
} from 'lucide-react'

const HealthPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeService, setActiveService] = useState('telemedicine')

  const features = [
    {
      icon: Stethoscope,
      title: "Telemedicine",
      description: "Connect with healthcare professionals remotely",
      color: "blue"
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "Order medications and health products online",
      color: "green"
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Track your vital signs and health metrics",
      color: "orange"
    },
    {
      icon: Users,
      title: "Health Community",
      description: "Connect with others on similar health journeys",
      color: "purple"
    }
  ]

  const services = [
    { 
      name: "Telemedicine", 
      icon: "🏥", 
      description: "Virtual consultations with licensed doctors",
      features: ["24/7 availability", "Prescription services", "Follow-up care"]
    },
    { 
      name: "Pharmacy", 
      icon: "💊", 
      description: "Online pharmacy with fast delivery",
      features: ["Medication delivery", "Health supplements", "Medical supplies"]
    },
    { 
      name: "Wellness", 
      icon: "🧘", 
      description: "Mental health and wellness programs",
      features: ["Counseling sessions", "Meditation guides", "Stress management"]
    },
    { 
      name: "Fitness", 
      icon: "💪", 
      description: "Personalized fitness and nutrition plans",
      features: ["Workout plans", "Nutrition guidance", "Progress tracking"]
    },
    { 
      name: "Emergency", 
      icon: "🚑", 
      description: "Emergency medical services and support",
      features: ["Emergency contacts", "First aid guides", "Ambulance services"]
    },
    { 
      name: "Prevention", 
      icon: "🛡️", 
      description: "Preventive healthcare and screenings",
      features: ["Health checkups", "Vaccination reminders", "Disease prevention"]
    }
  ]

  const healthMetrics = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "BPM",
      status: "Normal",
      icon: "❤️",
      color: "green"
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "Normal",
      icon: "🩸",
      color: "green"
    },
    {
      title: "Steps Today",
      value: "8,432",
      unit: "steps",
      status: "Good",
      icon: "👟",
      color: "blue"
    },
    {
      title: "Sleep Quality",
      value: "7.5",
      unit: "hours",
      status: "Good",
      icon: "😴",
      color: "purple"
    }
  ]

  const benefits = [
    "Access to healthcare professionals 24/7",
    "Secure and private health data management",
    "Prescription medication delivery",
    "Health monitoring and tracking tools",
    "Mental health and wellness support",
    "Emergency medical assistance"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Health - Digital Healthcare Platform",
    "description": "Access comprehensive healthcare services including telemedicine, pharmacy, wellness programs, and health monitoring. Connect with healthcare professionals and manage your health digitally.",
    "url": "https://annita.com/services/health",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/health/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Health - Digital Healthcare Platform | Annita LLC"
        description="Access comprehensive healthcare services including telemedicine, pharmacy, wellness programs, and health monitoring. Connect with healthcare professionals and manage your health digitally."
        keywords={[
          'Annita Health',
          'telemedicine',
          'digital healthcare',
          'online pharmacy',
          'health monitoring',
          'wellness programs',
          'mental health',
          'fitness tracking',
          'healthcare platform',
          'virtual consultations',
          'medication delivery',
          'health data',
          'preventive care',
          'emergency medical',
          'health community'
        ]}
        canonical="/services/health"
        ogImage="/health-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Digital Healthcare Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Your Health <span className="text-green-600">Companion</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Access comprehensive healthcare services from telemedicine to wellness programs. 
                  Connect with healthcare professionals and manage your health digitally.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </button>
                  <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Book Consultation
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Dashboard</h3>
                  <div className="space-y-4">
                    {healthMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{metric.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{metric.title}</h4>
                            <p className="text-sm text-gray-600">{metric.status}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-green-600">Healthcare</span> Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From virtual consultations to health monitoring, Annita Health provides 
                comprehensive digital healthcare services for you and your family.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-green-50 to-green-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare services designed to meet all your health and wellness needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-green-600">Annita Health</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Health is designed to provide you with the best possible healthcare 
                  experience with modern technology and professional care.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Impact</h3>
                    <p className="text-gray-600">Healthcare statistics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-semibold text-green-600">500K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Consultations</span>
                      <span className="font-semibold text-green-600">2M+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Healthcare Partners</span>
                      <span className="font-semibold text-blue-600">1K+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-green-500 to-green-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Take Control of Your Health
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Download the Annita Health app and start your journey to better health 
                with professional care and modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HealthPage
