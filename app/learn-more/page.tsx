'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  WifiOff, 
  Shield, 
  CreditCard, 
  Brain, 
  Truck, 
  Megaphone, 
  DollarSign, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  ArrowLeft,
  Zap,
  Smartphone,
  Laptop
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import { useState } from 'react'

const LearnMorePage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const v3Features = [
    {
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Access key features without internet connection. Perfect for rural areas with unstable connectivity.",
      details: [
        "Sell products offline and sync when connected",
        "Process payments without internet",
        "Access customer data and inventory",
        "Continue business operations anywhere"
      ]
    },
    {
      icon: Shield,
      title: "Escrow Settlements",
      description: "Secure transactions with built-in escrow protection for both buyers and sellers.",
      details: [
        "Automatic payment protection",
        "Dispute resolution system",
        "Secure fund holding",
        "Risk-free transactions"
      ]
    },
    {
      icon: CreditCard,
      title: "Fintech for All",
      description: "Complete digital wallet with send, receive, save, and grow money capabilities.",
      details: [
        "Digital wallet integration",
        "Money transfer and savings",
        "Investment opportunities",
        "Financial planning tools"
      ]
    },
    {
      icon: Brain,
      title: "AI Business Assistant",
      description: "Get automated help, insights, and guidance to run your business smarter.",
      details: [
        "Automated business insights",
        "Customer behavior analysis",
        "Inventory optimization",
        "Sales forecasting"
      ]
    },
    {
      icon: Truck,
      title: "Built-in Logistics",
      description: "Complete logistics and delivery management system built into the platform.",
      details: [
        "Delivery tracking system",
        "Route optimization",
        "Fleet management",
        "Real-time updates"
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Advanced marketing and advertising tools to reach more customers.",
      details: [
        "Social media integration",
        "Email marketing campaigns",
        "Customer segmentation",
        "Performance analytics"
      ]
    }
  ]

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals and small businesses",
      features: [
        "Basic marketplace access",
        "Standard payment processing",
        "Customer support",
        "Basic analytics"
      ]
    },
    {
      name: "Growth",
      price: "$15",
      description: "For growing businesses",
      features: [
        "Advanced analytics",
        "Priority support",
        "Marketing tools",
        "Inventory management"
      ]
    },
    {
      name: "Pro",
      price: "$35",
      description: "For established businesses",
      features: [
        "AI business assistant",
        "Advanced logistics",
        "Custom branding",
        "API access"
      ]
    },
    {
      name: "Premium",
      price: "$75",
      description: "For enterprise-level operations",
      features: [
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced reporting"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <img 
                  src="/images/blog/Annita's Logo.png" 
                  alt="Annita Logo" 
                  className="w-5 h-5 rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-orange-500">Annita</span>
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita 3.0 - The Future of Business
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Discover the revolutionary features that will transform how you do business in Africa. 
              Offline-ready, AI-powered, and built for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="white"
                size="lg"
                icon={Star}
                className="text-lg font-bold"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Globe}
                className="text-lg font-bold backdrop-blur-xl"
              >
                Try V1.0 Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Revolutionary Features Coming in V3.0
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the next generation of business tools designed specifically for Africa's unique challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {v3Features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                      <feature.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                Flexible Pricing for Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. No upfront costs, just sell and earn.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    tier.name === 'Pro' ? 'border-orange-500 relative' : 'border-gray-100'
                  }`}
                >
                  {tier.name === 'Pro' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-orange-600 mb-2">{tier.price}</div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.name === 'Pro' ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
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
              Join thousands of businesses already preparing for Annita 3.0. 
              Be among the first to experience true digital freedom in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="white"
                size="lg"
                icon={Star}
                className="text-lg font-bold"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Globe}
                className="text-lg font-bold backdrop-blur-xl"
                onClick={() => window.open('https://annita.company.site/products', '_blank')}
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
    </div>
  )
}

export default LearnMorePage
