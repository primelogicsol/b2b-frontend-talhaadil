export const brandGrowthData = {
  tier: 2,
  hero: {
    headline: "Brand Growth Partnerships — Scale Your Craft, Build Your Brand",
    subtext:
      "Beyond trade lies recognition. Brand Growth Partnerships help Vendors and Buyers expand visibility, secure exclusive placements, and build lasting brand equity through Exhibitions, Auctions, White Label, and Brick & Mortar retail channels.",
    ctaButtons: [
      "Start Brand Growth Partnership",
      "Apply as a Vendor",
      "Apply as a Buyer",
    ],
  },
  whyCoreTrade: {
    heading: "The Gap Between Trade and Recognition",
    problems: [
      "Core Trade ensures fair exchange, but visibility is limited.",
      "Vendors struggle to reach global showcases & high-value buyers.",
      "Buyers cannot easily secure exclusivity or retail placement.",
      "No structured growth ladder beyond initial transactions.",
    ],
    solutions: [
      "Verified exhibitions & catalogs for international exposure.",
      "Secure auction platforms to build credibility with collectors.",
      "White Label partnerships for private-brand scaling.",
      "Brick & Mortar access for premium retail expansion.",
    ],
  },
  eligibility: {
    heading: "Who Can Join Brand Growth?",
    standard: {
      title: "Standard Eligibility (Default Path)",
      vendors:
        "KPI 7-8+, Retention 27-51 months (depending on track), prerequisite tracks from Core Trade.",
      buyers:
        "KPI 7-8+, Retention 27-51 months, budget flexibility depending on chosen track.",
      note: "Partners move step by step through KPIs, retention, and previous-level eligibility.",
    },
    lateral: {
      title: "Lateral Entry (Fast-Track Path)",
      description:
        "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org).",
      points: [
        "If evaluation is promising → pay Lateral Fee.",
        "Skip retention → direct entry into Auction, White Label, or Brick & Mortar.",
        "KPI thresholds still apply.",
      ],
      cta: "Apply for KHCRF Fast-Track",
    },
  },
  eligibilityTest: {
    heading: "Check Your Brand Growth Track Instantly",
    description: "Quick quiz for vendors and buyers to determine eligibility",
    vendorCriteria:
      "Previous track, certifications, production capacity, design readiness, branding level.",
    buyerCriteria:
      "Business type, sourcing model, budget, exclusivity requirements.",
    exampleOutput:
      "You qualify for Brand Growth — Exhibition Partner. With 3 months retention or KHCRF fast-track, you can progress into Auction Partnership.",
    cta: "Apply Now for This Track",
  },
tracks: [
  {
    id: "exhibition",
    name: "Exhibition",
    icon: "Frame",
    kpi: "7+",
    prev : "Import Export",
    href: "/brand-growth/exhibition",
    retention: "6 months",
    bestFor: "Showcases and catalogs seekers",
    benefit: "Verified exhibitions & catalogs",
    cta: "Apply for Exhibition",
    fastTrackAvailable: false,
  },
  {
    id: "auction",
    name: "Auction",
    icon: "Gavel",
    kpi: "8+",
    prev : "Exhibition",
    href: "/brand-growth/auction&bidding",
    retention: "6 months",
    bestFor: "Rare craft buyers & vendors",
    benefit: "Heritage crafts verified auctions",
    cta: "Apply for Auction",
    fastTrackAvailable: true,
  },
  {
    id: "white-label",
    name: "White Label",
    icon: "Tag",
    kpi: "8+",
    prev : "Auction", 
    href: "/brand-growth/white-label",
    retention: "6 months",
    bestFor: "Private branding buyers/vendors",
    benefit: "Scalable private branding",
    cta: "Apply for White Label",
    fastTrackAvailable: true,
  },
  {
    id: "brick-mortar",
    name: "Brick & Mortar",
    icon: "Building",
    kpi: "8+",
    prev : "White Label",
    href: "/brand-growth/brick&mortar",
    retention: "6 months",
    bestFor: "Retail expansion buyers/vendors",
    benefit: "Premium retail flagship stores",
    cta: "Apply for Brick & Mortar",
    fastTrackAvailable: true,
  },
]
,

  workflow: {
    heading: "How Brand Growth Works",
    standard: {
      title: "Standard Path",
      steps: [
        "Apply",
        "KPI Evaluation",
        "Track Match",
        "Activation",
        "Progress via KPI + Retention",
      ],
    },
    fastTrack: {
      title: "Fast-Track Path (KHCRF)",
      steps: [
        "Apply",
        "KHCRF Evaluation",
        "If promising → Pay Lateral Fee",
        "Direct entry into Auction, White Label, or Brick & Mortar",
      ],
    },
  },
  trackComparison: {
    heading: "Find Your Brand Growth Path",
    tracks: [
      {
        name: "Exhibition",
        icon: "Frame",
        bestFor: "Showcases & catalogs",
        kpi: "7+",
        retention: "6 months",
        benefit: "Exhibit crafts & catalogs",
        progression: "Move to Auction/White Label",
      },
      {
        name: "Auction",
        icon: "Gavel",
        bestFor: "Rare heritage crafts",
        kpi: "8+",
        retention: "6 months",
        benefit: "Verified craft auctions",
        progression: "Move to White Label/Retail",
      },
      {
        name: "White Label",
        icon: "Tag",
        bestFor: "Private brand focus",
        kpi: "8+",
        retention: "6 months",
        benefit: "Scalable private branding",
        progression: "Move to Retail/Collaborative",
      },
      {
        name: "Brick & Mortar",
        icon: "Building",
        bestFor: "Retail expansion",
        kpi: "8+",
        retention: "6 months",
        benefit: "Premium store placement",
        progression: "Move to Collaborative/Institutional",
      },
    ],
    fastTrackNote:
      "For all tracks: KHCRF evaluates Vendors/Buyers. If evaluation is promising, pay Lateral Fee. Skip retention → direct progression to advanced partnerships (Auction, White Label, Brick & Mortar).",
    fastTrackCta: "Apply for KHCRF Fast-Track",
  },
  journey: {
    heading: "Your Brand Growth Journey",
    steps: [
      {
        title: "Choose Your Entry Track",
        options: [
          "Exhibition → KPI 7+ | 6 months retention.",
          "Auction → KPI 8+ | 6 months retention.",
          "White Label → KPI 8+ | 6 months retention.",
          "Brick & Mortar → KPI 8+ | 6 months retention.",
        ],
        note: "Start from Core Trade completion.",
      },
      {
        title: "Standard Progression Path",
        description:
          "Maintain KPI & meet retention (51 months). After stability → unlock next-level partnerships.",
      },
      {
        title: "Fast-Track Option (KHCRF)",
        options: [
          "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org).",
          "If evaluation is promising → pay Lateral Fee.",
          "Skip retention → direct entry into advanced pillars.",
        ],
      },
      {
        title: "Next-Level Pathways",
        description: "After Brand Growth, partners can progress into:",
        pathways: [
          "Collaborative Partnerships (Co-design, Storytelling, Shared Services, Packaging)",
          "Institutional Partnerships (Museums, NGOs, Governments, Logistics, Tech)",
        ],
      },
    ],
  },
  feePackages: [
    {
      track: "Exhibition",
      icon: "Frame",
      onboarding: "Free (if progressed from Core Trade)",
      packages: [
        {
          name: "Basic",
          price: "$25",
          features: [
            "Access to standard exhibitions",
            "Basic catalog placement",
            "Logistics waiver: 5% discount",
            "Standard vendor–buyer matching",
          ],
        },
        {
          name: "Growth",
          price: "$75",
          features: [
            "Expanded exhibition access",
            "Branded catalog features",
            "Logistics waiver: 10% discount",
            "Priority buyer matching + analytics",
          ],
        },
        {
          name: "Premium",
          price: "$150",
          features: [
            "Premium exhibition showcases",
            "Customized catalog placement",
            "Logistics waiver: 15% discount",
            "Top priority, dedicated support, early Auction eligibility",
          ],
        },
      ],
      range: "$25–$150",
    },
    {
      track: "Auction",
      icon: "Gavel",
      onboarding: "$250 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$75",
          features: [
            "Access to verified auctions",
            "Basic listing templates",
            "Logistics waiver: 5%",
            "Standard auction monitoring",
          ],
        },
        {
          name: "Pro",
          price: "$150",
          features: [
            "Expanded auction placement",
            "Branded listing kit",
            "Logistics waiver: 10%",
            "Priority bidder allocation",
          ],
        },
        {
          name: "Elite",
          price: "$300",
          features: [
            "Premium auction features",
            "Custom listing bundles",
            "Logistics waiver: 15%",
            "Dedicated account manager",
            "Early White Label eligibility",
          ],
        },
      ],
      range: "$75–$300",
    },
    {
      track: "White Label",
      icon: "Tag",
      onboarding: "$500 one-time setup",
      packages: [
        {
          name: "Standard",
          price: "$125",
          features: [
            "Private label contracts access",
            "Basic branding templates",
            "Logistics waiver: 5%",
            "KPI monitoring dashboard",
          ],
        },
        {
          name: "Growth",
          price: "$250",
          features: [
            "Scalable private branding",
            "Branded kit access",
            "Logistics waiver: 10%",
            "Priority partner allocation",
          ],
        },
        {
          name: "Premium",
          price: "$500",
          features: [
            "Strategic white label partnerships",
            "Custom branding bundles",
            "Logistics waiver: 15%",
            "Dedicated manager",
            "Early Brick & Mortar eligibility",
          ],
        },
      ],
      range: "$125–$500",
    },
    {
      track: "Brick & Mortar",
      icon: "Building",
      onboarding: "$750 one-time setup",
      packages: [
        {
          name: "Retail",
          price: "$150",
          features: [
            "Access to premium retail",
            "Basic store templates",
            "Logistics waiver: 5%",
            "Trade advisory (basic)",
          ],
        },
        {
          name: "Flagship",
          price: "$375",
          features: [
            "Flagship store access",
            "Branded retail kit",
            "Logistics waiver: 10%",
            "Priority market matching",
          ],
        },
        {
          name: "Global",
          price: "$750",
          features: [
            "Global retail linkage",
            "Premium co-branded solutions",
            "Logistics waiver: 15%",
            "Legal/documentation concierge",
            "Policy-level engagement",
          ],
        },
      ],
      range: "$150–$750",
    },
  ],
  comparison: {
    heading: "Choose Your Entry Path",
    standard: {
      title: "Standard Path",
      subtitle: "(Default progression for all partners)",
      features: [
        "Free — no upfront or lateral fee.",
        "Requires KPI (7+ / 8+) and retention (27-51 months).",
        "Step-by-step progression through Exhibition → Auction → White Label → Retail.",
        "Best for: Partners who want steady, sustainable growth.",
        "Dedicated support for onboarding and long-term partnership success.",
      ],

      note: "Takes time but builds steady credibility.",
      cta: "Apply with Standard Path",
    },
    lateral: {
      title: "Lateral Entry (KHCRF Fast-Track)",
      subtitle: "(Optional accelerated route)",
      features: [
        "Independent KHCRF evaluation.",
        "If promising → pay a Lateral Fee.",
        "Skip retention → direct access to Auction, White Label, or Brick & Mortar.",
        "KHCRF endorsement adds credibility.",
        "Best for: Vendors and buyers ready to scale fast.",
      ],
      note: "Paid only after successful evaluation.",
      cta: "Apply for KHCRF Fast-Track",
    },
  },
  faq: [
    {
      question: "Can I skip Exhibition and directly join Auction?",
      answer:
        "Yes, through KHCRF Lateral Entry (if evaluation is promising + fee paid).",
    },
    {
      question: "Are KPIs different for Vendors and Buyers?",
      answer:
        "Vendors must show compliance, authenticity & production capacity. Buyers must show sourcing model, budget, and fair-trade compliance.",
    },
    {
      question: "Do fees apply immediately?",
      answer:
        "Onboarding + monthly packages apply only after track activation.",
    },
    {
      question: "Can White Label vendors become Brick & Mortar vendors?",
      answer:
        "Yes, but KPI 8+ and retention 12–18 months must be maintained, unless Fast-Tracked.",
    },
  ],
};
