"use client"

import { useState, useEffect } from "react"
import { getPartnershipLevels,updatePartnershipLevel } from "@/services/admin"
interface Partnership {
  id: number
  partnership_name: string
  prices: {
    "1st": string
    "2nd": string
    "3rd": string
  }
}



export default function PartnershipsPage() {
  const [partnerships, setPartnerships] = useState<Partnership[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    partnership_name: "",
    prices: { "1st": "", "2nd": "", "3rd": "" },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPartnerships()
  }, [])

  const loadPartnerships = async () => {
    try {
      const response = await getPartnershipLevels()
      setPartnerships(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Failed to load partnerships:", error)
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (partnership: Partnership) => {
    setEditingId(partnership.id)
    setEditForm({
      partnership_name: partnership.partnership_name,
      prices: { ...partnership.prices },
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({
      partnership_name: "",
      prices: { "1st": "", "2nd": "", "3rd": "" },
    })
  }

  const saveEdit = async () => {
    if (!editingId) return

    try {
      await updatePartnershipLevel(editingId, editForm)

      // Update local state
      setPartnerships((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, partnership_name: editForm.partnership_name, prices: editForm.prices } : p,
        ),
      )

      setEditingId(null)
      setEditForm({
        partnership_name: "",
        prices: { "1st": "", "2nd": "", "3rd": "" },
      })
    } catch (error) {
      console.error("Failed to update partnership:", error)
    }
  }

  const formatPartnershipName = (name: string) => {
    return name
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase())
  }

  if (loading) {
   return (
      <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Partnership Management</h1>
          <p className="text-gray-600">Manage your partnership levels and pricing tiers</p>
        </div>

        <div className="grid gap-6">
          {partnerships.map((partnership) => (
            <div key={partnership.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              {editingId === partnership.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Name</label>
                    <input
                      type="text"
                      value={editForm.partnership_name}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, partnership_name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">1st Tier Price</label>
                      <input
                        type="number"
                        value={editForm.prices["1st"]}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            prices: { ...prev.prices, "1st": e.target.value },
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">2nd Tier Price</label>
                      <input
                        type="number"
                        value={editForm.prices["2nd"]}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            prices: { ...prev.prices, "2nd": e.target.value },
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">3rd Tier Price</label>
                      <input
                        type="number"
                        value={editForm.prices["3rd"]}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            prices: { ...prev.prices, "3rd": e.target.value },
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={saveEdit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {formatPartnershipName(partnership.partnership_name)}
                      </h3>
                      <p className="text-sm text-gray-500">ID: {partnership.id}</p>
                    </div>
                    <button
                      onClick={() => startEdit(partnership)}
                      className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm font-medium text-gray-700 mb-1">1st Tier</div>
                      <div className="text-2xl font-bold text-blue-600">${partnership.prices["1st"]}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm font-medium text-gray-700 mb-1">2nd Tier</div>
                      <div className="text-2xl font-bold text-blue-600">${partnership.prices["2nd"]}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm font-medium text-gray-700 mb-1">3rd Tier</div>
                      <div className="text-2xl font-bold text-blue-600">${partnership.prices["3rd"]}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
