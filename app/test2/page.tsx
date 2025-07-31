"use client"

import { useState } from "react"
import { registerSuperAdmin } from "@/services/auth"

export default function OtherAdminsPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      username,
      email,
      password,
    }

    try {
      const admin= await registerSuperAdmin(payload)
      console.log(admin)

    } catch (error) {
      console.error("Error:", error)
      console.log(error)
      alert("Something went wrong.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add New Admin</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 w-full rounded-md border px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-md border px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-md border px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
