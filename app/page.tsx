'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Globe, Users, TrendingUp, Award, Target, Heart, Clock, Zap, Star, ChevronUp, ChevronDown, ArrowRight, Calendar, UserPlus, CheckCircle, Sparkles, Building, Lightbulb, Shield, Handshake } from 'lucide-react'
import BannerWithFeatures from '@/components/Material/BannerwithFeatures'
import  { useRef, createRef } from 'react';
// Screen detection hook
const useScreenDetection = () => {
  const [is4K, setIs4K] = useState(false)
  
  useEffect(() => {
    const checkResolution = () => {
      const isFourK = window.innerWidth >= 2880 && window.innerHeight >= 1620
      setIs4K(isFourK)
    }
    
    checkResolution()
    window.addEventListener('resize', checkResolution)
    return () => window.removeEventListener('resize', checkResolution)
  }, [])
  
  return { is4K }
}

// Partnership data
const partnershipCategories = [
  {
    label: "Core Trade",
    href: "/buyer/core-partnerships",
    summary: "Trade-centric partnerships including dropshipping and distribution.",
    subItems: [
      { label: "Drop Shipping", href: "/buyer/core/dropshipping" },
      { label: "Consignment", href: "/buyer/core/consignment" },
      { label: "Import", href: "/buyer/core/import" },
      { label: "Wholesale & Distribution", href: "/buyer/core/wholesale" },
    ],
  },
  {
    label: "Brand Expansion",
    href: "/buyer/expansion-partnerships",
    summary: "Expand reach via exhibitions, white-label, and physical space-sharing.",
    subItems: [
      { label: "Exhibition & Event Organizer", href: "/buyer/expansion/exhibition" },
      { label: "Auction & Bidding", href: "/buyer/expansion/auction" },
      { label: "White-Label", href: "/buyer/expansion/white-label" },
      { label: "Brick & Mortar Space-Sharing", href: "/buyer/expansion/space-sharing" },
    ],
  },
  {
    label: "Collaborative",
    href: "/buyer/collaborative-partnerships",
    summary: "Collaboration through design, media, mentorship, and craft innovation.",
    subItems: [
      { label: "Knowledge & Design", href: "/buyer/collab/knowledge-design" },
      { label: "Storytelling & Media", href: "/buyer/collab/storytelling-media" },
      { label: "Buyer Mentorship Program", href: "/buyer/collab/mentorship" },
      { label: "Craft Innovation Patron", href: "/buyer/collab/innovation" },
    ],
  },
  {
    label: "Institutional",
    href: "/buyer/strategic-partnerships",
    summary: "Institutional alliances with NGOs, museums, and strategic investors.",
    subItems: [
      { label: "Strategic Investor", href: "/buyer/strategic/investor" },
      { label: "Museum/Institutional", href: "/buyer/strategic/museum" },
      { label: "NGO & Government", href: "/buyer/strategic/ngo-gov" },
      { label: "Impact Measurement", href: "/buyer/strategic/impact" },
    ],
  },
];
const refs = useRef(partnershipCategories.map(() => createRef()));
// Process steps
const processSteps = [
  { name: "Registration Phase", description: "Complete your initial registration and profile setup" },
  { name: "Document Submission Phase", description: "Submit required documentation and certifications" },
  { name: "Eligibility Review Phase", description: "Our team reviews your application and qualifications" },
  { name: "Agreement and Certification Phase", description: "Finalize partnership agreements and certifications" },
  { name: "Profile Setup Phase", description: "Create your detailed business profile and showcase" },
  { name: "Partnership-Specific Onboarding Phase", description: "Tailored onboarding based on your partnership type" },
  { name: "Training and Resource Checkup Phase", description: "Access training materials and resource verification" },
  { name: "Portal Access Activation Phase", description: "Activate your full platform access and tools" },
  { name: "Partnership Launch and Support Phase", description: "Launch your partnership with dedicated support" },
  { name: "KPI and Marketplace Engagement Phase", description: "Monitor performance and engage with marketplace" },
]

