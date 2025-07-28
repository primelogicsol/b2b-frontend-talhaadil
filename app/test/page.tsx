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
 comparisonData : [
  {
    feature: "Product Range",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive Range", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Broad Range", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "On-demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Standard Range", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Custom Range", isOurPlatform: false },
    }
  },
  {
    feature: "Heritage Focus",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Strong Focus", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Minimal Focus", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No Focus", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No Focus", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low Focus", isOurPlatform: false },
    }
  },
  {
    feature: "Kashmir Line",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Full Line", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "None", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  },
  {
    feature: "Seller Check",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Thorough", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Verified", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Moderate", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low", isOurPlatform: false },
    }
  },
  {
    feature: "Artisan Help",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "High Support", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  },
  {
    feature: "GI Certified",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Certified", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Not Certified", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "None", isOurPlatform: false },
      spocket: { name: "Spocket", value: "None", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  },
  {
    feature: "Traceability",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Blockchain", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "On-Demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Basic", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal", isOurPlatform: false },
    }
  },
  {
    feature: "Fair Trade",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Integrated", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Minimal", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Optional", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Optional", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  },
  {
    feature: "Eco Focus",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Strong Focus", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Sustainable", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Eco Suppliers", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low", isOurPlatform: false },
    }
  },
  {
    feature: "Storytelling",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Rich Stories", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "None", isOurPlatform: false },
      spocket: { name: "Spocket", value: "None", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  },
  {
    feature: "Media Content",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal", isOurPlatform: false },
    }
  },
  {
    feature: "Suggestions",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Highly Curated", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Preference Based", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Dropship Based", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable", isOurPlatform: false },
    }
  },
  {
    feature: "Collections",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Seasonal/Festive", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Seasonal", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Niche", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal", isOurPlatform: false },
    }
  },
  {
    feature: "Pricing Clarity",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Fully Clear", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Transparent", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Transparent", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Transparent", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable", isOurPlatform: false },
    }
  },
  {
    feature: "Extra Services",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Tailored Help", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Discounts", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Custom Demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Sourcing", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable", isOurPlatform: false },
    }
  },
  {
    feature: "Shipping",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Global", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Global", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Global", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Global", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable", isOurPlatform: false },
    }
  },
  {
    feature: "B2B Links",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Available", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Internal", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low", isOurPlatform: false },
    }
  },
  {
    feature: "Buyer Education",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Moderate", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Limited", isOurPlatform: false },
    }
  },
  {
    feature: "Returns",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Flexible", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Flexible", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Standard", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Flexible", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable", isOurPlatform: false },
    }
  },
  {
    feature: "Brand Trust",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "High Trust", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Moderate", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Moderate", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low", isOurPlatform: false },
    }
  },
  {
    feature: "Influencer Deals",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Planned", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "None", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "None", isOurPlatform: false },
      spocket: { name: "Spocket", value: "None", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    }
  }
],



hexagonalAdvantages: [

  {number: "01",
  title: "Certified Authentic Craftsmanship",
  description:
    "Every item is certified for authenticity and craftsmanship, letting buyers shop with confidence in Kashmiri products.",
  color: "bg-[var(--secondary-color)]",
},
{
  number: "02",
  title: "Curated Handmade Selection",
  description:
    "Access a curated range of handmade pieces that reflect Kashmir's cultural legacy — not found in mass-market stores.",
  color: "bg-[var(--secondary-color)]",
},
  {
    number: "03",
    title: "Seamless Global Shopping",
    description:
      "With reliable worldwide delivery, shoppers can enjoy Kashmiri crafts from anywhere, hassle-free and convenient.",
    color: "bg-[var(--secondary-color)]",
  },
  {
    number: "04",
    title: "Empowering Local Artisans",
    description:
      "Each purchase supports fair trade and sustains local artisans, helping preserve traditional skills and livelihoods.",
    color: "bg-[var(--secondary-color)]",
  },
  {
    number: "05",
    title: "Driving Economic Growth",
    description:
      "By connecting craftspeople with global buyers, the platform creates steady income and new community opportunities.",
    color: "bg-[var(--secondary-color)]",
  },
  {
    number: "06",
    title: "Cultural Heritage Protection",
    description:
      "Through each sale, we help ensure ancient Kashmiri craft traditions are valued, sustained, and passed forward.",
    color: "bg-[var(--secondary-color)]",
  },
  {
    number: "07",
    title: "Expanding Global Reach",
    description:
      "The marketplace boosts international awareness of Kashmiri arts, growing demand for authentic handmade goods.",
    color: "bg-[var(--secondary-color)]",
  },
  {
    number: "08",
    title: "Eco-Conscious Crafting",
    description:
      "Sustainable, ethical practices ensure eco-friendly production, offering buyers a responsible way to shop.",
    color: "bg-[var(--secondary-color)]",
  },
],

    // Dynamic Cost Comparison Data
costComparison : [{
    feature: "Platform Fee",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Free", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Free", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Free Plan", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Free Plan", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Free", isOurPlatform: false },
    },
  },
  {
    feature: "Subscription Fee",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Free", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Free", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "$35+", isOurPlatform: false },
      spocket: { name: "Spocket", value: "$39.99+", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Free", isOurPlatform: false },
    },
  },
  {
    feature: "Transaction Fee",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "None", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "None", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "5%+", isOurPlatform: false },
      spocket: { name: "Spocket", value: "None", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "None", isOurPlatform: false },
    },
  },
  {
    feature: "Shipping Cost",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Varies", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Low", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Varies", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Varies", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low", isOurPlatform: false },
    },
  },
  {
    feature: "Return Policy",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Vendor-Based", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Vendor-Based", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Varies", isOurPlatform: false },
      spocket: { name: "Spocket", value: "5 Days", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "15 Days", isOurPlatform: false },
    },
  },
  {
    feature: "GI Certified",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Yes", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No", isOurPlatform: false },
    },
  },
  {
    feature: "Ethical Source",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Yes", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No", isOurPlatform: false },
    },
  },
  {
    feature: "Eco Friendly",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Yes", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Some", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No", isOurPlatform: false },
    },
  },
  {
    feature: "Craft Verified",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Yes", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No", isOurPlatform: false },
    },
  },
  {
    feature: "Traceable Tech",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Blockchain", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No", isOurPlatform: false },
    },
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
