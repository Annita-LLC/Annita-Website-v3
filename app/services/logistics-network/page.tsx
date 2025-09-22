'use client'

import React, { useState } from 'react'
import { 
  Truck, 
  MapPin, 
  Clock, 
  Package, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  ExternalLink,
  Route,
  Warehouse,
  Car,
  Plane,
  Ship,
  Navigation,
  Target,
  TrendingUp,
  Award,
  Headphones,
  FileText,
  Download,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const LogisticsNetworkPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [showWaitlist, setShowWaitlist] = useState(false)

  const heroStats = [
    { label: "Countries Covered", value: "54+", icon: Globe },
    { label: "Delivery Partners", value: "10,000+", icon: Users },
    { label: "Daily Deliveries", value: "500K+", icon: Truck },
    { label: "Success Rate", value: "99.2%", icon: Target }
  ]

  const features = [
    {
      icon: Route,
      title: "Smart Route Optimization",
      description: "AI-powered routing that reduces delivery time by 40% and fuel costs by 25%",
      details: "Our advanced algorithms analyze traffic patterns, weather conditions, and delivery priorities to create the most efficient routes for every delivery.",
      benefits: ["40% faster deliveries", "25% fuel savings", "Real-time optimization", "Multi-stop efficiency"]
    },
    {
      icon: Warehouse,
      title: "Integrated Warehouse Management",
      description: "Complete inventory and fulfillment solution with real-time tracking",
      details: "Manage your entire supply chain from a single platform with automated inventory tracking, order processing, and fulfillment optimization.",
      benefits: ["Real-time inventory", "Automated fulfillment", "Multi-location support", "Demand forecasting"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Delivery App",
      description: "Driver-friendly mobile app with offline capabilities and GPS tracking",
      details: "Our mobile app works seamlessly online and offline, ensuring deliveries continue even in areas with poor connectivity.",
      benefits: ["Offline functionality", "GPS tracking", "Photo proof delivery", "Real-time updates"]
    },
    {
      icon: Shield,
      title: "Secure Package Protection",
      description: "End-to-end security with insurance coverage and tamper-proof packaging",
      details: "Every package is protected with advanced security measures, insurance coverage, and tamper-evident packaging for complete peace of mind.",
      benefits: ["Full insurance coverage", "Tamper-proof packaging", "Real-time monitoring", "Secure handover"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into delivery performance and customer satisfaction",
      details: "Get detailed analytics on delivery times, success rates, customer feedback, and operational efficiency to optimize your logistics operations.",
      benefits: ["Performance metrics", "Customer insights", "Cost analysis", "Predictive analytics"]
    },
    {
      icon: Globe,
      title: "Cross-Border Logistics",
      description: "Seamless international shipping with customs clearance and documentation",
      details: "Handle complex international logistics with automated customs clearance, documentation management, and multi-currency support.",
      benefits: ["Customs automation", "Document management", "Multi-currency", "Global compliance"]
    }
  ]

  const deliveryTypes = [
    {
      icon: Car,
      title: "Last-Mile Delivery",
      description: "Fast and reliable delivery to customers' doorsteps",
      features: ["Same-day delivery", "Scheduled delivery", "Real-time tracking", "Photo confirmation"],
      pricing: "From $2.50 per delivery"
    },
    {
      icon: Truck,
      title: "Bulk Transportation",
      description: "Heavy-duty transport for large shipments and bulk goods",
      features: ["Heavy vehicle fleet", "Specialized handling", "Route optimization", "24/7 monitoring"],
      pricing: "From $0.15 per km"
    },
    {
      icon: Plane,
      title: "Express Air Cargo",
      description: "Priority air freight for urgent and time-sensitive deliveries",
      features: ["Next-day delivery", "Priority handling", "Global network", "Temperature control"],
      pricing: "From $5.00 per kg"
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight for large volume shipments",
      features: ["Container shipping", "Bulk cargo", "Port-to-port", "Customs clearance"],
      pricing: "From $0.05 per kg"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Optimize your logistics operations with AI-powered route planning and real-time tracking",
      stats: "40% improvement in delivery efficiency"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Comprehensive security measures protect your packages throughout the entire journey",
      stats: "99.9% package security rate"
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Real-time tracking and notifications keep customers informed and satisfied",
      stats: "95% customer satisfaction rate"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Advanced analytics help you make informed decisions and optimize operations",
      stats: "30% reduction in operational costs"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Africa",
      role: "Operations Manager",
      content: "Annita's logistics network has transformed our delivery operations. The route optimization alone has saved us 40% on fuel costs.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The real-time tracking and customer notifications have significantly improved our customer satisfaction scores.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Aisha Okafor",
      company: "Retail Solutions",
      role: "Supply Chain Director",
      content: "The cross-border logistics features have made international shipping seamless and cost-effective for our business.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ]

  const faqs = [
    {
      question: "How does the route optimization work?",
      answer: "Our AI-powered system analyzes real-time traffic data, weather conditions, delivery priorities, and vehicle capacity to create the most efficient routes. It continuously learns and adapts to improve performance over time."
    },
    {
      question: "What types of packages can be delivered?",
      answer: "We handle a wide range of packages including documents, electronics, clothing, food, pharmaceuticals, and fragile items. Special handling is available for temperature-sensitive and high-value items."
    },
    {
      question: "How do you ensure package security?",
      answer: "We use multiple security layers including tamper-evident packaging, real-time GPS tracking, photo proof of delivery, insurance coverage, and secure handover procedures with identity verification."
    },
    {
      question: "Can I track my package in real-time?",
      answer: "Yes, you can track your package in real-time through our mobile app or web portal. You'll receive automatic updates at key milestones including pickup, transit, and delivery confirmation."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "We offer same-day, next-day, and scheduled delivery options. Delivery times vary by location and service type, with most urban areas receiving same-day delivery within 2-4 hours."
    },
    {
      question: "Do you provide insurance coverage?",
      answer: "Yes, all packages are automatically covered by our comprehensive insurance policy. Coverage includes loss, damage, and theft protection up to $10,000 per package."
    }
  ]

  const integrationPartners = [
    { name: "Shopify", logo: "/api/placeholder/120/60", description: "E-commerce platform integration" },
    { name: "WooCommerce", logo: "/api/placeholder/120/60", description: "WordPress e-commerce solution" },
    { name: "Magento", logo: "/api/placeholder/120/60", description: "Enterprise e-commerce platform" },
    { name: "SAP", logo: "/api/placeholder/120/60", description: "Enterprise resource planning" },
    { name: "Oracle", logo: "/api/placeholder/120/60", description: "Supply chain management" },
    { name: "Microsoft Dynamics", logo: "/api/placeholder/120/60", description: "Business applications suite" }
  ]

  return (
    <>
      <SEOHead 
        title="Logistics Network - Comprehensive Delivery Solutions | Annita"
        description="Transform your delivery operations with Annita's comprehensive logistics network. AI-powered route optimization, real-time tracking, and secure package handling across 54+ African countries."
        keywords={[
          "logistics network",
          "delivery solutions",
          "route optimization",
          "package tracking",
          "supply chain",
          "last-mile delivery",
          "cross-border shipping",
          "warehouse management"
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Comprehensive Logistics Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Africa's Most Advanced
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Logistics Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your delivery operations with AI-powered route optimization, real-time tracking, 
              and secure package handling across 54+ African countries. Experience the future of logistics.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowWaitlist(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Truck className="w-5 h-5 mr-2" />
              Start Your Logistics Journey
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Logistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive logistics platform provides everything you need to optimize 
              your delivery operations and exceed customer expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedFeature === index 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    selectedFeature === index ? 'bg-blue-600' : 'bg-gray-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      selectedFeature === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    {selectedFeature === index && (
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          {feature.details}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {feature.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {benefit}
                            </div>
                          ))}
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

      {/* Delivery Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Delivery Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of delivery services designed to meet every business need, 
              from last-mile delivery to international freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-4">
                  <type.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600">
                  {type.pricing}
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
              Why Choose Our Logistics Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with Africa's most advanced logistics platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-blue-600">
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
              Trusted by Leading Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experience with our logistics network.
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
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite business tools and platforms for a unified logistics experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 mb-3 group-hover:bg-blue-50 transition-colors duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-12 object-contain mx-auto"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
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
              Get answers to common questions about our logistics network.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our advanced logistics network 
            to optimize their delivery operations and exceed customer expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowWaitlist(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Truck className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
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
                Join Our Logistics Network
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
              description="Be among the first to experience our advanced logistics network."
            />
          </div>
        </div>
      )}
    </>
  )
}

export default LogisticsNetworkPage
