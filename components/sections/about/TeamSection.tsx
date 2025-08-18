"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const team = [
    {
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      achievement: 'Led MVP launch and awards wins',
      description: 'Visionary leader with experience in African startups',
      image: '/images/team/ceo-fallah.jpg',
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
      image: '/images/team/CTO.jpg',
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
      image: '/images/team/SF_beautiful-asian-woman-fashion-designer-poses-office-studio-entrepreneur-OL.jpg',
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
      image: '/images/team/Victor.jpg',
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
      image: '/images/team/Lamber.jpg',
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % team.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team combines tech expertise, market knowledge, and entrepreneurial
            spirit to build Africa's leading digital platform.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-100 group-hover:border-orange-200 transition-colors duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{member.fallback}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2 sm:mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">{member.description}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Joined {member.joined}</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-soft"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 sm:mb-6 text-center">Team Gallery</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
              <img 
                src={team[currentImageIndex].image} 
                alt={team[currentImageIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{team[currentImageIndex].name}</h4>
                <p className="text-orange-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{team[currentImageIndex].role}</p>
                <div className="flex flex-wrap gap-2">
                  {team[currentImageIndex].expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            variant="gradient"
            size="xl"
            icon={ArrowRight}
            className="text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
