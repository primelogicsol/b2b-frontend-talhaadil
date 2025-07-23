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
  Star
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
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
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
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          {showForm ? "Cancel" : "Post New Job"}
        </button>
      </header>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
          {/* Form Inputs Here */}
          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
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
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-gray-300 p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
        <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="border border-gray-300 p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400">
          <option value="all">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job) => {
          const daysLeft = getDaysUntilDeadline(job.deadline);
          return (
            <div key={job.id} className="p-6 border border-gray-200 rounded-xl shadow bg-white space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${job.status === 'active' ? 'bg-green-100 text-green-700' : job.status === 'closed' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                  <Link href={`/admin/jobs/${job.id}/edit`}>
                    <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(job.id)} className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-2">{job.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-blue-700"><MapPin className="w-4 h-4" /> {job.location}</div>
                <div className="flex items-center gap-1 text-indigo-700"><Briefcase className="w-4 h-4" /> {job.type}</div>
                <div className="flex items-center gap-1 text-green-700"><DollarSign className="w-4 h-4" /> {job.salary.currency} {job.salary.min}-{job.salary.max}</div>
                <div className="flex items-center gap-1 text-orange-600"><Star className="w-4 h-4" /> Urgency: {job.urgency}</div>
                {job.remote && <div className="flex items-center gap-1 text-cyan-700"><Globe className="w-4 h-4" /> Remote</div>}
              </div>

              <div className={`text-sm mt-2 flex items-center gap-1 ${daysLeft > 0 ? "text-green-600" : "text-red-500"}`}>
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
