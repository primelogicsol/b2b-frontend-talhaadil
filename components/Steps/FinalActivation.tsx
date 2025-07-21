export default function FinalActivation() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[var(--secondary-light-color)] rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Welcome to Your Partnership Activation!</h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Congratulations! Your partnership application has been successfully processed and approved. You are now
          officially part of the DKC partnership program and ready to start your journey with us.
        </p>

        {/* Partnership Badge */}
        <div className="bg-[var(--secondary-light-color)] rounded-2xl p-6 mb-8 border border-[var(--secondary-color)]/20">
          <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-2">Your Partnership Level</h3>
          <p className="text-3xl font-bold text-[var(--secondary-color)] mb-2">DKC Drop Shipping Partner</p>
          <p className="text-sm text-gray-600">Partnership ID: DKC-DS-2024-001</p>
        </div>

        {/* What's Next */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="text-left">
              <h3 className="font-medium mb-2 text-[var(--primary-color)]">Immediate Access:</h3>
              <ul className="space-y-1">
                <li>• Partner dashboard</li>
                <li>• Product listing tools</li>
                <li>• Analytics and reporting</li>
                <li>• Marketing resources</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-medium mb-2 text-[var(--primary-color)]">Support & Training:</h3>
              <ul className="space-y-1">
                <li>• Onboarding session</li>
                <li>• Training materials</li>
                <li>• Dedicated support team</li>
                <li>• Community access</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-medium py-4 px-6 rounded-xl transition-colors text-lg">
            Access Partner Dashboard
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="px-6 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-xl hover:bg-[var(--primary-color)] hover:text-white transition-colors">
              Download Partnership Kit
            </button>
            <button className="px-6 py-3 border border-[var(--secondary-color)] text-[var(--secondary-color)] rounded-xl hover:bg-[var(--secondary-color)] hover:text-white transition-colors">
              Schedule Onboarding Call
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Questions? Our partnership team is here to help.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="mailto:partnerships@dkc.com" className="text-[var(--primary-color)] hover:underline">
              partnerships@dkc.com
            </a>
            <a href="tel:+1-800-DKC-HELP" className="text-[var(--primary-color)] hover:underline">
              +1-800-DKC-HELP
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
