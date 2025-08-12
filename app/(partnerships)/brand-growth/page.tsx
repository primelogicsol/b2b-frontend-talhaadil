
import { PartnershipPage } from "@/components/Pages/PartnershipComponent"
import type { PartnershipPageProps } from "@/components/Pages/PartnershipComponent"
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner"
import InDepthFAQ from "@/components/Material/InDepthFAQ"
import HorizontalSwipeSection from "@/components/Section/HorizontalSwipeSection"
import HowItWorksSection from "@/components/Section/HowItWorksSection"

const defaultProps: PartnershipPageProps = {
  vendorTitle: "Why Work With De Koshur?",
  vendorSubtitle: "Your One-Stop Solution for Success",
  vendorIntro:
    "Partnering with De Koshur Crafts means no barriers to success. We provide comprehensive support to help you grow your business with authentic Kashmiri crafts.",
  vendorBenefits: [
    {
      title: "Authenticity Provenance Certified",
      description:
        "Every product is GI certified to ensure genuine Kashmiri crafts with trusted verified origins worldwide.",
    },
    {
      title: "Global Market Access",
      description:
        "Use our strong platform to reach North America and global markets without heavy upfront costs today.",
    },
    {
      title: "Logistics Packaging Support",
      description: "We handle fast shipping and eco friendly packaging so you can focus only on growth.",
    },
    {
      title: "Professional Product Photos",
      description: "Receive high quality crafted photos to help your product listings shine bright and attract buyers.",
    },
    {
      title: "CraftLore Global Marketing",
      description:
        "Gain free exposure through CraftLore ensuring your crafts are seen across multiple platforms worldwide.",
    },
    {
      title: "Artstay Direct Buyers",
      description: "Artstay connects buyers directly to your store giving wide global exposure and steady sales.",
    },
    {
      title: "Prime Logic Websites",
      description: "Our in house team builds and maintains your ecommerce platform completely free of cost.",
    },
    {
      title: "Hamadan Revival Foundation",
      description: "HCRF supports artisans through advocacy guidance and strong policy initiatives for lasting impact.",
    },
    {
      title: "Progressive Free Services",
      description: "Meet required KPIs and retention to unlock free marketing development and extended support.",
    },
  ],

  buyerTitle: "De Koshur Crafts Buyer Partnership Marketplace",
  buyerTagline: "Every Purchase is a Partnership. Every Buyer Empowers a Legacy.",
  buyerDescription:
    "Buyers don't just source products — they enable livelihoods, preserve culture, and scale ethical trade.",
  Title: "Core Trade Partnerships",
  Description: "Entry-level sourcing relationships that open the door to verified vendor support.",

  Partnerships: [
    {
      title: "Exhibition",
      description: "Showcase vendor products at curated events where buyers can browse, order, and connect directly.",
      details: "No upfront costs while expanding markets, vendors grow sales, buyers avoid storage or holding risks.",
      kpi: "KPI 7+",
      retention: "No retention needed",
      link:'brand-growth/exhibition',
    },
    {
      title: "Auction",
      description: "Sell unique or limited vendor items through competitive bidding to maximize value and exposure.",
      details:
        "Eliminates warehouse risks while vendors gain exposure, perfect choice for testing new collections carefully.",
      kpi: "KPI 7+",
      retention: "Eighteen months needed",
      link:'brand-growth/auction&bidding',
    },
    {
      title: "White Label",
      description: "Offer GI-certified goods under your own brand while ensuring labeling and compliance standards.",
      details:
        "Access new markets with vendor identity protected while ensuring documentation and proper export handling.",
      kpi: "KPI 8+",
      retention: "Six months prior",
      link:'brand-growth/white-label',
    },
    {
      title: "Brick & Mortar",
      description: "Stock physical stores with verified, traceable products for trusted and scalable retail sales.",
      details: "Faster production cycles with stronger margins allowing vendor scale and improved packaging upgrades.",
      kpi: "KPI 7+",
      retention: "Three months prior",
      link:'brand-growth/brick&mortar',
    },
  ],
  

  tierAdvancementTitle: "Tier Advancement Logic",
  tierAdvancements: [
    {
      tier: "Core Trade",
      fromTier: "Entry",
      retention: "0–18 months",
      kpiThreshold: "7–8+",
    },
    {
      tier: "Growth & Brand",
      fromTier: "Core",
      retention: "6–12 months",
      kpiThreshold: "8–9+",
    },
    {
      tier: "Creative & Collaborative",
      fromTier: "Growth",
      retention: "6–12 months",
      kpiThreshold: "8–9+",
    },
    {
      tier: "Strategic",
      fromTier: "Growth/Creative",
      retention: "12–24 months",
      kpiThreshold: "9–9.5+",
    },
  ],
  title: "Partnership Opportunities",
  subtitle: "Discover diverse collaboration pathways tailored to your business needs",
  categories: [
    {
      title: "Core Trade Partnerships",

      items: [
        { title: "Drop Shipping / E-commerce" },
        { title: "Consignment " },
        { title: "Certified Import Export" },
        { title: "Wholesale & Distribution" },
      ],
    },
    {
      title: "Growth Brand Expansion",

      items: [
        { title: "Exhibition " },
        { title: "Auction & Bidding " },
        { title: "White Label" },
        { title: "Brick & Mortar" },
      ],
    },
    {
      title: "Creative Collaborations",

      items: [
        { title: "Design Collaboration" },
        { title: "Media & Storytelling " },
        { title: "Warehouse" },
        { title: "Packaging" },
      ],
    },
    {
      title: "Institutional Strategies",

      items: [
        { title: "Logistics" },
        { title: "Museum / Institutional" },
        { title: "NGO & Government" },
        { title: "Technology Partnership" },
      ],
    },
  ],
}

export default function Component() {
 

  const howItWorksData = {
    title: "How It Works",
    description:
      "Swift Partnership Activation: Experience a seamless journey from registration to marketplace leadership through DKC’s transformative onboarding process, empowering buyers with tools, training, and support to thrive in a global marketplace.",
    imageUrl: "/images/onboarding.jpg", // Ensure this image exists in /public/images
    imageAlt: "Onboarding Illustration",
    mini_desc: " Our Streamlined Onboarding Process",
    phases: [
      "Registration Phase      ",
      "Document Submission Phase      ",
      "Eligibility Review Phase      ",
      "Agreement and Certification Phase      ",
      "Profile Setup Phase      ",
      "Partnership-Specific Onboarding Phase      ",
      "Training and Resource Checkup Phase      ",
      "Portal Access Activation Phase      ",
      "Partnership Launch and Support Phase      ",
      "KPI and Marketplace Engagement Phase      ",
    ],
  }

  const partnerTestimonials = [
    {
      id: 1,
      rating: 5,
      quote:
        "Partnering with De Koshur Crafts has opened international markets for our handmade rugs. The platform is reliable, and support is always prompt.",
      name: "Mehboob Khan",
      title: "Founder, Khan Rugs",
      avatar: "/images/partners/partner1.jpg",
    },
    {
      id: 2,
      rating: 4,
      quote:
        "We were able to showcase our shawls globally with ease. The team behind this platform truly values craftsmanship.",
      name: "Aaliya Mir",
      title: "Artisan, Aaliya Shawls",
      avatar: "/images/partners/partner2.jpg",
    },
    {
      id: 3,
      rating: 5,
      quote:
        "Excellent onboarding and exposure. Our papier-mâché crafts have seen demand from places we never imagined.",
      name: "Fayaz Lone",
      title: "Co-Founder, Lone Creations",
      avatar: "/images/partners/partner3.jpg",
    },
  ]

  const dummyFAQData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. Contact our support for assistance.",
    },
    {
      id: 2,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping fees may vary based on location.",
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer: "Once shipped, you’ll receive an email with the tracking number and link.",
    },
    {
      id: 4,
      question: "Can I modify my order after placing it?",
      answer: "Modifications are possible within 2 hours of placing the order. Contact support quickly.",
    },
    {
      id: 5,
      question: "What payment methods are accepted?",
      answer: "We accept Visa, Mastercard, PayPal, and bank transfers.",
    },
    {
      id: 6,
      question: "Are your products sustainable?",
      answer: "Yes! We focus on eco-friendly packaging and responsibly sourced materials.",
    },
    {
      id: 7,
      question: "Do you offer bulk discounts?",
      answer: "Yes, for orders over 50 items. Please reach out to our sales team for a quote.",
    },
    {
      id: 8,
      question: "How do I contact customer support?",
      answer: "You can email us at support@example.com or use the chat widget on our site.",
    },
  ]

  return (
    <div >
      {" "}
      {/* Apply max-width for 4K */}
      <VerticalHeroSlider />
      <PartnershipPage {...defaultProps} />
      <HowItWorksSection {...howItWorksData} />
      <HorizontalSwipeSection testimonials={partnerTestimonials} />
      <InDepthFAQ data={dummyFAQData} />
    </div>
  )
}
