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
    feature: "Breadth of Handicraft Products",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive Handicraft Product Offerings", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Broad range of artisan products", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "On-demand products", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Product offerings", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Customizable product range", isOurPlatform: false },
    }
  },
  {
    feature: "Kashmir Heritage Focus",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Strong emphasis on craftsmanship", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Minimal emphasis on heritage", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No emphasis on heritage", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No heritage focus", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low heritage emphasis", isOurPlatform: false },
    }
  },
  {
    feature: "Kashmir Entire Product Line",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Full Kashmir Craft Representation", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No representation", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited to on-demand items", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited to dropshipping items", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No comprehensive products", isOurPlatform: false },
    }
  },
  {
    feature: "Seller Verification",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Thorough process", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate verification of sellers", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Verified sellers with on-demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Moderate seller checks", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low seller verification", isOurPlatform: false },
    }
  },
  {
    feature: "Artisan Support",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "High artisan support", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate artisan support", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited artisan support", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited artisan support", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No artisan support", isOurPlatform: false },
    }
  },
  {
    feature: "GI Tags/Certifications",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Prominent GI certification for products", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No GI certifications", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No GI certifications", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No GI certifications", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No GI certifications", isOurPlatform: false },
    }
  },
  {
    feature: "Origin Traceability",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Detailed blockchain traceability", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited traceability", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Traceability based on demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Basic traceability", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal traceability", isOurPlatform: false },
    }
  },
  {
    feature: "Fair Trade Policies",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Integrated fair trade policies", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Minimal fair trade policies", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Optional fair trade practices", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Optional fair trade practices", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No fair trade policies", isOurPlatform: false },
    }
  },
  {
    feature: "Eco-friendly Practices",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Strong focus on eco-friendly practices", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate eco-friendly efforts", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Focused on sustainable materials", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Focus on eco-friendly suppliers", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low eco-friendly practices", isOurPlatform: false },
    }
  },
  {
    feature: "Cultural Storytelling",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Rich visual storytelling of artisan culture", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited cultural storytelling", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No cultural storytelling", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No cultural storytelling", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No cultural storytelling", isOurPlatform: false },
    }
  },
  {
    feature: "Multimedia Content",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive multimedia content", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited multimedia content", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited multimedia content", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited multimedia content", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal content", isOurPlatform: false },
    }
  },
  {
    feature: "Personalized Suggestions",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Highly curated, seasonal collections", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Limited suggestions", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Personalized based on preferences", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Personalized for dropshipping", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable suggestions", isOurPlatform: false },
    }
  },
  {
    feature: "Thematic Collections",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Seasonal and festival-based collections", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Seasonal collections", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited collections", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Seasonal and niche collections", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Minimal thematic collections", isOurPlatform: false },
    }
  },
  {
    feature: "Pricing Transparency",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Fully transparent pricing for products", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Transparent pricing model", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Transparent pricing for products", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Transparent pricing", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable transparency", isOurPlatform: false },
    }
  },
  {
    feature: "Value-Added Services",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Tailored artisan resources & logistics", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Business credit & promotional discounts", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Custom on-demand services", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Product sourcing integration", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable services", isOurPlatform: false },
    }
  },
  {
    feature: "International Shipping",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Available for artisans and buyers", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Available for global buyers", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Global shipping available", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Global shipping available", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable shipping", isOurPlatform: false },
    }
  },
  {
    feature: "B2B Networking",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive networking opportunities", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "B2B networking opportunities", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Limited networking opportunities", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Networking within dropshipping", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low business networking", isOurPlatform: false },
    }
  },
  {
    feature: "Customer Education",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Extensive resources for buyers", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate educational resources", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Moderate educational resources", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Limited educational resources", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Limited education", isOurPlatform: false },
    }
  },
  {
    feature: "Return Policies",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Flexible return policies", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Flexible return policies", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Return policies", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Flexible returns based on dropshipping", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Variable return policies", isOurPlatform: false },
    }
  },
  {
    feature: "Brand Trust",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "High brand trust", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "Moderate trust with artisan vendors", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "Moderate trust with on-demand", isOurPlatform: false },
      spocket: { name: "Spocket", value: "Moderate trust with suppliers", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "Low brand trust", isOurPlatform: false },
    }
  },
  {
    feature: "Influencer Partnerships",
    platforms: {
      deKoshurCrafts: { name: "De Koshur Crafts", value: "Planned influencer partnerships", isOurPlatform: true },
      eprolo: { name: "EPROLO", value: "No focus on influencer partnerships", isOurPlatform: false },
      modalyst: { name: "Modalyst", value: "No focus on influencer partnerships", isOurPlatform: false },
      spocket: { name: "Spocket", value: "No focus on influencer partnerships", isOurPlatform: false },
      cjdropshipping: { name: "CJDropshipping", value: "No influencer partnerships", isOurPlatform: false },
    }
  }
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
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Free for Early Adopters",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Free for Buyers",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Free for Buyers",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Free for Buyers",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Free for Buyers",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Subscription Fees",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "None",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "No monthly fee",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "No monthly fee",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "No monthly fee",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "No monthly fee",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Transaction Fees",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "1.5%",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "15% commission fee",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Based on product cost & shipping",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Based on product cost & shipping",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Based on product cost & shipping",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Payment Processing Fees",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "None",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "2.9% + $0.30",
            isOurPlatform: false,
          },
          modalyst: { name: "modalyst", value: "None", isOurPlatform: false },
          spocket: {
            name: "spocket",
            value: "2.9% + $0.30",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "2.9% + $0.30",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Product Cost",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Competitive pricing",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Varies, set by the vendor",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Based on on-demand model",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Varies, set by the vendor",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Varies, set by the vendor",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Shipping Fees",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Paid by buyer",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Paid by buyer",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Paid by buyer",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Paid by buyer",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Paid by buyer",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "GI Certification Support",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Available for artisan products",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Not available",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Not applicable",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Not available",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Not available",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Marketing Tools",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Subsidized support & digital tools",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Discount and promotional tools",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Limited marketing tools",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Limited marketing tools",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Limited marketing tools",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Return Costs",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Buyer responsibility",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Buyer responsibility",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Buyer responsibility",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Buyer responsibility",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Buyer responsibility",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Loyalty Rewards",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Available",
            isOurPlatform: true,
          },
          eprolo: { name: "eprolo", value: "No", isOurPlatform: false },
          modalyst: { name: "modalyst", value: "No", isOurPlatform: false },
          spocket: { name: "spocket", value: "No", isOurPlatform: false },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "No",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Blockchain Traceability",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Included for all products",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Not available",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Not available",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Not available",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Not available",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Custom Branding",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Available for all vendors",
            isOurPlatform: true,
          },
          eprolo: { name: "eprolo", value: "No", isOurPlatform: false },
          modalyst: {
            name: "modalyst",
            value: "Available",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Available",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Available",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Multimedia Storytelling",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Available for artisan stories",
            isOurPlatform: true,
          },
          eprolo: { name: "eprolo", value: "No", isOurPlatform: false },
          modalyst: { name: "modalyst", value: "No", isOurPlatform: false },
          spocket: { name: "spocket", value: "No", isOurPlatform: false },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "No",
            isOurPlatform: false,
          },
        },
      },
      {
        feature: "Eco-Friendly Practices",
        platforms: {
          deKoshurCrafts: {
            name: "deKoshurCrafts",
            value: "Integrated with platform",
            isOurPlatform: true,
          },
          eprolo: {
            name: "eprolo",
            value: "Not emphasized",
            isOurPlatform: false,
          },
          modalyst: {
            name: "modalyst",
            value: "Available for certain products",
            isOurPlatform: false,
          },
          spocket: {
            name: "spocket",
            value: "Not emphasized",
            isOurPlatform: false,
          },
          cjdropshipping: {
            name: "cjdropshipping",
            value: "Not emphasized",
            isOurPlatform: false,
          },
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
