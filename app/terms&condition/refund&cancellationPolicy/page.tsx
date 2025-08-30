import React from 'react';
import { NextPage } from 'next';

const RefundCancellation: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      

      {/* Header */}
      <header className="bg-[var(--secondary-color)] text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-17">
          <h1 className="text-3xl font-bold">Refund & Cancellation Policy</h1>
          <p className="mt-2 text-lg">B2B Connect - De Koshur Crafts Bazaar</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">Refund & Cancellation Policy</h2>
          <p className="text-gray-700 mb-4">
            <strong>Effective Date:</strong> August 30, 2025<br />
            <strong>Last Updated:</strong> August 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            This Refund & Cancellation Policy applies to all payments made to B2B Connect (subsidiary of De Koshur Crafts Bazaar LLC, USA) and De Koshur Crafts Bazaar Private Limited, India (“we,” “our,” or “the Platform”). By subscribing to our services, you (“vendor,” “buyer,” or “subscriber”) acknowledge and agree to the following terms regarding refunds and cancellations.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">1. Nature of Payments</h2>
          <p className="text-gray-700 mb-4">Payments made on our platform are strictly for subscription-based services, including but not limited to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Vendor onboarding and verification.</li>
            <li>Subscription to partnership tiers.</li>
            <li>Later entry / fast-track access programs.</li>
            <li>Platform service packages (Starter, Growth, Premium, etc.).</li>
          </ul>
          <p className="text-gray-700 mt-4">These payments do not constitute product purchases and are therefore governed by service-based refund rules.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">2. Refund Eligibility</h2>
          <p className="text-gray-700 mb-4">All subscription fees and later-entry payments are non-refundable, except in cases where:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A duplicate payment has been processed in error.</li>
            <li>A technical error on our platform caused incorrect billing.</li>
            <li>Services were not activated due to platform failure (not user negligence).</li>
          </ul>
          <p className="text-gray-700 mt-4">Refund requests outside these exceptions will not be entertained.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">3. Cancellations</h2>
          <p className="text-gray-700 mb-4">Subscriptions may be canceled by the subscriber at any time through their account dashboard or by submitting a formal written request to our support team.</p>
          <p className="text-gray-700 mb-4">Upon cancellation:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to services will continue until the end of the current billing cycle.</li>
            <li>No pro-rated or partial refunds will be issued for unused periods.</li>
          </ul>
          <p className="text-gray-700 mt-4">Cancellation of later-entry packages is not permitted, as these services involve immediate evaluation and administrative processing.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">4. Refund Process</h2>
          <p className="text-gray-700 mb-4">If a refund is approved under Section 2, it will be:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Credited back to the original payment method.</li>
            <li>Processed within 7–14 business days.</li>
          </ul>
          <p className="text-gray-700 mt-4">The timeline may vary depending on the user’s bank, card issuer, or payment gateway.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">5. Disputes & Chargebacks</h2>
          <p className="text-gray-700 mb-4">If a subscriber initiates a chargeback or payment dispute without first contacting our support team, we reserve the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Suspend or terminate account access.</li>
            <li>Deny eligibility for future participation in the platform.</li>
          </ul>
          <p className="text-gray-700 mt-4">Our dispute resolution policy under the Terms of Service will apply.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">6. Policy Amendments</h2>
          <p className="text-gray-700">
            We reserve the right to update or amend this Refund & Cancellation Policy at any time. Updates will be posted on this page with a revised effective date.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-4">For refund or cancellation-related inquiries, please contact us:</p>
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

export default RefundCancellation;