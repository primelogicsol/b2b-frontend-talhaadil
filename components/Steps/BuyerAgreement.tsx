"use client"

import { useState, useEffect } from "react"
import { FileText, CheckCircle } from "lucide-react"

interface AgreementData {
  accepted: boolean
}

interface BuyerAgreementProps {
  data?: AgreementData
  onUpdate: (data: AgreementData) => void
  onNext: () => void
  onPrev: () => void
}

export default function BuyerAgreement({ data, onUpdate, onNext, onPrev }: BuyerAgreementProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [accepted, setAccepted] = useState(data?.accepted || false)

  const handleAcceptanceChange = (value: boolean) => {
    setAccepted(value)
    onUpdate({ accepted: value })
  }

  const handleNext = () => {
    if (accepted) onNext()
  }

  const termsContent = `
1. PARTNERSHIP TERMS
This agreement establishes the terms and conditions for your partnership with DKC (Digital Knowledge Commerce). By accepting this agreement, you acknowledge that you have read, understood, and agree to be bound by all terms outlined herein.

2. PARTNERSHIP BENEFITS
- Access to DKC's comprehensive marketplace platform
- Marketing support and promotional opportunities
- Technical assistance and customer support
- Access to analytics and reporting tools
- Training and development resources

3. RESPONSIBILITIES
As a DKC partner, you agree to:
- Maintain high-quality products and services
- Provide accurate product information and descriptions
- Respond promptly to customer inquiries
- Comply with all applicable laws and regulations
- Maintain professional standards in all business dealings

4. QUALITY STANDARDS
All partners must maintain a minimum KPI score as outlined in their specific partnership tier. Failure to maintain required standards may result in partnership review or termination.

5. PAYMENT TERMS
- Commission rates vary by partnership tier
- Payments are processed monthly
- All fees and charges will be clearly communicated
- Partners are responsible for their own tax obligations

6. INTELLECTUAL PROPERTY
- Partners retain ownership of their product intellectual property
- DKC retains rights to platform technology and branding
- Partners grant DKC license to display and market their products

7. CONFIDENTIALITY
Both parties agree to maintain confidentiality of proprietary information shared during the partnership.

8. TERMINATION
Either party may terminate this agreement with 30 days written notice. Upon termination, all obligations cease except those that by their nature should survive.

9. DISPUTE RESOLUTION
Any disputes will be resolved through binding arbitration in accordance with applicable commercial arbitration rules.

10. GOVERNING LAW
This agreement is governed by the laws of the jurisdiction where DKC is incorporated.

By checking the acceptance box below, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions of this Buyer Partnership Agreement.
  `

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <FileText className="text-white w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Buyer Partnership Agreement</h1>
        <p className="text-xl text-gray-600">Please review and accept the terms and conditions to proceed</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Terms */}
        <div className="h-96 overflow-y-auto p-8 border-b border-gray-200 bg-white">
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed font-sans bg-white">
            {termsContent.trim().split('\n').map((line, index) => {
              const isHeading = /^\d+\.\s/.test(line.trim())
              return (
                <p
                  key={index}
                  className={isHeading ? "text-[var(--secondary-color)] font-semibold" : ""}
                >
                  {line}
                </p>
              )
            })}
          </div>
        </div>

        {/* Checkbox */}
        <div className="p-8 bg-gray-300">
          <div className="flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              id="agreement-acceptance"
              checked={accepted}
              onChange={(e) => handleAcceptanceChange(e.target.checked)}
              className="w-5 h-5 text-[var(--secondary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)] mt-1"
            />
            <label htmlFor="agreement-acceptance" className="text-sm text-gray-700 cursor-pointer">
              I have read, understood, and agree to be bound by all terms and conditions of this Buyer Partnership
              Agreement. I acknowledge that this agreement constitutes a legally binding contract between myself/my
              organization and DKC.
            </label>
          </div>

         

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 mb-6 bg-gray-300">
            <p className="mb-2">
              <strong>Important:</strong> By accepting this agreement, you are entering into a legally binding contract.
              Please ensure you have the authority to bind your organization to these terms.
            </p>
            <p>If you have any questions about these terms, please contact our legal team before proceeding.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2 sm:px-8 sm:py-4 border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          ←  
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 sm:px-8 sm:py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg"
        >
            →
        </button>
      </div>
    </div>
  )
}
