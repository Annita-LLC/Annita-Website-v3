"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Linkedin, Twitter, Mail, Globe, Award, Users, Target, Heart } from 'lucide-react'

const TeamPage = () => {
  const [activeDepartment, setActiveDepartment] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const departments = [
    { id: 'all', label: 'All Team', count: 12 },
    { id: 'leadership', label: 'Leadership', count: 4 },
    { id: 'engineering', label: 'Engineering', count: 4 },
    { id: 'business', label: 'Business', count: 2 },
    { id: 'community', label: 'Community', count: 2 }
  ]

  const teamMembers = [
    // Leadership
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      department: "leadership",
      image: "/images/team/sarah-johnson.jpg",
      bio: "Visionary leader with 15+ years of experience in fintech and digital transformation across Africa. Former executive at major tech companies.",
      email: "sarah.johnson@annita.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      website: "https://sarahjohnson.com",
      expertise: ["Strategic Leadership", "Fintech", "Digital Transformation", "Africa Markets"],
      education: "MBA, Harvard Business School",
      location: "Monrovia, Liberia",
      featured: true
    },
    {
      id: 2,
      name: "David Osei",
      role: "Chief Technology Officer",
      department: "leadership",
      image: "/images/team/david-osei.jpg",
      bio: "Technology expert with deep experience in building scalable platforms and leading engineering teams. Former CTO at leading African startups.",
      email: "david.osei@annita.com",
      linkedin: "https://linkedin.com/in/davidosei",
      twitter: "https://twitter.com/davidosei",
      expertise: ["Software Architecture", "AI/ML", "Cloud Infrastructure", "Team Leadership"],
      education: "MSc Computer Science, MIT",
      location: "Accra, Ghana",
      featured: true
    },
    {
      id: 3,
      name: "Aisha Kamara",
      role: "Chief Operating Officer",
      department: "leadership",
      image: "/images/team/aisha-kamara.jpg",
      bio: "Operations specialist with expertise in scaling businesses and building strategic partnerships across West Africa.",
      email: "aisha.kamara@annita.com",
      linkedin: "https://linkedin.com/in/aishakamara",
      twitter: "https://twitter.com/aishakamara",
      expertise: ["Operations", "Strategic Partnerships", "Business Development", "West Africa"],
      education: "MBA, Lagos Business School",
      location: "Lagos, Nigeria",
      featured: true
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Chief Product Officer",
      department: "leadership",
      image: "/images/team/michael-chen.jpg",
      bio: "Product strategist focused on creating user-centric solutions that address real challenges in African markets.",
      email: "michael.chen@annita.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      expertise: ["Product Strategy", "User Experience", "Market Research", "Innovation"],
      education: "BSc Product Design, Stanford University",
      location: "Monrovia, Liberia",
      featured: true
    },

    // Engineering
    {
      id: 5,
      name: "Kwame Asante",
      role: "Senior Software Engineer",
      department: "engineering",
      image: "/images/team/kwame-asante.jpg",
      bio: "Full-stack developer specializing in building robust payment systems and scalable applications.",
      email: "kwame.asante@annita.com",
      linkedin: "https://linkedin.com/in/kwameasante",
      twitter: "https://twitter.com/kwameasante",
      expertise: ["Full-Stack Development", "Payment Systems", "React", "Node.js"],
      education: "BSc Computer Science, University of Ghana",
      location: "Accra, Ghana",
      featured: false
    },
    {
      id: 6,
      name: "Fatima Diallo",
      role: "Frontend Engineer",
      department: "engineering",
      image: "/images/team/fatima-diallo.jpg",
      bio: "UI/UX specialist creating beautiful, accessible interfaces that work seamlessly across all devices.",
      email: "fatima.diallo@annita.com",
      linkedin: "https://linkedin.com/in/fatimadiallo",
      twitter: "https://twitter.com/fatimadiallo",
      expertise: ["Frontend Development", "UI/UX Design", "React", "Accessibility"],
      education: "BSc Design, University of Lagos",
      location: "Lagos, Nigeria",
      featured: false
    },
    {
      id: 7,
      name: "Oluwaseun Adebayo",
      role: "Backend Engineer",
      department: "engineering",
      image: "/images/team/oluwaseun-adebayo.jpg",
      bio: "Backend specialist focused on building secure, high-performance APIs and database systems.",
      email: "oluwaseun.adebayo@annita.com",
      linkedin: "https://linkedin.com/in/oluwaseunadebayo",
      twitter: "https://twitter.com/oluwaseunadebayo",
      expertise: ["Backend Development", "API Design", "Database Systems", "Security"],
      education: "BSc Computer Engineering, Obafemi Awolowo University",
      location: "Ile-Ife, Nigeria",
      featured: false
    },
    {
      id: 8,
      name: "Grace Mwangi",
      role: "DevOps Engineer",
      department: "engineering",
      image: "/images/team/grace-mwangi.jpg",
      bio: "DevOps expert ensuring our platform runs smoothly and securely with modern cloud infrastructure.",
      email: "grace.mwangi@annita.com",
      linkedin: "https://linkedin.com/in/gracemwangi",
      twitter: "https://twitter.com/gracemwangi",
      expertise: ["DevOps", "Cloud Infrastructure", "Security", "CI/CD"],
      education: "BSc Information Technology, University of Nairobi",
      location: "Nairobi, Kenya",
      featured: false
    },

    // Business
    {
      id: 9,
      name: "Fatima Diallo",
      role: "Customer Success Manager",
      department: "business",
      image: "/images/team/fatima-diallo-business.jpg",
      bio: "Dedicated to ensuring our customers achieve success and get maximum value from our platform.",
      email: "fatima.diallo@annita.com",
      linkedin: "https://linkedin.com/in/fatimadiallo",
      twitter: "https://twitter.com/fatimadiallo",
      expertise: ["Customer Success", "Account Management", "Training", "Support"],
      education: "BSc Business Administration, University of Liberia",
      location: "Monrovia, Liberia",
      featured: false
    },
    {
      id: 10,
      name: "Emmanuel Koffi",
      role: "Business Development Manager",
      department: "business",
      image: "/images/team/emmanuel-koffi.jpg",
      bio: "Building strategic partnerships and expanding Annita's reach across West African markets.",
      email: "emmanuel.koffi@annita.com",
      linkedin: "https://linkedin.com/in/emmanuelkoffi",
      twitter: "https://twitter.com/emmanuelkoffi",
      expertise: ["Business Development", "Partnerships", "Market Expansion", "Sales"],
      education: "MBA, University of Ghana",
      location: "Accra, Ghana",
      featured: false
    },

    // Community
    {
      id: 11,
      name: "Grace Mwangi",
      role: "Community Outreach Director",
      department: "community",
      image: "/images/team/grace-mwangi-community.jpg",
      bio: "Leading our community initiatives and digital literacy programs across rural areas.",
      email: "grace.mwangi@annita.com",
      linkedin: "https://linkedin.com/in/gracemwangi",
      twitter: "https://twitter.com/gracemwangi",
      expertise: ["Community Development", "Digital Literacy", "Rural Outreach", "Education"],
      education: "MSc Development Studies, University of Nairobi",
      location: "Nairobi, Kenya",
      featured: false
    },
    {
      id: 12,
      name: "Michael Chen",
      role: "Head of Community Development",
      department: "community",
      image: "/images/team/michael-chen-community.jpg",
      bio: "Leading youth empowerment and community development initiatives.",
      email: "michael.chen@annita.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      expertise: ["Youth Development", "Program Management", "Mentorship", "Education"],
      education: "MSc Social Work, Columbia University",
      location: "Monrovia, Liberia",
      featured: false
    }
  ]

  const filteredMembers = activeDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeDepartment)

  const featuredMembers = teamMembers.filter(member => member.featured)
  const regularMembers = filteredMembers.filter(member => !member.featured)

  return (
    <>
      <SEOHead
        title="Our Team - Annita"
        description="Meet the talented team behind Annita - passionate individuals working to transform Africa's digital landscape."
        keywords={[
          'team',
          'leadership',
          'employees',
          'Annita',
          'Africa',
          'tech company',
          'digital transformation',
          'company team',
          'leadership team',
          'executive team',
          'management team',
          'engineering team',
          'business team',
          'community team',
          'African tech',
          'Liberia tech',
          'West Africa',
          'digital leadership',
          'tech leadership',
          'business leadership',
          'team profiles',
          'company culture',
          'workplace',
          'career opportunities',
          'job openings',
          'team members',
          'staff profiles',
          'company employees',
          'tech professionals',
          'digital experts'
        ]}
        canonical="/team"
        ogImage="/images/team/sarah-johnson.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our <span className="text-orange-200">Team</span>
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Passionate individuals working together to transform Africa's digital landscape
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">12 Team Members</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">4 Departments</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Across Africa</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Department Filters */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setActiveDepartment(department.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeDepartment === department.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {department.label} ({department.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leadership <span className="text-orange-600">Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our executive leadership team driving Annita's mission and vision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <div className="relative aspect-square bg-gray-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-orange-600 font-semibold text-lg mb-3">{member.role}</p>
                        <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.website && (
                          <a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                          >
                            <Globe className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Talented professionals dedicated to building Africa's digital future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-square bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for transforming Africa through technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TeamPage
