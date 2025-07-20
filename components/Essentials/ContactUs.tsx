"use client"

import type React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Users,
  Heart,
 
} from "lucide-react"
import VerticalHeroSlider from "./VerticalBanner"
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We'll get back to you within 48 hours.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
    }, 2000)
  }

  const contactSections = [
    {
      title: "General Inquiries",
      description:
        "Have a question about our products, platform, or services? Reach out to us and one of our dedicated team members will get back to you as soon as possible.",
      email: "contact@dekoshurcrafts.com",
      phone: "+1 (XXX) XXX-XXXX",
      hours: "Monday - Friday, 9:00 AM - 6:00 PM (EST)",
      icon: MessageSquare,
      color: "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
    },
    {
      title: "For Artisans",
      description:
        "Are you an artisan looking to showcase your authentic Kashmiri crafts to a global audience? We would love to collaborate with you.",
      email: "artisans@dekoshurcrafts.com",
      phone: "+1 (XXX) XXX-XXXX",
      hours: "Join our platform today",
      icon: Heart,
      color: "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
    },
    {
      title: "Partnership Inquiries",
      description:
        "Whether you're a retailer, designer, NGO, or potential partner, we would love to explore opportunities to work together.",
      email: "partners@dekoshurcrafts.com",
      phone: "+1 (XXX) XXX-XXXX",
      hours: "Collaboration opportunities",
      icon: Building,
      color: "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
    },
    {
      title: "Customer Support",
      description:
        "Need assistance with your order or have product-related questions? Our customer support team is ready to assist you 24/7.",
      email: "support@dekoshurcrafts.com",
      phone: "+1 (XXX) XXX-XXXX",
      hours: "Available 24/7",
      icon: Users,
      color: "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
    },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, handle: "@dekoshurcrafts", color: "hover:text-pink-500" },
    { name: "Facebook", icon: Facebook, handle: "@DeKoshurCrafts", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, handle: "@DeKoshurCrafts", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, handle: "De Koshur Crafts", color: "hover:text-blue-700" },
  ]

  return (
    <div className="min-h-screen bg-[#e4e6eb]">
      {/* Hero Section */}
      <section>
        <VerticalHeroSlider/>
      </section>

      {/* Contact Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${section.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#1b4f68] transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>

                    <p className="text-[#346880] mb-6 leading-relaxed">{section.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center text-[#1b4f68] hover:text-[#2a5f7a] transition-colors duration-300">
                        <Mail className="w-5 h-5 mr-3" />
                        <a href={`mailto:${section.email}`} className="hover:underline">
                          {section.email}
                        </a>
                      </div>
                      <div className="flex items-center text-[#1b4f68] hover:text-[#2a5f7a] transition-colors duration-300">
                        <Phone className="w-5 h-5 mr-3" />
                        <a href={`tel:${section.phone}`} className="hover:underline">
                          {section.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-[#346880]">
                        <Clock className="w-5 h-5 mr-3" />
                        <span>{section.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location & Office Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-hover-color)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our <span className="text-[var(--secondary-color)]">Office</span>
              </h2>
              <p className="text-[#e4e6eb] text-lg mb-8 leading-relaxed">
                De Koshur Crafts is headquartered in Washington, D.C. Our office is open during standard business hours,
                and we welcome any inquiries or visits by appointment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[var(--secondary-hover-color)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Office Address</h4>
                    <p className="text-[#e4e6eb]">
                      De Koshur Crafts
                      <br />
                      [Street Address]
                      <br />
                      Washington, D.C., USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[var(--secondary-color)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <div className="text-[#e4e6eb] space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                      <p>Saturday: By Appointment Only</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Washington, D.C. Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
            Stay <span className="text-[#d85834]">Connected</span>
          </h2>
          <p className="text-[#346880] text-lg mb-12 leading-relaxed">
            Follow us for the latest updates, artisan stories, new product releases, and much more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href="#"
                  className={`group bg-gradient-to-br from-[#e4e6eb] to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${social.color}`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-[#1b4f68] group-hover:scale-125 transition-transform duration-300" />
                  <h4 className="font-semibold text-[#0f172a] mb-1">{social.name}</h4>
                  <p className="text-sm text-[#346880]">{social.handle}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
              Get in <span className="text-[var(--secondary-color)]">Touch</span>
            </h2>
            <p className="text-[#346880] text-lg leading-relaxed">
              For general inquiries, please fill out the contact form below, and we will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0f172a] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#346880] w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0f172a] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#346880] w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#0f172a] mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="artisan">Artisan Partnership</option>
                  <option value="business">Business Partnership</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#0f172a] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0f172a] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-hover-color)] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Please include all information relevant to your inquiry..."
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white font-semibold rounded-xl hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-color)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div>
  )
}