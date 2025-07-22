"use client";

import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaFileInvoice,
  FaUniversity,
  FaIdCard,
  FaFilePdf,
  FaFileUpload,
  FaCheckCircle,
} from "react-icons/fa";
import { FileText, Ruler, ShieldCheck } from "lucide-react"; // Retain others as is

interface DocumentData {
  businessLicense: File | null;
  taxCertificate: File | null;
  bankStatement: File | null;
  identityProof: File | null;
}

interface DocumentSubmissionProps {
  data?: DocumentData;
  onUpdate: (data: DocumentData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const documentTypes = [
  {
    key: "businessLicense" as keyof DocumentData,
    title: "Business License",
    description: "Valid business registration certificate",
    icon: <FaBuilding size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "taxCertificate" as keyof DocumentData,
    title: "Tax Certificate",
    description: "Tax identification certificate",
    icon: <FaFileInvoice size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "bankStatement" as keyof DocumentData,
    title: "Bank Statement",
    description: "Recent bank statement (last 3 months)",
    icon: <FaUniversity size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
  {
    key: "identityProof" as keyof DocumentData,
    title: "Identity Proof",
    description: "Government-issued ID or passport",
    icon: <FaIdCard size={32} className="text-[var(--primary-color)]" />,
    required: true,
    formats: "PDF, JPG, PNG",
    maxSize: "10MB",
  },
];

export default function DocumentSubmission({ data, onUpdate, onNext, onPrev }: DocumentSubmissionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [documents, setDocuments] = useState<DocumentData>(
    data || {
      businessLicense: null,
      taxCertificate: null,
      bankStatement: null,
      identityProof: null,
    }
  );
  const [draggedOver, setDraggedOver] = useState<string | null>(null);

  const handleFileUpload = (documentType: keyof DocumentData, file: File | null) => {
    const updated = { ...documents, [documentType]: file };
    setDocuments(updated);
    onUpdate(updated);
  };

  const handleDragOver = (e: React.DragEvent, key: string) => {
    e.preventDefault();
    setDraggedOver(key);
  };
  const handleDragLeave = () => setDraggedOver(null);
  const handleDrop = (e: React.DragEvent, key: keyof DocumentData) => {
    e.preventDefault();
    setDraggedOver(null);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(key, file);
  };

  const handleNext = () => {
    const allRequired = documentTypes
      .filter((d) => d.required)
      .every((d) => documents[d.key] !== null);
    if (allRequired) onNext();
  };

  const getUploadedCount = () => Object.values(documents).filter(Boolean).length;

  const FileCard = ({ documentType }: { documentType: typeof documentTypes[0] }) => {
    const file = documents[documentType.key];
    const uploaded = !!file;
    const isDrag = draggedOver === documentType.key;
    return (
      <div className="bg-white rounded-3xl overflow-hidden transition-shadow hover:shadow-xl">
        <div className={`p-6 ${uploaded ? "bg-green-50" : "bg-gray-50"}`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {documentType.icon}
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-color)]">
                  {documentType.title}
                  {documentType.required && (
                    <span className="text-[var(--secondary-color)] ml-1">*</span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">{documentType.description}</p>
              </div>
            </div>
            {uploaded && (
              <FaCheckCircle className="text-green-500 w-7 h-7" />
            )}
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
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                handleFileUpload(
                  documentType.key,
                  e.target.files?.[0] || null
                )
              }
            />
            <label htmlFor={documentType.key} className="cursor-pointer">
              {uploaded ? (
                <div className="space-y-3">
                  <FaFilePdf className="text-green-700 w-16 h-16 mx-auto" />
                  <p className="text-lg font-semibold text-green-800 mb-1">
                    {file.name}
                  </p>
                  <p className="text-sm text-green-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <p className="text-sm text-[var(--secondary-color)] mt-3 font-medium">
                    Click to replace or drag new file
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <FaFileUpload className="text-gray-400 w-16 h-16 mx-auto" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {isDrag ? "Drop your file here" : "Upload Document"}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    Click to browse or drag and drop your file
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-[var(--primary-color)] text-white rounded-xl text-sm font-medium hover:bg-[var(--primary-hover-color)]">
                    Choose File
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <FaFileUpload className="text-white w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
          Document Submission
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload the required documents to complete your partnership application.
          All documents will be securely stored and reviewed by our team.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-3xl p-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)]">
            Upload Progress
          </h2>
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
              {documents[d.key] ? (
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
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[var(--primary-light-text-color)] rounded-full flex items-center justify-center flex-shrink-0">
            <FaFileInvoice className="text-[var(--primary-header-color)] w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">
              Upload Guidelines & Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Accepted Formats</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• PDF (preferred)</li>
                  <li>• JPG/JPEG</li>
                  <li>• PNG</li>
                  <li>• DOC/DOCX</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Requirements</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Max file size: 10MB</li>
                  <li>• Clear, readable scans</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary-color)]" />
                  <h4 className="font-semibold text-gray-800">Security</h4>
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Files are encrypted & scanned</li>
                  <li>• GDPR compliant</li>
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
          className="px-8 py-4 border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!documentTypes.filter((d) => d.required).every((d) => documents[d.key])}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
