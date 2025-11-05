import React from 'react';
import { NextPage } from 'next';

const KycVendorOnboarding: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
    

      {/* Header */}
      <header className="bg-[var(--secondary-color)] text-white pb-10 pt-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-17">
          <h1 className="text-3xl font-bold">KYC & Vendor Onboarding Policy</h1>
          <p className="mt-2 text-lg">B2B Connect - De Koshur Crafts Bazaar</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">KYC & Vendor Onboarding Policy</h2>
          <p className="text-gray-700 mb-4">
            <strong>Effective Date:</strong> August 30, 2025<br />
            <strong>Last Updated:</strong> August 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            This KYC & Vendor Onboarding Policy (“Policy”) governs how B2B Connect (subsidiary of De Koshur Crafts Bazaar LLC, USA) and De Koshur Crafts Bazaar Private Limited, India (together, “the Platform”) verify and onboard vendors, artisans, businesses, and institutions. Our goal is to ensure legitimate, genuine, and compliant partnerships, protecting our ecosystem from counterfeits, fraud, and exploitation.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">1. Purpose of KYC</h2>
          <p className="text-gray-700 mb-4">The Know Your Customer (KYC) process is designed to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Verify the identity and authenticity of vendors and institutions.</li>
            <li>Ensure compliance with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) regulations.</li>
            <li>Protect buyers from counterfeits, fraud, and misrepresentation.</li>
            <li>Build a trusted global marketplace for Kashmiri crafts and related industries.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">2. Scope</h2>
          <p className="text-gray-700 mb-4">This Policy applies to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individual artisans.</li>
            <li>Craft cooperatives and business entities.</li>
            <li>Institutional partners, NGOs, and buyers.</li>
            <li>Any entity applying for partnership, onboarding, or subscription.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">3. Required Documents for KYC</h2>
          <p className="text-gray-700 mb-4">All vendors must provide:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Identity Proof (Individuals):</strong> Passport, Aadhaar (India), SSN/Driver’s License (USA), or equivalent government ID.</li>
            <li><strong>Business Proof (Entities):</strong> Business registration certificate, GST/VAT number, PAN/TIN, or Incorporation Certificate.</li>
            <li><strong>Address Proof:</strong> Utility bill, rental agreement, or official letter not older than 3 months.</li>
            <li><strong>Bank Details:</strong> Cancelled cheque, bank statement, or IBAN (for payouts).</li>
            <li><strong>Craft Legitimacy Proof (if applicable):</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Geographical Indication (GI) certification.</li>
                <li>Artisan registration card.</li>
                <li>Trade licenses or cooperative membership certificates.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">4. Verification Process</h2>
          <p className="text-gray-700 mb-4">The verification process includes the following steps:</p>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submission of application + required documents.</li>
            <li>Initial screening by Platform compliance team.</li>
            <li>Cross-verification using government/third-party databases.</li>
            <li>Background check for fraud, blacklisting, or counterfeit activity.</li>
            <li>Approval or rejection communicated within 7–14 business days.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">5. Vendor Obligations</h2>
          <p className="text-gray-700 mb-4">By completing onboarding, vendors agree to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide only accurate and valid documents.</li>
            <li>Update KYC information if details change (e.g., address, ownership).</li>
            <li>Cooperate with audits, inspections, or renewal checks.</li>
            <li>Abide by all Platform policies (Refund, Dispute Resolution, Compliance).</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">6. Rejection & Blacklisting</h2>
          <p className="text-gray-700 mb-4">The Platform reserves the right to reject or suspend vendors if:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>KYC documents are false, incomplete, or forged.</li>
            <li>Vendor engages in counterfeit or unethical practices.</li>
            <li>Vendor fails to meet retention and KPI requirements for progression.</li>
          </ul>
          <p className="text-gray-700 mt-4">Rejected vendors may reapply only after addressing compliance issues.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">7. Periodic Review</h2>
          <p className="text-gray-700 mb-4">KYC details must be reviewed and updated:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Every 12 months for active vendors.</li>
            <li>Immediately if flagged for suspicious activity.</li>
            <li>At each progression stage of the 7.5-year partnership framework.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">8. Data Protection</h2>
          <p className="text-gray-700 mb-4">All KYC data is stored securely in compliance with:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GDPR, CCPA, and Indian IT Act.</li>
            <li>Data is encrypted and used strictly for compliance and onboarding purposes.</li>
            <li>Information is not sold or shared with unauthorized third parties.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">9. Contact for KYC Support</h2>
          <p className="text-gray-700 mb-4">For KYC or onboarding-related inquiries, please contact us:</p>
          <p className="text-gray-700 mb-2">
            <strong>De Koshur Crafts Bazaar LLC (USA)</strong><br />
            Registered Address: Your address<br />
            Email: Your contact email
          </p>
          <p className="text-gray-700">
            <strong>De Koshur Crafts Bazaar Private Limited (India)</strong><br />
            Registered Address: Your address<br />
            Email: Your contact email
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default KycVendorOnboarding;