"use client"
import { useState, useEffect } from "react"

interface Document {
  document_id: string
  document_type: string
  file_name: string
  status: "pending" | "verified" | "failed"
  kpi_score?: number
  remarks?: string
  extracted_data?: any
}

interface DocumentVerificationResponse {
  documents: Document[]
}

interface AdminApprovalResponse {
  status: "pending" | "rejected" | "approved"
}

interface ApplicationStatusProps {
  onNext?: () => void
  onPrev?: () => void
}

// Mock API responses
const mockDocumentVerification: DocumentVerificationResponse = {
  documents: [
    {
      document_id: "doc_001",
      document_type: "Business License",
      file_name: "business_license.pdf",
      status: "verified",
      kpi_score: 95,
      remarks: "Document verified successfully",
      extracted_data: { license_number: "BL123456", expiry_date: "2025-12-31" },
    },
    {
      document_id: "doc_002",
      document_type: "Tax Certificate",
      file_name: "tax_cert.pdf",
      status: "failed",
      kpi_score: 45,
      remarks: "Document quality is poor, text not clearly visible",
      extracted_data: null,
    },
    {
      document_id: "doc_003",
      document_type: "Bank Statement",
      file_name: "bank_statement.pdf",
      status: "verified",
      kpi_score: 88,
      remarks: "Document verified successfully",
      extracted_data: { account_number: "****1234", balance: "$50,000" },
    },
  ],
}

const mockAdminApproval: AdminApprovalResponse = {
  status: "pending",
}

export default function ApplicationStatus({ onNext, onPrev }: ApplicationStatusProps) {
  const [currentStep, setCurrentStep] = useState(2) // 1: submitted, 2: verified, 3: approved
  const [documents, setDocuments] = useState<Document[]>([])
  const [adminStatus, setAdminStatus] = useState<"pending" | "rejected" | "approved">("pending")
  const [failedDocs, setFailedDocs] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingDocs, setUploadingDocs] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setDocuments(mockDocumentVerification.documents)

      setAdminStatus(mockAdminApproval.status)

      const failed = mockDocumentVerification.documents.filter((doc) => doc.status === "failed")
      setFailedDocs(failed)

      const allDocsVerified = mockDocumentVerification.documents.every((doc) => doc.status === "verified")
      if (mockAdminApproval.status === "approved") {
        setCurrentStep(3)
      } else if (allDocsVerified) {
        setCurrentStep(2)
      } else {
        setCurrentStep(1)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  const handleResubmitDocument = async (docId: string, file?: File) => {
    if (!file) {
      const input = document.createElement("input")
      input.type = "file"
      input.accept = ".pdf,.jpg,.jpeg,.png"
      input.onchange = (e) => {
        const selectedFile = (e.target as HTMLInputElement).files?.[0]
        if (selectedFile) {
          handleResubmitDocument(docId, selectedFile)
        }
      }
      input.click()
      return
    }

    setUploadingDocs((prev) => new Set(prev).add(docId))

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const updatedDocs = documents.map((doc) =>
      doc.document_id === docId
        ? {
          ...doc,
          status: "pending" as const,
          remarks: `Document "${file.name}" resubmitted for verification`,
          file_name: file.name,
        }
        : doc,
    )
    setDocuments(updatedDocs)
    setFailedDocs(failedDocs.filter((doc) => doc.document_id !== docId))
    setUploadingDocs((prev) => {
      const newSet = new Set(prev)
      newSet.delete(docId)
      return newSet
    })
  }

  const getStepStatus = (step: number) => {
    if (step < currentStep) return "completed"
    if (step === currentStep) return "current"
    return "pending"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )
      case "current":
        return (
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      case "pending":
        return (
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full"></div>
          </div>
        )
      default:
        return null
    }
  }

  const steps = [
    {
      id: 1,
      title: "Documents Submitted",
      description: "All required documents have been uploaded",
    },
    {
      id: 2,
      title: "Documents Verified",
      description: "Documents are being verified by our system",
    },
    {
      id: 3,
      title: "Application Approved",
      description: "Final approval from admin team",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--primary-color)] font-medium">Loading application status...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-color)] mb-2 sm:mb-4">
            Application Status
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Track the progress of your partnership application</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  {getStatusIcon(getStepStatus(step.id))}
                  <div className="ml-4 sm:ml-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block w-full max-w-xs mx-4">
                    <div
                      className={`h-1 rounded-full ${getStepStatus(step.id) === "completed" ? "bg-[var(--primary-color)]" : "bg-gray-200"
                        }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6">Business Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">Tech Solutions Inc.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">Technology Services</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">John Smith</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">john.smith@techsolutions.com</p>
            </div>
          </div>
        </div>

        {/* Document Verification Status */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-4 sm:mb-6">
            Document Verification Status
          </h2>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.document_id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{doc.document_type}</h3>
                    <p className="text-sm text-gray-600">{doc.file_name}</p>
                    {doc.remarks && <p className="text-xs text-gray-500 mt-1">{doc.remarks}</p>}
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    {doc.kpi_score && (
                      <span className="text-xs sm:text-sm font-medium text-gray-600">Score: {doc.kpi_score}%</span>
                    )}
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${doc.status === "verified"
                          ? "bg-green-100 text-green-800"
                          : doc.status === "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Failed Documents - Resubmission Required */}
        {failedDocs.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-red-800 mb-4">
              Action Required: Document Resubmission
            </h2>
            <p className="text-sm text-red-700 mb-4">
              The following documents failed verification and need to be resubmitted:
            </p>
            <div className="space-y-3">
              {failedDocs.map((doc) => (
                <div key={doc.document_id} className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{doc.document_type}</h3>
                      <p className="text-sm text-red-600 mb-1">{doc.remarks}</p>
                      <p className="text-xs text-gray-500">Accepted formats: PDF, JPG, PNG (Max 10MB)</p>
                    </div>
                    <button
                      onClick={() => handleResubmitDocument(doc.document_id)}
                      disabled={uploadingDocs.has(doc.document_id)}
                      className="px-3 sm:px-4 py-2 bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center space-x-2"
                    >
                      {uploadingDocs.has(doc.document_id) ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span>Upload New File</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin Approval Status */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-4 sm:mb-6">
            Admin Approval Status
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-700 font-medium">Current Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${adminStatus === "approved"
                  ? "bg-green-100 text-green-800"
                  : adminStatus === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
            >
              {adminStatus.charAt(0).toUpperCase() + adminStatus.slice(1)}
            </span>
          </div>
          {adminStatus === "pending" && (
            <p className="text-sm text-gray-600 mt-2">
              Your application is currently under review by our admin team. You will be notified once a decision is
              made.
            </p>
          )}
        </div>

        {/* Navigation */}
        {onNext && (
          <div className="flex justify-end">
            <button
              onClick={onNext}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-lg sm:rounded-xl transition-all font-medium shadow-lg text-sm sm:text-base"
            >
              <span className="hidden sm:inline mr-2">Next</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
