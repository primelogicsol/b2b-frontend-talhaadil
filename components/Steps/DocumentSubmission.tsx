"use client"

import type React from "react"

import { useState } from "react"

interface DocumentData {
  businessLicense: File | null
  taxCertificate: File | null
  bankStatement: File | null
  identityProof: File | null
}

interface DocumentSubmissionProps {
  data?: DocumentData
  onUpdate: (data: DocumentData) => void
  onNext: () => void
  onPrev: () => void
}

const documentTypes = [
  {
    key: "businessLicense" as keyof DocumentData,
    title: "Business License",
    description: "Valid business registration certificate",
    icon: "🏢",
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "taxCertificate" as keyof DocumentData,
    title: "Tax Certificate",
    description: "Tax identification certificate",
    icon: "📋",
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "bankStatement" as keyof DocumentData,
    title: "Bank Statement",
    description: "Recent bank statement (last 3 months)",
    icon: "🏦",
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "identityProof" as keyof DocumentData,
    title: "Identity Proof",
    description: "Government-issued ID or passport",
    icon: "🆔",
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
]

export default function DocumentSubmission({ data, onUpdate, onNext, onPrev }: DocumentSubmissionProps) {
  const [documents, setDocuments] = useState<DocumentData>(
    data || {
      businessLicense: null,
      taxCertificate: null,
      bankStatement: null,
      identityProof: null,
    },
  )
  const [draggedOver, setDraggedOver] = useState<string | null>(null)

  const handleFileUpload = (documentType: keyof DocumentData, file: File | null) => {
    const updatedDocuments = { ...documents, [documentType]: file }
    setDocuments(updatedDocuments)
    onUpdate(updatedDocuments)
  }

  const handleDragOver = (e: React.DragEvent, documentType: string) => {
    e.preventDefault()
    setDraggedOver(documentType)
  }

  const handleDragLeave = () => {
    setDraggedOver(null)
  }

  const handleDrop = (e: React.DragEvent, documentType: keyof DocumentData) => {
    e.preventDefault()
    setDraggedOver(null)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(documentType, files[0])
    }
  }

  const handleNext = () => {
    const requiredDocs = documentTypes.filter((doc) => doc.required)
    const allRequiredUploaded = requiredDocs.every((doc) => documents[doc.key] !== null)

    if (allRequiredUploaded) {
      onNext()
    }
  }

  const getUploadedCount = () => {
    return Object.values(documents).filter((doc) => doc !== null).length
  }

  const FileUploadCard = ({ documentType }: { documentType: (typeof documentTypes)[0] }) => {
    const file = documents[documentType.key]
    const isUploaded = file !== null
    const isDragged = draggedOver === documentType.key

    return (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className={`p-6 ${isUploaded ? "bg-gradient-to-r from-green-50 to-emerald-50" : "bg-gray-50"}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{documentType.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-color)]">
                  {documentType.title}
                  {documentType.required && <span className="text-[var(--secondary-color)] ml-1">*</span>}
                </h3>
                <p className="text-sm text-gray-600">{documentType.description}</p>
              </div>
            </div>
            {isUploaded && (
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">✓</span>
              </div>
            )}
          </div>

          {/* File Info */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>Format: {documentType.formats}</span>
            <span>Max: {documentType.maxSize}</span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="p-6">
          <div
            className={`border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
              isDragged
                ? "border-[var(--secondary-color)] bg-[var(--secondary-light-color)]"
                : isUploaded
                  ? "border-green-300 bg-green-50"
                  : "border-gray-300 hover:border-[var(--primary-color)] hover:bg-gray-50"
            }`}
            onDragOver={(e) => handleDragOver(e, documentType.key)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, documentType.key)}
          >
            <input
              type="file"
              id={documentType.key}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0] || null
                handleFileUpload(documentType.key, selectedFile)
              }}
            />
            <label htmlFor={documentType.key} className="cursor-pointer block">
              {isUploaded ? (
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-green-600 text-2xl">📄</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-800 mb-1">{file.name}</p>
                    <p className="text-sm text-green-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <p className="text-sm text-[var(--secondary-color)] mt-3 font-medium">
                      Click to replace or drag new file
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-2xl">📁</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {isDragged ? "Drop your file here" : "Upload Document"}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">Click to browse or drag and drop your file</p>
                    <div className="inline-flex items-center px-4 py-2 bg-[var(--primary-color)] text-white rounded-xl text-sm font-medium hover:bg-[var(--primary-hover-color)] transition-colors">
                      Choose File
                    </div>
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
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <span className="text-2xl text-white">📋</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Document Submission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload the required documents to complete your partnership application. All documents will be securely stored
          and reviewed by our team.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
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
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-3 rounded-full transition-all duration-500"
            style={{ width: `${(getUploadedCount() / documentTypes.length) * 100}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {documentTypes.map((doc) => (
            <div key={doc.key} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  documents[doc.key] ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {documents[doc.key] ? (
                  <span className="text-white text-xs">✓</span>
                ) : (
                  <span className="text-gray-500 text-xs">○</span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700">{doc.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {documentTypes.map((documentType) => (
          <FileUploadCard key={documentType.key} documentType={documentType} />
        ))}
      </div>

      {/* Guidelines */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 border border-blue-100">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 text-xl">💡</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">Upload Guidelines & Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">✅ Accepted Formats</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• PDF documents (preferred)</li>
                  <li>• JPG/JPEG images</li>
                  <li>• PNG images</li>
                  <li>• DOC/DOCX files</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">📏 Requirements</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Maximum file size: 10MB</li>
                  <li>• Clear, readable documents</li>
                  <li>• Recent documents (within 6 months)</li>
                  <li>• Official letterhead when applicable</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">🔒 Security</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• All files are encrypted</li>
                  <li>• Secure cloud storage</li>
                  <li>• GDPR compliant</li>
                  <li>• Automatic virus scanning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!documentTypes.filter((doc) => doc.required).every((doc) => documents[doc.key] !== null)}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Continue to Agreement →
        </button>
      </div>
    </div>
  )
}
