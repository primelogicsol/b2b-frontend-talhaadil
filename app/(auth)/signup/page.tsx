"use client"

import Link from "next/link"
import type React from "react"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"
import { RiArrowGoBackFill } from "react-icons/ri"
import { useToast } from "@/context/ToastProvider"
import { registerSupplier } from "@/services/auth" // Assuming registerSupplier can handle userType
import { verifyOtp } from "@/services/auth"
import {signup} from "@/services/auth"
export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [userType, setUserType] = useState("Buyer") // New state for user type, default to Buyer
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return // Guard
    e.preventDefault()
    if (password !== confirmPassword) {
      showToast("Passwords do not match")
      return
    }
    try {
      setLoading(true)
      // Include userType in the registration payload
      if (userType === "Vendor"){
        const response = await registerSupplier({ username, email, password})
        console.log("Signup successful:", response.data)
      }
      else{
        const response = await signup({ username, email, password })
        console.log("Signup successful:", response.data)
      }
      showToast("Registration successful! Please verify your OTP.")
      setShowOtpVerification(true)
    } catch (err: any) {
      console.log(err)
      showToast(err.response?.data?.message || "Signup failed")
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
      showToast("OTP verified successfully! You can now login.")

    } catch (err: any) {
      showToast(err.response?.data?.message || "OTP verification failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1b4f68] to-[#0a192f] p-4 text-white sm:p-6 md:p-8">
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--secondary-light-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-1000" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[var(--primary-hover-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-3000" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--secondary-color)] opacity-5 blur-3xl animate-float animation-delay-2000" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[var(--primary-color)] opacity-5 blur-3xl animate-float animation-delay-4000" />
      <div>
        <div className="absolute top-4 left-8 z-10">
          <Link href="/" className="flex items-center">
            <RiArrowGoBackFill className="h-10 w-10" />
          </Link>
        </div>
      </div>
      <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10">
        {!showOtpVerification ? (
          <>
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Join Us
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
                Create your new account and unlock amazing features.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              {/* New User Type Dropdown */}
              <div>
                <label htmlFor="user-type" className="mb-2 block text-sm font-medium text-gray-300">
                  Account Type
                </label>
                <select
                  id="user-type"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-300">
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
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
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
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  value={password}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-300">
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
                disabled={loading}
                type="submit"
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg"
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
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-white hover:underline">
                Login
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Verify OTP
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
                We've sent a 6-digit code to {email}. Please enter it below.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleOtpVerification}>
              <div>
                <label htmlFor="otp" className="mb-2 block text-sm font-medium text-gray-300">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="123456"
                  maxLength={6}
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-center text-2xl font-mono text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] tracking-widest"
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
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={() => {
                    
                    showToast("OTP resent successfully!")
                  }}
                >
                  Didn't receive the code? Resend OTP
                </button>
              </div>
            </form>
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm">
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
