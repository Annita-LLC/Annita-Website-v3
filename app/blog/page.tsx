import { Metadata } from 'next'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  Tag,
  Clock,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annita Blog - Insights for African Businesses',
  description: 'Stay updated with the latest insights, tips, and stories about African business growth, digital transformation, and MSME success.',
}

const BlogPage = () => {
  const featuredPosts = [
    {
      title: 'The Future of E-commerce in Africa: Trends to Watch in 2025',
      excerpt: 'Discover the key trends shaping the future of e-commerce across Africa, from mobile-first strategies to cross-border trade opportunities.',
      author: 'Christopher O. Fallah',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'E-commerce',
      image: '/images/blog/Annita is now on Mansa.jpg',
      featured: true
    },
    {
      title: 'How MSMEs Can Leverage Digital Payments for Growth',
      excerpt: 'Learn how small and medium enterprises can use digital payment solutions to expand their customer base and increase revenue.',
      author: 'Emmanuel Z. Weh',
      date: 'December 12, 2024',
      readTime: '4 min read',
      category: 'Fintech',
      image: '/images/blog/490462987_3858604724452239_358892522577591280_n.jpg'
    },
    {
      title: 'Building Trust in African Digital Marketplaces',
      excerpt: 'Explore strategies for building customer trust in digital marketplaces, from secure payments to transparent business practices.',
      author: 'Siah Fallah',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Business',
      image: '/images/blog/491356901_3863347220644656_7471010603430010476_n.jpg'
    }
  ]

  const recentPosts = [
    {
      title: 'Cross-Border Trade: Opportunities Under AfCFTA',
      excerpt: 'Understanding the African Continental Free Trade Area and how businesses can benefit from cross-border opportunities.',
      author: 'Victor Coleman',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Trade',
      image: '/images/blog/501399670_3906271166352261_372809238330330623_n.jpg'
    },
    {
      title: 'Mobile-First Marketing Strategies for African Businesses',
      excerpt: 'Effective marketing strategies tailored for mobile-first African consumers and businesses.',
      author: 'Lamber Kpukuyou',
      date: 'December 5, 2024',
      readTime: '4 min read',
      category: 'Marketing',
      image: '/images/blog/market1.jpg'
    },
    {
      title: 'Logistics Solutions for Rural Business Growth',
      excerpt: 'How innovative logistics solutions are enabling rural businesses to reach urban markets and grow their customer base.',
      author: 'Christopher O. Fallah',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'Logistics',
      image: '/images/blog/market2.jpg'
    },
    {
      title: 'AI-Powered Analytics for African MSMEs',
      excerpt: 'How artificial intelligence is helping small businesses make data-driven decisions and optimize their operations.',
      author: 'Emmanuel Z. Weh',
      date: 'November 30, 2024',
      readTime: '6 min read',
      category: 'Technology',
      image: '/images/blog/istockphoto-2154161272-612x612.jpg'
    },
    {
      title: 'Financial Inclusion: Bridging the Gap in Africa',
      excerpt: 'The role of fintech in promoting financial inclusion and empowering underserved communities across Africa.',
      author: 'Siah Fallah',
      date: 'November 28, 2024',
      readTime: '5 min read',
      category: 'Fintech',
      image: '/images/blog/Cross boarder pauyment.jpeg'
    },
    {
      title: 'Digital Transformation Success Stories from Africa',
      excerpt: 'Real stories of African businesses that have successfully transformed their operations through digital technology.',
      author: 'Victor Coleman',
      date: 'November 25, 2024',
      readTime: '8 min read',
      category: 'Success Stories',
      image: '/images/blog/group-diverse-colleagues-collaborating-project-conference-room_126745-3893.avif'
    }
  ]

  const categories = [
    'All', 'E-commerce', 'Fintech', 'Business', 'Trade', 'Marketing', 'Logistics', 'Technology', 'Success Stories'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita Blog
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Insights, tips, and stories to help African businesses grow and succeed 
              in the digital economy
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest insights and analysis on African business growth, 
              digital transformation, and MSME success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-blue-600 text-4xl font-bold">📊</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights, tips, and success stories 
              from across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-600 text-2xl">📈</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform flex items-center text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 group">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tips, and success stories 
              delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
