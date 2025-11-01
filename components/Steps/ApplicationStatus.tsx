"use client"
import { checkRegistrationStatus, getDocumentProgress, getUserInfo, reuploadDocument } from "@/services/regitsration"
import { useState, useEffect } from "react"
import { getRejectedUser, getUserRegistrationSelected, postFirst } from "@/services/user"
import Cookies from "js-cookie"
import { get } from "http"

interface Document {
  id: number
  document_type: string
  status: "FAIL" | "PASS" | "PENDING"
  file_name?: string
  remarks?: string
}

interface BusinessInfo {
  businessName: string
  businessType: string
  contactPerson: string
  email: string
}

interface DocumentProgressResponse {
  progress: string
  uploaded_documents: Document[]
  missing_documents: string[]
}

interface RegistrationStatusResponse {
  is_registered: "PENDING" | "APPROVED" | "REJECTED"
}

interface ApplicationStatusProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function ApplicationStatus({ onNext, onPrev }: ApplicationStatusProps) {
  const [getLoading,setGetLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(2)
  const [documents, setDocuments] = useState<Document[]>([])
  const [adminStatus, setAdminStatus] = useState<"PENDING" | "APPROVED" | "REJECTED">("PENDING")
  const [failedDocs, setFailedDocs] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<BusinessInfo | null>(null)
  const [uploadingDocs, setUploadingDocs] = useState<Set<number>>(new Set())
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await getUserInfo()
        const data = response.data
        console.log(data)

        setInfo({
          businessName: data.business_name,
          businessType: data.business_type,
          contactPerson: data.contact_phone,
          email: data.contact_email,
        })
      } catch (error) {
        console.error("Failed to fetch business info:", error)
      }
    }

    loadInfo()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Fetch document progress
        const docResponse = await getDocumentProgress()

        if (docResponse.status < 200 || docResponse.status >= 300) {
          throw new Error('Failed to fetch document progress')
        }

        const docData: DocumentProgressResponse = {
          ...docResponse.data,
          uploaded_documents: docResponse.data.uploaded_documents.map((doc: any) => ({
            ...doc,
            status: doc.status.toUpperCase(),
          })),
        }
        setDocuments(docData.uploaded_documents)


        // Fetch registration status
        const regResponse = await checkRegistrationStatus()

        if (regResponse.status < 200 || regResponse.status >= 300) {
          throw new Error('Failed to fetch registration status')
        }

        const regData: RegistrationStatusResponse = regResponse.data
        setAdminStatus(regData.is_registered)

        // Set failed (REJECTED) documents
        const failed = docData.uploaded_documents.filter((doc) => doc.status === "FAIL")
        setFailedDocs(failed)

        // Determine current step
        const allDocsVerified = docData.uploaded_documents.every((doc) => doc.status === "PASS")
        if (regData.is_registered === "APPROVED") {
          setCurrentStep(4)
        } else if (allDocsVerified) {
          setCurrentStep(3) // Changed from 2 to 3 to show step 3 as loading when step 2 is done
        } else {
          setCurrentStep(1)
        }
      } catch (err) {
        setError('Failed to load application status. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  const whenClickNext = async () => {
    setGetLoading(true)
    if (onNext) {
      if (adminStatus === "REJECTED") {
        getRejectedUser(Number(Cookies.get("user_id"))).then((res) => {
          console.log(res)
        })
        Cookies.set("is_registered", "PENDING");

        Cookies.set("registration_step", "0");

        window.location.href = '/'
          setGetLoading(false)

        return
      }
      const response = await postFirst()
      Cookies.set("is_registered", "APPROVED");
      Cookies.set("registration_step", "6");
      console.log(response)
      setGetLoading(false)
      onNext()
    }
  }

  const handleResubmitDocument = async (docId: number, file: File) => {
    try {
      // Step 1: Upload file to your Cloudinary API
      console.log(docId)
      const uploadForm = new FormData()
      uploadForm.append("file", file)
      uploadForm.append(
        "doc_type",
        file.name.split(".").pop()?.toLowerCase() || ""
      )

      const uploadResponse = await fetch("/api/upload-pdf", {
        method: "POST",
        body: uploadForm,
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file to Cloudinary")
      }

      const { url } = await uploadResponse.json()

      // Step 2: Submit to backend with both file_url and raw file
      const formData = new FormData()
      formData.append("document_id", docId.toString())
      formData.append(
        "document_type",
        documents.find((doc) => doc.id === docId)?.document_type || ""
      )
      formData.append("file_url", url) // Cloudinary URL
      formData.append("file", file)    // Raw file too

      const response = await reuploadDocument(formData)

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to reupload document")
      }

      setDocuments((prev) =>
        prev.map((doc) =>
          doc.id === docId
            ? {
              ...doc,
              status: "PENDING" as const,
              remarks: `Document "${file.name}" resubmitted for verification`,
              file_name: file.name,
            }
            : doc
        )
      )
      setFailedDocs((prev) => prev.filter((doc) => doc.id !== docId))
    } catch (err) {
      setError("Failed to reupload document. Please try again.")
      console.error(err)
    } finally {
      setUploadingDocs((prev) => {
        const newSet = new Set(prev)
        newSet.delete(docId)
        return newSet
      })
    }
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
      case "rejected":
        return (
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 8.586L13.95 4.636a1 1 0 111.414 1.414L11.414 10l3.95 3.95a1 1 0 01-1.414 1.414L10 11.414l-3.95 3.95a1 1 0 01-1.414-1.414L8.586 10 4.636 6.05a1 1 0 111.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
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

  // Determine if Next button should be enabled
  const allDocsVerified = documents.every((doc) => doc.status === "PASS")
  const canProceed = adminStatus === "APPROVED" || adminStatus === "REJECTED";


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

                  {adminStatus === "REJECTED" && index === steps.length - 1
                    ? getStatusIcon("rejected")
                    : getStatusIcon(getStepStatus(step.id))}

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
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6">
            Business Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">
                {info?.businessName}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">
                {info?.businessType}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">
                {info?.contactPerson}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <p className="text-base text-gray-900 bg-gray-50 px-4 py-3 rounded-lg">
                {info?.email}
              </p>
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
              <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900"> {doc.document_type
                      .split("_")
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}</h3>

                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${doc.status === "PASS"
                        ? "bg-green-100 text-green-800"
                        : doc.status === "FAIL"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1).toLowerCase()}
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
              The following documents were rejected and need to be resubmitted:
            </p>
            <div className="space-y-3">
              {failedDocs.map((doc) => (
                <div key={doc.id} className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{doc.document_type
                        .split("_")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}</h3>
                      <p className="text-sm text-red-600 mb-1">{doc.remarks || "Document rejected. Please reupload."}</p>
                      <p className="text-xs text-gray-500">Accepted formats: PDF, JPG, PNG (Max 10MB)</p>
                    </div>
                    <button
                      onClick={() => {
                        const input = document.createElement('input')
                        input.type = 'file'
                        input.accept = '.pdf,.jpg,.jpeg,.png'
                        input.onchange = (e: Event) => {
                          const target = e.target as HTMLInputElement
                          if (target.files && target.files[0]) {
                            setUploadingDocs(prev => new Set(prev).add(doc.id))
                            handleResubmitDocument(doc.id, target.files[0])
                          }
                        }
                        input.click()
                      }}
                      disabled={uploadingDocs.has(doc.id)}
                      className="px-3 sm:px-4 py-2 bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center space-x-2"
                    >
                      {uploadingDocs.has(doc.id) ? (
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
              className={`px-3 py-1 rounded-full text-sm font-medium ${adminStatus === "APPROVED"
                ? "bg-green-100 text-green-800"
                : adminStatus === "REJECTED"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
                }`}
            >
              {adminStatus.charAt(0).toUpperCase() + adminStatus.slice(1).toLowerCase()}
            </span>
          </div>
          {adminStatus === "PENDING" && (
            <p className="text-sm text-gray-600 mt-2">
              Your application is currently under review by our admin team. You will be notified once a decision is made.
            </p>
          )}
          {adminStatus === "REJECTED" && (
            <p className="text-sm text-red-600 mt-2">
              Your application was not approved. Please try registering again.
            </p>
          )}
        </div>

        {/* Navigation */}
        {(onNext || onPrev) && (
          <div className="flex justify-end">

            {onNext && (
              <button
                onClick={whenClickNext}
                disabled={!canProceed}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all font-medium shadow-lg text-sm sm:text-base ${canProceed
                  ? "bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                <span className="hidden sm:inline mr-2">{getLoading ? "Submitting..." : "Next"}</span>
                <span className="inline md:hidden">{getLoading ? "Submitting..." : ""}</span>
                <span>→</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}