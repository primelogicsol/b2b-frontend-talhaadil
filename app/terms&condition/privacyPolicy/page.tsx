
import React from 'react';
import { NextPage } from 'next';

const TermsAndConditions: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
    
      {/* Header */}
      <header className="bg-[var(--secondary-color)] text-white pb-10 pt-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-17">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-lg">B2B Connect - De Koshur Crafts Bazaar</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            <strong>Effective Date:</strong> August 30, 2025<br />
            <strong>Last Updated:</strong> August 30, 2025
          </p>
          <p className="text-gray-700 mb-4">
            This Privacy Policy explains how B2B Connect, a subsidiary of De Koshur Crafts Bazaar LLC, USA, and De Koshur Crafts Bazaar Private Limited, India (together, “we,” “our,” or “the Platform”) collect, use, store, and protect personal information when you access or use our websites, platforms, or services. We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and Indian IT Act 2000 (and amendments).
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect the following types of information when you use our Platform:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personal Identification Data:</strong> Name, business name, address, phone number, email, tax ID, KYC documents.</li>
            <li><strong>Business Information:</strong> Product catalogs, certifications, licenses, supply chain data.</li>
            <li><strong>Payment Information:</strong> Bank account details, payment gateway identifiers, transaction records.</li>
            <li><strong>Technical Data:</strong> IP address, device type, browser, operating system, geolocation.</li>
            <li><strong>Usage Data:</strong> Platform navigation, vendor-buyer interactions, purchase history.</li>
            <li><strong>Cookies & Tracking:</strong> Analytics, personalization, and advertising identifiers.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">Your information is used for legitimate business purposes, including:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>To provide and operate our services.</li>
            <li>To verify identity and prevent fraud, counterfeits, or money laundering.</li>
            <li>To process transactions securely through authorized payment gateways.</li>
            <li>To comply with international regulations (AML/KYC, trade compliance).</li>
            <li>To personalize user experience and improve our marketplace.</li>
            <li>To send service-related communications, including updates and compliance notices.</li>
            <li>For legal obligations and dispute resolution.</li>
          </ol>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">3. Sharing of Information</h2>
          <p className="text-gray-700 mb-4">We do not sell your personal information. We may share data only in these circumstances:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Service Providers:</strong> Payment gateways, logistics partners, IT service providers.</li>
            <li><strong>Legal Compliance:</strong> Government agencies, regulators, or courts when legally required.</li>
            <li><strong>Affiliates & Subsidiaries:</strong> B2B Connect, De Koshur Crafts Bazaar LLC (USA), and De Koshur Crafts Bazaar Pvt. Ltd. (India).</li>
            <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or restructuring.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">4. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Since our operations span the USA, India, and global markets, your information may be transferred across borders. We ensure protection through:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Standard Contractual Clauses (SCCs) under GDPR.</li>
            <li>Compliance with CCPA and Indian data transfer guidelines.</li>
            <li>Encryption and secure transfer protocols.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">We retain your data only as long as necessary to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide services and comply with legal requirements.</li>
            <li>Maintain AML/KYC compliance.</li>
            <li>Resolve disputes and enforce agreements.</li>
          </ul>
          <p className="text-gray-700">When no longer needed, your data is securely deleted or anonymized.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">6. Security Measures</h2>
          <p className="text-gray-700 mb-4">We implement industry-standard security practices, including:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>SSL/TLS encryption</li>
            <li>Firewalls and intrusion detection</li>
            <li>Role-based access controls</li>
            <li>Regular security audits</li>
          </ul>
          <p className="text-gray-700">However, no system is 100% secure. Users share data at their own risk.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access, correct, or delete your personal data.</li>
            <li>Restrict or object to processing.</li>
            <li>Withdraw consent at any time.</li>
            <li>Request data portability.</li>
            <li>File a complaint with relevant data authorities.</li>
          </ul>
          <p className="text-gray-700">
            For EU/UK users, GDPR rights apply. For California residents, CCPA rights apply. For Indian users, IT Act protections apply.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">8. Cookies Policy</h2>
          <p className="text-gray-700 mb-4">We use cookies for:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Session management</li>
            <li>Analytics and performance tracking</li>
            <li>Personalization and recommendations</li>
          </ul>
          <p className="text-gray-700">Users may disable cookies in browser settings but some features may not function properly.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">9. Children’s Privacy</h2>
          <p className="text-gray-700">
            Our platform is strictly for business use only and is not directed toward children under 18. We do not knowingly collect data from minors.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy or your data, please contact us:</p>
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

export default TermsAndConditions;