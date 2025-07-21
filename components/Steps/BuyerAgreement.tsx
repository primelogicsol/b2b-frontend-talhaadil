"use client"

import { useState } from "react"

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
  const [accepted, setAccepted] = useState(data?.accepted || false)

  const handleAcceptanceChange = (value: boolean) => {
    setAccepted(value)
    onUpdate({ accepted: value })
  }

  const handleNext = () => {
    if (accepted) {
      onNext()
    }
  }

  const termsContent = `
BUYER PARTNERSHIP AGREEMENT

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
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <span className="text-2xl text-white">📋</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Buyer Partnership Agreement</h1>
        <p className="text-xl text-gray-600">Please review and accept the terms and conditions to proceed</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Terms Content */}
        <div className="h-96 overflow-y-auto p-8 border-b border-gray-200 bg-white">
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-sans bg-white">
              {termsContent}
            </pre>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className="p-8 bg-white">
          <div className="flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              id="agreement-acceptance"
              checked={accepted}
              onChange={(e) => handleAcceptanceChange(e.target.checked)}
              className="w-5 h-5 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)] mt-1"
            />
            <label htmlFor="agreement-acceptance" className="text-sm text-gray-700 cursor-pointer">
              I have read, understood, and agree to be bound by all terms and conditions of this Buyer Partnership
              Agreement. I acknowledge that this agreement constitutes a legally binding contract between myself/my
              organization and DKC.
            </label>
          </div>

          {accepted && (
            <div className="bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--primary-color)]">Agreement Accepted</p>
                  <p className="text-xs text-gray-600">
                    You have successfully accepted the partnership terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-xs text-gray-500 mb-6 bg-white">
            <p className="mb-2">
              <strong>Important:</strong> By accepting this agreement, you are entering into a legally binding contract.
              Please ensure you have the authority to bind your organization to these terms.
            </p>
            <p>If you have any questions about these terms, please contact our legal team before proceeding.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!accepted}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Continue to Application Status →
        </button>
      </div>
    </div>
  )
}
