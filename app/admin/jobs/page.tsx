"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mockJobs, type Job as OriginalJob } from "@/lib/data";

// Extend Job type to include summary if not already present
type Job = OriginalJob & { summary: string };
import {
  Plus,
  Search,
  CheckCircle,
  Trash2,
  Edit,
  Clock,
  MapPin,
  DollarSign,
  Briefcase,
  Globe,
  Star,
} from "lucide-react";
import { getAllJobs } from "@/services/job";
import { createJob } from "@/services/job";
import { deleteJob } from "@/services/job";
export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [loading,setLoading] =useState(false);
  const [fetching,setFetching] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "full-time",
    summary: "",
    description: "",
    requirements: "",
    salary_range  : "",
    application_deadline: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs();
        console.log(response.data)
        setJobs(response.data); // Set jobs from API response
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]); // Fallback to empty array on error
      }finally{
        setFetching(false)
      }
    };
    
    fetchJobs();
  }, []);
  
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesDepartment =
      departmentFilter === "all" || job.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
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
      const response = await createJob(jobData);
      console.log('job post:',response.data)
      setJobs([...jobs, response.data]); // Add new job from API response
      setFormData({
        title: "",
        location: "",
        type: "full-time",
        summary: "",
        description: "",
        requirements: "",
        salary_range :"",
        application_deadline: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error creating job:", error);
    }finally{
      setLoading(false)
    }
  };
  const handleDelete = async (id: number) => {
    setFetching(true)
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }finally{
      setFetching(false)
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const diffTime = new Date(deadline).getTime() - new Date().getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const departments = [...new Set(jobs.map((job) => job.department))];
  if (fetching){
    return (
      <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Jobs Management</h1>
          <p className="text-slate-600 mt-1">Manage all job postings efficiently</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          {showForm ? "Cancel" : "Post New Job"}
        </button>
      </header>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 border rounded-lg bg-white shadow-sm"
        >
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
                onChange={(e) => setFormData({ ...formData,salary_range: e.target.value })}
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

          <div className="border-t pt-4 border-gray-200 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-200 text-slate-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
            disabled={loading}
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              {loading?'Posting...':'Post job'}
            </button>
          </div>
        </form>
      )}

      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job) => {
          const daysLeft = getDaysUntilDeadline(job.deadline);
          return (
            <div
              key={job.id}
              className="p-6 border border-gray-200 rounded-xl shadow bg-white space-y-3"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      job.status === "active"
                        ? "bg-green-100 text-green-700"
                        : job.status === "closed"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                  </span>
                  <Link href={`/admin/jobs/${job.id}/edit`}>
                    <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-2">{job.summary}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-blue-700">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-indigo-700">
                  <Briefcase className="w-4 h-4" /> {job.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}