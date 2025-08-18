"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useGlobalContext } from "@/context/ScreenProvider"
import { CheckCircle, ArrowRight, ArrowLeft, Star, TrendingUp, Package, Award, Target, Zap } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  type: "single" | "multiple" | "scale" | "text"
  options?: string[]
  category: "business" | "experience" | "goals" | "resources"
  weight: number
}

interface QuizResult {
  score: number
  eligibility: "high" | "medium" | "low"
  recommendedTrack: string
  fastTrackEligible: boolean
  personalizedMessage: string
  nextSteps: string[]
  strengths: string[]
  improvements: string[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "business_type",
    question: "What type of business do you operate?",
    type: "single",
    options: [
      "Established manufacturer/vendor (5+ years)",
      "Growing business (2-5 years)",
      "Startup/new business (under 2 years)",
      "Individual artisan/craftsperson",
      "Buyer/retailer looking for suppliers",
      "Service provider in trade industry",
    ],
    category: "business",
    weight: 3,
  },
  {
    id: "annual_revenue",
    question: "What's your approximate annual revenue/purchasing volume?",
    type: "single",
    options: ["Over $1M", "$500K - $1M", "$100K - $500K", "$50K - $100K", "Under $50K", "Just starting/planning phase"],
    category: "business",
    weight: 2.5,
  },
  {
    id: "trade_experience",
    question: "How much international trade experience do you have?",
    type: "single",
    options: [
      "Extensive (10+ years, multiple markets)",
      "Moderate (5-10 years, few markets)",
      "Some experience (2-5 years)",
      "Limited (under 2 years)",
      "No international trade experience",
      "Domestic only, want to expand",
    ],
    category: "experience",
    weight: 3,
  },
  {
    id: "current_challenges",
    question: "What are your biggest current challenges? (Select all that apply)",
    type: "multiple",
    options: [
      "Finding reliable suppliers/buyers",
      "Quality control and standards",
      "Payment security and terms",
      "Logistics and shipping",
      "Market research and trends",
      "Language and cultural barriers",
      "Legal compliance and documentation",
      "Pricing and negotiation",
    ],
    category: "business",
    weight: 2,
  },
  {
    id: "growth_goals",
    question: "What are your primary growth goals for the next 2 years?",
    type: "multiple",
    options: [
      "Expand to new international markets",
      "Increase revenue by 50%+",
      "Diversify product/supplier portfolio",
      "Improve operational efficiency",
      "Build stronger partnerships",
      "Develop private label products",
      "Enter premium market segments",
      "Scale existing operations",
    ],
    category: "goals",
    weight: 2.5,
  },
  {
    id: "team_size",
    question: "How many people work in your business?",
    type: "single",
    options: [
      "Just me (solo entrepreneur)",
      "2-5 people",
      "6-20 people",
      "21-50 people",
      "51-100 people",
      "Over 100 people",
    ],
    category: "resources",
    weight: 1.5,
  },
  {
    id: "tech_comfort",
    question: "How comfortable are you with digital tools and platforms?",
    type: "scale",
    options: ["1", "2", "3", "4", "5"],
    category: "resources",
    weight: 1.5,
  },
  {
    id: "investment_capacity",
    question: "What's your capacity for investing in growth and partnerships?",
    type: "single",
    options: [
      "High - Ready to invest significantly",
      "Moderate - Can invest with planning",
      "Limited - Need cost-effective solutions",
      "Minimal - Looking for low-cost options",
      "Bootstrap - Need free/revenue-share models",
    ],
    category: "resources",
    weight: 2,
  },
  {
    id: "timeline",
    question: "What's your timeline for seeing results?",
    type: "single",
    options: [
      "Immediate (within 3 months)",
      "Short-term (3-6 months)",
      "Medium-term (6-12 months)",
      "Long-term (1-2 years)",
      "Patient growth (2+ years)",
    ],
    category: "goals",
    weight: 1.5,
  },
  {
    id: "preferred_support",
    question: "What type of support do you prefer?",
    type: "single",
    options: [
      "Hands-on guidance and mentoring",
      "Structured programs with milestones",
      "Self-service tools and resources",
      "Community-based peer support",
      "One-on-one consulting",
      "Group workshops and training",
    ],
    category: "goals",
    weight: 2,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
}

export default function EligibilityQuiz() {
  const { is4K } = useGlobalContext()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [isStarted, setIsStarted] = useState(false)

  const containerClass = is4K ? "max-w-[1000px] text-xl" : "max-w-[800px] text-base"

  const handleAnswer = (questionId: string, answer: any) => {
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
    let totalScore = 0
    let maxScore = 0

    // Calculate weighted score
    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      maxScore += question.weight * 5 // Max score per question

      if (answer !== undefined) {
        let questionScore = 0

        switch (question.type) {
          case "single":
            const singleIndex = question.options?.indexOf(answer) || 0
            questionScore = ((question.options!.length - singleIndex) / question.options!.length) * 5
            break
          case "multiple":
            questionScore = Math.min(answer.length * 1.5, 5)
            break
          case "scale":
            questionScore = Number.parseInt(answer)
            break
          case "text":
            questionScore = answer.length > 10 ? 4 : 2
            break
        }

        totalScore += questionScore * question.weight
      }
    })

