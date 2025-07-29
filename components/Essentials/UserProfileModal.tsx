"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-[var(--primary-background-color)] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Section: Profile Picture, Name, Status */}
        <div className="flex flex-col items-center justify-center px-4 py-8 sm:p-12 bg-[var(--primary-color)] text-white text-center">
  <Image
    src="/placeholder.svg?height=200&width=200&text=User+Avatar"
    alt="User Profile Picture"
    width={160}
    height={160}
    className="object-cover rounded-full border-4 border-white shadow-md w-32 h-32 sm:w-40 sm:h-40"
  />
  <h2 className="text-2xl sm:text-4xl font-extrabold mt-4 sm:mt-6 break-words">
    John Doe
  </h2>
</div>


        {/* Profile Details Section */}
        <section className="p-6 sm:p-8 border-b border-[var(--primary-hover-color)]">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Form Details */}
            <div className="bg-[var(--primary-background-color)] rounded-lg p-5 shadow-sm">
              <h4 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">Form Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Full Name:</span>
                  <span className="text-gray-700">John Doe</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Email:</span>
                  <span className="text-gray-700">john.doe@example.com</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Phone:</span>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Address:</span>
                  <span className="text-gray-700">123 Main St, Anytown</span>
                </div>
              </div>
            </div>
            {/* Partnership Information */}
            <div className="bg-[var(--primary-background-color)] rounded-lg p-5 shadow-sm">
              <h4 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">Partnership Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Partner Type:</span>
                  <span className="text-gray-700">Premium Member</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Joined Date:</span>
                  <span className="text-gray-700">Jan 15, 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Active Projects:</span>
                  <span className="text-gray-700">3</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Referral Code:</span>
                  <span className="text-gray-700">JD-7890</span>
                </div>
              </div>
            </div>
            {/* General User Info */}
            <div className="lg:col-span-1 bg-[var(--primary-background-color)] rounded-lg p-5 shadow-sm">
              <h4 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">General Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Last Login:</span>
                  <span className="text-gray-700">July 24, 2025, 4:34 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Account Status:</span>
                  <span className="text-gray-700">Active</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-2 px-3 rounded-md transition-colors duration-200">
                  <span className="font-medium text-[var(--primary-light-text-color)]">Preferred Language:</span>
                  <span className="text-gray-700">English</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agreements Section */}
        <section className="p-6 sm:p-8 border-b border-[var(--primary-hover-color)]">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">Agreements</h3>
          <div className="bg-[var(--primary-background-color)] rounded-lg p-5 shadow-sm">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Terms of Service</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">Accepted on: Jan 1, 2023</p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Privacy Policy</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">Accepted on: Jan 1, 2023</p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Non-Disclosure Agreement (NDA)</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">Status: Pending Acceptance</p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Service Level Agreement (SLA)</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">Accepted on: Feb 10, 2023</p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Submitted Documents Section */}
        <section className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">Submitted Documents</h3>
          <div className="bg-[var(--primary-background-color)] rounded-lg p-5 shadow-sm">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Identity Proof (Passport)</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">
                    Submitted: Mar 5, 2023 | Status: Approved
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Address Proof (Utility Bill)</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">
                    Submitted: Mar 5, 2023 | Status: Approved
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Business License</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">
                    Submitted: Apr 1, 2023 | Status: Pending Review
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-md transition-colors duration-200">
                <div>
                  <p className="font-medium text-[var(--primary-color)]">Bank Statement</p>
                  <p className="text-xs text-[var(--primary-light-text-color)] mt-1">
                    Submitted: Apr 15, 2023 | Status: Rejected (Invalid Format)
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[var(--secondary-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200 underline"
                >
                  View Document
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  )
}
