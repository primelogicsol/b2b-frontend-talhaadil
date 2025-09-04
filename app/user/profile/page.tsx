"use client"
import { getUserInfo } from "@/services/regitsration"
import { get_product_by_user_id } from "@/services/user"// Added import for the new API
import { useState, useEffect } from "react"
import { updateProfile } from "@/services/admin"
import { User, Building, CreditCard, Shield, Edit3, Save, X, Check, AlertTriangle, Loader2, Package } from "lucide-react"

export default function ProfilePage({ user_id = 1 }: { user_id?: number }) { // Assuming user_id is passed as a prop
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState<any>(null) // State for product data
  const [productError, setProductError] = useState<string | null>(null) // Error state for product fetch

  // Mock data based on API payload structure
  const [profileData, setProfileData] = useState({
    business_name: "",
    business_legal_structure: "",
    business_type: "",
    year_established: 0,
    business_registration_number: "",
    brand_affiliations: "",
    website: "",
    annual_turnover: "",
    gst_number: "",
    tax_identification_number: "",
    import_export_code: "",
    street_address_1: "",
    street_address_2: "",
    city: "",
    state_region: "",
    postal_code: "",
    country: "",
    contact_person_name: "",
    contact_email: "",
    contact_phone: "",
    contact_whatsapp: "",
    contact_district: "",
    contact_pin_code: "",
    contact_state: "",
    contact_country: "",
    material_standard: 0,
    quality_level: 0,
    sustainability_level: 0,
    service_level: 0,
    standards_level: 0,
    ethics_level: 0,
    certifications: [],
    bank_name: "",
    account_name: "",
    account_type: "",
    account_number: "",
    ifsc_code: "",
    swift_bis_code: "",
    iban_code: "",
    kyc_challenges: false,
    gst_compliance_issues: false,
    fema_payment_issues: false,
    digital_banking_issues: false,
    fraud_cybersecurity_issues: false,
    payment_gateway_compliance_issues: false,
    account_activity_issues: false,
    regulatory_actions: false,
  })
  const [tempData, setTempData] = useState(profileData)
  const [error, setError] = useState<string | null>(null)

  // Fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getUserInfo()
        setProfileData(response.data)
        setTempData(response.data)
      } catch (err) {
        setError("Failed to fetch profile data. Please try again later.")
        console.error("Error fetching profile data:", err)
      } finally {
        setLoading(false)
      }
    }

    const fetchProductData = async () => {
      try {
        const response = await get_product_by_user_id(user_id)
        setProductData(response.data.product_data)
        console.log(response.data)
      } catch (err) {
        setProductError("Failed to fetch product data. Please try again later.")
        console.error("Error fetching product data:", err)
      }
    }

    fetchProfileData()
    fetchProductData()
  }, [user_id])

  const handleEdit = (section: string) => {
    setEditingSection(section)
    setTempData(profileData)
    setSaveSuccess(null)
  }

  const handleSave = async (section: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await updateProfile(tempData)
      console.log(response.data)
      setProfileData(tempData)
      setEditingSection(null)
      setHasUnsavedChanges(false)
      setSaveSuccess(`${section.charAt(0).toUpperCase() + section.slice(1)} information updated successfully!`)

      // Clear success message after 3 seconds
      setTimeout(() => setSaveSuccess(null), 3000)
    } catch (err) {
      setError(`Failed to update ${section} information. Please try again.`)
      console.error("Error updating profile:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setTempData(profileData)
    setEditingSection(null)
    setHasUnsavedChanges(false)
    setError(null)
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
    const value = isEditing ? tempData[field as keyof typeof tempData] : profileData[field as keyof typeof tempData]

    if (isEditing) {
      return (
        <div className="space-y-1">
          <label htmlFor={field} className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">
            {label} {required && <span className="text-[var(--secondary-color)]">*</span>}
          </label>
          <input
            id={field}
            type={type}
            value={value as string}
            onChange={(e) => handleInputChange(field, type === "number" ? Number(e.target.value) : e.target.value)}
            className="w-full px-3 py-2 text-sm border border-[var(--secondary-light-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
            required={required}
          />
        </div>
      )
    }

    return (
      <div>
        <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">{label}</label>
        <p className="text-[var(--primary-color)] mt-1 text-sm truncate">{value as string}</p>
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
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/90 disabled:bg-[var(--secondary-color)]/50 rounded-md transition-colors"
          >
            {isLoading ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <Save className="h-4 w-4 mr-1" />}
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--primary-color)] bg-white border border-[var(--secondary-light-color)] hover:bg-[var(--secondary-light-color)]/50 disabled:bg-[var(--secondary-light-color)]/20 rounded-md transition-colors"
          >
            <X className="h-4 w-4 mr-1" />
            Cancel
          </button>
        </div>
      )
    }

    return (
      <button
        onClick={() => handleEdit(section)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--primary-color)] bg-white border border-[var(--secondary-light-color)] hover:bg-[var(--secondary-light-color)]/50 rounded-md transition-colors"
      >
        <Edit3 className="h-4 w-4 mr-1" />
        Edit
      </button>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--primary-color)]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)]">Profile Management</h1>
          <p className="text-sm text-[var(--primary-hover-color)] mt-1 sm:mt-2">Manage your business information and settings.</p>
        </div>
        <div className="flex flex-col gap-2">
          {saveSuccess && (
            <div className="flex items-center gap-2 px-3 py-2 bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-lg">
              <Check className="h-4 w-4 text-[var(--secondary-color)]" />
              <span className="text-sm text-[var(--secondary-color)]">{saveSuccess}</span>
            </div>
          )}
          {error && (
            <div className="flex items-center gap-2 px-3 py-2 bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-lg">
              <AlertTriangle className="h-4 w-4 text-[var(--secondary-color)]" />
              <span className="text-sm text-[var(--secondary-color)]">{error}</span>
            </div>
          )}
          {hasUnsavedChanges && (
            <div className="flex items-center gap-2 px-3 py-2 bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-lg">
              <AlertTriangle className="h-4 w-4 text-[var(--secondary-color)]" />
              <span className="text-sm text-[var(--secondary-color)]">You have unsaved changes</span>
            </div>
          )}
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
              <Building className="h-5 w-5 text-[var(--primary-color)]" />
              Business Information
            </h2>
            {renderSectionActions("business")}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              {renderEditableField("business_name", "Business Name", "text", true)}
              {renderEditableField("business_legal_structure", "Legal Structure")}
              {renderEditableField("business_type", "Business Type")}
              {renderEditableField("year_established", "Year Established", "number")}
              {renderEditableField("business_registration_number", "Registration Number")}
              {renderEditableField("brand_affiliations", "Brand Affiliations")}
            </div>
            <div className="space-y-3">
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
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-3">
              <Building className="h-5 w-5 text-[var(--primary-color)]" />
              Business Address
            </h2>
            {renderSectionActions("address")}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              {renderEditableField("street_address_1", "Street Address 1", "text", true)}
              {renderEditableField("street_address_2", "Street Address 2")}
              {renderEditableField("city", "City", "text", true)}
            </div>
            <div className="space-y-3">
              {renderEditableField("state_region", "State/Region", "text", true)}
              {renderEditableField("postal_code", "Postal Code", "text", true)}
              {renderEditableField("country", "Country", "text", true)}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
              <User className="h-5 w-5 text-[var(--primary-color)]" />
              Contact Information
            </h2>
            {renderSectionActions("contact")}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              {renderEditableField("contact_person_name", "Contact Person", "text", true)}
              {renderEditableField("contact_email", "Email", "email", true)}
              {renderEditableField("contact_phone", "Phone", "tel", true)}
              {renderEditableField("contact_whatsapp", "WhatsApp", "tel")}
            </div>
            <div className="space-y-3">
              {renderEditableField("contact_district", "District")}
              {renderEditableField("contact_pin_code", "PIN Code")}
              {renderEditableField("contact_state", "State")}
              {renderEditableField("contact_country", "Country")}
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Assessment */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
              <Shield className="h-5 w-5 text-[var(--primary-color)]" />
              Credibility Assessment
            </h2>
            {renderSectionActions("credibility")}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          {editingSection === "credibility" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { field: "material_standard", label: "Material Standard" },
                { field: "quality_level", label: "Quality Level" },
                { field: "sustainability_level", label: "Sustainability" },
                { field: "service_level", label: "Service Level" },
                { field: "standards_level", label: "Standards" },
                { field: "ethics_level", label: "Ethics Level" },
              ].map(({ field, label }) => (
                <div key={field} className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">{label}</label>
                  <select
                    value={tempData[field as keyof typeof tempData] as string}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[var(--secondary-light-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { field: "material_standard", label: "Material Standard" },
                { field: "quality_level", label: "Quality Level" },
                { field: "sustainability_level", label: "Sustainability" },
                { field: "service_level", label: "Service Level" },
                { field: "standards_level", label: "Standards" },
                { field: "ethics_level", label: "Ethics Level" },
              ].map(({ field, label }) => (
                <div key={field}>
                  <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">{label}</label>
                  <span
                    className="inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-[var(--secondary-light-color)] text-[var(--secondary-color)]"
                  >
                    {profileData[field as keyof typeof profileData] as string}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 sm:mt-6">
            <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">Certifications</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {profileData.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs font-medium border border-[var(--secondary-light-color)] rounded-full bg-white text-[var(--primary-color)]"
                >
                  {cert}
                </span>
              ))}
            </div>
            {editingSection === "credibility" && (
              <button className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-[var(--primary-color)] bg-white border border-[var(--secondary-light-color)] hover:bg-[var(--secondary-light-color)]/50 rounded-md transition-colors">
                <Edit3 className="h-4 w-4 mr-1" />
                Manage Certifications
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Banking Information */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-[var(--primary-color)]" />
              Banking Information
            </h2>
            {renderSectionActions("banking")}
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              {renderEditableField("bank_name", "Bank Name", "text", true)}
              {renderEditableField("account_name", "Account Name", "text", true)}
              {renderEditableField("account_type", "Account Type")}
              <div>
                <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">Account Number</label>
                {editingSection === "banking" ? (
                  <input
                    type="text"
                    value={tempData.account_number}
                    onChange={(e) => handleInputChange("account_number", e.target.value)}
                    className="w-full mt-1 px-3 py-2 text-sm border border-[var(--secondary-light-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  />
                ) : (
                  <p className="text-[var(--primary-color)] mt-1 text-sm truncate">****{profileData.account_number.slice(-4)}</p>
                )}
              </div>
            </div>
            <div className="space-y-3">
              {renderEditableField("ifsc_code", "IFSC Code")}
              {renderEditableField("swift_bis_code", "SWIFT/BIS Code")}
              {renderEditableField("iban_code", "IBAN Code")}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Issues */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)]">Compliance Status</h2>
          <p className="text-sm text-[var(--primary-hover-color)] mt-1">Recent compliance and regulatory information</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <div key={key} className="flex items-center justify-between p-3 border border-[var(--secondary-light-color)] rounded-lg">
                <span className="text-xs sm:text-sm text-[var(--primary-hover-color)] truncate">{label}</span>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--secondary-color)]" />
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-[var(--secondary-light-color)] text-[var(--secondary-color)]">
                    No Issues
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="bg-white border border-[var(--primary-hover-color)] rounded-lg shadow-sm">
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--secondary-light-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
              <Package className="h-5 w-5 text-[var(--primary-color)]" />
              Product Information
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          {productError && (
            <div className="flex items-center gap-2 px-3 py-2 mb-4 bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-lg">
              <AlertTriangle className="h-4 w-4 text-[var(--secondary-color)]" />
              <span className="text-sm text-[var(--secondary-color)]">{productError}</span>
            </div>
          )}
          {!productData ? (
            <div className="flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-[var(--primary-color)]" />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">Category</label>
                  <p className="text-[var(--primary-color)] mt-1 text-sm">{productData.categoryName} ({productData.categoryId})</p>
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">Subcategory</label>
                  <p className="text-[var(--primary-color)] mt-1 text-sm">{productData.subcategoryName} ({productData.subcategoryId})</p>
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">Specifications</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {Object.entries(productData.specifications).map(([key, values]: [string, string[]]) => (
                    <div key={key} className="space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-[var(--primary-hover-color)]">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(values as string[]).map((value, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 text-xs font-medium border border-[var(--secondary-light-color)] rounded-full bg-white text-[var(--primary-color)]"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}