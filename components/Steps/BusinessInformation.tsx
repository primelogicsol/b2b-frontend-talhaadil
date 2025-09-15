"use client"
import { useEffect, useState } from "react"
import { Building2, Award, CreditCard, AlertTriangle, Star } from "lucide-react"
import { useGlobalContext } from "@/context/ScreenProvider"
import { useToast } from "@/context/ToastProvider"
import { sendInfo,getUserInfo  } from "@/services/regitsration"

import Cookies from "js-cookie"

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
  const fixStep = 2;
  const currentStep = parseInt(Cookies.get("registration_step") || "0", 10);

  const { showToast } = useToast()
  const { is4K } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [isEditable, setIsEditable] = useState(currentStep <= fixStep)

  const [userRole, setUserRole] = useState<"vendor" | "buyer">("buyer")

  useEffect(() => {
    const roleFromCookie = Cookies.get("user_role") as "vendor" | "buyer" | undefined
    if (roleFromCookie) {
      setUserRole(roleFromCookie)
    }
  }, [])

  const [formData, setFormData] = useState(
    data || {
      id: 0,
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
        materialStandard: 3,
        qualityLevel: 3,
        sustainabilityLevel: 3,
        serviceLevel: 3,
        ethicsLevel: 3,
        standardsLevel: 3,
      },
      certifications: {
        GICertification: false,
        handloomMark: false,
        craftMark: false,
        indiaHandmade: false,
        qualityCouncil: false,
        exportCouncil: false,
        blockChain: false,
        ...(userRole === "vendor" ? { none: false } : { notRequired: false }),
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
        "Have you faced challenges with KYC regulations recently?": false,
        "Any issues with GST compliance in transactions?": false,
        "Difficulties with FEMA for international payments recently?": false,
        "Have digital banking regulations impacted your operations?": false,
        "Encountered any fraud or cybersecurity issues recently?": false,
        "Challenges with payment gateway compliance or security regulations?": false,
        "Any account activity issues or fraudulent claims made?": false,
        "Have regulatory actions been taken against your account?": false,
      },
    },
  )

  const [errors, setErrors] = useState<Record<string, string>>({})

  // ✅ Fetch user info if step > fixStep
  useEffect(() => {
    if (currentStep > fixStep) {
      const fetchUserInfo = async () => {
        try {
          setLoading(true)
          const response = await getUserInfo()
          const apiData = response.data

          // Map API response to formData structure
          const updatedFormData = {
            ...formData,
            businessInfo: {
              businessName: apiData.business_name || "",
              businessLegalStructure: apiData.business_legal_structure || "",
              businessType: apiData.business_type || "",
              businessEstablishedYear: apiData.year_established || 0,
              businessRegistrationNumber: apiData.business_registration_number || "",
              brandAffiliations: apiData.brand_affiliations || "",
              streetAddress1: apiData.street_address_1 || "",
              streetAddress2: apiData.street_address_2 || "",
              city: apiData.city || "",
              stateRegion: apiData.state_region || "",
              country: apiData.country || "",
              postalCode: apiData.postal_code || "",
              website: apiData.website || "",
              annualTurnover: apiData.annual_turnover || "",
              gstNumber: apiData.gst_number || "",
              taxIdentificationNumber: apiData.tax_identification_number || "",
              importExportCode: apiData.import_export_code || "",
            },
            businessContact: {
              name: apiData.contact_person_name || "",
              email: apiData.contact_email || "",
              phone: apiData.contact_phone || "",
              whatsapp: apiData.contact_whatsapp || "",
              district: apiData.contact_district || "",
              pinCode: apiData.contact_pin_code || "",
              state: apiData.contact_state || "",
              country: apiData.contact_country || "",
            },
            credibilityAssessment: {
              materialStandard: apiData.material_standard || 3,
              qualityLevel: apiData.quality_level || 3,
              sustainabilityLevel: apiData.sustainability_level || 3,
              serviceLevel: apiData.service_level || 3,
              ethicsLevel: apiData.ethics_level || 3,
              standardsLevel: apiData.standards_level || 3,
            },
            certifications: {
              GICertification: apiData.certifications.includes("GI Certification"),
              handloomMark: apiData.certifications.includes("Handloom Mark"),
              craftMark: apiData.certifications.includes("Craft Mark"),
              indiaHandmade: apiData.certifications.includes("India Handmade"),
              qualityCouncil: apiData.certifications.includes("Quality Council"),
              exportCouncil: apiData.certifications.includes("Export Council"),
              blockChain: apiData.certifications.includes("Blockchain"),
              ...(userRole === "vendor" ? { none: false } : { notRequired: false }),
            },
            bankingInfo: {
              bankName: apiData.bank_name || "",
              accountName: apiData.account_name || "",
              accountType: apiData.account_type || "",
              accountNumber: apiData.account_number || "",
              ifscCode: apiData.ifsc_code || "",
              swiftBisCode: apiData.swift_bis_code || "",
              ibanCode: apiData.iban_code || "",
            },
            complianceIssues: {
              "Have you faced challenges with KYC regulations recently?": apiData.kyc_challenges || false,
              "Any issues with GST compliance in transactions?": apiData.gst_compliance_issues || false,
              "Difficulties with FEMA for international payments recently?": apiData.fema_payment_issues || false,
              "Have digital banking regulations impacted your operations?": apiData.digital_banking_issues || false,
              "Encountered any fraud or cybersecurity issues recently?": apiData.fraud_cybersecurity_issues || false,
              "Challenges with payment gateway compliance or security regulations?": apiData.payment_gateway_compliance_issues || false,
              "Any account activity issues or fraudulent claims made?": apiData.account_activity_issues || false,
              "Have regulatory actions been taken against your account?": apiData.regulatory_actions || false,
            },
          }

          setFormData(updatedFormData)
          onUpdate(updatedFormData)
        } catch (error: any) {
          showToast("Failed to fetch user information. Please try again.")
          console.error("Fetch Error:", error)
        } finally {
          setLoading(false)
        }
      }

      fetchUserInfo()
    }
  }, [currentStep, fixStep])

  const handleBusinessInfoChange = (field: string, value: string) => {
    if (!isEditable) return
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, [field]: value },
    }))
  }

  const handleBusinessContactChange = (field: string, value: string) => {
    if (!isEditable) return
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessContact: { ...prev.businessContact, [field]: value },
    }))
  }

  const handleBankingInfoChange = (field: string, value: string) => {
    if (!isEditable) return
    setFormData((prev: typeof formData) => ({
      ...prev,
      bankingInfo: { ...prev.bankingInfo, [field]: value },
    }))
  }

  const handleYearChange = (value: string) => {
    if (!isEditable) return
    const year = Number.parseInt(value) || 0
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, businessEstablishedYear: year },
    }))
  }

  const handleSubmit = async () => {
    if (!isEditable) {
      let step = parseInt(Cookies.get("registration_step") || "0", 10)
      step += 1
      Cookies.set("registration_step", step.toString())
      onNext()
      return
    }

    try {
      const apiPayload = {
        business_name: formData.businessInfo.businessName,
        business_legal_structure: formData.businessInfo.businessLegalStructure,
        business_type: formData.businessInfo.businessType,
        year_established: formData.businessInfo.businessEstablishedYear || 1800,
        business_registration_number: formData.businessInfo.businessRegistrationNumber,
        brand_affiliations: formData.businessInfo.brandAffiliations || "",
        website: formData.businessInfo.website || "",
        annual_turnover: formData.businessInfo.annualTurnover || "",
        gst_number: formData.businessInfo.gstNumber,
        tax_identification_number: formData.businessInfo.taxIdentificationNumber,
        import_export_code: formData.businessInfo.importExportCode || "",
        street_address_1: formData.businessInfo.streetAddress1,
        street_address_2: formData.businessInfo.streetAddress2 || "",
        city: formData.businessInfo.city,
        state_region: formData.businessInfo.stateRegion,
        postal_code: formData.businessInfo.postalCode,
        country: formData.businessInfo.country,
        contact_person_name: formData.businessContact.name,
        contact_email: formData.businessContact.email,
        contact_phone: formData.businessContact.phone,
        contact_whatsapp: formData.businessContact.whatsapp || "",
        contact_district: formData.businessContact.district,
        contact_pin_code: formData.businessContact.pinCode,
        contact_state: formData.businessContact.state,
        contact_country: formData.businessContact.country,
        material_standard: formData.credibilityAssessment.materialStandard,
        quality_level: formData.credibilityAssessment.qualityLevel,
        sustainability_level: formData.credibilityAssessment.sustainabilityLevel,
        service_level: formData.credibilityAssessment.serviceLevel,
        standards_level: formData.credibilityAssessment.standardsLevel,
        ethics_level: formData.credibilityAssessment.ethicsLevel,
        certifications: Object.entries(formData.certifications)
          .filter(([key, value]) =>
            value && key !== (userRole === "vendor" ? "none" : "notRequired")
          )
          .map(([key]) => certificationMap[key as keyof typeof certificationMap]),
        bank_name: formData.bankingInfo.bankName,
        account_name: formData.bankingInfo.accountName,
        account_type: formData.bankingInfo.accountType,
        account_number: formData.bankingInfo.accountNumber,
        ifsc_code: formData.bankingInfo.ifscCode,
        swift_bis_code: formData.bankingInfo.swiftBisCode || "",
        iban_code: formData.bankingInfo.ibanCode || "",
        kyc_challenges: formData.complianceIssues["Have you faced challenges with KYC regulations recently?"] || false,
        gst_compliance_issues: formData.complianceIssues["Any issues with GST compliance in transactions?"] || false,
        fema_payment_issues:
          formData.complianceIssues["Difficulties with FEMA for international payments recently?"] || false,
        digital_banking_issues:
          formData.complianceIssues["Have digital banking regulations impacted your operations?"] || false,
        fraud_cybersecurity_issues:
          formData.complianceIssues["Encountered any fraud or cybersecurity issues recently?"] || false,
        payment_gateway_compliance_issues:
          formData.complianceIssues["Challenges with payment gateway compliance or security regulations?"] || false,
        account_activity_issues:
          formData.complianceIssues["Any account activity issues or fraudulent claims made?"] || false,
        regulatory_actions:
          formData.complianceIssues["Have regulatory actions been taken against your account?"] || false,
      }
      setLoading(true)
      localStorage.setItem("businessRegistrationData", JSON.stringify(apiPayload))
      console.log("API Payload:", apiPayload)

      const response = await sendInfo(apiPayload)
      const data = response.data
      onNext()

      let step = parseInt(Cookies.get("registration_step") || "0", 10)
      step += 1
      Cookies.set("registration_step", step.toString())
    } catch (error: any) {
      const errorMsg = error?.response?.data?.detail

      if (errorMsg === "User already has registration levels") {
        showToast("You have already submitted the information.")
        setTimeout(() => {
          onNext()
        }, 4000)
      } else {
        showToast("Network error. Please try again.")
      }

      console.error("Network Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleNext = () => {
    handleSubmit()
  }

  const getFieldLabels = () => {
    if (userRole === "buyer") {
      return {
        taxRegistration: {
          field1: "State Sales Tax Permit Number",
          field2: "EIN (Employee Identification Number)",
          field3: "US Import Exporter",
        },
        banking: {
          routingCode: "ABA Routing Number",
        },
        compliance: {
          "Have you faced challenges with KYC regulations recently?":
            "Have you faced challenges with Customer Identification Program (CIP) recently?",
          "Any issues with GST compliance in transactions?": "Any issues with Sales Tax Compliance in transactions?",
          "Difficulties with FEMA for international payments recently?":
            "Difficulties with OFAC & FinCEN Cross-Border Payment Rules recently?",
          "Have digital banking regulations impacted your operations?":
            "Have Federal Reserve, OCC, FDIC, CFPB Banking Regulations impacted your operations?",
          "Challenges with payment gateway compliance or security regulations?":
            "Challenges with PCI-DSS Compliance or security regulations?",
        },
      }
    } else {
      return {
        taxRegistration: {
          field1: "GST Number",
          field2: "Tax Identification Number",
          field3: "Import Export Code",
        },
        banking: {
          routingCode: "IFSC Code",
        },
        compliance: {
          "Have you faced challenges with KYC regulations recently?":
            "Have you faced challenges with KYC regulations recently?",
          "Any issues with GST compliance in transactions?": "Any issues with GST compliance in transactions?",
          "Difficulties with FEMA for international payments recently?":
            "Difficulties with FEMA Rules (Foreign Exchange) recently?",
          "Have digital banking regulations impacted your operations?":
            "Have digital banking regulations impacted your operations?",
          "Challenges with payment gateway compliance or security regulations?":
            "Challenges with payment gateway compliance or security regulations?",
        },
      }
    }
  }

  const fieldLabels = getFieldLabels()

  // ✅ Save to localStorage whenever formData changes (only if editable)
  useEffect(() => {
    if (isEditable) {
      localStorage.setItem("businessRegistrationData", JSON.stringify(formData))
    }
  }, [formData, isEditable])

  const certificationMap = {
    GICertification: "GI Certification",
    handloomMark: "Handloom Mark",
    craftMark: "Craft Mark",
    indiaHandmade: "India Handmade",
    qualityCouncil: "Quality Council",
    exportCouncil: "Export Council",
    blockChain: "Blockchain",
  }

  // Handler for basic user info
  const handleUserInfoChange = (field: string, value: string) => {
    if (!isEditable) return
    const updatedData = {
      ...formData,
      [field]: value,
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  // Handler for credibility assessment
  const handleCredibilityChange = (field: string, value: number) => {
    if (!isEditable) return
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
    if (!isEditable) return
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

  // Handler for compliance issues
  const handleComplianceChange = (field: string, value: boolean) => {
    if (!isEditable) return
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

  // ✅ Check if all required fields are filled
  const areRequiredFieldsFilled = () => {
    if (!isEditable) return true // Always allow next if not editable
    const requiredFields = [
      formData.businessInfo.businessName,
      formData.businessInfo.businessLegalStructure,
      formData.businessInfo.businessType,
      formData.businessInfo.businessRegistrationNumber,
      formData.businessInfo.streetAddress1,
      formData.businessInfo.city,
      formData.businessInfo.stateRegion,
      formData.businessInfo.country,
      formData.businessInfo.postalCode,
      formData.businessInfo.gstNumber,
      formData.businessInfo.taxIdentificationNumber,
      formData.businessContact.name,
      formData.businessContact.email,
      formData.businessContact.phone,
      formData.businessContact.district,
      formData.businessContact.pinCode,
      formData.businessContact.state,
      formData.businessContact.country,
      formData.bankingInfo.bankName,
      formData.bankingInfo.accountName,
      formData.bankingInfo.accountType,
      formData.bankingInfo.accountNumber,
      formData.bankingInfo.ifscCode,
    ]

    return requiredFields.every((field) => typeof field === "string" && field.trim() !== "")
  }

  // ✅ Fixed completion percentage - only count required fields
  const getCompletionPercentage = () => {
    const requiredFields = [
      formData.businessInfo.businessName,
      formData.businessInfo.businessLegalStructure,
      formData.businessInfo.businessType,
      formData.businessInfo.businessRegistrationNumber,
      formData.businessInfo.streetAddress1,
      formData.businessInfo.city,
      formData.businessInfo.stateRegion,
      formData.businessInfo.country,
      formData.businessInfo.postalCode,
      formData.businessInfo.gstNumber,
      formData.businessInfo.taxIdentificationNumber,
      formData.businessContact.name,
      formData.businessContact.email,
      formData.businessContact.phone,
      formData.businessContact.district,
      formData.businessContact.pinCode,
      formData.businessContact.state,
      formData.businessContact.country,
      formData.bankingInfo.bankName,
      formData.bankingInfo.accountName,
      formData.bankingInfo.accountType,
      formData.bankingInfo.accountNumber,
      formData.bankingInfo.ifscCode,
    ]

    const filledFields = requiredFields.filter((field) => {
      if (typeof field === "string") {
        return field.trim() !== ""
      }
      return field !== null && field !== undefined && field !== 0
    }).length

    return Math.round((filledFields / requiredFields.length) * 100)
  }

  const ErrorMessage = ({ error }: { error?: string }) => {
    if (!error) return null
    return <p className="text-red-500 text-sm mt-1">{error}</p>
  }

  return (
    <div className={`mx-auto px-2 ${is4K ? "max-w-[2000px]" : "max-w-5xl"}`}>
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
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter your business name"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Legal Structure *</label>
              <select
                value={formData.businessInfo.businessLegalStructure}
                onChange={(e) => handleBusinessInfoChange("businessLegalStructure", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                disabled={!isEditable}
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
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                disabled={!isEditable}
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
              <label className="block text-sm font-semibold text-gray-700">Year Established</label>
              <input
                type="number"
                value={formData.businessInfo.businessEstablishedYear || ""}
                onChange={(e) => handleYearChange(e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Registration Number *</label>
              <input
                type="text"
                value={formData.businessInfo.businessRegistrationNumber}
                onChange={(e) => handleBusinessInfoChange("businessRegistrationNumber", e.target.value.toUpperCase())}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter registration number"
                disabled={!isEditable}
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
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Website</label>
              <input
                type="url"
                value={formData.businessInfo.website || ""}
                onChange={(e) => handleBusinessInfoChange("website", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="https://www.example.com"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Annual Turnover
              </label>
              <select
                value={formData.businessInfo.annualTurnover}
                onChange={(e) =>
                  handleBusinessInfoChange("annualTurnover", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                disabled={!isEditable}
              >
                <option value="">Select annual turnover</option>
                {userRole === "buyer" ? (
                  <>
                    <option value="below-20k">Below $20k</option>
                    <option value="20k-100k">$20k - $100k</option>
                    <option value="100k-200k">$100k - $200k</option>
                    <option value="200k-500k">$200k - $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="above-5m">Above $5M</option>
                  </>
                ) : (
                  <>
                    <option value="below-1-lakh">Below ₹1 Lakh</option>
                    <option value="1-5-lakh">₹1 - 5 Lakh</option>
                    <option value="5-10-lakh">₹5 - 10 Lakh</option>
                    <option value="10-25-lakh">₹10 - 25 Lakh</option>
                    <option value="25-50-lakh">₹25 - 50 Lakh</option>
                    <option value="50-1-crore">₹50 Lakh - 1 Crore</option>
                    <option value="1-5-crore">₹1 - 5 Crore</option>
                    <option value="above-5-crore">Above ₹5 Crore</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Tax & Registration Information */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">Tax & Registration Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field1} *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.gstNumber}
                  onChange={(e) => handleBusinessInfoChange("gstNumber", e.target.value.toUpperCase())}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder={`Enter ${fieldLabels.taxRegistration.field1.toLowerCase()}`}
                  maxLength={15}
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field2} *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.taxIdentificationNumber}
                  onChange={(e) => handleBusinessInfoChange("taxIdentificationNumber", e.target.value.toUpperCase())}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder={`Enter ${fieldLabels.taxRegistration.field2.toLowerCase()}`}
                  maxLength={15}
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field3}
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.importExportCode || ""}
                  onChange={(e) => handleBusinessInfoChange("importExportCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder={`Enter ${fieldLabels.taxRegistration.field3.toLowerCase()} (if applicable)`}
                  disabled={!isEditable}
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
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Country *</label>
              <select
                value={formData.businessInfo.country}
                onChange={(e) => handleBusinessInfoChange("country", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                disabled={!isEditable}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Street Address 1 *</label>
                <input
                  type="text"
                  value={formData.businessInfo.streetAddress1}
                  onChange={(e) => handleBusinessInfoChange("streetAddress1", e.target.value)}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter street address"
                  disabled={!isEditable}
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
                  disabled={!isEditable}
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
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter city"
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">State/Region *</label>
                <input
                  type="text"
                  value={formData.businessInfo.stateRegion}
                  onChange={(e) => handleBusinessInfoChange("stateRegion", e.target.value)}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter state/region"
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Postal Code *</label>
                <input
                  type="text"
                  value={formData.businessInfo.postalCode}
                  onChange={(e) => handleBusinessInfoChange("postalCode", e.target.value.toUpperCase())}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter postal code"
                  maxLength={10}
                  disabled={!isEditable}
                />
              </div>
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
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter contact person name"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                type="email"
                value={formData.businessContact.email}
                onChange={(e) => handleBusinessContactChange("email", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter email address"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
              <input
                type="tel"
                value={formData.businessContact.phone}
                onChange={(e) => handleBusinessContactChange("phone", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter phone number"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                value={formData.businessContact.whatsapp || ""}
                onChange={(e) => handleBusinessContactChange("whatsapp", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter WhatsApp number"
                disabled={!isEditable}
              />
            </div>
          </div>

          {/* Contact Person Address */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">Contact Person Address</h3>
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-semibold text-gray-700">Country *</label>
              <select
                value={formData.businessContact.country}
                onChange={(e) => handleBusinessContactChange("country", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                disabled={!isEditable}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">District/County *</label>
                <input
                  type="text"
                  value={formData.businessContact.district}
                  onChange={(e) => handleBusinessContactChange("district", e.target.value)}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter district"
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Pin Code *</label>
                <input
                  type="text"
                  value={formData.businessContact.pinCode}
                  onChange={(e) => handleBusinessContactChange("pinCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter pin code"
                  maxLength={6}
                  disabled={!isEditable}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">State/County *</label>
                <input
                  type="text"
                  value={formData.businessContact.state}
                  onChange={(e) => handleBusinessContactChange("state", e.target.value)}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                  placeholder="Enter state"
                  disabled={!isEditable}
                />
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
              { key: "materialStandard", label: "Material Standard (1-5)" },
              { key: "qualityLevel", label: "Quality Level (1-5)" },
              { key: "sustainabilityLevel", label: "Sustainability Level (1-5)" },
              { key: "serviceLevel", label: "Service Level (1-5)" },
              { key: "standardsLevel", label: "Standards Level (1-5)" },
              { key: "ethicsLevel", label: "Ethics Level (1-5)" },
            ].map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{label}</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={formData.credibilityAssessment[key]}
                    onChange={(e) => handleCredibilityChange(key, Number.parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg"
                    disabled={!isEditable}
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
                  disabled={!isEditable}
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
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter bank name"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Account Name *</label>
              <input
                type="text"
                value={formData.bankingInfo.accountName}
                onChange={(e) => handleBankingInfoChange("accountName", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter account holder name"
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Account Type *</label>
              <select
                value={formData.bankingInfo.accountType}
                onChange={(e) => handleBankingInfoChange("accountType", e.target.value)}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                disabled={!isEditable}
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
                onChange={(e) => handleBankingInfoChange("accountNumber", e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter account number"
                maxLength={18}
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">{fieldLabels.banking.routingCode} *</label>
              <input
                type="text"
                value={formData.bankingInfo.ifscCode}
                onChange={(e) => handleBankingInfoChange("ifscCode", e.target.value.toUpperCase())}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder={`Enter ${fieldLabels.banking.routingCode.toLowerCase()}`}
                maxLength={11}
                disabled={!isEditable}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">SWIFT Code</label>
              <input
                type="text"
                value={formData.bankingInfo.swiftBisCode || ""}
                onChange={(e) => handleBankingInfoChange("swiftBisCode", e.target.value.toUpperCase())}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter SWIFT code (for international)"
                maxLength={11}
                disabled={!isEditable}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">IBAN Code</label>
              <input
                type="text"
                value={formData.bankingInfo.ibanCode || ""}
                onChange={(e) => handleBankingInfoChange("ibanCode", e.target.value.toUpperCase())}
                className="w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium border-gray-200"
                placeholder="Enter IBAN code (for international)"
                maxLength={34}
                disabled={!isEditable}
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
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(formData.complianceIssues).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => handleComplianceChange(key, e.target.checked)}
                  className="w-4 h-4 text-red-600 rounded"
                  disabled={!isEditable}
                />
                <span className="text-sm text-gray-700">
                  {fieldLabels.compliance[key as keyof typeof fieldLabels.compliance] || key}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2 sm:px-8 sm:py-4 sm:font-bold border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          <span className="inline">←</span>
          <span className="hidden md:inline ml-2">Prev</span>
        </button>
        <button
          onClick={handleNext}
          disabled={loading || (isEditable && !areRequiredFieldsFilled())}
          className={`px-4 py-2 sm:px-8 sm:py-4 sm:font-bold bg-[var(--primary-color)] text-white rounded-xl transition-all font-medium shadow-lg ${loading || (isEditable && !areRequiredFieldsFilled()) ? "opacity-50 cursor-not-allowed" : "hover:bg-[var(--primary-hover-color)]"}`}
        >
          {loading ? (
            <span>Submitting...</span>
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