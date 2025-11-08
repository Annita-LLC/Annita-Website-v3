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
        linkedin: 'https://www.linkedin.com/in/christopher-o-fallah-',
        twitter: 'https://twitter.com/Mr_Fallah_231',
        email: 'christopherfallah16@gmail.com'
      },
      expertise: ['Strategic Leadership', 'African Markets', 'Startup Growth'],
      location: 'Monrovia, Liberia',
      joined: '2021'
    },
    {
      name: 'Siah Fallah',
      role: 'Chief Marketing Officer (CMO)',
      achievement: 'Drives marketing strategies',
      description: 'Focused on MSME engagement and growth',
      image: '/images/team/Siah Fallah(Chief Marketing Officer (CMO).jpeg',
      fallback: 'SF',
      social: {
        linkedin: 'https://www.linkedin.com/in/siah-fallah-1b1b1b1b1b/',
        twitter: 'https://twitter.com/Siah_Fallah',
        email: 'siahcarolfallah25@gmail.com'
      },
      expertise: ['Digital Marketing', 'MSME Engagement', 'Growth Strategy'],
      location: 'Bridgetown, Barbados',
      joined: '2021'
    },
    {
      name: 'Lamber Kpukuyou',
      role: 'Chief Technology Officer (CTO)',
      achievement: 'Handles secure integrations',
      description: 'Manages payments and logistics systems',
      image: '/images/team/Lamber Kpukuyou (Chief Technology Officer (CTO).jpg',
      fallback: 'LK',
      social: {
        linkedin: 'https://linkedin.com/in/lamber-j-kpukuyou',
        twitter: 'https://twitter.com/lamber_kpukuyou',
        email: 'joekpukuyou5@gmail.com'
      },
      expertise: ['Backend Development', 'Payment Systems', 'Security'],
      location: 'Monrovia, Liberia',
      joined: '2025'
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
          className="relative bg-white rounded-3xl p-4 sm:p-8 lg:p-12 shadow-soft"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-6 sm:mb-8 lg:mb-10 text-center">Team Gallery</h3>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
              <img 
                src={team[currentImageIndex].image} 
                alt={team[currentImageIndex].name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 lg:p-8">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">{team[currentImageIndex].name}</h4>
                <p className="text-orange-300 font-medium mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">{team[currentImageIndex].role}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {team[currentImageIndex].expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-white/20 text-white text-xs sm:text-sm rounded-full backdrop-blur-sm border border-white/30"
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
              className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 space-x-2 sm:space-x-3">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
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
