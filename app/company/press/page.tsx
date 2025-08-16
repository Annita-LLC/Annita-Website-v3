import { Metadata } from 'next'
import { 
  Newspaper, 
  Download, 
  Mail, 
  Phone, 
  Calendar,
  ArrowRight,
  FileText,
  Image,
  Video
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Press & Media - Annita',
  description: 'Press releases, media kit, and resources for journalists covering Annita\'s mission to transform African digital commerce.',
}

const PressPage = () => {
  const pressReleases = [
    {
      title: 'Annita Raises $50M Series B Funding to Expand Across Africa',
      date: 'December 15, 2024',
      category: 'Funding',
      excerpt: 'Annita secures major investment to accelerate growth and expand services across the African continent.'
    },
    {
      title: 'Annita Launches AI-Powered Business Tools for MSMEs',
      date: 'November 28, 2024',
      category: 'Product Launch',
      excerpt: 'New AI features help small businesses optimize operations and increase sales.'
    },
    {
      title: 'Annita Partners with Major African Banks for Financial Inclusion',
      date: 'October 12, 2024',
      category: 'Partnership',
      excerpt: 'Strategic partnerships to provide banking services to underserved communities.'
    }
  ]

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Annita logos in various formats',
      icon: Image,
      downloads: '2.3k'
    },
    {
      title: 'Press Kit',
      description: 'Complete media kit with company information',
      icon: FileText,
      downloads: '1.8k'
    },
    {
      title: 'Product Screenshots',
      description: 'App and platform screenshots for media use',
      icon: Image,
      downloads: '950'
    },
    {
      title: 'Video Assets',
      description: 'Company videos and promotional content',
      icon: Video,
      downloads: '650'
    }
  ]

  const contactInfo = {
    email: 'press@annita.com',
    phone: '+231 XXX XXX XXX',
    address: 'Monrovia, Liberia'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Press & Media</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Resources and information for journalists and media professionals
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news and announcements from Annita.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{release.date}</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                    {release.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets for your media coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mediaResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
                Media Contact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-600 mb-2">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-600 mb-2">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-600 mb-2">Location</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Company Quick Facts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900">Founded</h4>
                    <p className="text-gray-600">2021</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600">Monrovia, Liberia</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Employees</h4>
                    <p className="text-gray-600">500+</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Countries Served</h4>
                    <p className="text-gray-600">15+ African countries</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900">Users</h4>
                    <p className="text-gray-600">5M+ registered users</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Vendors</h4>
                    <p className="text-gray-600">50K+ active vendors</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Products</h4>
                    <p className="text-gray-600">2M+ products listed</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Funding</h4>
                    <p className="text-gray-600">$75M+ raised</p>
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

export default PressPage
