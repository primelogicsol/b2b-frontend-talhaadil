"use client";
import { useGlobalContext } from "@/context/ScreenProvider";
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
  Package,
  GalleryVertical,
  Building,
  Store,
  Network,
  Gem,
  Boxes,
  Gavel,
  Tag,
  PenTool,
  Video,
  GraduationCap,
  Lightbulb,
  Coins,
  Library,
  BarChart
} from "lucide-react";
import DiagonalSection from "@/components/Section/DiagonalSection";
import OurVision from "@/components/Essentials/OurVision";
import EthicalSourcingSustainability from "@/components/Essentials/EthicalSourcing";

export default function OurValue() {
  const { is4K } = useGlobalContext();
  // Default data if no props are passed
  const coreTradeModels = [
    {
      model: "Drop Shipping Buyer",
      subtitle: "Zero-inventory model for small resellers",
      purpose:
        "Start selling without inventory. Vendors ship directly to your customers. Best for e-commerce beginners.",
      icon: Package
    },
    {
      model: "Consignment Buyer",
      subtitle: "Risk-free retail listing",
      purpose:
        "List crafts on shelves or platforms and pay only on sale. Ideal for boutiques testing new markets.",
      icon: Store
    },
    {
      model: "Import Buyer",
      subtitle: "Global sourcing with compliance",
      purpose:
        "Buy GI-tagged crafts with proper documentation. Expand certified Kashmiri goods to global markets.",
      icon: Globe
    },
    {
      model: "Wholesale Buyer",
      subtitle: "Bulk orders for resale",
      purpose:
        "Order in volume for retail chains or hotel stores. Get better margins and enable vendor scaling.",
      icon:Boxes,
    },
  ];

  const growthExpansionModels = [
    {
      model: "Exhibition Buyer",
      subtitle: "Event-based exposure for vendors",
      purpose:
        "Attend or co-host expos. Gain exclusivity and co-branding options while boosting vendor visibility.",
      icon: GalleryVertical,
    },
    {
      model: "Auction Buyer",
      subtitle: "Premium crafts via bidding",
      purpose:
        "Bid on rare, high-value crafts with smart contract transparency. Ideal for collectors and curators.",
      icon: Gavel,
    },
    {
      model: "White-Label Buyer",
      subtitle: "Private-label branding",
      purpose:
        "Rebrand crafts under your identity while preserving ethical sourcing. Ideal for conscious brands.",
      icon: Tag,
    },
    {
      model: "Space-Sharing Buyer",
      subtitle: "Retail shelf partnership",
      purpose:
        "Offer vendor products physical shelf space in your store. Drives customer visibility and sales.",
      icon: Building,
    },
  ];

  const creativeModels = [
    {
      model: "Design Partner",
      subtitle: "Co-create new product lines",
      purpose:
        "Collaborate on design and seasonal collections. Ideal for studios and indie brands driving innovation.",
      icon: PenTool,
    },
    {
      model: "Storytelling Partner",
      subtitle: "Craft-focused media creation",
      purpose:
        "Produce videos or blogs that highlight artisan journeys. Boost vendor narratives and brand equity.",
      icon: Video,
    },
    {
      model: "Mentorship Buyer",
      subtitle: "Vendor training and guidance",
      purpose:
        "Guide artisans on pricing, cataloging, and marketing. Ideal for experienced buyers and mentors.",
      icon: GraduationCap,
    },
    {
      model: "Innovation Patron",
      subtitle: "Support craft innovation",
      purpose:
        "Sponsor new tools, sustainable materials, or dying techniques. Best for ESG-aligned partners.",
      icon: Lightbulb,
    },
  ];
  const institutionalModels = [
    {
      model: "Strategic Investor",
      subtitle: "Equity and infra for scale",
      purpose:
        "Invest in artisan growth through retail, supply chain, or tech. Supports platform and vendor scale.",
      icon: Coins,
    },
    {
      model: "Museum/Institutional Buyer",
      subtitle: "Cultural-grade sourcing",
      purpose:
        "Acquire heritage collections for archival or research. Validate crafts for cultural prestige.",
      icon:Library,
    },
    {
      model: "NGO/Government Buyer",
      subtitle: "Public good procurement",
      purpose:
        "Source through SDG and CSR initiatives. Vendors gain formal recognition and project backing.",
      icon: ShieldCheck,
    },
    {
      model: "Impact Measurement Buyer",
      subtitle: "Data-driven traceability",
      purpose:
        "Track ESG and SDG metrics for artisans. Use reports for funding, transparency, and trust.",
      icon: BarChart,
    },
  ];

  const whatSetsUsApartCards = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Real Craft",
      description:
        "Every item is tracked on blockchain, ensuring genuine Kashmiri craftsmanship and trusted quality for every buyer worldwide.",
      buttonText: "READ MORE",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Fair Trade",
      description:
        "Artisans are paid fairly and work in ethical, sustainable conditions, preserving Kashmiri traditions through honest practices.",
      buttonText: "READ MORE",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Our platform links skilled Kashmiri creators with buyers worldwide, growing markets and sustaining handcrafted excellence.",
      buttonText: "READ MORE",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Skill Growth",
      description:
        "We provide guidance, mentorship, and training so artisans adapt, thrive, and build sustainable futures in global markets.",
      buttonText: "READ MORE",
    },
  ];

  const cards = [
    {
      title: "Preserving Our Heritage",
      description: "Keeping alive Kashmir’s timeless handcraft legacy",
      detailedDescription:
        "De Koshur Crafts safeguards the intricate artistry of Kashmir by preserving its designs and cultural traditions. We ensure these crafts remain relevant and accessible worldwide, empowering artisans to share their heritage on a global stage and keep it thriving for generations.",
      icon: Sparkles,
    },
    {
      title: "Empowering The Artisans",
      description: "Providing tools and support for every artisan",
      detailedDescription:
        "At De Koshur Crafts, artisans are at the core of our mission. We provide fair compensation, access to buyers, and training on modern business practices. Through a direct-to-buyer model, we remove intermediaries, ensuring artisans receive recognition and lasting growth.",
      icon: Users,
    },
    {
      title: "Sustainable Work Ethics",
      description: "Green fair trade methods trusted worldwide",
      detailedDescription:
        "Sustainability drives every step of our work. We help artisans adopt eco‑friendly methods, reduce waste, and uphold ethical trade standards. Every craft sold reflects fair pay, safe conditions, and a commitment to building a responsible, high‑quality marketplace for all.",
      icon: Leaf,
    },
    {
      title: "Technology And Craftwork",
      description: "Modern tech empowers authentic craftsmanship",
      detailedDescription:
        "We use modern technology to connect tradition with innovation. Blockchain ensures authenticity and traceability, while AI tools assist artisans in scaling production and managing inventory. This fusion of heritage and tech makes Kashmiri crafts efficient, transparent, and globally accessible.",
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen w-full text-white overflow-x-hidden">
      <section className="relative z-10">
        <VerticalHeroSlider />
      </section>

      <section className={`${is4K ? "mt-52" : "mt-30 lg:mt-20"}`}>
        <DiagonalSection
          subtitle="WELCOME TO B2B CONNECT USA"
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

      <section
        className={`${
          is4K
            ? "py-24 px-28 mx-10"
            : "sm:py-4 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
        }`}
      >
        <h2
          className={`text-center ${
            is4K
              ? "text-7xl mb-20"
              : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:mb-2 md:mb-4 lg:mb-6"
          } drop-shadow-md text-[var(--primary-color)] font-extrabold uppercase leading-tight`}
        >
          Our Values
        </h2>

        <div className="flex justify-center">
          <section
            className={`w-full ${
              is4K ? "max-w-[1800px] py-32" : "max-w-6xl py-4 md:py-10 lg:py-12"
            }`}
          >
            <div
              className={`${
                is4K ? "gap-12" : "gap-8"
              } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
            >
              {cards.map((card, index) => (
                <FlipCard key={index} {...card} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section
        className={`px-2 ${
          is4K ? "py-32" : "py-16"
        } md:px-6 lg:px-8 bg-white text-center`}
      >
        <h2
          className={`${
            is4K ? "text-7xl mb-20" : "text-3xl md:text-4xl lg:text-5xl mb-12"
          } font-extrabold text-[var(--primary-color)]`}
        >
          What Sets Us Apart
        </h2>
        <AnimationCardGrid data={whatSetsUsApartCards} />
      </section>

      <section>
        <PartnershipModel
          title="Core Trade Partnerships"
          subtitle="Entry-level sourcing tiers for verified vendor access."
          models={coreTradeModels}
        />
        <PartnershipModel
          title="Growth & Brand Expansion Partnerships"
          subtitle="For buyers amplifying artisan exposure and market reach."
          models={growthExpansionModels}
        />
        <PartnershipModel
          title="Creative & Collaborative Partnerships"
          subtitle="Empowering artisans through co-creation and storytelling."
          models={creativeModels}
        />
        <PartnershipModel
          title="Institutional & Strategic Partnerships"
          subtitle="For buyers creating systemic uplift and public value."
          models={institutionalModels}
        />
      </section>

      <section className={`${is4K ? "px-40" : "px-4 xl:px-0"}`}>
        <OurVision />
      </section>

      <section>
        <EthicalSourcingSustainability />
      </section>
    </main>
  );
}