    const scorePercentage = (totalScore / maxScore) * 100

    // Determine eligibility and recommendations
    let eligibility: "high" | "medium" | "low"
    let recommendedTrack = ""
    let fastTrackEligible = false
    let personalizedMessage = ""
    let nextSteps: string[] = []
    const strengths: string[] = []
    const improvements: string[] = []

    // Analyze specific answers for personalized recommendations
    const businessType = answers.business_type
    const revenue = answers.annual_revenue
    const experience = answers.trade_experience
    const challenges = answers.current_challenges || []
    const goals = answers.growth_goals || []

    if (scorePercentage >= 75) {
      eligibility = "high"
      fastTrackEligible = true
      personalizedMessage =
        "Excellent! You're an ideal candidate for Core Trade partnerships with strong potential for immediate success."

      // Determine best track based on profile
      if (businessType?.includes("manufacturer") || businessType?.includes("Established")) {
        recommendedTrack = "Vendor Track"
        strengths.push("Established business foundation", "Manufacturing expertise", "Market experience")
      } else if (businessType?.includes("retailer") || businessType?.includes("Buyer")) {
        recommendedTrack = "Buyer Track"
        strengths.push("Market knowledge", "Purchasing experience", "Customer relationships")
      } else if (goals.includes("Expand to new international markets")) {
        recommendedTrack = "Global Expansion Track"
        strengths.push("Growth mindset", "International ambitions", "Strategic thinking")
      } else {
        recommendedTrack = "Premium Partnership Track"
        strengths.push("High performance potential", "Strong business metrics", "Leadership qualities")
      }

      nextSteps = [
        "Schedule immediate consultation with Core Trade specialists",
        "Fast-track application for KHCRF Lateral Entry",
        "Access premium onboarding resources",
        "Connect with top-tier partners in your category",
      ]
    } else if (scorePercentage >= 50) {
      eligibility = "medium"
      personalizedMessage =
        "Great potential! You have solid foundations and with some development, you'll be ready for Core Trade success."

      if (challenges.includes("Finding reliable suppliers/buyers")) {
        recommendedTrack = "Network Building Track"
        improvements.push("Expand supplier/buyer network", "Improve vetting processes")
      } else if (challenges.includes("Quality control and standards")) {
        recommendedTrack = "Quality Excellence Track"
        improvements.push("Implement quality systems", "Develop inspection protocols")
      } else {
        recommendedTrack = "Growth Development Track"
        improvements.push("Strengthen business operations", "Develop international capabilities")
      }

      strengths.push("Good business fundamentals", "Clear growth vision", "Willingness to learn")

      nextSteps = [
        "Complete Core Trade readiness assessment",
        "Enroll in preparatory development program",
        "Access foundational training resources",
        "Build initial partner connections",
      ]
    } else {
      eligibility = "low"
      personalizedMessage =
        "You're in the early stages but don't worry! Core Trade offers development programs to help you build the foundation for future success."
      recommendedTrack = "Foundation Building Track"

      improvements.push(
        "Develop business fundamentals",
        "Build market knowledge",
        "Strengthen operational capabilities",
        "Gain relevant experience",
      )

      strengths.push("Entrepreneurial spirit", "Growth potential", "Commitment to learning")

      nextSteps = [
        "Start with Core Trade Foundation Program",
        "Access free educational resources",
        "Join community learning groups",
        "Build business fundamentals step-by-step",
      ]
    }

