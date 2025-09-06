'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Play,
  Smartphone,
  Tablet,
  Monitor,
  Eye,
  Zap,
  Shield,
  WifiOff,
  Brain,
  CreditCard,
  Truck,
  Megaphone,
  CheckCircle,
  Star,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const DemoPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const demoFeatures = [
    {
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Access key features without internet connection",
      image: "/images/DEMO-Images/08-1800x1360_1752227930581.webp"
    },
    {
      icon: Shield,
      title: "Escrow Settlements",
      description: "Secure transactions with built-in protection",
      image: "/images/DEMO-Images/08-1800x1360_1752227930605.webp"
    },
    {
      icon: CreditCard,
      title: "Fintech for All",
      description: "Complete digital wallet and payment solutions",
      image: "/images/DEMO-Images/detail-3_1691366360328.jpg"
    },
    {
      icon: Brain,
      title: "AI Business Assistant",
      description: "Intelligent automation and business insights",
      image: "/images/DEMO-Images/detail-8_1691366352083.jpg"
    },
    {
      icon: Truck,
      title: "Built-in Logistics",
      description: "Complete delivery and logistics management",
      image: "/images/DEMO-Images/detail-image-03.jpg"
    },
    {
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Advanced marketing and customer engagement",
      image: "/images/DEMO-Images/detail-image-2.jpg"
    }
  ]

  const deviceSizes = [
    { name: 'Mobile', icon: Smartphone, width: 'w-64', height: 'h-[500px]' },
    { name: 'Tablet', icon: Tablet, width: 'w-80', height: 'h-[600px]' },
    { name: 'Desktop', icon: Monitor, width: 'w-96', height: 'h-[700px]' }
  ]

  const [selectedDevice, setSelectedDevice] = useState(deviceSizes[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Interactive Demo
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Experience Annita 3.0
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Get a first-hand look at the revolutionary features that will transform 
              how you do business in Africa. See the future in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                icon={Play}
                className="text-lg font-bold"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Try V1.0 Now
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Star}
                className="text-lg font-bold backdrop-blur-xl text-white"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Device Selector */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-gray-100 rounded-xl p-1">
              {deviceSizes.map((device) => (
                <button
                  key={device.name}
                  onClick={() => setSelectedDevice(device)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedDevice.name === device.name
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <device.icon className="w-4 h-4 mr-2" />
                  {device.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Demo Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Interactive Feature Demos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore each revolutionary feature of Annita 3.0. Click on any feature 
                to see it in action across different devices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Demo Device */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className={`${selectedDevice.width} ${selectedDevice.height} bg-gray-900 rounded-3xl p-4 shadow-2xl relative overflow-hidden`}>
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    {/* Demo Content */}
                    <div className="w-full h-full relative">
                      <img 
                        src="/images/DEMO-Images/shot7_1737053810391.png" 
                        alt="Annita 3.0 Demo" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Device Frame */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {demoFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                        <feature.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{feature.description}</p>
                        <div className="flex items-center text-orange-600 text-sm font-medium">
                          <Play className="w-4 h-4 mr-1" />
                          <span>Watch Demo</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Annita 3.0 is Revolutionary
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the features that will transform business operations across Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: WifiOff,
                  title: "Works Offline",
                  description: "Continue business operations even without internet connectivity"
                },
                {
                  icon: Shield,
                  title: "Secure & Trusted",
                  description: "Built-in escrow and security features for safe transactions"
                },
                {
                  icon: Brain,
                  title: "AI-Powered",
                  description: "Intelligent automation and business insights at your fingertips"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses preparing for Annita 3.0. 
              Be among the first to experience true digital freedom in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                icon={Star}
                className="text-lg font-bold"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the Waitlist
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={ExternalLink}
                className="text-lg font-bold backdrop-blur-xl text-white"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Try V1.0 Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default DemoPage
