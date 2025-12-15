'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  MessageSquare,
  BarChart3,
  Target,
  Shield,
  Settings,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

const AIFeaturesSection = () => {
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

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
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
  )
}

export default AIFeaturesSection

