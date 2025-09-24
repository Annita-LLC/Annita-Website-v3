'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Download, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe, 
  Target,
  BarChart3,
  Calendar,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  Building2,
  Zap,
  ShoppingCart,
  CreditCard,
  Truck,
  MessageSquare,
  Database,
  Mail,
  PieChart,
  TrendingDown,
  UserPlus,
  ShoppingBag,
  Heart,
  Repeat,
  Award,
  Phone,
  Video,
  MapPin,
  X,
  Code
} from 'lucide-react'
import Button from '@/components/ui/Button'

const InvestorsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showContactForm, setShowContactForm] = useState(false)
  const [formType, setFormType] = useState('call') // 'call' or 'message'
  const [documentCategory, setDocumentCategory] = useState('all')

  const companyMetrics = [
    { label: 'Total Sellers', value: '3,000+', icon: Users, color: 'text-blue-500' },
    { label: 'Active MSMEs', value: '800+', icon: ShoppingBag, color: 'text-green-500' },
    { label: 'Total Buyers', value: '1,500+', icon: UserPlus, color: 'text-orange-500' },
    { label: 'Monthly Run Rate', value: '$1,800+', icon: DollarSign, color: 'text-purple-500' }
  ]

  const fundingRounds = [
    {
      round: 'First Fundraising Round',
      date: 'Q1 2025',
      amount: '$100,000',
      equity: '25%',
      valuation: '$400,000',
      investors: ['Open for Investment'],
      stage: 'Active',
      status: 'active'
    }
  ]

  const capTable = [
    { stakeholder: 'Founders', ownership: '75%', shares: '75,000' },
    { stakeholder: 'New Investors', ownership: '25%', shares: '25,000' },
    { stakeholder: 'Total', ownership: '100%', shares: '100,000' }
  ]

  const documents = [
    {
      title: 'Pitch Deck',
      description: 'Comprehensive presentation of Annita\'s vision, market opportunity, and growth strategy',
      icon: FileText,
      size: '15.2 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-pitch-deck.pdf',
      category: 'Investment'
    },
    {
      title: 'Business Plan',
      description: 'Detailed 5-year business plan with financial projections and market analysis',
      icon: FileText,
      size: '8.7 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-business-plan.pdf',
      category: 'Investment'
    },
    {
      title: 'Financial Model',
      description: 'Comprehensive financial projections and unit economics',
      icon: BarChart3,
      size: '5.3 MB',
      format: 'Excel',
      downloadUrl: '/documents/annita-financial-model.xlsx',
      category: 'Financial'
    },
    {
      title: 'Market Analysis',
      description: 'Deep dive into African e-commerce and fintech market opportunity',
      icon: Target,
      size: '12.1 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-market-analysis.pdf',
      category: 'Research'
    },
    {
      title: 'Cap Table',
      description: 'Current ownership structure and equity distribution',
      icon: PieChart,
      size: '2.1 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-cap-table.pdf',
      category: 'Financial'
    },
    {
      title: 'Due Diligence Package',
      description: 'Comprehensive due diligence materials for potential investors',
      icon: FileText,
      size: '25.8 MB',
      format: 'ZIP',
      downloadUrl: '/documents/annita-due-diligence.zip',
      category: 'Investment'
    },
    {
      title: 'Technical Architecture',
      description: 'Detailed technical architecture and platform capabilities',
      icon: Code,
      size: '6.7 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-technical-architecture.pdf',
      category: 'Technical'
    },
    {
      title: 'Legal Structure',
      description: 'Corporate structure, legal entities, and compliance documentation',
      icon: Building2,
      size: '4.2 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-legal-structure.pdf',
      category: 'Legal'
    },
    {
      title: 'Team Profiles',
      description: 'Detailed profiles of leadership team and key personnel',
      icon: Users,
      size: '3.8 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-team-profiles.pdf',
      category: 'Team'
    },
    {
      title: 'Awards & Recognition',
      description: 'Awards, certifications, and industry recognition documentation',
      icon: Award,
      size: '5.5 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-awards-recognition.pdf',
      category: 'Recognition'
    }
  ]

  const useOfFunds = [
    { category: 'Sellers Acquisition & Growth Marketing', percentage: 40, amount: '$40,000', description: 'Customer acquisition and marketing campaigns' },
    { category: 'Talent Acquisition & Team Scaling', percentage: 20, amount: '$20,000', description: 'Hiring key talent and expanding team' },
    { category: 'Product Enhancement & Feature Expansion', percentage: 15, amount: '$15,000', description: 'Platform development and new features' },
    { category: 'Operations & Infrastructure', percentage: 15, amount: '$15,000', description: 'Operational costs and infrastructure' },
    { category: 'Strategic Partnerships & Ecosystem Development', percentage: 5, amount: '$5,000', description: 'Partnership development and ecosystem building' },
    { category: 'Training Programs & Vendor Support', percentage: 5, amount: '$5,000', description: 'Vendor training and support programs' }
  ]

  const financialMetrics = [
    { year: '2021', revenue: '$500', growth: 'MVP launch', growthRate: 'N/A' },
    { year: '2022', revenue: '$2,500', growth: '+400% growth', growthRate: '400%' },
    { year: '2023', revenue: '$8,000', growth: '+220% growth', growthRate: '220%' },
    { year: '2024', revenue: '$17,000', growth: '+112% growth', growthRate: '112%' },
    { year: '2025', revenue: '$30,000-35,000', growth: '+75-105% growth', growthRate: '75-105%' }
  ]

  const tractionMetrics = [
    { metric: 'Total Sellers Onboarded', value: '3,000+', description: 'Since 2021', icon: Users },
    { metric: 'Active Selling MSMEs', value: '800+', description: 'Currently active', icon: ShoppingBag },
    { metric: 'Total Buyers', value: '1,500+', description: 'Registered users', icon: UserPlus },
    { metric: 'Active Paying Buyers', value: '500+', description: 'Monthly active', icon: Heart },
    { metric: 'Avg. Revenue/Seller', value: '$85/year', description: 'Annual revenue per seller', icon: DollarSign },
    { metric: 'Avg. Transaction Value', value: '$50.00', description: 'Per transaction', icon: CreditCard },
    { metric: 'Customer Acquisition Cost', value: '$4.00', description: 'Cost to acquire new customer', icon: Target },
    { metric: 'Repeat Purchase Rate', value: '75%', description: 'Customer retention', icon: Repeat },
    { metric: 'Customer Satisfaction Rate', value: '90%', description: 'User satisfaction score', icon: Award },
    { metric: 'Seller Retention Rate', value: '70%', description: 'Seller retention', icon: TrendingUp }
  ]

  const competitiveAdvantages = [
    {
      title: 'First-Mover Advantage',
      description: 'First comprehensive digital platform in Africa',
      icon: Star
    },
    {
      title: 'Integrated Ecosystem',
      description: 'All-in-one solution reduces customer acquisition costs',
      icon: Building2
    },
    {
      title: 'AI-Powered',
      description: 'Advanced AI capabilities drive efficiency and personalization',
      icon: Zap
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of African market dynamics',
      icon: Globe
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Company Overview' },
    { id: 'financials', label: 'Financials & Metrics' },
    { id: 'funding', label: 'Funding Rounds' },
    { id: 'documents', label: 'Documents' },
    { id: 'team', label: 'Team & Advisors' }
  ]

  const handleDownload = async (url: string, title: string) => {
    try {
      // Track the download in Supabase
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'investor_download',
          document_name: title,
          document_type: getDocumentType(title),
          downloader_email: '', // Will be filled if user is logged in
          downloader_name: '', // Will be filled if user is logged in
          downloader_company: '', // Will be filled if user is logged in
          downloader_role: '' // Will be filled if user is logged in
        })
      })

      if (response.ok) {
        // Create a temporary link and trigger download
        const link = document.createElement('a')
        link.href = url
        link.download = getFileName(title)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        console.log(`Download tracked for ${title}`)
      } else {
        console.error('Failed to track download')
      }
    } catch (error) {
      console.error('Download error:', error)
      // Fallback: just download the file
      const link = document.createElement('a')
      link.href = url
      link.download = getFileName(title)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const getDocumentType = (title: string): string => {
    if (title.toLowerCase().includes('pitch')) return 'pitch_deck'
    if (title.toLowerCase().includes('business plan')) return 'business_plan'
    if (title.toLowerCase().includes('financial')) return 'financial_model'
    if (title.toLowerCase().includes('market')) return 'market_analysis'
    return 'other'
  }

  const getFileName = (title: string): string => {
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    const extension = title.toLowerCase().includes('financial') ? 'xlsx' : 'pdf'
    return `annita-${sanitizedTitle}.${extension}`
  }

  // Get unique categories from documents
  const documentCategories = ['all', ...Array.from(new Set(documents.map(doc => doc.category)))]

  // Filter documents by category
  const filteredDocuments = documentCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === documentCategory)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    // In a real implementation, this would send the data to your backend
    console.log('Form submitted:', data)
    
    // Show success message
    alert(`Thank you for your interest! We'll contact you soon via ${data.contactMethod || 'email'}.`)
    
    // Close the form
    setShowContactForm(false)
  }

  const openContactForm = (type: 'call' | 'message') => {
    setFormType(type)
    setShowContactForm(true)
  }

  const investorsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita",
    "description": "Africa's first all-in-one digital platform empowering MSMEs with innovative solutions",
    "url": "https://www.an-nita.com",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Liberia",
      "addressRegion": "West Africa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "investor relations",
      "email": "annitallc@gmail.com"
    },
    "award": [
      "Orange Social Venture Prize (1st Place)",
      "African Innovation Award"
    ],
    "funding": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "100000"
    }
  }

  return (
    <>
      <SEOHead
        title="Investors - Annita Investment Opportunities"
        description="Explore investment opportunities in Annita, Africa's first all-in-one digital platform. 3,000+ sellers, 1,500+ buyers, 400% revenue growth. First fundraising round: $100,000 for 25% equity at $400,000 valuation. Download pitch deck, business plan, and financial model."
        keywords={[
          'Annita investors',
          'investment opportunities',
          'venture capital',
          'startup funding',
          'African startup',
          'fintech investment',
          'e-commerce investment',
          'digital platform investment',
          'first fundraising round',
          'seed round',
          'pitch deck',
          'business plan',
          'financial model',
          'market analysis',
          'cap table',
          'funding rounds',
          'revenue growth',
          'market opportunity',
          'African market',
          'MSME market',
          'digital transformation',
          'financial projections',
          'unit economics',
          'growth strategy',
          'competitive advantage',
          'market size',
          'TAM SAM SOM',
          'customer acquisition',
          'lifetime value',
          'burn rate',
          'runway',
          'valuation',
          'exit strategy',
          'IPO',
          'acquisition',
          'strategic investors',
          'angel investors',
          'venture capitalists',
          'private equity',
          'investment thesis',
          'due diligence',
          'term sheet',
          'investment deck',
          'financial metrics',
          'KPIs',
          'business metrics',
          'African Continental Free Trade Area',
          'AfCFTA',
          'Liberia investment',
          'West Africa investment',
          'emerging markets',
          'frontier markets',
          'impact investment',
          'social impact',
          'sustainable development'
        ]}
        canonical="/investors"
        ogImage="/investors-og-image.jpg"
        structuredData={investorsStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investment Opportunities
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Investor <span className="text-orange-200">Relations</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Join us in revolutionizing Africa's digital economy through our comprehensive 
                  e-commerce, fintech, and AI platform
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">$400K</div>
                    <div className="text-xs sm:text-sm text-orange-200">Valuation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">25%</div>
                    <div className="text-xs sm:text-sm text-orange-200">Equity</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">Q1</div>
                    <div className="text-xs sm:text-sm text-orange-200">2025</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => handleDownload('/documents/annita-pitch-deck.pdf', 'Pitch Deck')}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download Pitch Deck
                  </button>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Schedule a Call
                  </button>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Investment Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Investment Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Total Valuation</span>
                      <span className="font-semibold text-white">$400,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Equity Available</span>
                      <span className="font-semibold text-white">25%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Investment Round</span>
                      <span className="font-semibold text-white">Q1 2025</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Metrics */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <metric.icon className={`w-8 h-8 mx-auto mb-4 ${metric.color}`} />
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Company Description */}
              <div className="max-w-4xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  About Annita
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Annita is Africa's first all-in-one digital platform, combining e-commerce, fintech, AI, 
                    communication, marketing, and logistics into a single ecosystem. We're empowering MSMEs 
                    across Africa with integrated solutions that drive growth and digital transformation.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Our platform serves over 3,000 sellers and 1,500+ buyers, with a focus on the 
                    rapidly growing African digital economy. We've achieved consistent revenue growth 
                    and are positioned to capture a significant share of the $1.2 trillion African e-commerce market.
                  </p>
                </div>
              </div>

              {/* Competitive Advantages */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Competitive Advantages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {competitiveAdvantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                      <advantage.icon className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {advantage.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Platform Overview */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Platform Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: ShoppingCart, title: 'E-commerce', desc: 'Multi-vendor marketplace' },
                    { icon: CreditCard, title: 'Fintech', desc: 'Digital payments & banking' },
                    { icon: Zap, title: 'AI Solutions', desc: 'Smart business tools' },
                    { icon: Truck, title: 'Logistics', desc: 'Supply chain management' },
                    { icon: MessageSquare, title: 'Communication', desc: 'Marketing & messaging' },
                    { icon: Database, title: 'Analytics', desc: 'Business intelligence' }
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
                    >
                      <service.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Financials & Metrics */}
          {activeTab === 'financials' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Revenue Performance */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Revenue Performance & Projections (2021-2025)
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Year
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Revenue
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Growth Story
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Growth Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {financialMetrics.map((row, index) => (
                          <tr key={row.year} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                              {row.year}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                              {row.revenue}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {row.growth}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {row.growthRate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <strong>Current Monthly Run Rate:</strong> $1,800+ (Q4 2024)
                </div>
              </div>

              {/* Traction Metrics */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Traction Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tractionMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                      <metric.icon className="w-8 h-8 text-orange-500 mb-4" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {metric.metric}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cap Table */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Capitalization Table
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Stakeholder
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Ownership
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Shares
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {capTable.map((row, index) => (
                          <tr key={row.stakeholder} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                              {row.stakeholder}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                              {row.ownership}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {row.shares}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Use of Funds */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Use of Funds ($100,000)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useOfFunds.map((item, index) => (
                    <motion.div
                      key={item.category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.category}
                        </h4>
                        <span className="text-2xl font-bold text-orange-500">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div className="font-medium text-gray-900 dark:text-white mb-1">
                          {item.amount}
                        </div>
                        {item.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Funding Rounds */}
          {activeTab === 'funding' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Funding Rounds
              </h3>
              
              {/* Current Round Details */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    First Fundraising Round
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    We're raising $100,000 for 25% equity at a $400,000 post-money valuation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Option 1 – SAFE (Preferred)</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Instrument:</span>
                        <span className="font-medium">Y Combinator SAFE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Valuation Cap:</span>
                        <span className="font-medium">$400,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Discount:</span>
                        <span className="font-medium">15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Option 2 – Equity</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Equity:</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Investment:</span>
                        <span className="font-medium">$100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Post-money Valuation:</span>
                        <span className="font-medium">$400,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="flex items-center space-x-2 mx-auto"
                  >
                    <span>Express Interest</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Funding Rounds Table */}
              <div className="space-y-6">
                {fundingRounds.map((round, index) => (
                  <motion.div
                    key={round.round}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {round.round}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            round.status === 'completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : round.status === 'active'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {round.stage}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.amount}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Equity:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.equity}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Valuation:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.valuation}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Date:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.date}</div>
                          </div>
                        </div>
                      </div>
                      {round.status === 'active' && (
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <Button
                            variant="gradient"
                            size="sm"
                            className="flex items-center space-x-2"
                          >
                            <span>Join Round</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Investor Documents
                </h3>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {documentCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setDocumentCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        documentCategory === category
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category === 'all' ? 'All Documents' : category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDocuments.map((doc, index) => (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <doc.icon className="w-10 h-10 text-orange-500 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {doc.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {doc.size} • {doc.format}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                            className="flex items-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Team & Advisors */}
          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Leadership Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Christopher O. Fallah',
                    role: 'Founder & CEO',
                    bio: 'Visionary leader with experience in African startups. Led MVP launch and awards wins including Orange Social Venture Prize.',
                    image: '/images/team/ceo-fallah.jpg',
                    initials: 'COF'
                  },
                  {
                    name: 'Lamber Kpukuyou ',
                    role: 'Chief Technology Officer (CTO)',
                    bio: 'Expert in scalable platforms and low-connectivity solutions. Oversees tech architecture for African market needs.',
                    image: '/images/Lamber Kpukuyou (Chief Technology Officer (CTO).jpg',
                    initials: 'LK'
                  },
                  {
                    name: 'Siah Fallah',
                    role: 'Chief Marketing Officer (CMO)',
                    bio: 'Drives marketing strategies and MSME engagement. Focused on growth and customer acquisition across Africa.',
                    image: '/images/team/Siah Fallah(Chief Marketing Officer (CMO).jpeg',
                    initials: 'SF'
                  }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-orange-100 group-hover:border-orange-200 transition-colors duration-300">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{member.initials}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Investor Contact Form */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Investor Relations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us in revolutionizing Africa's digital economy through our comprehensive e-commerce, fintech, and AI platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12"
            >
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Position/Title
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Investment Manager, Partner, etc."
                    />
                  </div>
                </div>

                {/* Investment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Investment Type *
                    </label>
                    <select
                      id="investmentType"
                      name="investmentType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select investment type</option>
                      <option value="angel">Angel Investor</option>
                      <option value="venture-capital">Venture Capital</option>
                      <option value="private-equity">Private Equity</option>
                      <option value="corporate">Corporate Investment</option>
                      <option value="family-office">Family Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Investment Range
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select investment range</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-plus">$1M+</option>
                    </select>
                  </div>
                </div>

                {/* Interest Areas */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'E-commerce & Marketplace',
                      'Fintech & Payments',
                      'AI & Technology',
                      'African Market',
                      'MSME Digitalization',
                      'Logistics & Supply Chain',
                      'Marketing & Advertising',
                      'Data Analytics'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest.toLowerCase().replace(/\s+/g, '-')}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us about your investment goals, timeline, or any specific questions you have..."
                  ></textarea>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: 'email', label: 'Email', icon: Mail },
                      { value: 'phone', label: 'Phone Call', icon: Phone },
                      { value: 'video', label: 'Video Call', icon: Video },
                      { value: 'meeting', label: 'In-Person Meeting', icon: MapPin }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                        />
                        <method.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="flex-1 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Investor Call</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  By submitting this form, you agree to be contacted by our investment team. We respect your privacy and will not share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Invest in Africa's Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Join us in building the digital infrastructure that will power Africa's economic growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="gradient"
              size="lg"
              className="flex items-center space-x-2 bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => openContactForm('call')}
            >
              <span>Schedule Investor Call</span>
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => openContactForm('message')}
            >
              <Mail className="w-5 h-5" />
              <span>Contact Investment Team</span>
            </Button>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formType === 'call' ? 'Schedule Investor Call' : 'Contact Investment Team'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {formType === 'call' 
                      ? 'Let\'s discuss investment opportunities and schedule a call'
                      : 'Send us a message and we\'ll get back to you promptly'
                    }
                  </p>
                </div>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Form */}
              <div className="p-6">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="modalFirstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="modalFirstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="modalLastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="modalLastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="modalEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="modalEmail"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="modalPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modalPhone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="modalCompany" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="modalCompany"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="modalPosition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Position/Title
                      </label>
                      <input
                        type="text"
                        id="modalPosition"
                        name="position"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Investment Manager, Partner, etc."
                      />
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="modalInvestmentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Type *
                      </label>
                      <select
                        id="modalInvestmentType"
                        name="investmentType"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select investment type</option>
                        <option value="angel">Angel Investor</option>
                        <option value="venture-capital">Venture Capital</option>
                        <option value="private-equity">Private Equity</option>
                        <option value="corporate">Corporate Investment</option>
                        <option value="family-office">Family Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modalInvestmentAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Range
                      </label>
                      <select
                        id="modalInvestmentAmount"
                        name="investmentAmount"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select investment range</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-plus">$1M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="modalMessage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {formType === 'call' ? 'Call Details & Preferences' : 'Message'}
                    </label>
                    <textarea
                      id="modalMessage"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder={formType === 'call' 
                        ? "Tell us about your investment goals, preferred call time, or any specific topics you'd like to discuss..."
                        : "Tell us about your investment goals, timeline, or any specific questions you have..."
                      }
                    ></textarea>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: 'email', label: 'Email', icon: Mail },
                        { value: 'phone', label: 'Phone Call', icon: Phone },
                        { value: 'video', label: 'Video Call', icon: Video },
                        { value: 'meeting', label: 'In-Person Meeting', icon: MapPin }
                      ].map((method) => (
                        <label key={method.value} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.value}
                            className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                          />
                          <method.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="flex-1 flex items-center justify-center space-x-2"
                    >
                      {formType === 'call' ? (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Schedule Call</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setShowContactForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to be contacted by our investment team. We respect your privacy and will not share your information with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default InvestorsPage
