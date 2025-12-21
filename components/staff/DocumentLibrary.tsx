'use client'

import { useState } from 'react'
import { FileText, Download, Search, Folder, File, Book, Shield } from 'lucide-react'

export default function DocumentLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const documents = [
    {
      id: 1,
      name: 'Employee Handbook 2024',
      category: 'policies',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '2024-12-01',
      description: 'Complete employee handbook with company policies and procedures'
    },
    {
      id: 2,
      name: 'HR Policies & Procedures',
      category: 'policies',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2024-12-10',
      description: 'Human resources policies and procedures guide'
    },
    {
      id: 3,
      name: 'Weekly Report Template',
      category: 'templates',
      type: 'DOCX',
      size: '45 KB',
      uploadDate: '2024-11-15',
      description: 'Template for weekly work activity reports'
    },
    {
      id: 4,
      name: 'Leave Request Form',
      category: 'forms',
      type: 'PDF',
      size: '120 KB',
      uploadDate: '2024-11-20',
      description: 'Official leave request form'
    },
    {
      id: 5,
      name: 'Company Code of Conduct',
      category: 'policies',
      type: 'PDF',
      size: '950 KB',
      uploadDate: '2024-12-05',
      description: 'Company code of conduct and ethics guidelines'
    },
    {
      id: 6,
      name: 'Expense Report Template',
      category: 'templates',
      type: 'XLSX',
      size: '85 KB',
      uploadDate: '2024-11-25',
      description: 'Template for expense reporting'
    },
  ]

  const categories = [
    { id: 'all', label: 'All Documents', icon: Folder },
    { id: 'policies', label: 'Policies', icon: Shield },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'forms', label: 'Forms', icon: File },
    { id: 'guides', label: 'Guides', icon: Book },
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'PDF': return '📄'
      case 'DOCX': return '📝'
      case 'XLSX': return '📊'
      default: return '📄'
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Document Library</h2>
        <div className="text-xs sm:text-sm text-gray-600">
          {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search documents..."
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
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1 -mb-1">
        {categories.map(category => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap transition-colors touch-manipulation ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{category.label}</span>
            </button>
          )
        })}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="text-2xl sm:text-3xl">{getFileIcon(doc.type)}</div>
              <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded flex-shrink-0">
                {doc.type}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2 break-words">{doc.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">{doc.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3 sm:mb-4">
              <span>{doc.size}</span>
              <span>{doc.uploadDate}</span>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 text-xs sm:text-sm font-medium touch-manipulation">
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-8 sm:py-12 bg-white rounded-lg border border-gray-200">
          <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-600">No documents found matching your search.</p>
        </div>
      )}
    </div>
  )
}

