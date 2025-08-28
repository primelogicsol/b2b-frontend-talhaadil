"use client"

import { getAllUsers } from "@/services/admin"
import { postNotification } from "@/services/notification"
import type React from "react"
import { useState, useEffect } from "react"

interface User {
  id: number
  username: string
  email: string
  role: string
}

interface NotificationData {
  message: string
  user_id: number
  target_type: "ALL_USERS" | "BUYERS" | "VENDORS"
  visibility: boolean
}

export default function Home() {
  const [formData, setFormData] = useState<NotificationData>({
    message: "",
    user_id: 0,
    target_type: "ALL_USERS",
    visibility: true,
  })

  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showUserSearch, setShowUserSearch] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers()
        const data = response.data
        console.log(data)
        // Filter only buyers and vendors
        const filteredData = data.filter((user: User) => user.role === "buyer" || user.role === "vendor")
        setUsers(filteredData)
        setFilteredUsers(filteredData)
      } catch (error) {
        console.error("Failed to fetch users:", error)
      }
    }
    fetchUsers()
  }, [])

  // Filter users based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredUsers(filtered)
    } else {
      setFilteredUsers(users)
    }
  }, [searchTerm, users])

  const handleTargetTypeChange = (targetType: "ALL_USERS" | "BUYERS" | "VENDORS" | "SPECIFIC_USER") => {
    if (targetType === "SPECIFIC_USER") {
      setFormData((prev) => ({ ...prev, target_type: "ALL_USERS" }))
      setShowUserSearch(true)
    } else {
      setFormData((prev) => ({ ...prev, target_type: targetType, user_id: 0 }))
      setShowUserSearch(false)
      setSelectedUser(null)
    }
  }

  const handleUserSelect = (user: User) => {
    setSelectedUser(user)
    setFormData((prev) => ({ ...prev, user_id: user.id }))
    setShowUserSearch(false)
    setSearchTerm("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await postNotification(formData)
        console.log(response.data)
      if (response.status >= 200 && response.status < 300) {
        setFormData({
          message: "",
          user_id: 0,
          target_type: "ALL_USERS",
          visibility: true,
        })
        setSelectedUser(null)
      } else {
      }
    } catch (error) {
      console.error("Error sending notification:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Admin Notifications</h1>

        <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full p-3 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
                placeholder="Enter your notification message..."
                required
              />
            </div>

            {/* Target Type Selection */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Target Audience</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="targetType"
                    value="ALL_USERS"
                    checked={formData.target_type === "ALL_USERS" && !selectedUser}
                    onChange={() => handleTargetTypeChange("ALL_USERS")}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-blue-600">All Users</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="targetType"
                    value="BUYER"
                    checked={formData.target_type === "BUYERS"}
                    onChange={() => handleTargetTypeChange("BUYERS")}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-blue-600">Buyers Only</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="targetType"
                    value="VENDOR"
                    checked={formData.target_type === "VENDORS"}
                    onChange={() => handleTargetTypeChange("VENDORS")}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-blue-600">Vendors Only</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="targetType"
                    value="SPECIFIC_USER"
                    checked={selectedUser !== null}
                    onChange={() => handleTargetTypeChange("SPECIFIC_USER")}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-blue-600">Specific User</span>
                </label>
              </div>
            </div>

            {/* User Search */}
            {showUserSearch && (
              <div>
                <label htmlFor="userSearch" className="block text-sm font-medium text-blue-600 mb-2">
                  Search User
                </label>
                <input
                  id="userSearch"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Search by name or email..."
                />
                {filteredUsers.length > 0 && searchTerm && (
                  <div className="mt-2 max-h-40 overflow-y-auto border-2 border-blue-600 rounded-md">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        onClick={() => handleUserSelect(user)}
                        className="p-3 hover:bg-blue-50 cursor-pointer border-b border-blue-200 last:border-b-0"
                      >
                        <div className="font-medium text-blue-600">{user.username}</div>
                        <div className="text-sm text-blue-500">{user.email}</div>
                        <div className="text-xs text-blue-400 capitalize">{user.role}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Selected User Display */}
            {selectedUser && (
              <div className="bg-blue-50 p-3 rounded-md border-2 border-blue-600">
                <div className="text-sm font-medium text-blue-600">Selected User:</div>
                <div className="font-medium text-blue-600">{selectedUser.username}</div>
                <div className="text-sm text-blue-500">{selectedUser.email}</div>
                <div className="text-xs text-blue-400 capitalize">{selectedUser.role}</div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedUser(null)
                    setFormData((prev) => ({ ...prev, user_id: 0, target_type: "ALL_USERS" }))
                  }}
                  className="mt-2 text-xs text-blue-600 underline"
                >
                  Remove selection
                </button>
              </div>
            )}

           

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !formData.message.trim()}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? "Sending..." : "Send Notification"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
