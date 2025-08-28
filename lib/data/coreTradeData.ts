export const coreTradeData = {
  tier: 1,
  hero: {
    headline: "Core Trade Partnerships — The Gateway to Global Craft Commerce",
    subtext:
      "Begin your journey into structured, transparent, and fair trade. Core Trade connects Vendors and Buyers through four partnership models: Dropshipping, Consignment, Wholesale, and Certified Import/Export.",
    ctaButtons: [
      "Start Core Trade Partnership",
      "Apply as a Vendor",
      "Apply as a Buyer",
    ],
  },
  whyCoreTrade: {
    heading: "Fixing the Broken Craft Trade",
    problems: [
      "Vendors exploited by intermediaries.",
      "Buyers exposed to counterfeits & inflated prices.",
      "No digital systems, no fair-trade compliance.",
      "No growth ladder for small or large players.",
    ],
    solutions: [
      "Verified vendors & buyers with KPI checks.",
      "Low-risk entry models (dropshipping, consignment).",
      "Transparent contracts & structured progression.",
      "A clear first step into the global partnership framework.",
    ],
  },
  eligibility: {
    heading: "Who Can Join Core Trade?",
    standard: {
      title: "Standard Eligibility (Default Path)",
      vendors:
        "KPI 7+, Retention 0–27 months (depending on track), certification required for Certified Export.",
      buyers:
        "KPI 7+, Retention 0–27 months, budget flexibility depending on chosen track.",
      note: "Partners progress naturally through KPI improvement + retention periods.",
    },
    lateral: {
      title: "Lateral Entry (Fast-Track Path)",
      description: "For those who want to skip retention periods:",
      points: [
        "Evaluation is conducted by Hamadan Craft Revival Foundation (KHCRF.org), a think tank on craft policy.",
        "If evaluation comes out promising, the partner can opt for Lateral Entry by paying a Lateral Fee.",
        "Lateral Entry enables immediate access to higher-level partnerships (Brand Growth, Collaborative, Institutional).",
        "Those who don't choose this option will still progress naturally via KPI + retention.",
      ],
      cta: "Apply for KHCRF Evaluation",
    },
  },
  eligibilityTest: {
    heading: "Check Your Core Trade Track Instantly",
    description: "Quick quiz for vendors and buyers to determine eligibility",
    vendorCriteria:
      "certifications, production capacity, tech adoption, retention history",
    buyerCriteria: "sourcing model, business type, budget, retention history",
    exampleOutput:
      "You qualify for Core Trade – Consignment Partner. With 18 months retention or KHCRF fast-track, you can progress to Exhibition Partner (Brand Growth).",
    cta: "Apply Now for This Track",
  },
  tracks: [
    {
      id: "dropshipping",
      name: "Dropshipping",
      icon: "Truck",
      kpi: "None",
      href: "/core-trade/dropshipping-ecommerce",
      retention: "None",
      bestFor: "Online stores, new artisans, small-scale buyers.",
      benefit: "Zero risk, entry point",
      cta: "Start Dropshipping",
      fastTrackAvailable: false,
    },
    {
      id: "consignment",
      name: "Consignment",
      icon: "ShoppingBag",
      kpi: "7+",
      href: "/core-trade/consignment",
      retention: "18 months",
      bestFor: "Boutiques, retail stores, artisan groups.",
      benefit: "Pay after sales low-risk retail.",
      cta: "Apply for Consignment",
      fastTrackAvailable: true,
    },
    {
      id: "wholesale",
      name: "Wholesale",
      icon: "Package",
      href: "/core-trade/wholesale&distribution",
      kpi: "7+",
      retention: "3 months",
      bestFor: "Distributors, chain stores, large buyers.",
      benefit: "Scalable & competitive pricing.",
      cta: "Apply for Wholesale",
      fastTrackAvailable: true,
    },
    {
      id: "export",
      name: "Import/Export",
      icon: "Globe",
      href: "/core-trade/import-export",
      kpi: "8+",
      retention: "6 months",
      bestFor: "Compliance-driven trade, larger distributors.",
      benefit: "GI-certified, fair-trade verified.",
      cta: "Apply for Certified Export",
      fastTrackAvailable: true,
    },
  ],
  workflow: {
    heading: "How Core Trade Works",
    standard: {
      title: "Standard Path",
      steps: [
        "Apply",
        "Evaluation (KPI)",
        "Track Match",
        "Trade Activation",
        "Progression via KPI + Retention",
      ],
    },
    fastTrack: {
      title: "Fast-Track Path (KHCRF)",
      steps: [
        "Apply",
        "KHCRF Evaluation",
        "If promising → Pay Lateral Fee",
        "Direct entry into higher-level partnerships",
      ],
    },
  },
  trackComparison: {
    heading: "Find Your Core Trade Path",
    tracks: [
      {
        name: "Dropshipping",
        icon: "Truck",
        bestFor: "Online stores, new artisans, small-scale buyers",
        kpi: "None",
        retention: "None",
        benefit: "Zero risk, entry point into global trade.",
        progression: "Progress to Consignment or Wholesale",
      },
      {
        name: "Consignment",
        icon: "ShoppingBag",
        bestFor: "Boutiques, retail stores, artisan groups",
        kpi: "7+",
        retention: "18 months",
        benefit: "Pay after sales → low-risk retail expansion.",
        progression: "Progress to Wholesale or Brand Growth",
      },
      {
        name: "Wholesale",
        icon: "Package",
        bestFor: "Distributors, chain stores, large buyers",
        kpi: "7+",
        retention: "3 months",
        benefit: "Scalable volume & competitive pricing.",
        progression: "Progress to Certified Import/Export",
      },
      {
        name: "Certified Import/Export",
        icon: "Globe",
        bestFor: "Compliance-driven trade, larger distributors",
        kpi: "Buyer 7+ / Vendor 8+",
        retention: "6 months",
        benefit: "GI-certified, fair-trade verified.",
        progression: "Progress to Institutional or Collaborative Partnerships",
      },
    ],

    fastTrackNote:
      "For all tracks: KHCRF evaluates Vendors/Buyers. If evaluation is promising, pay Lateral Fee. Skip retention → direct progression to advanced partnerships (Brand Growth, Collaborative, Institutional).",
    fastTrackCta: "Apply for KHCRF Fast-Track",
  },
  journey: {
    heading: "Your Core Trade Journey",
    steps: [
      {
        title: "Choose Your Entry Track",
        options: [
          "Dropshipping → No risk, start instantly.",
          "Consignment → Retail exposure, pay after sales.",
          "Wholesale → Scale with bulk orders.",
          "Certified Import/Export → Global compliance & credibility.",
        ],
        note: "All tracks require KPI 7+ (Export = KPI 8+).",
      },
      {
        title: "Standard Progression Path",
        description:
          "Maintain KPI & meet retention (27 months). After stability → unlock next-level partnerships.",
      },
      {
        title: "Fast-Track Option (KHCRF)",
        options: [
          "Independent evaluation by Hamadan Craft Revival Foundation (KHCRF.org).",
          "If evaluation is promising → pay Lateral Fee.",
          "Skip retention → Girect entry into advanced pillars.",
        ],
      },
      {
        title: "Next-Level Pathways",
        description: "After Core Trade, partners can progress into:",
        pathways: [
          "Brand Growth Partnerships (Exhibitions, Auctions, White Label, Retail Stores)",
          "Collaborative Partnerships (Co-design, Storytelling, Shared Services, Packaging)",
          "Institutional Partnerships (Museums, NGOs, Governments, Logistics, Tech)",
        ],
      },
    ],
  },
  feePackages: [
    {
      track: "Dropshipping",
      icon: "Truck",
      onboarding:
        "Free only if enrolled within next 6 months (6-month free access). Afterward → Paid Packages.",
      packages: [
        {
          name: "Basic",
          price: "$12.50",
          features: [
            "Up to 25 listings",
            "Basic packaging templates (labels, boxes)",
            "Logistics waiver: 5% discount",
            "Standard vendor–buyer matching",
          ],
        },
        {
          name: "Growth",
          price: "$37.50",
          features: [
            "Up to 100 listings",
            "Branded packaging kit",
            "Logistics waiver: 10% discount",
            "Priority buyer matching + analytics",
          ],
        },
        {
          name: "Premium",
          price: "$75",
          features: [
            "Unlimited listings",
            "Premium customized packaging bundle",
            "Logistics waiver: 15% discount",
            "Top catalog placement, dedicated support, early Consignment eligibility",
          ],
        },
      ],
      range: "$12.50–$75",
    },
    {
      track: "Consignment",
      icon: "ShoppingBag",
      onboarding: "$200 (one-time, covers contracts + setup)",
      packages: [
        {
          name: "Standard",
          price: "$50",
          features: [
            "Access to boutique consignment networks",
            "Pay-after-sale setup",
            "Standard packaging templates",
            "Logistics waiver: 5%",
          ],
        },
        {
          name: "Pro",
          price: "$125",
          features: [
            "Expanded retail consignment placement",
            "Branded packaging kit",
            "Logistics waiver: 10%",
            "Faster settlement cycle (20–30 days)",
          ],
        },
        {
          name: "Enterprise",
          price: "$250",
          features: [
            "Premium retail + seasonal showcase placement",
            "Premium customized packaging solutions",
            "Logistics waiver: 15%",
            "Dedicated vendor–buyer relationship manager",
            "Settlement cycle reduced to 7–10 days",
          ],
        },
      ],
      range: "$50–$250",
    },
    {
      track: "Wholesale",
      icon: "Package",
      onboarding: "$500 (one-time, covers compliance + contracts)",
      packages: [
        {
          name: "Standard",
          price: "$125",
          features: [
            "Bulk order contracts access",
            "Basic packaging templates",
            "Logistics waiver: 5%",
            "KPI monitoring dashboard",
          ],
        },
        {
          name: "Growth",
          price: "$250",
          features: [
            "Distributor & chain store access",
            "Branded packaging kit",
            "Logistics waiver: 10%",
            "Priority buyer allocation",
          ],
        },
        {
          name: "Premium",
          price: "$500",
          features: [
            "Strategic wholesale partnerships",
            "Premium custom packaging bundles",
            "Logistics waiver: 15%",
            "Dedicated account manager",
            "Early progression to Export",
          ],
        },
      ],
      range: "$125–$500",
    },
    {
      track: "Export",
      icon: "Globe",
      onboarding:
        "$1,000 (one-time, covers GI/fair-trade verification & compliance)",
      packages: [
        {
          name: "Compliance",
          price: "$150",
          features: [
            "GI/fair-trade certificate validation",
            "Basic compliance packaging",
            "Logistics waiver: 5%",
            "Trade advisory (basic)",
          ],
        },
        {
          name: "Expansion",
          price: "$375",
          features: [
            "Global buyer directory access",
            "Branded export packaging kit",
            "Logistics waiver: 10%",
            "Priority export market matching",
          ],
        },
        {
          name: "Institutional",
          price: "$750",
          features: [
            "Direct institutional buyer/NGO/Government linkage",
            "Premium co-branded packaging",
            "Logistics waiver: 15%",
            "Legal/documentation concierge",
            "Policy-level engagement opportunities",
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
        "Dropshipping requires no KPI, no retention (universal entry).",
        "KPI 7+ and retention (18 - 27 months) apply only to Consignment, Wholesale, and Export.",
        "Best for: Partners who want steady, sustainable growth.",
        "Transparent process with clear terms at every stage.",
      ],

      note: "Takes time: retention required before moving to advanced partnerships.",
      cta: "Apply with Standard Path",
      href: "/registration",
    },
    lateral: {
      title: "Lateral Entry (KHCRF Fast-Track)",
      subtitle: "(Optional accelerated route)",
      features: [
        "Independent evaluation by Hamadan Craft Revival Foundation",
        "If evaluation is promising, pay a Lateral Fee.",
        "Skip prerequisites + retention → direct access to advanced partnerships (Brand Growth, Collaborative, Institutional).",
        "Recognition as KHCRF-reviewed partner.",
        "Best for: Vendors and buyers ready to scale fast.",
      ],
      note: "Paid: Only after KHCRF evaluation confirms eligibility.",
      cta: "Apply for KHCRF Fast-Track",
      href: "https://khcrf.org/",
    },
  },
  faq: [
    {
      question: "What is Lateral Entry?",
      answer:
        "A fast-track pathway that allows partners to skip retention periods if they pass KHCRF evaluation.",
    },
    {
      question: "Do I pay before evaluation?",
      answer:
        "No. The evaluation is done first. Only if the outcome is promising do you pay the Lateral Fee.",
    },
    {
      question: "Can I still progress without paying the Lateral Fee?",
      answer:
        "Yes. Standard KPI + retention rules automatically move you forward.",
    },
    {
      question: "Why should I choose Lateral Entry?",
      answer:
        "To save time. Instead of waiting 6–18 months, you can unlock advanced partnerships immediately after KHCRF approval.",
    },
    {
      question: "Does KHCRF replace Core Trade evaluation?",
      answer:
        "No. KHCRF adds a fast-track option. Standard KPI progression still applies to all partners.",
    },
  ],
};
