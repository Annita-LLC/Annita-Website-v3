import { Metadata } from 'next'
import { 
  FileText, 
  Code, 
  BookOpen, 
  Video, 
  Download, 
  Search,
  ArrowRight,
  Play,
  Users,
  Settings,
  Globe,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Documentation - Annita Developer Resources',
  description: 'Comprehensive documentation, API references, and developer guides for integrating with Annita\'s platform.',
}

const DocumentationPage = () => {
  const docCategories = [
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints',
      articles: 45,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new developers',
      articles: 12,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials for different platforms',
      articles: 18,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'SDKs & Libraries',
      description: 'Official SDKs and client libraries for multiple languages',
      articles: 8,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Best Practices',
      description: 'Security, performance, and development best practices',
      articles: 15,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Troubleshooting',
      description: 'Common issues, error codes, and debugging guides',
      articles: 22,
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const quickStartGuides = [
    {
      title: 'Set up your first integration',
      description: 'Complete guide to integrating AnnitaPay in your application',
      time: '15 min',
      difficulty: 'Beginner',
      icon: Play
    },
    {
      title: 'Build a marketplace app',
      description: 'Create a custom marketplace using our APIs',
      time: '30 min',
      difficulty: 'Intermediate',
      icon: Globe
    },
    {
      title: 'Implement real-time tracking',
      description: 'Add logistics tracking to your application',
      time: '20 min',
      difficulty: 'Beginner',
      icon: Zap
    }
  ]

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/payments',
      description: 'Retrieve payment information',
      status: 'Stable'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/transactions',
      description: 'Create a new transaction',
      status: 'Stable'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/logistics/track',
      description: 'Track delivery status',
      status: 'Beta'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/marketplace/products',
      description: 'Add product to marketplace',
      status: 'Stable'
    }
  ]

  const sdkLanguages = [
    { name: 'JavaScript', version: 'v2.1.0', downloads: '15k' },
    { name: 'Python', version: 'v1.8.0', downloads: '8k' },
    { name: 'PHP', version: 'v1.5.0', downloads: '6k' },
    { name: 'Java', version: 'v1.3.0', downloads: '4k' },
    { name: 'Go', version: 'v1.0.0', downloads: '2k' },
    { name: 'Ruby', version: 'v1.2.0', downloads: '3k' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Everything you need to integrate and build with Annita's platform
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search documentation, APIs, or guides..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step tutorials and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickStartGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <guide.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{guide.time}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                    {guide.difficulty}
                  </span>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Browse Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find comprehensive guides, API references, and resources organized by topic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer ${category.featured ? 'ring-2 ring-blue-500' : ''}`}>
                {category.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600 font-medium">Featured</span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Popular API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most commonly used API endpoints with examples and documentation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft">
              <div className="space-y-3 sm:space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                      <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-600' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {endpoint.method}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-gray-900 text-sm sm:text-base break-all sm:break-words">{endpoint.endpoint}</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1">{endpoint.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs flex-shrink-0 ${
                        endpoint.status === 'Stable' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {endpoint.status}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official SDKs and client libraries for your preferred programming language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sdkLanguages.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                  <span className="text-sm text-gray-500">{sdk.downloads} downloads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">v{sdk.version}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Install
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Additional Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                    <Download className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Download SDKs</h4>
                      <p className="text-sm text-gray-600">Get the latest SDK versions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                    <Video className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Video Tutorials</h4>
                      <p className="text-sm text-gray-600">Step-by-step video guides</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                    <Users className="w-6 h-6 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Developer Community</h4>
                      <p className="text-sm text-gray-600">Connect with other developers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">API Status</h4>
                      <p className="text-sm text-gray-600">Check API health and uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DocumentationPage
