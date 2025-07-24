
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mockJobs, type Job } from "@/lib/data";
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

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

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
    skills: "",
    responsibilities: "",
    benefits: "",
    workingHours: "",
    remote: false,
    urgency: "medium",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    languages: "",
  });

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesDepartment =
      departmentFilter === "all" || job.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: Job = {
      id: Math.max(...jobs.map((j) => j.id)) + 1,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      type: formData.type as Job["type"],
      department: formData.department,
      salary: {
        min: parseInt(formData.salaryMin),
        max: parseInt(formData.salaryMax),
        currency: "USD",
      },
      postedDate: new Date().toISOString().split("T")[0],
      deadline: formData.deadline,
      applications: 0,
      status: "active",
      requirements: {
        experience: {
          min: parseInt(formData.experience),
          max: parseInt(formData.experience) + 3,
        },
        education: "Bachelor's degree or equivalent",
        skills: formData.skills.split(",").map((s) => s.trim()),
        languages: ["English"],
      },
      responsibilities: formData.responsibilities.split("\n").filter(Boolean),
      benefits: formData.benefits.split("\n").filter(Boolean),
      workingHours: formData.workingHours,
      remote: formData.remote,
      urgency: formData.urgency as Job["urgency"],
      contactPerson: {
        name: formData.contactName,
        email: formData.contactEmail,
        phone: formData.contactPhone,
      },
    };

    setJobs([...jobs, newJob]);
    setFormData({
      title: "",
      description: "",
      location: "",
      type: "full-time",
      department: "",
      salaryMin: "",
      salaryMax: "",
      deadline: "",
      experience: "",
      skills: "",
      responsibilities: "",
      benefits: "",
      workingHours: "",
      remote: false,
      urgency: "medium",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      languages: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const diffTime = new Date(deadline).getTime() - new Date().getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const departments = [...new Set(jobs.map((job) => job.department))];

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-200 text-slate-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Post Job
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
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
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
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
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

              <p className="text-gray-700 mb-2">{job.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-blue-700">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-indigo-700">
                  <Briefcase className="w-4 h-4" /> {job.type}
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <DollarSign className="w-4 h-4" /> {job.salary.currency} {job.salary.min}-
                  {job.salary.max}
                </div>
                <div className="flex items-center gap-1 text-orange-600">
                  <Star className="w-4 h-4" /> Urgency: {job.urgency}
                </div>
                {job.remote && (
                  <div className="flex items-center gap-1 text-cyan-700">
                    <Globe className="w-4 h-4" /> Remote
                  </div>
                )}
              </div>

              <div
                className={`text-sm mt-2 flex items-center gap-1 ${
                  daysLeft > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                <Clock className="w-4 h-4" />
                {daysLeft > 0 ? `${daysLeft} days left` : "Expired"}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
