'use client'

import React, { useState } from 'react'
import { 
  Shield, 
  Fingerprint, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  User, 
  FileText, 
  Camera, 
  Smartphone, 
  Globe, 
  Zap, 
  BarChart3, 
  Users, 
  Award, 
  Star, 
  ArrowRight, 
  Play, 
  ExternalLink,
  CreditCard,
  Building,
  Mail,
  Phone,
  MessageCircle,
  Download,
  Upload,
  Search,
  Clock,
  Target,
  TrendingUp,
  Headphones,
  Settings,
  Database,
  Server,
  Key,
  Scan,
  QrCode,
  Wifi,
  WifiOff,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Tablet
} from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const IdentityVerificationPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [showWaitlist, setShowWaitlist] = useState(false)

  const heroStats = [
    { label: "Verification Methods", value: "15+", icon: Shield },
    { label: "Countries Supported", value: "54+", icon: Globe },
    { label: "Success Rate", value: "99.8%", icon: Target },
    { label: "Processing Time", value: "< 30s", icon: Zap }
  ]

  const verificationMethods = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Advanced fingerprint, face, and voice recognition for secure identity verification",
      details: "Our biometric system uses cutting-edge AI to verify identities through multiple biometric markers, ensuring maximum security and accuracy.",
      features: ["Fingerprint scanning", "Facial recognition", "Voice authentication", "Liveness detection"],
      accuracy: "99.9%",
      speed: "< 5 seconds"
    },
    {
      icon: FileText,
      title: "Document Verification",
      description: "AI-powered document analysis with fraud detection and authenticity validation",
      details: "Automatically verify government-issued IDs, passports, and other documents using advanced OCR and machine learning algorithms.",
      features: ["OCR technology", "Fraud detection", "Document authenticity", "Data extraction"],
      accuracy: "99.7%",
      speed: "< 10 seconds"
    },
    {
      icon: Smartphone,
      title: "Mobile Verification",
      description: "Seamless mobile-based verification with SMS, email, and app-based authentication",
      details: "Multi-channel mobile verification including SMS codes, email links, and in-app authentication for comprehensive identity confirmation.",
      features: ["SMS verification", "Email confirmation", "App authentication", "Push notifications"],
      accuracy: "99.5%",
      speed: "< 15 seconds"
    },
    {
      icon: Building,
      title: "Business Verification",
      description: "Comprehensive business identity verification with regulatory compliance",
      details: "Verify business entities, directors, and compliance status with automated checks against government databases and regulatory bodies.",
      features: ["Business registration", "Director verification", "Compliance checks", "Regulatory validation"],
      accuracy: "99.6%",
      speed: "< 20 seconds"
    },
    {
      icon: CreditCard,
      title: "Financial Verification",
      description: "Bank account and credit card verification with fraud prevention",
      details: "Secure financial verification through encrypted connections to banking systems with real-time fraud detection and risk assessment.",
      features: ["Bank account verification", "Card validation", "Fraud prevention", "Risk assessment"],
      accuracy: "99.8%",
      speed: "< 25 seconds"
    },
    {
      icon: Database,
      title: "Database Cross-Reference",
      description: "Comprehensive identity validation against multiple trusted databases",
      details: "Cross-reference identity information against government databases, credit bureaus, and other trusted sources for maximum verification accuracy.",
      features: ["Government databases", "Credit bureau checks", "Social security validation", "Address verification"],
      accuracy: "99.9%",
      speed: "< 30 seconds"
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects all data in transit and at rest",
      details: "All identity data is encrypted using AES-256 encryption with secure key management and zero-knowledge architecture."
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Advanced AI-powered fraud detection prevents identity theft and spoofing",
      details: "Real-time fraud detection using machine learning algorithms that analyze patterns and detect suspicious activities."
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "GDPR-compliant privacy protection with data minimization principles",
      details: "Strict privacy controls ensure only necessary data is collected and processed, with full user consent and data portability."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security infrastructure with 99.9% uptime",
      details: "Secure cloud infrastructure with regular security audits, penetration testing, and compliance certifications."
    }
  ]

  const complianceStandards = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      icon: Shield,
      status: "Certified"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      icon: CreditCard,
      status: "Level 1"
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance",
      icon: FileText,
      status: "Type II"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      icon: Award,
      status: "Certified"
    },
    {
      name: "FIDO2",
      description: "Fast Identity Online authentication standard",
      icon: Key,
      status: "Certified"
    },
    {
      name: "NIST",
      description: "National Institute of Standards and Technology",
      icon: Target,
      status: "Compliant"
    }
  ]

  const useCases = [
    {
      icon: Building,
      title: "Financial Services",
      description: "KYC/AML compliance for banks, fintech, and financial institutions",
      features: ["Customer onboarding", "Risk assessment", "Regulatory compliance", "Fraud prevention"],
      benefits: ["Reduced compliance costs", "Faster onboarding", "Lower fraud rates", "Regulatory compliance"]
    },
    {
      icon: Smartphone,
      title: "E-commerce",
      description: "Secure customer verification for online marketplaces and retail",
      features: ["Age verification", "Account security", "Payment protection", "Fraud prevention"],
      benefits: ["Reduced chargebacks", "Better customer trust", "Lower fraud losses", "Improved conversion"]
    },
    {
      icon: Users,
      title: "Healthcare",
      description: "Patient identity verification for telemedicine and healthcare services",
      features: ["Patient verification", "HIPAA compliance", "Secure access", "Data protection"],
      benefits: ["HIPAA compliance", "Secure telemedicine", "Reduced fraud", "Better patient care"]
    },
    {
      icon: Globe,
      title: "Government Services",
      description: "Citizen identity verification for government portals and services",
      features: ["Citizen verification", "Service access", "Document validation", "Digital identity"],
      benefits: ["Digital government", "Reduced fraud", "Better service delivery", "Cost savings"]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Security",
      description: "Multi-layered security approach reduces fraud and identity theft",
      stats: "99.8% fraud prevention rate"
    },
    {
      icon: Zap,
      title: "Faster Processing",
      description: "Automated verification processes reduce manual review time",
      stats: "90% faster verification"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Seamless verification process improves customer satisfaction",
      stats: "95% user satisfaction"
    },
    {
      icon: BarChart3,
      title: "Cost Reduction",
      description: "Automated processes reduce manual verification costs",
      stats: "70% cost reduction"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "MedTech Solutions",
      role: "Chief Technology Officer",
      content: "Annita's identity verification has transformed our patient onboarding process. The biometric authentication is incredibly accurate and user-friendly.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "James Okafor",
      company: "AfriBank Digital",
      role: "Head of Digital Banking",
      content: "The compliance features and fraud detection capabilities have significantly reduced our KYC processing time while improving security.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Aisha Mohammed",
      company: "E-commerce Plus",
      role: "Security Director",
      content: "The multi-method verification approach has eliminated identity fraud on our platform while providing a smooth user experience.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ]

  const faqs = [
    {
      question: "How secure is the identity verification process?",
      answer: "Our identity verification uses military-grade encryption, multi-factor authentication, and advanced fraud detection. All data is encrypted in transit and at rest, and we maintain strict compliance with international security standards including GDPR, PCI DSS, and SOC 2."
    },
    {
      question: "What types of documents can be verified?",
      answer: "We support verification of government-issued IDs, passports, driver's licenses, national ID cards, and business registration documents from over 54 countries. Our system automatically detects document types and applies appropriate verification methods."
    },
    {
      question: "How long does the verification process take?",
      answer: "Most verifications are completed in under 30 seconds. Biometric verification takes less than 5 seconds, document verification takes under 10 seconds, and comprehensive business verification takes under 20 seconds."
    },
    {
      question: "Can the system work offline?",
      answer: "Yes, our system includes offline capabilities for basic verification functions. Critical verification steps require internet connectivity, but the system can cache verification results and sync when connectivity is restored."
    },
    {
      question: "What happens if verification fails?",
      answer: "If verification fails, users receive clear feedback on what went wrong and how to resolve it. Our system provides multiple verification methods as fallbacks, and manual review is available for complex cases."
    },
    {
      question: "Is the system compliant with data protection regulations?",
      answer: "Yes, we are fully compliant with GDPR, CCPA, and other major data protection regulations. We implement data minimization, user consent management, and provide full data portability and deletion capabilities."
    }
  ]

  const integrationOptions = [
    { name: "REST API", description: "Simple REST API integration", icon: Server },
    { name: "SDK", description: "Mobile and web SDKs", icon: Smartphone },
    { name: "Webhook", description: "Real-time webhook notifications", icon: Zap },
    { name: "Widget", description: "Embeddable verification widget", icon: Monitor }
  ]

  return (
    <>
      <SEOHead 
        title="Identity Verification - Secure Digital Identity Solutions | Annita"
        description="Advanced identity verification with biometric authentication, document verification, and fraud detection. GDPR-compliant, secure, and fast verification across 54+ African countries."
        keywords="identity verification, biometric authentication, document verification, KYC, AML, fraud detection, digital identity, security compliance"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Advanced Identity Verification
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Secure Digital Identity
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Verification Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced identity verification with biometric authentication, document verification, 
              and AI-powered fraud detection. Secure, fast, and compliant across 54+ African countries.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowWaitlist(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              Start Secure Verification
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Verification Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Verification Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of advanced verification methods designed to meet 
              every security requirement and compliance standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {verificationMethods.map((method, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedFeature === index 
                    ? 'border-green-500 bg-green-50 shadow-lg' 
                    : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    selectedFeature === index ? 'bg-green-600' : 'bg-gray-100'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      selectedFeature === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    {selectedFeature === index && (
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          {method.details}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {method.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{method.accuracy}</div>
                            <div className="text-xs text-gray-500">Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{method.speed}</div>
                            <div className="text-xs text-gray-500">Speed</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with security-first principles and industry-leading compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-3 bg-green-100 rounded-xl w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-700">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meeting the highest standards of security and compliance across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 mb-3 group-hover:bg-green-50 transition-colors duration-300">
                  <standard.icon className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{standard.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{standard.description}</p>
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across various industries for secure identity verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <useCase.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="space-y-1">
                          {useCase.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Identity Verification?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with Africa's most advanced identity verification platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-green-600">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experience with our identity verification platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Easy Integration Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate our identity verification into your existing systems with our flexible integration options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationOptions.map((option, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 mb-3 group-hover:bg-green-50 transition-colors duration-300">
                  <option.icon className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{option.name}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our identity verification platform.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Identity?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of organizations already using our advanced identity verification 
            platform to secure their digital operations and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowWaitlist(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Join Our Identity Verification Platform
              </h3>
              <button 
                onClick={() => setShowWaitlist(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <WaitlistForm 
              onSuccess={() => setShowWaitlist(false)}
              title="Get Early Access"
              description="Be among the first to experience our advanced identity verification platform."
            />
          </div>
        </div>
      )}
    </>
  )
}

export default IdentityVerificationPage