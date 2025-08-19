"use client"

import { useState } from "react"
import { User, Building, CreditCard, Shield, Edit3, Save, X, Check, AlertTriangle } from "lucide-react"

export default function ProfilePage() {
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // Mock data based on API payload structure
  const [profileData, setProfileData] = useState({
    business_name: "TechCorp Solutions",
    business_legal_structure: "Private Limited Company",
    business_type: "Technology Services",
    year_established: 2018,
    business_registration_number: "TC2018001234",
    brand_affiliations: "Apple, Samsung, Microsoft",
    website: "https://techcorp-solutions.com",
    annual_turnover: "₹50,00,000",
    gst_number: "29ABCDE1234F1Z5",
    tax_identification_number: "ABCDE1234F",
    import_export_code: "IEC1234567890",
    street_address_1: "123 Tech Park",
    street_address_2: "Sector 5",
    city: "Bangalore",
    state_region: "Karnataka",
    postal_code: "560001",
    country: "India",
    contact_person_name: "John Doe",
    contact_email: "john.doe@techcorp.com",
    contact_phone: "+91-9876543210",
    contact_whatsapp: "+91-9876543210",
    contact_district: "Bangalore Urban",
    contact_pin_code: "560001",
    contact_state: "Karnataka",
    contact_country: "India",
    material_standard: "High",
    quality_level: "Premium",
    sustainability_level: "Excellent",
    service_level: "Outstanding",
    standards_level: "ISO Certified",
    ethics_level: "Exemplary",
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    bank_name: "State Bank of India",
    account_name: "TechCorp Solutions Pvt Ltd",
    account_type: "Current Account",
    account_number: "1234567890123456",
    ifsc_code: "SBIN0001234",
    swift_bis_code: "SBININBB123",
    iban_code: "IN12SBIN0001234567890123456",
  })

  const [tempData, setTempData] = useState(profileData)

  const handleEdit = (section: string) => {
    setEditingSection(section)
    setTempData(profileData)
  }

  const handleSave = (section: string) => {
    setProfileData(tempData)
    setEditingSection(null)
    setHasUnsavedChanges(false)
    // Here you would typically make an API call to save the data
  }

  const handleCancel = () => {
    setTempData(profileData)
    setEditingSection(null)
    setHasUnsavedChanges(false)
  }

  const handleInputChange = (field: string, value: string | number) => {
    setTempData((prev) => ({ ...prev, [field]: value }))
    setHasUnsavedChanges(true)
  }

  const renderEditableField = (
    field: string,
    label: string,
    type: "text" | "email" | "tel" | "number" | "url" = "text",
    required = false,
  ) => {
    const isEditing = editingSection === getSectionForField(field)
    const value = isEditing ? tempData[field as keyof typeof tempData] : profileData[field as keyof typeof profileData]

    if (isEditing) {
      return (
        <div className="space-y-2">
          <label htmlFor={field} className="text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            id={field}
            type={type}
            value={value as string}
            onChange={(e) => handleInputChange(field, type === "number" ? Number(e.target.value) : e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required={required}
          />
        </div>
      )
    }

    return (
      <div>
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <p className="text-gray-900 mt-1">{value as string}</p>
      </div>
    )
  }

  const getSectionForField = (field: string): string => {
    if (
      [
        "business_name",
        "business_legal_structure",
        "business_type",
        "year_established",
        "business_registration_number",
        "brand_affiliations",
        "website",
        "annual_turnover",
        "gst_number",
        "tax_identification_number",
        "import_export_code",
      ].includes(field)
    ) {
      return "business"
    }
    if (["street_address_1", "street_address_2", "city", "state_region", "postal_code", "country"].includes(field)) {
      return "address"
    }
    if (
      [
        "contact_person_name",
        "contact_email",
        "contact_phone",
        "contact_whatsapp",
        "contact_district",
        "contact_pin_code",
        "contact_state",
        "contact_country",
      ].includes(field)
    ) {
      return "contact"
    }
    if (
      [
        "material_standard",
        "quality_level",
        "sustainability_level",
        "service_level",
        "standards_level",
        "ethics_level",
      ].includes(field)
    ) {
      return "credibility"
    }
    if (
      [
        "bank_name",
        "account_name",
        "account_type",
        "account_number",
        "ifsc_code",
        "swift_bis_code",
        "iban_code",
      ].includes(field)
    ) {
      return "banking"
    }
    return ""
  }

  const renderSectionActions = (section: string) => {
    const isEditing = editingSection === section

    if (isEditing) {
      return (
        <div className="flex gap-2">
          <button
            onClick={() => handleSave(section)}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            <Save className="h-3 w-3 mr-1" />
            Save
          </button>
          <button
            onClick={handleCancel}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
          >
            <X className="h-3 w-3 mr-1" />
            Cancel
          </button>
        </div>
      )
    }

    return (
      <button
        onClick={() => handleEdit(section)}
        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
      >
        <Edit3 className="h-3 w-3 mr-1" />
        Edit
      </button>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Management</h1>
          <p className="text-gray-600 mt-2">Manage your business information and settings.</p>
        </div>
        {hasUnsavedChanges && (
          <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <span className="text-sm text-yellow-800">You have unsaved changes</span>
          </div>
        )}
      </div>

      {/* Business Information */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Building className="h-5 w-5 text-blue-600" />
              Business Information
            </h2>
            {renderSectionActions("business")}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderEditableField("business_name", "Business Name", "text", true)}
              {renderEditableField("business_legal_structure", "Legal Structure")}
              {renderEditableField("business_type", "Business Type")}
              {renderEditableField("year_established", "Year Established", "number")}
              {renderEditableField("business_registration_number", "Registration Number")}
              {renderEditableField("brand_affiliations", "Brand Affiliations")}
            </div>
            <div className="space-y-4">
              {renderEditableField("website", "Website", "url")}
              {renderEditableField("annual_turnover", "Annual Turnover")}
              {renderEditableField("gst_number", "GST Number")}
              {renderEditableField("tax_identification_number", "Tax ID")}
              {renderEditableField("import_export_code", "Import/Export Code")}
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Business Address</h2>
            {renderSectionActions("address")}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderEditableField("street_address_1", "Street Address 1", "text", true)}
              {renderEditableField("street_address_2", "Street Address 2")}
              {renderEditableField("city", "City", "text", true)}
            </div>
            <div className="space-y-4">
              {renderEditableField("state_region", "State/Region", "text", true)}
              {renderEditableField("postal_code", "Postal Code", "text", true)}
              {renderEditableField("country", "Country", "text", true)}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Contact Information
            </h2>
            {renderSectionActions("contact")}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderEditableField("contact_person_name", "Contact Person", "text", true)}
              {renderEditableField("contact_email", "Email", "email", true)}
              {renderEditableField("contact_phone", "Phone", "tel", true)}
              {renderEditableField("contact_whatsapp", "WhatsApp", "tel")}
            </div>
            <div className="space-y-4">
              {renderEditableField("contact_district", "District")}
              {renderEditableField("contact_pin_code", "PIN Code")}
              {renderEditableField("contact_state", "State")}
              {renderEditableField("contact_country", "Country")}
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Assessment */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Credibility Assessment
            </h2>
            {renderSectionActions("credibility")}
          </div>
        </div>
        <div className="p-6">
          {editingSection === "credibility" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { field: "material_standard", label: "Material Standard" },
                { field: "quality_level", label: "Quality Level" },
                { field: "sustainability_level", label: "Sustainability" },
                { field: "service_level", label: "Service Level" },
                { field: "standards_level", label: "Standards" },
                { field: "ethics_level", label: "Ethics Level" },
              ].map(({ field, label }) => (
                <div key={field} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <select
                    value={tempData[field as keyof typeof tempData] as string}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Good">Good</option>
                    <option value="High">High</option>
                    <option value="Premium">Premium</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Outstanding">Outstanding</option>
                    <option value="Exemplary">Exemplary</option>
                    <option value="ISO Certified">ISO Certified</option>
                  </select>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { field: "material_standard", label: "Material Standard", color: "green" },
                { field: "quality_level", label: "Quality Level", color: "blue" },
                { field: "sustainability_level", label: "Sustainability", color: "green" },
                { field: "service_level", label: "Service Level", color: "blue" },
                { field: "standards_level", label: "Standards", color: "purple" },
                { field: "ethics_level", label: "Ethics Level", color: "green" },
              ].map(({ field, label, color }) => (
                <div key={field}>
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <span
                    className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-${color}-100 text-${color}-800`}
                  >
                    {profileData[field as keyof typeof profileData] as string}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Certifications</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {profileData.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs font-medium border border-gray-300 rounded-full bg-white text-gray-700"
                >
                  {cert}
                </span>
              ))}
            </div>
            {editingSection === "credibility" && (
              <button className="inline-flex items-center px-3 py-1.5 mt-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                <Edit3 className="h-3 w-3 mr-1" />
                Manage Certifications
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Banking Information */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Banking Information
            </h2>
            {renderSectionActions("banking")}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderEditableField("bank_name", "Bank Name", "text", true)}
              {renderEditableField("account_name", "Account Name", "text", true)}
              {renderEditableField("account_type", "Account Type")}
              <div>
                <label className="text-sm font-medium text-gray-700">Account Number</label>
                {editingSection === "banking" ? (
                  <input
                    type="text"
                    value={tempData.account_number}
                    onChange={(e) => handleInputChange("account_number", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 mt-1">****{profileData.account_number.slice(-4)}</p>
                )}
              </div>
            </div>
            <div className="space-y-4">
              {renderEditableField("ifsc_code", "IFSC Code")}
              {renderEditableField("swift_bis_code", "SWIFT/BIS Code")}
              {renderEditableField("iban_code", "IBAN Code")}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Issues */}
      <div className="bg-white border border-blue-200 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Compliance Status</h2>
          <p className="text-gray-600">Recent compliance and regulatory information</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: "kyc_challenges", label: "KYC Challenges" },
              { key: "gst_compliance_issues", label: "GST Compliance Issues" },
              { key: "fema_payment_issues", label: "FEMA Payment Issues" },
              { key: "digital_banking_issues", label: "Digital Banking Issues" },
              { key: "fraud_cybersecurity_issues", label: "Fraud/Cybersecurity Issues" },
              { key: "payment_gateway_compliance_issues", label: "Payment Gateway Compliance" },
              { key: "account_activity_issues", label: "Account Activity Issues" },
              { key: "regulatory_actions", label: "Regulatory Actions" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <span className="text-sm text-gray-700">{label}</span>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    No Issues
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
