// pages/contact-support.tsx
import { NextPage } from 'next';
import Head from 'next/head';

const ContactSupport: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Head>
        <title>Contact & Customer Support - De Koshur Crafts Bazaar</title>
        <meta name="description" content="Contact and customer support details for De Koshur Crafts Bazaar and B2B Connect." />
      </Head>

     

      {/* Header */}
      <header className="bg-[var(--secondary-color)] text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-17">
          <h1 className="text-3xl font-bold">Contact & Customer Support</h1>
          <p className="mt-2 text-lg">B2B Connect - De Koshur Crafts Bazaar</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">Contact & Customer Support</h2>
          <p className="text-gray-700 mb-4">
            We are committed to providing transparent, responsive, and professional support to all our vendors, buyers, and institutional partners. Please use the contact details below for general inquiries, compliance questions, or technical support.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">1. United States Office</h2>
          <p className="text-gray-700 mb-4">
            <strong>De Koshur Crafts Bazaar LLC (Parent Company)</strong><br />
            Registered Address: [Insert Full Legal Address, USA]<br />
            Phone: [Insert USA Phone Number]<br />
            Email: support.usa@dekoshurcrafts.com
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">2. India Office</h2>
          <p className="text-gray-700 mb-4">
            <strong>De Koshur Crafts Bazaar Private Limited</strong><br />
            Registered Address: [Insert Full Legal Address, India]<br />
            Phone: [Insert India Phone Number]<br />
            Email: support.india@dekoshurcrafts.com
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">3. Subsidiary Platform</h2>
          <p className="text-gray-700 mb-4">
            <strong>B2B Connect (Subsidiary of De Koshur Crafts Bazaar LLC, USA)</strong><br />
            Platform Headquarters: [Insert Address]<br />
            Email: connect@dekoshurcrafts.com<br />
            Website: [Insert URL]
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">4. Customer Support Desk</h2>
          <p className="text-gray-700 mb-4">
            For onboarding, KYC verification, billing, or technical assistance:<br />
            Submit a request via our Support Portal: [Insert Link]<br />
            Email our Helpdesk: helpdesk@dekoshurcrafts.com<br />
            For urgent compliance or payment issues, please mark your email as URGENT.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">5. Escalation & Resolution</h2>
          <p className="text-gray-700 mb-4">
            If your issue is not resolved within 5 business days, you may escalate to our Compliance & Legal Support Team:<br />
            compliance@dekoshurcrafts.com
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">6. Business Hours</h2>
          <p className="text-gray-700 mb-4">
            USA Office: Monday – Friday, 9:00 AM – 6:00 PM EST<br />
            India Office: Monday – Saturday, 10:00 AM – 7:00 PM IST<br />
            Support Portal: 24/7 Ticket Submission
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">7. Legal Information</h2>
          <p className="text-gray-700 mb-4">
            USA Tax ID / EIN: [Insert Number]<br />
            India CIN / GSTIN: [Insert Number]<br />
            Registered Trade Name: De Koshur Crafts Bazaar
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContactSupport;