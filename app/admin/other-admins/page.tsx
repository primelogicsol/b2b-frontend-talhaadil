"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Users, Plus, Edit, Trash2, X } from "lucide-react"
import { deleteSubAdmin, registerSubAdmin, updateSubAdmin } from "@/services/auth"
import { useToast } from "@/context/ToastProvider"
import { getAllUsers } from "@/services/admin"

interface Admin {
  id: string
  username: string
  email: string
  visibility_level: number
  ownership: {
    user_management: string[]
    job_postings: string[]
    team_management: string[]
    appointments: string[]
    notifications: string[]
    pricing: string[]
  }
}

interface AdminFormData {
  username: string
  email: string
  password: string
  visibility_level: number
  ownership: {
    user_management: string[]
    job_postings: string[]
    team_management: string[]
    appointments: string[]
    notifications: string[]
    pricing: string[]
  }
}

const permissionOptions = {
  user_management: ["view", "approve"],
  job_postings: ["create", "update", "delete", "view"],
  team_management: ["view", "update"],
  appointments: ["view"],
  notifications: ["view"],
  pricing: ["view", "create"],
}

export default function OtherAdminsPage() {
  const { showToast } = useToast()
  const [admins, setAdmins] = useState<Admin[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null)
  const [getLoading, setGetLoading] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)
  const [formData, setFormData] = useState<AdminFormData>({
    username: "",
    email: "",
    password: "",
    visibility_level: 1,
    ownership: {
      user_management: [],
      job_postings: [],
      team_management: [],
      appointments: [],
      notifications: [],
      pricing: [],
    },
  })

  useEffect(() => {
    const fetchAdmins = async () => {
      setGetLoading(true)
      try {
        const response = await getAllUsers()
        const apiUsers: any[] = response.data
        console.log(apiUsers)

        const transformedAdmins: Admin[] = apiUsers
          .filter((user) => user.role === "sub_admin")
          .map((user) => ({
            id: String(user.id),
            username: user.username || "",
            email: user.email || "",
            visibility_level: user.visibility_level ?? 1,
            ownership: {
              user_management: user.ownership?.user_management ?? [],
              job_postings: user.ownership?.job_postings ?? [],
              team_management: user.ownership?.team_management ?? [],
              appointments: user.ownership?.appointments ?? [],
              notifications: user.ownership?.notifications ?? [],
              pricing: user.ownership?.pricing ?? [],
            },
          }))
          console.log(transformedAdmins)

        setAdmins(transformedAdmins)
      } catch (error) {
        console.error("Failed to fetch admins:", error)
      } finally {
        setGetLoading(false)
      }
    }

    fetchAdmins()
  }, [])

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      visibility_level: 1,
      ownership: {
        user_management: [],
        job_postings: [],
        team_management: [],
        appointments: [],
        notifications: [],
        pricing: [],
      },
    })
  }

  const handleAddNew = () => {
    resetForm()
    setEditingAdmin(null)
    setShowAddForm(true)
  }

  const handleEdit = (admin: Admin) => {
    setFormData({
      username: admin.username,
      email: admin.email,
      password: "",
      visibility_level: admin.visibility_level,
      ownership: admin.ownership,
    })
    setEditingAdmin(admin)
    setShowAddForm(true)
  }

  const handleCancel = () => {
    setShowAddForm(false)
    setEditingAdmin(null)
    resetForm()
  }

  const handleDelete = async (adminId: string) => {
    setGetLoading(true)
    try {
      const response = await deleteSubAdmin(adminId)
      console.log(response)

      setAdmins(admins.filter((admin) => admin.id !== adminId))
    } catch (err: any) {
      console.log(err.response.data.detail)
    } finally {
      setGetLoading(false)
    }

    setShowDeleteConfirm(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submission payload:", formData)
    setLoading(true)
    if (editingAdmin) {
      try {
        console.log(editingAdmin)
        const response = await updateSubAdmin(editingAdmin.id, {
          visibility_level: formData.visibility_level,
          ownership: formData.ownership,
        })
        console.log(response)
        showToast("Admin updated successfully")
      } catch (err: any) {
        console.log(err.response.data.detail)
        showToast("Failed to update admin")
      } finally {
        setLoading(false)
      }

      setAdmins(admins.map((admin) => (admin.id === editingAdmin.id ? { ...admin, ...formData } : admin)))
    } else {
      try {
        const response = await registerSubAdmin(formData)
        console.log(response)
        showToast("Admin added successfully")
      } catch (err: any) {
        console.log(err.response.data.detail)
        showToast("Failed to add admin")
      } finally {
        setLoading(false)
      }

      const newAdmin: Admin = {
        id: Date.now().toString(),
        username: formData.username,
        email: formData.email,
        visibility_level: formData.visibility_level,
        ownership: formData.ownership,
      }

      setAdmins([...admins, newAdmin])
    }

    setShowAddForm(false)
    setEditingAdmin(null)
    resetForm()
  }

  const handlePermissionChange = (category: keyof typeof permissionOptions, permission: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      ownership: {
        ...prev.ownership,
        [category]: checked
          ? [...prev.ownership[category], permission]
          : prev.ownership[category].filter((p) => p !== permission),
      },
    }))
  }

  const getPermissionsSummary = (ownership: Admin["ownership"]) => {
    const totalPermissions = Object.values(ownership).flat().length
    return `${totalPermissions} permissions`
  }

  if (getLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-sm border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Other Admins</h1>
              <p className="text-sm text-slate-600">Manage sub-admin accounts and permissions</p>
            </div>
          </div>
          {!showAddForm && (
            <button
              onClick={handleAddNew}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Admin
            </button>
          )}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">{editingAdmin ? "Edit Admin" : "Add New Admin"}</h2>
              <button
                onClick={handleCancel}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!editingAdmin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                      <input
                        type="text"
                        required
                        value={formData.username}
                        onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter username"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                      <input
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter password"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Visibility Level</label>
                  <select
                    value={formData.visibility_level}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, visibility_level: Number.parseInt(e.target.value) }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value={1}>Level 1 - Basic</option>
                    <option value={2}>Level 2 - Intermediate</option>
                    <option value={3}>Level 3 - Advanced</option>
                    <option value={4}>Level 4 - Full Access</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ownership Permissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(permissionOptions).map(([category, permissions]) => (
                    <div key={category} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 capitalize">
                        {category.replace("_", " ")}
                      </h4>
                      <div className="space-y-2">
                        {permissions.map((permission) => (
                          <label key={permission} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.ownership[category as keyof typeof permissionOptions].includes(
                                permission,
                              )}
                              onChange={(e) =>
                                handlePermissionChange(
                                  category as keyof typeof permissionOptions,
                                  permission,
                                  e.target.checked,
                                )
                              }
                              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-sm text-slate-700 capitalize group-hover:text-slate-900 transition-colors">
                              {permission}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {loading ? (editingAdmin ? "Updating..." : "Adding...") : editingAdmin ? "Update Admin" : "Add Admin"}
                </button>
              </div>
            </form>
          </div>
        )}

        {!showAddForm && (
          <>
            <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Admin Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Visibility Level
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Permissions
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {admins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{admin.username}</div>
                          <div className="text-sm text-slate-600">{admin.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Level {admin.visibility_level}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600">{getPermissionsSummary(admin.ownership)}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => handleEdit(admin)}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setShowDeleteConfirm(admin.id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden space-y-4">
              {admins.map((admin) => (
                <div key={admin.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{admin.username}</h3>
                      <p className="text-sm text-slate-600">{admin.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(admin)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(admin.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Level {admin.visibility_level}
                    </span>
                    <span className="text-sm text-slate-600">{getPermissionsSummary(admin.ownership)}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 text-center mb-2">Delete Admin</h3>
            <p className="text-sm text-slate-600 text-center mb-6">
              Are you sure you want to delete this admin? This action cannot be undone.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
