"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { mockUsers, type User } from "@/lib/data"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Building2,
  FileText,
  Download,
  Eye,
  MapPin,
  Globe,
  DollarSign,
  CreditCard,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ShoppingCart,
  Store,
} from "lucide-react"

export default function UserDetailPage() {
  const params = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const userId = Number.parseInt(params.id as string)
    const foundUser = mockUsers.find((u) => u.id === userId)
    setUser(foundUser || null)
  }, [params.id])

  if (!user) {
    return (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">!</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">User not found</h1>
          <p className="text-slate-600 mb-6">The user you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/admin/users"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Users
          </Link>
        </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "inactive":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getKPIColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const TypeIcon = user.type === "buyer" ? ShoppingCart : Store
  const typeColor = user.type === "buyer" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"

  return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/users"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Users
            </Link>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-bold text-slate-900">{user.name}</h1>
                <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${typeColor}`}>
                  <TypeIcon className="w-4 h-4 mr-1" />
                  {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {user.phone}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-4">
              <div>
                <div className="text-sm text-slate-500">Status</div>
                <span
                  className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(user.status)}`}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </div>
              <div>
                <div className="text-sm text-slate-500">KPI Score</div>
                <div className={`text-3xl font-bold ${getKPIColor(user.kpiScore)}`}>{user.kpiScore}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Business Information</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Business Name</label>
                  <p className="text-sm text-slate-900 font-medium">{user.businessInfo.businessName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Legal Structure</label>
                  <p className="text-sm text-slate-900">{user.businessInfo.businessLegalStructure}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Business Type</label>
                  <p className="text-sm text-slate-900">{user.businessInfo.businessType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Established Year</label>
                  <p className="text-sm text-slate-900">{user.businessInfo.businessEstablishedYear}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Registration Number</label>
                <p className="text-sm text-slate-900 font-mono">{user.businessInfo.businessRegistrationNumber}</p>
              </div>
              {user.businessInfo.brandAffiliations && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Brand Affiliations</label>
                  <p className="text-sm text-slate-900">{user.businessInfo.brandAffiliations}</p>
                </div>
              )}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Address</span>
                </div>
                <p className="text-sm text-slate-900">
                  {user.businessInfo.streetAddress1}
                  {user.businessInfo.streetAddress2 && `, ${user.businessInfo.streetAddress2}`}
                  <br />
                  {user.businessInfo.city}, {user.businessInfo.stateRegion} {user.businessInfo.postalCode}
                  <br />
                  {user.businessInfo.country}
                </p>
              </div>
              {user.businessInfo.website && (
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <a
                    href={user.businessInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {user.businessInfo.website}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-900">
                  Annual Turnover: {user.businessInfo.annualTurnover}
                </span>
              </div>
            </div>
          </div>

          {/* Business Contact */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Business Contact</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600">Contact Person</label>
                <p className="text-sm text-slate-900 font-medium">{user.businessContact.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Email</label>
                  <p className="text-sm text-slate-900">{user.businessContact.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Phone</label>
                  <p className="text-sm text-slate-900">{user.businessContact.phone}</p>
                </div>
              </div>
              {user.businessContact.whatsapp && (
                <div>
                  <label className="text-sm font-medium text-slate-600">WhatsApp</label>
                  <p className="text-sm text-slate-900">{user.businessContact.whatsapp}</p>
                </div>
              )}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Contact Address</span>
                </div>
                <p className="text-sm text-slate-900">
                  {user.businessContact.district}, {user.businessContact.pinCode}
                  <br />
                  {user.businessContact.state}, {user.businessContact.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Assessment */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Business Credibility Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.entries(user.credibilityAssessment).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm font-medium text-slate-600 mb-2">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </div>
                <div
                  className={`text-2xl font-bold ${value >= 8 ? "text-green-600" : value >= 6 ? "text-yellow-600" : "text-red-600"}`}
                >
                  {value}/10
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${value >= 8 ? "bg-green-600" : value >= 6 ? "bg-yellow-600" : "bg-red-600"}`}
                    style={{ width: `${value * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Banking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Certifications</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(user.certifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  {value ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Banking Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Banking Information</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Bank Name</label>
                  <p className="text-sm text-slate-900">{user.bankingInfo.bankName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Account Name</label>
                  <p className="text-sm text-slate-900">{user.bankingInfo.accountName}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Account Type</label>
                  <p className="text-sm text-slate-900">{user.bankingInfo.accountType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Account Number</label>
                  <p className="text-sm text-slate-900 font-mono">****{user.bankingInfo.accountNumber.slice(-4)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">IFSC Code</label>
                  <p className="text-sm text-slate-900 font-mono">{user.bankingInfo.ifscCode}</p>
                </div>
                {user.bankingInfo.swiftBisCode && (
                  <div>
                    <label className="text-sm font-medium text-slate-600">SWIFT/BIS Code</label>
                    <p className="text-sm text-slate-900 font-mono">{user.bankingInfo.swiftBisCode}</p>
                  </div>
                )}
              </div>
              {user.bankingInfo.ibanCode && (
                <div>
                  <label className="text-sm font-medium text-slate-600">IBAN Code</label>
                  <p className="text-sm text-slate-900 font-mono">{user.bankingInfo.ibanCode}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tax & Compliance Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tax Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Tax & Registration</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600">GST Number</label>
                <p className="text-sm text-slate-900 font-mono">{user.businessInfo.gstNumber}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Tax Identification Number</label>
                <p className="text-sm text-slate-900 font-mono">{user.businessInfo.taxIdentificationNumber}</p>
              </div>
              {user.businessInfo.importExportCode && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Import Export Code</label>
                  <p className="text-sm text-slate-900 font-mono">{user.businessInfo.importExportCode}</p>
                </div>
              )}
            </div>
          </div>

          {/* Compliance Issues */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Compliance Issues</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(user.complianceIssues).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  {value ? (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Documents ({user.documents.length})</h2>
            <p className="text-sm text-slate-500 mt-1">All files uploaded by this user</p>
          </div>

          {user.documents.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No documents uploaded</h3>
              <p className="text-slate-600">This user hasn't uploaded any documents yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {user.documents.map((document) => (
                <div key={document.id} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{document.title}</h3>
                        <p className="text-sm text-slate-500">{document.filename}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-slate-400">
                          <span>Size: {document.size}</span>
                          <span>Type: {document.type}</span>
                          <span>Uploaded: {new Date(document.uploadDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-600 hover:text-green-800 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  )
}
