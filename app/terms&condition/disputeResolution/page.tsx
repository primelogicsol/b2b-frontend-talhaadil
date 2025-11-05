import React from 'react';
import { NextPage } from 'next';

const DisputeResolution: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
    

      {/* Header */}
      <header className="bg-[var(--secondary-color)] text-white pb-10 pt-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-17">
          <h1 className="text-3xl font-bold">Dispute Resolution & Buyer Protection Policy</h1>
          <p className="mt-2 text-lg">B2B Connect - De Koshur Crafts Bazaar</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">Dispute Resolution & Buyer Protection Policy</h2>
          <p className="text-gray-700 mb-4">
            <strong>Effective Date:</strong> August 30, 2025<br />
            <strong>Last Updated:</strong> August 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            This Dispute Resolution & Buyer Protection Policy (“Policy”) governs how disputes between subscribers (vendors, buyers, or institutions) and the Platform (B2B Connect, De Koshur Crafts Bazaar LLC, USA, and De Koshur Crafts Bazaar Private Limited, India) are addressed. Our commitment is to ensure fair treatment, transparency, and protection for all legitimate users of the platform.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">1. Scope of Protection</h2>
          <p className="text-gray-700 mb-4">This Policy applies to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Subscription payments (vendor, buyer, or institution).</li>
            <li>Later-entry / fast-track access fees.</li>
            <li>Platform-based services governed by partnership tiers.</li>
          </ul>
          <p className="text-gray-700 mt-4">This Policy does not apply to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Off-platform transactions between vendors and third parties.</li>
            <li>Services or goods not purchased through official platform channels.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">2. Dispute Resolution Principles</h2>
          <p className="text-gray-700 mb-4">We handle disputes with the following principles:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Fairness:</strong> Both parties must be heard equally.</li>
            <li><strong>Transparency:</strong> Processes, timelines, and decisions are communicated in writing.</li>
            <li><strong>Compliance:</strong> All actions comply with applicable laws (USA, India, GDPR, AML/KYC).</li>
            <li><strong>Finality:</strong> Resolutions issued by the platform are binding unless otherwise required by law.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">3. Buyer Protection Commitments</h2>
          <p className="text-gray-700 mb-4">Subscribers are protected in the following cases:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Fraud Prevention:</strong> If a vendor, buyer, or institution provides false identity or engages in fraud.</li>
            <li><strong>Unauthorized Charges:</strong> If a payment is processed without proper authorization.</li>
            <li><strong>Service Non-Delivery:</strong> If subscription services are not activated due to platform failure (excluding user negligence).</li>
            <li><strong>Breach of Policy:</strong> If another party violates platform terms, undermining legitimate participation.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">4. Resolution Process</h2>
          <p className="text-gray-700 mb-4">The resolution process includes the following steps:</p>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Notification:</strong> All disputes must be submitted in writing to our support team within 14 days of the incident.</li>
            <li><strong>Review:</strong> The Platform will request supporting documents (payment receipts, screenshots, contracts, KYC records).</li>
            <li><strong>Investigation:</strong> The Platform will conduct a fair review, which may include interviews, compliance checks, and audits.</li>
            <li><strong>Resolution:</strong> A decision will be communicated within 30 business days, which may include:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Refund under our Refund & Cancellation Policy.</li>
                <li>Service credits or alternative remedies.</li>
                <li>Suspension or termination of violating accounts.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">5. Escalation & Arbitration</h2>
          <p className="text-gray-700 mb-4">If a dispute is not resolved internally, it may be escalated to arbitration in accordance with:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>USA:</strong> Laws of Delaware, jurisdiction of U.S. federal/state courts.</li>
            <li><strong>India:</strong> Arbitration & Conciliation Act, 1996, jurisdiction of Srinagar, J&K courts.</li>
          </ul>
          <p className="text-gray-700 mt-4">Arbitration decisions shall be final and binding.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">6. Fraud & Counterfeit Safeguards</h2>
          <p className="text-gray-700 mb-4">The Platform reserves the right to suspend or blacklist vendors, buyers, or institutions found guilty of:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Submitting counterfeit documents.</li>
            <li>Engaging in money laundering.</li>
            <li>Misrepresenting business authenticity.</li>
          </ul>
          <p className="text-gray-700 mt-4">Such actions may be reported to regulatory authorities.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">7. No Chargeback Abuse</h2>
          <p className="text-gray-700 mb-4">Subscribers agree not to misuse bank or payment gateway chargeback mechanisms. Unauthorized chargebacks may result in:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Immediate account suspension.</li>
            <li>Legal recovery proceedings.</li>
            <li>Permanent denial of future access.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">8. Contact for Disputes</h2>
          <p className="text-gray-700 mb-4">For dispute-related inquiries, please contact us:</p>
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

export default DisputeResolution;