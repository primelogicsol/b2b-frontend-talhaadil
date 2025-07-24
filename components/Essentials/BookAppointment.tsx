"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  Globe,
  Phone,
  Mail,
  Building,
  User,
  CheckCircle,
  Monitor,
  Home,
  Upload,
  Flag,
} from "lucide-react"

interface FormData {
  userType: "buyer" | "vendor" | "guest" | ""
  appointmentMode: "virtual" | "in-person" | ""
  office: string
  purpose: string
  date: string
  time: string
  firstName: string
  lastName: string
  businessName: string
  website: string
  email: string
  phone: string
  authorized: boolean
  file?: File
}

const offices = [
  {
    id: "usa-hq",
    name: "USA Office – HQ",
    address: "4445 Corporation Ln Ste 264, Virginia 23462",
    schedule: "Mon–Fri, 10 AM–5 PM EST",
    timezone: "EST",
    flag: "🇺🇸",
    phone: "+1 (757) 555-0123",
    country: "usa",
  },
  {
    id: "kashmir",
    name: "Kashmir Office",
    address: "2 Gousia Colony Ext Zakura, Srinagar 190006",
    schedule: "Mon–Sat, 11 AM–4 PM IST",
    timezone: "IST",
    flag: "🇮🇳",
    phone: "+91 194 555-0456",
    country: "india",
  },
  {
    id: "delhi",
    name: "Delhi Pop-up Office",
    address: "(Location shared upon confirmation)",
    schedule: "1st & 3rd Saturdays only",
    timezone: "IST",
    flag: "🇮🇳",
    phone: "+91 11 555-0789",
    country: "india",
  },
]

const purposes = [
  "Vendor Onboarding",
  "Buyer Platform Tour",
  "Product Listing Help",
  "Partnership Discussion",
  "Payment or Invoice Query",
  "Technical Support",
  "Certification or GI Help",
  "General Inquiry",
]

