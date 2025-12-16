'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, Clock, FileText, Users, ShoppingCart, CreditCard, Truck, Zap } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  href: string
  category: string
  icon: any
  isExternal?: boolean
}

const searchData: SearchResult[] = [
  // Company
  { id: 'about', title: 'About Us', description: 'Our story and mission', href: '/about', category: 'Company', icon: Users },
  { id: 'investors', title: 'Investors', description: 'Investment opportunities and company info', href: '/investors', category: 'Company', icon: FileText },
  { id: 'awards', title: 'Awards & Recognition', description: 'Our achievements and recognition', href: '/awards', category: 'Company', icon: FileText },
  { id: 'careers', title: 'Careers', description: 'Join our team', href: '/careers', category: 'Company', icon: Users },
  { id: 'apply', title: 'Apply Now', description: 'Submit your application', href: '/careers/apply', category: 'Company', icon: Users },
  { id: 'partners', title: 'Partners', description: 'Partner with Annita', href: '/partners', category: 'Company', icon: Users },
  { id: 'partner-apply', title: 'Partner Application', description: 'Apply to become a partner', href: '/partners/apply', category: 'Company', icon: Users },
  { id: 'ideas', title: 'Ideas & Tips', description: 'Share ideas and feedback', href: '/ideas', category: 'Company', icon: FileText },

  // Support
  { id: 'contact', title: 'Contact Us', description: 'Get in touch with our team', href: '/contact', category: 'Support', icon: Users },
  { id: 'contact-sales', title: 'Contact Sales', description: 'Talk to our business development team', href: '/contact-sales', category: 'Support', icon: Users },

  // Legal
  { id: 'privacy', title: 'Privacy Policy', description: 'How we handle your data', href: '/privacy', category: 'Legal', icon: FileText },
  { id: 'terms', title: 'Terms of Service', description: 'Our terms and conditions', href: '/terms', category: 'Legal', icon: FileText },
  { id: 'cookies', title: 'Cookie Policy', description: 'Learn about cookies', href: '/cookies', category: 'Legal', icon: FileText },
]

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Handle search
  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 8)) // Limit to 8 results
    } else {
      setResults([])
    }
    setSelectedIndex(0)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => Math.max(prev - 1, 0))
          break
        case 'Enter':
          e.preventDefault()
          if (results[selectedIndex]) {
            handleResultClick(results[selectedIndex])
          }
          break
        case 'Escape':
          setIsOpen(false)
          setQuery('')
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // Handle global keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    }

    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const newRecent = [result.title, ...recentSearches.filter(s => s !== result.title)].slice(0, 5)
    setRecentSearches(newRecent)
    localStorage.setItem('recent-searches', JSON.stringify(newRecent))

    // Navigate
    if (result.isExternal) {
      window.open(result.href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = result.href
    }

    setIsOpen(false)
    setQuery('')
  }

  const handleRecentClick = (search: string) => {
    setQuery(search)
    inputRef.current?.focus()
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recent-searches')
  }

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-2 sm:px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 min-w-0"
      >
        <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
        <span className="hidden sm:block text-sm text-gray-500">Search...</span>
        <kbd className="hidden lg:inline-flex items-center px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-500">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="fixed top-16 left-0 right-0 flex justify-center p-4 z-[60] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto w-full max-w-2xl lg:max-w-3xl"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden w-full max-h-[85vh] sm:max-h-[90vh]">
                {/* Search Input */}
                <div className="flex items-center px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for features, pages, or services..."
                    className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-base sm:text-sm"
                    autoComplete="off"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Search Results */}
                <div ref={resultsRef} className="max-h-80 sm:max-h-96 overflow-y-auto">
                  {query.trim() ? (
                    results.length > 0 ? (
                      <div className="py-2">
                        {results.map((result, index) => {
                          const Icon = result.icon
                          return (
                            <motion.div
                              key={result.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <button
                                onClick={() => handleResultClick(result)}
                                className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 sm:py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors touch-manipulation ${
                                  index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
                                }`}
                              >
                                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex-shrink-0">
                                  <Icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">
                                    {result.title}
                                  </div>
                                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                                    {result.description}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                  <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hidden sm:inline">
                                    {result.category}
                                  </span>
                                  <ArrowRight className="w-4 h-4 text-gray-400" />
                                </div>
                              </button>
                            </motion.div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="py-6 sm:py-8 text-center px-4">
                        <Search className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-3 sm:mb-4" />
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">No results found for "{query}"</p>
                      </div>
                    )
                  ) : (
                    <div className="py-4">
                      {recentSearches.length > 0 && (
                        <div className="px-3 sm:px-4 py-2">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</span>
                            </div>
                            <button
                              onClick={clearRecentSearches}
                              className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 touch-manipulation"
                            >
                              Clear
                            </button>
                          </div>
                          <div className="space-y-1">
                            {recentSearches.map((search, index) => (
                              <button
                                key={index}
                                onClick={() => handleRecentClick(search)}
                                className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors touch-manipulation"
                              >
                                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{search}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="px-3 sm:px-4 py-2">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Searches</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {['AnnitaPay', 'Marketplace', 'AI Assistant', 'Logistics'].map((term) => (
                            <button
                              key={term}
                              onClick={() => handleRecentClick(term)}
                              className="text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors touch-manipulation"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-3 sm:px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <span className="hidden sm:inline">↑↓ Navigate</span>
                      <span className="hidden sm:inline">↵ Select</span>
                      <span>Esc Close</span>
                    </div>
                    <span className="hidden sm:inline">⌘K to search</span>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
