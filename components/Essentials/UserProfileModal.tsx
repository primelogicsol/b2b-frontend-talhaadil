
"use client";

import Image from "next/image";
import { useState } from "react";

export default function UserProfileModal() {
  const [activeTab, setActiveTab] = useState("profile"); // 'profile', 'agreements', 'documents'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 h-screen">
      <div className="relative w-full max-w-3xl rounded-lg shadow-lg bg-white text-[var(--primary-header-color)] overflow-hidden">
        {/* Header Section */}
        <div className="relative h-32 bg-[var(--primary-color)] flex items-center justify-center">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <Image
              src="/images/cop.jpeg?height=120&width=120&text=User"
              alt="User Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-[var(--primary-dark-slate)] object-cover"
            />
          </div>
        </div>

        {/* User Name and Status */}
        <div className="pt-20 pb-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--primary-hover-color)]">John Doe</h2>
          <p className="text-sm text-[var(--secondary-color)] flex items-center justify-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></span>
            Online
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-[var(--primary-light-text-color)] px-6 pt-4">
          <button
            className={`py-3 px-6 text-sm font-medium transition-colors duration-200 ${
              activeTab === "profile"
                ? "border-b-2 border-[var(--secondary-hover-color)] text-[var(--secondary-hover-color)]"
                : "text-[var(--primary-light-text-color)] hover:text-[var(--secondary-color)]"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile Details
          </button>
          <button
            className={`py-3 px-6 text-sm font-medium transition-colors duration-200 ${
              activeTab === "agreements"
                ? "border-b-2 border-[var(--secondary-hover-color)] text-[var(--secondary-hover-color)]"
                : "text-[var(--primary-light-text-color)] hover:text-[var(--secondary-color)]"
            }`}
            onClick={() => setActiveTab("agreements")}
          >
            Agreements
          </button>
          <button
            className={`py-3 px-6 text-sm font-medium transition-colors duration-200 ${
              activeTab === "documents"
                ? "border-b-2 border-[var(--secondary-hover-color)] text-[var(--secondary-hover-color)]"
                : "text-[var(--primary-light-text-color)] hover:text-[var(--secondary-color)]"
            }`}
            onClick={() => setActiveTab("documents")}
          >
            Submitted Documents
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "profile" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Details */}
              <div className="bg-[var(--primary-color)] rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-header-color)]">Form Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Full Name:</span>
                    <span className="text-[var(--primary-header-color)]">John Doe</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Email:</span>
                    <span className="text-[var(--primary-header-color)]">john.doe@example.com</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Phone:</span>
                    <span className="text-[var(--primary-header-color)]">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Address:</span>
                    <span className="text-[var(--primary-header-color)]">123 Main St, Anytown</span>
                  </div>
                </div>
              </div>

              {/* Partnership Information */}
              <div className="bg-[var(--primary-color)] rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-header-color)]">Partnership Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Partner Type:</span>
                    <span className="text-[var(--primary-header-color)]">Premium Member</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Joined Date:</span>
                    <span className="text-[var(--primary-header-color)]">Jan 15, 2023</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Active Projects:</span>
                    <span className="text-[var(--primary-header-color)]">3</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Referral Code:</span>
                    <span className="text-[var(--primary-header-color)]">JD-7890</span>
                  </div>
                </div>
              </div>

              {/* General User Info */}
              <div className="md:col-span-2 bg-[var(--primary-color)] rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-header-color)]">General Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Last Login:</span>
                    <span className="text-[var(--primary-header-color)]">July 24, 2025, 4:34 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Account Status:</span>
                    <span className="text-[var(--primary-header-color)]">Active</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                    <span className="text-[var(--secondary-hover-color)]">Preferred Language:</span>
                    <span className="text-[var(--primary-header-color)]">English</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "agreements" && (
            <div className="bg-[var(--primary-color)] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-header-color)]">Agreements</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Terms of Service</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">Accepted on: Jan 1, 2023</p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Privacy Policy</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">Accepted on: Jan 1, 2023</p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Non-Disclosure Agreement (NDA)</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">Status: Pending Acceptance</p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Service Level Agreement (SLA)</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">Accepted on: Feb 10, 2023</p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="bg-[var(--primary-color)] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-header-color)]">Submitted Documents</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Identity Proof (Passport)</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">
                      Submitted: Mar 5, 2023 | Status: Approved
                    </p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Address Proof (Utility Bill)</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">
                      Submitted: Mar 5, 2023 | Status: Approved
                    </p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Business License</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">
                      Submitted: Apr 1, 2023 | Status: Pending Review
                    </p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
                  <div>
                    <p className="font-medium text-[var(--primary-header-color)]">Bank Statement</p>
                    <p className="text-xs text-[var(--secondary-hover-color)]">
                      Submitted: Apr 15, 2023 | Status: Rejected (Invalid Format)
                    </p>
                  </div>
                  <a href="#" className="text-[var(--primary-cyan-color)] hover:text-[var(--secondary-light-color)] text-sm mt-2 sm:mt-0 transition-colors duration-200">
                    View Document
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 flex justify-end gap-3">
        
          <button className="px-4 py-2 rounded-md bg-[var(--primary-color)] text-white font-medium hover:bg-[var(--primary-hover-color)] transition-colors duration-200">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
