export const collaborativeData = {
  tier : 3,
  hero: {
    
    headline: "Collaborative Partnerships — Where Innovation Meets Tradition",
    subtext:
      "Collaboration is the future of craft trade. Beyond commerce, Collaborative Partnerships empower buyers and vendors to co-create, share resources, and integrate cutting-edge tools like digital storytelling, shared warehousing, packaging solutions, and emerging technologies (AI, AR/VR, Blockchain).",
    ctaButtons: [
      "Start Collaborative Partnership",
      "Apply as a Vendor",
      "Apply as a Buyer",
    ],
  },
  whyCoreTrade: {
    heading: "Fixing the Innovation Gap in Craft Trade",
    problems: [
      "Vendors isolated without co-creation opportunities.",
      "Buyers lack storytelling, media, and brand differentiation.",
      "No shared infrastructure for warehousing & packaging.",
      "Minimal adoption of technology (AI, AR/VR, Blockchain).",
    ],
    solutions: [
      "Design co-creation between vendors & buyers.",
      "Shared services for warehousing, packaging, and logistics.",
      "Storytelling, digital media, and co-marketing.",
      "Technology-driven innovation & transparency.",
    ],
  },
  eligibility: {
    heading: "Who Can Join Collaborative?",
    standard: {
      title: "Standard Eligibility (Default Path)",
      vendors:
        "KPI 8+, Retention 43-73 months, prior experience in Core Trade or Brand Growth.",
      buyers:
        "KPI 8+, Retention 43-73 months, proven sourcing budget & prior engagement.",
      note: "Partners progress naturally through KPI improvement + retention periods.",
    },
    lateral: {
      title: "Lateral Entry (Fast-Track Path)",
      description:
        "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org). Designed for exceptional vendors & buyers with proven track record.",
      points: [
        "KHCRF conducts evaluation of performance, compliance, and product authenticity.",
        "If promising → pay Lateral Fee → skip retention requirements.",
        "Immediate access to Collaborative Partnerships (Auction, White Label, Flagship, or Brick & Mortar).",

      ],
      note: "Fast-track designed for high performers, certified artisans, and buyers with significant capacity. Requires ongoing compliance checks to remain active.",
      vendors:
        "Vendors must demonstrate established operations, consistent quality, and compliance with KHCRF standards. Prior export or award recognition preferred.",
      buyers:
        "Buyers must showcase proven capacity for scaling craft products (institutional, boutique retail, or large e-commerce platforms). Must meet minimum investment thresholds.",
      cta: "Apply for KHCRF Evaluation",
    },
  }
  ,
  eligibilityTest: {
    heading: "Check Your Collaborative Eligibility Instantly",
    description: "Quick quiz for vendors and buyers to determine eligibility",
    vendorCriteria:
      "Tech adoption (AI/Blockchain), packaging infrastructure, previous co-design experience, retention history.",
    buyerCriteria:
      "Interest in storytelling/media, need for co-branded packaging, warehousing capability, retention history.",
    exampleOutput:
      "You qualify for Collaborative → Storytelling & Media Partner. With 6 months retention or KHCRF fast-track, you can progress to Institutional Partnership (Museums, NGOs).",
    cta: "Apply Now for This Track",
  },
  tracks: [
    {
      id: "packaging",
      name: "Packaging & Branding Solutions",
      icon: "Package",
      kpi: "8+",
      prev: "Brick & Mortar",
      retention: "18 months",
      href: "/collaborative/packaging",
      bestFor:
        "Vendors upgrading to premium buyers and buyers needing branded product packaging.",
      benefit:
        "Includes branded kits, eco solutions, custom bundles, and packaging services.",
      cta: "Apply for Packaging",
      fastTrackAvailable: true,
    },
    {
      id: "design-co-creation",
      name: " Design & Product Innovation",
      icon: "Paintbrush",
      kpi: "8+",
      prev: "Packaging",
      retention: "4 months",
      href: "/collaborative/design-collaboration",
      bestFor:
        "Buyers wanting unique product lines and vendors open to creative innovation.",
      benefit:
        "Provides exclusive designs, shared IP, branding, and collaborative product creation.",
      cta: "Apply for Co-Creation",
      fastTrackAvailable: true,
    },
    {
      id: "storytelling-media",
      name: "Storytelling, Media & Brand Engagement",
      icon: "BookOpen",
      kpi: "8.5+",
      prev: "Design Co-Creation",
      retention: "4 months",
      href: "/collaborative/storytelling&media",
      bestFor:
        "Brands and retailers plus vendors needing narrative-driven market differentiation.",
      benefit:
        "Delivers campaigns, digital media, AR stories, VR content, and promotions.",
      cta: "Apply for Storytelling",
      fastTrackAvailable: true,
    },
    {
      id: "warehousing",
      name: "Warehousing & Shared Services",
      icon: "Warehouse",
      kpi: "8.5+",
      prev: "Storytelling & Media",
      retention: "4 months",
      href: "/collaborative/warehouse",
      bestFor: "Buyers needing distribution and vendors requiring storage support.",
      benefit: "Offers shared warehouses, logistics pooling, and reduced costs.",
      
    
      cta: "Apply for Warehousing",
      fastTrackAvailable: true,
    },
  ]
  ,
  workflow: {
    heading: "How Collaborative Partnerships Work",
    standard: {
      title: "Standard Path",
      steps: [
        "Apply",
        "KPI evaluation",
        "Track Match",
        "Activation",
        "Progression via KPI + Retention",
      ],
    },
    fastTrack: {
      title: "Fast-Track Path (KHCRF)",
      steps: [
        "Apply",
        "KHCRF evaluation",
        "Pay Lateral Fee",
        "Direct access to Collaborative track",
      ],
    },
  },
  trackComparison: {
    heading: "Choose Your Collaborative Path",
    tracks: [
      {
        name: "Design Co-Creation",
        icon: "Paintbrush",
        bestFor:
          "Buyers who want unique product lines & vendors open to design innovation.",
        kpi: "8+",
        retention: "57 months",
        benefit: "Exclusive designs, shared IP, branding.",
        progression: "Progress to Institutional Partnerships",
      },
      {
        name: "Storytelling & Media",
        icon: "BookOpen",
        bestFor:
          "Brands, retailers, and vendors needing narrative-driven differentiation.",
        kpi: "7+",
        retention: "60 months",
        benefit:
          "Shared campaigns, digital content, AR/VR-enabled product stories.",
        progression: "Progress to Institutional Partnerships",
      },
      {
        name: "Warehousing & Shared Services",
        icon: "Warehouse",
        bestFor:
          "Buyers seeking scalable distribution & vendors needing storage support.",
        kpi: "8+",
        retention: "66 months",
        benefit: "Shared warehouses, pooled logistics, reduced costs.",
        progression: "Progress to Institutional Partnerships",
      },
      {
        name: "Packaging & Branding Solutions",
        icon: "Package",
        bestFor:
          "Vendors upgrading to premium buyers; buyers requiring branded packaging.",
        kpi: "8+",
        retention: "72 months",
        benefit: "Branded kits, eco-friendly solutions, custom bundles.",
        progression: "Progress to Institutional Partnerships",
      },
    ],

    fastTrackNote:
      "For all tracks: KHCRF evaluates Vendors/Buyers. If evaluation is promising, pay Lateral Fee. Skip retention → direct access to Collaborative tracks.",
    fastTrackCta: "Apply for KHCRF Fast-Track",
  },
  journey: {
    heading: "Your Collaborative Partnership Journey",
    steps: [
      {
        title: "Choose Collaborative Track",
        options: [
           "Packaging & Branding Solutions → KPI 8+ | 18 months retention.",
          "Design Co-Creation → KPI 8+ | 4 months retention.",
          "Storytelling & Media → KPI 8.5+ | 4 months retention.",
          "Warehousing & Shared Services → KPI 8.5+ | 4 months retention.",
         
        ],
        note: "Requires completion of Core Trade or Brand Growth tracks.",
      },
      {
        title: "Evaluation",
        description:
          "KPI evaluation + verification of prerequisite eligibility.",
      },
      {
        title: "Activation",
        description:
          "Access to collaborative services and tools (co-design, storytelling, warehousing, etc.).",
      },
      {
        title: "Fast-Track Option (KHCRF)",
        options: [
          "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org).",
          "If evaluation is promising → pay Lateral Fee.",
          "Skip retention → direct access to Collaborative tracks.",
        ],
      },
      {
        title: "Growth",
        description:
          "Progress to Institutional Partnerships (Museums, NGOs, Governments, Logistics, Tech).",
        pathways: [
          "Institutional Partnerships (Museums, NGOs, Governments, Logistics, Tech)",
        ],
      },
    ],
  },
  feePackages: [
    {
      track: "Design Co-Creation",
      icon: "Paintbrush",
      onboarding: "Free (if progressed from Core Trade or Brand Growth)",
      packages: [
        {
          name: "Basic",
          price: "$50",
          features: [
            "Shared design pool",
            "Basic branding templates",
            "Logistics waiver: 5% discount",
            "Standard vendor–buyer matching",
          ],
        },
        {
          name: "Growth",
          price: "$125",
          features: [
            "Co-owned IP",
            "Premium branding support",
            "Logistics waiver: 10% discount",
            "Priority design collaboration",
          ],
        },
        {
          name: "Premium",
          price: "$250",
          features: [
            "Exclusive design collabs",
            "Legal/IP support",
            "Logistics waiver: 15% discount",
            "Dedicated design manager",
          ],
        },
      ],
      range: "$50–$250",
    },
    {
      track: "Storytelling & Media",
      icon: "BookOpen",
      onboarding: "Free (if progressed from Core Trade or Brand Growth)",
      packages: [
        {
          name: "Standard",
          price: "$50",
          features: [
            "Basic digital campaigns",
            "Standard content templates",
            "Logistics waiver: 5%",
            "Standard media support",
          ],
        },
        {
          name: "Pro",
          price: "$125",
          features: [
            "AR/VR campaigns",
            "Co-funded media",
            "Logistics waiver: 10%",
            "Priority content placement",
          ],
        },
        {
          name: "Enterprise",
          price: "$250",
          features: [
            "Global campaigns",
            "Premium media rights",
            "Logistics waiver: 15%",
            "Dedicated media manager",
          ],
        },
      ],
      range: "$50–$250",
    },
    {
      track: "Warehousing & Shared Services",
      icon: "Warehouse",
      onboarding: "$500 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$75",
          features: [
            "Shared local storage",
            "Basic logistics support",
            "Logistics waiver: 5%",
            "Standard inventory tracking",
          ],
        },
        {
          name: "Growth",
          price: "$200",
          features: [
            "Regional warehousing",
            "Logistics waiver: 10%",
            "Advanced inventory analytics",
            "Priority distribution support",
          ],
        },
        {
          name: "Premium",
          price: "$400",
          features: [
            "Global warehouse access",
            "Logistics waiver: 15%",
            "Dedicated logistics manager",
            "Real-time inventory dashboard",
          ],
        },
      ],
      range: "$75–$400",
    },
    {
      track: "Packaging & Branding Solutions",
      icon: "Package",
      onboarding: "Free (if progressed from Core Trade or Brand Growth)",
      packages: [
        {
          name: "Standard",
          price: "$50",
          features: [
            "Basic branded packaging kit",
            "Standard packaging templates",
            "Logistics waiver: 5%",
            "Basic branding support",
          ],
        },
        {
          name: "Growth",
          price: "$125",
          features: [
            "Eco-packaging solutions",
            "Branded packaging kits",
            "Logistics waiver: 10%",
            "Priority branding support",
          ],
        },
        {
          name: "Premium",
          price: "$250",
          features: [
            "Fully custom branded packaging bundles",
            "Eco-friendly premium solutions",
            "Logistics waiver: 15%",
            "Dedicated branding manager",
          ],
        },
      ],
      range: "$50–$250",
    },
  ],
  comparison: {
    heading: "Choose Your Entry Path",
    standard: {
      title: "Standard Path",
      subtitle: "(Default progression for all partners)",
      features: [
        "Free — no upfront or lateral fee.",
        "Progress via KPI + retention (43-73 months).",
        "Best for: Steady, sustainable growth.",
        "Guided mentorship during initial partnership stages.",
        "Lower risk: gradual scaling ensures stronger market alignment.",
      ],
      note: "Takes time: retention required.",
      cta: "Apply with Standard Path",
    },
    lateral: {
      title: "Lateral Entry (KHCRF Fast-Track)",
      subtitle: "(Optional accelerated route)",
      features: [
        "KHCRF evaluation first → only pay Lateral Fee if promising.",
        "Skip retention → direct access to Collaborative tracks.",
        "Recognition as KHCRF-reviewed partner.",
        "Best for: Vendors and buyers ready to scale fast.",
        "Quicker visibility: jump directly into premium collaborative programs.",
       
      ],
      note: "Paid only after successful evaluation.",
      cta: "Apply for KHCRF Fast-Track",
    },
  },
  platformAdvantage: {
  heading: "Our Platform Advantage",
  description:
    "Value-added and branding initiatives for Kashmiri handicrafts, enabling US buyers to access eco-friendly packaging, co-created designs, authentic storytelling, and faster warehouse delivery, while vendors enhance branding, co-design, digital visibility, and fulfillment efficiency.",
  sections: [
    {
      title: "US Buyers’ Benefits",
      items: [
        "Packaging (L9): Eco-friendly, export-compliant packaging, retail-ready presentation.",
        "Design Collaboration (L10): Trend-aligned co-creations, exclusive craft innovations.",
        "Storytelling & Media (L11): Cultural narratives, authentic heritage marketing tools.",
        "Warehouse (L12): Faster delivery, reduced lead times, lower logistics costs.",
      ],
    },
    {
      title: "Kashmir / India Vendors’ Benefits",
      items: [
        "Packaging (L9): Branding upgrade, reduced shipment rejection, higher retail value.",
        "Design Collaboration (L10): Co-design with global buyers, product innovation.",
        "Storytelling & Media (L11): Digital visibility, artisan recognition, stronger buyer trust.",
        "Warehouse (L12): US-based inventory hubs, faster B2B fulfillment, reduced shipping risk.",
      ],
    },
  ],
}

  ,
  faq: [
    {
      question: "Do I need tech adoption to join Collaborative?",
      answer:
        "Only for the Technology Integration track. Others (Storytelling, Packaging, etc.) require mid-level readiness.",
    },
    {
      question: "Can small vendors access Packaging or Storytelling tracks?",
      answer: "Yes, if KPI 8+ and minimum 43 months retention.",
    },
    {
      question: "Is Lateral Entry possible for Warehousing?",
      answer: "Yes, but subject to KHCRF evaluation + Lateral Fee.",
    },
  ],
  footer: {
    headline: "Join Collaborative Partnerships — Co-Create the Future",
    subtext:
      "Grow beyond trade. Innovate with co-design, storytelling, packaging, warehousing, and technology-driven partnerships.",
    ctaButtons: [
      "Apply as a Vendor",
      "Apply as a Buyer",
      "Apply for KHCRF Fast-Track",
    ],
  },
};
