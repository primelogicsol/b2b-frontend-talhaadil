import { PartnershipPage } from "@/components/Essentials/PartnershipComponent";
import { PartnershipPageProps } from "@/components/Essentials/PartnershipComponent";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
const defaultProps: PartnershipPageProps = {
  vendorTitle: "Why Work With De Koshur?",
  vendorSubtitle: "Your One-Stop Solution for Success",
  vendorIntro:
    "Partnering with De Koshur Crafts means no barriers to success. We provide comprehensive support to help you grow your business with authentic Kashmiri crafts.",
  vendorBenefits: [
    {
      title: "Authenticity & Provenance",
      description:
        "All products are GI-certified, ensuring you offer genuine Kashmiri crafts with verified authenticity.",
    },
    {
      title: "Global Market Access",
      description:
        "Leverage our established digital platform to expand your reach to North America and other global markets without the need for upfront investment.",
    },
    {
      title: "No Worries About Logistics & Packaging",
      description:
        "We manage fast shipping and secure, eco-friendly packaging, leaving you free to focus on growing your business.",
    },
    {
      title: "Professional Product Photography",
      description:
        "We'll provide high-quality photos of your products to ensure they shine online.",
    },
    {
      title: "CraftLore Marketing",
      description:
        "Can't afford marketing? CraftLore ensures your products get free exposure across multiple platforms globally.",
    },
    {
      title: "Artstay Direct Sales",
      description:
        "Don't want to manage an online store? Artstay will bring buyers directly to your store, ensuring global exposure for your products.",
    },
    {
      title: "Prime Logic Solutions",
      description:
        "No website? Prime Logic Solutions, our in-house tech company, will build and maintain your e-commerce platform for FREE.",
    },
    {
      title: "Hamadan Craft Revival Foundation (HCRF)",
      description:
        "Facing challenges? The HCRF, our Kashmiri craft policy think tank, is here to support you through advocacy and strategic initiatives.",
    },
    {
      title: "Progressive Path to Free Services",
      description:
        "As long as you meet the KPIs and retention periods, you gain access to free-of-cost services—from website development to marketing support.",
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
        "Start sourcing without holding inventory. Vendor fulfills orders directly to your customers.",
      details:
        "Zero upfront investment required. Ideal for e-commerce resellers & micro businesses. Boosts vendor sales via online demand.",
      kpi: "KPI 7+",
      retention: "No retention required",
    },
    {
      title: "Consignment Buyer",
      description:
        "List vendor products on your platform or shelf. Pay only after verified sale (vendor retains inventory).",
      details:
        "No warehousing risk to you. Vendors gain visibility with safety net. Strong for boutique stores or testing collections.",
      kpi: "KPI 7+",
      retention: "18 months in Drop Shipping required",
    },
    {
      title: "Import Buyer",
      description:
        "Buy GI-tagged certified goods for global trade. Manage labeling, compliance, and customs.",
      details:
        "Requires DKC import documentation orientation. Vendors access new markets with protected identity. Ideal for cross-border distributors.",
      kpi: "KPI 8+",
      retention: "6 months in Consignment required",
    },
    {
      title: "Wholesale & Distribution Buyer",
      description:
        "Place bulk orders for resale or chain distribution. Access traceable, verified product lines.",
      details:
        "Faster production cycles and better margins. Enables vendor scale & packaging upgrades. Great for hotels, gift shops, online retailers.",
      kpi: "KPI 7+",
      retention: "3 months in any core tier required",
    },
  ],
  growthTitle: "Growth & Brand Expansion Partnerships",
  growthDescription:
    "Designed for buyers who amplify vendor exposure through space, exclusivity, or events.",
  growthPartnerships: [
    {
      title: "Exhibition Buyer & Event Organizer",
      description:
        "Attend or co-host DKC-curated craft expos. Book vendor collections via exclusive pre-orders.",
      details:
        "Co-brand your event with DKC support. Great for cultural hosts, retailers, & trade leads. Vendors gain visibility, sales, and network growth.",
      kpi: "KPI 8+",
      retention: "6 months in Import or Wholesale required",
    },
    {
      title: "Auction & Bidding Buyer",
      description:
        "Access exclusive artisan pieces via verified bidding. Ideal for collectors, curators, and luxury retail.",
      details:
        "Smart contract-enabled, transparent process. Boosts vendor earnings for rare and masterworks. Timed and live auctions available year-round.",
      kpi: "KPI 8.5+",
      retention: "6 months in Exhibition or Import required",
    },
    {
      title: "White-Label Buyer",
      description:
        "Rebrand crafts under your own private label. Must comply with ethical sourcing and packaging.",
      details:
        "Offers vendors scale with identity preservation. Customization available (colors, packaging, variants). Excellent for conscious consumer brands.",
      kpi: "KPI 9+",
      retention: "12 months in Auction or Exhibition required",
    },
    {
      title: "Brick & Mortar Space-Sharing Buyer",
      description:
        "Offer shelf space in your retail store to DKC vendors. Act as a hosting partner for vendor collections.",
      details:
        "Share monthly reports, POS, and branding standards. Vendors gain customer visibility and footfall traction. Great for boutiques, galleries, concept stores.",
      kpi: "KPI 9+",
      retention: "12 months in White-Label or Exhibition required",
    },
  ],
  creativeTitle: "Creative & Collaborative Partnerships",
  creativeDescription:
    "Knowledge & design partnerships for innovative collaboration.",
  creativePartnerships: [
    {
      title: "Knowledge & Design Partner",
      description:
        "Co-create seasonal or signature product lines. Collaborate on patterns, materials, and packaging.",
      details:
        "Drives artisan innovation & niche positioning. Best for design studios, curators, indie brands. Vendors gain creative input and global trends exposure.",
      kpi: "KPI 8+",
      retention: "6 months in White-Label or Brick & Mortar required",
    },
    {
      title: "Storytelling & Media Partner",
      description:
        "Fund or produce artisan content (videos, blogs, reels). Feature behind-the-scenes of craft making.",
      details:
        "Strengthens vendor brand & cultural narrative. Ideal for publishers, influencers, or agencies. Vendors become visible beyond product listings.",
      kpi: "KPI 7+",
      retention: "6 months in any Growth Tier required",
    },
    {
      title: "Buyer Mentorship Program",
      description:
        "Guide vendors through catalog, pricing, and marketing. Host virtual or physical mentorship sessions.",
      details:
        "Share procurement trends or platform feedback. Boosts vendor capacity, confidence, and readiness. Ideal for senior buyers and category managers.",
      kpi: "KPI 9+",
      retention: "12 months in Design or Storytelling required",
    },
    {
      title: "Craft Innovation Patron",
      description:
        "Sponsor sustainable packaging, tools, or techniques. Help revive endangered skills or eco-materials.",
      details:
        "Vendors get access to new processes & tools. Recognition as an Artisan Innovation Partner. Best for ESG-aligned buyers and foundations.",
      kpi: "KPI 8+",
      retention: "12 months in any Creative Tier required",
    },
  ],
  institutionalTitle: "Institutional & Strategic Partnerships",
  institutionalDescription:
    "High-level partnerships for institutional buyers and strategic investors.",
  institutionalPartnerships: [
    {
      title: "Strategic Investor Buyer",
      description:
        "Provide equity or infrastructure support to DKC vendors. May invest in platforms, retail, or supply chain.",
      details:
        "Drives artisan business stability and scaling. Suitable for ethical funds or global procurement hubs. Vendors access finance + operational capacity.",
      kpi: "KPI 9+",
      retention: "12 months in Growth or Creative Tier required",
    },
    {
      title: "Museum/Institutional Buyer",
      description:
        "Source archival, curated, or heritage-grade collections. Work with certified vendors on cultural documentation.",
      details:
        "Ideal for museums, universities, and research archives. Validates vendor authenticity and story. Elevates the prestige and traceability of crafts.",
      kpi: "KPI 9+",
      retention: "12 months in Import or Creative Tier required",
    },
    {
      title: "NGO & Government Buyer",
      description:
        "Support vendor sourcing through funded projects or public missions. Engage with artisans via SDG or policy-driven partnerships.",
      details:
        "Includes fair trade procurement and women-led initiatives. Vendors get livelihood security and formal visibility. Great for ministries, NGOs, CSR divisions.",
      kpi: "KPI 8+",
      retention: "12 months in Strategic or Creative Tier required",
    },
    {
      title: "Impact Measurement Buyer",
      description:
        "Track vendor performance via ESG, SDG, or traceability data. Publish reports for foundations, grants, or donors.",
      details:
        "Access DKC's blockchain-integrated reporting tools. Hold buyers and vendors equally accountable. Drives trust and funding for high-performing artisans.",
      kpi: "KPI 9+",
      retention: "24 months in Strategic or Creative Tier required",
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
  return (
    <div>
      <VerticalHeroSlider/>
      <PartnershipPage {...defaultProps} />
    </div>
  );
}
