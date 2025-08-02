"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Building, User, CreditCard, FileCheck } from "lucide-react"
import { useGlobalContext } from "@/context/ScreenProvider"

interface FormData {
  businessName: string
  businessType: string
  einNumber: string
  tinNumber: string
  contactPerson: string
  email: string
  phoneNumber: string
  bankName: string
  accountNumber: string
  routingNumber: string
  bankAddress: string
  signatoryName: string
  signatureDate: string
  accepted: boolean
}

interface BuyerAgreementProps {
  data?: Partial<FormData>
  onUpdate: (data: FormData) => void
  onNext: () => void
  onPrev: () => void
}

export default function BuyerAgreement({ data, onUpdate, onNext, onPrev }: BuyerAgreementProps) {
  const { is4K } = useGlobalContext()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    businessName: data?.businessName || "",
    businessType: data?.businessType || "",
    einNumber: data?.einNumber || "",
    tinNumber: data?.tinNumber || "",
    contactPerson: data?.contactPerson || "",
    email: data?.email || "",
    phoneNumber: data?.phoneNumber || "",
    bankName: data?.bankName || "",
    accountNumber: data?.accountNumber || "",
    routingNumber: data?.routingNumber || "",
    bankAddress: data?.bankAddress || "",
    signatoryName: data?.signatoryName || "",
    signatureDate: data?.signatureDate || "",
    accepted: data?.accepted || false,
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStep])

  const steps = [
    { number: 1, title: "Business Information", icon: Building },
    { number: 2, title: "Contact Details", icon: User },
    { number: 3, title: "Banking Information", icon: CreditCard },
    { number: 4, title: "Legal Terms", icon: FileCheck },
  ]

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    const updatedData = { ...formData, [field]: value }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.businessType && formData.einNumber && formData.tinNumber
      case 2:
        return formData.contactPerson && formData.email && formData.phoneNumber
      case 3:
        return formData.bankName && formData.accountNumber && formData.routingNumber && formData.bankAddress
      case 4:
        return formData.signatoryName && formData.signatureDate && formData.accepted
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < 4 && canProceedToNext()) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep === 4 && canProceedToNext()) {
      onNext()
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      onPrev()
    }
  }

  const termsContent = `1. Definitions and Scope
"Buyer" refers to the party purchasing products through DKC's drop shipping partnership.
"Platform" refers to DKC’s e-commerce website and related drop shipping services.
"Products" refers to items sourced from DKC’s vendors for resale by the Buyer.
"Agreement" refers to this entire drop shipping partnership arrangement.

2. Service Level Agreements
- Order processing within 24 hours (once payment is confirmed).
- Customer query response time: 4 hours maximum.
- Minimum 95% fulfillment rate required.
- Maximum cancellation rate: 5%.
- Platform uptime guarantee: 99.9%.

3. Buyer Listing Rights
- Buyer is granted access to list and sell DKC's products on their platform.
- Buyer must maintain accurate product descriptions, pricing, and inventory sync.
- DKC reserves the right to adjust product availability, pricing, and listings.
- Unauthorized resale outside of approved platforms is prohibited.

4. Buyer Obligations
- Maintain customer service standards.
- Process customer payments securely.
- Ensure compliance with all applicable laws (Consumer Protection, FTC Rules).
- Provide accurate shipping and order tracking to customers.
- Handle returns and refunds per DKC’s policy.

5. DKC Obligations
- Provide product sourcing and fulfillment.
- Ensure quality control before shipment.
- Process and ship orders within 24 hours.
- Offer real-time inventory sync and order tracking.
- Manage warehousing and logistics.

6. Product Standards
- All products must be authentic and new.
- Must comply with U.S. safety and quality regulations.
- Must match product descriptions and include warranty information (if applicable).
- Retail-ready packaging required.
- Proper labeling, including country of origin, must be included.

7. Shipping & Fulfillment
- All orders are processed and shipped by DKC.
- DKC selects approved carriers to ensure timely delivery.
- Tracking information is provided within 24 hours of shipment.
- Buyers must ensure accurate customer addresses to avoid delays.
- Returns and refunds are handled per DKC’s return policy.

8. Intellectual Property
- Buyer retains branding rights for their own storefront.
- DKC provides a limited license to use product images and descriptions.
- Joint ownership of any sales-driven enhancements.
- Unauthorized use of DKC’s trademarks or branding is prohibited.

9. Liability
- Buyer is responsible for handling customer relations.
- DKC is responsible for order fulfillment and shipping.
- Both parties agree to mutual indemnification in case of disputes.
- Insurance requirements must be met by both parties.
- Force majeure conditions apply.

10. Partnership Renewal
Eligibility Criteria:
- Consistent order volume.
- Low return/cancellation rate.
- Positive customer feedback.
- Compliance with DKC policies.

11. Renewal Process:
- Performance Review.
- Documentation Update.
- Terms Renegotiation.
- New Term Agreement.

12. Renewal Benefits:
- Discounted product pricing.
- Priority inventory access.
- Dedicated account management.
- Exclusive promotional deals.

13. Term & Termination
- Initial term: 18 months.
- Automatic renewal unless terminated with 60-day notice.
- Immediate termination for breaches, fraudulent activities, or policy violations.
- Buyers must fulfill pending orders post-termination.

14. Underperformance Consequences
1st Month: Warning and corrective action plan.
2nd Month: Reduced access to exclusive product lines.
3rd Month: Commission structure adjustments.
4th Month: Partnership suspension.

15. Blacklisting Conditions
- Frequent order cancellations.
- High customer complaints and refunds.
- Selling counterfeit or misrepresented products.
- Failure to adhere to agreement terms.
- Blacklisting period: 24 months minimum.

16. Sustainability & ESG Compliance
Carbon Footprint:
- Annual carbon footprint reporting.
- Target: 5% reduction per year.
- Green packaging and waste reduction initiatives.

Packaging Sustainability:
- 100% recyclable materials by 2026.
- Plastic reduction targets.

Labor Practices:
- Compliance with fair wage certification.
- No child labor.
- Equal opportunity policies.

Supply Chain Ethics:
- Adherence to fair trade standards.
- Supplier code of conduct compliance.

17. Digital Presence & Content Standards
Image Standards:
- Minimum resolution: 2000x2000px.
- File format: PNG/JPEG.
- Background: Pure white (RGB: 255,255,255).
- Multiple angles: Minimum 6 images per product.
- Zoom capability: 200% clarity.

18. Product Information:
- Detailed specifications.
- Material composition.
- Country of origin.
- Warranty details.
- Safety certifications (if applicable).

19. Technology & API Requirements
- REST API for real-time inventory updates.
- Automated order processing.
- Secure customer data synchronization.
- Real-time order tracking.
- AI-driven stock management.

20. Commission Structure
Base Commission Rates:
- Standard Products: 15%
- Premium Products: 18%
- Luxury Products: 20%

21. Performance-Based Adjustments:
- Sales over $50,000/month: -0.5% reduction.
- Sales over $100,000/month: -1.0% reduction.
- Customer Rating above 4.8/5: -0.3% reduction.

22. Legal Disclaimers
This agreement is governed under U.S. law and is legally binding under federal and applicable state laws.`


  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${is4K ? "lg:gap-8 xl:gap-10" : ""}`}>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={(e) => updateFormData("businessName", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Business Type"
                value={formData.businessType}
                onChange={(e) => updateFormData("businessType", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="EIN Number"
                value={formData.einNumber}
                onChange={(e) => updateFormData("einNumber", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="TIN Number"
                value={formData.tinNumber}
                onChange={(e) => updateFormData("tinNumber", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${is4K ? "lg:gap-8 xl:gap-10" : ""}`}>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={(e) => updateFormData("contactPerson", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-[var(--primary-color)] border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-hover-color)]`}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${is4K ? "lg:gap-8 xl:gap-10" : ""}`}>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Bank Name"
                value={formData.bankName}
                onChange={(e) => updateFormData("bankName", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={(e) => updateFormData("accountNumber", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Routing Number"
                value={formData.routingNumber}
                onChange={(e) => updateFormData("routingNumber", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Bank Address"
                value={formData.bankAddress}
                onChange={(e) => updateFormData("bankAddress", e.target.value)}
                className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
              />
            </div>
          </div>
        )
      case 4:
        return (
          <div className={`space-y-6 ${is4K ? "lg:space-y-8 xl:space-y-10" : ""}`}>
            {/* Terms Content */}
            <div className="bg-white rounded-2xl  overflow-hidden">
              <div
                className={`h-64 md:h-80 lg:h-96 ${is4K ? "xl:h-[32rem]" : ""} overflow-y-auto p-4 md:p-6 ${is4K ? "lg:p-8 xl:p-10" : ""} border-b border-gray-200`}
              >
                <div
                  className={`space-y-3 text-xs md:text-sm ${is4K ? "lg:text-base xl:text-lg" : ""} text-gray-700 leading-relaxed`}
                >
                  {termsContent
                    .trim()
                    .split("\n")
                    .map((line, index) => {
                      const isHeading = /^\d+\.\s/.test(line.trim())
                      return (
                        <p
                          key={index}
                          className={
                            isHeading
                              ? `text-[var(--secondary-color)] font-semibold text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""}`
                              : ""
                          }
                        >
                          {line}
                        </p>
                      )
                    })}
                </div>
              </div>
            </div>

            {/* Legal Disclaimers */}
            <div
              className={`bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-xl p-4 md:p-6 ${is4K ? "lg:p-8 xl:p-10" : ""}`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`flex-shrink-0 w-6 h-6 ${is4K ? "lg:w-8 lg:h-8 xl:w-10 xl:h-10" : ""} bg-[var(--secondary-color)] rounded-full flex items-center justify-center`}
                >
                  <span className={`text-white text-xs ${is4K ? "lg:text-sm xl:text-base" : ""} font-bold`}>!</span>
                </div>
                <div>
                  <h3
                    className={`font-semibold text-gray-800 mb-2 text-base md:text-lg ${is4K ? "lg:text-xl xl:text-2xl" : ""}`}
                  >
                    Legal Disclaimers
                  </h3>
                  <p className={`text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} text-gray-700`}>
                    This agreement constitutes a legally binding contract under Indian law. Digital signatures collected
                    comply with IT Act, 2000.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Signature Section */}
            <div className={`space-y-4 ${is4K ? "lg:space-y-6 xl:space-y-8" : ""}`}>
              <h3 className={`text-lg md:text-xl ${is4K ? "lg:text-2xl xl:text-3xl" : ""} font-semibold text-gray-800`}>
                Digital Signature
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${is4K ? "lg:gap-8 xl:gap-10" : ""}`}>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Authorized Signatory Name"
                    value={formData.signatoryName}
                    onChange={(e) => updateFormData("signatoryName", e.target.value)}
                    className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
                  />
                </div>
                <div className="space-y-2 relative">
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.signatureDate}
                    onChange={(e) => updateFormData("signatureDate", e.target.value)}
                    className={`w-full px-4 py-3 md:py-4 ${is4K ? "lg:px-6 lg:py-5 xl:px-8 xl:py-6" : ""} border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} hover:border-[var(--primary-light-text-color)]`}
                  />
                </div>
              </div>
            </div>

            {/* Acceptance Checkbox */}
            <div
              className={`flex items-start space-x-3 p-4 md:p-6 ${is4K ? "lg:p-8 xl:p-10" : ""} bg-[var(--primary-header-color)] rounded-xl`}
            >
              <input
                type="checkbox"
                id="agreement-acceptance"
                checked={formData.accepted}
                onChange={(e) => updateFormData("accepted", e.target.checked)}
                className={`w-5 h-5 ${is4K ? "lg:w-6 lg:h-6 xl:w-7 xl:h-7" : ""} text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)] mt-1 cursor-pointer`}
              />
              <label
                htmlFor="agreement-acceptance"
                className={`text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} text-gray-700 cursor-pointer`}
              >
                I accept the terms and conditions
              </label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={`min-h-screen bg-[var(--primary-header-color)] py-4 md:py-8 ${is4K ? "lg:py-12 xl:py-16" : ""} px-4 ${is4K ? "max-w-[2400px] mx-auto" : "max-w-7xl mx-auto"}`}
    >
      <div className={`${is4K ? "max-w-6xl" : "max-w-4xl"} mx-auto`}>
        {/* Header */}
        <div className={`text-center mb-6 md:mb-8 ${is4K ? "lg:mb-12 xl:mb-16" : ""}`}>
          <h1
            className={`text-[var(--secondary-color)] text-lg md:text-xl lg:text-2xl ${is4K ? "xl:text-3xl" : ""} font-medium mb-2 ${is4K ? "lg:mb-4" : ""}`}
          >
            De Koshur Crafts Bazaar LLC - United States of America
          </h1>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl ${is4K ? "xl:text-5xl" : ""} font-bold text-gray-800 mb-2 md:mb-4 ${is4K ? "lg:mb-6" : ""}`}
          >
            Drop Shipping Buyer Partnership Agreement
          </h2>
          <p className={`text-[var(--secondary-color)] text-base md:text-lg ${is4K ? "lg:text-xl xl:text-2xl" : ""}`}>
            Fill out the e Agreement.
          </p>
        </div>

        {/* Progress Steps */}
        <div className={`mb-8 md:mb-12 ${is4K ? "lg:mb-16 xl:mb-20" : ""}`}>
          <div className={`flex items-center justify-between ${is4K ? "max-w-5xl" : "max-w-3xl"} mx-auto`}>
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              const isClickable = currentStep >= step.number

              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      isClickable ? "hover:scale-105" : ""
                    }`}
                    onClick={() => isClickable && setCurrentStep(step.number)}
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 ${is4K ? "lg:w-16 lg:h-16 xl:w-20 xl:h-20" : ""} rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? "bg-[var(--primary-color)] text-white shadow-lg"
                          : isActive
                            ? "bg-[var(--primary-color)] text-white shadow-lg scale-110"
                            : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle
                          className={`w-5 h-5 md:w-6 md:h-6 ${is4K ? "lg:w-8 lg:h-8 xl:w-10 xl:h-10" : ""}`}
                        />
                      ) : (
                        <span className={`text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} font-semibold`}>
                          {step.number}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs md:text-sm ${is4K ? "lg:text-base xl:text-lg" : ""} mt-2 text-center transition-colors duration-300 ${
                        isActive ? "text-[var(--primary-color)] font-semibold" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 ${is4K ? "lg:h-1" : ""} mx-2 md:mx-4 ${is4K ? "lg:mx-6 xl:mx-8" : ""} transition-colors duration-300 ${
                        currentStep > step.number ? "bg-[var(--primary-color)]" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <div
          className={`bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-12 ${is4K ? "xl:p-16" : ""} mb-6 md:mb-8 ${is4K ? "lg:mb-12" : ""} transition-all duration-300 hover:shadow-2xl`}
        >
          <div className="animate-fadeIn">{renderStepContent()}</div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className={`px-6 py-3 md:px-8 md:py-4 ${is4K ? "lg:px-10 lg:py-5 xl:px-12 xl:py-6" : ""} bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-all duration-200 font-medium text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} transform hover:scale-105 active:scale-95`}
          >
            <span className="inline">←</span>
            <span className="hidden md:inline ml-2">BACK</span>
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceedToNext()}
            className={`px-6 py-3 md:px-8 md:py-4 ${is4K ? "lg:px-10 lg:py-5 xl:px-12 xl:py-6" : ""} rounded-xl transition-all duration-200 font-medium text-sm md:text-base ${is4K ? "lg:text-lg xl:text-xl" : ""} transform hover:scale-105 active:scale-95 ${
              canProceedToNext()
                ? currentStep === 4
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  : "bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span className="hidden md:inline mr-2">{currentStep === 4 ? "SUBMIT" : "NEXT"}</span>
            <span className="inline">{currentStep === 4 ? "✓" : "→"}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        :root {
          --secondary-hover-color: #f48261;
          --secondary-color: #d85834;
          --secondary-light-color: #f9c6b2;
          --primary-hover-color: #2a5f7a;
          --primary-color: #1b4f68;
          --primary-light-text-color: #346880;
          --primary-header-color: #e4e6eb;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        input:focus {
          transform: translateY(-1px);
        }
        
        @media (max-width: 640px) {
          .grid-cols-1 {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
