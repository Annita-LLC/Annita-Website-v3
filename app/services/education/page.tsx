"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Video, 
  Award, 
  Zap, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Activity,
  Clock
} from 'lucide-react'

const EducationPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('courses')

  const features = [
    {
      icon: BookOpen,
      title: "Online Courses",
      description: "Comprehensive courses from basic to advanced levels",
      color: "blue"
    },
    {
      icon: Video,
      title: "Video Learning",
      description: "High-quality video tutorials and lectures",
      color: "green"
    },
    {
      icon: Users,
      title: "Live Tutoring",
      description: "One-on-one and group tutoring sessions",
      color: "orange"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Recognized certificates and qualifications",
      color: "purple"
    }
  ]

  const categories = [
    { 
      name: "Technology", 
      icon: "💻", 
      courses: "150+ courses",
      description: "Programming, web development, AI, and more",
      students: "25K+ learners"
    },
    { 
      name: "Business", 
      icon: "💼", 
      courses: "120+ courses",
      description: "Entrepreneurship, management, marketing",
      students: "20K+ learners"
    },
    { 
      name: "Languages", 
      icon: "🌍", 
      courses: "80+ courses",
      description: "English, French, Spanish, and local languages",
      students: "15K+ learners"
    },
    { 
      name: "Skills", 
      icon: "🎯", 
      courses: "200+ courses",
      description: "Soft skills, communication, leadership",
      students: "30K+ learners"
    },
    { 
      name: "Arts & Design", 
      icon: "🎨", 
      courses: "90+ courses",
      description: "Graphic design, digital art, creative skills",
      students: "12K+ learners"
    },
    { 
      name: "Health & Wellness", 
      icon: "🧘", 
      courses: "60+ courses",
      description: "Mental health, fitness, nutrition",
      students: "8K+ learners"
    }
  ]

  const popularCourses = [
    {
      title: "Web Development Fundamentals",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: "2,450",
      duration: "8 weeks",
      price: "$99",
      image: "💻",
      badge: "Bestseller"
    },
    {
      title: "Business Strategy & Planning",
      instructor: "Michael Chen",
      rating: 4.9,
      students: "1,890",
      duration: "6 weeks",
      price: "$149",
      image: "📊",
      badge: "Popular"
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Emma Davis",
      rating: 4.7,
      students: "3,200",
      duration: "10 weeks",
      price: "$129",
      image: "📱",
      badge: "Trending"
    },
    {
      title: "Python Programming",
      instructor: "David Wilson",
      rating: 4.9,
      students: "4,100",
      duration: "12 weeks",
      price: "$179",
      image: "🐍",
      badge: "Hot"
    }
  ]

  const benefits = [
    "Access to expert instructors and industry professionals",
    "Flexible learning schedules and self-paced courses",
    "Interactive assignments and real-world projects",
    "Community support and peer learning",
    "Mobile-friendly learning platform",
    "Lifetime access to course materials"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Education - Online Learning Platform",
    "description": "Comprehensive online education platform with courses in technology, business, languages, and skills development. Learn from experts and advance your career.",
    "url": "https://annita.com/services/education",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/education/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Education - Online Learning Platform | Annita LLC"
        description="Comprehensive online education platform with courses in technology, business, languages, and skills development. Learn from experts and advance your career."
        keywords={[
          'Annita Education',
          'online learning',
          'online courses',
          'educational resources',
          'e-learning platform',
          'distance learning',
          'skill development',
          'professional training',
          'certification courses',
          'video tutorials',
          'live tutoring',
          'educational technology',
          'learning management',
          'career development',
          'lifelong learning'
        ]}
        canonical="/services/education"
        ogImage="/education-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Online Learning Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Learn <span className="text-blue-600">Anything</span> Anywhere
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Access comprehensive educational resources with expert instructors, 
                  interactive courses, and flexible learning options to advance your career.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Start Learning
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Browse Courses
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📚</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Active Courses</h4>
                          <p className="text-sm text-gray-600">3 courses in progress</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">75%</div>
                        <div className="text-sm text-gray-600">Completion</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🎯</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Next Lesson</h4>
                          <p className="text-sm text-gray-600">Web Development</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">15 min</div>
                        <div className="text-sm text-gray-600">Remaining</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-blue-600">Learning</span> Experience
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to learn and grow with flexible, interactive, and 
                comprehensive educational resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore <span className="text-blue-600">Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover courses across all major fields and industries to advance your skills and career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{category.courses}</p>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <p className="text-gray-900 font-semibold text-sm">{category.students}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Popular <span className="text-blue-600">Courses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of learners in our most popular and highly-rated courses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <div className="text-5xl text-center group-hover:scale-110 transition-transform duration-300">
                      {course.image}
                    </div>
                    {course.badge && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {course.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">by {course.instructor}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({course.rating})</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{course.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Enroll
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-blue-600">Annita Education</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Education is designed to provide you with the best possible 
                  learning experience with expert instructors and comprehensive resources.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Stats</h3>
                    <p className="text-gray-600">Learning statistics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Active Students</span>
                      <span className="font-semibold text-blue-600">100K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Courses Available</span>
                      <span className="font-semibold text-blue-600">700+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Start Your Learning Journey
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of learners already advancing their careers with Annita Education. 
                Start learning today and unlock your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Start Learning
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EducationPage
