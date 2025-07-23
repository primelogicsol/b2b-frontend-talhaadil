"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { mockJobs, type Job } from "@/lib/data"
import { ArrowLeft, Save, X, Briefcase } from "lucide-react"

export default function EditJobPage() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    type: "full-time",
    department: "",
    salaryMin: "",
    salaryMax: "",
    deadline: "",
    experience: "",
    education: "",
    skills: "",
    languages: "",
    responsibilities: "",
    benefits: "",
    workingHours: "",
    remote: false,
    urgency: "medium",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    status: "active",
  })

  useEffect(() => {
    const jobId = Number.parseInt(params.id as string)
    const foundJob = mockJobs.find((j) => j.id === jobId)
    if (foundJob) {
      setJob(foundJob)
      setFormData({
        title: foundJob.title,
        description: foundJob.description,
        location: foundJob.location,
        type: foundJob.type,
        department: foundJob.department,
        salaryMin: foundJob.salary.min.toString(),
        salaryMax: foundJob.salary.max.toString(),
        deadline: foundJob.deadline,
        experience: foundJob.requirements.experience.min.toString(),
        education: foundJob.requirements.education,
        skills: foundJob.requirements.skills.join(", "),
        languages: foundJob.requirements.languages.join(", "),
        responsibilities: foundJob.responsibilities.join("\n"),
        benefits: foundJob.benefits.join("\n"),
        workingHours: foundJob.workingHours,
        remote: foundJob.remote,
        urgency: foundJob.urgency,
        contactName: foundJob.contactPerson.name,
        contactEmail: foundJob.contactPerson.email,
        contactPhone: foundJob.contactPerson.phone,
        status: foundJob.status,
      })
    }
    setLoading(false)
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Updated job data:", formData)
      router.push("/admin/jobs")
    } catch (error) {
      console.error("Error updating job:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    router.push("/admin/jobs")
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <X className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Job not found</h1>
        <p className="text-slate-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
        <Link href="/admin/jobs">
          <button className="px-4 py-2 bg-gray-200 text-slate-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center mx-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/jobs">
            <button className="px-4 py-2 bg-gray-200 text-slate-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Jobs
            </button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Edit Job</h1>
            <p className="text-slate-600 mt-2 text-lg">Update job posting details and requirements</p>
          </div>
        </div>
      
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-6 border rounded-lg bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Job Title</label>
            <input
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Location</label>
            <input
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Job Type</label>
            <select
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Department</label>
            <input
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Status</label>
            <select
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Urgency</label>
            <select
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Minimum Salary</label>
            <input
              type="number"
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.salaryMin}
              onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Maximum Salary</label>
            <input
              type="number"
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.salaryMax}
              onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Application Deadline</label>
            <input
              type="date"
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Job Description</label>
          <textarea
            className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="border-t pt-4 border-gray-200">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Minimum Experience (Years)</label>
              <input
                type="number"
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Working Hours</label>
              <input
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.workingHours}
                onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Required Skills</label>
              <input
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Languages</label>
              <input
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.languages}
                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Education Requirements</label>
            <textarea
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              rows={2}
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            />
          </div>
        </div>

        <div className="border-t pt-4 border-gray-200">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Job Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Key Responsibilities</label>
              <textarea
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                rows={6}
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Benefits & Perks</label>
              <textarea
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                rows={6}
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-4 border-gray-200">
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Contact Person</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Contact Name</label>
              <input
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Contact Email</label>
              <input
                type="email"
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Contact Phone</label>
              <input
                type="tel"
                className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-4 border-gray-200 flex items-center space-x-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={formData.remote}
            onChange={(e) => setFormData({ ...formData, remote: e.target.checked })}
          />
          <label className="text-sm font-medium text-slate-700">Remote work available</label>
        </div>

        <div className="border-t pt-4 border-gray-200 flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-slate-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
            onClick={handleCancel}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
            disabled={saving}
          >
            {saving ? (
              <span>Saving...</span>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>

      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="font-semibold text-lg text-slate-800 mb-2">Current Job Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg shadow-sm">
            <p className="text-2xl font-bold text-blue-600">{job.applications}</p>
            <p className="text-sm text-slate-600">Total Applications</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="text-2xl font-bold text-green-600">
              {Math.max(
                0,
                Math.ceil((new Date(job.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
              )}
            </p>
            <p className="text-sm text-slate-600">Days Until Deadline</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg shadow-sm">
            <p className="text-2xl font-bold text-purple-600">{new Date(job.postedDate).toLocaleDateString()}</p>
            <p className="text-sm text-slate-600">Posted Date</p>
          </div>
        </div>
      </div>
    </div>
  )
}