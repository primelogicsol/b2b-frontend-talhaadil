"use client";
import { AnimationCardGrid } from "@/components/Cards/AnimationCard";
import { FlipCard } from "@/components/Cards/FlipCard";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import PartnershipModel from "@/components/Essentials/PartnershipModel";
import {
  Star,
  Globe,
  Target,
  Heart,
  Zap,
  Users,
  Leaf,
  Cpu,
  Snowflake,
  ShieldCheck,
  Handshake,
  Sparkles,
  Sun,
  Cloud,
} from "lucide-react";
import DiagonalSection from "@/components/Section/DiagonalSection";
import OurVision from "@/components/Essentials/OurVision";
import EthicalSourcingSustainability from "@/components/Essentials/EthicalSourcing";
export default function MainPage() {
  const whatSetsUsApartCards = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Authenticity Guarantee",
      description:
        "Every product is traceable via blockchain, ensuring you receive genuine artisan-made Kashmiri crafts.",
      buttonText: "READ MORE",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Fair Trade Practices",
      description:
        "We ensure artisans are paid fairly and work in ethical, sustainable environments.",
      buttonText: "READ MORE",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Our platform connects Kashmiri artisans with buyers around the world, expanding their market access.",
      buttonText: "READ MORE",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Education & Empowerment",
      description:
        "We provide artisans with mentorship and training to help them thrive in today’s global economy.",
      buttonText: "READ MORE",
    },
  ];

  const cards = [
    {
      title: "Preserving Heritage",
      description: "Keeping Kashmir’s timeless crafts alive",
      detailedDescription:
        "De Koshur Crafts safeguards the intricate artistry of Kashmir by preserving its designs and cultural traditions. We ensure these crafts remain relevant and accessible worldwide, empowering artisans to share their heritage on a global stage and keep it thriving for generations.",
      icon: Sparkles,
    },
    {
      title: "Empowering Artisans",
      description: "Tools and strong support for skilled artisans",
      detailedDescription:
        "At De Koshur Crafts, artisans are at the core of our mission. We provide fair compensation, access to buyers, and training on modern business practices. Through a direct-to-buyer model, we remove intermediaries, ensuring artisans receive recognition and lasting growth.",
      icon: Users,
    },
    {
      title: "Sustainable Ethics",
      description: "Green methods with fair trusted global trade",
      detailedDescription:
        "Sustainability drives every step of our work. We help artisans adopt eco‑friendly methods, reduce waste, and uphold ethical trade standards. Every craft sold reflects fair pay, safe conditions, and a commitment to building a responsible, high‑quality marketplace for all.",
      icon: Leaf,
    },
    {
      title: "Tech Advancement",
      description: "Tech powering authentic craftsmanship",
      detailedDescription:
      "We use modern technology to connect tradition with innovation. Blockchain ensures authenticity and traceability, while AI tools assist artisans in scaling production and managing inventory. This fusion of heritage and tech makes Kashmiri crafts efficient, transparent, and globally accessible.",
        
      
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen w-full text-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative z-10">
        <VerticalHeroSlider />
      </section>
      {/* Scroll Animation / Video Section */}
      <section className="mt-30 lg:mt-10">
        <DiagonalSection
          subtitle="WELCOME TO B2B CONNECT - USA"
          title="Empowering Kashmiri Artisans, Startups in Accessing American"
          highlight="Markets"
          description="At De Koshur Crafts, our mission transcends the typical e-commerce experience.We believe that authentic Kashmiri craftsmanship deserves global respect, recognition, and reach.Our platform empowers artisans, preserves heritage crafts, and connects them to international markets through sustainable, fair trade practices and innovation."
          steps={[
            "Honor It: Celebrate Kashmir’s craft legacy while scaling with next-gen trade tools like blockchain, digital ledgers, and carbon scorecards.",
            "Preserve It: Protect authentic crafts, Pashmina, Kani weaving, Papier Mâché, and woodwork, with full traceability and GI tagging.",
            "Empower It: Provide vendors with smart pricing engines, training dashboards, and global buyer APIs, cutting out intermediaries.",
            "Share It: Use AI-driven catalogs, virtual hubs, and global logistics to bring Kashmir’s story across America.",
          ]}
          footerHeadline="Crafting a Borderless Platform Rooted in Legacy"
          footerDescription="Empowering Artisans | Preserving Culture | Advancing Ethical Innovation"
          mainImage="/images/new-pic6.webp"
          smallImage="/images/new-pic4.webp"
        />
      </section>
      {/* Feature Cards */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 drop-shadow-md text-[var(--primary-color)] font-extrabold uppercase leading-tight">
          Our Values
        </h2>

        <div
          className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-2
                      xl:grid-cols-4 
                      2xl:grid-cols-4
                      justify-items-center
                      max-w-7xl mx-auto"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="w-full max-w-sm">
              <FlipCard
                title={card.title}
                description={card.description}
                detailedDescription={card.detailedDescription}
                icon={card.icon}
                isVertical
                className="h-full"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="px-2 md:px-6 lg:px-8 py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-12">
          What Sets Us Apart
        </h2>
        <AnimationCardGrid data={whatSetsUsApartCards} />
      </section>
      <section>
        <PartnershipModel/>
      </section>
      <section className="px-10 xl:px-0">
              <OurVision />
      </section>
      <section>
        <EthicalSourcingSustainability/>
      </section>


    </main>
  );
}