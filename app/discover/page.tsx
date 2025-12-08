'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  Star,
  ArrowLeft,
  Globe,
  Smartphone,
  Laptop,
  Eye,
  Lightbulb,
  Settings,
  Database
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const DiscoverPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const aiFeatures = [
    {
      icon: Brain,
      title: "AI Business Assistant",
      description: "Your intelligent business partner that learns from your operations and provides personalized insights.",
      capabilities: [
        "Automated business analysis",
        "Sales trend predictions",
        "Customer behavior insights",
        "Inventory optimization suggestions",
        "Marketing campaign recommendations"
      ],
      benefits: [
        "Increase sales by up to 40%",
        "Reduce operational costs",
        "Improve customer satisfaction",
        "Make data-driven decisions"
      ]
    },
    {
      icon: MessageSquare,
      title: "Smart Customer Support",
      description: "AI-powered customer service that handles inquiries 24/7 in multiple languages.",
      capabilities: [
        "Multilingual support (English, French, Swahili, Arabic)",
        "Instant response to common questions",
        "Order tracking and updates",
        "Product recommendations",
        "Escalation to human agents when needed"
      ],
      benefits: [
        "24/7 customer support",
        "Faster response times",
        "Reduced support costs",
        "Improved customer experience"
      ]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict market trends and help you stay ahead of the competition.",
      capabilities: [
        "Market trend analysis",
        "Demand forecasting",
        "Price optimization",
        "Seasonal pattern recognition",
        "Competitor analysis"
      ],
      benefits: [
        "Better inventory planning",
        "Optimal pricing strategies",
        "Reduced waste and overstock",
        "Increased profit margins"
      ]
    },
    {
      icon: Target,
      title: "Personalized Marketing",
      description: "AI-driven marketing campaigns that target the right customers with the right message.",
      capabilities: [
        "Customer segmentation",
        "Personalized product recommendations",
        "Automated email campaigns",
        "Social media optimization",
        "A/B testing and optimization"
      ],
      benefits: [
        "Higher conversion rates",
        "Increased customer engagement",
        "Better ROI on marketing spend",
        "Stronger customer relationships"
      ]
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Advanced security system that protects your business from fraudulent transactions.",
      capabilities: [
        "Real-time fraud monitoring",
        "Transaction pattern analysis",
        "Risk assessment scoring",
        "Automatic fraud prevention",
        "Security alerts and notifications"
      ],
      benefits: [
        "Reduced financial losses",
        "Enhanced security",
        "Customer trust and confidence",
        "Compliance with regulations"
      ]
    },
    {
      icon: Settings,
      title: "Automated Operations",
      description: "Streamline your business operations with AI-powered automation tools.",
      capabilities: [
        "Order processing automation",
        "Inventory management",
        "Supply chain optimization",
        "Performance monitoring",
        "Report generation"
      ],
      benefits: [
        "Reduced manual work",
        "Improved efficiency",
        "Fewer human errors",
        "Cost savings"
      ]
    }
  ]

  const useCases = [
    {
      title: "Small Business Owner",
      scenario: "Maria runs a clothing store in Lagos",
      challenge: "Struggling with inventory management and customer retention",
      solution: "AI assistant helps predict popular items and sends personalized offers to customers",
      result: "40% increase in sales and 60% reduction in unsold inventory"
    },
    {
      title: "Market Vendor",
      scenario: "Ahmed sells fresh produce in Nairobi market",
      challenge: "Difficulty pricing products competitively and managing perishable goods",
      solution: "AI provides real-time pricing recommendations and demand forecasting",
      result: "25% increase in profit margins and 50% reduction in waste"
    },
    {
      title: "Online Seller",
      scenario: "Fatima operates an e-commerce store from Accra",
      challenge: "Limited time for customer service and marketing",
      solution: "AI handles customer inquiries and runs targeted marketing campaigns",
      result: "80% reduction in support workload and 35% increase in customer engagement"
    }
  ]

  const aiStats = [
    { number: "95%", label: "Accuracy in fraud detection" },
    { number: "40%", label: "Average sales increase" },
    { number: "24/7", label: "Customer support availability" },
    { number: "60%", label: "Reduction in operational costs" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/images/logo/annita-logo-new.svg" 
                  alt="Annita Logo" 
                  className="w-full h-full"
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover AI-Powered Business Intelligence
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Transform your business with artificial intelligence that understands African markets, 
              speaks your language, and works around your schedule.
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
                icon={Eye}
                className="text-lg font-bold backdrop-blur-xl"
              >
                See AI in Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aiStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
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
                Powerful AI Features for Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI technology is specifically designed for African businesses, 
                understanding local markets, languages, and business practices.
              </p>
            </motion.div>

            <div className="space-y-12">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-purple-100 rounded-xl mr-4">
                          <feature.icon className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
                Real Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how AI is transforming businesses across Africa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 italic">"{useCase.scenario}"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{useCase.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Result:</h4>
                      <p className="text-sm text-green-700">{useCase.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Lightbulb className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and be among the first to experience intelligent business automation 
              designed specifically for African markets.
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

export default DiscoverPage
