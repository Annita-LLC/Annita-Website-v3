'use client'

import { Shield, Lock, Eye, Server, Award, Activity } from 'lucide-react'

interface SecurityFeature {
  icon: React.ElementType
  title: string
  description: string
  color: string
}

const SecurityFeatures = ({ features }: { features: SecurityFeature[] }) => {
  const defaultFeatures: SecurityFeature[] = [
    {
      icon: Shield,
      title: 'Bank-Grade Encryption',
      description: '256-bit SSL/TLS encryption for all transactions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with 2FA and biometric verification',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR-compliant data protection and zero-knowledge architecture',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'ISO 27001 certified with 99.9% uptime guarantee',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const displayFeatures = features || defaultFeatures

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          <Shield className="w-4 h-4 mr-2" />
          Bank-Grade Security
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Premium Protection, <span className="text-orange-600">Zero Compromises</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your data and transactions are protected with military-grade encryption and enterprise-level security infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityFeatures

