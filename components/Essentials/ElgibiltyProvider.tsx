"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { CheckCircle, ArrowRight, ArrowLeft, Star, TrendingUp, Package, Award, Target, Zap } from "lucide-react"

// Types for Quiz Questions and Results
interface QuizQuestion {
  id: string
  question: string
  type: "single" | "multiple" | "yesno"
  options?: string[]
  category: "general" | "vendor" | "buyer" | "validation"
  weight: number
}

interface QuizResult {
  score: number
  eligibility: string
  recommendedTrack: string
  fastTrackEligible: boolean
  personalizedMessage: string
  nextSteps: string[]
  strengths: string[]
  improvements: string[]
}

// Define Questions for Each Partnership Type
const quizData: Record<string, { questions: QuizQuestion[]; maxScore: number; thresholds: any; specialRules: any }> = {
  dropshipping: {
    questions: [
      // General Self-Evaluation Questions (All Roles)
      {
        id: "product_authenticity",
        question: "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: ["Mixed/synthetic", "Mostly authentic", "Verified sourcing", "Certified suppliers", "Blockchain-certified"],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: ["Inconsistent", "Acceptable with flaws", "High with minor flaws", "Meets standards", "Exceeds standards"],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: ["No focus", "Some sustainable", "Significant portion sustainable", "Mostly eco-friendly", "Zero-waste commitment"],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: ["No strategy", "Needs improvement", "Generally satisfactory", "Well-managed", "Exceptional service"],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: ["No clear policy", "Minimum wages only", "Fair wages, limited safety", "Fair wages + safe conditions", "Market wages + safe workplaces"],
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
      5: { eligibility: "Dropshipping (TIER 1 / L1)", fastTrackEligible: false, nextLevel: null },
      11: { eligibility: "Dropshipping + Fast Track to Consignment", fastTrackEligible: true, nextLevel: "Consignment" },
      16: { eligibility: "Consignment (TIER 1 / L2)", fastTrackEligible: true, nextLevel: "Consignment" },
    },
    specialRules: {
      vendor: { certificationsRequired: false, commitment: null },
      buyer: { commitment: "Dropshipping" },
    },
  },
  consignment: {
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
        question: "How would you rate the overall quality of your products/services?",
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
        question: "Do you have a basic digital presence & API readiness from L1?",
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
        options: ["Consignment"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
      10: { eligibility: "Consignment (TIER 1 / L2)", fastTrackEligible: false, nextLevel: null },
      16: { eligibility: "Consignment + Fast Track to Wholesale", fastTrackEligible: true, nextLevel: "Wholesale" },
      21: { eligibility: "Wholesale (TIER 1 / L3)", fastTrackEligible: true, nextLevel: "Wholesale" },
    },
    specialRules: {
      vendor: { certificationsRequired: true, commitment: null, mkpiasThreshold: 6.0 },
      buyer: { commitment: "Consignment", mkpiasThreshold: 6.0 },
    },
  },
  wholesale: {
    questions: [
      // General Self-Evaluation Questions
      {
        id: "product_authenticity",
        question: "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: ["Mixed/synthetic", "Mostly authentic", "Verified sourcing", "Certified suppliers", "Blockchain-certified"],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: ["Inconsistent", "Acceptable with flaws", "High with minor flaws", "Meets standards", "Exceeds standards"],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: ["No focus", "Some sustainable", "Significant portion sustainable", "Mostly eco-friendly", "Zero-waste commitment"],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: ["No strategy", "Needs improvement", "Generally satisfactory", "Well-managed", "Exceptional service"],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: ["No clear policy", "Minimum wages only", "Fair wages, limited safety", "Fair wages + safe conditions", "Market wages + safe workplaces"],
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
        options: ["$25K+"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_terms",
        question: "What are your preferred terms?",
        type: "single",
        options: ["Consignment + Wholesale contract hybrid"],
        category: "buyer",
        weight: 0,
      },
      {
        id: "buyer_readiness",
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
      10: { eligibility: "Wholesale (TIER 1 / L3)", fastTrackEligible: false, nextLevel: null },
      16: { eligibility: "Wholesale + Fast Track to Import & Export", fastTrackEligible: true, nextLevel: "Import & Export" },
      21: { eligibility: "Import & Export (TIER 1 / L4)", fastTrackEligible: true, nextLevel: "Import & Export" },
    },
    specialRules: {
      vendor: { certificationsRequired: true, commitment: null, mkpiasThreshold: 6.5 },
      buyer: { commitment: null, mkpiasThreshold: 6.5 },
    },
  },
  importexport: {
    questions: [
      // General Self-Evaluation Questions
      {
        id: "product_authenticity",
        question: "How would you rate the authenticity of your products or sourcing?",
        type: "single",
        options: ["Mixed/synthetic", "Mostly authentic", "Verified sourcing", "Certified suppliers", "Blockchain-certified"],
        category: "general",
        weight: 1,
      },
      {
        id: "quality",
        question: "How would you describe the quality of your products?",
        type: "single",
        options: ["Inconsistent", "Acceptable with flaws", "High with minor flaws", "Meets standards", "Exceeds standards"],
        category: "general",
        weight: 1,
      },
      {
        id: "sustainability",
        question: "What is your focus on sustainability?",
        type: "single",
        options: ["No focus", "Some sustainable", "Significant portion sustainable", "Mostly eco-friendly", "Zero-waste commitment"],
        category: "general",
        weight: 1,
      },
      {
        id: "customer_experience",
        question: "How would you rate your customer experience strategy?",
        type: "single",
        options: ["No strategy", "Needs improvement", "Generally satisfactory", "Well-managed", "Exceptional service"],
        category: "general",
        weight: 1,
      },
      {
        id: "fair_trade",
        question: "How do you ensure fair trade practices?",
        type: "single",
        options: ["No clear policy", "Minimum wages only", "Fair wages, limited safety", "Fair wages + safe conditions", "Market wages + safe workplaces"],
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
        question: "Do you have export documentation capacity (HS Codes, COO, Customs forms)?",
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
        question: "Can you manage international logistics partners (Air/Ocean)?",
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
        question: "Which of these readiness checks do you meet? (Select all that apply)",
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
      10: { eligibility: "Import & Export (TIER 1 / L4)", fastTrackEligible: false, nextLevel: null },
      16: { eligibility: "Import & Export + Fast Track to Exhibition", fastTrackEligible: true, nextLevel: "Exhibition" },
      21: { eligibility: "Exhibition (TIER 2 / L5)", fastTrackEligible: true, nextLevel: "Exhibition" },
    },
    specialRules: {
      vendor: { certificationsRequired: true, commitment: null, mkpiasThreshold: 7.0 },
      buyer: { commitment: null, mkpiasThreshold: 7.0 },
    },
  },
}

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
}

interface DropshippingEligibilityQuizProps {
  partnershipName: "dropshipping" | "consignment" | "wholesale" | "importexport"
  role: "vendor" | "buyer"
  is4K?: boolean // Optional prop for 4K display support
}

export default function DropshippingEligibilityQuiz({ partnershipName, role, is4K = false }: DropshippingEligibilityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [isStarted, setIsStarted] = useState(false)

  const containerClass = is4K ? "max-w-[1000px] text-xl" : "max-w-[800px] text-base"
  const data = quizData[partnershipName]

  // Filter questions based on role
  const filteredQuestions = data.questions.filter(
    (q) => q.category === "general" || q.category === role || q.category === "validation"
  )

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateResults = () => {
    let totalScore = 0
    const strengths: string[] = []
    const improvements: string[] = []
    let eligibility = ""
    let recommendedTrack = ""
    let fastTrackEligible = false
    let personalizedMessage = ""
    let nextSteps: string[] = []

    // Calculate score (only from general questions)
    data.questions.forEach((question) => {
      const answer = answers[question.id]
      if (answer !== undefined && question.weight > 0) {
        let questionScore = 0
        if (question.type === "single") {
          const index = question.options?.indexOf(answer) || 0
          questionScore = index + 1 // Options are ordered from 1 to 5
        }
        totalScore += questionScore * question.weight
      }
    })

    // Determine eligibility based on thresholds
    const thresholds = Object.keys(data.thresholds)
      .map(Number)
      .sort((a, b) => b - a)
    for (const threshold of thresholds) {
      if (totalScore >= threshold) {
        eligibility = data.thresholds[threshold].eligibility
        fastTrackEligible = data.thresholds[threshold].fastTrackEligible
        recommendedTrack = data.thresholds[threshold].eligibility
        break
      }
    }

    // Set personalized message and next steps
    if (partnershipName === "dropshipping") {
      if (totalScore >= 16) {
        personalizedMessage = "Outstanding! Your strong fundamentals make you eligible for Consignment via Lateral Entry."
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Connect with premium partners",
          "Access advanced onboarding resources",
          "Schedule consultation with specialists",
        ]
        strengths.push("High-quality standards", "Strong authenticity", "Excellent customer focus")
      } else if (totalScore >= 11) {
        personalizedMessage = "Great potential! You're eligible for Dropshipping with a fast track to Consignment."
        nextSteps = [
          "Start with Dropshipping Program",
          "Enroll in Readiness Program (RP)",
          "Access training resources",
          "Build initial partner connections",
        ]
        strengths.push("Solid fundamentals", "Growth potential")
        improvements.push("Enhance quality and sustainability")
      } else {
        personalizedMessage = "You're ready to start with Dropshipping! Build your foundation for future growth."
        nextSteps = [
          "Join Dropshipping Program",
          "Access free educational resources",
          "Connect with community support",
          "Build operational capabilities",
        ]
        strengths.push("Entrepreneurial spirit", "Commitment to growth")
        improvements.push("Improve authenticity and quality", "Develop fair trade practices")
      }
    } else if (partnershipName === "consignment") {
      if (totalScore >= 21) {
        personalizedMessage = "Exceptional! You're eligible for Wholesale via Lateral Entry."
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload consignment compliance documents",
          "Complete KHCRF review",
          "Connect with wholesale partners",
        ]
        strengths.push("Export-ready operations", "Strong compliance")
      } else if (totalScore >= 16) {
        personalizedMessage = "Great! You're eligible for Consignment with a fast track to Wholesale."
        nextSteps = [
          "Join Consignment Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen API/ERP integration",
          "Prepare for wholesale transition",
        ]
        strengths.push("Solid consignment readiness", "Growth potential")
        improvements.push("Enhance operational scale")
      } else {
        personalizedMessage = "You're eligible for Consignment! Build your capabilities for higher tiers."
        nextSteps = [
          "Join Consignment Program",
          "Complete KHCRF orientation",
          "Improve digital integration",
          "Ensure packaging compliance",
        ]
        strengths.push("Commitment to consignment", "Operational foundation")
        improvements.push("Strengthen certifications", "Improve inventory systems")
      }
    } else if (partnershipName === "wholesale") {
      if (totalScore >= 21) {
        personalizedMessage = "Outstanding! You're eligible for Import & Export via Lateral Entry."
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit bulk order compliance documents",
          "Complete KHCRF packaging audit",
          "Prepare for international markets",
        ]
        strengths.push("Bulk order readiness", "Export compliance")
      } else if (totalScore >= 16) {
        personalizedMessage = "Great! You're eligible for Wholesale with a fast track to Import & Export."
        nextSteps = [
          "Join Wholesale Program",
          "Enroll in Readiness Program (RP)",
          "Upgrade ERP/API systems",
          "Build export invoicing capability",
        ]
        strengths.push("Strong wholesale foundation", "Operational scale")
        improvements.push("Enhance export readiness")
      } else {
        personalizedMessage = "You're eligible for Wholesale! Strengthen your systems for higher tiers."
        nextSteps = [
          "Join Wholesale Program",
          "Ensure KHCRF compliance",
          "Automate inventory management",
          "Build bulk packaging capabilities",
        ]
        strengths.push("Wholesale commitment", "Operational capacity")
        improvements.push("Pursue GI/KHCRF certifications", "Improve invoicing systems")
      }
    } else if (partnershipName === "importexport") {
      if (totalScore >= 21) {
        personalizedMessage = "Exceptional! You're eligible for Exhibition via Lateral Entry."
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit export licenses and GI certification",
          "Complete KHCRF customs review",
          "Prepare for international exhibitions",
        ]
        strengths.push("Global market readiness", "Strong compliance")
      } else if (totalScore >= 16) {
        personalizedMessage = "Great! You're eligible for Import & Export with a fast track to Exhibition."
        nextSteps = [
          "Join Import & Export Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen international logistics",
          "Ensure customs compliance",
        ]
        strengths.push("Export capabilities", "Global potential")
        improvements.push("Enhance logistics partnerships")
      } else {
        personalizedMessage = "You're eligible for Import & Export! Build your global capabilities."
        nextSteps = [
          "Join Import & Export Program",
          "Submit export documentation",
          "Complete KHCRF customs review",
          "Build international warehousing",
        ]
        strengths.push("Commitment to global trade", "Operational foundation")
        improvements.push("Strengthen export licenses", "Improve customs compliance")
      }
    }

    // Role-specific recommendations
    if (role === "vendor") {
      if (partnershipName === "dropshipping") {
        const years = answers.vendor_active_years
        const scale = answers.vendor_production_scale
        const certifications = answers.vendor_certifications
        const readiness = answers.vendor_readiness || []
        if (years === "5+ years" || scale === "Enterprise") strengths.push("Established vendor experience")
        else improvements.push("Gain more operational experience")
        if (certifications === "KHCRF approval" || certifications === "GI tag") strengths.push("Certified operations")
        else if (data.specialRules.vendor.certificationsRequired) improvements.push("Pursue GI/KHCRF certifications")
      } else if (partnershipName === "consignment") {
        const years = answers.vendor_handicrafts_years
        const scale = answers.vendor_production_scale
        const certifications = answers.vendor_certifications
        const readiness = answers.vendor_readiness || []
        if (years !== "Less than 1 year") strengths.push("Sufficient handicraft experience")
        else improvements.push("Gain at least 1 year of handicraft experience")
        if (scale === "Workshop" || scale === "Enterprise") strengths.push("Adequate production scale")
        else improvements.push("Scale up to workshop or enterprise level")
        if (readiness.length >= 2) strengths.push("Strong consignment readiness")
        else improvements.push("Improve packaging and inventory systems")
      } else if (partnershipName === "wholesale") {
        const scale = answers.vendor_production_scale
        const bulk = answers.vendor_bulk_capacity
        const readiness = answers.vendor_readiness || []
        if (scale === "Enterprise") strengths.push("Large-scale production")
        else improvements.push("Expand to enterprise-level production")
        if (bulk === "Yes") strengths.push("Bulk order capacity")
        else improvements.push("Develop capacity for ≥100 pcs/SKU")
        if (readiness.length >= 2) strengths.push("Strong wholesale readiness")
        else improvements.push("Automate inventory and invoicing")
      } else if (partnershipName === "importexport") {
        const licenses = answers.vendor_export_licenses
        const logistics = answers.vendor_logistics
        const readiness = answers.vendor_readiness || []
        if (licenses === "Yes") strengths.push("Export compliance")
        else improvements.push("Obtain export licenses")
        if (logistics === "Yes") strengths.push("International logistics capability")
        else improvements.push("Partner with international logistics providers")
        if (readiness.length >= 2) strengths.push("Global trade readiness")
        else improvements.push("Enhance customs and forex capabilities")
      }
    } else if (role === "buyer") {
      if (partnershipName === "dropshipping") {
        const capacity = answers.buyer_sourcing_capacity
        const authenticity = answers.buyer_authenticity_importance
        const readiness = answers.buyer_readiness || []
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity")
        else improvements.push("Increase sourcing capacity")
        if (authenticity === "High") strengths.push("Focus on authenticity")
        else improvements.push("Prioritize product authenticity")
        if (readiness.length >= 3) strengths.push("Solid fulfillment and promotion capabilities")
        else improvements.push("Enhance fulfillment and marketing strategies")
      } else if (partnershipName === "consignment") {
        const capacity = answers.buyer_sourcing_capacity
        const authenticity = answers.buyer_authenticity_importance
        const readiness = answers.buyer_readiness || []
        if (capacity !== "Less than $5K") strengths.push("Adequate sourcing capacity")
        else improvements.push("Increase sourcing to $5K+")
        if (authenticity !== "Low") strengths.push("Focus on cultural authenticity")
        else improvements.push("Prioritize cultural authenticity")
        if (readiness.length >= 2) strengths.push("Consignment-ready operations")
        else improvements.push("Improve cash flow and inventory handling")
      } else if (partnershipName === "wholesale") {
        const capacity = answers.buyer_sourcing_capacity
        const readiness = answers.buyer_readiness || []
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity")
        else improvements.push("Ensure sourcing capacity of $25K+")
        if (readiness.length >= 2) strengths.push("Wholesale-ready operations")
        else improvements.push("Enhance storage and digital integration")
      } else if (partnershipName === "importexport") {
        const capacity = answers.buyer_sourcing_capacity
        const readiness = answers.buyer_readiness || []
        if (capacity === "$250K+") strengths.push("High sourcing capacity")
        else improvements.push("Increase sourcing to $250K+")
        if (readiness.length >= 2) strengths.push("Global trade readiness")
        else improvements.push("Strengthen import licenses and warehousing")
      }
    }

    // Validation checks for higher tiers
    if (["consignment", "wholesale", "importexport"].includes(partnershipName)) {
      const validationAnswers = Object.keys(answers).filter((key) => data.questions.find((q) => q.id === key)?.category === "validation")
      const failedValidations = validationAnswers.filter((key) => answers[key] === "No" || answers[key] === "In Progress")
      if (failedValidations.length > 0) {
        eligibility += " (Lateral Entry Required)"
        nextSteps.push("Complete KHCRF review for Lateral Entry")
        improvements.push("Address previous partnership validation requirements")
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
    })
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setQuizResult(null)
    setIsStarted(false)
  }

  if (!isStarted) {
    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] rounded-2xl p-8 text-white text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Target className={`mx-auto mb-4 ${is4K ? "w-16 h-16" : "w-12 h-12"}`} />
            <h2 className={`font-bold mb-4 ${is4K ? "text-4xl" : "text-2xl sm:text-3xl"}`}>
              {partnershipName.charAt(0).toUpperCase() + partnershipName.slice(1)} Eligibility Assessment
            </h2>
            <p className={`opacity-90 mb-6 ${is4K ? "text-xl" : "text-lg"}`}>
              Discover your eligibility for our {partnershipName.charAt(0).toUpperCase() + partnershipName.slice(1)} program. Get personalized recommendations tailored to your role as a {role}.
            </p>
          </motion.div>

          <motion.button
            className={`bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 ${is4K ? "text-xl px-12 py-6" : "text-lg"
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

          <p className={`mt-4 text-sm opacity-70 ${is4K ? "text-base" : "text-xs"}`}>
            {filteredQuestions.length} questions • Personalized results • No email required
          </p>
        </div>
      </motion.div>
    )
  }

  if (showResults && quizResult) {
    const getEligibilityColor = (eligibility: string) => {
      if (eligibility.includes("Consignment")) return "text-green-600"
      if (eligibility.includes("Wholesale")) return "text-blue-600"
      if (eligibility.includes("Import & Export")) return "text-purple-600"
      if (eligibility.includes("Dropshipping")) return "text-orange-600"
      return "text-gray-600"
    }

    const getEligibilityIcon = (eligibility: string) => {
      if (eligibility.includes("Consignment")) return <CheckCircle className="w-8 h-8 text-green-500" />
      if (eligibility.includes("Wholesale")) return <Package className="w-8 h-8 text-blue-500" />
      if (eligibility.includes("Import & Export")) return <Star className="w-8 h-8 text-purple-500" />
      if (eligibility.includes("Dropshipping")) return <TrendingUp className="w-8 h-8 text-orange-500" />
      return <Target className="w-8 h-8 text-gray-500" />
    }

    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-8 text-white text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
              {getEligibilityIcon(quizResult.eligibility)}
            </motion.div>
            <h2 className={`font-bold mt-4 mb-2 ${is4K ? "text-3xl" : "text-2xl"}`}>
              Your {partnershipName.charAt(0).toUpperCase() + partnershipName.slice(1)} Eligibility Results
            </h2>
            <div className={`text-6xl font-bold mb-2 ${is4K ? "text-7xl" : "text-5xl"}`}>{quizResult.score}</div>
            <p className={`opacity-90 ${is4K ? "text-xl" : "text-lg"}`}>{quizResult.personalizedMessage}</p>
          </div>

          <div className="p-8 space-y-8">
            <motion.div
              className="bg-gradient-to-r from-[var(--secondary-light-color)] to-white rounded-xl p-6 border border-[var(--secondary-color)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3
                className={`font-bold text-[var(--secondary-color)] mb-3 flex items-center gap-2 ${is4K ? "text-2xl" : "text-xl"}`}
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

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h3 className={`font-bold text-green-600 mb-4 flex items-center gap-2 ${is4K ? "text-xl" : "text-lg"}`}>
                <CheckCircle className="w-6 h-6" />
                Your Strengths
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {quizResult.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"}`}>{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {quizResult.improvements.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <h3
                  className={`font-bold text-orange-600 mb-4 flex items-center gap-2 ${is4K ? "text-xl" : "text-lg"}`}
                >
                  <TrendingUp className="w-6 h-6" />
                  Areas for Development
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {quizResult.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"}`}>{improvement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${is4K ? "text-xl" : "text-lg"}`}
              >
                <ArrowRight className="w-6 h-6" />
                Your Next Steps
              </h3>
              <div className="space-y-3">
                {quizResult.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="w-6 h-6 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className={`text-gray-700 ${is4K ? "text-lg" : "text-base"}`}>{step}</span>
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
              <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-bold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${is4K ? "text-lg" : "text-base"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {quizResult.fastTrackEligible
                  ? `Apply for ${quizResult.recommendedTrack.split(" + ")[0]}`
                  : `Start Your ${partnershipName.charAt(0).toUpperCase() + partnershipName.slice(1)} Journey`}
              </motion.button>
              <motion.button
                className={`flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 ${is4K ? "text-lg" : "text-base"
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
    )
  }

  const question = filteredQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100

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
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-full"
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
            <h2 className={`font-bold text-[var(--primary-color)] ${is4K ? "text-2xl" : "text-xl"}`}>
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
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                        } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${answers[question.id] === option
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
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${answers[question.id]?.includes(option)
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                        } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => {
                        const current = answers[question.id] || []
                        const updated = current.includes(option)
                          ? current.filter((item: string) => item !== option)
                          : [...current, option]
                        handleAnswer(question.id, updated)
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border-2 ${answers[question.id]?.includes(option)
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                            }`}
                        >
                          {answers[question.id]?.includes(option) && <CheckCircle className="w-3 h-3 text-white" />}
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
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                        } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${answers[question.id] === option
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
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${currentQuestion === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
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
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${answers[question.id] === undefined ||
                  (question.type === "multiple" && (!answers[question.id] || answers[question.id].length === 0))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover-color)]"
                } ${is4K ? "text-lg" : "text-base"}`}
              onClick={nextQuestion}
              disabled={
                answers[question.id] === undefined ||
                (question.type === "multiple" && (!answers[question.id] || answers[question.id].length === 0))
              }
              whileHover={
                answers[question.id] !== undefined &&
                  !(question.type === "multiple" && (!answers[question.id] || answers[question.id].length === 0))
                  ? { scale: 1.05 }
                  : {}
              }
              whileTap={
                answers[question.id] !== undefined &&
                  !(question.type === "multiple" && (!answers[question.id] || answers[question.id].length === 0))
                  ? { scale: 0.95 }
                  : {}
              }
            >
              {currentQuestion === filteredQuestions.length - 1 ? "Get Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}