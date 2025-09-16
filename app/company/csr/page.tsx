"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Heart, 
  Users, 
  Globe, 
  BookOpen, 
  DollarSign, 
  Target, 
  Award, 
  Lightbulb,
  TreePine,
  Shield,
  GraduationCap,
  Building,
  Zap,
  Star,
  Users2,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Filter,
  Search,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus
} from 'lucide-react'

const CSRPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('current')

  const currentInitiatives = [
    {
      icon: Users,
      title: "The 100 Youth Empowerment Program",
      description: "Comprehensive six-month training program for 100 Liberian youths in business skills, marketing, and mentorship",
      detailedDescription: "This flagship program will provide intensive training in entrepreneurship, digital marketing, financial literacy, and leadership skills. Participants will receive mentorship from industry experts, access to seed funding, and ongoing support to launch their own businesses.",
      status: "Starting 2026",
      impact: "100 youths annually",
      progress: 0,
      duration: "6 months",
      partners: ["Ministry of Youth", "UNDP", "Local NGOs"],
      outcomes: ["Business plan development", "Digital marketing skills", "Financial literacy", "Leadership training"],
      color: "orange",
      category: "youth",
      location: "Monrovia, Liberia"
    },
    {
      icon: BookOpen,
      title: "Digital Skills Training",
      description: "Providing digital literacy and technology training to underserved communities across Liberia",
      detailedDescription: "Our digital skills program will focus on practical computer literacy, internet usage, online safety, and basic programming. We will provide free access to computers and internet connectivity in community centers across Liberia.",
      status: "Starting 2026",
      impact: "500+ individuals to be trained",
      progress: 0,
      duration: "3 months",
      partners: ["Community Centers", "Local Schools", "Tech Companies"],
      outcomes: ["Basic computer skills", "Internet literacy", "Online safety", "Digital communication"],
      color: "blue",
      category: "education",
      location: "Nationwide, Liberia"
    },
    {
      icon: DollarSign,
      title: "MSME Support Program",
      description: "Supporting micro, small, and medium enterprises with digital tools and business development resources",
      detailedDescription: "We provide comprehensive support to MSMEs including access to our digital platform, business development training, financial advisory services, and networking opportunities with other entrepreneurs.",
      status: "Active",
      impact: "3,000+ businesses supported",
      progress: 85,
      duration: "Ongoing",
      partners: ["Chamber of Commerce", "Banking Partners", "Government Agencies"],
      outcomes: ["Digital platform access", "Business growth", "Increased revenue", "Market expansion"],
      color: "green",
      category: "business",
      location: "West Africa"
    },
    {
      icon: Globe,
      title: "Cross-Border Trade Facilitation",
      description: "Enabling African MSMEs to access regional and international markets through our platform",
      detailedDescription: "Our platform connects African businesses with global markets, providing logistics support, payment processing, and regulatory compliance assistance. We help businesses navigate international trade requirements and expand their reach.",
      status: "Active",
      impact: "2 African countries",
      progress: 90,
      duration: "Ongoing",
      partners: ["African Union", "Regional Trade Bodies", "Logistics Companies"],
      outcomes: ["Market access", "Trade facilitation", "Revenue growth", "International partnerships"],
      color: "purple",
      category: "trade",
      location: "Pan-African"
    }
  ]

  const plannedInitiatives = [
    {
      icon: GraduationCap,
      title: "Annita Academy",
      description: "Comprehensive online learning platform offering business, technology, and entrepreneurship courses",
      timeline: "2025-2026",
      target: "10,000+ learners across Africa",
      color: "indigo"
    },
    {
      icon: TreePine,
      title: "Green Business Initiative",
      description: "Supporting environmentally sustainable businesses and promoting green entrepreneurship",
      timeline: "2025-2027",
      target: "500+ green businesses",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Women Entrepreneurship Program",
      description: "Dedicated support program for women entrepreneurs with mentorship, funding, and networking opportunities",
      timeline: "2025-2026",
      target: "1,000+ women entrepreneurs",
      color: "pink"
    },
    {
      icon: Building,
      title: "Rural Development Initiative",
      description: "Bringing digital commerce and business opportunities to rural communities across Africa",
      timeline: "2026-2028",
      target: "100+ rural communities",
      color: "teal"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hubs",
      description: "Establishing innovation centers in major African cities to support tech startups and entrepreneurs",
      timeline: "2026-2030",
      target: "10+ innovation hubs",
      color: "yellow"
    },
    {
      icon: Heart,
      title: "Community Health Initiative",
      description: "Supporting healthcare access and wellness programs in underserved communities",
      timeline: "2027-2030",
      target: "50+ communities",
      color: "red"
    }
  ]

  const impactMetrics = [
    {
      icon: Users,
      title: "People Impacted",
      value: "10,000+",
      description: "Individuals directly supported through our programs"
    },
    {
      icon: Building,
      title: "Businesses Supported",
      value: "3,000+",
      description: "MSMEs empowered through our platform"
    },
    {
      icon: Globe,
      title: "Countries Reached",
      value: "2",
      description: "African nations with active programs"
    },
    {
      icon: Users,
      title: "Communities Served",
      value: "10",
      description: "Local communities empowered through our programs"
    }
  ]

  const focusAreas = [
    {
      icon: Target,
      title: "Youth Development",
      description: "Empowering the next generation of African leaders through education, mentorship, and opportunity creation"
    },
    {
      icon: TrendingUp,
      title: "Economic Inclusion",
      description: "Ensuring all Africans have access to economic opportunities and digital commerce"
    },
    {
      icon: Star,
      title: "Innovation & Technology",
      description: "Promoting technological advancement and digital transformation across Africa"
    },
    {
      icon: Users2,
      title: "Community Building",
      description: "Fostering strong, connected communities that support each other's growth and development"
    }
  ]


  const annualReports = [
    {
      year: "2024",
      title: "Annual Impact Report 2024",
      description: "Comprehensive overview of our social impact initiatives and achievements",
      downloadUrl: "/documents/csr-report-2024.pdf",
      highlights: ["10,000+ people impacted", "$2M+ economic value generated", "15+ countries reached"]
    },
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Our first full year of operations and impact measurement",
      downloadUrl: "/documents/csr-report-2023.pdf",
      highlights: ["5,000+ people impacted", "$1M+ economic value generated", "8+ countries reached"]
    }
  ]

  const filterOptions = [
    { value: 'all', label: 'All Programs' },
    { value: 'youth', label: 'Youth Development' },
    { value: 'education', label: 'Education' },
    { value: 'business', label: 'Business Support' },
    { value: 'trade', label: 'Trade Facilitation' }
  ]

  return (
    <>
      <SEOHead
        title="Corporate Social Responsibility - Annita LLC"
        description="Learn about Annita's commitment to social impact across Liberia and Africa. Discover our current initiatives and future plans for youth empowerment, economic inclusion, and community development."
        keywords={["CSR", "corporate social responsibility", "social impact", "youth empowerment", "Africa", "Liberia", "community development", "economic inclusion"]}
        canonical="/company/csr"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" ref={ref}>
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
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
              >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Making a Difference Across Africa
                </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Corporate Social <span className="text-orange-200">Responsibility</span>
                </h1>
                  <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  At Annita, we believe in creating positive change that extends far beyond business success. 
                  Our commitment to social impact drives everything we do across Liberia and Africa.
                </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold">10,000+</div>
                      <div className="text-xs sm:text-sm text-orange-200">Lives Impacted</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold">2</div>
                      <div className="text-xs sm:text-sm text-orange-200">Countries</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => window.open('/contact-us?subject=CSR%20Volunteer%20Application', '_blank')}
                      className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                    >
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Volunteer With Us
                    </button>
                    <button 
                      onClick={() => window.open('/documents/csr-report-2024.pdf', '_blank')}
                      className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Download Report
                    </button>
                  </div>
                </motion.div>

                {/* Right Column - Interactive Elements */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Impact Visualization */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Our Impact in Numbers</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {impactMetrics.slice(0, 4).map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <metric.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                            <span className="text-xs sm:text-sm">{metric.title}</span>
                          </div>
                          <span className="font-bold text-sm sm:text-lg">{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Impact <span className="text-orange-600">So Far</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Through our various initiatives, we've made a meaningful difference in the lives of thousands across Africa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{metric.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Metrics Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Program Success Rate</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
                    <div className="text-sm text-gray-600">Participant Satisfaction</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Goal Achievement</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
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
                  Our <span className="text-orange-600">Focus Areas</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We concentrate our efforts on four key areas that drive sustainable social impact across Africa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Initiatives */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Current <span className="text-orange-600">Initiatives</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These are the programs and initiatives we're actively running to create positive change.
                </p>
              </motion.div>

              {/* Search and Filter Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 p-6 rounded-2xl">
                  {/* Search Bar */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search initiatives..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  {/* Filter Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {currentInitiatives
                  .filter(initiative => 
                    (selectedFilter === 'all' || initiative.category === selectedFilter) &&
                    (searchTerm === '' || 
                      initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      initiative.description.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`p-6 lg:p-8 ${
                      initiative.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100' :
                      initiative.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                      initiative.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                      'bg-gradient-to-br from-purple-50 to-purple-100'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          initiative.color === 'orange' ? 'bg-orange-600' :
                          initiative.color === 'blue' ? 'bg-blue-600' :
                          initiative.color === 'green' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}>
                          <initiative.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-tight">{initiative.title}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                  initiative.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                }`}>
                                  {initiative.status}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed">{initiative.description}</p>
                            </div>
                            <button
                              onClick={() => setExpandedInitiative(expandedInitiative === index ? null : index)}
                              className="ml-2 p-2 hover:bg-white/50 rounded-lg transition-colors duration-200 flex-shrink-0"
                            >
                              {expandedInitiative === index ? (
                                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                              ) : (
                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                              )}
                            </button>
                          </div>

                          {/* Basic Info */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                            <div className="flex items-center text-xs sm:text-sm text-gray-600">
                              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              <span className="font-medium truncate">{initiative.impact}</span>
                            </div>
                            <div className="flex items-center text-xs sm:text-sm text-gray-600">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              <span className="truncate">{initiative.location}</span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{initiative.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                              <div 
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-1000 ${
                                  initiative.color === 'orange' ? 'bg-orange-600' :
                                  initiative.color === 'blue' ? 'bg-blue-600' :
                                  initiative.color === 'green' ? 'bg-green-600' :
                                  'bg-purple-600'
                                }`}
                                style={{ width: `${initiative.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Expanded Details */}
                          {expandedInitiative === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 pt-4 mt-4"
                            >
                              <p className="text-gray-700 text-sm mb-4">{initiative.detailedDescription}</p>
                              
                              <div className="mb-4">
                                <div className="text-sm font-medium text-gray-900 mb-1">Duration</div>
                                <div className="text-sm text-gray-600">{initiative.duration}</div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm font-medium text-gray-900 mb-2">Key Outcomes</div>
                                <div className="flex flex-wrap gap-2">
                                  {initiative.outcomes.map((outcome, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-700">
                                      {outcome}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <div className="text-sm font-medium text-gray-900 mb-2">Partners</div>
                                <div className="flex flex-wrap gap-2">
                                  {initiative.partners.map((partner, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-700">
                                      {partner}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Planned Initiatives */}
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
                  Future <span className="text-orange-600">Plans</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our ambitious roadmap for expanding our social impact across Africa in the coming years.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {plannedInitiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`p-6 lg:p-8 ${
                      initiative.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100' :
                      initiative.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100' :
                      initiative.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100' :
                      initiative.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100' :
                      initiative.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' :
                      'bg-gradient-to-br from-red-50 to-red-100'
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        initiative.color === 'indigo' ? 'bg-indigo-600' :
                        initiative.color === 'emerald' ? 'bg-emerald-600' :
                        initiative.color === 'pink' ? 'bg-pink-600' :
                        initiative.color === 'teal' ? 'bg-teal-600' :
                        initiative.color === 'yellow' ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}>
                        <initiative.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{initiative.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{initiative.timeline}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Target className="w-4 h-4 mr-2" />
                          <span>{initiative.target}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Annual <span className="text-orange-600">Reports</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Download our comprehensive impact reports to learn more about our achievements and future plans.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {annualReports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm font-medium text-orange-600 mb-1">{report.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{report.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 mb-2">Key Highlights</div>
                      <div className="space-y-1">
                        {report.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => window.open(report.downloadUrl, '_blank')}
                      className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Report
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Main CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Join Us in Making a <span className="text-orange-200">Difference</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-orange-100 mb-8 leading-relaxed">
                  Together, we can create lasting positive change across Africa. 
                  Whether you're an individual, organization, or business, there are many ways to get involved.
                </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => window.open('/contact-us?subject=CSR%20Partnership%20Inquiry', '_blank')}
                      className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <Users2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      CSR Partnership
                    </button>
                    <button 
                      onClick={() => window.open('/contact-us?subject=CSR%20Donation%20Inquiry', '_blank')}
                      className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Support Our Mission
                    </button>
                  </div>
              </motion.div>

                {/* Right Column - Contact Options */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">Get Involved</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Volunteer</div>
                        <div className="text-sm text-orange-200">Share your skills and time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Spread the Word</div>
                        <div className="text-sm text-orange-200">Help us reach more people</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Corporate Partnership</div>
                        <div className="text-sm text-orange-200">Scale impact together</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-sm text-orange-200 mb-2">Ready to make an impact?</div>
                      <button 
                        onClick={() => window.open('/contact-us?subject=CSR%20Inquiry', '_blank')}
                        className="w-full bg-orange-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        Contact Our CSR Team
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CSRPage
