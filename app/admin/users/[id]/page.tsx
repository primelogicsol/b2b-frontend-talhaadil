"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Building2,
  MapPin,
  Globe,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle,
  Store,
} from "lucide-react"
import { getUserInfo } from "@/services/admin"

interface RegistrationInfo {
  business_name: string
  business_type: string
  year_established: number
  website: string
  annual_turnover: string
  city: string
  state_region: string
  country: string
  contact_person_name: string
  contact_email: string
  contact_phone: string
  certifications: string[]
  material_standard: number
  quality_level: number
  sustainability_level: number
  service_level: number
  standards_level: number
  ethics_level: number
  kyc_challenges: boolean
  gst_compliance_issues: boolean
  fema_payment_issues: boolean
  fraud_cybersecurity_issues: boolean
  regulatory_actions: boolean
}

export default function RegistrationInfoPage() {
  const params = useParams()
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRegistrationInfo = async () => {
      try {
        const userId = Array.isArray(params.id) ? params.id[0] : params.id
        if (!userId || typeof userId !== "string") {
          throw new Error("Invalid user ID")
        }
        const response = await getUserInfo(userId)
        console.log(response)
        setRegistrationInfo(response.data)
      } catch (err) {~
        setError(err instanceof Error ? err.message : "An error occurred")
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
       console.log('hello')
      fetchRegistrationInfo()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !registrationInfo) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">!</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Registration Info Not Found</h1>
        <p className="text-slate-600 mb-6">
          {error || "The registration information you're looking for doesn't exist."}
        </p>
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

  const getScoreColor = (score: number) => {
    if (score >= 4) return "text-green-600"
    if (score >= 3) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBarColor = (score: number) => {
    if (score >= 4) return "bg-green-600"
    if (score >= 3) return "bg-yellow-600"
    return "bg-red-600"
  }

  const credibilityScores = {
    "Material Standard": registrationInfo.material_standard,
    "Quality Level": registrationInfo.quality_level,
    Sustainability: registrationInfo.sustainability_level,
    "Service Level": registrationInfo.service_level,
    "Standards Level": registrationInfo.standards_level,
    "Ethics Level": registrationInfo.ethics_level,
  }

  const complianceIssues = {
    "KYC Challenges": registrationInfo.kyc_challenges,
    "GST Compliance Issues": registrationInfo.gst_compliance_issues,
    "FEMA Payment Issues": registrationInfo.fema_payment_issues,
    "Fraud/Cybersecurity Issues": registrationInfo.fraud_cybersecurity_issues,
    "Regulatory Actions": registrationInfo.regulatory_actions,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <h1 className="text-4xl font-bold text-slate-900">{registrationInfo.business_name}</h1>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">
                  <Store className="w-4 h-4 mr-1" />
                  {registrationInfo.business_type.charAt(0).toUpperCase() + registrationInfo.business_type.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {registrationInfo.contact_email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {registrationInfo.contact_phone}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Established {registrationInfo.year_established}
                </div>
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
                  <p className="text-sm text-slate-900 font-medium">{registrationInfo.business_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Business Type</label>
                  <p className="text-sm text-slate-900">{registrationInfo.business_type}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Year Established</label>
                  <p className="text-sm text-slate-900">{registrationInfo.year_established}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Annual Turnover</label>
                  <p className="text-sm text-slate-900">{registrationInfo.annual_turnover}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Location</span>
                </div>
                <p className="text-sm text-slate-900">
                  {registrationInfo.city}, {registrationInfo.state_region}
                  <br />
                  {registrationInfo.country}
                </p>
              </div>
              {registrationInfo.website && (
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <a
                    href={registrationInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {registrationInfo.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600">Contact Person</label>
                <p className="text-sm text-slate-900 font-medium">{registrationInfo.contact_person_name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Email</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Phone</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_phone}</p>
                </div>
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
            <h2 className="text-xl font-bold text-slate-900">Credibility Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {Object.entries(credibilityScores).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm font-medium text-slate-600 mb-2">{key}</div>
                <div className={`text-2xl font-bold ${getScoreColor(value)}`}>{value}/5</div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${getScoreBarColor(value)}`}
                    style={{ width: `${(value / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Compliance */}
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
              {registrationInfo.certifications.map((certification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{certification}</span>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Issues */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Compliance Status</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(complianceIssues).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{key}</span>
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
      </div>
    </div>
  )
}
