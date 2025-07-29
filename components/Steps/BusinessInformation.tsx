"use client"

import { useEffect, useState } from "react"
import { Building2, Award, CreditCard, AlertTriangle, Star } from "lucide-react"

interface BusinessInformationProps {
  data?: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrev: () => void
}

export default function BusinessInformation({ data, onUpdate, onNext, onPrev }: BusinessInformationProps) {
  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const [formData, setFormData] = useState(
    data || {
      id: 0,
      name: "",
      email: "",
      phone: "",
      kpiScore: 0,
      documents: [],
      joinDate: new Date().toISOString(),
      status: "pending",
      type: "vendor",
      department: "",
      businessInfo: {
        businessName: "",
        businessLegalStructure: "",
        businessType: "",
        businessEstablishedYear: 0,
        businessRegistrationNumber: "",
        brandAffiliations: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        stateRegion: "",
        country: "",
        postalCode: "",
        website: "",
        annualTurnover: "",
        gstNumber: "",
        taxIdentificationNumber: "",
        importExportCode: "",
      },
      businessContact: {
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        district: "",
        pinCode: "",
        state: "",
        country: "",
      },
      credibilityAssessment: {
        materialStandard: 5,
        qualityLevel: 5,
        sustainabilityLevel: 5,
        serviceLevel: 5,
        standardsLevel: 5,
      },
      certifications: {
        seekingAuthenticity: false,
        giCertification: false,
        handloomMark: false,
        craftMark: false,
        indiaHandmade: false,
        qualityCouncil: false,
        exportCouncil: false,
        blockChain: false,
      },
      bankingInfo: {
        bankName: "",
        accountName: "",
        accountType: "",
        accountNumber: "",
        ifscCode: "",
        swiftBisCode: "",
        ibanCode: "",
      },
      complianceIssues: {
        kycChallenges: false,
        gstComplianceIssues: false,
        femaPaymentDifficulties: false,
        digitalBankingImpact: false,
        fraudCybersecurityIssues: false,
        paymentGatewayChallenges: false,
        accountActivityIssues: false,
        regulatoryActions: false,
      },
    },
  )

  // Handler for basic user info
  const handleUserInfoChange = (field: string, value: string) => {
    const updatedData = {
      ...formData,
      [field]: value,
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for business info
  const handleBusinessInfoChange = (field: string, value: string | number) => {
    const updatedData = {
      ...formData,
      businessInfo: {
        ...formData.businessInfo,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for business contact
  const handleBusinessContactChange = (field: string, value: string) => {
    const updatedData = {
      ...formData,
      businessContact: {
        ...formData.businessContact,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for credibility assessment
  const handleCredibilityChange = (field: string, value: number) => {
    const updatedData = {
      ...formData,
      credibilityAssessment: {
        ...formData.credibilityAssessment,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for certifications
  const handleCertificationChange = (field: string, value: boolean) => {
    const updatedData = {
      ...formData,
      certifications: {
        ...formData.certifications,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for banking info
  const handleBankingInfoChange = (field: string, value: string) => {
    const updatedData = {
      ...formData,
      bankingInfo: {
        ...formData.bankingInfo,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for compliance issues
  const handleComplianceChange = (field: string, value: boolean) => {
    const updatedData = {
      ...formData,
      complianceIssues: {
        ...formData.complianceIssues,
        [field]: value,
      },
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  const handleNext = () => {
    // Basic validation for required fields
    const requiredUserInfo = ["name", "email", "phone"]
    const requiredBusinessInfo = [
      "businessName",
      "businessLegalStructure",
      "businessType",
      "businessRegistrationNumber",
      "streetAddress1",
      "city",
      "stateRegion",
      "country",
      "postalCode",
      "gstNumber",
      "taxIdentificationNumber",
    ]
    const requiredBusinessContact = ["name", "email", "phone", "district", "pinCode", "state", "country"]
    const requiredBankingInfo = ["bankName", "accountName", "accountType", "accountNumber", "ifscCode"]

    const isUserInfoValid = requiredUserInfo.every((field) => formData[field])
    const isBusinessInfoValid = requiredBusinessInfo.every((field) => formData.businessInfo[field])
    const isBusinessContactValid = requiredBusinessContact.every((field) => formData.businessContact[field])
    const isBankingInfoValid = requiredBankingInfo.every((field) => formData.bankingInfo[field])

    if (isUserInfoValid && isBusinessInfoValid && isBusinessContactValid && isBankingInfoValid) {
      onNext()
    } else {
      alert("Please fill in all required fields before continuing.")
    }
  }

  const getCompletionPercentage = () => {
    // Define required fields for each section - only count actual user input, not defaults
    const requiredFields = [
      // Personal info (4 fields)
      formData.name,
      formData.email,
      formData.phone,
      formData.type !== "vendor" ? formData.type : "", // Don't count default "vendor"

      // Business info (8 key fields) - exclude defaults
      formData.businessInfo.businessName,
      formData.businessInfo.businessLegalStructure, // Don't count if empty
      formData.businessInfo.businessType, // Don't count if empty
      formData.businessInfo.businessRegistrationNumber,
      formData.businessInfo.gstNumber,
      formData.businessInfo.taxIdentificationNumber,
      formData.businessInfo.streetAddress1,
      formData.businessInfo.city,

      // Contact info (4 fields)
      formData.businessContact.name,
      formData.businessContact.email,
      formData.businessContact.phone,
      formData.businessContact.district,

      // Banking info (5 fields)
      formData.bankingInfo.bankName,
      formData.bankingInfo.accountName,
      formData.bankingInfo.accountType, // Don't count if empty
      formData.bankingInfo.accountNumber,
      formData.bankingInfo.ifscCode,
    ]

    const filledFields = requiredFields.filter((field) => {
      if (typeof field === "string") {
        return field.trim() !== ""
      }
      return field !== null && field !== undefined
    }).length

    return Math.round((filledFields / requiredFields.length) * 100)
  }

  return (
    <div className="max-w-5xl mx-auto px-2">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Complete Business Registration</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Please provide comprehensive business details for partnership registration. This information helps us
          understand your business better and assess partnership opportunities.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--primary-color)]">Form Completion</h3>
          <span className="text-2xl font-bold text-[var(--secondary-color)]">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-3 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Basic User Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleUserInfoChange("name", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleUserInfoChange("email", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleUserInfoChange("phone", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">User Type *</label>
              <select
                value={formData.type}
                onChange={(e) => handleUserInfoChange("type", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="vendor">Vendor</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Department</label>
              <input
                type="text"
                value={formData.department || ""}
                onChange={(e) => handleUserInfoChange("department", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your department"
              />
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Business Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Name *</label>
              <input
                type="text"
                value={formData.businessInfo.businessName}
                onChange={(e) => handleBusinessInfoChange("businessName", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your business name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Legal Structure *</label>
              <select
                value={formData.businessInfo.businessLegalStructure}
                onChange={(e) => handleBusinessInfoChange("businessLegalStructure", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select legal structure</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="private-limited">Private Limited Company</option>
                <option value="public-limited">Public Limited Company</option>
                <option value="llp">Limited Liability Partnership</option>
                <option value="one-person-company">One Person Company</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Type *</label>
              <select
                value={formData.businessInfo.businessType}
                onChange={(e) => handleBusinessInfoChange("businessType", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select business type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="retailer">Retailer</option>
                <option value="distributor">Distributor</option>
                <option value="exporter">Exporter</option>
                <option value="importer">Importer</option>
                <option value="service-provider">Service Provider</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Year Established *</label>
              <input
                type="number"
                value={formData.businessInfo.businessEstablishedYear || ""}
                onChange={(e) =>
                  handleBusinessInfoChange("businessEstablishedYear", Number.parseInt(e.target.value) || 0)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Registration Number *</label>
              <input
                type="text"
                value={formData.businessInfo.businessRegistrationNumber}
                onChange={(e) => handleBusinessInfoChange("businessRegistrationNumber", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter registration number"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Brand Affiliations</label>
              <input
                type="text"
                value={formData.businessInfo.brandAffiliations || ""}
                onChange={(e) => handleBusinessInfoChange("brandAffiliations", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter brand affiliations"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Website</label>
              <input
                type="url"
                value={formData.businessInfo.website || ""}
                onChange={(e) => handleBusinessInfoChange("website", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="https://www.example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Annual Turnover</label>
              <select
                value={formData.businessInfo.annualTurnover}
                onChange={(e) => handleBusinessInfoChange("annualTurnover", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select annual turnover</option>
                <option value="below-1-lakh">Below ₹1 Lakh</option>
                <option value="1-5-lakh">₹1 - 5 Lakh</option>
                <option value="5-10-lakh">₹5 - 10 Lakh</option>
                <option value="10-25-lakh">₹10 - 25 Lakh</option>
                <option value="25-50-lakh">₹25 - 50 Lakh</option>
                <option value="50-1-crore">₹50 Lakh - 1 Crore</option>
                <option value="1-5-crore">₹1 - 5 Crore</option>
                <option value="above-5-crore">Above ₹5 Crore</option>
              </select>
            </div>
          </div>

          {/* Tax & Registration Information */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">Tax & Registration Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">GST Number *</label>
                <input
                  type="text"
                  value={formData.businessInfo.gstNumber}
                  onChange={(e) => handleBusinessInfoChange("gstNumber", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter GST number"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Tax Identification Number *</label>
                <input
                  type="text"
                  value={formData.businessInfo.taxIdentificationNumber}
                  onChange={(e) => handleBusinessInfoChange("taxIdentificationNumber", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter TIN"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Import Export Code</label>
                <input
                  type="text"
                  value={formData.businessInfo.importExportCode || ""}
                  onChange={(e) => handleBusinessInfoChange("importExportCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter IEC (if applicable)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Business Address</h2>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Street Address 1 *</label>
                <input
                  type="text"
                  value={formData.businessInfo.streetAddress1}
                  onChange={(e) => handleBusinessInfoChange("streetAddress1", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter street address"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Street Address 2</label>
                <input
                  type="text"
                  value={formData.businessInfo.streetAddress2 || ""}
                  onChange={(e) => handleBusinessInfoChange("streetAddress2", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter additional address info"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">City *</label>
                <input
                  type="text"
                  value={formData.businessInfo.city}
                  onChange={(e) => handleBusinessInfoChange("city", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter city"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">State/Region *</label>
                <input
                  type="text"
                  value={formData.businessInfo.stateRegion}
                  onChange={(e) => handleBusinessInfoChange("stateRegion", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter state/region"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Postal Code *</label>
                <input
                  type="text"
                  value={formData.businessInfo.postalCode}
                  onChange={(e) => handleBusinessInfoChange("postalCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter postal code"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Country *</label>
              <select
                value={formData.businessInfo.country}
                onChange={(e) => handleBusinessInfoChange("country", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
              </select>
            </div>
          </div>
        </div>

        {/* Business Contact Person */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Business Contact Person</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Contact Person Name *</label>
              <input
                type="text"
                value={formData.businessContact.name}
                onChange={(e) => handleBusinessContactChange("name", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter contact person name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                type="email"
                value={formData.businessContact.email}
                onChange={(e) => handleBusinessContactChange("email", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
              <input
                type="tel"
                value={formData.businessContact.phone}
                onChange={(e) => handleBusinessContactChange("phone", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter phone number"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                value={formData.businessContact.whatsapp || ""}
                onChange={(e) => handleBusinessContactChange("whatsapp", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter WhatsApp number"
              />
            </div>
          </div>

          {/* Contact Person Address */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">Contact Person Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">District *</label>
                <input
                  type="text"
                  value={formData.businessContact.district}
                  onChange={(e) => handleBusinessContactChange("district", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter district"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Pin Code *</label>
                <input
                  type="text"
                  value={formData.businessContact.pinCode}
                  onChange={(e) => handleBusinessContactChange("pinCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter pin code"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">State *</label>
              <input
                type="text"
                value={formData.businessContact.state}
                onChange={(e) => handleBusinessContactChange("state", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter state"
              />
            </div>
            <div className="mt-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Country *</label>
                <select
                  value={formData.businessContact.country}
                  onChange={(e) => handleBusinessContactChange("country", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                >
                  <option value="">Select country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Business Credibility Assessment */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Credibility Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { key: "materialStandard", label: "Material Standard" },
              { key: "qualityLevel", label: "Quality Level" },
              { key: "sustainabilityLevel", label: "Sustainability Level" },
              { key: "serviceLevel", label: "Service Level" },
              { key: "standardsLevel", label: "Standards Level" },
            ].map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{label}</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.credibilityAssessment[key]}
                    onChange={(e) => handleCredibilityChange(key, Number.parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg"
                  />
                  <span className="w-8 text-center font-bold text-[var(--primary-color)]">
                    {formData.credibilityAssessment[key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Certifications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.certifications).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => handleCertificationChange(key, e.target.checked)}
                  className="w-4 h-4 text-[var(--primary-color)] rounded"
                />
                <span className="text-sm text-gray-700 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Banking Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Banking Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Bank Name *</label>
              <input
                type="text"
                value={formData.bankingInfo.bankName}
                onChange={(e) => handleBankingInfoChange("bankName", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter bank name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Account Name *</label>
              <input
                type="text"
                value={formData.bankingInfo.accountName}
                onChange={(e) => handleBankingInfoChange("accountName", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter account holder name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Account Type *</label>
              <select
                value={formData.bankingInfo.accountType}
                onChange={(e) => handleBankingInfoChange("accountType", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select account type</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="business">Business Account</option>
                <option value="corporate">Corporate Account</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Account Number *</label>
              <input
                type="text"
                value={formData.bankingInfo.accountNumber}
                onChange={(e) => handleBankingInfoChange("accountNumber", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter account number"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">IFSC Code *</label>
              <input
                type="text"
                value={formData.bankingInfo.ifscCode}
                onChange={(e) => handleBankingInfoChange("ifscCode", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter IFSC code"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">SWIFT/BIS Code</label>
              <input
                type="text"
                value={formData.bankingInfo.swiftBisCode || ""}
                onChange={(e) => handleBankingInfoChange("swiftBisCode", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter SWIFT/BIS code (for international)"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">IBAN Code</label>
              <input
                type="text"
                value={formData.bankingInfo.ibanCode || ""}
                onChange={(e) => handleBankingInfoChange("ibanCode", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter IBAN code (for international)"
              />
            </div>
          </div>
        </div>

        {/* Banking & Compliance Issues */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Compliance Issues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.complianceIssues).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => handleComplianceChange(key, e.target.checked)}
                  className="w-4 h-4 text-red-600 rounded"
                />
                <span className="text-sm text-gray-700 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          ←  
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg"
        >
        →
        </button>
      </div>
    </div>
  )
}
