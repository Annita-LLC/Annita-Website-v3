'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Activity,
  TrendingUp,
  Globe,
  Shield,
  Lightbulb,
  Cpu,
  Network,
  Database,
  BarChart3,
  Users,
  Clock,
  Star,
  Eye,
  Heart,
  MessageSquare,
  Search,
  Filter,
  Settings,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AIFeature = () => {
  const [aiProcessing, setAiProcessing] = useState(false)
  const [currentTask, setCurrentTask] = useState('')
  const [processingProgress, setProcessingProgress] = useState(0)
  const [aiInsights, setAiInsights] = useState([
    'Analyzing customer behavior patterns...',
    'Optimizing inventory levels...',
    'Predicting market trends...',
    'Generating personalized recommendations...',
    'Detecting fraud patterns...',
    'Automating customer support...'
  ])
  const [currentInsight, setCurrentInsight] = useState(0)
  const [liveStats, setLiveStats] = useState({
    activeAI: 156,
    accuracy: 99.7,
    processingSpeed: 0.02,
    energyEfficiency: 95.8
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight(prev => (prev + 1) % aiInsights.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [aiInsights.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeAI: prev.activeAI + Math.floor(Math.random() * 3),
        accuracy: prev.accuracy + (Math.random() * 0.1 - 0.05),
        processingSpeed: prev.processingSpeed + (Math.random() * 0.01 - 0.005),
        energyEfficiency: prev.energyEfficiency + (Math.random() * 0.2 - 0.1)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const startAIProcessing = () => {
    setAiProcessing(true)
    setCurrentTask('Initializing AI models...')
    setProcessingProgress(0)
    
    const tasks = [
      'Loading neural networks...',
      'Processing data streams...',
      'Running predictive algorithms...',
      'Generating insights...',
      'Optimizing results...',
      'AI analysis complete!'
    ]
    
    let taskIndex = 0
    const taskInterval = setInterval(() => {
      if (taskIndex < tasks.length) {
        setCurrentTask(tasks[taskIndex])
        setProcessingProgress((taskIndex + 1) * (100 / tasks.length))
        taskIndex++
      } else {
        clearInterval(taskInterval)
        setTimeout(() => {
          setAiProcessing(false)
          setProcessingProgress(0)
        }, 1000)
      }
    }, 800)
  }

  const features = [
    'AI-powered business insights',
    'Automated customer support',
    'Predictive analytics',
    'Smart inventory management'
  ]

  const aiCapabilities = [
    { name: 'Natural Language Processing', icon: MessageSquare, status: 'active', efficiency: 98.5 },
    { name: 'Computer Vision', icon: Eye, status: 'active', efficiency: 97.2 },
    { name: 'Predictive Analytics', icon: TrendingUp, status: 'active', efficiency: 99.1 },
    { name: 'Machine Learning', icon: Brain, status: 'active', efficiency: 96.8 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6"
        >
          <Brain className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2"
        >
          Annita AI
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-medium text-primary-600 mb-4 flex items-center"
        >
          Artificial Intelligence Platform
          <Sparkles className="w-5 h-5 ml-2 text-orange-500 animate-pulse" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Intelligent automation and AI-powered insights to optimize business operations 
          and drive growth for MSMEs with <span className="text-orange-600 font-semibold">real-time learning and adaptation</span>.
        </motion.p>

        {/* Live AI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-teal-600">{liveStats.accuracy.toFixed(1)}%</div>
                <div className="text-sm text-teal-600">AI Accuracy</div>
              </div>
              <Target className="w-6 h-6 text-teal-500" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+0.3% today</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{liveStats.processingSpeed.toFixed(3)}s</div>
                <div className="text-sm text-purple-600">Processing Speed</div>
              </div>
              <Zap className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex items-center mt-2">
              <Activity className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Ultra-fast</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-3 mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button 
            className="group"
            onClick={startAIProcessing}
            disabled={aiProcessing}
          >
            {aiProcessing ? 'AI Processing...' : 'Try AI Now'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Interactive AI Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 left-6 w-16 h-16 bg-cyan-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          
          {/* Neural network background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1500"></div>
          </div>
          
          {/* Demo Image Interface */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 relative z-10">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Annita AI Demo</h3>
              <p className="text-xs sm:text-sm text-gray-600">Intelligent Assistant</p>
            </div>
            
            {/* Large Demo Image */}
            <div className="relative mx-auto group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                <img 
                  src="/images/DEMO-Images/Annita AI.jpg" 
                  alt="Annita AI Demo" 
                  className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
            </div>

            {/* AI Processing Status */}
            {aiProcessing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-4 text-white mb-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-medium">AI Processing</span>
                  </div>
                  <span className="text-xs opacity-90">{processingProgress.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <motion.div 
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${processingProgress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
                <div className="text-xs opacity-90">{currentTask}</div>
              </motion.div>
            )}

            {/* Live AI Insights */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-3 border border-orange-200 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900">Live AI Insights</span>
              </div>
              <motion.div
                key={currentInsight}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs text-orange-800"
              >
                {aiInsights[currentInsight]}
              </motion.div>
            </div>

            {/* AI Capabilities */}
            <div className="space-y-3 mb-4">
              <div className="text-sm font-medium text-gray-700">AI Capabilities</div>
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <capability.icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{capability.name}</div>
                      <div className="text-xs text-gray-500">{capability.status}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-teal-600">{capability.efficiency}%</div>
                    <div className="text-xs text-gray-500">efficiency</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Controls */}
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-teal-600 text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" />
                Start AI
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 text-sm font-medium flex items-center justify-center">
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </button>
            </div>

            {/* Real-time Stats */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-teal-600">{liveStats.activeAI}</div>
                  <div className="text-xs text-gray-500">Active AI Models</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">{liveStats.energyEfficiency.toFixed(1)}%</div>
                  <div className="text-xs text-gray-500">Energy Efficient</div>
                </div>
              </div>
            </div>

            {/* Neural Network Visualization */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">Neural Network Status</div>
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-2 h-2 bg-teal-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center"
        >
          <Brain className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            x: [-5, 5, -5],
            y: [-5, 5, -5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{ 
            x: [5, -5, 5],
            y: [5, -5, 5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        />
      </motion.div>
    </motion.div>
  )
}

export default AIFeature
