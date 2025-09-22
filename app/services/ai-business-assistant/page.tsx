'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  Star, 
  Play, 
  Pause, 
  Download as DownloadIcon,
  Globe as GlobeIcon,
  Lightbulb,
  Settings,
  Shield,
  Clock,
  DollarSign,
  PieChart,
  FileText,
  Mail,
  Phone,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Eye,
  MousePointer,
  Keyboard,
  Mic,
  Camera,
  Headphones
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AIBusinessAssistantPage = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isDemoPlaying, setIsDemoPlaying] = useState(false)
  const [selectedUseCase, setSelectedUseCase] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'ai', message: 'Hello! I\'m your AI business assistant. How can I help you grow your business today?' },
    { id: 2, type: 'user', message: 'I need help with my marketing strategy' },
    { id: 3, type: 'ai', message: 'I\'d be happy to help! Let me analyze your current marketing performance and suggest improvements.' }
  ])
  const [newMessage, setNewMessage] = useState('')
  
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isDemoPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [isDemoPlaying])

  const features = [
    {
      icon: Brain,
      title: "Intelligent Analytics",
      description: "AI-powered insights that transform your business data into actionable strategies",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Predictive analytics for sales forecasting",
        "Customer behavior analysis and segmentation",
        "Real-time performance monitoring",
        "Automated report generation"
      ],
      stats: "40% increase in revenue"
    },
    {
      icon: MessageSquare,
      title: "Smart Communication",
      description: "Automated customer service and communication that never sleeps",
      color: "from-green-500 to-emerald-500",
      details: [
        "24/7 multilingual customer support",
        "Intelligent email and SMS campaigns",
        "Social media management automation",
        "Voice and video call assistance"
      ],
      stats: "95% customer satisfaction"
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "AI-driven marketing campaigns that reach the right customers at the right time",
      color: "from-purple-500 to-pink-500",
      details: [
        "Personalized content creation",
        "Automated ad optimization",
        "Lead scoring and nurturing",
        "Cross-channel campaign management"
      ],
      stats: "60% higher conversion rates"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Comprehensive business insights powered by advanced AI algorithms",
      color: "from-orange-500 to-red-500",
      details: [
        "Financial forecasting and planning",
        "Inventory optimization",
        "Market trend analysis",
        "Competitive intelligence"
      ],
      stats: "25% cost reduction"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "AI-enhanced teamwork that boosts productivity and efficiency",
      color: "from-indigo-500 to-purple-500",
      details: [
        "Smart meeting scheduling and notes",
        "Task automation and delegation",
        "Performance tracking and feedback",
        "Knowledge management system"
      ],
      stats: "35% productivity boost"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced AI security that protects your business and ensures compliance",
      color: "from-teal-500 to-cyan-500",
      details: [
        "Fraud detection and prevention",
        "Data privacy compliance",
        "Risk assessment and mitigation",
        "Automated security monitoring"
      ],
      stats: "99.9% security uptime"
    }
  ]

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Boost your online store performance with AI-powered insights",
      scenario: "An online retailer increased sales by 45% using AI to personalize product recommendations and optimize pricing strategies.",
      features: ["Product recommendation engine", "Dynamic pricing optimization", "Inventory management", "Customer journey analysis"],
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500",
      results: [
        { metric: "Sales Increase", value: "45%" },
        { metric: "Customer Retention", value: "32%" },
        { metric: "Average Order Value", value: "28%" }
      ]
    },
    {
      title: "Customer Service Excellence",
      description: "Deliver exceptional customer experiences with AI automation",
      scenario: "A service company reduced response time by 80% and improved customer satisfaction scores by implementing AI-powered support.",
      features: ["Automated ticket routing", "Intelligent response suggestions", "Sentiment analysis", "Multi-channel support"],
      icon: Headphones,
      color: "from-green-500 to-emerald-500",
      results: [
        { metric: "Response Time", value: "80% faster" },
        { metric: "Customer Satisfaction", value: "95%" },
        { metric: "Resolution Rate", value: "88%" }
      ]
    },
    {
      title: "Marketing Campaign Success",
      description: "Create and execute high-performing marketing campaigns with AI",
      scenario: "A startup achieved 300% ROI on marketing campaigns by using AI to optimize ad targeting and content creation.",
      features: ["Campaign optimization", "Content generation", "Audience targeting", "Performance tracking"],
      icon: Target,
      color: "from-purple-500 to-pink-500",
      results: [
        { metric: "ROI", value: "300%" },
        { metric: "Click-through Rate", value: "65%" },
        { metric: "Cost per Acquisition", value: "40% lower" }
      ]
    },
    {
      title: "Financial Management",
      description: "Make smarter financial decisions with AI-powered insights",
      scenario: "A growing business improved cash flow by 35% using AI for financial forecasting and expense optimization.",
      features: ["Cash flow forecasting", "Expense optimization", "Risk assessment", "Investment analysis"],
      icon: DollarSign,
      color: "from-orange-500 to-red-500",
      results: [
        { metric: "Cash Flow", value: "35% improvement" },
        { metric: "Cost Savings", value: "25%" },
        { metric: "Financial Accuracy", value: "92%" }
      ]
    }
  ]

  const demoSteps = [
    {
      title: "Data Analysis",
      description: "AI analyzes your business data",
      icon: BarChart3,
      action: "Processing 10,000+ data points"
    },
    {
      title: "Insight Generation",
      description: "AI generates actionable insights",
      icon: Lightbulb,
      action: "Creating personalized recommendations"
    },
    {
      title: "Strategy Development",
      description: "AI develops optimized strategies",
      icon: Target,
      action: "Building custom action plans"
    },
    {
      title: "Implementation",
      description: "AI helps implement strategies",
      icon: Settings,
      action: "Automating business processes"
    },
    {
      title: "Monitoring",
      description: "AI monitors performance",
      icon: Eye,
      action: "Tracking results in real-time"
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$49/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI analytics",
        "Email automation",
        "Customer support chatbot",
        "Basic reporting",
        "Email support"
      ],
      limitations: [
        "Limited to 1,000 interactions/month",
        "Basic AI models only",
        "Standard integrations"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$149/month",
      description: "Advanced AI features for growing businesses",
      features: [
        "Advanced AI analytics",
        "Multi-channel automation",
        "Intelligent customer service",
        "Advanced reporting",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      limitations: [
        "Up to 10,000 interactions/month",
        "Advanced AI models",
        "Premium integrations"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full AI suite for large organizations",
      features: [
        "Unlimited AI analytics",
        "Complete automation suite",
        "Enterprise customer service",
        "Custom reporting",
        "24/7 dedicated support",
        "Unlimited integrations",
        "Full API access",
        "Custom AI model training",
        "SLA guarantees"
      ],
      limitations: [],
      color: "from-purple-500 to-pink-500"
    }
  ]

  const testimonials = [
    {
      name: "David Kim",
      role: "CEO",
      company: "TechStart Africa",
      content: "Annita's AI assistant transformed our business operations. We've seen a 40% increase in efficiency and our customers love the instant support.",
      rating: 5,
      avatar: "DK",
      results: "40% efficiency increase"
    },
    {
      name: "Sarah Mwangi",
      role: "Marketing Director",
      company: "Growth Solutions",
      content: "The AI-powered marketing automation has been a game-changer. Our campaign ROI improved by 300% and we're reaching customers more effectively.",
      rating: 5,
      avatar: "SM",
      results: "300% ROI improvement"
    },
    {
      name: "Ahmed Hassan",
      role: "Operations Manager",
      company: "Logistics Pro",
      content: "The predictive analytics help us optimize our supply chain and reduce costs by 25%. The AI insights are incredibly accurate and actionable.",
      rating: 5,
      avatar: "AH",
      results: "25% cost reduction"
    }
  ]

  const faqs = [
    {
      question: "How does the AI Business Assistant work?",
      answer: "Our AI assistant uses advanced machine learning algorithms to analyze your business data, understand patterns, and provide intelligent recommendations. It continuously learns from your business operations to deliver increasingly accurate insights and automation."
    },
    {
      question: "What types of businesses can benefit from AI assistance?",
      answer: "Any business can benefit from AI assistance, from small startups to large enterprises. Our AI adapts to your industry, size, and specific needs, whether you're in e-commerce, services, manufacturing, or any other sector."
    },
    {
      question: "How secure is my business data with the AI assistant?",
      answer: "We use enterprise-grade security with end-to-end encryption, secure data centers, and strict privacy controls. Your data is never shared with third parties and is protected by the same security standards used by major financial institutions."
    },
    {
      question: "Can I customize the AI assistant for my specific needs?",
      answer: "Yes! Our AI assistant is highly customizable. You can train it on your specific business processes, integrate it with your existing tools, and configure it to match your brand voice and business requirements."
    },
    {
      question: "How quickly can I see results from using the AI assistant?",
      answer: "Most businesses see initial improvements within the first week, with significant results typically appearing within 30 days. The AI learns and improves over time, so results continue to get better as it understands your business better."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including setup assistance, training for your team, ongoing optimization, and 24/7 technical support for Enterprise customers. Our success team ensures you get maximum value from your AI assistant."
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        message: newMessage
      }
      setChatMessages([...chatMessages, userMessage])
      setNewMessage('')
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          type: 'ai',
          message: 'I understand your request. Let me analyze that and provide you with the best recommendations for your business.'
        }
        setChatMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <>
      <SEOHead
        title="AI Business Assistant - Annita"
        description="Transform your business with AI-powered insights, automation, and intelligent assistance. Boost productivity, increase revenue, and deliver exceptional customer experiences."
        keywords={[
          'AI business assistant',
          'artificial intelligence',
          'business automation',
          'AI analytics',
          'smart business tools',
          'AI customer service',
          'business intelligence',
          'AI marketing',
          'automated business processes',
          'AI insights',
          'business optimization',
          'AI productivity',
          'intelligent business solutions',
          'AI-powered business',
          'smart business assistant'
        ]}
        canonical="/services/ai-business-assistant"
        ogImage="/images/ai-business-assistant.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Business Assistant
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                  Your <span className="text-orange-600">AI-Powered</span> Business Partner
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform your business with intelligent automation, predictive analytics, 
                  and AI-driven insights that boost productivity and drive growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://annita.company.site/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <GlobeIcon className="w-5 h-5 mr-2" />
                    Try V1.0 Now
                  </a>
                  <a
                    href="/download"
                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Join V3.0 Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Chat Demo */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Experience <span className="text-orange-600">AI</span> in Action
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Try our AI Business Assistant and see how it can transform your business operations 
                  with intelligent insights and automation.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Chat Interface */}
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden h-96 flex flex-col">
                    <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">AI Business Assistant</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Ask me anything about your business..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <Button
                          onClick={handleSendMessage}
                          variant="gradient"
                          size="sm"
                          icon={ArrowRight}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Steps */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
                    <div className="space-y-4">
                      {demoSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: currentStep === index ? 1 : 0.6,
                            x: currentStep === index ? 0 : -10
                          }}
                          className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                            currentStep === index 
                              ? 'bg-orange-50 border border-orange-200' 
                              : 'bg-white'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep === index 
                              ? 'bg-orange-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            <step.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                            <p className="text-xs text-gray-600">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button
                        onClick={() => setIsDemoPlaying(!isDemoPlaying)}
                        variant="outline"
                        className="w-full"
                        icon={isDemoPlaying ? Pause : Play}
                      >
                        {isDemoPlaying ? 'Pause Demo' : 'Start Demo'}
                      </Button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-orange-600">40%</div>
                      <div className="text-sm text-gray-600">Productivity Boost</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-orange-600">95%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-sm text-gray-600">Availability</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-orange-600">60%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-gray-50" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Powerful <span className="text-orange-600">AI Features</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our AI Business Assistant comes equipped with advanced capabilities 
                  that transform every aspect of your business operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeFeature === index ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="text-lg font-bold text-orange-600 mb-4">{feature.stats}</div>
                    
                    <AnimatePresence>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {feature.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                              className="flex items-center space-x-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Real <span className="text-orange-600">Success</span> Stories
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See how businesses across Africa are achieving remarkable results 
                  with our AI Business Assistant.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700 italic">"{useCase.scenario}"</p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {useCase.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-orange-600">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Choose Your <span className="text-orange-600">AI Plan</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Start with our AI Business Assistant and scale as your business grows. 
                  All plans include core AI features and support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                      tier.popular 
                        ? 'border-orange-500 relative' 
                        : 'border-gray-200'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</div>
                      <p className="text-gray-600">{tier.description}</p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {tier.limitations.length > 0 && (
                      <div className="space-y-2 mb-8">
                        <h4 className="font-medium text-gray-900">Limitations:</h4>
                        {tier.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-center space-x-3">
                            <div className="w-4 h-4 text-yellow-500">⚠️</div>
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button
                      variant={tier.popular ? "gradient" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  What Our <span className="text-orange-600">Clients</span> Say
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Real feedback from businesses that have transformed their operations 
                  with our AI Business Assistant.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-orange-600">{testimonial.company}</div>
                      </div>
                    </div>

                    <div className="bg-orange-100 rounded-lg p-3 text-center">
                      <div className="text-sm font-semibold text-orange-800">{testimonial.results}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Frequently Asked <span className="text-orange-600">Questions</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about our AI Business Assistant.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto">
                  Join thousands of businesses already using our AI Business Assistant 
                  to boost productivity, increase revenue, and deliver exceptional customer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://annita.company.site/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                  >
                    <GlobeIcon className="w-5 h-5 mr-2" />
                    Try V1.0 Now
                  </a>
                  <a 
                    href="/download"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Join V3.0 Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIBusinessAssistantPage
