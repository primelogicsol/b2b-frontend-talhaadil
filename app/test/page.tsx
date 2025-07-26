import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import { Users, Target, DollarSign, Shield } from "lucide-react";
import InsidePartnership from "@/components/Essentials/InsidePartnership";

export default function Page() {
  // Data for HomePage component
  const homePageData = {
    heroTitle: "Swift Partnership Activation",
    heroDescription: `Expand your reach and minimize risk with De Koshur Crafts' Consignment Partnership in the USA. This partnership allows you to display your products in premium retail spaces while retaining ownership until the products are sold. With our expert guidance, we handle everything from inventory management to logistics, ensuring your products reach the right audience in top U.S. locations. Our consignment model offers flexibility and reducing upfront costs, providing you with the opportunity to test the U.S. market and scale at your own pace while benefiting from our extensive network and industry expertise.`,

    // Dynamic Accordion Data
    accordionData: [
      {
        id: "item-1",
        title: "Core Shipping Capabilities",
        content:
          "Cloud based infrastructure with advanced search filters personalized recommendations real time availability omnichannel delivery multi device access scalable infrastructure always active.",
        icon: "users",
      },
      {
        id: "item-2",
        title: "Payment Transaction Features",
        content:
          "Multiple payment methods flexible plans secure gateways currency support real time shipping invoice generation transaction history promo codes payment confirmations.",
        icon: "heartHandshake",
      },
      {
        id: "item-3",
        title: "Security System Features",
        content:
          "PCI compliance with MFA data encryption intrusion detection fraud detection WAF secure account privacy protection continuous monitoring safety standards always.",
        icon: "graduationCap",
      },
      {
        id: "item-4",
        title: "Marketing Growth Tools",
        content:
          "Personalized recommendations targeted emails behavioral targeting multi channel marketing campaign analytics predictive analytics seasonal promotions dynamic content referrals active systems.",
        icon: "stethoscope",
      },
      {
        id: "item-5",
        title: "Dropshipping Partner Program",
        content:
          "No inventory risk direct shipping seamless integration wide selection minimal investment global reach fulfillment management scalable growth shipping notifications returns.",
        icon: "building2",
      },
      {
        id: "item-6",
        title: "Private Label Partnership",
        content:
          "Branding control exclusive products custom packaging increased recognition higher margins vendor support global distribution customization long term partnership flexible orders.",
        icon: "leaf",
      },
      {
        id: "item-7",
        title: "Customer Engagement Formats",
        content:
          "Digital catalogs lookbooks product videos virtual try ons three dimensional configurators live demos review galleries user content recommendations interactive infographics.",
        icon: "factory",
      },
      {
        id: "item-8",
        title: "Customer Financing Options",
        content:
          "Store branded credit cards installment payment plans buy now pay later lease programs layaway plans deferred interest custom schedules offers.",
        icon: "globe2",
      },
    ],
    // Dynamic Comparison Data
  comparisonData:[
  {
    solution: "De Koshur Crafts",
    icon: <Users className="w-6 h-6" />,
    color: "bg-[var(--primary-color)]",
    isMainPlatform: true,
    features: {
      "Breadth of Handicraft Products": { value: "Extensive Handicraft Product Offerings", level: "excellent" },
      "Kashmir Heritage Focus": { value: "Strong emphasis on craftsmanship", level: "excellent" },
      "Kashmir Entire Product Line": { value: "Full Kashmir Craft Representation", level: "excellent" },
      "Seller Verification": { value: "Thorough process", level: "excellent" },
      "Artisan Support": { value: "High artisan support", level: "excellent" },
      "GI Tags/Certifications": { value: "Prominent GI certification for products", level: "excellent" },
      "Origin Traceability": { value: "Detailed blockchain traceability", level: "excellent" },
      "Fair Trade Policies": { value: "Integrated fair trade policies", level: "excellent" },
      "Eco-friendly Practices": { value: "Strong focus on eco-friendly practices", level: "excellent" },
      "Cultural Storytelling": { value: "Rich visual storytelling of artisan culture", level: "excellent" },
      "Multimedia Content": { value: "Extensive multimedia content", level: "excellent" },
      "Personalized Suggestions": { value: "Highly curated, seasonal collections", level: "excellent" },
      "Thematic Collections": { value: "Seasonal and festival-based collections", level: "excellent" },
      "Pricing Transparency": { value: "Fully transparent pricing for products", level: "excellent" },
      "Value-Added Services": { value: "Tailored artisan resources & logistics", level: "excellent" },
      "International Shipping": { value: "Available for artisans and buyers", level: "excellent" },
      "B2B Networking": { value: "Extensive networking opportunities", level: "excellent" },
      "Customer Education": { value: "Extensive resources for buyers", level: "excellent" },
      "Return Policies": { value: "Flexible return policies", level: "excellent" },
      "Brand Trust": { value: "High brand trust", level: "excellent" },
      "Influencer Partnerships": { value: "Planned influencer partnerships", level: "excellent" },
    },
  },
  {
    solution: "EPROLO",
    icon: <Target className="w-6 h-6" />,
 color: "bg-[var(--secondary-color)]",
    isMainPlatform: false,
    features: {
      "Breadth of Handicraft Products": { value: "Broad range of artisan products", level: "good" },
      "Kashmir Heritage Focus": { value: "Minimal emphasis on heritage", level: "limited" },
      "Kashmir Entire Product Line": { value: "No representation", level: "poor" },
      "Seller Verification": { value: "Moderate verification of sellers", level: "moderate" },
      "Artisan Support": { value: "Moderate artisan support", level: "moderate" },
      "GI Tags/Certifications": { value: "No GI certifications", level: "poor" },
      "Origin Traceability": { value: "Limited traceability", level: "limited" },
      "Fair Trade Policies": { value: "Minimal fair trade policies", level: "limited" },
      "Eco-friendly Practices": { value: "Moderate eco-friendly efforts", level: "moderate" },
      "Cultural Storytelling": { value: "Limited cultural storytelling", level: "limited" },
      "Multimedia Content": { value: "Limited multimedia content", level: "limited" },
      "Personalized Suggestions": { value: "Limited suggestions", level: "limited" },
      "Thematic Collections": { value: "Seasonal collections", level: "moderate" },
      "Pricing Transparency": { value: "Transparent pricing model", level: "good" },
      "Value-Added Services": { value: "Business credit & promotional discounts", level: "moderate" },
      "International Shipping": { value: "Available for global buyers", level: "good" },
      "B2B Networking": { value: "B2B networking opportunities", level: "moderate" },
      "Customer Education": { value: "Moderate educational resources", level: "moderate" },
      "Return Policies": { value: "Flexible return policies", level: "good" },
      "Brand Trust": { value: "Moderate trust with artisan vendors", level: "moderate" },
      "Influencer Partnerships": { value: "No focus on influencer partnerships", level: "poor" },
    },
  },
  {
    solution: "Modalyst",
    icon: <DollarSign className="w-6 h-6" />,
  color: "bg-[var(--secondary-color)]",
    isMainPlatform: false,
    features: {
      "Breadth of Handicraft Products": { value: "On-demand products", level: "moderate" },
      "Kashmir Heritage Focus": { value: "No emphasis on heritage", level: "poor" },
      "Kashmir Entire Product Line": { value: "Limited to on-demand items", level: "limited" },
      "Seller Verification": { value: "Verified sellers with on-demand", level: "moderate" },
      "Artisan Support": { value: "Limited artisan support", level: "limited" },
      "GI Tags/Certifications": { value: "No GI certifications", level: "poor" },
      "Origin Traceability": { value: "Traceability based on demand", level: "limited" },
      "Fair Trade Policies": { value: "Optional fair trade practices", level: "limited" },
      "Eco-friendly Practices": { value: "Focused on sustainable materials", level: "moderate" },
      "Cultural Storytelling": { value: "No cultural storytelling", level: "poor" },
      "Multimedia Content": { value: "Limited multimedia content", level: "limited" },
      "Personalized Suggestions": { value: "Personalized based on preferences", level: "moderate" },
      "Thematic Collections": { value: "Limited collections", level: "limited" },
      "Pricing Transparency": { value: "Transparent pricing for products", level: "good" },
      "Value-Added Services": { value: "Custom on-demand services", level: "moderate" },
      "International Shipping": { value: "Global shipping available", level: "good" },
      "B2B Networking": { value: "Limited networking opportunities", level: "limited" },
      "Customer Education": { value: "Moderate educational resources", level: "moderate" },
      "Return Policies": { value: "Return policies", level: "moderate" },
      "Brand Trust": { value: "Moderate trust with on-demand", level: "moderate" },
      "Influencer Partnerships": { value: "No focus on influencer partnerships", level: "poor" },
    },
  },
  {
    solution: "Spocket",
    icon: <Shield className="w-6 h-6" />,
   color: "bg-[var(--secondary-color)]",
    isMainPlatform: false,
    features: {
      "Breadth of Handicraft Products": { value: "Product offerings", level: "moderate" },
      "Kashmir Heritage Focus": { value: "No heritage focus", level: "poor" },
      "Kashmir Entire Product Line": { value: "Limited to dropshipping items", level: "limited" },
      "Seller Verification": { value: "Moderate seller checks", level: "moderate" },
      "Artisan Support": { value: "Limited artisan support", level: "limited" },
      "GI Tags/Certifications": { value: "No GI certifications", level: "poor" },
      "Origin Traceability": { value: "Basic traceability", level: "limited" },
      "Fair Trade Policies": { value: "Optional fair trade practices", level: "limited" },
      "Eco-friendly Practices": { value: "Focus on eco-friendly suppliers", level: "moderate" },
      "Cultural Storytelling": { value: "No cultural storytelling", level: "poor" },
      "Multimedia Content": { value: "Limited multimedia content", level: "limited" },
      "Personalized Suggestions": { value: "Personalized for dropshipping", level: "moderate" },
      "Thematic Collections": { value: "Seasonal and niche collections", level: "moderate" },
      "Pricing Transparency": { value: "Transparent pricing", level: "good" },
      "Value-Added Services": { value: "Product sourcing integration", level: "moderate" },
      "International Shipping": { value: "Global shipping available", level: "good" },
      "B2B Networking": { value: "Networking within dropshipping", level: "limited" },
      "Customer Education": { value: "Limited educational resources", level: "limited" },
      "Return Policies": { value: "Flexible returns based on dropshipping", level: "moderate" },
      "Brand Trust": { value: "Moderate trust with suppliers", level: "moderate" },
      "Influencer Partnerships": { value: "No focus on influencer partnerships", level: "poor" },
    },
  },
  {
    solution: "CJDropshipping",
    icon: <Shield className="w-6 h-6" />,
   color: "bg-[var(--secondary-color)]",
    isMainPlatform: false,
    features: {
      "Breadth of Handicraft Products": { value: "Customizable product range", level: "moderate" },
      "Kashmir Heritage Focus": { value: "Low heritage emphasis", level: "poor" },
      "Kashmir Entire Product Line": { value: "No comprehensive products", level: "poor" },
      "Seller Verification": { value: "Low seller verification", level: "poor" },
      "Artisan Support": { value: "No artisan support", level: "poor" },
      "GI Tags/Certifications": { value: "No GI certifications", level: "poor" },
      "Origin Traceability": { value: "Minimal traceability", level: "poor" },
      "Fair Trade Policies": { value: "No fair trade policies", level: "poor" },
      "Eco-friendly Practices": { value: "Low eco-friendly practices", level: "poor" },
      "Cultural Storytelling": { value: "No cultural storytelling", level: "poor" },
      "Multimedia Content": { value: "Minimal content", level: "poor" },
      "Personalized Suggestions": { value: "Variable suggestions", level: "limited" },
      "Thematic Collections": { value: "Minimal thematic collections", level: "poor" },
      "Pricing Transparency": { value: "Variable transparency", level: "limited" },
      "Value-Added Services": { value: "Variable services", level: "limited" },
      "International Shipping": { value: "Variable shipping", level: "limited" },
      "B2B Networking": { value: "Low business networking", level: "poor" },
      "Customer Education": { value: "Limited education", level: "limited" },
      "Return Policies": { value: "Variable return policies", level: "limited" },
      "Brand Trust": { value: "Low brand trust", level: "poor" },
      "Influencer Partnerships": { value: "No influencer partnerships", level: "poor" },
    },
  },
  {
    solution: "Polar",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-[var(--secondary-color)]",
    isMainPlatform: false,
    features: {
      "Breadth of Handicraft Products": { value: "Customizable product range", level: "moderate" },
      "Kashmir Heritage Focus": { value: "Low heritage emphasis", level: "poor" },
      "Kashmir Entire Product Line": { value: "No comprehensive products", level: "poor" },
      "Seller Verification": { value: "Low seller verification", level: "poor" },
      "Artisan Support": { value: "No artisan support", level: "poor" },
      "GI Tags/Certifications": { value: "No GI certifications", level: "poor" },
      "Origin Traceability": { value: "Minimal traceability", level: "poor" },
      "Fair Trade Policies": { value: "No fair trade policies", level: "poor" },
      "Eco-friendly Practices": { value: "Low eco-friendly practices", level: "poor" },
      "Cultural Storytelling": { value: "No cultural storytelling", level: "poor" },
      "Multimedia Content": { value: "Minimal content", level: "poor" },
      "Personalized Suggestions": { value: "Variable suggestions", level: "limited" },
      "Thematic Collections": { value: "Minimal thematic collections", level: "poor" },
      "Pricing Transparency": { value: "Variable transparency", level: "limited" },
      "Value-Added Services": { value: "Variable services", level: "limited" },
      "International Shipping": { value: "Variable shipping", level: "limited" },
      "B2B Networking": { value: "Low business networking", level: "poor" },
      "Customer Education": { value: "Limited education", level: "limited" },
      "Return Policies": { value: "Variable return policies", level: "limited" },
      "Brand Trust": { value: "Low brand trust", level: "poor" },
      "Influencer Partnerships": { value: "No influencer partnerships", level: "poor" },
    },
  },
],

    // Dynamic Advantages Data
    hexagonalAdvantages: [
      {
        number: "01",
        title: "Authenticity Guaranteed",
        description:
          "Buyers can confidently purchase genuine Kashmiri handicrafts, knowing that each product is certified for authenticity and high-quality craftsmanship.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "02",
        title: "Exclusive Selection",
        description:
          "Enjoy access to a curated collection of unique, handmade products that showcase the rich cultural heritage of Kashmir, not available in mass markets.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "03",
        title: "Convenient Shopping Experience",
        description:
          "Global shipping options make it easy to purchase authentic Kashmiri handicrafts from anywhere, simplifying your experience.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "04",
        title: "Support for Artisans",
        description:
          "Buyers contribute to the sustainable livelihoods of local artisans, promoting fair trade practices and preserving traditional crafts.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "05",
        title: "Economic Empowerment",
        description:
          "Connecting artisans with global markets, the platform drives sustainable economic growth, enhancing livelihoods and community opportunities.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "06",
        title: "Heritage Preservation",
        description:
          "The platform plays a key role in preserving and promoting Kashmiri craftsmanship, ensuring these traditional skills are passed down to future generations.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "07",
        title: "Increased Global Visibility",
        description:
          "Providing a global stage, the platform boosts Kashmiri crafts' reputation, driving demand for unique, high-quality, authentic products.",
        color: "bg-[var(--secondary-color)]",
      },
      {
        number: "08",
        title: "Sustainability",
        description:
          "Fostering eco-friendly practices and ethical production, the platform supports sustainable handicrafts and environmentally-conscious consumer choices.",
        color: "bg-[var(--secondary-color)]",
      },
    ],

    // Dynamic Cost Comparison Data
    costComparison: [
      {
        feature: "Platform Cost",
        deKoshurCrafts: "Free for Early Adopters",
        eprolo: "Free for Buyers",
        modalyst: "Free for Buyers",
        spocket: "Free for Buyers",
        cjdropshipping: "Free for Buyers",
      },
      {
        feature: "Subscription Fees",
        deKoshurCrafts: "None",
        eprolo: "No monthly fee",
        modalyst: "No monthly fee",
        spocket: "No monthly fee",
        cjdropshipping: "No monthly fee",
      },
      {
        feature: "Transaction Fees",
        deKoshurCrafts: "1.5%",
        eprolo: "15% commission fee",
        modalyst: "Based on product cost & shipping",
        spocket: "Based on product cost & shipping",
        cjdropshipping: "Based on product cost & shipping",
      },
      {
        feature: "Payment Processing Fees",
        deKoshurCrafts: "None",
        eprolo: "2.9% + $0.30",
        modalyst: "None",
        spocket: "2.9% + $0.30",
        cjdropshipping: "2.9% + $0.30",
      },
      {
        feature: "Product Cost",
        deKoshurCrafts: "Competitive pricing",
        eprolo: "Varies, set by the vendor",
        modalyst: "Based on on-demand model",
        spocket: "Varies, set by the vendor",
        cjdropshipping: "Varies, set by the vendor",
      },
      {
        feature: "Shipping Fees",
        deKoshurCrafts: "Paid by buyer",
        eprolo: "Paid by buyer",
        modalyst: "Paid by buyer",
        spocket: "Paid by buyer",
        cjdropshipping: "Paid by buyer",
      },
      {
        feature: "GI Certification Support",
        deKoshurCrafts: "Available for artisan products",
        eprolo: "Not available",
        modalyst: "Not applicable",
        spocket: "Not available",
        cjdropshipping: "Not available",
      },
      {
        feature: "Marketing Tools",
        deKoshurCrafts: "Subsidized support & digital tools",
        eprolo: "Discount and promotional tools",
        modalyst: "Limited marketing tools",
        spocket: "Limited marketing tools",
        cjdropshipping: "Limited marketing tools",
      },
      {
        feature: "Return Costs",
        deKoshurCrafts: "Buyer responsibility",
        eprolo: "Buyer responsibility",
        modalyst: "Buyer responsibility",
        spocket: "Buyer responsibility",
        cjdropshipping: "Buyer responsibility",
      },
      {
        feature: "Loyalty Rewards",
        deKoshurCrafts: "Available",
        eprolo: "No",
        modalyst: "No",
        spocket: "No",
        cjdropshipping: "No",
      },
      {
        feature: "Blockchain Traceability",
        deKoshurCrafts: "Included for all products",
        eprolo: "Not available",
        modalyst: "Not available",
        spocket: "Not available",
        cjdropshipping: "Not available",
      },
      {
        feature: "Custom Branding",
        deKoshurCrafts: "Available for all vendors",
        eprolo: "No",
        modalyst: "Available",
        spocket: "Available",
        cjdropshipping: "Available",
      },
      {
        feature: "Multimedia Storytelling",
        deKoshurCrafts: "Available for artisan stories",
        eprolo: "No",
        modalyst: "No",
        spocket: "No",
        cjdropshipping: "No",
      },
      {
        feature: "Eco-Friendly Practices",
        deKoshurCrafts: "Integrated with platform",
        eprolo: "Not emphasized",
        modalyst: "Available for certain products",
        spocket: "Not emphasized",
        cjdropshipping: "Not emphasized",
      },
    ],

    // Dynamic Pricing Plans Data
    pricingPlans: [
      {
        name: "Starter Plan",
        price: { monthly: 30, yearly: 360 },
        earlyAdopters: "1-20",
        features: [
          "Free platform access with basic features",
          "Drop shipping capabilities",
          "Private label products",
          "Basic customer support",
        ],
        popular: false,
        description: "Perfect for beginners starting their journey",
      },
      {
        name: "Basic Plan",
        price: { monthly: 179, yearly: 2148 },
        earlyAdopters: "1-17",
        features: [
          "All Starter Plan benefits",
          "Social media promotion",
          "Basic marketing templates",
          "Enhanced support",
        ],
        popular: false,
        description: "Ideal for growing businesses",
      },
      {
        name: "Growth Plan",
        price: { monthly: 311, yearly: 3732 },
        earlyAdopters: "1-15",
        features: [
          "All Basic Plan benefits",
          "Free listing optimization",
          "Personalized consultations",
          "Advanced analytics",
        ],
         popular: false,

        description: "Most popular for scaling businesses",
      },
      {
        name: "Premium Plan",
        price: { monthly: 1199, yearly: 14388 },
        earlyAdopters: "1-11",
        features: [
          "All Growth Plan benefits",
          "Free 3 months shipping",
          "Premium marketing campaigns",
          "Priority support",
        ],
        popular: false,
        description: "For established enterprises",
      },
      {
        name: "Elite Plan",
        price: { monthly: 1499, yearly: 17988 },
        earlyAdopters: "1-8",
        features: [
          "All Premium Plan benefits",
          "Exclusive marketplace promotions",
          "Personal account manager",
          "VIP treatment",
        ],
        popular: false,
        description: "Elite level service and support",
      },
      {
        name: "Platinum Plan",
        price: { monthly: 1999, yearly: 23988 },
        earlyAdopters: "1-5",
        features: [
          "All Elite Plan benefits",
          "Custom business solutions",
          "Dedicated support team",
          "White-glove service",
        ],
        popular: false,
        description: "Ultimate premium experience",
      },
    ],

    // Dynamic FAQ Data
    faqs: [
      {
        title: "Can I select my shipping carrier?",
        desc: "Yes, you can choose from multiple shipping carriers during checkout, each with different pricing and delivery timeframes to suit your needs.",
      },
      {
        title: "Are there any extra shipping charges?",
        desc: "All shipping costs are calculated and displayed upfront. There are no hidden fees - what you see at checkout is what you pay.",
      },
      {
        title: "Can I track my package?",
        desc: "You'll receive tracking information once your order ships, allowing you to monitor your package's progress in real-time.",
      },
      {
        title: "What's the return policy for Drop Shipping?",
        desc: "We offer flexible return policies for Drop Shipping orders. Items can be returned within 30 days of delivery in original condition.",
      },
      {
        title: "Can I return Private Label products?",
        desc: "Private Label products have specific return policies due to their customized nature. Please contact our support team for assistance with Private Label returns.",
      },
      {
        title: "How do I request a refund?",
        desc: "To request a refund, contact our customer support team with your order details. Refunds are processed according to our return policy terms.",
      },
      {
        title: "Do I have a warranty on products?",
        desc: "Yes, all products come with quality guarantees. Warranty terms vary by product type and are clearly specified in the product description.",
      },
      {
        title: "How do I create a buyer account?",
        desc: "Creating an account is simple - click 'Sign Up', provide your basic information, verify your email, and you're ready to start shopping.",
      },
      {
        title: "Do I have access to 24/7 customer support?",
        desc: "Yes, we provide 24/7 customer support through multiple channels including live chat, email, and phone for all our registered users.",
      },
    ],

    // Dynamic Service Cards Data
    serviceCards: [
      {
        title: "Drop Shipping",
        description:
          "Source premium handcrafted Kashmiri products through drop shipping, white-label, and seamless fulfillment.",
        icon: "shoppingCart" as "shoppingCart",
        featured: true,
      },
      {
        title: "Consignment",
        description:
          "Connect consignees with consignors for risk-free Kashmiri handicraft inventory management.",
        icon: "handshake" as "handshake",
        featured: false,
      },
      {
        title: "Exhibition",
        description:
          "Partner with Kashmir vendor exhibitions, secure brand sponsorship in premier US handicrafts expo.",
        icon: "building" as "building",
        featured: false,
      },
      {
        title: "Import Export",
        description:
          "Import luxury, premium, world-renowned Kashmiri handicrafts for high-end clientele in the USA.",
        icon: "plane" as "plane",
        featured: false,
      },
      {
        title: "Subsidiary",
        description:
          "Join the DKC USA Buyer Network for strategic and high-value partnerships in luxury handicrafts.",
        icon: "warehouse" as "warehouse",
        featured: false,
      },
      {
        title: "Brick & Mortar",
        description:
          "Enable U.S. stores, integrate Kashmiri vendors, optimizing resources & showcasing luxury handicrafts.",
        icon: "store" as "store",
        featured: false,
      },
      {
        title: "Franchise",
        description:
          "Partner with or own a DKC franchise in the USA, showcasing authentic Kashmiri handicrafts.",
        icon: "home" as "home",
        featured: false,
      },
      {
        title: "Franchise",
        description:
          "Partner with or own a DKC franchise in the USA, showcasing authentic Kashmiri handicrafts.",
        icon: "home" as "home",
        featured: false,
      },
    ],
  };

  return (
    <div>
      <VerticalHeroSlider />
      <InsidePartnership {...homePageData} />
    </div>
  );
}
