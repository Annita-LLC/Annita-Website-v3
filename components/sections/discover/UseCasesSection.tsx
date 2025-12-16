'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const UseCasesSection = () => {
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

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
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
  )
}

export default UseCasesSection




