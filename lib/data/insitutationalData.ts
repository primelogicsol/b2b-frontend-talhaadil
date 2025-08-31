export const institutionalData = {
  tier: 4,
  hero: {
    headline:
      "Institutional Partnerships — Building Trust, Heritage, and Global Alliances",
    subtext:
      "Institutional Partnerships represent the highest level of the De Koshur Crafts ecosystem. They are designed for museums, NGOs, governments, technology firms, and large-scale organizations that seek long-term collaborations rooted in heritage, compliance, and innovation.",
    ctaButtons: [
      "Start Institutional Partnership",
      "Apply as a Vendor",
      "Apply as a Buyer",
    ],
  },
  platformAdvantage: {
    heading: "Our Platform Advantage",
    description:
      "Institutional and global alliance initiatives for Kashmiri handicrafts, enabling US buyers to access streamlined logistics, cultural collections, ethical sourcing, and tech-enabled innovation, while vendors gain trade facilitation, institutional recognition, fair partnerships, and digital adoption.",
    sections: [
      {
        title: "US Buyers’ Benefits",
        items: [
          "Logistics (L13): Streamlined freight (air/ocean), customs brokerage, reliable supply.",
          "Museum (L14): Authentic cultural collections, heritage preservation access.",
          "NGO Buyer (L15): Verified fair-trade sourcing, sustainability partnerships.",
          "Technology Partnership (L16): AI design insights, blockchain traceability, AR/VR product testing.",
        ],
      },
      {
        title: "Kashmir / India Vendors’ Benefits",
        items: [
          "Logistics (L13): Reduced trade barriers, multi-modal freight, customs clearance support.",
          "Museum (L14): Institutional recognition, heritage positioning, archival collaborations.",
          "NGO Buyer (L15): Ethical buyer networks, fair pricing, long-term contracts.",
          "Technology Partnership (L16): Digital innovation adoption, product traceability, entry into global tech-craft ecosystems.",
        ],
      },
    ],
  },

  whyCoreTrade: {
    heading: "Fixing the Trust & Compliance Gap",
    problems: [
      "Lack of global policy-level engagement.",
      "No institutional alliances to safeguard heritage.",
      "Weak logistics & infrastructure support.",
      "Minimal recognition in global policy forums.",
    ],
    solutions: [
      "Strategic partnerships with museums, NGOs, governments, and institutions.",
      "Long-term logistics and compliance frameworks.",
      "Technology adoption for global recognition (blockchain, AI, AR/VR).",
      "Policy engagement to safeguard craft heritage.",
    ],
  },
  eligibility: {
    heading: "Who Can Join Institutional?",
    standard: {
      title: "Standard Eligibility (Default Path)",
      vendors:
        "KPI 8+, Retention 85 months, must have completed Collaborative track (Tech, Packaging, or Warehousing).",
      buyers:
        "KPI 8+, Retention 85 months, must have engaged in Brand Growth or Collaborative.",
      note: "Partners progress through KPI improvement + retention periods after completing prerequisite tracks.",
    },
    lateral: {
      title: "Lateral Entry (Fast-Track Path)",
      description:
        "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org). Designed for high-performing partners who meet benchmarks early.",
      points: [
        "KHCRF conducts evaluation of vendor or buyer readiness.",
        "If promising → pay Lateral Fee → skip prerequisites & retention.",
        "Immediate access to Institutional Partnerships and advanced tracks.",
        "Best suited for partners with proven capacity to scale rapidly.",
        "Recognition as KHCRF-approved, granting higher trust and visibility.",
      ],
      note: "Accelerated path, but requires strong performance history and readiness for growth.",
      cta: "Apply for KHCRF Evaluation",
    },
  },
  eligibilityTest: {
    heading: "Check Your Institutional Eligibility Instantly",
    description: "Quick quiz for vendors and buyers to determine eligibility",
    vendorCriteria:
      "Previous institutional collaborations, GI/fair-trade certification, tech adoption (blockchain, AR/VR), retention history.",
    buyerCriteria:
      "Type of institution (museum, NGO, retail chain, government, tech), compliance requirements, prior collaborations, retention history.",
    exampleOutput:
      "You qualify for Institutional → Museum Partnership. With 12 months retention or KHCRF fast-track, you can progress into Policy Alliance Partnerships.",
    cta: "Apply Now for This Track",
  },
  tracks: [
    {
      id: "logistics",
      name: "Logistics & Infrastructure",
      icon: "Truck",
      kpi: "Negotiable",
      prev: "Warehouse",
      href: "/institutional/logistics-infrastructure",
      retention: "12 months",
      bestFor: "Large buyers, cooperatives, and logistics partners.",

      benefit: "Supply integration, warehousing, savings.",

      cta: "Apply for Logistics",
      fastTrackAvailable: true,
    },
    {
      id: "museum",
      name: "Art & Culture Museums",
      icon: "Landmark",
      prev: "Logistics & Infrastructure",
      href: "/institutional/museum-institutional",
      kpi: "None",
      retention: "None",
      bestFor: "Heritage vendors and cultural institutions.",
      benefit: "Museum showcases, preservation, global reach.",

      cta: "Apply for Museum",
      fastTrackAvailable: true,
    },
    {
      id: "ngo-government",
      name: "NGOs & Governments",
      icon: "Globe",
      kpi: "None",
      prev: "Museum",
      href: "/institutional/ngo&government",
      retention: "None",
      bestFor: "Social enterprises, NGOs, policymakers.",
      benefit:
        "Fair-trade advocacy, social impact programs, craft policy support.",
      cta: "Apply for NGO",
      fastTrackAvailable: true,
    },
    {
      id: "tech-alliance",
      name: "Technology Alliances",
      icon: "Cpu",
      kpi: "None",
      prev: "NGOs & Governments",
      href: "/institutional/technology-partnership",
      retention: "None",
      bestFor: "Tech-driven vendors, trust-focused buyers.",
      benefit: "Traceability, insights, immersion.",

      cta: "Apply for Tech Alliance",
      fastTrackAvailable: true,
    },
  ],

  workflow: {
    heading: "How Institutional Partnerships Work",
    standard: {
      title: "Standard Path",
      steps: [
        "Apply",
        "KPI evaluation + compliance",
        "Track Match",
        "Activation",
        "Policy/Institutional recognition",
      ],
    },
    fastTrack: {
      title: "Fast-Track Path (KHCRF)",
      steps: [
        "Apply",
        "KHCRF evaluation",
        "Pay Lateral Fee",
        "Immediate access to Institutional Partnerships",
      ],
    },
  },
  trackComparison: {
    heading: "Choose Your Institutional Path",
    tracks: [
      {
        name: "Museums",
        icon: "Landmark",
        bestFor:
          "Vendors with heritage products & institutions preserving culture",
        kpi: "9+",
        retention: "12 months",
        benefit: "Museum showcases, heritage preservation, global visibility.",
        progression: "Progress to Policy Alliance Partnerships",
      },
      {
        name: "NGOs & Governments",
        icon: "Globe",
        bestFor: "Social enterprises, NGOs, policymakers",
        kpi: "8+",
        retention: "12 months",
        benefit:
          "Fair-trade advocacy, social impact programs, craft policy support.",
        progression: "Progress to Policy Alliance Partnerships",
      },
      {
        name: "Logistics & Infrastructure",
        icon: "Truck",
        bestFor: "Large buyers, vendor cooperatives, logistics partners",
        kpi: "8+",
        retention: "12 months",
        benefit: "Global supply chain integration, warehousing, reduced costs.",
        progression: "Progress to Policy Alliance Partnerships",
      },
      {
        name: "Technology Alliances",
        icon: "Cpu",
        bestFor:
          "Vendors adopting blockchain, AI, AR/VR; buyers seeking traceability",
        kpi: "9+",
        retention: "18 months",
        benefit: "Blockchain traceability, AI insights, AR/VR exhibitions.",
        progression: "Progress to Policy Alliance Partnerships",
      },
    ],
    fastTrackNote:
      "For all tracks: KHCRF evaluates Vendors/Buyers. If evaluation is promising, pay Lateral Fee. Skip retention & prerequisites → direct access to Institutional Partnerships.",
    fastTrackCta: "Apply for KHCRF Fast-Track",
  },
  journey: {
    heading: "Your Institutional Partnership Journey",
    steps: [
      {
        title: "Choose Institutional Track",
        options: [
          "Logistics & Infrastructure → KPI 8+ | 12 months retention.",
          "Museums → KPI none | no retention.",
          "NGOs & Governments → KPI none | no retention.",
          "Technology Alliances → KPI none | no retention.",
        ],
        note: "Requires completion of Collaborative or Brand Growth tracks.",
      },
      {
        title: "KPI + Compliance Evaluation",
        description:
          "Evaluation of KPI, compliance, and prerequisite track completions.",
      },
      {
        title: "Track Activation",
        description:
          "Access to museum, NGO, logistics, or tech alliance services.",
      },
      {
        title: "Fast-Track Option (KHCRF)",
        options: [
          "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org).",
          "If evaluation is promising → pay Lateral Fee.",
          "Skip retention & prerequisites → direct access to Institutional tracks.",
        ],
      },
      {
        title: "Policy Recognition & Global Alliances",
        description:
          "Integration into global policy alliances and institutional networks.",
        pathways: [
          "Policy Alliance Partnerships (Museums, NGOs, Governments, Tech)",
        ],
      },
    ],
  },
  feePackages: [
    {
      track: "Museums",
      icon: "Landmark",
      onboarding: "$1000 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$250",
          features: [
            "Heritage showcase access",
            "Basic exhibition templates",
            "Logistics waiver: 5%",
            "Standard museum support",
          ],
        },
        {
          name: "Growth",
          price: "$500",
          features: [
            "Curated exhibitions",
            "Branding kits",
            "Logistics waiver: 10%",
            "Priority museum placement",
          ],
        },
        {
          name: "Premium",
          price: "$1000",
          features: [
            "Global exhibitions",
            "Premium packaging",
            "AR/VR museum catalogs",
            "Logistics waiver: 15%",
          ],
        },
      ],
      range: "$250–$1000",
    },
    {
      track: "NGOs & Governments",
      icon: "Globe",
      onboarding: "$1000 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$150",
          features: [
            "Fair-trade certification support",
            "Basic policy engagement",
            "Logistics waiver: 5%",
            "Standard NGO support",
          ],
        },
        {
          name: "Pro",
          price: "$375",
          features: [
            "Policy advocacy programs",
            "Branding support",
            "Logistics waiver: 10%",
            "Priority NGO partnerships",
          ],
        },
        {
          name: "Institutional",
          price: "$750",
          features: [
            "Direct policy alliances",
            "Funding access",
            "Logistics waiver: 15%",
            "Dedicated policy manager",
          ],
        },
      ],
      range: "$150–$750",
    },
    {
      track: "Logistics & Infrastructure",
      icon: "Truck",
      onboarding: "$1000 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$200",
          features: [
            "Shared logistics infrastructure",
            "Basic warehousing access",
            "Logistics waiver: 5%",
            "Standard supply chain support",
          ],
        },
        {
          name: "Growth",
          price: "$400",
          features: [
            "Priority global distribution",
            "Logistics waiver: 10%",
            "Advanced warehousing analytics",
            "Priority logistics support",
          ],
        },
        {
          name: "Premium",
          price: "$800",
          features: [
            "Institutional-level warehousing",
            "Logistics waiver: 15%",
            "Dedicated logistics manager",
            "Real-time supply chain dashboard",
          ],
        },
      ],
      range: "$200–$800",
    },
    {
      track: "Technology Alliances",
      icon: "Cpu",
      onboarding: "$1000 one-time setup",
      packages: [
        {
          name: "Compliance",
          price: "$300",
          features: [
            "Blockchain traceability setup",
            "Basic tech integration",
            "Logistics waiver: 5%",
            "Standard tech support",
          ],
        },
        {
          name: "Expansion",
          price: "$750",
          features: [
            "AI integration",
            "AR/VR catalog setup",
            "Logistics waiver: 10%",
            "Priority tech support",
          ],
        },
        {
          name: "Institutional",
          price: "$1500",
          features: [
            "Full enterprise-level integration",
            "Policy-level recognition",
            "Logistics waiver: 15%",
            "Dedicated tech consultant",
          ],
        },
      ],
      range: "$300–$1500",
    },
  ],
  comparison: {
    heading: "Choose Your Entry Path",
    standard: {
      title: "Standard Path",
      subtitle: "(Default progression for all partners)",
      features: [
        "Free — no upfront or lateral fee.",
        "Progress via KPI + retention (85 months).",
        "Best for: Institutions building steady, reliable partnerships.",
      ],
      note: "Takes time: requires previous track completions.",
      cta: "Apply with Standard Path",
    },
    lateral: {
      title: "Lateral Entry (KHCRF Fast-Track)",
      subtitle: "(Optional accelerated route)",
      features: [
        "KHCRF evaluation first → only pay Lateral Fee if promising.",
        "Skip retention & prerequisites → direct Institutional access.",
        "Recognition as KHCRF-reviewed institutional partner.",
        "Best for: Institutions ready to scale fast.",
      ],
      note: "Paid only after successful evaluation.",
      cta: "Apply for KHCRF Fast-Track",
    },
  },
  faq: [
    {
      question:
        "Do I need to complete Collaborative before joining Institutional?",
      answer: "Yes, unless you qualify via KHCRF Lateral Entry.",
    },
    {
      question: "Can NGOs and small institutions join directly?",
      answer:
        "Yes, if they meet KPI 8+ and retention 12 months, or via fast-track.",
    },
    {
      question: "Is technology adoption mandatory?",
      answer: "Only for the Technology Alliance track.",
    },
    {
      question: "Can museums join without GI-certified vendors?",
      answer:
        "No, GI/fair-trade certification is mandatory for Museum Partnerships.",
    },
  ],
  footer: {
    headline:
      "Join Institutional Partnerships — Build Global Heritage Alliances",
    subtext:
      "Elevate your partnership to the highest level: museums, NGOs, governments, logistics, and tech alliances.",
    ctaButtons: [
      "Apply as a Vendor",
      "Apply as a Buyer",
      "Apply for KHCRF Fast-Track",
    ],
  },
};
