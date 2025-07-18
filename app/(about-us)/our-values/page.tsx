'use client'

import { FlipCard } from '@/components/Cards/FlipCard'
import VerticalHeroSlider from '@/components/Essentials/VerticalBanner'
import ProjectDetailsFAQ from '@/components/Section/ProjectDetailsFAQ'
import ScrollVideoSection from '@/components/Section/ScrollVideoSection'
import About4 from '@/components/Section/SectionVideo'
import { Star, Globe, Users, Target, Heart, Zap } from 'lucide-react'

export default function MainPage() {
  const cards = [
    {
      title: 'Fast Delivery',
      description: 'Get your items delivered swiftly.',
      detailedDescription:
        'We ensure your orders reach you in record time with real-time tracking and secure logistics.',
      icon: Star,
    },
    {
      title: 'Global Reach',
      description: 'Our network spans the globe.',
      detailedDescription:
        'With warehouses and hubs worldwide, we connect businesses and customers effortlessly.',
      icon: Globe,
    },
    {
      title: 'Community Driven',
      description: 'Built for people, by people.',
      detailedDescription:
        'Our platform thrives on community feedback and collaboration for constant improvements.',
      icon: Users,
    },
    {
      title: 'Smart Targeting',
      description: 'Reach the right audience.',
      detailedDescription:
        'Advanced AI-driven tools to target exactly who you want, increasing engagement.',
      icon: Target,
    },
    {
      title: 'Trusted Service',
      description: 'Your satisfaction matters.',
      detailedDescription:
        'We pride ourselves on transparency, reliability, and consistent service quality.',
      icon: Heart,
    },
    {
      title: 'Power Packed',
      description: 'Performance at its best.',
      detailedDescription:
        'Our systems are optimized to handle high loads while maintaining blazing speed.',
      icon: Zap,
    },
  ]

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-navy-color)] to-[var(--primary-dark-slate)] text-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative z-10">
        <VerticalHeroSlider />
      </section>

      {/* Scroll Animation / Video Section */}
      <section > 
            <ScrollVideoSection />
        </section>


      {/* Feature Cards */}
      <section className="py-24 px-4 md:px-12 lg:px-20">
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-16 drop-shadow-md">
          Our Values
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {cards.map((card, idx) => (
            <FlipCard
              key={idx}
              title={card.title}
              description={card.description}
              detailedDescription={card.detailedDescription}
              icon={card.icon}
              isVertical={true}
            />
          ))}
        </div>
      </section>

      {/* About / Video Section */}
      <section >
        <About4 />
      </section>

      {/* FAQ */}
      <section >
        <ProjectDetailsFAQ />
      </section>
    </main>
  )
}