export default function LandingPage() {
  const { is4K } = useScreenDetection()
  const { scrollYProgress } = useScroll()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Scroll animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  // About Us sections data
  const aboutSections = [
    {
      title: "Our Values",
      content: "At the heart of our mission lies an unwavering commitment to integrity, sustainability, and innovation. We believe in preserving the authentic craftsmanship of Kashmir while embracing modern business practices. Our values guide every partnership, ensuring fair trade, environmental responsibility, and cultural preservation. We foster transparency in all our dealings and maintain the highest ethical standards.",
      icon: <Shield className="w-8 h-8" />,
      href: "/about/values"
    },
    {
      title: "Our Story",
      content: "Founded with a vision to bridge the gap between traditional Kashmiri artisans and global markets, our journey began with a simple belief: exceptional craftsmanship deserves worldwide recognition. Over the years, we've built a platform that honors centuries-old traditions while leveraging cutting-edge technology. Our story is one of cultural preservation, economic empowerment, and sustainable growth, connecting artisans with opportunities they never thought possible.",
      icon: <Building className="w-8 h-8" />,
      href: "/about/story"
    },
    {
      title: "Our Team",
      content: "Our diverse team combines deep cultural understanding with modern business expertise. From artisan liaisons who speak the language of craft to technology specialists who build seamless digital experiences, every team member contributes to our mission. We believe in collaborative leadership, where traditional wisdom meets innovative thinking, creating solutions that benefit everyone in our ecosystem.",
      icon: <Users className="w-8 h-8" />,
      href: "/about/team"
    },
    {
      title: "Business Niche",
      content: "We specialize in premium Kashmiri handicrafts, focusing on authentic products that tell stories of heritage and skill. Our niche encompasses luxury textiles, traditional jewelry, and artisanal home décor, serving discerning customers who value authenticity and quality. By concentrating on high-value, culturally significant products, we ensure sustainable livelihoods for artisans while delivering exceptional value to our global clientele.",
      icon: <Lightbulb className="w-8 h-8" />,
      href: "/about/niche"
    }
  ]

  // Profit metrics data
  const products = [
    'Pashmina', 'Kani', 'Cashmere', 'Silk', 'Bags & Purses',
    'Jackets', 'Kaftans', 'Kurtas', 'Pherans', 'Jewelry'
  ]

  const leftMetrics = [
    { icon: <DollarSign size={20} />, title: 'Annual Revenue', value: '$160M+' },
    { icon: <Globe size={20} />, title: 'Global Export', value: '78%' },
    { icon: <Users size={20} />, title: 'Artisans', value: '88000+' },
    { icon: <TrendingUp size={20} />, title: 'Market Growth', value: '17% YoY' },
    { icon: <Award size={20} />, title: 'Quality Rating', value: '4.8/5' },
    { icon: <Target size={20} />, title: 'Sustainability', value: '96%' }
  ]

  const rightMetrics = [
    { icon: <Target size={20} />, title: 'Market Share', value: '30%' },
    { icon: <Award size={20} />, title: 'Product Range', value: '80+' },
    { icon: <Heart size={20} />, title: 'Customer Satisfaction', value: '97%' },
    { icon: <Clock size={20} />, title: 'Avg Production Time', value: '60 Days' },
    { icon: <Zap size={20} />, title: 'Energy Efficiency', value: '93%' },
    { icon: <Star size={20} />, title: 'Innovation Index', value: '4.6/5' }
  ]

  // Scroll features data
  const scrollFeatures = [
    {
      title: "Flexibility & Zero Upfront Investment",
      description: "Our platform offers unparalleled flexibility to showcase your crafts in the market without upfront investment."
    },
    {
      title: "Professional Branding & Marketing",
      description: "Boost visibility through professional marketing tools, exhibitions, and promotions. Our platform helps you connect with global buyers."
    },
    {
      title: "Global Market Access",
      description: "Expand your reach beyond local markets. Our platform connects you with a global network of buyers, opening new opportunities."
    },
    {
      title: "Community & Support",
      description: "Join a vibrant community of artisans. Access resources, workshops, and peer support to enhance your skills and grow your business."
    },
    {
      title: "Sustainable Practices",
      description: "We promote and support sustainable and ethical practices in handicraft production, ensuring fair trade and environmental responsibility."
    },
    {
      title: "Cultural Preservation",
      description: "Our mission includes preserving and promoting the rich cultural heritage of Kashmiri craftsmanship for future generations."
    }
  ]

  // Animated components
  const MetricCard = ({ icon, title, value, position, index }: any) => (
    <motion.div
      className={`flex items-center gap-4 ${position === 'right' ? 'flex-row-reverse text-right' : ''}`}
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex-shrink-0 w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center cursor-pointer"
        whileHover={{ backgroundColor: '#ffffff', rotate: 360 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div className="text-gray-400" whileHover={{ scale: 1.2 }}>
          {icon}
        </motion.div>
      </motion.div>
      <motion.div whileHover={{ x: position === 'left' ? 5 : -5 }}>
        <motion.h3 className="text-white font-semibold text-lg" whileHover={{ color: '#808080' }}>
          {title}
        </motion.h3>
        <motion.p className="text-gray-300 text-sm" whileHover={{ color: '#ffffff' }}>
          {value}
        </motion.p>
      </motion.div>
    </motion.div>
  )

  const createDottedEarth = () => {
    const dots = []
    const radius = is4K ? 400 : 300
    const centerX = is4K ? 500 : 400
    const centerY = is4K ? 500 : 400
   
    for (let ring = 0; ring < 4; ring++) {
      const currentRadius = radius - (ring * (is4K ? 80 : 60))
      const dotsInRing = Math.max(24 - (ring * 4), 8)
     
      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI
        const x = centerX + Math.cos(angle) * currentRadius
        const y = centerY + Math.sin(angle) * currentRadius
       
        dots.push(
          <motion.circle
            key={`${ring}-${i}`}
            cx={x}
            cy={y}
            r={2 + ring * 0.5}
            fill="rgba(59, 130, 246, 0.3)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{
              duration: 3,
              delay: (ring * 0.2) + (i * 0.1),
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        )
      }
    }
    return dots
  }

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
      const scrollableHeight = scrollHeight - clientHeight
      if (scrollableHeight > 0) {
        setScrollProgress(scrollTop / scrollableHeight)
      }
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BannerWithFeatures/>

      {/* About Us Sections */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`font-bold text-gray-900 mb-4 ${is4K ? 'text-6xl' : 'text-3xl lg:text-5xl'}`}>
              About <span className="text-[var(--secondary-color)]">Our Mission</span>
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${is4K ? 'text-2xl' : 'text-lg'}`}>
              Discover the values, story, team, and unique business approach that drives our commitment to Kashmiri artisans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-[var(--secondary-light-color)] rounded-full flex items-center justify-center text-[var(--primary-color)]">
                    {section.icon}
                  </div>
                  <h3 className={`font-bold text-gray-900 ${is4K ? 'text-3xl' : 'text-xl lg:text-2xl'}`}>
                    {section.title}
                  </h3>
                </motion.div>
                
                <p className={`text-gray-600 mb-6 leading-relaxed ${is4K ? 'text-xl' : 'text-base'}`}>
                  {section.content}
                </p>
                
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-semibold transition-colors duration-300"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
{/* Partnerships Section */}
<section className={`min-h-screen bg-gray-900 ${is4K ? 'py-24 px-12' : 'py-16 px-4'}`}>
          <div className={`${is4K ? 'max-w-9xl' : 'max-w-7xl'} mx-auto`}>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`${is4K ? 'text-6xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-6`}>
                Partnership <span className="text-[var(--secondary-color)]">Opportunities</span>
              </h2>
              <p className={`${is4K ? 'text-2xl max-w-4xl' : 'text-xl max-w-3xl'} mx-auto text-gray-300`}>
                Discover diverse partnership models designed to expand your reach and maximize your impact in the global handicraft market.
              </p>
            </motion.div>

            <div className={`grid md:grid-cols-2 ${is4K ? 'gap-12' : 'gap-8'}`}>
              {partnershipCategories.map((category, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-100px" });
                
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className={`bg-gray-800 ${is4K ? 'p-12' : 'p-8'} rounded-lg border border-gray-700 hover:border-[var(--secondary-color)] transition-all duration-300`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className={`${is4K ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-4`}>
                      {category.label}
                    </h3>
                    <p className={`${is4K ? 'text-xl' : 'text-lg'} text-gray-300 mb-6`}>
                      {category.summary}
                    </p>
                    <ul className={`space-y-3 mb-8`}>
                      {category.subItems.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-center gap-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        >
                          <CheckCircle size={is4K ? 24 : 20} className="text-[var(--secondary-color)] flex-shrink-0" />
                          <Link
                            href={item.href}
                            className={`${is4K ? 'text-lg' : 'text-base'} hover:text-white transition-colors duration-200`}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href={category.href}
                      className={`inline-flex items-center gap-2 ${is4K ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-lg'} bg-[var(--secondary-color)] text-white rounded-lg font-semibold hover:bg-[var(--primary-color)] transition-colors duration-300`}
                    >
                      Read More
                      <ArrowRight size={is4K ? 24 : 20} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`font-bold text-white mb-4 ${is4K ? 'text-6xl' : 'text-3xl lg:text-5xl'}`}>
              Partnership <span className="text-[var(--secondary-color)]">Process</span>
            </h2>
            <p className={`text-gray-300 max-w-3xl mx-auto ${is4K ? 'text-2xl' : 'text-lg'}`}>
              A streamlined 10-step journey from registration to full marketplace engagement.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--secondary-color)] to-[var(--primary-color)] rounded-full"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-[var(--secondary-color)] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className={`font-bold text-white mb-2 ${is4K ? 'text-2xl' : 'text-lg'}`}>
                        {step.name}
                      </h3>
                      <p className={`text-gray-300 ${is4K ? 'text-xl' : 'text-sm'}`}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="relative z-10 w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center text-white font-bold"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profit Box Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-[var(--primary-hover-color)] to-slate-900 relative overflow-hidden py-16">
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg width={is4K ? "1000" : "800"} height={is4K ? "1000" : "800"} viewBox={`0 0 ${is4K ? "1000" : "800"} ${is4K ? "1000" : "800"}`}>
            {createDottedEarth()}
          </svg>
        </motion.div>

        <motion.div
          className="relative z-10 text-center py-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-gray-400 text-sm mb-2" whileHover={{ scale: 1.05, color: '#fb923c' }}>
            Hand ♡ Made
          </motion.div>
          <motion.div className="text-white text-lg font-light" whileHover={{ scale: 1.05, color: '#fb923c' }}>
            Kashmir India Sourced
          </motion.div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-8">
              {leftMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon}
                  title={metric.title}
                  value={metric.value}
                  position="left"
                  index={index}
                />
              ))}
            </div>

            <motion.div
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
            >
              <motion.div className="text-center mb-8">
                <motion.h2 className="text-3xl font-bold text-white mb-2" whileHover={{ scale: 1.05, color: '#fb923c' }}>
                  Boutique
                </motion.h2>
                <motion.h3 className="text-xl text-gray-300 font-medium" whileHover={{ color: '#ffffff' }}>
                  Product Range
                </motion.h3>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-3">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 rounded-lg px-3 py-4 text-center text-white font-medium cursor-pointer border border-slate-600/30 hover:border-slate-500/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(249, 115, 22, 0.2)',
                      borderColor: 'rgba(249, 115, 22, 0.5)',
                      color: '#fb923c',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {product}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {rightMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon}
                  title={metric.title}
                  value={metric.value}
                  position="right"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Section */}
      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-[var(--primary-color)]"></span>
              <span>Built for vision and connection</span>
            </div>
            <h1 className={`font-extrabold text-gray-900 leading-tight mt-4 ${is4K ? 'text-6xl' : 'text-4xl md:text-5xl'}`}>
              Discover Our <span className="text-[var(--secondary-color)]">Business Location</span>
            </h1>
            <p className={`mt-4 text-gray-600 max-w-md ${is4K ? 'text-xl' : 'text-lg'}`}>
              Elevating Kashmiri craftsmanship through American business processes, consumer tastes, and technology innovation. We connect you at no cost with North America, representing 80% of the global handicraft market.
            </p>

            <div className="mt-8 relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Group of people sitting in a modern office setting"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold uppercase tracking-wider p-4">
                PLATFORM UNIQUENESS
              </div>
            </div>
          </div>

          <div className="relative flex flex-col">
            <div
              ref={scrollContainerRef}
              className="flex flex-col gap-8 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto no-scrollbar"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {scrollFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-0.5 bg-[var(--primary-color)] mb-2"></div>
                  <h2 className={`font-bold text-gray-900 ${is4K ? 'text-2xl' : 'text-xl'}`}>
                    {feature.title}
                  </h2>
                  <p className={`mt-2 text-gray-600 ${is4K ? 'text-lg' : 'text-base'}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-row items-center justify-between w-full max-w-xs mx-auto h-10 bg-gray-200 rounded-full px-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-10 lg:h-full lg:max-h-[300px] lg:mt-0 lg:flex-col lg:py-2">
              <button className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                <ChevronUp className="w-5 h-5" />
              </button>
              <div className="relative flex-1 h-2 bg-gray-300 rounded-full mx-2 lg:w-2 lg:h-full lg:my-2 lg:mx-0">
                <div
                  className="absolute bg-[var(--secondary-color)] rounded-full transition-all duration-100 ease-out h-full lg:w-full"
                  style={{ width: `${scrollProgress * 100}%`, height: `${scrollProgress * 100}%` }}
                ></div>
              </div>
              <button className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-[var(--secondary-light-color)]" />
              <span className="text-white font-medium">Ready to Transform Your Business?</span>
            </motion.div>
            
            <h2 className={`font-bold text-white mb-6 ${is4K ? 'text-6xl' : 'text-3xl lg:text-5xl'}`}>
              Start Your Journey <span className="text-[var(--secondary-light-color)]">With Us Today</span>
            </h2>
            
            <p className={`text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed ${is4K ? 'text-2xl' : 'text-lg lg:text-xl'}`}>
              Join thousands of successful artisans and businesses who have transformed their reach through our platform. 
              Choose your path to global success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h3 className={`font-bold text-white mb-4 ${is4K ? 'text-3xl' : 'text-xl lg:text-2xl'}`}>
                Register as Partner
              </h3>
              <p className={`text-white/80 mb-6 ${is4K ? 'text-xl' : 'text-base'}`}>
                Join our network of successful artisans and businesses. Get access to global markets, 
                professional tools, and ongoing support to grow your craft business.
              </p>
              <motion.button
                className={`w-full bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/90 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  is4K ? 'py-6 text-xl' : 'py-4 text-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="w-5 h-5" />
                Register Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-[var(--primary-color)]" />
              </div>
              <h3 className={`font-bold text-white mb-4 ${is4K ? 'text-3xl' : 'text-xl lg:text-2xl'}`}>
                Book Consultation
              </h3>
              <p className={`text-white/80 mb-6 ${is4K ? 'text-xl' : 'text-base'}`}>
                Schedule a personalized consultation with our experts. Discover the best partnership 
                model for your business and get answers to all your questions.
              </p>
              <motion.button
                className={`w-full bg-white hover:bg-gray-100 text-[var(--primary-color)] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  is4K ? 'py-6 text-xl' : 'py-4 text-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--secondary-light-color)]" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--secondary-light-color)]" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--secondary-light-color)]" />
              <span>Global market access</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`font-bold mb-4 ${is4K ? 'text-3xl' : 'text-xl'}`}>
              Kashmir Crafts Global
            </h3>
            <p className={`text-gray-400 mb-8 ${is4K ? 'text-xl' : 'text-base'}`}>
              Connecting authentic craftsmanship with global opportunities
            </p>
            <div className="flex justify-center items-center gap-2 text-gray-500">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for artisans worldwide</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