    const result: QuizResult = {
      score: Math.round(scorePercentage),
      eligibility,
      recommendedTrack,
      fastTrackEligible,
      personalizedMessage,
      nextSteps,
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
              Core Trade Eligibility Assessment
            </h2>
            <p className={`opacity-90 mb-6 ${is4K ? "text-xl" : "text-lg"}`}>
              Discover your perfect Core Trade path with our intelligent assessment. Get personalized recommendations,
              track matching, and next steps tailored to your business profile.
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
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Smart Matching</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>AI-powered track recommendations</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Personalized Results</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>Tailored action plans</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <h3 className={`font-semibold mb-2 ${is4K ? "text-lg" : "text-base"}`}>Fast-Track Detection</h3>
              <p className={`text-sm opacity-80 ${is4K ? "text-base" : "text-xs"}`}>Identify premium opportunities</p>
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
            Start Assessment (5 minutes)
          </motion.button>

          <p className={`mt-4 text-sm opacity-70 ${is4K ? "text-base" : "text-xs"}`}>
            10 questions • Personalized results • No email required
          </p>
        </div>
      </motion.div>
    )
  }

  if (showResults && quizResult) {
    const getEligibilityColor = (eligibility: string) => {
      switch (eligibility) {
        case "high":
          return "text-green-600"
        case "medium":
          return "text-yellow-600"
        case "low":
          return "text-orange-600"
        default:
          return "text-gray-600"
      }
    }

    const getEligibilityIcon = (eligibility: string) => {
      switch (eligibility) {
        case "high":
          return <CheckCircle className="w-8 h-8 text-green-500" />
        case "medium":
          return <Star className="w-8 h-8 text-yellow-500" />
        case "low":
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
              {getEligibilityIcon(quizResult.eligibility)}
            </motion.div>
            <h2 className={`font-bold mt-4 mb-2 ${is4K ? "text-3xl" : "text-2xl"}`}>
              Your Core Trade Assessment Results
            </h2>
            <div className={`text-6xl font-bold mb-2 ${is4K ? "text-7xl" : "text-5xl"}`}>{quizResult.score}%</div>
            <p className={`opacity-90 ${is4K ? "text-xl" : "text-lg"}`}>{quizResult.personalizedMessage}</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Recommended Track */}
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

            {/* Next Steps */}
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
                {quizResult.fastTrackEligible ? "Apply for Fast-Track Entry" : "Start Your Core Trade Journey"}
              </motion.button>
              <motion.button
                className={`flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 ${
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
                          className={`w-4 h-4 rounded border-2 ${
                            answers[question.id]?.includes(option)
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

              {question.type === "scale" && (
                <div className="text-center">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"}`}>Not comfortable</span>
                    <span className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"}`}>Very comfortable</span>
                  </div>
                  <div className="flex justify-center gap-4">
                    {question.options?.map((option, index) => (
                      <motion.button
                        key={index}
                        className={`w-12 h-12 rounded-full border-2 font-bold transition-all duration-200 ${
                          answers[question.id] === option
                            ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-white"
                            : "border-gray-300 hover:border-[var(--primary-color)]"
                        } ${is4K ? "w-16 h-16 text-xl" : "text-lg"}`}
                        onClick={() => handleAnswer(question.id, option)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
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
                answers[question.id] === undefined ||
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
              {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
