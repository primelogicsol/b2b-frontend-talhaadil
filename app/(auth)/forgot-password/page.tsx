"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Mail, Lock, Shield, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/context/ToastProvider"
import { forgotPassword, resetPassword } from "@/services/auth"

interface ForgotPasswordData {
  email: string
  otp: string
  newPassword: string
  confirmPassword: string
}

type Step = "email" | "otp" | "success"

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState<Step>("email")
  
  const [formData, setFormData] = useState<ForgotPasswordData>({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { showToast } = useToast()
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])

  // Password visibility toggles
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(pwd)) {
      errors.push("Password must contain at least one special character.")
    }
    return errors
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setFormData({ ...formData, newPassword: newPassword })
    if (newPassword) {
      setPasswordErrors(validatePassword(newPassword))
    } else {
      setPasswordErrors([])
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const response = await forgotPassword({ email: formData.email })
      console.log("OTP sent response:", response)
      showToast("OTP sent to your email!")
      setCurrentStep("otp")
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to send OTP")
      showToast("Failed to send OTP")
    } finally {
      setLoading(false)
    }
  }

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const errors = validatePassword(formData.newPassword)
    if (errors.length > 0) {
      setPasswordErrors(errors)
      showToast("Please fix password errors.")
      setLoading(false)
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords don't match")
      showToast("Passwords don't match")
      setLoading(false)
      return
    }

    try {
      const response = await resetPassword(formData)
      console.log("Password reset response:", response)
      showToast("Password reset successful!")
      setCurrentStep("success")
    } catch (err: any) {
      showToast(err.response?.data?.detail || "Failed to reset password")
    } finally {
      setLoading(false)
    }
  }

  const renderEmailStep = () => (
    <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/20">
          <Mail className="h-8 w-8 text-[var(--primary-color)]" />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Forgot Password?
        </h1>
        <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
          Enter your email address and we'll send you an OTP to reset your password.
        </p>
      </div>
      <form onSubmit={handleEmailSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg disabled:opacity-50"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
      <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm">
        Remember your password?{" "}
        <Link href="/login" className="font-medium text-white hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  )

  const renderOTPStep = () => (
    <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/20">
          <Shield className="h-8 w-8 text-[var(--primary-color)]" />
        </div>
        <h1 className="mb-2 font-bold tracking-tight text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
          Verify OTP
        </h1>
        <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
          Enter the OTP sent to <span className="font-semibold text-white">{formData.email}</span> and your new password.
        </p>
      </div>
      <form onSubmit={handleOTPSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="otp" className="mb-2 block text-sm font-medium text-gray-300">
            OTP Code
          </label>
          <input
            type="text"
            id="otp"
            placeholder="Enter 6-digit OTP"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] text-center text-lg tracking-widest"
            maxLength={6}
            required
          />
        </div>

        {/* New Password with Eye Icon */}
        <div>
          <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-gray-300">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="••••••••"
              value={formData.newPassword}
              onChange={handleNewPasswordChange}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
            >
              {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
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

        {/* Confirm Password with Eye Icon */}
        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-300">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || passwordErrors.length > 0}
          className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg disabled:opacity-50"
        >
          {loading ? "Resetting Password..." : "Reset Password"}
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep("email")}
          className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
        >
          Back to Email
        </button>
      </form>
    </div>
  )

  const renderSuccessStep = () => (
    <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <Lock className="h-8 w-8 text-green-400" />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Password Reset!
        </h1>
        <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
          Your password has been successfully reset. You can now login with your new password.
        </p>
      </div>
      <Link
        href="/login"
        className="block w-full rounded-xl bg-[var(--primary-color)] p-3 text-center text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg"
      >
        Back to Login
      </Link>
    </div>
  )

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[var(--secondary-color)] to-[#0a192f] p-4 text-white sm:p-6 md:p-8">
      {/* Background decorative elements */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--secondary-light-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-1000" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[var(--primary-hover-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-3000" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--secondary-color)] opacity-5 blur-3xl animate-float animation-delay-2000" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[var(--primary-color)] opacity-5 blur-3xl animate-float animation-delay-4000" />

      {/* Back button */}
      <div className="absolute top-8 left-6 z-20">
        <Link href="/login" className="flex items-center">
          <ArrowLeft className="h-5 w-5 md:h-10 md:w-10" />
        </Link>
      </div>

      {/* Render current step */}
      {currentStep === "email" && renderEmailStep()}
      {currentStep === "otp" && renderOTPStep()}
      {currentStep === "success" && renderSuccessStep()}
    </div>
  )
}
