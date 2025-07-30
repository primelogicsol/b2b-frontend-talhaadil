"use client"

import { useState } from "react"
import { forgotPassword } from "@/services/auth"
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      alert("Please enter your email address")
      return
    }
    try {
      // Replace this with your API call
    const response = await forgotPassword({ email })
        console.log("Password reset email sent:", response.data)
      console.log("Sending password reset email to:", email)
      setSubmitted(true)
    } catch (err) {
      console.error("Error sending reset email", err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Forgot Password
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center">
            If an account with that email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
