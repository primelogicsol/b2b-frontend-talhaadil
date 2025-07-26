"use client"

import { useState, useEffect } from "react"
import {
  Check,
  Users,
  Target,
  DollarSign,
  Shield,
  ShoppingCart,
  Home,
  Building,
  Plane,
  Store,
  Warehouse,
  Handshake,
} from "lucide-react"
import RecSquareSection from "../Section/RecSquareSection"
import Accordion from "../Material/Accordion"
import SectionFaq from "../Section/SectionFaq"

const serviceIconMap = {
  shoppingCart: ShoppingCart,
  home: Home,
  building: Building,
  plane: Plane,
  store: Store,
  warehouse: Warehouse,
  handshake: Handshake,
}

export default function HomePage() {
  const [isYearly, setIsYearly] = useState(false)

  // Dynamic Accordion Data
  const accordionData = [
    {
      id: "item-1",
      title: "Core Drop Shipping Capabilities",
      content: [
        "Cloud-Based Infrastructure",
        "Advanced Search & Filters",
        "Personalized Recommendations",
        "Real-Time Product Availability",
        "Omnichannel Content Delivery",
        "Multi-Device Accessibility",
        "Geolocation Integration",
        "AI-Driven Personalization",
        "Scalable Infrastructure",
        "PWA Support",
      ],
      icon: "users",
    },
    {
      id: "item-2",
      title: "Payment & Transaction Features",
      content: [
        "Multiple Payment Methods",
        "Flexible Payment Plans",
        "Secure Payment Gateways",
        "Currency & Location Support",
        "Real-Time Shipping Costs",
        "Invoice Generation",
        "Transaction History",
        "Sales Tax Transparency",
        "Promo Codes Applied",
        "Payment Confirmation Notifications",
      ],
      icon: "heartHandshake",
    },
    {
      id: "item-3",
      title: "Security Features",
      content: [
        "PCI Compliance",
        "MFA",
        "Data Encryption",
        "Intrusion Detection",
        "Fraud Detection",
        "WAF Protection",
        "Secure Account Creation",
        "Privacy Compliance",
        "Identity Protection",
        "Continuous Monitoring",
      ],
      icon: "graduationCap",
    },
    {
      id: "item-4",
      title: "Marketing Features",
      content: [
        "Personalized Recommendations",
        "Targeted Email Marketing",
        "Behavioral Targeting",
        "Multi-Channel Marketing",
        "Campaign Analytics",
        "Predictive Analytics",
        "Geographic Segmentation",
        "Seasonal Promotions",
        "Dynamic Content",
        "Referral Program",
      ],
      icon: "stethoscope",
    },
    {
      id: "item-5",
      title: "Drop Shipping Partnership",
      content: [
        "No Inventory Risk",
        "Direct Shipping",
        "Seamless Integration",
        "Wide Product Selection",
        "Minimal Investment",
        "Global Reach",
        "Order Fulfillment Management",
        "Scalable Growth",
        "Automated Shipping Notifications",
        "Simplified Returns",
      ],
      icon: "building2",
    },
    {
      id: "item-6",
      title: "Private Label Partnership",
      content: [
        "Branding Control",
        "Exclusive Products",
        "Custom Packaging",
        "Increase Brand Recognition",
        "Higher Margins",
        "Vendor Support",
        "Global Distribution",
        "Product Customization",
        "Long-Term Partnership",
        "Flexible Orders",
      ],
      icon: "leaf",
    },
    {
      id: "item-7",
      title: "Additional Customer Engagement Formats",
      content: [
        "Digital Catalogs",
        "Lookbooks",
        "Product Videos",
        "Virtual Try-Ons",
        "3D Product Configurators",
        "Live Product Demos",
        "Customer Review Galleries",
        "User-Generated Content",
        "Personalized Product Recommendations",
        "Interactive Infographics",
      ],
      icon: "factory",
    },
    {
      id: "item-8",
      title: "Customer Financing Options",
      content: [
        "Store-Branded Credit Cards",
        "Installment Payment Plans",
        "Buy Now, Pay Later",
        "Lease-to-Own Programs",
        "Layaway Plans",
        "Deferred Interest Financing",
        "Custom Financing",
        "Pre-Approved Credit",
        "Flexible Schedules",
        "Zero-Interest Offers",
      ],
      icon: "globe2",
    },
  ]

  // Dynamic Comparison Data
  const comparisonData = [
    {
      solution: "De Koshur Crafts",
      icon: <Users className="w-6 h-6" />,
      color: "bg-[var(--primary-navy-color)]",
      features: {
        "Breadth of Handicraft Products": "Extensive Handicraft Product Offerings",
        "Kashmir Heritage Focus": "Strong emphasis on craftsmanship",
        "Kashmir Entire Product Line": "Full Kashmir Craft Representation",
        "Seller Verification": "Thorough Process",
        "Artisan Support": "High Artisan Support",
        "GI Tags/Certifications": "Prominent GI Certification for products",
        "Origin Traceability": "Detailed blockchain traceability",
        "Fair Trade Policies": "Integrated fair trade policies",
        "Eco-friendly Practices": "Strong focus on eco-friendly practices",
        "Cultural Storytelling": "Rich visual storytelling of artisan culture",
        "Multimedia Content": "Extensive multimedia content",
        "Personalized Suggestions": "Highly curated, seasonal collections",
        "Thematic Collections": "Seasonal and festival-based collections",
        "Pricing Transparency": "Fully transparent pricing for products",
        "Value-Added Services": "Tailored artisan resources logistics",
        "International Shipping": "Available for artisans and buyers",
        "B2B Networking": "Extensive networking opportunities",
        "Customer Education": "Extensive resources for buyers",
        "Return Policies": "Flexible return policies",
        "Brand Trust": "High, focused on craftsmanship",
        "Influencer Partnerships": "Planned influencer partnerships",
      },
    },
    {
      solution: "EPROLO",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-600",
      features: {
        "Breadth of Handicraft Products": "Broad range of artisan products",
        "Kashmir Heritage Focus": "Minimal emphasis on heritage",
        "Kashmir Entire Product Line": "No representation",
        "Seller Verification": "Moderate verification of sellers",
        "Artisan Support": "Moderate artisan support",
        "GI Tags/Certifications": "No GI certifications",
        "Origin Traceability": "Limited traceability",
        "Fair Trade Policies": "Minimal fair trade policies",
        "Eco-friendly Practices": "Moderate eco-friendly efforts",
        "Cultural Storytelling": "Limited cultural storytelling",
        "Multimedia Content": "Limited multimedia content",
        "Personalized Suggestions": "Limited suggestions",
        "Thematic Collections": "Seasonal collections",
        "Pricing Transparency": "Transparent pricing model",
        "Value-Added Services": "Business credit, promotional discounts",
        "International Shipping": "Available for global buyers",
        "B2B Networking": "B2B networking opportunities",
        "Customer Education": "Moderate educational resources",
        "Return Policies": "Flexible return policies for buyers",
        "Brand Trust": "Moderate trust with artisan vendors",
        "Influencer Partnerships": "No focus on influencer partnerships",
      },
    },
    {
      solution: "Modalyst",
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-orange-600",
      features: {
        "Breadth of Handicraft Products": "On-demand products",
        "Kashmir Heritage Focus": "No emphasis on heritage",
        "Kashmir Entire Product Line": "Limited to on-demand items",
        "Seller Verification": "Verified sellers with on-demand",
        "Artisan Support": "Limited artisan support",
        "GI Tags/Certifications": "No GI certifications",
        "Origin Traceability": "Traceability based on-demand",
        "Fair Trade Policies": "Optional fair trade practices",
        "Eco-friendly Practices": "Focused on sustainable materials",
        "Cultural Storytelling": "No cultural storytelling",
        "Multimedia Content": "Limited multimedia content",
        "Personalized Suggestions": "Personalized based on preferences",
        "Thematic Collections": "Limited collections",
        "Pricing Transparency": "Transparent pricing for products",
        "Value-Added Services": "Custom on-demand services",
        "International Shipping": "Global shipping available",
        "B2B Networking": "Limited networking opportunities",
        "Customer Education": "Moderate educational resources",
        "Return Policies": "Return policies",
        "Brand Trust": "Moderate trust with on-demand",
        "Influencer Partnerships": "No focus on influencer partnerships",
      },
    },
    {
      solution: "Spocket",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-purple-600",
      features: {
        "Breadth of Handicraft Products": "Product offerings",
        "Kashmir Heritage Focus": "No heritage focus",
        "Kashmir Entire Product Line": "Limited to dropshipping items",
        "Seller Verification": "Moderate seller checks",
        "Artisan Support": "Limited artisan support",
        "GI Tags/Certifications": "No GI certifications",
        "Origin Traceability": "Traceability",
        "Fair Trade Policies": "Optional fair trade policies",
        "Eco-friendly Practices": "Focus on eco-friendly suppliers",
        "Cultural Storytelling": "No cultural storytelling",
        "Multimedia Content": "Limited multimedia content",
        "Personalized Suggestions": "Personalized based on dropshipping",
        "Thematic Collections": "Seasonal and niche collections",
        "Pricing Transparency": "Transparent pricing",
        "Product sourcing integration": "Product sourcing integration",
        "Global shipping available": "Global shipping available",
        "Networking within dropshipping": "Networking within dropshipping",
        "Limited educational resources": "Limited educational resources",
        "Flexible returns based on dropshipping": "Flexible returns based on dropshipping",
        "Moderate trust with suppliers": "Moderate trust with suppliers",
        "No focus on influencer partnerships": "No focus on influencer partnerships",
      },
    },
    {
      solution: "CJDropshipping",
      icon: <Shield className="w-6 h-6" />, // Using Shield for CJDropshipping, you can change if needed
      color: "bg-blue-600", // Using a distinct color for CJDropshipping
      features: {
        "Breadth of Handicraft Products": "Customizable Product Range",
        "Kashmir Heritage Focus": "Low Heritage Emphasis",
        "Kashmir Entire Product Line": "No Comprehensive Products",
        "Seller Verification": "Low Seller Verification",
        "Artisan Support": "No Artisan Support",
        "GI Tags/Certifications": "No GI Certifications",
        "Minimal Traceability": "Minimal Traceability",
        "No Fair Policies": "No Fair Policies",
        "Low Practices": "Low Practices",
        "No-Cultural Storytelling": "No-Cultural Storytelling",
        "Minimal Content": "Minimal Content",
        "Variable Suggestions": "Variable Suggestions",
        "Minimal Thematic": "Minimal Thematic",
        "Variable Transparency": "Variable Transparency",
        "Variable Services": "Variable Services",
        "Variable Shipping": "Variable Shipping",
        "Variable Support": "Variable Support",
        "Low Business Networking": "Low Business Networking",
        "No Engagement Forums": "No Engagement Forums",
        "Limited Education": "Limited Education",
        "Variable Return Policies": "Variable Return Policies",
      },
    },
  ]

  // Dynamic Advantages Data
  const hexagonalAdvantages = [
    {
      number: "01",
      title: "Authenticity Guaranteed",
      description:
        "Buyers can confidently purchase genuine Kashmiri handicrafts, knowing that each product is certified for authenticity and high-quality craftsmanship.",
      color: "bg-[var(--primary-navy-color)]",
    },
    {
      number: "02",
      title: "Exclusive Selection",
      description:
        "Enjoy access to a curated collection of unique, handmade products that showcase the rich cultural heritage of Kashmir, not available in mass markets.",
      color: "bg-[var(--primary-cyan-color)]",
    },
    {
      number: "03",
      title: "Convenient Shopping Experience",
      description:
        "Global shipping options make it easy to purchase authentic Kashmiri handicrafts from anywhere, simplifying your experience.",
      color: "bg-[var(--secondary-hover-color)]",
    },
    {
      number: "04",
      title: "Support for Artisans",
      description:
        "Buyers contribute to the sustainable livelihoods of local artisans, promoting fair trade practices and preserving traditional crafts.",
      color: "bg-[var(--primary-cyan-color)]",
    },
    {
      number: "05",
      title: "Economic Empowerment",
      description:
        "Connecting artisans with global markets, the platform drives sustainable economic growth, enhancing livelihoods and community opportunities.",
      color: "bg-[var(--primary-color)]",
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
      color: "bg-[var(--primary-hover-color)]",
    },
    {
      number: "08",
      title: "Sustainability",
      description:
        "Fostering eco-friendly practices and ethical production, the platform supports sustainable handicrafts and environmentally-conscious consumer choices.",
      color: "bg-[var(--primary-light-text-color)]",
    },
  ]

  // Dynamic Cost Comparison Data
  const costComparison = [
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
  ]

  // Dynamic Pricing Plans Data
  const pricingPlans = [
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
      popular: true,
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
  ]

  // Dynamic FAQ Data
  const faqs = [
    {
      title: "How do I place an order?",
      desc: "You can place orders directly through our platform by browsing products, selecting items, and proceeding to checkout with your preferred payment method.",
    },
    {
      title: "Can I customize products?",
      desc: "Yes, we offer extensive customization options for Private Label orders, including custom packaging, branding, and product modifications to meet your specific requirements.",
    },
    {
      title: "How do I track my orders?",
      desc: "Once your order is placed, you'll receive a tracking number via email. You can track your package in real-time through our platform or the carrier's website.",
    },
    {
      title: "What's the shipping policy for Drop Shipping?",
      desc: "We offer global shipping with various carrier options. Shipping costs are calculated in real-time based on destination, weight, and selected shipping method.",
    },
    {
      title: "How are payments processed?",
      desc: "We use secure payment gateways with PCI compliance. We accept multiple payment methods including credit cards, digital wallets, and bank transfers.",
    },
    {
      title: "Are there any additional fees?",
      desc: "Additional costs may include shipping fees and customization charges for Private Label orders. All fees are transparently displayed before checkout.",
    },
    {
      title: "Can I get discounts on bulk purchases?",
      desc: "Yes, we offer volume discounts for bulk orders. Contact our sales team for custom pricing on large quantity purchases.",
    },
    {
      title: "Do I need to pay upfront?",
      desc: "Payment terms vary by plan and order type. We offer flexible payment options including installment plans and deferred payment for qualified buyers.",
    },
    {
      title: "How long does it take to receive my order?",
      desc: "Delivery times vary by location and shipping method. Standard shipping typically takes 7-14 business days, while express options are available for faster delivery.",
    },
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
    {
      title: "Can I request product recommendations?",
      desc: "Our AI-driven system provides personalized product recommendations based on your preferences, purchase history, and browsing behavior.",
    },
    {
      title: "How do I manage my order history?",
      desc: "Your complete order history is available in your account dashboard, where you can view past orders, track current shipments, and reorder items.",
    },
  ]

  // Dynamic Service Cards Data
  const serviceCards = [
    {
      title: "Drop Shipping",
      description:
        "Source premium handcrafted Kashmiri products through drop shipping, white-label, and seamless fulfillment.",
      icon: "shoppingCart",
      featured: true,
    },
    {
      title: "Consignment",
      description: "Connect consignees with consignors for risk-free Kashmiri handicraft inventory management.",
      icon: "handshake",
      featured: false,
    },
    {
      title: "Exhibition",
      description: "Partner with Kashmir vendor exhibitions, secure brand sponsorship in premier US handicrafts expo.",
      icon: "building",
      featured: false,
    },
    {
      title: "Import Export",
      description: "Import luxury, premium, world-renowned Kashmiri handicrafts for high-end clientele in the USA.",
      icon: "plane",
      featured: false,
    },
    {
      title: "Subsidiary",
      description: "Join the DKC USA Buyer Network for strategic and high-value partnerships in luxury handicrafts.",
      icon: "warehouse",
      featured: false,
    },
    {
      title: "Brick & Mortar",
      description:
        "Enable U.S. stores, integrate Kashmiri vendors, optimizing resources & showcasing luxury handicrafts.",
      icon: "store",
      featured: false,
    },
    {
      title: "Franchise",
      description: "Partner with or own a DKC franchise in the USA, showcasing authentic Kashmiri handicrafts.",
      icon: "home",
      featured: false,
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <RecSquareSection
          title="Swift Partnership Activation"
          description={`Expand your reach and minimize risk with De Koshur Crafts' Consignment Partnership in the USA. This partnership allows you to display your products in premium retail spaces while retaining ownership until the products are sold. With our expert guidance, we handle everything from inventory management to logistics, ensuring your products reach the right audience in top U.S. locations. Our consignment model offers flexibility and reducing upfront costs, providing you with the opportunity to test the U.S. market and scale at your own pace while benefiting from our extensive network and industry expertise.`}
        />
      </section>

      {/* Key Features Accordion */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-dark-slate)] animate-on-scroll">
            Key Features
          </h2>
          <Accordion data={accordionData} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-dark-slate)] animate-on-scroll">
            Compare to Other Platforms
          </h2>
          <div className="bg-[var(--white)] rounded-lg shadow-lg overflow-hidden animate-on-scroll">
            {/* Table view (hidden on small screens) */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--primary-cyan-color)] text-[var(--white)]">
                    <th className="px-6 py-4 text-left font-semibold">Platform</th>
                    <th className="px-6 py-4 text-center font-semibold">Heritage Focus</th>
                    <th className="px-6 py-4 text-center font-semibold">Artisan Support</th>
                    <th className="px-6 py-4 text-center font-semibold">GI Certification</th>
                    <th className="px-6 py-4 text-center font-semibold">Fair Trade</th>
                    <th className="px-6 py-4 text-center font-semibold">Eco-friendly</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((solution, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--background)]"} hover:bg-[var(--primary-header-color)] transition-colors duration-200`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`${solution.color} p-2 rounded-lg text-[var(--white)]`}>{solution.icon}</div>
                          <span className="font-medium text-[var(--primary-dark-slate)]">{solution.solution}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[var(--foreground)]">
                        {solution.features["Kashmir Heritage Focus"]}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[var(--foreground)]">
                        {solution.features["Artisan Support"]}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[var(--foreground)]">
                        {solution.features["GI Tags/Certifications"]}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[var(--foreground)]">
                        {solution.features["Fair Trade Policies"]}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[var(--foreground)]">
                        {solution.features["Eco-friendly Practices"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Collapse Stack (shown on small screens) */}
            <div className="md:hidden p-4 space-y-4">
              {comparisonData.map((solution, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md p-4 ${index % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--background)]"} border border-[var(--primary-header-color)]`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${solution.color} p-2 rounded-lg text-[var(--white)]`}>{solution.icon}</div>
                    <h3 className="font-bold text-lg text-[var(--primary-dark-slate)]">{solution.solution}</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(solution.features).map(([featureName, featureValue], featureIndex) => (
                      <div key={featureIndex} className="flex justify-between items-start">
                        <span className="text-sm font-medium text-[var(--primary-dark-slate)]">{featureName}:</span>
                        <span className="text-sm text-[var(--foreground)] text-right ml-2">{featureValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section (Hexagonal Design) */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-dark-slate)] animate-on-scroll">
            Advantages
          </h2>

          {/* Hexagonal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(0, 4).map((item, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Hexagonal Shape */}
                <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                  <div
                    className={`${item.color} w-28 h-28 transform rotate-45 rounded-lg shadow-lg transition-all duration-300 hover:scale-110`}
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                      <span className="text-3xl font-bold text-[var(--white)]">{item.number}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-dark-slate)]">{item.title}</h3>

                {/* Description */}
                <p className="text-[var(--foreground)] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(4, 8).map((item, index) => (
              <div
                key={index + 4}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Hexagonal Shape */}
                <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                  <div
                    className={`${item.color} w-28 h-28 transform rotate-45 rounded-lg shadow-lg transition-all duration-300 hover:scale-110`}
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                      <span className="text-3xl font-bold text-[var(--white)]">{item.number}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-dark-slate)]">{item.title}</h3>

                {/* Description */}
                <p className="text-[var(--foreground)] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Connection Line (hidden on small screens) */}
          <div className="hidden lg:flex justify-center items-center space-x-8 mt-8">
            {hexagonalAdvantages.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-6 h-6 transform rotate-45 ${item.color}`}
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                ></div>
                {index < 3 && <div className={`w-16 h-1 bg-[var(--primary-cyan-color)]`}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Affordability Table */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-dark-slate)] animate-on-scroll">
            Cost Comparison
          </h2>
          <div className="bg-[var(--white)] rounded-lg shadow-lg overflow-hidden animate-on-scroll">
            {/* Table view (hidden on small screens) */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--primary-cyan-color)] text-[var(--white)]">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold bg-[var(--primary-color)]">De Koshur Crafts</th>
                    <th className="px-6 py-4 text-center font-semibold">EPROLO</th>
                    <th className="px-6 py-4 text-center font-semibold">Modalyst</th>
                    <th className="px-6 py-4 text-center font-semibold">Spocket</th>
                    <th className="px-6 py-4 text-center font-semibold">CJDropshipping</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--background)]"} hover:bg-[var(--primary-header-color)] transition-colors duration-200`}
                    >
                      <td className="px-6 py-4 font-medium text-[var(--primary-dark-slate)]">{row.feature}</td>
                      <td className="px-6 py-4 text-center font-bold text-[var(--primary-color)] bg-[var(--primary-header-color)] text-sm">
                        {row.deKoshurCrafts}
                      </td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">{row.eprolo}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">{row.modalyst}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">{row.spocket}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">{row.cjdropshipping}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Collapse Stack for Cost Comparison (shown on small screens) */}
            <div className="md:hidden p-4 space-y-4">
              {costComparison.map((row, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md p-4 ${index % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--background)]"} border border-[var(--primary-header-color)]`}
                >
                  <h3 className="font-bold text-lg text-[var(--primary-dark-slate)] mb-3">{row.feature}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[var(--primary-color)]">De Koshur Crafts:</span>
                      <span className="text-sm font-bold text-[var(--primary-color)]">{row.deKoshurCrafts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">EPROLO:</span>
                      <span className="text-sm text-[var(--foreground)]">{row.eprolo}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">Modalyst:</span>
                      <span className="text-sm text-[var(--foreground)]">{row.modalyst}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">Spocket:</span>
                      <span className="text-sm text-[var(--foreground)]">{row.spocket}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">CJDropshipping:</span>
                      <span className="text-sm text-[var(--foreground)]">{row.cjdropshipping}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--primary-dark-slate)] animate-on-scroll">
              Early Adopter Yearly De Koshur Crafts-USA Drop Shipping Platform Fees is Zero (2025)
            </h2>
            <p className="text-xl text-[var(--primary-light-text-color)] mb-2">
              Tailored Plans for Every Stage of Your Growth Journey
            </p>
            <p className="text-lg text-[var(--foreground)] mb-2">
              Empowering Artisans & Businesses with Flexible Plans
            </p>
            <p className="text-base text-[var(--primary-light-text-color)]">
              From Starter to Premium, Unlock Exclusive Benefits at Every Step
            </p>
          </div>

          <div className="flex justify-center mb-12 animate-on-scroll">
            <div className="bg-[var(--background)] p-1 rounded-lg flex">
              <button
                className={`px-6 py-2 rounded-md transition-all duration-200 font-semibold ${
                  !isYearly
                    ? "bg-[var(--white)] shadow-sm text-[var(--primary-color)]"
                    : "text-[var(--primary-light-text-color)]"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-all duration-200 font-semibold ${
                  isYearly
                    ? "bg-[var(--white)] shadow-sm text-[var(--primary-color)]"
                    : "text-[var(--primary-light-text-color)]"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[var(--white)] rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-on-scroll border-2 ${
                  plan.popular
                    ? "border-[var(--primary-color)] ring-2 ring-[var(--primary-color)]"
                    : "border-[var(--primary-header-color)]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--primary-color)] text-[var(--white)] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[var(--primary-dark-slate)] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[var(--foreground)] mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[var(--primary-color)]">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-[var(--primary-light-text-color)]">/{isYearly ? "year" : "month"}</span>
                  </div>
                  <div className="bg-[var(--secondary-light-color)] px-3 py-1 rounded-full inline-block">
                    <span className="text-sm font-semibold text-[var(--secondary-color)]">
                      Early Adopters ({plan.earlyAdopters})
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--foreground)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-[var(--white)]"
                      : "bg-[var(--background)] hover:bg-[var(--primary-header-color)] text-[var(--primary-dark-slate)]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <SectionFaq
          subTitle="SUPPORT CENTER"
          sectionTitle="Frequently Asked Questions"
          faqTitle="Complete <span>Guide</span>"
          faqContent="Find answers to common questions about our drop shipping and private label services"
          faqItems={faqs}
        />
      </section>

      {/* Our Services Section (moved to bottom) */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-dark-slate)] animate-on-scroll">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-on-scroll group ${
                  service.featured
                    ? "bg-[var(--primary-color)] text-[var(--white)]"
                    : "bg-[var(--white)] text-[var(--primary-dark-slate)] hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                    service.featured
                      ? "bg-[var(--white)] text-[var(--secondary-color)]"
                      : "bg-[var(--secondary-light-color)] text-[var(--secondary-color)]"
                  } transition-all duration-300`}
                >
                  {(() => {
                    const IconComponent = serviceIconMap[service.icon as keyof typeof serviceIconMap]
                    return IconComponent ? <IconComponent className="w-8 h-8" /> : null
                  })()}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-4 text-center ${
                    service.featured ? "text-[var(--white)]" : "text-[var(--primary-dark-slate)]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed text-center mb-6 ${
                    service.featured ? "text-[var(--white)] opacity-90" : "text-[var(--foreground)]"
                  }`}
                >
                  {service.description}
                </p>

                {/* Special indicator for featured card */}
                {service.featured && (
                  <div className="text-center mb-4">
                    <span className="text-[var(--secondary-hover-color)] font-semibold text-sm">
                      You are currently here
                    </span>
                  </div>
                )}

                {/* Read More Button */}
                <div className="text-center">
                  <button
                    className={`inline-flex items-center font-semibold text-sm transition-all duration-300 ${
                      service.featured
                        ? "text-[var(--white)] hover:text-[var(--secondary-hover-color)]"
                        : "text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                    }`}
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
