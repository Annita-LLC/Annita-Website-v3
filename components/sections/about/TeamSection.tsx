"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      </div>
    </section>
  )
}

export default TeamSection
