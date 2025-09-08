"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Lightbulb, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ThumbsUp, 
  MessageSquare,
  TrendingUp,
  Users,
  Target,
  Star,
  Filter,
  Search,
  Plus,
  Eye,
  Clock,
  Award,
  Heart,
  Zap,
  Globe,
  Building,
  BookOpen,
  DollarSign,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const IdeasPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState('submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [expandedIdea, setExpandedIdea] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    title: '',
    description: '',
    impact: 'medium',
    targetAudience: '',
    contactPreference: 'email'
  })

  const categories = [
    { id: 'all', name: 'All Ideas', icon: Lightbulb, color: 'gray' },
    { id: 'features', name: 'Feature Requests', icon: Zap, color: 'blue' },
    { id: 'improvements', name: 'Improvements', icon: TrendingUp, color: 'green' },
    { id: 'business', name: 'Business Ideas', icon: Building, color: 'purple' },
    { id: 'partnerships', name: 'Partnerships', icon: Users, color: 'orange' },
    { id: 'community', name: 'Community', icon: Heart, color: 'pink' },
    { id: 'feedback', name: 'General Feedback', icon: MessageSquare, color: 'indigo' }
  ]

  const impactLevels = [
    { value: 'low', label: 'Low Impact', description: 'Nice to have' },
    { value: 'medium', label: 'Medium Impact', description: 'Would be helpful' },
    { value: 'high', label: 'High Impact', description: 'Very important' },
    { value: 'critical', label: 'Critical', description: 'Essential for success' }
  ]

  // Sample ideas data (in a real app, this would come from a database)
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Mobile App for The 100 Program",
      description: "Create a dedicated mobile app for The 100 program participants to track their progress, access resources, and connect with mentors.",
      category: "features",
      impact: "high",
      votes: 45,
      comments: 12,
      status: "under-review",
      author: "Sarah M.",
      date: "2024-01-15",
      targetAudience: "Program participants"
    },
    {
      id: 2,
      title: "AI-Powered Business Plan Generator",
      description: "Develop an AI tool that helps entrepreneurs create comprehensive business plans based on their industry and goals.",
      category: "features",
      impact: "high",
      votes: 38,
      comments: 8,
      status: "planned",
      author: "Michael K.",
      date: "2024-01-12",
      targetAudience: "Entrepreneurs"
    },
    {
      id: 3,
      title: "Rural Connectivity Initiative",
      description: "Partner with telecom companies to improve internet connectivity in rural areas to support digital commerce.",
      category: "partnerships",
      impact: "critical",
      votes: 52,
      comments: 15,
      status: "in-progress",
      author: "Grace W.",
      date: "2024-01-10",
      targetAudience: "Rural communities"
    },
    {
      id: 4,
      title: "Women Entrepreneurship Focus Group",
      description: "Create a dedicated support group and resources specifically for women entrepreneurs in our platform.",
      category: "community",
      impact: "high",
      votes: 41,
      comments: 20,
      status: "implemented",
      author: "Aisha B.",
      date: "2024-01-08",
      targetAudience: "Women entrepreneurs"
    },
    {
      id: 5,
      title: "Offline Mode Improvements",
      description: "Enhance the offline functionality to allow more features to work without internet connection.",
      category: "improvements",
      impact: "medium",
      votes: 29,
      comments: 6,
      status: "under-review",
      author: "David L.",
      date: "2024-01-05",
      targetAudience: "All users"
    }
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate success
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        category: '',
        title: '',
        description: '',
        impact: 'medium',
        targetAudience: '',
        contactPreference: 'email'
      })
    }, 3000)
  }

  const toggleIdea = (id: number) => {
    setExpandedIdea(expandedIdea === id ? null : id)
  }

  const voteOnIdea = (id: number) => {
    setIdeas(ideas.map(idea => 
      idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
    ))
  }

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    switch (sortBy) {
      case 'votes':
        return b.votes - a.votes
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'impact':
        const impactOrder = { critical: 4, high: 3, medium: 2, low: 1 }
        return impactOrder[b.impact as keyof typeof impactOrder] - impactOrder[a.impact as keyof typeof impactOrder]
      default:
        return 0
    }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented': return 'bg-green-100 text-green-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'planned': return 'bg-purple-100 text-purple-700'
      case 'under-review': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'text-red-600'
      case 'high': return 'text-orange-600'
      case 'medium': return 'text-blue-600'
      case 'low': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <>
      <SEOHead
        title="Ideas & Recommendations - Annita LLC"
        description="Share your ideas, suggestions, and feedback to help shape the future of Annita. Submit feature requests, business ideas, and community initiatives."
        keywords={["ideas", "recommendations", "feedback", "feature requests", "suggestions", "community", "innovation", "Annita"]}
        canonical="/ideas"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Your Voice Matters
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Ideas & <span className="text-orange-200">Recommendations</span>
                </h1>
                <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                  Help shape the future of Annita! Share your ideas, suggestions, and feedback. 
                  Together, we can build something amazing for Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'submit', label: 'Submit Idea', icon: Plus },
                { id: 'browse', label: 'Browse Ideas', icon: Eye },
                { id: 'status', label: 'Implementation Status', icon: Clock }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Submit Idea Tab */}
              {activeTab === 'submit' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Share Your <span className="text-orange-600">Idea</span>
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a brilliant idea? We'd love to hear it! Your suggestions help us improve 
                        and innovate for the benefit of all our users.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      {/* Success/Error Messages */}
                      {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <p className="text-green-800">Thank you! Your idea has been submitted successfully. We'll review it and get back to you soon.</p>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <p className="text-red-800">There was an error submitting your idea. Please try again.</p>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Optional - can be anonymous"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Optional - for updates on your idea"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                              <option value="">Select Category</option>
                              <option value="features">Feature Request</option>
                              <option value="improvements">Improvement Suggestion</option>
                              <option value="business">Business Idea</option>
                              <option value="partnerships">Partnership Opportunity</option>
                              <option value="community">Community Initiative</option>
                              <option value="feedback">General Feedback</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Impact Level *</label>
                            <select
                              name="impact"
                              value={formData.impact}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                              {impactLevels.map((level) => (
                                <option key={level.value} value={level.value}>
                                  {level.label} - {level.description}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Idea Title *</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Brief, descriptive title for your idea"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                          <input
                            type="text"
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Who would benefit from this idea?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Describe your idea in detail. What problem does it solve? How would it work? What benefits would it provide?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">How would you like us to contact you about updates?</label>
                          <select
                            name="contactPreference"
                            value={formData.contactPreference}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          >
                            <option value="email">Email updates</option>
                            <option value="phone">Phone call</option>
                            <option value="none">No contact needed</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <Send className="w-5 h-5" />
                          <span>{isSubmitting ? 'Submitting...' : 'Submit Idea'}</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Browse Ideas Tab */}
              {activeTab === 'browse' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
                      Community <span className="text-orange-600">Ideas</span>
                    </h2>
                    
                    {/* Filters and Search */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Search ideas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="recent">Most Recent</option>
                          <option value="votes">Most Popular</option>
                          <option value="impact">Highest Impact</option>
                        </select>
                      </div>
                    </div>

                    {/* Ideas List */}
                    <div className="space-y-4">
                      {sortedIdeas.map((idea, index) => (
                        <motion.div
                          key={idea.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-lg font-semibold text-gray-900">{idea.title}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(idea.status)}`}>
                                    {idea.status.replace('-', ' ')}
                                  </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{idea.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>By {idea.author}</span>
                                  <span>•</span>
                                  <span>{new Date(idea.date).toLocaleDateString()}</span>
                                  <span>•</span>
                                  <span className={getImpactColor(idea.impact)}>
                                    {idea.impact.charAt(0).toUpperCase() + idea.impact.slice(1)} Impact
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                <button
                                  onClick={() => voteOnIdea(idea.id)}
                                  className="flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors duration-200"
                                >
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{idea.votes}</span>
                                </button>
                                <button
                                  onClick={() => toggleIdea(idea.id)}
                                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                  {expandedIdea === idea.id ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>
                            
                            <AnimatePresence>
                              {expandedIdea === idea.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-4 border-t border-gray-100">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                      <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Target Audience</h4>
                                        <p className="text-sm text-gray-600">{idea.targetAudience}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Category</h4>
                                        <p className="text-sm text-gray-600 capitalize">{idea.category.replace('-', ' ')}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                      <div className="flex items-center space-x-1">
                                        <MessageSquare className="w-4 h-4" />
                                        <span>{idea.comments} comments</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Implementation Status Tab */}
              {activeTab === 'status' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Implementation <span className="text-orange-600">Status</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Track the progress of submitted ideas and see what we're working on.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      { status: 'implemented', count: 12, label: 'Implemented', color: 'green' },
                      { status: 'in-progress', count: 8, label: 'In Progress', color: 'blue' },
                      { status: 'planned', count: 15, label: 'Planned', color: 'purple' },
                      { status: 'under-review', count: 23, label: 'Under Review', color: 'yellow' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.status}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                          stat.color === 'green' ? 'bg-green-100' :
                          stat.color === 'blue' ? 'bg-blue-100' :
                          stat.color === 'purple' ? 'bg-purple-100' :
                          'bg-yellow-100'
                        }`}>
                          <Award className={`w-6 h-6 ${
                            stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'blue' ? 'text-blue-600' :
                            stat.color === 'purple' ? 'text-purple-600' :
                            'text-yellow-600'
                          }`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.count}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Implementations</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Women Entrepreneurship Focus Group",
                          description: "Created dedicated support group and resources for women entrepreneurs",
                          date: "2024-01-20",
                          author: "Aisha B."
                        },
                        {
                          title: "Enhanced Search Functionality",
                          description: "Improved search with filters and better results ranking",
                          date: "2024-01-18",
                          author: "David L."
                        },
                        {
                          title: "Mobile Payment Integration",
                          description: "Added support for mobile money payments across Africa",
                          date: "2024-01-15",
                          author: "Michael K."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <span>By {item.author}</span>
                              <span>•</span>
                              <span>Implemented {new Date(item.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Together, We Build the Future
                </h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Your ideas and feedback are the foundation of our innovation. 
                  Join our community of thinkers, creators, and changemakers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveTab('submit')}
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Submit Your Idea
                  </button>
                  <button 
                    onClick={() => setActiveTab('browse')}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Browse Ideas
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IdeasPage
