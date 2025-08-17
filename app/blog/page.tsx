"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: 'all', label: 'All Posts', count: 8 },
    { id: 'tech', label: 'Technology', count: 3 },
    { id: 'business', label: 'Business', count: 2 },
    { id: 'community', label: 'Community', count: 2 },
    { id: 'updates', label: 'Updates', count: 1 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Payments in Africa: Annita's Vision",
      excerpt: "Discover how Annita is revolutionizing digital payments across Africa, making financial services accessible to millions.",
      author: "Sarah Johnson",
      authorRole: "CEO & Founder",
      authorImage: "/images/blog/author-sarah.jpg",
      category: "tech",
      image: "/images/blog/digital-payments-africa.jpg",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      featured: true,
      views: 15420
    },
    {
      id: 2,
      title: "The 100 Initiative: Empowering Liberia's Next Generation",
      excerpt: "An in-depth look at our flagship youth empowerment program and how it's creating opportunities for young Liberians.",
      author: "Michael Chen",
      authorRole: "Head of Community Development",
      authorImage: "/images/blog/author-michael.jpg",
      category: "community",
      image: "/images/blog/the-100-initiative.jpg",
      publishDate: "March 10, 2024",
      readTime: "6 min read",
      featured: true,
      views: 12850
    },
    {
      id: 3,
      title: "Building a Sustainable Tech Ecosystem in West Africa",
      excerpt: "How Annita is working with local partners to create a sustainable technology ecosystem that benefits everyone.",
      author: "Aisha Kamara",
      authorRole: "Director of Partnerships",
      authorImage: "/images/blog/author-aisha.jpg",
      category: "business",
      image: "/images/blog/tech-ecosystem.jpg",
      publishDate: "March 5, 2024",
      readTime: "7 min read",
      featured: false,
      views: 9870
    },
    {
      id: 4,
      title: "AnnitaPay: A Deep Dive into Our Payment Platform",
      excerpt: "Technical insights into how AnnitaPay works, its security features, and how it's helping businesses grow.",
      author: "David Osei",
      authorRole: "CTO",
      authorImage: "/images/blog/author-david.jpg",
      category: "tech",
      image: "/images/blog/annitapay-deep-dive.jpg",
      publishDate: "February 28, 2024",
      readTime: "10 min read",
      featured: false,
      views: 11200
    },
    {
      id: 5,
      title: "Customer Success Stories: From Small Business to Market Leader",
      excerpt: "Real stories from businesses that have transformed their operations using Annita's digital tools.",
      author: "Fatima Diallo",
      authorRole: "Customer Success Manager",
      authorImage: "/images/blog/author-fatima.jpg",
      category: "business",
      image: "/images/blog/customer-success.jpg",
      publishDate: "February 20, 2024",
      readTime: "5 min read",
      featured: false,
      views: 8650
    },
    {
      id: 6,
      title: "The Role of AI in Transforming African Businesses",
      excerpt: "Exploring how artificial intelligence is being integrated into African business operations.",
      author: "Kwame Asante",
      authorRole: "AI Research Lead",
      authorImage: "/images/blog/author-kwame.jpg",
      category: "tech",
      image: "/images/blog/ai-african-businesses.jpg",
      publishDate: "February 15, 2024",
      readTime: "9 min read",
      featured: false,
      views: 13400
    },
    {
      id: 7,
      title: "Community Impact: Digital Literacy Programs in Rural Areas",
      excerpt: "How our digital literacy initiatives are bridging the technology gap in rural communities.",
      author: "Grace Mwangi",
      authorRole: "Community Outreach Director",
      authorImage: "/images/blog/author-grace.jpg",
      category: "community",
      image: "/images/blog/digital-literacy-rural.jpg",
      publishDate: "February 10, 2024",
      readTime: "6 min read",
      featured: false,
      views: 7230
    },
    {
      id: 8,
      title: "Annita's Q4 2023 Performance Report",
      excerpt: "A comprehensive overview of our achievements, growth metrics, and strategic initiatives.",
      author: "Sarah Johnson",
      authorRole: "CEO & Founder",
      authorImage: "/images/blog/author-sarah.jpg",
      category: "updates",
      image: "/images/blog/q4-performance.jpg",
      publishDate: "February 5, 2024",
      readTime: "4 min read",
      featured: false,
      views: 15600
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <SEOHead
        title="Blog - Annita LLC"
        description="Insights, updates, and stories from Annita - Africa's leading digital platform."
        keywords={[
          'blog',
          'articles',
          'tech news',
          'business insights',
          'Africa',
          'digital transformation',
          'blog posts',
          'tech articles',
          'business articles',
          'industry insights',
          'technology insights',
          'business news',
          'tech insights',
          'digital insights',
          'African tech',
          'Liberia tech',
          'West Africa tech',
          'business transformation',
          'digital business',
          'tech business',
          'business technology',
          'digital innovation',
          'tech innovation',
          'business innovation',
          'digital trends',
          'tech trends',
          'business trends',
          'digital strategy',
          'tech strategy',
          'business strategy'
        ]}
        canonical="/blog"
        ogImage="/images/blog/digital-payments-africa.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Annita <span className="text-orange-200">Blog</span>
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Insights, updates, and stories from Africa's leading digital platform
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Featured <span className="text-orange-600">Articles</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="text-orange-600">Articles</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.publishDate}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage
