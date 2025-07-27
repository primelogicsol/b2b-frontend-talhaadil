import { PartnershipPage } from "@/components/Essentials/PartnershipComponent";
import { PartnershipPageProps } from "@/components/Essentials/PartnershipComponent";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import InDepthFAQ from "@/components/Material/InDepthFAQ";
import HorizontalSwipeSection from "@/components/Section/HorizontalSwipeSection";
import HowItWorksSection from "@/components/Section/HowItWorksSection";

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
    description:
      "We handle fast shipping and eco friendly packaging so you can focus only on growth.",
  },
  {
    title: "Professional Product Photos",
    description:
      "Receive high quality crafted photos to help your product listings shine bright and attract buyers.",
  },
  {
    title: "CraftLore Global Marketing",
    description:
      "Gain free exposure through CraftLore ensuring your crafts are seen across multiple platforms worldwide.",
  },
  {
    title: "Artstay Direct Buyers",
    description:
      "Artstay connects buyers directly to your store giving wide global exposure and steady sales.",
  },
  {
    title: "Prime Logic Websites",
    description:
      "Our in house team builds and maintains your ecommerce platform completely free of cost.",
  },
  {
    title: "Hamadan Revival Foundation",
    description:
      "HCRF supports artisans through advocacy guidance and strong policy initiatives for lasting impact.",
  },
  {
    title: "Progressive Free Services",
    description:
      "Meet required KPIs and retention to unlock free marketing development and extended support.",
  },
],

  buyerTitle: "De Koshur Crafts Buyer Partnership Marketplace",
  buyerTagline:
    "Every Purchase is a Partnership. Every Buyer Empowers a Legacy.",
  buyerDescription:
    "Buyers don't just source products — they enable livelihoods, preserve culture, and scale ethical trade.",
  coreTradeTitle: "Core Trade Partnerships",
  coreTradeDescription:
    "Entry-level sourcing relationships that open the door to verified vendor support.",
  coreTradePartnerships: [
  {
    title: "Drop Shipping Buyer",
    description:
      "Source goods without holding stock while vendors handle orders and ship directly to buyers.",
    details:
      "No upfront costs while expanding markets, vendors grow sales, buyers avoid storage or holding risks.",
    kpi: "KPI 7+",
    retention: "No retention needed",
  },
  {
    title: "Consignment Product Buyer",
    description:
      "List vendor items safely on your platform and only pay after verified customer purchase.",
    details:
      "Eliminates warehouse risks while vendors gain exposure, perfect choice for testing new collections carefully.",
    kpi: "KPI 7+",
    retention: "Eighteen months needed",
  },
  {
    title: "Certified Import Buyer",
    description:
      "Purchase GI certified goods for global trade and manage labeling compliance and customs.",
    details:
      "Access new markets with vendor identity protected while ensuring documentation and proper export handling.",
    kpi: "KPI 8+",
    retention: "Six months prior",
  },
  {
    title: "Wholesale Distribution Buyer",
    description:
      "Place larger orders for resale and access verified traceable product lines across regions.",
    details:
      "Faster production cycles with stronger margins allowing vendor scale and improved packaging upgrades.",
    kpi: "KPI 7+",
    retention: "Three months prior",
  },
],

growthTitle: "Growth Brand Expansion",
growthDescription:
  "Created for buyers expanding vendor reach through exclusive spaces, events, or hosting options.",

growthPartnerships: [
  {
    title: "Exhibition Event Buyer",
    description:
      "Join or host curated expos and secure pre orders for exclusive crafted product collections.",
    details:
      "Co brand with support provided while vendors gain visibility and create strong industry networks.",
    kpi: "KPI 8+",
    retention: "Six months prior",
  },
  {
    title: "Auction Bidding Buyer",
    description:
      "Access artisan pieces through trusted bidding designed for collectors, curators, and retailers.",
    details:
      "Smart contracts ensure transparent sales while boosting vendor income with rare seasonal items.",
    kpi: "KPI 8.5+",
    retention: "Six months prior",
  },
  {
    title: "Private Label Buyer",
    description:
      "Rebrand crafts with your identity while following ethical sourcing and packaging guidelines.",
    details:
      "Vendors scale production while preserving identity and customization supports unique consumer needs.",
    kpi: "KPI 9+",
    retention: "Twelve months prior",
  },
  {
    title: "Retail Space Buyer",
    description:
      "Offer shelf space for vendors and act as partner displaying curated crafted products.",
    details:
      "Share reports and branding standards so vendors gain visibility and increased retail traffic.",
    kpi: "KPI 9+",
    retention: "Twelve months prior",
  },
],

