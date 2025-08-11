"use client"
import { useEffect, useState } from "react"
import type React from "react"

import {
  FaBuilding,
  FaFileInvoice,
  FaUniversity,
  FaIdCard,
  FaFilePdf,
  FaFileUpload,
  FaCheckCircle,
  FaCertificate,
  FaBook,
} from "react-icons/fa"
import { FileText, Ruler, ShieldCheck } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"
import { submitDocumentToAPI } from "@/services/regitsration"
interface DocumentData {
  business_registration: File | null
  business_license: File | null
  adhaar_card: File | null
  artisan_id_card: File | null
  bank_statement: File | null
  product_catalog: File[]
  certifications: File[]
}

interface DocumentSubmissionProps {
  data?: DocumentData
  onUpdate: (data: DocumentData) => void
  onNext: () => void
  onPrev: () => void
}

const documentTypes = [
  {
    key: "business_registration" as keyof DocumentData,
    title: "Business Registration",
    description: "Valid business registration certificate",
    icon: <FaBuilding size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: false,
  },
  {
    key: "business_license" as keyof DocumentData,
    title: "Business License",
    description: "Business license certificate",
    icon: <FaFileInvoice size={32} className="text-[var(--primary-color)]" />,
    required: false,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: false,
  },
  {
    key: "adhaar_card" as keyof DocumentData,
    title: "Contact Person - Adhaar Card",
    description: "Adhaar card of the contact person",
    icon: <FaIdCard size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: false,
  },
  {
    key: "artisan_id_card" as keyof DocumentData,
    title: "Artisan ID Card",
    description: "Artisan ID card (If applicable)",
    icon: <FaCertificate size={32} className="text-[var(--primary-color)]" />,
    required: false,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: false,
  },
  {
    key: "bank_statement" as keyof DocumentData,
    title: "Bank Statement",
    description: "Upload last 3 months statement",
    icon: <FaUniversity size={32} className="text-[var(--primary-color)]" />,
    required: false,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: false,
  },
  {
    key: "product_catalog" as keyof DocumentData,
    title: "Product Catalog",
    description: "Complete product catalog with pricing",
    icon: <FaBook size={32} className="text-[var(--primary-color)]" />,
    required: false,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: true,
  },
  {
    key: "certifications" as keyof DocumentData,
    title: "Certifications",
    description: "Relevant certifications and awards",
    icon: <FaCertificate size={32} className="text-[var(--primary-color)]" />,
    required: false,
    formats: "PDF, PNG, JPEG, DOC, DOCX",
    maxSize: "50MB",
    multiple: true,
  },
]

// Placeholder API function - Replace with your actual API call

