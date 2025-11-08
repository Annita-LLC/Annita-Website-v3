'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles, 
  Zap, 
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroContent = () => {
  return (
    <div className="space-y-6">
      {/* This component is now simplified since main content is in HeroSection */}
      <div className="text-center">
        <p className="text-gray-600">
          Hero content is now handled directly in HeroSection component
        </p>
      </div>
    </div>
  )
}

export default HeroContent
