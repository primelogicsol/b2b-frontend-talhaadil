"use client"
import { useEffect } from "react"
import { useGlobalContext } from "../../context/ScreenProvider"

interface ApplicationStatusProps {
  onNext: () => void
  onPrev: () => void
}

const statusStages = [
  {
    id: "document-submission",
    title: "Document Submission",
    status: "completed",
    date: "2024-01-15",
    description: "All required documents have been successfully uploaded and received.",
  },
  {
    id: "initial-review",
    title: "Initial Review",
    status: "in-progress",
    date: "2024-01-16",
    description: "Our team is currently reviewing your application and documents.",
    estimatedCompletion: "2-3 business days",
  },
  {
    id: "final-approval",
    title: "Final Approval",
    status: "pending",
    date: null,
    description: "Final approval and partnership activation.",
    estimatedCompletion: "1-2 business days after initial review",
  },
]

const requiredActions = [
  {
    id: "bank-verification",
    title: "Bank Account Verification",
    description: "Please verify your bank account details for payment processing.",
    deadline: "2024-01-20",
    priority: "high",
    completed: false,
  },
  {
    id: "tax-form",
    title: "Tax Information Form",
    description: "Complete the tax information form for compliance purposes.",
    deadline: "2024-01-22",
    priority: "medium",
    completed: true,
  },
]

const applicationHistory = [
  {
    id: "document-submission-history",
    title: "Document Submission",
    description: "All required documents received",
    timestamp: "1/21/2024, 3:00:00 PM",
    type: "completed",
  },
  {
    id: "initial-review-history",
    title: "Initial Review",
    description: "Document verification in progress",
    timestamp: "1/21/2024, 4:00:00 PM",
    type: "completed",
  },
  {
    id: "application-created",
    title: "Application Created",
    description: "Partnership application submitted successfully",
    timestamp: "1/20/2024, 2:15:00 PM",
    type: "completed",
  },
  {
    id: "profile-verification",
    title: "Profile Verification",
    description: "Business profile information verified",
    timestamp: "1/20/2024, 2:30:00 PM",
    type: "completed",
  },
]

export default function ApplicationStatus({ onNext, onPrev }: ApplicationStatusProps) {
  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const { is4K } = useGlobalContext()

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        )
      case "in-progress":
        return (
          <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      case "pending":
        return (
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm">○</span>
          </div>
        )
      default:
        return null
    }
  }

  const getHistoryIcon = (type: string) => {
    switch (type) {
      case "completed":
        return (
          <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )
      case "in-progress":
        return (
          <div className="w-6 h-6 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      default:
        return (
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">•</span>
          </div>
        )
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className={`mx-auto px-4 ${is4K ? "max-w-[2000px]" : "max-w-6xl"}`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">Application Status</h1>
        <p className="text-gray-600">Track the progress of your partnership application</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Timeline */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6">Application Timeline</h2>
            <div className="space-y-6">
              {statusStages.map((stage, index) => (
                <div key={stage.id} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    {getStatusIcon(stage.status)}
                    {index < statusStages.length - 1 && (
                      <div
                        className={`w-0.5 h-16 mt-2 ${stage.status === "completed" ? "bg-[var(--primary-color)]" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{stage.title}</h3>
                     
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{stage.description}</p>
                    {stage.estimatedCompletion && (
                      <p className="text-xs text-[var(--secondary-color)] font-medium">
                        Estimated completion: {stage.estimatedCompletion}
                      </p>
                    )}
                    <div className="mt-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          stage.status === "completed"
                            ? "bg-[var(--primary-color)] text-white"
                            : stage.status === "in-progress"
                              ? "bg-[var(--secondary-light-color)] text-[var(--secondary-color)]"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {stage.status === "completed"
                          ? "Completed"
                          : stage.status === "in-progress"
                            ? "In Progress"
                            : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Required Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6">Required Actions</h2>
            <div className="space-y-4">
              {requiredActions.map((action) => (
                <div
                  key={action.id}
                  className={`border rounded-lg p-4 ${
                    action.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-sm font-medium ${action.completed ? "text-gray-600" : "text-gray-900"}`}>
                      {action.title}
                    </h3>
                    {action.completed ? (
                      <div className="w-5 h-5 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    ) : (
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                          action.priority,
                        )}`}
                      >
                        {action.priority}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mb-2 ${action.completed ? "text-gray-500" : "text-gray-600"}`}>
                    {action.description}
                  </p>
                  {!action.completed && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Due: {new Date(action.deadline).toLocaleDateString()}
                      </span>
                      <button className="text-xs text-[var(--primary-color)] hover:underline">Complete</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-[var(--primary-color)] mb-2">Need Help?</h4>
              <p className="text-xs text-gray-600 mb-3">
                If you have questions about your application status or need assistance with required actions, our
                support team is here to help.
              </p>
              <button className="text-xs text-[var(--primary-color)] hover:underline font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application History */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6">Application History</h2>
          <div className="space-y-4">
            {applicationHistory.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col items-center">
                  {getHistoryIcon(item.type)}
                  {index < applicationHistory.length - 1 && <div className="w-0.5 h-8 mt-2 bg-gray-200" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-8 justify-end">
        <button
          onClick={onNext}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg"
        >
          <span className="hidden md:inline mr-2">Next</span>
          <span className="inline">→</span>
        </button>
      </div>
    </div>
  )
}