creativeTitle: "Creative Collaborations",
creativeDescription:
  "Partnerships enabling design innovation and knowledge sharing with artisan vendors globally.",

creativePartnerships: [
  {
    title: "Design Knowledge Partner",
    description:
      "Co create seasonal collections working on patterns materials and detailed packaging improvements.",
    details:
      "Encourages artisan innovation and helps brands achieve niche positioning with global influence.",
    kpi: "KPI 8+",
    retention: "Six months prior",
  },
  {
    title: "Media Storytelling Partner",
    description:
      "Fund or produce artisan content including blogs reels and behind the scenes features.",
    details:
      "Strengthens vendor branding while cultural narratives are highlighted beyond product sales.",
    kpi: "KPI 7+",
    retention: "Six months prior",
  },
  {
    title: "Buyer Mentor Program",
    description:
      "Guide vendors through catalogs pricing strategies and marketing improvement sessions regularly.",
    details:
      "Boosts vendor readiness and confidence through direct category management and expert mentorship.",
    kpi: "KPI 9+",
    retention: "Twelve months prior",
  },
  {
    title: "Craft Innovation Patron",
    description:
      "Sponsor sustainable tools packaging methods and help revive endangered artisan crafting techniques.",
    details:
      "Provides vendors access to resources and recognition as key innovation aligned partners.",
    kpi: "KPI 8+",
    retention: "Twelve months prior",
  },
],

institutionalTitle: "Institutional Strategies",
institutionalDescription:
  "For large buyers and investors enabling structured growth and verified artisan engagement.",

institutionalPartnerships: [
  {
    title: "Strategic Investor Buyer",
    description:
      "Provide equity or infrastructure to vendors supporting platforms retail or supply chain.",
    details:
      "Helps scale artisan businesses while securing finance and operational growth opportunities globally.",
    kpi: "KPI 9+",
    retention: "Twelve months prior",
  },
  {
    title: "Museum Archive Buyer",
    description:
      "Source curated heritage collections and work with certified vendors documenting culture.",
    details:
      "Supports museums and research groups validating authenticity and elevating artisan reputation worldwide.",
    kpi: "KPI 9+",
    retention: "Twelve months prior",
  },
  {
    title: "NGO Project Buyer",
    description:
      "Support sourcing through funded missions or SDG aligned government cultural projects.",
    details:
      "Ensures fair trade and vendor livelihood while promoting artisan visibility on platforms.",
    kpi: "KPI 8+",
    retention: "Twelve months prior",
  },
  {
    title: "Impact Measure Buyer",
    description:
      "Track vendor metrics using ESG SDG or verified traceability based reporting systems.",
    details:
      "Publishes transparent performance data driving trust and funding for artisan partners.",
    kpi: "KPI 9+",
    retention: "Twenty four months",
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
  ctaText:
    "Ready to join our partnership ecosystem and empower Kashmiri artisans while growing your business?",
  ctaButtonText: "Start Your Partnership Journey",
};

export default function Component() {
  const howItWorksData = {
    title: "How It Works",
    description:
      "Swift Partnership Activation: Experience a seamless journey from registration to marketplace leadership through DKC’s transformative onboarding process, empowering buyers with tools, training, and support to thrive in a global marketplace.",
    imageUrl: "/images/onboarding.jpg", // Ensure this image exists in /public/images
    imageAlt: "Onboarding Illustration",
    mini_desc:" Our Streamlined Onboarding Process",
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
  };

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
  ];


const dummyFAQData = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all items. Contact our support for assistance."
  },
  {
    id: 2,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping fees may vary based on location."
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer: "Once shipped, you’ll receive an email with the tracking number and link."
  },
  {
    id: 4,
    question: "Can I modify my order after placing it?",
    answer: "Modifications are possible within 2 hours of placing the order. Contact support quickly."
  },
  {
    id: 5,
    question: "What payment methods are accepted?",
    answer: "We accept Visa, Mastercard, PayPal, and bank transfers."
  },
  {
    id: 6,
    question: "Are your products sustainable?",
    answer: "Yes! We focus on eco-friendly packaging and responsibly sourced materials."
  },
  {
    id: 7,
    question: "Do you offer bulk discounts?",
    answer: "Yes, for orders over 50 items. Please reach out to our sales team for a quote."
  },
  {
    id: 8,
    question: "How do I contact customer support?",
    answer: "You can email us at support@example.com or use the chat widget on our site."
  }
]

  
  return (
    <div>
      <VerticalHeroSlider/>
      <PartnershipPage {...defaultProps} />
      <HowItWorksSection {...howItWorksData}/>
      <HorizontalSwipeSection testimonials={partnerTestimonials} />
      <InDepthFAQ data={dummyFAQData}/>
    </div>
  );
}
