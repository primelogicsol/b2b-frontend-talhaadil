"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  TrendingUp,
  Package,
  Target,
  Zap,
} from "lucide-react";
import Cookies from "js-cookie";
import { useGlobalContext } from "@/context/ScreenProvider";
// Types for Quiz Questions and Results
interface QuizQuestion {
  id: string;
  question: string;
  type: "single" | "multiple" | "yesno";
  options?: string[];
  category: "general" | "vendor" | "buyer" | "validation";
  weight: number;
}

interface QuizResult {
  score: number;
  eligibility: string;
  recommendedTrack: string;
  fastTrackEligible: boolean;
  personalizedMessage: string;
  nextSteps: string[];
  strengths: string[];
  improvements: string[];
}

// Define Questions for Each Partnership Type
const quizData: Record<
  string,
  {name? : string,
    questions: QuizQuestion[];
    maxScore: number;
    thresholds: any;
    specialRules: any;
  }
> = {
  dropshipping: {
    name : "Dropshipping",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_active_years",
        question: "How long has your business been active?",
        type: "single",
        options: ["New", "1–3 years", "3–5 years", "5+ years"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_production_scale",
        question: "What is your production scale?",
        type: "single",
        options: ["Individual", "Workshop", "Enterprise"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications",
        question: "Do you have any certifications?",
        type: "single",
        options: ["None", "GI tag", "KHCRF approval"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_growth_goal",
        question: "What is your primary growth goal?",
        type: "single",
        options: ["Retail", "Wholesale", "Export", "Global branding"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Digital presence (website, catalog, social media)",
          "Packaging standards (safe, minimum compliance)",
          "Inventory tracking (10–20 pieces visibility)",
          "Tech compatibility (API/spreadsheet/e-commerce sync)",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Small retailer", "Wholesaler", "Institutional"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity",
        question: "What is your sourcing capacity?",
        type: "single",
        options: ["Less than $5K", "$5K–$25K", "$25K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_authenticity_importance",
        question: "How important is product authenticity to you?",
        type: "single",
        options: ["Low", "Medium", "High"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_commitment_level",
        question: "What is your commitment level?",
        type: "single",
        options: ["Dropshipping", "Consignment", "Wholesale", "Exhibition"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Fulfillment capability (past dropshipping experience)",
          "Return handling preference",
          "Promotion willingness (artisan storytelling)",
          "Tech compatibility (API/Shopify/WooCommerce integration)",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      5: {
        eligibility: "Dropshipping (TIER 1 / L1)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      11: {
        eligibility: "Dropshipping + Fast Track to Consignment",
        fastTrackEligible: true,
        nextLevel: "Consignment",
      },
      16: {
        eligibility: "Consignment (TIER 1 / L2)",
        fastTrackEligible: true,
        nextLevel: "Consignment",
      },
    },
    specialRules: {
      vendor: { certificationsRequired: false, commitment: null },
      buyer: { commitment: "Dropshipping" },
    },
  },
  consignment: {
    name : "consignment",
    questions: [
      // General Self-Evaluation Questions
      {
        id: "product_authenticity",
        question: "How do you ensure authenticity of your products/materials?",
        type: "single",
        options: [
          "Use mixed or synthetic materials",
          "Mostly authentic, some substitutions",
          "Verified sourcing from known suppliers",
          "GI tag / KHCRF or traceability certification for some products",
          "Full GI / Blockchain traceability for all products",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question:
          "How would you rate the overall quality of your products/services?",
        type: "single",
        options: [
          "Inconsistent, frequent defects",
          "Acceptable but with noticeable flaws",
          "High quality, minor imperfections",
          "Meets industry/export standards consistently",
          "Exceeds export standards with excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "How sustainable are your production and trade practices?",
        type: "single",
        options: [
          "No sustainability measures in place",
          "Some sustainable raw materials used",
          "Significant portion of processes eco-friendly",
          "Primarily eco-friendly with waste reduction policies",
          "Fully zero-waste, carbon-tracked, eco-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How do you ensure a positive customer/buyer experience?",
        type: "single",
        options: [
          "No defined customer experience policy",
          "Limited communication, inconsistent follow-up",
          "Satisfactory experience with basic service",
          "Well-managed service with strong communication",
          "Personalized, exceptional service with feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair wages and safe working conditions?",
        type: "single",
        options: [
          "No policies on wages or safety",
          "Legal minimum wages only, limited safety measures",
          "Fair wages, partial workplace safety",
          "Fair wages with strong safety policies",
          "Full fair trade compliance, certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Dropshipping)
      {
        id: "dropshipping_retention",
        question: "Did you complete 12 months retention in Dropshipping (L1)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "dropshipping_kpi",
        question: "Did you maintain KPI ≥ 5.0 in Dropshipping?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "khcrf_orientation",
        question: "Did you complete KHCRF orientation requirements?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "digital_api_readiness",
        question:
          "Do you have a basic digital presence & API readiness from L1?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_handicrafts_years",
        question: "How long have you been in handicrafts?",
        type: "single",
        options: ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_production_scale",
        question: "What is your current production scale?",
        type: "single",
        options: ["Individual", "Workshop", "Enterprise"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications",
        question: "Do you have any certifications?",
        type: "single",
        options: ["None", "GI tag", "KHCRF approval"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_growth_goal",
        question: "What is your primary growth goal?",
        type: "single",
        options: ["Retail", "Wholesale", "Export", "Global branding"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Packaging & labeling compliance",
          "Inventory transparency & reconciliation",
          "API/ERP integration for consignment stock",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Small retailer", "Wholesaler", "Institutional"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity",
        question: "What is your sourcing capacity?",
        type: "single",
        options: ["Less than $5K", "$5K–$25K", "$25K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_authenticity_importance",
        question: "How important is cultural authenticity to you?",
        type: "single",
        options: ["Low", "Medium", "High"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_commitment_level",
        question: "What is your commitment level?",
        type: "single",
        options: ["Dropshipping", "Consignment", "Wholesale", "Exhibition"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Consignment-friendly cash flow model",
          "Willingness to handle unsold inventory risks",
          "Digital integration (ERP/API for tracking)",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Consignment (TIER 1 / L2)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Consignment + Fast Track to Wholesale",
        fastTrackEligible: true,
        nextLevel: "Wholesale",
      },
      21: {
        eligibility: "Wholesale (TIER 1 / L3)",
        fastTrackEligible: true,
        nextLevel: "Wholesale",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 6.0,
      },
      buyer: { commitment: "Consignment", mkpiasThreshold: 6.0 },
    },
  },
  wholesale: {
    name : "Wholesale",
    questions: [
      // General Self-Evaluation Questions
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Consignment)
      {
        id: "consignment_retention",
        question: "Did you complete 4 months retention in Consignment (L2)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "consignment_kpi",
        question: "Did you maintain KPI ≥ 6.0 in Consignment?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "khcrf_packaging",
        question: "Did you comply with KHCRF packaging & labeling standards?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "erp_api_integration",
        question: "Do you have ERP/API integration for consignment stock?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_production_scale",
        question: "What is your current production scale?",
        type: "single",
        options: ["Workshop", "Enterprise"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_bulk_capacity",
        question: "Do you have bulk order capacity (≥100 pcs / SKU)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications",
        question: "Do you have any certifications?",
        type: "single",
        options: ["GI tag", "KHCRF approval"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Bulk packaging compliance",
          "Inventory management automation",
          "Export invoicing capability",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Wholesaler", "B2B distributor"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity",
        question: "What is your sourcing capacity?",
        type: "single",
        options: ["Less than $5K", "$5K–$25K", "$25K+"],
        category: "buyer",
        weight: 0,
      },

      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Storage capacity for bulk imports",
          "Digital integration with KHCRF marketplace",
          "Commitment to fair trade pricing",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Wholesale (TIER 1 / L3)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Wholesale + Fast Track to Import & Export",
        fastTrackEligible: true,
        nextLevel: "Import & Export",
      },
      21: {
        eligibility: "Import & Export (TIER 1 / L4)",
        fastTrackEligible: true,
        nextLevel: "Import & Export",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 6.5,
      },
      buyer: { commitment: null, mkpiasThreshold: 6.5 },
    },
  },
  importexport: {
    name : "Import Export",
    questions: [
      // General Self-Evaluation Questions
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Wholesale)
      {
        id: "wholesale_retention",
        question: "Did you complete 4 months retention in Wholesale (L3)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "wholesale_kpi",
        question: "Did you maintain KPI ≥ 6.5 in Wholesale?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "khcrf_packaging_audit",
        question: "Did you pass KHCRF bulk packaging & invoicing audit?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "export_documentation",
        question:
          "Do you have export documentation capacity (HS Codes, COO, Customs forms)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_export_licenses",
        question: "Do you have export licenses & customs compliance?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_logistics",
        question:
          "Can you manage international logistics partners (Air/Ocean)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications",
        question: "Do you have any certifications?",
        type: "single",
        options: ["GI tag", "KHCRF approval"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "International labeling standards",
          "Customs clearance capability",
          "Currency/Forex transaction readiness",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["International wholesaler", "Institutional buyer"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity",
        question: "What is your annual sourcing capacity?",
        type: "single",
        options: ["$25K–$250K", "$250K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_compliance_reports",
        question: "Do you require country-specific compliance reports?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Import license verification",
          "Payment security (LC / Escrow)",
          "International warehousing network",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Import & Export (TIER 1 / L4)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Import & Export + Fast Track to Exhibition",
        fastTrackEligible: true,
        nextLevel: "Exhibition",
      },
      21: {
        eligibility: "Exhibition (TIER 2 / L5)",
        fastTrackEligible: true,
        nextLevel: "Exhibition",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 7.0,
      },
      buyer: { commitment: null, mkpiasThreshold: 7.0 },
    },
  },
  exhibition: {
    name : "Exhibition",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Level Validation
      {
        id: "import_export_retention",
        question:
          "Did you complete 4 months retention in Import & Export (L4)?",
        type: "single",
        options: ["No", "In Progress", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "import_export_kpi",
        question: "Did you maintain KPI ≥ 7.0 in Import & Export?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "packaging_compliance",
        question: "Do you have international packaging & branding compliance?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "customs_audit",
        question: "Did you complete customs & logistics readiness audit?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_catalogs",
        question: "Do you have catalogs/digital portfolios ready for fairs?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_exhibition_inventory",
        question:
          "Can you manage exhibition inventory + logistics coordination?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_branding_materials",
        question: "Do you have branding & storytelling materials?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_exhibition_readiness",
        question:
          "Which vendor readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Booth display capability",
          "Cultural storytelling integration",
          "Event compliance (permits, certifications)",
          "Valid Passport",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type_exhibition",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Retailer", "Wholesaler", "Institutional buyer"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity_exhibition",
        question: "What is your annual sourcing capacity?",
        type: "single",
        options: ["Less than $50K", "$50K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_product_verification",
        question: "Do you require on-site product verification?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_exhibition_readiness",
        question:
          "Which buyer readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Trade show attendance commitment",
          "Import license/clearance readiness",
          "Partnership with certified vendors",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Exhibition (TIER 2 / L5)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Exhibition + Fast Track to Auction",
        fastTrackEligible: true,
        nextLevel: "Auction",
      },
      21: {
        eligibility: "Auction (TIER 2 / L6)",
        fastTrackEligible: true,
        nextLevel: "Auction",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 7.0,
        retentionPeriod: "4 months",
      },
      buyer: {
        commitment: null,
        mkpiasThreshold: 7.0,
        retentionPeriod: "4 months",
      },
      requirements: ["Export + branding certifications"],
    },
  },
  auction: {
    name : "Auction",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Level Validation
      {
        id: "exhibition_retention",
        question: "Did you complete 4 months retention in Exhibition (L5)?",
        type: "single",
        options: ["No", "In Progress", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "exhibition_kpi",
        question: "Did you maintain KPI ≥ 7.0 in Exhibition?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "exhibition_participation",
        question:
          "Did you participate in at least 1 certified exhibition/fair?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "auction_catalogs",
        question:
          "Did you prepare catalogs + verified product listings for auction?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_premium_products",
        question: "Do you have limited-edition / premium craft products ready?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_auction_logistics",
        question: "Can you handle live auction demand and logistics?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_khcrf_verification",
        question: "Have you completed KHCRF product authenticity verification?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_auction_readiness",
        question:
          "Which vendor readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Pricing strategy for auctions",
          "Inventory allocation for bidding events",
          "Digital listing compliance",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type_auction",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Collectors", "Wholesalers", "Institutional buyers"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_auction_budget",
        question: "What is your auction budget?",
        type: "single",
        options: ["Less than $10K", "$10K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_auction_preference",
        question: "Do you prefer live or digital auctions?",
        type: "single",
        options: ["Live auctions", "Digital auctions", "Both"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_auction_readiness",
        question:
          "Which buyer readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Payment system (LC / escrow / digital wallet)",
          "Compliance with KHCRF auction policies",
          "Commitment to authentic sourcing only",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Auction (TIER 2 / L6)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Auction + Fast Track to White Label",
        fastTrackEligible: true,
        nextLevel: "White Label",
      },
      21: {
        eligibility: "White Label (TIER 2 / L7)",
        fastTrackEligible: true,
        nextLevel: "White Label",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 7.5,
        retentionPeriod: "4 months",
      },
      buyer: {
        commitment: null,
        mkpiasThreshold: 7.5,
        retentionPeriod: "4 months",
      },
      requirements: [
        "Blockchain-enabled product verification",
        "Auction Fee participation",
      ],
    },
  },
  "white-label": {
    name : "White Label",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Level Validation
      {
        id: "auction_retention",
        question: "Did you complete 4 months retention in Auction (L6)?",
        type: "single",
        options: ["No", "In Progress", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "auction_kpi",
        question: "Did you maintain KPI ≥ 7.5 in Auction?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "auction_sales",
        question: "Did you sell minimum required lots in Auction?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "white_label_onboarding",
        question: "Did you complete KHCRF white label onboarding review?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_customization",
        question: "Do you have capacity to customize branding & packaging?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_production_volume",
        question:
          "Are you able to meet minimum white-label production volumes?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications_white_label",
        question: "Which certifications do you have? (Select all that apply)",
        type: "multiple",
        options: [
          "GI certification",
          "KHCRF certification",
          "Brand IP readiness",
        ],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_white_label_readiness",
        question:
          "Which vendor readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "IP & copyright compliance",
          "Design adaptability for private labels",
          "Supply consistency for white label partners",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type_white_label",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Retailer chains", "Distributors"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity_white_label",
        question: "What is your annual sourcing capacity?",
        type: "single",
        options: ["Less than $50K", "$50K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_branding_rights",
        question: "Do you require exclusive or semi-exclusive branding rights?",
        type: "single",
        options: ["Exclusive", "Semi-exclusive", "Non-exclusive"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_white_label_readiness",
        question:
          "Which buyer readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Ability to commit to long-term contracts",
          "Private-label branding standards compliance",
          "Retail-level product positioning",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "White Label (TIER 2 / L7)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "White Label + Fast Track to Brick & Mortar",
        fastTrackEligible: true,
        nextLevel: "Brick & Mortar",
      },
      21: {
        eligibility: "Brick & Mortar (TIER 2 / L8)",
        fastTrackEligible: true,
        nextLevel: "Brick & Mortar",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 8.0,
        retentionPeriod: "4 months",
      },
      buyer: {
        commitment: null,
        mkpiasThreshold: 8.0,
        retentionPeriod: "4 months",
      },
      requirements: [
        "KHCRF IP + branding compliance review",
        "Long-term vendor–buyer branding contracts",
      ],
    },
  },
  "brick-mortar": {
    name : "Brick & Mortar",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Mixed/synthetic",
          "Mostly authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain-certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets standards",
          "Exceeds standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "No focus",
          "Some sustainable",
          "Significant portion sustainable",
          "Mostly eco-friendly",
          "Zero-waste commitment",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Generally satisfactory",
          "Well-managed",
          "Exceptional service",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No clear policy",
          "Minimum wages only",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Market wages + safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Level Validation
      {
        id: "white_label_retention",
        question: "Did you complete 4 months retention in White Label (L7)?",
        type: "single",
        options: ["No", "In Progress", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "white_label_kpi",
        question: "Did you maintain KPI ≥ 8.0 in White Label?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "retail_contracts",
        question: "Do you have approved US retail placement contracts?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      {
        id: "retail_readiness_review",
        question: "Did you pass KHCRF retail readiness review?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_retail_inventory",
        question: "Do you have capacity to maintain US retail inventory?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_store_management",
        question:
          "Can you manage store-level branding, merchandising & customer service?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_certifications_retail",
        question: "Which certifications do you have? (Select all that apply)",
        type: "multiple",
        options: [
          "GI certification",
          "KHCRF certification",
          "US retail compliance",
          "Valid Passport",
        ],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_retail_readiness",
        question:
          "Which vendor readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "US packaging & labeling compliance",
          "Shelf replenishment capability",
          "Retail pricing strategies",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type_retail",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Retail chains", "Distributors", "Lifestyle stores"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_shelf_management",
        question: "Do you manage retail shelf allocations?",
        type: "yesno",
        options: ["No", "Yes"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_retail_readiness",
        question:
          "Which buyer readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Long-term retail partnership commitment",
          "Store compliance with KHCRF guidelines",
          "Marketing & promotion budgets",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Brick & Mortar (TIER 2 / L8)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Brick & Mortar + Fast Track to Packaging",
        fastTrackEligible: true,
        nextLevel: "Packaging",
      },
      21: {
        eligibility: "Packaging (TIER 3 / L9)",
        fastTrackEligible: true,
        nextLevel: "Packaging",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        mkpiasThreshold: 8.0,
        retentionPeriod: "18 months",
      },
      buyer: {
        commitment: null,
        mkpiasThreshold: 8.0,
        retentionPeriod: "18 months",
      },
      requirements: [
        "Retail placement approval",
        "KHCRF retail-readiness compliance",
      ],
    },
  },
  packaging: {
    name : "Packaging",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Export excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Zero-waste, carbon-tracked",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Personalized + feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Brick & Mortar)
      {
        id: "brick_mortar_retention",
        question:
          "Did you complete 18 months retention in Brick & Mortar (T2/L8)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "brick_mortar_kpi",
        question: "Did you maintain KPI ≥ 8.0 in Brick & Mortar?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "export_packaging_compliance",
        question:
          "Do you comply with export packaging & labeling requirements (FDA/US/EU)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "eco_packaging_certifications",
        question: "Do you have eco-packaging and branding certifications?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_eco_packaging",
        question: "Do you provide eco-friendly packaging materials?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_custom_packaging",
        question:
          "Can you customize packaging for different retail chains & exports?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_branding_consistency",
        question: "Do you maintain branding consistency across product lines?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Packaging certification (eco/FDA/ISO)",
          "Inventory-level labeling compliance",
          "Digital design/branding integration",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Retailers", "Distributors", "International buyers"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_sourcing_capacity",
        question: "What is your annual sourcing capacity?",
        type: "single",
        options: ["Less than $50K", "$50K–$100K", "$100K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_packaging_expectations",
        question: "What are your packaging expectations?",
        type: "single",
        options: ["Eco", "Luxury", "Customized branding"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Compliance with import country packaging standards",
          "Branding guidelines for private labels",
          "Marketing & storytelling integration",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Packaging (TIER 3 / L9)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Packaging + Fast Track to Design Collaboration",
        fastTrackEligible: true,
        nextLevel: "Design Collaboration",
      },
      21: {
        eligibility: "Design Collaboration (TIER 3 / L10)",
        fastTrackEligible: true,
        nextLevel: "Design Collaboration",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Packaging",
        mkpiasThreshold: 8.0,
        retentionPeriod: "18 Months at Brick & Mortar (T2/L8)",
        minCommitment: "4 Months at Packaging (T3/L9)",
      },
      buyer: {
        commitment: "Packaging",
        mkpiasThreshold: 8.0,
      },
    },
  },
  "design-collaboration": {
    name : "Design Collaboration",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Export excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Zero-waste, carbon-tracked",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Personalized + feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Packaging)
      {
        id: "packaging_retention",
        question: "Did you complete 4 months retention in Packaging (T3/L9)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "packaging_kpi",
        question: "Did you maintain KPI ≥ 8.0 in Packaging?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "co_creation_agreements",
        question:
          "Do you have co-creation agreements with designers or buyers?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "digital_design_integration",
        question:
          "Have you integrated digital design files (CAD, 3D, API-ready)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_design_resources",
        question: "Do you have dedicated R&D/design resources?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_co_develop_designs",
        question: "Can you co-develop designs with global buyers/partners?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_limited_edition",
        question: "Are you capable of limited-edition or experimental runs?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Design IP protection policies",
          "Prototype development capacity",
          "Integration with buyer design systems",
        ],
        category: "vendor",
        weight: 0,
      },
      // Indenture-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: [
          "Luxury retailers",
          "Lifestyle brands",
          "Interior design firms",
        ],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_exclusive_collections",
        question: "Do you require exclusive co-branded collections?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Ability to commit to design collaborations",
          "Marketing budgets for co-branded lines",
          "Protection of artisan design IP",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Design Collaboration (TIER 3 / L10)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility:
          "Design Collaboration + Fast Track to Storytelling & Media",
        fastTrackEligible: true,
        nextLevel: "Storytelling & Media",
      },
      21: {
        eligibility: "Storytelling & Media (TIER 3 / L11)",
        fastTrackEligible: true,
        nextLevel: "Storytelling & Media",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Design Collaboration",
        mkpiasThreshold: 8.0,
        retentionPeriod: "4 Months at Packaging (T3/L9)",
        minCommitment: "4 Months at Design Collaboration (T3/L10)",
      },
      buyer: {
        commitment: "Design Collaboration",
        mkpiasThreshold: 8.0,
      },
    },
  },
  storytelling_media: {
    name : "Story Telling Media",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Export excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Zero-waste, carbon-tracked",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Personalized + feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Design Collaboration)
      {
        id: "design_collaboration_retention",
        question:
          "Did you complete 4 months retention in Design Collaboration (T3/L10)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "design_collaboration_kpi",
        question: "Did you maintain KPI ≥ 8.0 in Design Collaboration?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "storytelling_materials",
        question:
          "Do you have approved product storytelling materials (digital/media-ready)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "visual_narrative_content",
        question:
          "Have you developed visual or narrative content for branding?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_media_assets",
        question:
          "Do you maintain media assets (photos, videos, artisan stories)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_digital_marketing",
        question:
          "Have you invested in digital marketing or storytelling campaigns?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_cultural_standards",
        question:
          "Are you prepared for international cultural storytelling standards?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Craft origin documentation",
          "Digital storytelling capability",
          "Cultural preservation storytelling",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Retail chains", "Wholesalers", "Cultural brands"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_co_branded_media",
        question: "Do you require co-branded media storytelling for promotion?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Marketing integration budgets",
          "Willingness to co-promote artisans",
          "Adoption of cultural storytelling guidelines",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Storytelling & Media (TIER 3 / L11)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Storytelling & Media + Fast Track to Warehouse",
        fastTrackEligible: true,
        nextLevel: "Warehouse",
      },
      21: {
        eligibility: "Warehouse (TIER 3 / L12)",
        fastTrackEligible: true,
        nextLevel: "Warehouse",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Storytelling & Media",
        mkpiasThreshold: 8.5,
        retentionPeriod: "4 Months at Design Collaboration (T3/L10)",
        minCommitment: "4 Months at Storytelling & Media (T3/L11)",
      },
      buyer: {
        commitment: "Storytelling & Media",
        mkpiasThreshold: 8.5,
      },
    },
  },
  warehouse: {
    name : "Warehouse",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Export excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Zero-waste, carbon-tracked",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Personalized + feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Storytelling & Media)
      {
        id: "storytelling_media_retention",
        question:
          "Did you complete 4 months retention in Storytelling & Media (T3/L11)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "storytelling_media_kpi",
        question: "Did you maintain KPI ≥ 8.5 in Storytelling & Media?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "logistics_partnerships",
        question:
          "Do you have logistics partnerships/contracts already in place?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "inventory_trackable",
        question: "Is your inventory digitally trackable (ERP/API enabled)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_export_inventory",
        question: "Do you have export-ready inventory volumes?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_shared_warehouse",
        question: "Can you manage shared warehouse space across US hubs?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_sku_traceability",
        question: "Do you provide SKU-level product traceability?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Barcode / QR compliance",
          "Digital inventory system",
          "Seasonal storage readiness",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Wholesalers", "Institutional", "Retail distributors"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_just_in_time",
        question: "Do you require just-in-time fulfillment?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Ability to commit to storage contracts",
          "Integration with API-driven order fulfillment",
          "Demand forecasting partnership",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Warehouse (TIER 3 / L12)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Warehouse + Fast Track to Logistics",
        fastTrackEligible: true,
        nextLevel: "Logistics",
      },
      21: {
        eligibility: "Logistics (TIER 4 / L13)",
        fastTrackEligible: true,
        nextLevel: "Logistics",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Warehouse",
        mkpiasThreshold: 8.5,
        retentionPeriod: "4 Months at Storytelling & Media (T3/L11)",
        minCommitment: "12 Months at Warehouse (T3/L12)",
      },
      buyer: {
        commitment: "Warehouse",
        mkpiasThreshold: 8.5,
      },
    },
  },
  logistics: {
    name  : "Logistics",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Export excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Zero-waste, carbon-tracked",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Personalized + feedback loop",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Certified safe workplaces",
        ],
        category: "general",
        weight: 1,
      },
      // Previous Partnership Validation (Warehouse)
      {
        id: "warehouse_retention",
        question: "Did you complete 12 months retention in Warehouse (T3/L12)?",
        type: "single",
        options: ["Yes", "No", "In Progress"],
        category: "validation",
        weight: 0,
      },
      {
        id: "warehouse_kpi",
        question: "Did you maintain KPI ≥ 8.5 in Warehouse?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "global_freight_contracts",
        question:
          "Do you have contracts with global freight forwarders (air/ocean)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      {
        id: "customs_compliance",
        question:
          "Do you comply with customs & trade documentation standards (USA/EU/India)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "validation",
        weight: 0,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_shipping_methods",
        question: "Can you ship via air, ocean LCL, or FCL?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_export_compliance",
        question: "Do you maintain export compliance (FDA/US Customs)?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_digital_freight",
        question: "Do you use digital freight platforms for tracking?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Customs clearance readiness",
          "Reverse logistics capacity",
          "Freight cost optimization systems",
        ],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_type",
        question: "What type of buyer are you?",
        type: "single",
        options: ["Importers", "Retail chains", "Wholesalers"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_freight_preference",
        question: "Do you prefer air (fast) or ocean (bulk, cheaper) freight?",
        type: "single",
        options: ["Air", "Ocean", "No preference"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question:
          "Which of these readiness checks do you meet? (Select all that apply)",
        type: "multiple",
        options: [
          "Import license readiness",
          "Warehousing on arrival confirmed",
          "Trade finance/payment compliance",
        ],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Logistics (TIER 4 / L13)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility:
          "Logistics + Fast Track to Museum/NGO/Government/Technology",
        fastTrackEligible: true,
        nextLevel: "Museum/NGO/Government/Technology",
      },
      21: {
        eligibility: "Museum/NGO/Government/Technology (TIER 4 / L14–16)",
        fastTrackEligible: true,
        nextLevel: "Museum/NGO/Government/Technology",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Logistics",
        mkpiasThreshold: 9.0,
        retentionPeriod: "12 Months at Warehouse (T3/L12)",
        minCommitment: "6 Months at Logistics (T4/L13)",
      },
      buyer: {
        commitment: "Logistics",
        mkpiasThreshold: 9.0,
      },
    },
  },
  museum_collaboration: {
    name  :"Museum Collaboration",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Blockchain verified / museum certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Museum-grade excellence",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Heritage-preservation standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Immersive cultural storytelling",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Ethical sourcing + artisan dignity",
        ],
        category: "general",
        weight: 1,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_heritage_significance",
        question: "Do your crafts hold heritage or museum significance?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_gi_tag",
        question: "Can you provide GI tag / KHCRF documentation?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_exhibition_agreements",
        question:
          "Are you open to long-term preservation or exhibition agreements?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_exhibition_spaces",
        question: "Do you maintain exhibition or preservation spaces?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_cultural_preservation",
        question: "Are you committed to cultural preservation & storytelling?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_heritage_protocols",
        question: "Are you aligned with global heritage protocols?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Museum Collaboration (TIER 4 / L14)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: "Museum Collaboration + Fast Track to NGO & Government",
        fastTrackEligible: true,
        nextLevel: "NGO & Government",
      },
      21: {
        eligibility: "NGO & Government/Technology (TIER 4 / L15–16)",
        fastTrackEligible: true,
        nextLevel: "NGO & Government/Technology",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Museum Collaboration",
        mkpiasThreshold: 9.0,
        retentionPeriod: "None",
        minCommitment: "12 Months at Museum Collaboration (T4/L14)",
        tpif: "Cultural preservation, heritage exhibitions",
        mpf: "Custom agreements per institution",
      },
      buyer: {
        commitment: "Museum Collaboration",
        mkpiasThreshold: 9.0,
        cep: "Open Access",
      },
    },
  },
  ngo_government: {
    name  : "NGO & Government",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Traceable & certified",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Global procurement standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Aligned with SDGs & eco-certifications",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "No strategy",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "Community-focused procurement",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "No compliance",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Formal fair-trade certification",
        ],
        category: "general",
        weight: 1,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_fair_trade_compliance",
        question: "Do you comply with fair trade & safety standards?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_procurement_rules",
        question: "Are you aligned with state/NGO procurement rules?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_institutional_scale",
        question: "Can you supply at institutional or policy-driven scale?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_fair_trade_sourcing",
        question: "Are you committed to fair trade sourcing policies?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_livelihood_programs",
        question: "Do you integrate crafts into livelihood/CSR programs?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_grants_contracts",
        question:
          "Can you support artisans with grants or procurement contracts?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "NGO & Government Collaboration (TIER 4 / L15)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility:
          "NGO & Government + Fast Track to Technology Collaboration",
        fastTrackEligible: true,
        nextLevel: "Technology Collaboration",
      },
      21: {
        eligibility: "Technology Collaboration (TIER 4 / L16)",
        fastTrackEligible: true,
        nextLevel: "Technology Collaboration",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "NGO & Government Collaboration",
        mkpiasThreshold: 9.0,
        retentionPeriod: "None",
        minCommitment: "12 Months at NGO & Government (T4/L15)",
        tpif: "Fair trade, sustainable procurement, policy partnerships",
        mpf: "Waived / Negotiated via MoUs, grants, state agreements",
      },
      buyer: {
        commitment: "NGO & Government Collaboration",
        mkpiasThreshold: 9.0,
        cep: "Open Access",
      },
    },
  },
  technology_partnership: {
    name : "Technology Partnership",
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question:
          "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: [
          "Synthetic",
          "Partially authentic",
          "Verified sourcing",
          "Certified suppliers",
          "Digitally certified, blockchain-tagged",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: [
          "Inconsistent",
          "Acceptable with flaws",
          "High with minor flaws",
          "Meets export standards",
          "Enhanced via digital standards",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: [
          "None",
          "Some sustainable practices",
          "Significant sustainable efforts",
          "Mostly eco-friendly",
          "Tech-enabled eco-monitoring & zero-waste",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: [
          "Basic",
          "Needs improvement",
          "Satisfactory",
          "Well-managed",
          "AI-driven personalization",
        ],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: [
          "Weak",
          "Minimum compliance",
          "Fair wages, limited safety",
          "Fair wages + safe conditions",
          "Digitally audited fair-trade compliance",
        ],
        category: "general",
        weight: 1,
      },
      // Vendor-Specific Questions
      {
        id: "vendor_api_integration",
        question: "Do you use API integrations with marketplaces?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_ai_forecasting",
        question: "Can you adopt AI-driven inventory forecasting?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      {
        id: "vendor_digital_twin",
        question: "Are you open to digital twin modeling for crafts?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "vendor",
        weight: 0,
      },
      // Buyer-Specific Questions
      {
        id: "buyer_blockchain",
        question: "Are you providing Blockchain for traceability?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_ar_vr",
        question: "Do you enable AR/VR or Haptics for craft experience?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_predictive_analytics",
        question: "Do you offer Predictive Analytics & Market AI?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_digital_twin_iot",
        question: "Can you support Digital Twin / IoT integrations?",
        type: "yesno",
        options: ["Yes", "No"],
        category: "buyer",
        weight: 0,
      },
    ],
    maxScore: 25,
    thresholds: {
      10: {
        eligibility: "Technology Partnership (TIER 4 / L16)",
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility:
          "Technology Partnership + Fast Track to Global Innovation Alliances",
        fastTrackEligible: true,
        nextLevel: "Global Innovation Alliances",
      },
      21: {
        eligibility: "Global Innovation Alliances",
        fastTrackEligible: true,
        nextLevel: "Global Innovation Alliances",
      },
    },
    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: "Technology Partnership",
        mkpiasThreshold: 9.0,
        retentionPeriod: "None",
        minCommitment: "12 Months at Technology Partnership (T4/L16)",
        tpif: "Blockchain, AR/VR, Predictive Analytics, Digital Twins",
        mpf: "Based on integration scope",
      },
      buyer: {
        commitment: "Technology Partnership",
        mkpiasThreshold: 9.0,
        cep: "Open Access",
      },
    },
  },
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export interface DropshippingEligibilityQuizProps {
  partnershipName:
    | "dropshipping"
    | "consignment"
    | "wholesale"
    | "importexport"
    | "exhibition"
    | "auction"
    | "white-label"
    | "brick-mortar"
    | "packaging"
    | "design-collaboration"
    | "storytelling_media"
    | "warehouse"
    | "logistics"
    | "museum_collaboration"
    | "ngo_government"
    | "technology_partnership";
}

export function EligibilityQuiz({
  partnershipName,
}: DropshippingEligibilityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [role, setRole] = useState("vendor");
  const { is4K } = useGlobalContext();

  const containerClass = is4K
    ? "max-w-[1000px] text-xl"
    : "max-w-[800px] text-base";
  const data = quizData[partnershipName];
  const name = data.name

  useEffect(() => {
    const roleFromStorage = Cookies.get("user_role");
    setRole(roleFromStorage || "vendor");
  }, []);
  // Filter questions based on role
  const filteredQuestions = data.questions.filter(
    (q) =>
      q.category === "general" ||
      q.category === role ||
      q.category === "validation"
  );

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const strengths: string[] = [];
    const improvements: string[] = [];
    let eligibility = "";
    let recommendedTrack = "";
    let fastTrackEligible = false;
    let personalizedMessage = "";
    let nextSteps: string[] = [];

    // Calculate score (only from general questions)
    data.questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer !== undefined && question.weight > 0) {
        let questionScore = 0;
        if (question.type === "single") {
          const index = question.options?.indexOf(answer) || 0;
          questionScore = index + 1; // Options are ordered from 1 to 5
        }
        totalScore += questionScore * question.weight;
      }
    });

    const thresholds = Object.keys(data.thresholds)
      .map(Number)
      .sort((a, b) => a - b); // sort ascending: lowest first

    if (totalScore < 10) {
      const lowestThreshold = thresholds[0]; // lowest threshold is now first
      eligibility = data.thresholds[lowestThreshold].eligibility;
      fastTrackEligible = data.thresholds[lowestThreshold].fastTrackEligible;
      recommendedTrack = data.thresholds[lowestThreshold].eligibility;
    } else {
      for (const threshold of thresholds.slice().reverse()) {
        // iterate high to low for normal logic
        if (totalScore >= threshold) {
          eligibility = data.thresholds[threshold].eligibility;
          fastTrackEligible = data.thresholds[threshold].fastTrackEligible;
          recommendedTrack = data.thresholds[threshold].eligibility;
          break;
        }
      }
    }

    // Set personalized message and next steps
    if (partnershipName === "dropshipping") {
      if (totalScore >= 16) {
        personalizedMessage =
          "Outstanding! Your strong fundamentals make you eligible for Consignment via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Connect with premium partners",
          "Access advanced onboarding resources",
          "Schedule consultation with specialists",
        ];
        strengths.push(
          "High-quality standards",
          "Strong authenticity",
          "Excellent customer focus"
        );
      } else if (totalScore >= 11) {
        personalizedMessage =
          "Great potential! You're eligible for Dropshipping with a fast track to Consignment.";
        nextSteps = [
          "Start with Dropshipping Program",
          "Enroll in Readiness Program (RP)",
          "Access training resources",
          "Build initial partner connections",
        ];
        strengths.push("Solid fundamentals", "Growth potential");
        improvements.push("Enhance quality and sustainability");
      } else {
        personalizedMessage =
          "You're ready to start with Dropshipping! Build your foundation for future growth.";
        nextSteps = [
          "Join Dropshipping Program",
          "Access free educational resources",
          "Connect with community support",
          "Build operational capabilities",
        ];
        strengths.push("Entrepreneurial spirit", "Commitment to growth");
        improvements.push(
          "Improve authenticity and quality",
          "Develop fair trade practices"
        );
      }
    } else if (partnershipName === "consignment") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Wholesale via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload consignment compliance documents",
          "Complete KHCRF review",
          "Connect with wholesale partners",
        ];
        strengths.push("Export-ready operations", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Consignment with a fast track to Wholesale.";
        nextSteps = [
          "Join Consignment Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen API/ERP integration",
          "Prepare for wholesale transition",
        ];
        strengths.push("Solid consignment readiness", "Growth potential");
        improvements.push("Enhance operational scale");
      } else {
        personalizedMessage =
          "You're eligible for Consignment! Build your capabilities for higher tiers.";
        nextSteps = [
          "Join Consignment Program",
          "Complete KHCRF orientation",
          "Improve digital integration",
          "Ensure packaging compliance",
        ];
        strengths.push("Commitment to consignment", "Operational foundation");
        improvements.push(
          "Strengthen certifications",
          "Improve inventory systems"
        );
      }
    } else if (partnershipName === "wholesale") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Outstanding! You're eligible for Import & Export via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit bulk order compliance documents",
          "Complete KHCRF packaging audit",
          "Prepare for international markets",
        ];
        strengths.push("Bulk order readiness", "Export compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Wholesale with a fast track to Import & Export.";
        nextSteps = [
          "Join Wholesale Program",
          "Enroll in Readiness Program (RP)",
          "Upgrade ERP/API systems",
          "Build export invoicing capability",
        ];
        strengths.push("Strong wholesale foundation", "Operational scale");
        improvements.push("Enhance export readiness");
      } else {
        personalizedMessage =
          "You're eligible for Wholesale! Strengthen your systems for higher tiers.";
        nextSteps = [
          "Join Wholesale Program",
          "Ensure KHCRF compliance",
          "Automate inventory management",
          "Build bulk packaging capabilities",
        ];
        strengths.push("Wholesale commitment", "Operational capacity");
        improvements.push(
          "Pursue GI/KHCRF certifications",
          "Improve invoicing systems"
        );
      }
    } else if (partnershipName === "importexport") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Exhibition via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit export licenses and GI certification",
          "Complete KHCRF customs review",
          "Prepare for international exhibitions",
        ];
        strengths.push("Global market readiness", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Import & Export with a fast track to Exhibition.";
        nextSteps = [
          "Join Import & Export Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen international logistics",
          "Ensure customs compliance",
        ];
        strengths.push("Export capabilities", "Global potential");
        improvements.push("Enhance logistics partnerships");
      } else {
        personalizedMessage =
          "You're eligible for Import & Export! Build your global capabilities.";
        nextSteps = [
          "Join Import & Export Program",
          "Submit export documentation",
          "Complete KHCRF customs review",
          "Build international warehousing",
        ];
        strengths.push("Commitment to global trade", "Operational foundation");
        improvements.push(
          "Strengthen export licenses",
          "Improve customs compliance"
        );
      }
    } else if (partnershipName === "exhibition") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Auction via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit exhibition participation records",
          "Complete KHCRF product verification",
          "Prepare for live auction events",
        ];
        strengths.push("Global exhibition experience", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Exhibition with a fast track to Auction.";
        nextSteps = [
          "Join Exhibition Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen branding and storytelling",
          "Prepare for auction transition",
        ];
        strengths.push("Solid exhibition foundation", "Global potential");
        improvements.push("Enhance auction readiness");
      } else {
        personalizedMessage =
          "You're eligible for Exhibition! Build your global presence.";
        nextSteps = [
          "Join Exhibition Program",
          "Submit export documentation",
          "Complete KHCRF customs review",
          "Build international warehousing",
        ];
        strengths.push("Commitment to global trade", "Operational foundation");
        improvements.push(
          "Strengthen export licenses",
          "Improve customs compliance"
        );
      }
    } else if (partnershipName === "auction") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for White Label via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit auction sales records",
          "Complete KHCRF white label onboarding",
          "Prepare for private label partnerships",
        ];
        strengths.push("Successful auction sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Auction with a fast track to White Label.";
        nextSteps = [
          "Join Auction Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen branding and packaging",
          "Prepare for white label transition",
        ];
        strengths.push("Solid auction foundation", "Global potential");
        improvements.push("Enhance white label readiness");
      } else {
        personalizedMessage =
          "You're eligible for Auction! Build your premium product listings.";
        nextSteps = [
          "Join Auction Program",
          "Submit auction documentation",
          "Complete KHCRF product verification",
          "Build premium product listings",
        ];
        strengths.push(
          "Commitment to premium products",
          "Operational foundation"
        );
        improvements.push(
          "Strengthen product verification",
          "Improve auction logistics"
        );
      }
    } else if (partnershipName === "white-label") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Brick & Mortar via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit white label sales records",
          "Complete KHCRF retail readiness review",
          "Prepare for US retail placement",
        ];
        strengths.push("Successful white label sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for White Label with a fast track to Brick & Mortar.";
        nextSteps = [
          "Join White Label Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen US retail compliance",
          "Prepare for retail transition",
        ];
        strengths.push("Solid white label foundation", "Global potential");
        improvements.push("Enhance retail readiness");
      } else {
        personalizedMessage =
          "You're eligible for White Label! Build your private label partnerships.";
        nextSteps = [
          "Join White Label Program",
          "Submit white label documentation",
          "Complete KHCRF onboarding review",
          "Build private label partnerships",
        ];
        strengths.push("Commitment to private label", "Operational foundation");
        improvements.push(
          "Strengthen US retail compliance",
          "Improve retail logistics"
        );
      }
    } else if (partnershipName === "brick-mortar") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Packaging via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit retail sales records",
          "Complete KHCRF packaging review",
          "Prepare for packaging partnerships",
        ];
        strengths.push("Successful retail sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Brick & Mortar with a fast track to Packaging.";
        nextSteps = [
          "Join Brick & Mortar Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen packaging compliance",
          "Prepare for packaging transition",
        ];
        strengths.push("Solid retail foundation", "Global potential");
        improvements.push("Enhance packaging readiness");
      } else {
        personalizedMessage =
          "You're eligible for Brick & Mortar! Build your US retail presence.";
        nextSteps = [
          "Join Brick & Mortar Program",
          "Submit retail documentation",
          "Complete KHCRF retail readiness review",
          "Build US retail presence",
        ];
        strengths.push("Commitment to US retail", "Operational foundation");
        improvements.push(
          "Strengthen packaging compliance",
          "Improve retail logistics"
        );
      }
    } else if (partnershipName === "packaging") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Design Collaboration via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload packaging design & certification documents",
          "Complete KHCRF eco-packaging review",
          "Prepare for design collaboration partnerships",
        ];
        strengths.push("Export-ready packaging", "Strong eco-compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Packaging with a fast track to Design Collaboration.";
        nextSteps = [
          "Join Packaging Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen digital packaging design workflow",
          "Align packaging with retail storytelling needs",
        ];
        strengths.push("Solid packaging foundation", "Eco-friendly potential");
        improvements.push("Enhance digital design integration");
      } else {
        personalizedMessage =
          "You're eligible for Packaging! Build your eco-friendly and compliant packaging capabilities.";
        nextSteps = [
          "Join Packaging Program",
          "Upload packaging design & certification documents",
          "Complete KHCRF eco-packaging review",
          "Upgrade to eco-friendly & compliant packaging",
        ];
        strengths.push("Commitment to packaging", "Operational foundation");
        improvements.push(
          "Strengthen eco-certifications",
          "Improve branding consistency"
        );
      }
    } else if (partnershipName === "design-collaboration") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Storytelling & Media via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload co-creation proposals with buyers/designers",
          "Complete KHCRF IP + design integration review",
          "Prepare for storytelling and media partnerships",
        ];
        strengths.push(
          "Strong design collaboration",
          "IP protection readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Design Collaboration with a fast track to Storytelling & Media.";
        nextSteps = [
          "Join Design Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Build prototype labs for artisan–buyer co-creation",
          "Strengthen digital design collaboration capacity",
        ];
        strengths.push("Solid design foundation", "Co-creation potential");
        improvements.push("Enhance IP safeguards");
      } else {
        personalizedMessage =
          "You're eligible for Design Collaboration! Build your design and co-creation capabilities.";
        nextSteps = [
          "Join Design Collaboration Program",
          "Upload co-creation proposals with buyers/designers",
          "Complete KHCRF IP + design integration review",
          "Improve IP & copyright safeguards",
        ];
        strengths.push(
          "Commitment to design collaboration",
          "Creative foundation"
        );
        improvements.push(
          "Build prototype development capacity",
          "Integrate with buyer design systems"
        );
      }
    } else if (partnershipName === "storytelling_media") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Warehouse via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload artisan stories + product media assets",
          "Complete KHCRF storytelling compliance review",
          "Prepare for warehouse partnerships",
        ];
        strengths.push(
          "Strong storytelling assets",
          "Cultural branding readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Storytelling & Media with a fast track to Warehouse.";
        nextSteps = [
          "Join Storytelling & Media Program",
          "Enroll in Readiness Program (RP)",
          "Improve visual media quality",
          "Strengthen cultural storytelling capabilities",
        ];
        strengths.push("Solid storytelling foundation", "Media potential");
        improvements.push("Enhance digital storytelling tools");
      } else {
        personalizedMessage =
          "You're eligible for Storytelling & Media! Build your narrative and media capabilities.";
        nextSteps = [
          "Join Storytelling & Media Program",
          "Upload artisan stories + product media assets",
          "Complete KHCRF storytelling compliance review",
          "Improve visual media quality",
        ];
        strengths.push("Commitment to storytelling", "Creative foundation");
        improvements.push(
          "Develop craft origin documentation",
          "Adopt cultural storytelling guidelines"
        );
      }
    } else if (partnershipName === "warehouse") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Logistics via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Secure shared storage allocation in US hubs",
          "Complete KHCRF warehouse compliance review",
          "Prepare for logistics partnerships",
        ];
        strengths.push(
          "Strong warehouse operations",
          "Digital traceability readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Warehouse with a fast track to Logistics.";
        nextSteps = [
          "Join Warehouse Program",
          "Enroll in Readiness Program (RP)",
          "Improve digital traceability (ERP/API)",
          "Build SKU-level warehouse management",
        ];
        strengths.push("Solid warehouse foundation", "Logistics potential");
        improvements.push("Enhance seasonal storage readiness");
      } else {
        personalizedMessage =
          "You're eligible for Warehouse! Build your inventory and logistics capabilities.";
        nextSteps = [
          "Join Warehouse Program",
          "Secure shared storage allocation in US hubs",
          "Complete KHCRF warehouse compliance review",
          "Improve digital traceability (ERP/API)",
        ];
        strengths.push("Commitment to warehousing", "Operational foundation");
        improvements.push(
          "Strengthen SKU-level traceability",
          "Build seasonal inventory capacity"
        );
      }
    } else if (partnershipName === "logistics") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Museum/NGO/Government/Technology via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Secure freight forwarder contracts (air/ocean)",
          "Complete KHCRF compliance review",
          "Prepare for global collaborations",
        ];
        strengths.push("Global logistics readiness", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Logistics with a fast track to Museum/NGO/Government/Technology.";
        nextSteps = [
          "Join Logistics Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen customs documentation & trade finance",
          "Improve real-time shipment tracking systems",
        ];
        strengths.push("Solid logistics foundation", "Global potential");
        improvements.push("Develop reverse logistics capacity");
      } else {
        personalizedMessage =
          "You're eligible for Logistics! Build your global freight capabilities.";
        nextSteps = [
          "Join Logistics Program",
          "Secure freight forwarder contracts (air/ocean)",
          "Complete KHCRF compliance review",
          "Improve digital freight tracking",
        ];
        strengths.push("Commitment to logistics", "Operational foundation");
        improvements.push(
          "Strengthen customs compliance",
          "Enhance freight cost optimization"
        );
      }
    } else if (partnershipName === "museum_collaboration") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for NGO & Government/Technology via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit curation & heritage documentation",
          "Align with museum partnership agreements",
          "Prepare for NGO/government collaborations",
        ];
        strengths.push(
          "Strong heritage significance",
          "Cultural storytelling readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Museum Collaboration with a fast track to NGO & Government.";
        nextSteps = [
          "Join Museum Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Enhance cultural documentation & storytelling archives",
          "Secure international heritage approvals",
        ];
        strengths.push(
          "Solid heritage foundation",
          "Cultural preservation potential"
        );
        improvements.push("Build multimedia-ready exhibition content");
      } else {
        personalizedMessage =
          "You're eligible for Museum Collaboration! Build your heritage and exhibition capabilities.";
        nextSteps = [
          "Join Museum Collaboration Program",
          "Submit curation & heritage documentation",
          "Align with museum partnership agreements",
          "Enhance cultural documentation",
        ];
        strengths.push(
          "Commitment to cultural preservation",
          "Heritage foundation"
        );
        improvements.push(
          "Secure GI tag/KHCRF documentation",
          "Develop exhibition agreements"
        );
      }
    } else if (partnershipName === "ngo_government") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Technology Collaboration via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit fair trade & compliance documents",
          "Align with NGO/government procurement frameworks",
          "Prepare for technology partnerships",
        ];
        strengths.push(
          "Strong fair trade compliance",
          "Institutional readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for NGO & Government Collaboration with a fast track to Technology Collaboration.";
        nextSteps = [
          "Join NGO & Government Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Enhance fair trade & eco-certification coverage",
          "Expand community impact reporting",
        ];
        strengths.push(
          "Solid procurement foundation",
          "Policy alignment potential"
        );
        improvements.push("Build institutional supply-readiness");
      } else {
        personalizedMessage =
          "You're eligible for NGO & Government Collaboration! Build your institutional capabilities.";
        nextSteps = [
          "Join NGO & Government Collaboration Program",
          "Submit fair trade & compliance documents",
          "Align with NGO/government procurement frameworks",
          "Enhance fair trade certifications",
        ];
        strengths.push("Commitment to fair trade", "Institutional foundation");
        improvements.push(
          "Improve compliance with procurement rules",
          "Expand community impact reporting"
        );
      }
    } else if (partnershipName === "technology_partnership") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Global Innovation Alliances via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit integration roadmap + tech alignment documents",
          "Complete KHCRF Tech Review",
          "Prepare for global innovation alliances",
        ];
        strengths.push(
          "Advanced tech integration",
          "Global innovation readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Technology Partnership with a fast track to Global Innovation Alliances.";
        nextSteps = [
          "Join Technology Partnership Program",
          "Enroll in Readiness Program (RP)",
          "Expand API/ERP readiness",
          "Strengthen cybersecurity & data ethics compliance",
        ];
        strengths.push("Solid tech foundation", "Innovation potential");
        improvements.push("Improve digital literacy among artisans");
      } else {
        personalizedMessage =
          "You're eligible for Technology Partnership! Build your tech integration capabilities.";
        nextSteps = [
          "Join Technology Partnership Program",
          "Submit integration roadmap + tech alignment documents",
          "Complete KHCRF Tech Review",
          "Expand API/ERP readiness",
        ];
        strengths.push("Commitment to technology", "Digital foundation");
        improvements.push(
          "Adopt AI-driven forecasting",
          "Strengthen blockchain/AR-VR capabilities"
        );
      }
    }

    // Role-specific recommendations
    if (role === "vendor") {
      if (partnershipName === "dropshipping") {
        const years = answers.vendor_active_years;
        const scale = answers.vendor_production_scale;
        const certifications = answers.vendor_certifications;
        const readiness = answers.vendor_readiness || [];
        if (years === "5+ years" || scale === "Enterprise")
          strengths.push("Established vendor experience");
        else improvements.push("Gain more operational experience");
        if (certifications === "KHCRF approval" || certifications === "GI tag")
          strengths.push("Certified operations");
        else if (data.specialRules.vendor.certificationsRequired)
          improvements.push("Pursue GI/KHCRF certifications");
      } else if (partnershipName === "consignment") {
        const years = answers.vendor_handicrafts_years;
        const scale = answers.vendor_production_scale;
        const certifications = answers.vendor_certifications;
        const readiness = answers.vendor_readiness || [];
        if (years !== "Less than 1 year")
          strengths.push("Sufficient handicraft experience");
        else improvements.push("Gain at least 1 year of handicraft experience");
        if (scale === "Workshop" || scale === "Enterprise")
          strengths.push("Adequate production scale");
        else improvements.push("Scale up to workshop or enterprise level");
        if (readiness.length >= 2)
          strengths.push("Strong consignment readiness");
        else improvements.push("Improve packaging and inventory systems");
      } else if (partnershipName === "wholesale") {
        const scale = answers.vendor_production_scale;
        const bulk = answers.vendor_bulk_capacity;
        const readiness = answers.vendor_readiness || [];
        if (scale === "Enterprise") strengths.push("Large-scale production");
        else improvements.push("Expand to enterprise-level production");
        if (bulk === "Yes") strengths.push("Bulk order capacity");
        else improvements.push("Develop capacity for ≥100 pcs/SKU");
        if (readiness.length >= 2) strengths.push("Strong wholesale readiness");
        else improvements.push("Automate inventory and invoicing");
      } else if (partnershipName === "importexport") {
        const licenses = answers.vendor_export_licenses;
        const logistics = answers.vendor_logistics;
        const readiness = answers.vendor_readiness || [];
        if (licenses === "Yes") strengths.push("Export compliance");
        else improvements.push("Obtain export licenses");
        if (logistics === "Yes")
          strengths.push("International logistics capability");
        else
          improvements.push("Partner with international logistics providers");
        if (readiness.length >= 2) strengths.push("Global trade readiness");
        else improvements.push("Enhance customs and forex capabilities");
      } else if (partnershipName === "exhibition") {
        const catalogs = answers.vendor_catalogs;
        const inventory = answers.vendor_exhibition_inventory;
        const branding = answers.vendor_branding_materials;
        const readiness = answers.vendor_exhibition_readiness || [];
        if (catalogs === "Yes") strengths.push("Exhibition catalogs ready");
        else improvements.push("Prepare exhibition catalogs");
        if (inventory === "Yes")
          strengths.push("Exhibition inventory management");
        else improvements.push("Improve exhibition inventory management");
        if (branding === "Yes") strengths.push("Exhibition branding materials");
        else improvements.push("Prepare exhibition branding materials");
        if (readiness.length >= 2)
          strengths.push("Strong exhibition readiness");
        else improvements.push("Enhance exhibition readiness");
      } else if (partnershipName === "auction") {
        const premium = answers.vendor_premium_products;
        const logistics = answers.vendor_auction_logistics;
        const verification = answers.vendor_khcrf_verification;
        const readiness = answers.vendor_auction_readiness || [];
        if (premium === "Yes") strengths.push("Premium products ready");
        else improvements.push("Prepare premium products");
        if (logistics === "Yes") strengths.push("Auction logistics management");
        else improvements.push("Improve auction logistics management");
        if (verification === "Yes")
          strengths.push("KHCRF product verification");
        else improvements.push("Complete KHCRF product verification");
        if (readiness.length >= 2) strengths.push("Strong auction readiness");
        else improvements.push("Enhance auction readiness");
      } else if (partnershipName === "white-label") {
        const customization = answers.vendor_customization;
        const volume = answers.vendor_production_volume;
        const certifications = answers.vendor_certifications_white_label || [];
        const readiness = answers.vendor_white_label_readiness || [];
        if (customization === "Yes") strengths.push("Customization capacity");
        else improvements.push("Develop customization capacity");
        if (volume === "Yes") strengths.push("Meets production volumes");
        else improvements.push("Increase production volumes");
        if (certifications.length >= 2) strengths.push("Strong certifications");
        else improvements.push("Pursue certifications");
        if (readiness.length >= 2)
          strengths.push("Strong white label readiness");
        else improvements.push("Enhance white label readiness");
      } else if (partnershipName === "brick-mortar") {
        const inventory = answers.vendor_retail_inventory;
        const management = answers.vendor_store_management;
        const certifications = answers.vendor_certifications_retail || [];
        const readiness = answers.vendor_retail_readiness || [];
        if (inventory === "Yes") strengths.push("Retail inventory capacity");
        else improvements.push("Develop retail inventory capacity");
        if (management === "Yes") strengths.push("Store management capacity");
        else improvements.push("Improve store management capacity");
        if (certifications.length >= 2) strengths.push("Strong certifications");
        else improvements.push("Pursue certifications");
        if (readiness.length >= 2) strengths.push("Strong retail readiness");
        else improvements.push("Enhance retail readiness");
      }
    } else if (role === "buyer") {
      if (partnershipName === "dropshipping") {
        const capacity = answers.buyer_sourcing_capacity;
        const authenticity = answers.buyer_authenticity_importance;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (authenticity === "High") strengths.push("Focus on authenticity");
        else improvements.push("Prioritize product authenticity");
        if (readiness.length >= 3)
          strengths.push("Solid fulfillment and promotion capabilities");
        else improvements.push("Enhance fulfillment and marketing strategies");
      } else if (partnershipName === "consignment") {
        const capacity = answers.buyer_sourcing_capacity;
        const authenticity = answers.buyer_authenticity_importance;
        const readiness = answers.buyer_readiness || [];
        if (capacity !== "Less than $5K")
          strengths.push("Adequate sourcing capacity");
        else improvements.push("Increase sourcing to $5K+");
        if (authenticity !== "Low")
          strengths.push("Focus on cultural authenticity");
        else improvements.push("Prioritize cultural authenticity");
        if (readiness.length >= 2)
          strengths.push("Consignment-ready operations");
        else improvements.push("Improve cash flow and inventory handling");
      } else if (partnershipName === "wholesale") {
        const capacity = answers.buyer_sourcing_capacity;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Ensure sourcing capacity of $25K+");
        if (readiness.length >= 2) strengths.push("Wholesale-ready operations");
        else improvements.push("Enhance storage and digital integration");
      } else if (partnershipName === "importexport") {
        const capacity = answers.buyer_sourcing_capacity;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$250K+") strengths.push("High sourcing capacity");
        else improvements.push("Increase sourcing to $250K+");
        if (readiness.length >= 2) strengths.push("Global trade readiness");
        else improvements.push("Strengthen import licenses and warehousing");
      } else if (partnershipName === "exhibition") {
        const capacity = answers.buyer_sourcing_capacity_exhibition;
        const verification = answers.buyer_product_verification;
        const readiness = answers.buyer_exhibition_readiness || [];
        if (capacity === "$50K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (verification === "Yes")
          strengths.push("Requires on-site verification");
        else improvements.push("Consider on-site verification");
        if (readiness.length >= 2)
          strengths.push("Strong exhibition readiness");
        else improvements.push("Enhance exhibition readiness");
      } else if (partnershipName === "auction") {
        const budget = answers.buyer_auction_budget;
        const preference = answers.buyer_auction_preference;
        const readiness = answers.buyer_auction_readiness || [];
        if (budget === "$10K+") strengths.push("Adequate auction budget");
        else improvements.push("Increase auction budget");
        if (preference) strengths.push("Auction preference");
        else improvements.push("Consider auction preference");
        if (readiness.length >= 2) strengths.push("Strong auction readiness");
        else improvements.push("Enhance auction readiness");
      } else if (partnershipName === "white-label") {
        const capacity = answers.buyer_sourcing_capacity_white_label;
        const rights = answers.buyer_branding_rights;
        const readiness = answers.buyer_white_label_readiness || [];
        if (capacity === "$50K+") strengths.push("Adequate sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (rights) strengths.push("Branding rights preference");
        else improvements.push("Consider branding rights");
        if (readiness.length >= 2)
          strengths.push("Strong white label readiness");
        else improvements.push("Enhance white label readiness");
      } else if (partnershipName === "brick-mortar") {
        const management = answers.buyer_shelf_management;
        const readiness = answers.buyer_retail_readiness || [];
        if (management === "Yes") strengths.push("Shelf management capacity");
        else improvements.push("Develop shelf management capacity");
        if (readiness.length >= 2) strengths.push("Strong retail readiness");
        else improvements.push("Enhance retail readiness");
      }
    }

    // Validation checks for higher tiers
    if (
      [
        "dropshipping",
        "consignment",
        "wholesale",
        "importexport",
        "exhibition",
        "auction",
        "white-label",
        "brick-mortar",
        "packaging",
        "design_collaboration",
        "storytelling_media",
        "warehouse",
        "museum_collaboration",
        "museum",
        "ngo_government",
        "technology_partnership",
      ].includes(partnershipName)
    ) {
      const validationAnswers = Object.keys(answers).filter(
        (key) =>
          data.questions.find((q) => q.id === key)?.category === "validation"
      );
      const failedValidations = validationAnswers.filter(
        (key) => answers[key] === "No" || answers[key] === "In Progress"
      );
      if (failedValidations.length > 0) {
        eligibility += " (Lateral Entry Required)";
        nextSteps.push("Complete KHCRF review for Lateral Entry");
        improvements.push(
          "Address previous partnership validation requirements"
        );
      }
    }

    setQuizResult({
      score: totalScore,
      eligibility,
      recommendedTrack,
      fastTrackEligible,
      personalizedMessage,
      nextSteps,
      strengths,
      improvements,
    });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizResult(null);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[var(--secondary-color)] rounded-2xl p-8 text-white text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Target
              className={`mx-auto mb-4 ${is4K ? "w-16 h-16" : "w-12 h-12"}`}
            />
            <h2
              className={`font-bold mb-4 ${
                is4K ? "text-4xl" : "text-2xl sm:text-3xl"
              }`}
            >
             
              Eligibility Assessment
            </h2>
            <p className={`opacity-90 mb-6 ${is4K ? "text-xl" : "text-lg"}`}>
              Discover your eligibility for our{" "}
              {name} program. Get personalized recommendations tailored to your role as
              a {role}.
            </p>
          </motion.div>

          <motion.button
            className={`bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 ${
              is4K ? "text-xl px-12 py-6" : "text-lg"
            }`}
            onClick={() => setIsStarted(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Start Assessment
          </motion.button>

          <p
            className={`mt-4 text-sm opacity-70 ${
              is4K ? "text-base" : "text-xs"
            }`}
          >
            {filteredQuestions.length} questions • Personalized results • No
            email required
          </p>
        </div>
      </motion.div>
    );
  }

  if (showResults && quizResult) {
    const getEligibilityColor = (eligibility: string) => {
      if (eligibility.includes("Consignment")) return "text-green-600";
      if (eligibility.includes("Wholesale")) return "text-blue-600";
      if (eligibility.includes("Import & Export")) return "text-purple-600";
      if (eligibility.includes("Dropshipping")) return "text-orange-600";
      return "text-gray-600";
    };

    const getEligibilityIcon = (eligibility: string) => {
      if (eligibility.includes("Consignment"))
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      if (eligibility.includes("Wholesale"))
        return <Package className="w-8 h-8 text-blue-500" />;
      if (eligibility.includes("Import & Export"))
        return <Star className="w-8 h-8 text-purple-500" />;
      if (eligibility.includes("Dropshipping"))
        return <TrendingUp className="w-8 h-8 text-orange-500" />;
      return <Target className="w-8 h-8 text-gray-500" />;
    };

    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-[var(--secondary-color)] p-8 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {getEligibilityIcon(quizResult.eligibility)}
            </motion.div>
            <h2
              className={`font-bold mt-4 mb-2 ${
                is4K ? "text-3xl" : "text-2xl"
              }`}
            >
              Your{" "}{name}{" "}Eligibility Results
            </h2>
            <div
              className={`text-6xl font-bold mb-2 ${
                is4K ? "text-7xl" : "text-5xl"
              }`}
            >
              {quizResult.score}
            </div>
            <p className={`opacity-90 ${is4K ? "text-xl" : "text-lg"}`}>
              {quizResult.personalizedMessage}
            </p>
          </div>

          <div className="p-8 space-y-8">
            <motion.div
              className="bg-gradient-to-r from-[var(--secondary-light-color)] to-white rounded-xl p-6 border border-[var(--secondary-color)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3
                className={`font-bold text-[var(--secondary-color)] mb-3 flex items-center gap-2 ${
                  is4K ? "text-2xl" : "text-xl"
                }`}
              >
                <Package className="w-6 h-6" />
                Recommended Track: {quizResult.recommendedTrack}
              </h3>
              {quizResult.fastTrackEligible && (
                <div className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">Fast-Track Eligible!</span>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3
                className={`font-bold text-green-600 mb-4 flex items-center gap-2 ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                <CheckCircle className="w-6 h-6" />
                Your Strengths
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {quizResult.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {quizResult.improvements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3
                  className={`font-bold text-orange-600 mb-4 flex items-center gap-2 ${
                    is4K ? "text-xl" : "text-lg"
                  }`}
                >
                  <TrendingUp className="w-6 h-6" />
                  Areas for Development
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {quizResult.improvements.map((improvement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg"
                    >
                      <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span
                        className={`text-gray-700 ${
                          is4K ? "text-lg" : "text-sm"
                        }`}
                      >
                        {improvement}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                <ArrowRight className="w-6 h-6" />
                Your Next Steps
              </h3>
              <div className="space-y-3">
                {quizResult.nextSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-base"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-bold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {quizResult.fastTrackEligible
                  ? `Apply for ${quizResult.recommendedTrack.split(" + ")[0]}`
                  : `Start Your ${
                      partnershipName.charAt(0).toUpperCase() +
                      partnershipName.slice(1)
                    } Journey`}
              </motion.button> */}
              <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                onClick={resetQuiz}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Retake Assessment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  const question = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  return (
    <motion.div
      className={`mx-auto px-6 py-12 ${containerClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-200 h-2">
          <motion.div
            className="bg-[var(--secondary-color)] h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <p className={`text-gray-500 mb-2 ${is4K ? "text-lg" : "text-sm"}`}>
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </p>
            <h2
              className={`font-bold text-[var(--primary-color)] ${
                is4K ? "text-2xl" : "text-xl"
              }`}
            >
              {question.question}
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-8"
            >
              {question.type === "single" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            answers[question.id] === option
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        />
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === "multiple" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id]?.includes(option)
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => {
                        const current = answers[question.id] || [];
                        const updated = current.includes(option)
                          ? current.filter((item: string) => item !== option)
                          : [...current, option];
                        handleAnswer(question.id, updated);
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border-2 ${
                            answers[question.id]?.includes(option)
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        >
                          {answers[question.id]?.includes(option) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === "yesno" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            answers[question.id] === option
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        />
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentQuestion === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-100"
              } ${is4K ? "text-lg" : "text-base"}`}
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}}
              whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </motion.button>

            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                answers[question.id] === undefined ||
                (question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover-color)]"
              } ${is4K ? "text-lg" : "text-base"}`}
              onClick={nextQuestion}
              disabled={
                answers[question.id] === undefined ||
                (question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0))
              }
              whileHover={
                answers[question.id] !== undefined &&
                !(
                  question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0)
                )
                  ? { scale: 1.05 }
                  : {}
              }
              whileTap={
                answers[question.id] !== undefined &&
                !(
                  question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0)
                )
                  ? { scale: 0.95 }
                  : {}
              }
            >
              {currentQuestion === filteredQuestions.length - 1
                ? "Get Results"
                : "Next"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
