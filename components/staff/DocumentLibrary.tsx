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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Document Library</h2>
        <div className="text-sm text-gray-600">
          {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map(category => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          )
        })}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="text-3xl">{getFileIcon(doc.type)}</div>
              <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded">
                {doc.type}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{doc.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doc.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>{doc.size}</span>
              <span>{doc.uploadDate}</span>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No documents found matching your search.</p>
        </div>
      )}
    </div>
  )
}

