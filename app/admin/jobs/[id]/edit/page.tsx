"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { mockJobs, type Job } from "@/lib/data"
import { ArrowLeft, Save, X } from "lucide-react"
import { getJobDetails } from "@/services/job"
import { updateJob } from "@/services/job"
export default function EditJobPage() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "full-time",
    summary: "",
    description: "",
    requirements: "",
    salary_range: "",
    application_deadline: "",
  })


  useEffect(() => {
    const jobId = Number.parseInt(params.id as string);
    const fetchJob = async () => {
      try {
        const response = await getJobDetails(jobId);
        const foundJob = response.data;
        setJob(foundJob);
        setFormData({
          title: foundJob.title,
          location: foundJob.location,
          type: foundJob.type,
          summary: foundJob.summary || "",
          description: foundJob.description,
          requirements: foundJob.requirements || "",
          salary_range: foundJob.salary_range,
          application_deadline: foundJob.deadline,
        });
      } catch (error) {
        console.error("Error fetching job:", error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const jobData = {
        title: formData.title,
        location: formData.location,
        type: formData.type,
        summary: formData.summary,
        description: formData.description,
        requirements: formData.requirements,
        salary_range: formData.salary_range,
        application_deadline: formData.application_deadline,
      };
      await updateJob(Number.parseInt(params.id as string), jobData);
      router.push("/admin/jobs");
    } catch (error) {
      console.error("Error updating job:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    router.push("/admin/jobs")
  }


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
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
            <p className="text-slate-600 mt-2 text-lg">Update job posting details</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="block text-sm font-medium text-slate-700">Application Deadline</label>
            <input
              type="date"
              className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={formData.application_deadline}
              onChange={(e) => setFormData({ ...formData, application_deadline: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Salary Range</label>
          <input
            
            className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={formData.salary_range}
            onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Summary</label>
          <textarea
            className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            rows={3}
            value={formData.summary}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Job Description</label>
          <textarea
            className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Requirements</label>
          <textarea
            className="mt-1 border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            rows={5}
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            required
          />
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
    </div>
  )
}