export default function AppointmentScheduler() {
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    appointmentMode: "",
    office: "",
    purpose: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    businessName: "",
    website: "",
    email: "",
    phone: "",
    authorized: false,
  })
  const [isBooked, setIsBooked] = useState(false)
  const [userTimezone, setUserTimezone] = useState("")
  const [timezoneConversion, setTimezoneConversion] = useState("")

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setUserTimezone(timezone)
  }, [])

  useEffect(() => {
    if (formData.time && formData.date) {
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`)
      const pst = selectedDateTime.toLocaleString("en-US", { timeZone: "America/Los_Angeles", timeStyle: "short" })
      const est = selectedDateTime.toLocaleString("en-US", { timeZone: "America/New_York", timeStyle: "short" })
      const ist = selectedDateTime.toLocaleString("en-US", { timeZone: "Asia/Kolkata", timeStyle: "short" })

      setTimezoneConversion(`${pst} PST = ${est} EST = ${ist} IST`)
    }
  }, [formData.time, formData.date])

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateFormData("file", file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Booking data:", formData)
    setIsBooked(true)
  }

  const isFormValid = () => {
    return (
      formData.userType &&
      formData.appointmentMode &&
      (formData.appointmentMode === "virtual" || formData.office) &&
      formData.purpose &&
      formData.date &&
      formData.time &&
      formData.firstName &&
      formData.lastName &&
      formData.businessName &&
      formData.email &&
      formData.authorized
    )
  }

  const getFilteredOffices = () => {
    if (formData.userType === "vendor") {
      return offices.filter((office) => office.country === "india")
    }
    if (formData.userType === "buyer") {
      return offices.filter((office) => office.country === "usa")
    }
    return offices // Show all offices for buyers and guests
  }

  if (isBooked) {
    return <BookingConfirmation formData={formData} timezoneConversion={timezoneConversion} />
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center">
          <Calendar className="mr-3" size={32} />
          B2B Connect | Appointment Scheduler
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book a virtual or in-person meeting with our onboarding team, buyer advisors, or vendor support specialists 
          all optimized for cross-border timing, calendars, and roles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Type Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <Users className="mr-3" size={24} />
            Identify Yourself
          </h2>
          <p className="text-gray-600 mb-6">This helps us assign the right support staff and location.</p>

          <div className="space-y-4">
            {[
              { value: "buyer", label: "Buyer", icon: Flag },
              { value: "vendor", label: "Vendor", icon: Building },
              { value: "guest", label: "Guest", icon: Users },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.userType === option.value
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={option.value}
                  checked={formData.userType === option.value}
                  onChange={(e) => updateFormData("userType", e.target.value)}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <option.icon className="mr-3 text-[var(--primary-color)]" size={20} />
                <span className="font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Appointment Type Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <Globe className="mr-3" size={24} />
            Select Appointment Type
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                formData.appointmentMode === "virtual"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => updateFormData("appointmentMode", "virtual")}
            >
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="appointmentMode"
                  value="virtual"
                  checked={formData.appointmentMode === "virtual"}
                  onChange={() => updateFormData("appointmentMode", "virtual")}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <Monitor className="mr-3 text-[var(--primary-color)]" size={24} />
                <h3 className="font-semibold">Virtual Meeting</h3>
              </div>
              <p className="text-sm text-gray-600">Zoom / Google Meet / MS Teams</p>
            </div>

            <div
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                formData.appointmentMode === "in-person"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => updateFormData("appointmentMode", "in-person")}
            >
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="appointmentMode"
                  value="in-person"
                  checked={formData.appointmentMode === "in-person"}
                  onChange={() => updateFormData("appointmentMode", "in-person")}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <Home className="mr-3 text-[var(--primary-color)]" size={24} />
                <h3 className="font-semibold">In-Person Meeting</h3>
              </div>
              <p className="text-sm text-gray-600">Visit a B2B Connect Office</p>
            </div>
          </div>
        </div>

        {/* Office Location Section */}
        {formData.appointmentMode === "in-person" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <MapPin className="mr-3" size={24} />
              Select Office Location
            </h2>

           

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[var(--primary-color)] text-white">
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Office</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Address</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Phone</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">
                      Days & Time
                    </th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-center font-semibold">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredOffices().map((office, index) => (
                    <tr key={office.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <td className="border border-gray-200 p-4 font-medium">
                        <div className="flex items-center">
                      
                          {office.name}
                        </div>
                      </td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700">{office.address}</td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700 font-mono">{office.phone}</td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700">{office.schedule}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        <input
                          type="radio"
                          name="office"
                          value={office.id}
                          checked={formData.office === office.id}
                          onChange={(e) => updateFormData("office", e.target.value)}
                          className="w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                          required={formData.appointmentMode === "in-person"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {formData.userType === "vendor" && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-[var(--primary-color)] flex items-center">
                  <MapPin className="mr-2" size={16} />
                  As a vendor, you can visit our USA office for in-person meetings.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Purpose Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <FileText className="mr-3" size={24} />
            Select Purpose of Appointment
          </h2>

          <div className="space-y-4">
            <select
              value={formData.purpose}
              onChange={(e) => updateFormData("purpose", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg custom-select focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              required
            >
              <option value="">Select appointment purpose...</option>
              {purposes.map((purpose) => (
                <option key={purpose} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Upload className="mr-2" size={16} />
                Upload File (optional)
              </label>
              <input
                type="file"
                accept=".pdf,.docx,.png,.jpg,.jpeg"
                onChange={handleFileUpload}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOCX, PNG, JPG</p>
            </div>
          </div>
        </div>

        {/* Date and Time Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <Calendar className="mr-3" size={24} />
            Select Date and Time
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar className="mr-2" size={16} />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => updateFormData("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Clock className="mr-2" size={16} />
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => updateFormData("time", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>
          </div>

          {userTimezone && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-[var(--primary-color)] font-medium flex items-center">
                <Globe className="mr-2" size={16} />
                Auto-Timezone Detected: You are booking in {userTimezone}
              </p>
            </div>
          )}

          {timezoneConversion && (
            <div className="mt-4 timezone-display">
              <p className="font-medium flex items-center">
                <Clock className="mr-2" size={16} />
                Live Conversion Preview:
              </p>
              <p className="mt-1">{timezoneConversion}</p>
            </div>
          )}
        </div>

        {/* Personal Details Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <User className="mr-3" size={24} />
            Your Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => updateFormData("firstName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => updateFormData("lastName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Building className="mr-2" size={16} />
                Business Name *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData("businessName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Website (Optional)</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => updateFormData("website", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                placeholder="https://"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Mail className="mr-2" size={16} />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Phone className="mr-2" size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                placeholder="International Format"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.authorized}
                onChange={(e) => updateFormData("authorized", e.target.checked)}
                className="mt-1 mr-3 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                required
              />
              <span className="text-sm text-gray-700 flex items-center">
                <CheckCircle className="mr-2" size={16} />I confirm I am authorized to represent this business.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <button
            type="submit"
            disabled={!isFormValid()}
            className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <CheckCircle className="mr-3" size={24} />
            BOOK APPOINTMENT
          </button>
        </div>
      </form>
    </div>
  )
}

function BookingConfirmation({ formData, timezoneConversion }: { formData: FormData; timezoneConversion: string }) {
  const selectedOffice = offices.find((o) => o.id === formData.office)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center">
            <Calendar className="mr-3" size={32} />
            Your appointment is confirmed!
          </h1>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="font-semibold flex items-center">
                <Calendar className="mr-2" size={16} />
                Date:
              </p>
              <p>
                {new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <Clock className="mr-2" size={16} />
                Time:
              </p>
              <p>{timezoneConversion}</p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <MapPin className="mr-2" size={16} />
                Mode:
              </p>
              <p>
                {formData.appointmentMode === "virtual" ? "Virtual (Zoom)" : `In-Person at ${selectedOffice?.name}`}
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <User className="mr-2" size={16} />
                Contact:
              </p>
              <p>
                {formData.firstName} {formData.lastName}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4 flex items-center justify-center">
            <Mail className="mr-2" size={16} />A calendar invite and email confirmation have been sent to{" "}
            {formData.email}
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-[var(--secondary-color)] mb-4 flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            Important Next Step:
          </h3>
          <p className="text-gray-700 mb-4">
            Please complete your business registration before your appointment date. This ensures smoother onboarding,
            document access, and profile validation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
              <User className="mr-2" size={16} />
              Register as {formData.userType === "buyer" ? "Buyer" : "Vendor"}
            </button>
            {formData.userType === "guest" && (
              <button className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                <Users className="mr-2" size={16} />
                Complete Partner Registration
              </button>
            )}
          </div>

          <p className="text-xs text-gray-600 mt-4 flex items-center justify-center">
            <Clock className="mr-2" size={14} />
            You will receive reminders via email if registration is not completed before your appointment.
          </p>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-semibold mb-4 flex items-center justify-center">
            <Mail className="mr-2" size={20} />
            Calendar Sync Features
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-medium">Google/Outlook/iCal</p>
              <p className="text-green-600 flex items-center">
                <CheckCircle className="mr-1" size={14} />
                Invite auto-sent
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-medium">Meeting Link</p>
              <p className="text-green-600 flex items-center">
                <CheckCircle className="mr-1" size={14} />
                Embedded
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-medium">Reschedule/Cancel</p>
              <p className="text-green-600 flex items-center">
                <CheckCircle className="mr-1" size={14} />
                One-click link
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-[var(--secondary-light-color)] rounded-lg">
          <h4 className="font-semibold text-[var(--primary-color)] mb-2 flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            Take the next step toward a seamless onboarding experience.
          </h4>
          <p className="text-gray-700 mb-4">Register now so we can best support your appointment.</p>
          <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
            <User className="mr-2" size={16} />
            Complete My Registration
          </button>
        </div>
      </div>
    </div>
  )
}
