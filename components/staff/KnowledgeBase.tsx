'use client'

import { useState } from 'react'
import { BookOpen, Search, FileText, Folder, Download, Plus } from 'lucide-react'

export default function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', icon: Folder },
    { id: 'policies', label: 'Policies', icon: FileText },
    { id: 'procedures', label: 'Procedures', icon: BookOpen },
    { id: 'faqs', label: 'FAQs', icon: FileText },
    { id: 'guides', label: 'Guides', icon: BookOpen },
  ]

  const articles = [
    { id: 1, title: 'Employee Handbook 2024', category: 'policies', views: 125, lastUpdated: '2024-12-01', type: 'PDF' },
    { id: 2, title: 'How to Submit Weekly Reports', category: 'procedures', views: 89, lastUpdated: '2024-11-15', type: 'Article' },
    { id: 3, title: 'Leave Request Process', category: 'procedures', views: 67, lastUpdated: '2024-10-20', type: 'Article' },
    { id: 4, title: 'Frequently Asked Questions', category: 'faqs', views: 203, lastUpdated: '2024-12-10', type: 'Article' },
    { id: 5, title: 'Onboarding Guide for New Employees', category: 'guides', views: 45, lastUpdated: '2024-09-05', type: 'Guide' },
    { id: 6, title: 'IT Support Best Practices', category: 'guides', views: 78, lastUpdated: '2024-11-30', type: 'Guide' },
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Knowledge Base</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Company wiki and resources</p>
        </div>
        <button
          onClick={() => alert('Create New Article\n\nIn production, this would open a form to create a new article.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Article</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search knowledge base..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-1.5 sm:space-x-2 overflow-x-auto scrollbar-hide pb-1 -mb-1 -mx-1 px-1">
        {categories.map(category => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg whitespace-nowrap transition-colors touch-manipulation flex-shrink-0 ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-[10px] sm:text-sm font-medium">{category.label}</span>
            </button>
          )
        })}
      </div>

      {/* Articles List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">{article.title}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="px-2 py-0.5 bg-gray-100 rounded">{article.category}</span>
                  <span>{article.type}</span>
                  <span>{article.views} views</span>
                  <span>Updated: {article.lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => alert(`Viewing ${article.title}\n\nIn production, this would show the full article.`)}
                className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
              >
                View Article
              </button>
              {article.type === 'PDF' && (
                <button
                  onClick={() => alert(`Downloading ${article.title}\n\nIn production, this would download the PDF.`)}
                  className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
          <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
          <p className="text-sm sm:text-base text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}
