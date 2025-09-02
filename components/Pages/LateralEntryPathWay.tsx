"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useGlobalContext } from "@/context/ScreenProvider"
import { CheckCircle, ArrowRight, ArrowLeft, Star, TrendingUp, Package, Award, Target, Zap } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  type: "single"
  options: string[]
  category: string
  weight: number
}

interface QuizResult {
  score: number
  alignment: "approved" | "conditional" | "not_eligible"
  complianceStatus: Record<string, "pass" | "warning" | "fail">
  recommendedActions: string[]
  strengths: string[]
  improvements: string[]
}

const quizQuestions: QuizQuestion[] = [
  // Step 1: Legacy & Scale
  {
    id: "years_trade",
    question: "Years of uninterrupted trade in handicrafts?",
    type: "single",
    options: ["< 5 years", "5–10 years", "10–20 years", "20+ years"],
    category: "legacy_scale",
    weight: 1,
  },
  {
    id: "procurement_scale",
    question: "Scale of procurement networks?",
    type: "single",
    options: ["Single local region", "Multi-regional (one country)", "Multi-country (limited volume)", "Global supply chain (audited partners)"],
    category: "legacy_scale",
    weight: 1,
  },
  {
    id: "business_structure",
    question: "Type of business structure?",
    type: "single",
    options: ["Informal / unregistered", "Small registered entity", "Medium enterprise with compliance", "Large enterprise with global recognition"],
    category: "legacy_scale",
    weight: 1,
  },
  {
    id: "trade_focus",
    question: "Main focus of your trade?",
    type: "single",
    options: ["Opportunistic, low-cost sourcing", "Regional resale", "National retail / wholesale", "Global heritage advocacy"],
    category: "legacy_scale",
    weight: 1,
  },
  // Step 2: Compliance & Governance
  {
    id: "compliance_verification",
    question: "External compliance verification level?",
    type: "single",
    options: ["None", "National certifications", "International compliance", "Blockchain + third-party audits"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "governance_transparency",
    question: "Governance transparency?",
    type: "single",
    options: ["Opaque / family-run", "Basic reporting", "Audited reports + ESG", "Public ESG/CSR disclosures"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "craftlore_blockchain",
    question: "Join CraftLore Blockchain Program (traceability & authenticity)?",
    type: "single",
    options: ["No", "Maybe, if required", "Partial integration", "Full integration"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "craftlore_gi_promotion",
    question: "Join CraftLore GI Promotional Program (Kashmir Handicrafts)?",
    type: "single",
    options: ["No", "Limited use only", "Active promotion (select crafts)", "Full GI advocacy in campaigns"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "craftlore_carbon_footprint",
    question: "Join CraftLore Craft Carbon Footprint System?",
    type: "single",
    options: ["No", "Basic reporting only", "Partial adoption", "Full adoption + reduction goals"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "craftlore_price_valuation",
    question: "Join CraftLore Price Valuation Registry (fair pricing & anti-counterfeiting)?",
    type: "single",
    options: ["No", "Limited participation", "Select categories only", "Full participation"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "craftlore_trade_registry",
    question: "Join CraftLore Kashmir Handicrafts Trade Registry (listing, ranking, blacklist protection)?",
    type: "single",
    options: ["No", "Limited listing", "Partial registration", "Full registration & compliance"],
    category: "compliance_governance",
    weight: 1,
  },
  {
    id: "third_party_audits",
    question: "Allow independent third-party audits (in addition to HCRF checks)?",
    type: "single",
    options: ["No", "Yes, but restricted", "Yes, periodic audits", "Yes, full transparent audits"],
    category: "compliance_governance",
    weight: 1,
  },
  // Step 3: Global Readiness
  {
    id: "last_compliance_audit",
    question: "Last compliance audit?",
    type: "single",
    options: ["Never", "5+ years ago", "Within 3 years", "Within 12 months (cleared)"],
    category: "global_readiness",
    weight: 1,
  },
  {
    id: "international_footprint",
    question: "Proven international footprint?",
    type: "single",
    options: ["None", "Pilot exports", "1–2 stable markets", "Multi-continent presence"],
    category: "global_readiness",
    weight: 1,
  },
  {
    id: "logistics_compliance",
    question: "Ability to meet international logistics standards (packaging, labeling, shipping)?",
    type: "single",
    options: ["Not prepared", "Basic, domestic only", "Limited export-ready", "Fully compliant with global standards"],
    category: "global_readiness",
    weight: 1,
  },
  {
    id: "digital_readiness",
    question: "Digital readiness for cross-border trade (API, e-commerce sync)?",
    type: "single",
    options: ["No systems in place", "Basic spreadsheets", "E-commerce sync (select items)", "Full digital integration"],
    category: "global_readiness",
    weight: 1,
  },
  // Step 4: Integrity & Risk
  {
    id: "blacklisting_history",
    question: "Blacklisting / sanctions history?",
    type: "single",
    options: ["Unresolved issues", "Partially resolved", "Flagged but cleared", "Never flagged"],
    category: "integrity_risk",
    weight: 1,
  },
  {
    id: "suspension_acceptance",
    question: "If malpractice is proven, will you accept suspension?",
    type: "single",
    options: ["No", "Only if legally forced", "Conditional acceptance", "Immediate compliance"],
    category: "integrity_risk",
    weight: 1,
  },
  {
    id: "disputes_record",
    question: "Past record of disputes with artisans or buyers?",
    type: "single",
    options: ["Frequent, unresolved", "Some, partly resolved", "Rare, all resolved", "None on record"],
    category: "integrity_risk",
    weight: 1,
  },
  {
    id: "ethical_sourcing",
    question: "Independent verification of ethical sourcing?",
    type: "single",
    options: ["None", "Self-claimed only", "Third-party certified (partly)", "Fully third-party verified"],
    category: "integrity_risk",
    weight: 1,
  },
  // Step 5: Strategic Commitment
  {
    id: "ecosystem_role",
    question: "Role in De Koshur Crafts ecosystem?",
    type: "single",
    options: ["Opportunistic trading", "Regional buyer", "National partner", "Global heritage advocate"],
    category: "strategic_commitment",
    weight: 1,
  },
  {
    id: "path_if_not_approved",
    question: "If not approved now, your path?",
    type: "single",
    options: ["Withdraw application", "Wait retention", "Improve KPIs & reapply", "Paid Multi-Path with audit"],
    category: "strategic_commitment",
    weight: 1,
  },
  {
    id: "artisan_capacity_building",
    question: "Willingness to invest in artisan capacity building?",
    type: "single",
    options: ["Not relevant", "Minimal symbolic support", "Regular training programs", "Long-term investment"],
    category: "strategic_commitment",
    weight: 1,
  },
  {
    id: "eco_packaging_commitment",
    question: "Commitment to eco-packaging & sustainable trade?",
    type: "single",
    options: ["No", "Minimal", "Moderate adoption", "Full compliance + innovation"],
    category: "strategic_commitment",
    weight: 1,
  },
  // Step 6: Advocacy & Campaigning
  {
    id: "hcrf_advocacy_contribution",
    question: "Contribution to HCRF advocacy & campaigning?",
    type: "single",
    options: ["None", "Occasional donations", "Regular participation", "Strategic global partner"],
    category: "advocacy_campaigning",
    weight: 1,
  },
  {
    id: "policy_influence_role",
    question: "Policy influence role?",
    type: "single",
    options: ["None", "Indirect support", "Petitions & delegations", "Lead lobbying & recommendations"],
    category: "advocacy_campaigning",
    weight: 1,
  },
  {
    id: "hcrf_campaign_visibility",
    question: "Visibility for HCRF campaigns?",
    type: "single",
    options: ["None", "Share occasionally", "Regular promotion", "Embed campaigns in brand identity"],
    category: "advocacy_campaigning",
    weight: 1,
  },
  {
    id: "artisan_rights_support",
    question: "Support for artisan rights advocacy?",
    type: "single",
    options: ["Not a priority", "Symbolic gestures", "Co-sponsorship", "Funding + global advocacy"],
    category: "advocacy_campaigning",
    weight: 1,
  },
  // Step 7: ArtStay Handicraft Tourism Alignment
  {
    id: "artstay_craft_school",
    question: "Be part of the ArtStay Craft School (artisan training for tourists)?",
    type: "single",
    options: ["No", "Limited (occasional)", "Regular support", "Full partner"],
    category: "artstay_tourism",
    weight: 1,
  },
  {
    id: "artstay_craft_safari",
    question: "Engage in the ArtStay Craft Safari (guided artisan village tours)?",
    type: "single",
    options: ["No", "Limited participation", "Promote in packages", "Strategic tourism partner"],
    category: "artstay_tourism",
    weight: 1,
  },
  {
    id: "artstay_craft_fair",
    question: "Participate in the ArtStay Craft Fair (seasonal exhibitions)?",
    type: "single",
    options: ["No", "Occasional", "Regular", "Co-sponsor / co-host"],
    category: "artstay_tourism",
    weight: 1,
  },
  {
    id: "artstay_craft_store",
    question: "Integrate with the ArtStay Craft Store (retail & digital)?",
    type: "single",
    options: ["No", "Limited listing", "Select products listed", "Full integration"],
    category: "artstay_tourism",
    weight: 1,
  },
  {
    id: "artstay_craft_documenter",
    question: "Support the ArtStay Craft Documenter (heritage storytelling)?",
    type: "single",
    options: ["No", "Minimal sharing", "Collaborate occasionally", "Sponsor & promote globally"],
    category: "artstay_tourism",
    weight: 1,
  },
  {
    id: "artstay_craft_tourism_sponsorship",
    question: "Co-sponsor ArtStay craft-tourism programs globally?",
    type: "single",
    options: ["No", "Only small-scale events", "Regional sponsorship", "International multi-year sponsorship"],
    category: "artstay_tourism",
    weight: 1,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
}

export default function LaterEntryEvaluationWizard() {
  const { is4K } = useGlobalContext()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [isStarted, setIsStarted] = useState(false)

  const containerClass = is4K ? "max-w-[1000px] text-xl" : "max-w-[800px] text-base"

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
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
    let meetsStandardsCount = 0
    const complianceStatus: Record<string, "pass" | "warning" | "fail"> = {
      craftlore_pillars: "pass",
      global_readiness: "pass",
      integrity_risk: "pass",
      advocacy_campaigning: "pass",
      artstay_tourism: "pass",
    }
    let artstayMeetsStandards = 0
    const strengths: string[] = []
    const improvements: string[] = []

    // Evaluate each question based on the scoring matrix
    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const isCompliant = question.options.indexOf(answer) !== 0 // First option (index 0) is non-compliant
        if (isCompliant) {
          meetsStandardsCount += 1
        }

        // Specific checks for CraftLore Pillars (Q7–Q11) and Suspension Acceptance (Q18)
        if (
          [
            "craftlore_blockchain",
            "craftlore_gi_promotion",
            "craftlore_carbon_footprint",
            "craftlore_price_valuation",
            "craftlore_trade_registry",
          ].includes(question.id) &&
          !isCompliant
        ) {
          complianceStatus.craftlore_pillars = "fail"
        }
        if (question.id === "suspension_acceptance" && !isCompliant) {
          complianceStatus.integrity_risk = "fail"
        }

        // Count ArtStay compliance (Q29–Q34)
        if (question.category === "artstay_tourism" && isCompliant) {
          artstayMeetsStandards += 1
        }

        // Populate strengths and improvements based on answers
        if (isCompliant) {
          switch (question.category) {
            case "legacy_scale":
              strengths.push(`Strong ${question.id.replace('_', ' ')} profile`)
              break
            case "compliance_governance":
              strengths.push(`Robust ${question.id.replace('_', ' ')} practices`)
              break
            case "global_readiness":
              strengths.push(`Prepared for ${question.id.replace('_', ' ')}`)
              break
            case "integrity_risk":
              strengths.push(`High integrity in ${question.id.replace('_', ' ')}`)
              break
            case "strategic_commitment":
              strengths.push(`Committed to ${question.id.replace('_', ' ')}`)
              break
            case "advocacy_campaigning":
              strengths.push(`Active in ${question.id.replace('_', ' ')}`)
              break
            case "artstay_tourism":
              strengths.push(`Aligned with ${question.id.replace('_', ' ')}`)
              break
          }
        } else {
          improvements.push(`Improve ${question.id.replace('_', ' ')} to meet standards`)
        }
      }
    })

    // Adjust ArtStay compliance status
    if (artstayMeetsStandards < 2) {
      complianceStatus.artstay_tourism = "warning"
    }

    // Determine final alignment
    let alignment: "approved" | "conditional" | "not_eligible" = "not_eligible"
    let recommendedActions: string[] = []

    if (
      complianceStatus.craftlore_pillars === "fail" ||
      complianceStatus.integrity_risk === "fail"
    ) {
      alignment = "not_eligible"
      recommendedActions = [
        "Address non-compliance in CraftLore pillars or integrity requirements",
        "Improve compliance and reapply after 6 months",
        "Access HCRF educational resources",
        "Join community compliance workshops",
      ]
    } else if (meetsStandardsCount >= 27) {
      alignment = "approved"
      recommendedActions = [
        "Proceed to onboarding and integration with HCRF",
        "Join CraftLore programs immediately",
        "Engage with ArtStay tourism initiatives",
        "Connect with global heritage partners",
      ]
    } else if (meetsStandardsCount >= 21) {
      alignment = "conditional"
      recommendedActions = [
        "Submit corrective plan within 90 days",
        "Enroll in HCRF compliance training",
        "Strengthen ArtStay alignment (2+ programs)",
        "Reapply after addressing improvements",
      ]
    } else {
      alignment = "not_eligible"
      recommendedActions = [
        "Improve compliance across multiple areas",
        "Access HCRF foundational resources",
        "Join community learning groups",
        "Reapply after building stronger fundamentals",
      ]
    }

    const result: QuizResult = {
      score: Math.round((meetsStandardsCount / quizQuestions.length) * 100),
      alignment,
      complianceStatus,
      recommendedActions,
      strengths,
      improvements,
    }

    setQuizResult(result)
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
              Later Entry Evaluation Wizard
            </h2>
            <p className={`opacity-90 mb-6 ${is4K ? "text-xl" : "text-lg"}`}>
              Assess your alignment with HCRF's mission to protect Kashmiri handicrafts. Get tailored recommendations and compliance insights for CraftLore and ArtStay integration.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/10 rounded-lg p-4">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Compliance Check</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>CraftLore Pillars</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Global Readiness</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>ArtStay Alignment</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Integrity Scan</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>Risk Assessment</p>
            </div>
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
            Start Evaluation
          </motion.button>

          <p className={`mt-4 text-sm opacity-70 ${is4K ? "text-base" : "text-xs"}`}>
            34 questions • Personalized compliance results • No email required
          </p>
        </div>
      </motion.div>
    )
  }

  if (showResults && quizResult) {
    const getAlignmentColor = (alignment: string) => {
      switch (alignment) {
        case "approved":
          return "text-green-600"
        case "conditional":
          return "text-yellow-600"
        case "not_eligible":
          return "text-orange-600"
        default:
          return "text-gray-600"
      }
    }

    const getAlignmentIcon = (alignment: string) => {
      switch (alignment) {
        case "approved":
          return <CheckCircle className="w-8 h-8 text-green-500" />
        case "conditional":
          return <Star className="w-8 h-8 text-yellow-500" />
        case "not_eligible":
          return <TrendingUp className="w-8 h-8 text-orange-500" />
        default:
          return <Target className="w-8 h-8 text-gray-500" />
      }
    }

    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Results Header */}
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-8 text-white text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
              {getAlignmentIcon(quizResult.alignment)}
            </motion.div>
            <h2 className={`font-bold mt-4 mb-2 ${is4K ? "text-3xl" : "text-2xl"}`}>
              Your Later Entry Evaluation Results
            </h2>
            <div className={`text-6xl font-bold mb-2 ${is4K ? "text-7xl" : "text-5xl"}`}>{quizResult.score}%</div>
            <p className={`opacity-90 ${is4K ? "text-xl" : "text-lg"}`}>
              {quizResult.alignment === "approved"
                ? "Congratulations! You're fully aligned with HCRF's mission."
                : quizResult.alignment === "conditional"
                ? "Good progress! You're close to full alignment with some improvements."
                : "You're not eligible yet, but we can help you get there!"}
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Compliance Status */}
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
                Compliance Status
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {Object.entries(quizResult.complianceStatus).map(([key, status], index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    {status === "pass" ? (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : status === "warning" ? (
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    )}
                    <span className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"}`}>
                      {key.replace('_', ' ').toUpperCase()}: {status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
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

            {/* Improvements */}
            {quizResult.improvements.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <h3
                  className={`font-bold text-orange-600 mb-4 flex items-center gap-2 ${is4K ? "text-xl" : "text-lg"}`}
                >
                  <TrendingUp className="w-6 h-6" />
                  Areas for Improvement
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

            {/* Recommended Actions */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${is4K ? "text-xl" : "text-lg"}`}
              >
                <ArrowRight className="w-6 h-6" />
                Recommended Next Steps
              </h3>
              <div className="space-y-3">
                {quizResult.recommendedActions.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="w-6 h-6 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className={`text-gray-700 ${is4K ? "text-lg" : "text-base"}`}>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-bold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {quizResult.alignment === "approved"
                  ? "Proceed to Onboarding"
                  : quizResult.alignment === "conditional"
                  ? "Submit Corrective Plan"
                  : "Start Compliance Journey"}
              </motion.button>
              <motion.button
                className={`flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                onClick={resetQuiz}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Retake Evaluation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <motion.div
      className={`mx-auto px-6 py-12 ${containerClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-200 h-2">
          <motion.div
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-8">
          {/* Question Header */}
          <div className="text-center mb-8">
            <p className={`text-gray-500 mb-2 ${is4K ? "text-lg" : "text-sm"}`}>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
            <h2 className={`font-bold text-[var(--primary-color)] ${is4K ? "text-2xl" : "text-xl"}`}>
              {question.question}
            </h2>
          </div>

          {/* Question Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-8"
            >
              <div className="space-y-3">
                {question.options.map((option, index) => (
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
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentQuestion === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
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
                answers[question.id] === undefined
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover-color)]"
              } ${is4K ? "text-lg" : "text-base"}`}
              onClick={nextQuestion}
              disabled={answers[question.id] === undefined}
              whileHover={answers[question.id] !== undefined ? { scale: 1.05 } : {}}
              whileTap={answers[question.id] !== undefined ? { scale: 0.95 } : {}}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}