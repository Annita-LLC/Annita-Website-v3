'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  Download,
  Star, 
  Sparkles, 
  Zap, 
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroContent = () => {
  const features = [
  ]

  return (
    <div className="space-y-8">
      

                             {/* Main Heading */}
         <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
         >
           <span className="text-gray-900">Africa's First All-in-One Digital Platform</span>
         </motion.h1>

              {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
        >
        We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.
      </motion.p>



                             {/* CTA Buttons */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start"
         >
         <Button
           variant="gradient"
           size="lg"
           icon={Play}
           className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
         >
           Get Started Free
         </Button>
         <Button
           variant="glass"
           size="lg"
           icon={Download}
           className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
         >
           Download App
         </Button>
       </motion.div>


    </div>
  )
}

export default HeroContent
