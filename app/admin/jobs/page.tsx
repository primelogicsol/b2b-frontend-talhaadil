"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { mockJobs, type Job } from "@/lib/data"
import {
  Briefcase, Plus, Search, MapPin, Calendar, Clock,
  Users, DollarSign, Building2, AlertCircle, Eye, Edit, Trash2, Mail, Phone
} from "lucide-react"

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [formData, setFormData] = useState({
    title: "", description: "", location: "", type: "full-time", department: "",
    salaryMin: "", salaryMax: "", deadline: "", experience: "", skills: "",
    responsibilities: "", benefits: "", workingHours: "", remote: false,
    urgency: "medium", contactName: "", contactEmail: "", contactPhone: ""
  })

  useEffect(() => { setJobs(mockJobs) }, [])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || job.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    return matchesSearch && matchesStatus && matchesDepartment
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newJob: Job = {
      id: Math.max(...jobs.map((j) => j.id)) + 1,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      type: formData.type as Job["type"],
      department: formData.department,
      salary: { min: parseInt(formData.salaryMin), max: parseInt(formData.salaryMax), currency: "USD" },
      postedDate: new Date().toISOString().split("T")[0],
      deadline: formData.deadline,
      applications: 0,
      status: "active",
      requirements: {
        experience: { min: parseInt(formData.experience), max: parseInt(formData.experience) + 3 },
        education: "Bachelor's degree or equivalent",
        skills: formData.skills.split(",").map((s) => s.trim()),
        languages: ["English"],
      },
      responsibilities: formData.responsibilities.split("\n").filter((r) => r.trim()),
      benefits: formData.benefits.split("\n").filter((b) => b.trim()),
      workingHours: formData.workingHours,
      remote: formData.remote,
      urgency: formData.urgency as Job["urgency"],
      contactPerson: {
        name: formData.contactName,
        email: formData.contactEmail,
        phone: formData.contactPhone,
      },
    }
    setJobs([...jobs, newJob])
    setFormData({ title:"",description:"",location:"",type:"full-time",department:"",salaryMin:"",salaryMax:"",deadline:"",experience:"",skills:"",responsibilities:"",benefits:"",workingHours:"",remote:false,urgency:"medium",contactName:"",contactEmail:"",contactPhone:"" })
    setShowForm(false)
  }

  const handleDelete = (id: number) => setJobs(jobs.filter((job) => job.id !== id))

  const getDaysUntilDeadline = (deadline: string) => {
    const diffTime = new Date(deadline).getTime() - new Date().getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const departments = [...new Set(jobs.map((job) => job.department))]

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Jobs Management</h1>
          <p className="text-slate-600 mt-2 text-lg">Manage job postings with detailed requirements and tracking</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded"
        >
          <Plus className="w-5 h-5 mr-2" />
          {showForm ? "Cancel" : "Post New Job"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 border rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>Job Title</label>
              <input className="border p-2 w-full" value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})} required />
            </div>
            <div>
              <label>Location</label>
              <input className="border p-2 w-full" value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label>Job Type</label>
              <select className="border p-2 w-full" value={formData.type} onChange={(e)=>setFormData({...formData,type:e.target.value})}>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label>Department</label>
              <input className="border p-2 w-full" value={formData.department} onChange={(e)=>setFormData({...formData,department:e.target.value})} required />
            </div>
            <div>
              <label>Urgency</label>
              <select className="border p-2 w-full" value={formData.urgency} onChange={(e)=>setFormData({...formData,urgency:e.target.value})}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input type="number" className="border p-2" placeholder="Min Salary" value={formData.salaryMin} onChange={(e)=>setFormData({...formData,salaryMin:e.target.value})}/>
            <input type="number" className="border p-2" placeholder="Max Salary" value={formData.salaryMax} onChange={(e)=>setFormData({...formData,salaryMax:e.target.value})}/>
            <input type="date" className="border p-2" value={formData.deadline} onChange={(e)=>setFormData({...formData,deadline:e.target.value})}/>
          </div>
          <textarea className="border p-2 w-full" rows={4} placeholder="Job Description" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="number" className="border p-2" placeholder="Required Experience" value={formData.experience} onChange={(e)=>setFormData({...formData,experience:e.target.value})}/>
            <input className="border p-2" placeholder="Working Hours" value={formData.workingHours} onChange={(e)=>setFormData({...formData,workingHours:e.target.value})}/>
          </div>
          <input className="border p-2 w-full" placeholder="Required Skills" value={formData.skills} onChange={(e)=>setFormData({...formData,skills:e.target.value})}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea className="border p-2" rows={4} placeholder="Key Responsibilities" value={formData.responsibilities} onChange={(e)=>setFormData({...formData,responsibilities:e.target.value})}/>
            <textarea className="border p-2" rows={4} placeholder="Benefits" value={formData.benefits} onChange={(e)=>setFormData({...formData,benefits:e.target.value})}/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input className="border p-2" placeholder="Contact Name" value={formData.contactName} onChange={(e)=>setFormData({...formData,contactName:e.target.value})}/>
            <input type="email" className="border p-2" placeholder="Contact Email" value={formData.contactEmail} onChange={(e)=>setFormData({...formData,contactEmail:e.target.value})}/>
            <input type="tel" className="border p-2" placeholder="Contact Phone" value={formData.contactPhone} onChange={(e)=>setFormData({...formData,contactPhone:e.target.value})}/>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={formData.remote} onChange={(e)=>setFormData({...formData,remote:e.target.checked})}/>
            <label>Remote work available</label>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={()=>setShowForm(false)}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Post Job</button>
          </div>
        </form>
      )}

      {/* filters */}
      <div className="flex flex-col sm:flex-row gap-4 border p-4 rounded">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded"
          />
        </div>
        <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} className="border p-2 rounded">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
        <select value={departmentFilter} onChange={(e)=>setDepartmentFilter(e.target.value)} className="border p-2 rounded">
          <option value="all">All Departments</option>
          {departments.map((dept)=>(
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* job cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.map(job=>{
          const daysLeft = getDaysUntilDeadline(job.deadline)
          return (
            <div key={job.id} className="border rounded p-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="space-x-2">
                  <Link href={`/admin/jobs/${job.id}/edit`}>
                    <button className="px-3 py-1 bg-gray-200 rounded">Edit</button>
                  </Link>
                  <button onClick={()=>handleDelete(job.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
              <p>{job.description}</p>
              <p className="text-sm mt-2">{job.department} · {job.location} · {job.salary.currency} {job.salary.min}-{job.salary.max}</p>
              <p className="text-sm mt-1">{daysLeft>0?`${daysLeft} days left`:"Expired"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
