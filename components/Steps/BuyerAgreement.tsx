"use client"
import { useEffect, useState } from "react"
import { FileText, Building2, CreditCard, CheckCircle } from "lucide-react"

interface BuyerAgreementProps {
  data?: any
  onUpdate: (data: any) => void
  onNext: () => void
  onPrev: () => void
}

export default function BuyerAgreement({ data, onUpdate, onNext, onPrev }: BuyerAgreementProps) {
  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const [formData, setFormData] = useState({
    agreementAccepted: false,
    termsAccepted: false,
    privacyAccepted: false,
    marketingConsent: false,
    businessData: null as any,
  })

  const [businessData, setBusinessData] = useState<any>(null)

  // ✅ Load business data from localStorage on component mount
  useEffect(() => {
    const savedBusinessData = localStorage.getItem("businessRegistrationData")
    if (savedBusinessData) {
      try {
        const parsedData = JSON.parse(savedBusinessData)
        setBusinessData(parsedData)
        setFormData((prev) => ({
          ...prev,
          businessData: parsedData,
        }))
      } catch (error) {
        console.error("Error parsing saved business data:", error)
      }
    }
  }, [])

  // ✅ Save agreement data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("buyerAgreementData", JSON.stringify(formData))
  }, [formData])

  const handleCheckboxChange = (field: string, value: boolean) => {
    const updatedData = {
      ...formData,
      [field]: value,
    }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  const handleNext = () => {
    if (formData.agreementAccepted && formData.termsAccepted && formData.privacyAccepted) {
      onNext()
    } else {
      alert("Please accept all required agreements before continuing.")
    }
  }

  const getCompletionPercentage = () => {
    const requiredFields = [formData.agreementAccepted, formData.termsAccepted, formData.privacyAccepted]

    const filledFields = requiredFields.filter((field) => field === true).length
    return Math.round((filledFields / requiredFields.length) * 100)
  }

  return (
    <div className="mx-auto px-2 max-w-5xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Buyer Partnership Agreement</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Review your business information and accept the partnership terms to complete your registration.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--primary-color)]">Agreement Completion</h3>
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
        {/* Business Information Summary */}
        {businessData && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--primary-color)]">Business Information Summary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessInfo?.businessName || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Type</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessInfo?.businessType || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Legal Structure</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessInfo?.businessLegalStructure || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">GST Number</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessInfo?.gstNumber || "Not provided"}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Person</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessContact?.name || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessContact?.email || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {businessData.businessContact?.phone || "Not provided"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Address</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                    {`${businessData.businessInfo?.streetAddress1 || ""}, ${businessData.businessInfo?.city || ""}, ${businessData.businessInfo?.stateRegion || ""} ${businessData.businessInfo?.postalCode || ""}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banking Information Summary */}
        {businessData?.bankingInfo && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--primary-color)]">Banking Information Summary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Bank Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {businessData.bankingInfo?.bankName || "Not provided"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Account Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {businessData.bankingInfo?.accountName || "Not provided"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Account Type</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {businessData.bankingInfo?.accountType || "Not provided"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">IFSC Code</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {businessData.bankingInfo?.ifscCode || "Not provided"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Agreement Terms */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Partnership Agreement Terms</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Buyer Partnership Agreement</h3>
              <div className="text-sm text-gray-600 space-y-3 max-h-64 overflow-y-auto">
                <p>
                  <strong>1. Partnership Terms:</strong> By accepting this agreement, you agree to become a registered
                  buyer partner with our platform. This partnership grants you access to our vendor network and
                  exclusive business opportunities.
                </p>
                <p>
                  <strong>2. Business Obligations:</strong> You agree to conduct business in accordance with applicable
                  laws and regulations. All transactions must comply with GST, FEMA, and other relevant regulatory
                  requirements.
                </p>
                <p>
                  <strong>3. Payment Terms:</strong> All payments will be processed through verified banking channels.
                  You agree to maintain accurate banking information and comply with KYC requirements.
                </p>
                <p>
                  <strong>4. Quality Standards:</strong> You commit to maintaining the quality standards and credibility
                  levels as assessed during registration. Any significant changes must be reported immediately.
                </p>
                <p>
                  <strong>5. Compliance:</strong> You agree to report any compliance issues, regulatory actions, or
                  changes in business status that may affect the partnership.
                </p>
                <p>
                  <strong>6. Termination:</strong> Either party may terminate this agreement with 30 days written
                  notice. Upon termination, all pending obligations must be fulfilled.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreementAccepted}
                  onChange={(e) => handleCheckboxChange("agreementAccepted", e.target.checked)}
                  className="w-5 h-5 text-[var(--primary-color)] rounded mt-1"
                />
                <span className="text-sm text-gray-700">
                  <strong className="text-red-600">*</strong> I have read and agree to the Buyer Partnership Agreement
                  terms and conditions.
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleCheckboxChange("termsAccepted", e.target.checked)}
                  className="w-5 h-5 text-[var(--primary-color)] rounded mt-1"
                />
                <span className="text-sm text-gray-700">
                  <strong className="text-red-600">*</strong> I accept the Terms of Service and agree to comply with all
                  platform policies.
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={(e) => handleCheckboxChange("privacyAccepted", e.target.checked)}
                  className="w-5 h-5 text-[var(--primary-color)] rounded mt-1"
                />
                <span className="text-sm text-gray-700">
                  <strong className="text-red-600">*</strong> I acknowledge that I have read and understand the Privacy
                  Policy regarding the collection and use of my business information.
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.marketingConsent}
                  onChange={(e) => handleCheckboxChange("marketingConsent", e.target.checked)}
                  className="w-5 h-5 text-[var(--primary-color)] rounded mt-1"
                />
                <span className="text-sm text-gray-700">
                  I consent to receive marketing communications and business opportunities via email and other channels
                  (optional).
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Confirmation Summary */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Registration Confirmation</h2>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Your business information will be reviewed by our team</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>You will receive a confirmation email within 24-48 hours</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Once approved, you'll gain access to our vendor network</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Our team will contact you to discuss partnership opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2 sm:px-8 sm:py-4 sm:font-bold border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          <span className="inline">←</span>
          <span className="hidden md:inline ml-2">Back</span>
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.agreementAccepted || !formData.termsAccepted || !formData.privacyAccepted}
          className={`px-4 py-2 sm:px-8 sm:py-4 sm:font-bold rounded-xl transition-all font-medium shadow-lg ${
            formData.agreementAccepted && formData.termsAccepted && formData.privacyAccepted
              ? "bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <span className="hidden md:inline mr-2">Complete Registration</span>
          <span className="inline">✓</span>
        </button>
      </div>
    </div>
  )
}
