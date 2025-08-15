'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Heart, 
  Globe, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Lightbulb,
  Play,
  Download,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Building2,
  UserPlus,
  Rocket,
  Cpu,
  Database,
  Smartphone,
  Wifi,
  Lock,
  MessageSquare,
  Phone,
  Clock,
  BarChart3
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering every African business to reach their full potential',
      color: 'from-red-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-red-50 to-pink-50'
    },
    {
      icon: Globe,
      title: 'Inclusion',
      description: 'Making digital tools accessible to underserved communities across Africa',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building secure, reliable platforms that businesses can depend on',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously innovating to solve Africa\'s unique challenges',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ]

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Launched MVP with multivendor marketplace, generating $500 in initial revenue',
      achievement: 'MVP Launch',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022',
      title: 'Growth',
      description: 'Onboarded 3,000+ vendors and 1,500+ buyers, achieved $2,500 revenue (+400% growth)',
      achievement: '400% Growth',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Won Orange Social Venture Prize (1st Place) and scaled to $8,000 revenue (+220% growth)',
      achievement: 'Award Winner',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Named Top 50 Businesses in Africa by African Union, reached $17,000 revenue (+112% growth)',
      achievement: 'Top 50 Africa',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const team = [
    {
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      achievement: 'Led MVP launch and awards wins',
      description: 'Visionary leader with experience in African startups',
      image: '/images/blog/ceo-fallah.jpg',
      fallback: 'CF',
      social: {
        linkedin: 'https://linkedin.com/in/christopher-fallah',
        twitter: 'https://twitter.com/christopher_fallah',
        email: 'christopher@annita.com'
      },
      expertise: ['Strategic Leadership', 'African Markets', 'Startup Growth'],
      location: 'Monrovia, Liberia',
      joined: '2021'
    },
    {
      name: 'Emmanuel Z. Weh',
      role: 'CTO',
      achievement: 'Expert in scalable platforms',
      description: 'Oversees tech architecture for low-connectivity environments',
      image: '/images/blog/CTO.jpg',
      fallback: 'EW',
      social: {
        linkedin: 'https://linkedin.com/in/emmanuel-weh',
        twitter: 'https://twitter.com/emmanuel_weh',
        email: 'emmanuel@annita.com'
      },
      expertise: ['System Architecture', 'Scalability', 'Low-Connectivity Solutions'],
      location: 'Monrovia, Liberia',
      joined: '2021'
    },
    {
      name: 'Siah Fallah',
      role: 'CMO',
      achievement: 'Drives marketing strategies',
      description: 'Focused on MSME engagement and growth',
      image: '/images/blog/SF_beautiful-asian-woman-fashion-designer-poses-office-studio-entrepreneur-OL.jpg',
      fallback: 'SF',
      social: {
        linkedin: 'https://linkedin.com/in/siah-fallah',
        twitter: 'https://twitter.com/siah_fallah',
        email: 'siah@annita.com'
      },
      expertise: ['Digital Marketing', 'MSME Engagement', 'Growth Strategy'],
      location: 'Monrovia, Liberia',
      joined: '2022'
    },
    {
      name: 'Victor Coleman',
      role: 'Senior Frontend Engineer',
      achievement: 'Builds user-friendly interfaces',
      description: 'Ensures mobile-first design excellence',
      image: '/images/blog/Victor.jpg',
      fallback: 'VC',
      social: {
        linkedin: 'https://linkedin.com/in/victor-coleman',
        twitter: 'https://twitter.com/victor_coleman',
        email: 'victor@annita.com'
      },
      expertise: ['Frontend Development', 'UI/UX Design', 'Mobile Optimization'],
      location: 'Monrovia, Liberia',
      joined: '2022'
    },
    {
      name: 'Lamber Kpukuyou',
      role: 'Senior Backend Engineer',
      achievement: 'Handles secure integrations',
      description: 'Manages payments and logistics systems',
      image: '/images/blog/Lamber.jpg',
      fallback: 'LK',
      social: {
        linkedin: 'https://linkedin.com/in/lamber-kpukuyou',
        twitter: 'https://twitter.com/lamber_kpukuyou',
        email: 'lamber@annita.com'
      },
      expertise: ['Backend Development', 'Payment Systems', 'Security'],
      location: 'Monrovia, Liberia',
      joined: '2022'
    }
  ]

  const achievements = [
    { 
      number: '3,000+', 
      label: 'Active Vendors',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '1,500+', 
      label: 'Active Buyers',
      icon: UserPlus,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      number: '90%', 
      label: 'Customer Satisfaction',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      number: '70%', 
      label: 'Seller Retention',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const technologies = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Advanced algorithms for business insights and automation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Real-time processing of massive datasets for actionable insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for Africa\'s mobile-first digital landscape',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wifi,
      title: 'Low-Connectivity Solutions',
      description: 'Built to work in areas with limited internet infrastructure',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Enterprise-grade security with PCI DSS compliance',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Communication',
      description: 'Instant messaging and notifications across all devices',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % team.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Annita
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Africa's digital heartbeat, empowering MSMEs to thrive in the digital era 
              and catalyzing global economic growth across the continent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Watch Our Story
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, 
                fintech, AI-driven tools, communication, marketing, logistics, and lifestyle services.
              </p>
              <p className="text-gray-600">
                We empower businesses and individuals with accessible, affordable, and innovative 
                solutions, providing connectivity and convenience to drive growth and success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower 5 million Micro, Small, and Medium Enterprises (MSMEs) across Africa 
                and beyond by 2029, catalyzing global economic growth and job creation.
              </p>
              <p className="text-gray-600">
                With a special focus on underserved communities, including rural and women-led 
                businesses, we aim to transform Africa's economic landscape through digital innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from product development to customer service, 
              ensuring we stay true to our mission of empowering Africa's MSMEs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`${value.gradient} rounded-3xl p-8 text-center group hover:shadow-large transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to Africa's leading all-in-one digital platform, 
              here's how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300"
              >
                <div className="lg:w-1/4 text-center lg:text-left">
                  <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{milestone.year}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {milestone.achievement}
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <p className="text-lg text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines tech expertise, market knowledge, and entrepreneurial 
              vision to drive Africa's digital transformation.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">{member.fallback}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3 text-center">{member.role}</div>
                <p className="text-gray-600 mb-4 text-center">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Team Gallery</h3>
              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mr-4"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{team[currentImageIndex].fallback}</span>
                  </div>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-4"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{team[currentImageIndex].name}</h4>
                  <p className="text-blue-600 font-medium mb-4">{team[currentImageIndex].role}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {team[currentImageIndex].expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{team[currentImageIndex].location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {team[currentImageIndex].joined}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver exceptional 
              experiences across Africa's diverse digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers represent the real impact we're making in empowering 
              African businesses and driving economic growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Africa's Digital Revolution
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of the movement that's transforming Africa's economic landscape 
              and empowering millions of businesses across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
