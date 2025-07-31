"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react" // Replaced react-icons with lucide-react
import { FcGoogle } from "react-icons/fc"
import { useToast } from "@/context/ToastProvider"
import { registerSupplier } from "@/services/auth" // Assuming registerSupplier can handle userType
import { verifyOtp } from "@/services/auth"
import { signup } from "@/services/auth"

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [userType, setUserType] = useState("Buyer") // New state for user type, default to Buyer
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])

  const { showToast } = useToast()

  const validatePassword = (pwd: string): string[] => {
    const errors: string[] = []
    if (pwd.length < 8) {
      errors.push("Password must be at least 8 characters long.")
    }
    if (!/[A-Z]/.test(pwd)) {
      errors.push("Password must contain at least one uppercase letter.")
    }
    if (!/[a-z]/.test(pwd)) {
      errors.push("Password must contain at least one lowercase letter.")
    }
    if (!/[0-9]/.test(pwd)) {
      errors.push("Password must contain at least one number.")
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      errors.push("Password must contain at least one special character.")
    }
    return errors
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    if (newPassword) {
      setPasswordErrors(validatePassword(newPassword))
    } else {
      setPasswordErrors([]) 
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return // Guard
    e.preventDefault()

    const errors = validatePassword(password)
    if (errors.length > 0) {
      setPasswordErrors(errors)
      showToast("Please fix password errors.")
      return
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match")
      return
    }

    try {
      setLoading(true)
      // Include userType in the registration payload
      if (userType === "Vendor") {
        const response = await registerSupplier({ username, email, password })
        console.log("Signup successful:", response.data)
      } else {
        const response = await signup({ username, email, password })
        console.log("Signup successful:", response.data)
      }
      showToast("Registration successful! Please verify your OTP.")
      setShowOtpVerification(true)
    } catch (err: any) {
      console.log(err)
      showToast(err.response?.data?.detail || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  const handleOtpVerification = async (e: React.FormEvent) => {
    if (loading) return
    e.preventDefault()
    if (!otp || otp.length !== 6) {
      showToast("Please enter a valid 6-digit OTP")
      return
    }
    try {
      setLoading(true)
      const response = await verifyOtp({ email, otp })
      showToast("OTP verified successfully!")
      localStorage.setItem("user", JSON.stringify(response.data))
    } catch (err: any) {
      showToast(err.response?.data?.detail || "OTP verification failed")
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1b4f68] to-[#0a192f] p-4 text-white sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--secondary-light-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-1000" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[var(--primary-hover-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-3000" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--secondary-color)] opacity-5 blur-3xl animate-float animation-delay-2000" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[var(--primary-color)] opacity-5 blur-3xl animate-float animation-delay-4000" />

      <div>
      <div className="absolute top-8 left-6 z-20">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="h-5 w-5 md:h-10 md:w-10" />
        </Link>
      </div>
      </div>

      <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10 lg:max-w-lg lg:p-12 xl:max-w-xl xl:p-14 2xl:max-w-2xl 2xl:p-16">
        {!showOtpVerification ? (
          <>
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl">
                Join Us
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg lg:text-xl 2xl:text-2xl">
                Create your new account and unlock amazing features.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6 lg:space-y-7" onSubmit={handleSubmit}>
              {/* User Type Dropdown */}
              <div>
                <label htmlFor="user-type" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Account Type
                </label>
                <div className="relative">
                  <select
                    id="user-type"
                    className="w-full appearance-none rounded-xl border border-gray-600 bg-gray-800/50 p-3 pr-10 text-white transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] cursor-pointer"
                    required
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="yourname"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                />
                {passwordErrors.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm text-red-400">
                    {passwordErrors.map((error, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {error}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-600/50 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                disabled={loading || passwordErrors.length > 0}
                type="submit"
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg lg:text-xl"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              <div className="relative flex items-center justify-center py-3 sm:py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative bg-transparent px-4 text-sm text-gray-400">Or</div>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
              >
                <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Register with Google</span>
              </button>
            </form>
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm lg:text-base">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-white hover:underline">
                Login
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                Verify OTP
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg lg:text-xl 2xl:text-2xl">
                We've sent a 6-digit code to {email}. Please enter it below.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6 lg:space-y-7" onSubmit={handleOtpVerification}>
              <div>
                <label htmlFor="otp" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="123456"
                  maxLength={6}
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-center font-mono text-white placeholder-gray-400 tracking-widest transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] sm:text-3xl lg:text-4xl"
                  required
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "")
                    setOtp(value)
                  }}
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg lg:text-xl"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white sm:text-base"
                  onClick={() => {
                    showToast("OTP resent successfully!")
                  }}
                >
                  Didn't receive the code? Resend OTP
                </button>
              </div>
            </form>
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm lg:text-base">
              Want to use a different email?{" "}
              <button
                onClick={() => {
                  setShowOtpVerification(false)
                  setOtp("")
                }}
                className="font-medium text-white hover:underline"
              >
                Go Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}