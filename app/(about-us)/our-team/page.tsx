import TeamCard from '@/components/Cards/TeamCard'
import VerticalHeroSlider from '@/components/Essentials/VerticalBanner'
import RectangleSection from '@/components/Section/RectangleSection'
import TeamCraftSupport from '@/components/Section/TeamCraftSupport'
import TeamVisionSection from '@/components/Section/TeamVisionSection'
import React from 'react'
import SectionTitle from '@/components/Section/SectionTitle'

function page() {
  const teamMembers = [
    {
      name: "Areeba Khan",
      title: "Creative Director",
      phone: "(+92) 300-1234567",
      imageUrl: "/images/team1.jpg",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zain Raza",
      title: "Lead Developer",
      phone: "(+92) 301-9876543",
      imageUrl: "/images/team2.jpg",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mehwish Iqbal",
      title: "Operations Manager",
      phone: "(+92) 345-1122334",
      imageUrl: "/images/team3.jpg",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <VerticalHeroSlider />
        
      </section>

      {/* Rectangle Highlight Section */}
      <RectangleSection />

      {/* Team Members Section */}
      <section className="py-20 bg-[var(--primary-color)] text-center">
      <SectionTitle SubTitle='Our Team' Title='Our Team'/>
        <p className="text-gray-300 mb-12 mt-6 max-w-3xl mx-auto">
          Our core team members bring vision, innovation, and commitment to the heart of De Koshur Crafts.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </section>

      {/* Artisan and Support Teams */}
      <TeamCraftSupport />

      {/* Vision / CTA Section */}
      <TeamVisionSection />
    </div>
  )
}

export default page