export default function DocumentSubmission({ data, onUpdate, onNext, onPrev }: DocumentSubmissionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const [documents, setDocuments] = useState<DocumentData>(
    data || {
      business_registration: null,
      business_license: null,
      adhaar_card: null,
      artisan_id_card: null,
      bank_statement: null,
      product_catalog: [],
      certifications: [],
    },
  )

  const { is4K } = useGlobalContext()
  const [draggedOver, setDraggedOver] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileUpload = (documentType: keyof DocumentData, file: File | null) => {
    const updated = { ...documents, [documentType]: file }
    setDocuments(updated)
    onUpdate(updated)
  }

  const handleRemoveSingleFile = (documentType: keyof DocumentData) => {
    const updated = { ...documents, [documentType]: null }
    setDocuments(updated)
    onUpdate(updated)
  }

  const handleAddFiles = (documentType: keyof DocumentData, filesToAdd: FileList | null) => {
    if (!filesToAdd || filesToAdd.length === 0) return

    const currentFiles = (documents[documentType] as File[]) || []
    const newFiles = Array.from(filesToAdd)
    const updated = { ...documents, [documentType]: [...currentFiles, ...newFiles] }
    setDocuments(updated)
    onUpdate(updated)
  }

  const handleRemoveMultiFile = (documentType: keyof DocumentData, indexToRemove: number) => {
    const currentFiles = (documents[documentType] as File[]) || []
    const updatedFiles = currentFiles.filter((_, index) => index !== indexToRemove)
    const updated = { ...documents, [documentType]: updatedFiles }
    setDocuments(updated)
    onUpdate(updated)
  }

  const handleDragOver = (e: React.DragEvent, key: string) => {
    e.preventDefault()
    setDraggedOver(key)
  }

  const handleDragLeave = () => setDraggedOver(null)

  const handleDrop = (e: React.DragEvent, key: keyof DocumentData) => {
    e.preventDefault()
    setDraggedOver(null)
    const files = e.dataTransfer.files
    const docType = documentTypes.find((d) => d.key === key)
    if (files && files.length > 0 && docType) {
      if (docType.multiple) {
        handleAddFiles(key, files)
      } else {
        handleFileUpload(key, files[0])
      }
    }
  }

const handleSubmitAll = async () => {
  const allRequired = documentTypes
    .filter((d) => d.required)
    .every((d) => {
      const doc = documents[d.key]
      if (d.multiple) {
        return (doc as File[]).length > 0
      }
      return doc !== null
    })

  if (!allRequired) {
    alert("Please upload all required documents before proceeding.")
    return
  }

  setIsSubmitting(true)
  try {
    const firstDocTypeConfig = documentTypes[0] // Only the first document type
    const docKey = firstDocTypeConfig.key
    const docData = documents[docKey]

    if (firstDocTypeConfig.multiple) {
      const files = docData as File[]
      if (files[0]) {
        const apiDocType = `${String(docKey)}_1`
        await submitDocumentToAPI({ document_type: apiDocType, file: files[0] })
      }
    } else {
      const file = docData as File | null
      if (file) {
        const response = await submitDocumentToAPI({ document_type: String(docKey), file })
        console.log(response.data)
      }
    }

    onNext()
  } catch (error:any) {

    console.log(error.response.data)
    console.error("Error submitting first document:", error)
  } finally {
    setIsSubmitting(false)
  }
}

  const getUploadedCount = () => {
    let count = 0
    documentTypes.forEach((d) => {
      const doc = documents[d.key]
      if (d.multiple) {
        count += (doc as File[]).length > 0 ? 1 : 0 // Count as 1 if any file is uploaded for multiple
      } else if (doc !== null) {
        count += 1
      }
    })
    return count
  }

  const FileCard = ({ documentType }: { documentType: (typeof documentTypes)[0] }) => {
    const isMultiFile = documentType.multiple
    const files = isMultiFile ? (documents[documentType.key] as File[]) : []
    const file = !isMultiFile ? (documents[documentType.key] as File | null) : null
    const uploaded = isMultiFile ? files.length > 0 : !!file
    const isDrag = draggedOver === documentType.key

    return (
      <div className="bg-white rounded-3xl overflow-hidden transition-shadow hover:shadow-xl">
        <div className={`p-6 ${uploaded ? "bg-green-50" : "bg-gray-50"}`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {documentType.icon}
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-color)]">
                  {documentType.title}
                  {documentType.required && <span className="text-[var(--secondary-color)] ml-1">*</span>}
                </h3>
                <p className="text-sm text-gray-600">{documentType.description}</p>
              </div>
            </div>
            {uploaded && <FaCheckCircle className="text-green-500 w-7 h-7" />}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Format: {documentType.formats}</span>
            <span>Max: {documentType.maxSize}</span>
          </div>
        </div>
        <div className="p-6">
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
              isDrag
                ? "border-[var(--secondary-color)] bg-[var(--secondary-light-color)]"
                : uploaded
                  ? "border-green-800 bg-green-50"
                  : "border-gray-300 hover:border-[var(--primary-color)] hover:bg-gray-50"
            }`}
            onDragOver={(e) => handleDragOver(e, documentType.key)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, documentType.key)}
          >
            <input
              type="file"
              id={documentType.key}
              hidden
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              multiple={isMultiFile}
              onChange={(e) =>
                isMultiFile
                  ? handleAddFiles(documentType.key, e.target.files)
                  : handleFileUpload(documentType.key, e.target.files?.[0] || null)
              }
            />
            <label htmlFor={documentType.key} className="cursor-pointer">
              {uploaded ? (
                <div className="space-y-3">
                  {isMultiFile ? (
                    <>
                      <FaFileUpload className="text-green-700 w-16 h-16 mx-auto" />
                      <p className="text-lg font-semibold text-green-800 mb-1">{files.length} file(s) uploaded</p>
                      <ul className="text-sm text-green-600 list-disc list-inside text-left mx-auto max-w-xs">
                        {files.map((f, index) => (
                          <li key={f.name + index} className="flex justify-between items-center">
                            <span>
                              {f.name} ({(f.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRemoveMultiFile(documentType.key, index)
                              }}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-[var(--secondary-color)] mt-3 font-medium">
                        Click to add more or drag new files
                      </p>
                    </>
                  ) : (
                    <>
                      <FaFilePdf className="text-green-700 w-16 h-16 mx-auto" />
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-lg font-semibold text-green-800 mb-1">{file?.name}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemoveSingleFile(documentType.key)
                          }}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-green-600">
                        {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : ""}
                      </p>
                      <p className="text-sm text-[var(--secondary-color)] mt-3 font-medium">
                        Click to replace or drag new file
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <FaFileUpload className="text-gray-400 w-16 h-16 mx-auto" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {isDrag ? "Drop your file here" : "Upload Document"}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">Click to browse or drag and drop your file</p>
                  <div className="inline-flex items-center px-4 py-2 bg-[var(--primary-color)] text-white rounded-xl text-sm font-medium hover:bg-[var(--primary-hover-color)]">
                    Choose File
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`mx-auto px-6 ${is4K ? "max-w-[2000px]" : "max-w-7xl "}`}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <FaFileUpload className="text-white w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Document Submission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload the required documents to complete your partnership application. All documents will be securely stored
          and reviewed by our team.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-3xl p-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)]">Upload Progress</h2>
          <div className="text-right">
            <p className="text-3xl font-bold text-[var(--secondary-color)]">
              {getUploadedCount()}/{documentTypes.length}
            </p>
            <p className="text-sm text-gray-600">Documents Uploaded</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="h-3 rounded-full transition-all duration-500"
            style={{
              width: `${(getUploadedCount() / documentTypes.length) * 100}%`,
              background: "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
            }}
          ></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {documentTypes.map((d) => (
            <div key={d.key} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
              {d.multiple ? (
                (documents[d.key] as File[]).length > 0 ? (
                  <FaCheckCircle className="text-green-500 w-5 h-5" />
                ) : (
                  <span className="text-gray-500 text-xs">○</span>
                )
              ) : documents[d.key] ? (
                <FaCheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <span className="text-gray-500 text-xs">○</span>
              )}
              <span className="text-sm font-medium text-gray-700">{d.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {documentTypes.map((doc) => (
          <FileCard key={doc.key} documentType={doc} />
        ))}
      </div>

      {/* Guidelines */}
      <div className="bg-[var(--secondary-light-color)] rounded-3xl p-8 mb-12 border border-blue-100">
        <div className="flex items-start space-x-4 flex-col sm:flex-row">
          <div className="w-12 h-12 bg-[var(--primary-light-text-color)] rounded-full flex items-center justify-center flex-shrink-0">
            <FaFileInvoice className="text-[var(--primary-header-color)] w-6 h-6 mb-2" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">
              Document Upload Request & Catalog Interface Guideline Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Document Accepted Formats</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• PDF (Preferred)</li>
                  <li>• PNG, JPEG</li>
                  <li>• DOC, DOCX</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">File Specifications</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Size: 1MB to 50MB</li>
                  <li>• Image Resolution: 300 DPI+</li>
                  <li>• Clear, Uncorrupted Files</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">File Naming Convention</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• CompanyRegistration.pdf</li>
                  <li>• ProductCatalog.docx</li>
                  <li>• Adhaar.png</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaBook className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Catalog Content</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Introduction</li>
                  <li>• Product Description & Price</li>
                  <li>• Certifications (if any)</li>
                  <li>• Business & Contact Info</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Catalog Layout & Design</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Page Size: A4</li>
                  <li>• Orientation: Portrait</li>
                  <li>• Font Size: 12 pt</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Catalog Standard Margins</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Top: 1 inch (25.4 mm)</li>
                  <li>• Bottom: 1 inch (25.4 mm)</li>
                  <li>• Left/Right: 1 inch (25.4 mm)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-12">
        <button
          onClick={onPrev}
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          <span className="inline">←</span>
          <span className="hidden md:inline ml-2">Prev</span>
        </button>
        <button
          onClick={handleSubmitAll}
          disabled={
            isSubmitting ||
            !documentTypes
              .filter((d) => d.required)
              .every((d) => {
                const doc = documents[d.key]
                if (d.multiple) {
                  return (doc as File[]).length > 0
                }
                return doc !== null
              })
          }
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {isSubmitting ? (
            <>
            Submitting...
              
              
            </>
          ) : (
            <>
              <span className="hidden md:inline mr-2">Next</span>
              <span className="inline">→</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
