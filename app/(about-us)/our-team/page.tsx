import TeamCard from '@/components/Cards/TeamCard'
import VerticalHeroSlider from '@/components/Essentials/VerticalBanner'
import RectangleSection from '@/components/Section/RectangleSection'

import React from 'react'
import SectionTitle from '@/components/Section/SectionTitle'
import TeamPage from '@/components/Essentials/TeamPage'
function page() {
  const teamMembers1 = [
    {
      name: "Fayaz Ahmad Khan",
      title: "Founder & CEO",
      phone: "(+92) 300-1111111",
      imageUrl: "/images/team-fayaz.jpg",
      description:
        "Fayaz leads the vision of De Koshur Crafts, promoting artisan empowerment and cultural preservation.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sana Malik",
      title: "Chief Operating Officer",
      phone: "(+92) 301-2222222",
      imageUrl: "/images/team-sana.jpg",
      description:
        "Sana oversees operations and ensures artisans have the resources to thrive sustainably.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Asad Iqbal",
      title: "Chief Technology Officer",
      phone: "(+92) 345-3333333",
      imageUrl: "/images/team-asad.jpg",
      description:
        "Asad drives the platform's tech innovation, ensuring secure and scalable solutions.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zoya Khan",
      title: "Head of Marketing",
      phone: "(+92) 344-4444444",
      imageUrl: "/images/team-zoya.jpg",
      description:
        "Zoya crafts impactful campaigns to spotlight artisan stories and brand identity.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bilal Ahmed",
      title: "Finance Director",
      phone: "(+92) 336-5555555",
      imageUrl: "/images/team-bilal.jpg",
      description:
        "Bilal ensures financial transparency and sustainable growth for the organization.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Areeba Noor",
      title: "Community Manager",
      phone: "(+92) 333-6666666",
      imageUrl: "/images/team-areeba.jpg",
      description:
        "Areeba fosters strong relationships between artisans and the broader community.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Fayaz Ahmad Khan",
      title: "Founder & CEO",
      phone: "(+92) 300-1111111",
      imageUrl: "/images/team-fayaz.jpg",
      description:
        "Fayaz leads the vision of De Koshur Crafts, promoting artisan empowerment and cultural preservation.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sana Malik",
      title: "Chief Operating Officer",
      phone: "(+92) 301-2222222",
      imageUrl: "/images/team-sana.jpg",
      description:
        "Sana oversees operations and ensures artisans have the resources to thrive sustainably.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    }
  ];
  const teamMembers2 = [
    {
      name: "Fayaz Ahmad Khan",
      title: "Founder & CEO",
      phone: "(+92) 300-1111111",
      imageUrl: "/images/team-fayaz.jpg",
      description:
        "Fayaz leads the vision of De Koshur Crafts, promoting artisan empowerment and cultural preservation.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sana Malik",
      title: "Chief Operating Officer",
      phone: "(+92) 301-2222222",
      imageUrl: "/images/team-sana.jpg",
      description:
        "Sana oversees operations and ensures artisans have the resources to thrive sustainably.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Asad Iqbal",
      title: "Chief Technology Officer",
      phone: "(+92) 345-3333333",
      imageUrl: "/images/team-asad.jpg",
      description:
        "Asad drives the platform's tech innovation, ensuring secure and scalable solutions.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zoya Khan",
      title: "Head of Marketing",
      phone: "(+92) 344-4444444",
      imageUrl: "/images/team-zoya.jpg",
      description:
        "Zoya crafts impactful campaigns to spotlight artisan stories and brand identity.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bilal Ahmed",
      title: "Finance Director",
      phone: "(+92) 336-5555555",
      imageUrl: "/images/team-bilal.jpg",
      description:
        "Bilal ensures financial transparency and sustainable growth for the organization.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Areeba Noor",
      title: "Community Manager",
      phone: "(+92) 333-6666666",
      imageUrl: "/images/team-areeba.jpg",
      description:
        "Areeba fosters strong relationships between artisans and the broader community.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Fayaz Ahmad Khan",
      title: "Founder & CEO",
      phone: "(+92) 300-1111111",
      imageUrl: "/images/team-fayaz.jpg",
      description:
        "Fayaz leads the vision of De Koshur Crafts, promoting artisan empowerment and cultural preservation.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sana Malik",
      title: "Chief Operating Officer",
      phone: "(+92) 301-2222222",
      imageUrl: "/images/team-sana.jpg",
      description:
        "Sana oversees operations and ensures artisans have the resources to thrive sustainably.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Asad Iqbal",
      title: "Chief Technology Officer",
      phone: "(+92) 345-3333333",
      imageUrl: "/images/team-asad.jpg",
      description:
        "Asad drives the platform's tech innovation, ensuring secure and scalable solutions.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zoya Khan",
      title: "Head of Marketing",
      phone: "(+92) 344-4444444",
      imageUrl: "/images/team-zoya.jpg",
      description:
        "Zoya crafts impactful campaigns to spotlight artisan stories and brand identity.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bilal Ahmed",
      title: "Finance Director",
      phone: "(+92) 336-5555555",
      imageUrl: "/images/team-bilal.jpg",
      description:
        "Bilal ensures financial transparency and sustainable growth for the organization.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Areeba Noor",
      title: "Community Manager",
      phone: "(+92) 333-6666666",
      imageUrl: "/images/team-areeba.jpg",
      description:
        "Areeba fosters strong relationships between artisans and the broader community.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

    const teamMembers = [
        {
          name: "Fayaz Ahmad Khan",
          title: "Founder & CEO",
          phone: "(+92) 300-1111111",
          imageUrl: "/images/team-fayaz.jpg", // Make sure the image exists in your public/images folder
          description:
            "As the founder of De Koshur Crafts, Fayaz is the visionary behind the platform. With 10+ years of experience in international trade and sustainability, he's committed to empowering artisans and preserving Kashmir’s rich heritage.",
          quote:
            "Our mission is to ensure that the authentic crafts of Kashmir are celebrated and respected around the world.",
          social: {
            facebook: "#",
            vimeo: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Sana Malik",
          title: "Chief Operating Officer",
          phone: "(+92) 301-2222222",
          imageUrl: "/images/team-sana.jpg",
          description:
            "Sana ensures smooth daily operations and alignment with sustainability goals. Her expertise in business management helps provide artisans with access to markets, fair wages, and strategic growth opportunities.",
          quote:
            "Our artisans are the backbone of this platform. My role is to ensure they have everything they need to succeed.",
          social: {
            facebook: "#",
            vimeo: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Asad Iqbal",
          title: "Chief Technology Officer",
          phone: "(+92) 345-3333333",
          imageUrl: "/images/team-asad.jpg",
          description:
            "Asad leads the tech innovation at De Koshur Crafts. From blockchain traceability to AI-driven tools, he ensures the platform is cutting-edge, secure, and optimized for artisan growth and global trade.",
          quote:
            "Technology is a tool for empowerment. We use it to help our artisans grow their businesses and reach international markets.",
          social: {
            facebook: "#",
            vimeo: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
      ];
      
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
      <SectionTitle SubTitle='Our Team' Title='Our Leadership Team'/>
        <p className="text-gray-300 mb-12 mt-6 max-w-3xl mx-auto">
          Our core team members bring vision, innovation, and commitment to the heart of De Koshur Crafts.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto ">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </section>
       <SectionTitle SubTitle='Our Team' Title='Our Extended Team'/>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl gap-x-40 mt-20">
          {teamMembers1.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      <SectionTitle SubTitle='Our Team' Title='Our Extended Team'/>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl gap-x-40 mt-20">
          {teamMembers2.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
         <SectionTitle SubTitle='Our Team' Title='Our Extended Team'/>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl gap-x-40 mt-20">
          {teamMembers1.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
       

      <TeamPage/>s
    </div>
  )
}

export default page