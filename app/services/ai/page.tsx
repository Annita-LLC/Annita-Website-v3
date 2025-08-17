'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Send, 
  Bot, 
  Brain, 
  Zap, 
  MessageSquare, 
  FileText, 
  Image, 
  Code,
  Mic,
  MicOff,
  Paperclip,
  X,
  RotateCcw,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  aiType?: string
}

const AIPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAI, setSelectedAI] = useState('general')
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiServices = [
    {
      id: 'general',
      name: 'General AI',
      description: 'Your personal AI assistant',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      examples: ['Help me plan my day', 'Write a professional email']
    },
    {
      id: 'business',
      name: 'Business AI',
      description: 'AI-powered business insights',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      examples: ['Analyze market trends', 'Create a business plan']
    },
    {
      id: 'creative',
      name: 'Creative AI',
      description: 'Unleash your creativity',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      examples: ['Write a story', 'Create marketing content']
    },
    {
      id: 'coding',
      name: 'Code AI',
      description: 'Programming assistance',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      examples: ['Debug my code', 'Create a React component']
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `I'm Annita's AI assistant. I understand you're asking about "${inputMessage}". This is a demonstration of our AI capabilities. In the real implementation, I would provide specific, helpful responses based on your query.`,
        timestamp: new Date(),
        aiType: selectedAI
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  const selectedAIService = aiServices.find(s => s.id === selectedAI)

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita AI
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Experience the power of artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Selection */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {aiServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedAI(service.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  selectedAI === service.id
                    ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {renderIcon(service.icon, "w-5 h-5")}
                <span className="font-medium">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-soft border border-gray-200 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${selectedAIService?.color} rounded-xl flex items-center justify-center`}>
                      {selectedAIService && renderIcon(selectedAIService.icon, "w-6 h-6 text-white")}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedAIService?.name}</h2>
                      <p className="text-sm text-gray-600">{selectedAIService?.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={clearChat}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Clear chat"
                  >
                    <RotateCcw className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`p-4 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <div className={`text-xs mt-2 ${
                            message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'order-1 ml-2' : 'order-2 mr-2'
                      }`}>
                        {message.type === 'user' ? (
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">U</span>
                          </div>
                        ) : (
                          <div className={`w-8 h-8 bg-gradient-to-br ${selectedAIService?.color} rounded-full flex items-center justify-center`}>
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start mb-4"
                    >
                      <div className="w-8 h-8 mr-2">
                        <div className={`w-8 h-8 bg-gradient-to-br ${selectedAIService?.color} rounded-full flex items-center justify-center`}>
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <div className="relative">
                      <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={`Ask ${selectedAIService?.name} anything...`}
                        className="w-full p-4 pr-12 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={1}
                        style={{ minHeight: '60px', maxHeight: '120px' }}
                      />
                      <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                          <Paperclip className="w-4 h-4 text-gray-500" />
                        </button>
                        <button 
                          onClick={() => setIsRecording(!isRecording)}
                          className={`p-2 rounded-lg transition-colors ${
                            isRecording ? 'bg-red-100 text-red-600' : 'hover:bg-gray-200 text-gray-500'
                          }`}
                        >
                          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              AI Capabilities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our AI systems are designed to help you with every aspect of your digital life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {renderIcon(service.icon, "w-8 h-8 text-white")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.examples.map((example, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIPage
