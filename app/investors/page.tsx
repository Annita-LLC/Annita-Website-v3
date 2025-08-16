'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
  Mail
} from 'lucide-react'
import Button from '@/components/ui/Button'

const InvestorsPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const companyMetrics = [
    { label: 'Total Users', value: '50K+', icon: Users, color: 'text-blue-500' },
    { label: 'Countries', value: '15+', icon: Globe, color: 'text-green-500' },
    { label: 'Revenue Growth', value: '300%', icon: TrendingUp, color: 'text-orange-500' },
    { label: 'Market Cap', value: '$50M', icon: DollarSign, color: 'text-purple-500' }
  ]

  const fundingRounds = [
    {
      round: 'Seed Round',
      date: 'Q1 2024',
      amount: '$2.5M',
      investors: ['Orange Digital Center', 'Angel Investors'],
      stage: 'Completed',
      status: 'completed'
    },
    {
      round: 'Series A',
      date: 'Q3 2024',
      amount: '$8M',
      investors: ['Venture Capital Firms', 'Strategic Partners'],
      stage: 'In Progress',
      status: 'active'
    },
    {
      round: 'Series B',
      date: 'Q1 2025',
      amount: '$25M',
      investors: ['TBD'],
      stage: 'Planned',
      status: 'planned'
    }
  ]

  const capTable = [
    { stakeholder: 'Founders', ownership: '45%', shares: '4,500,000' },
    { stakeholder: 'Seed Investors', ownership: '25%', shares: '2,500,000' },
    { stakeholder: 'Series A Investors', ownership: '20%', shares: '2,000,000' },
    { stakeholder: 'Employee Stock Options', ownership: '10%', shares: '1,000,000' }
  ]

  const documents = [
    {
      title: 'Pitch Deck',
      description: 'Comprehensive presentation of Annita\'s vision, market opportunity, and growth strategy',
      icon: FileText,
      size: '15.2 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-pitch-deck.pdf'
    },
    {
      title: 'Business Plan',
      description: 'Detailed 5-year business plan with financial projections and market analysis',
      icon: FileText,
      size: '8.7 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-business-plan.pdf'
    },
    {
      title: 'Financial Model',
      description: 'Comprehensive financial projections and unit economics',
      icon: BarChart3,
      size: '5.3 MB',
      format: 'Excel',
      downloadUrl: '/documents/annita-financial-model.xlsx'
    },
    {
      title: 'Market Analysis',
      description: 'Deep dive into African e-commerce and fintech market opportunity',
      icon: Target,
      size: '12.1 MB',
      format: 'PDF',
      downloadUrl: '/documents/annita-market-analysis.pdf'
    }
  ]

  const useOfFunds = [
    { category: 'Product Development', percentage: 40, amount: '$3.2M', description: 'Platform enhancement and new features' },
    { category: 'Market Expansion', percentage: 30, amount: '$2.4M', description: 'Geographic expansion and marketing' },
    { category: 'Team Growth', percentage: 20, amount: '$1.6M', description: 'Hiring key talent and leadership' },
    { category: 'Operations', percentage: 10, amount: '$0.8M', description: 'Infrastructure and operational costs' }
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

  const handleDownload = (url: string, title: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${title} from ${url}`)
    // For demo purposes, we'll just show an alert
    alert(`Download started for ${title}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Investor Relations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              Join us in revolutionizing Africa's digital economy through our comprehensive 
              e-commerce, fintech, and AI platform
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
                onClick={() => handleDownload('/documents/annita-pitch-deck.pdf', 'Pitch Deck')}
                className="flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Pitch Deck</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Call</span>
              </Button>
            </motion.div>
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
                    Our platform serves over 50,000 users across 15+ countries, with a focus on the 
                    rapidly growing African digital economy. We've achieved 300% revenue growth year-over-year 
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
                  Use of Funds (Series A - $8M)
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
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.amount}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Date:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{round.date}</div>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Investors:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {round.investors.join(', ')}
                            </div>
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Investor Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
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
                    bio: 'Serial entrepreneur with 10+ years in fintech and e-commerce',
                    image: '/images/team/ceo.jpg'
                  },
                  {
                    name: 'Sarah Johnson',
                    role: 'CTO',
                    bio: 'Former senior engineer at major tech companies',
                    image: '/images/team/cto.jpg'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'CFO',
                    bio: '15+ years in financial management and fundraising',
                    image: '/images/team/cfo.jpg'
                  }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
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
            >
              <span>Schedule Investor Call</span>
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Investment Team</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InvestorsPage
