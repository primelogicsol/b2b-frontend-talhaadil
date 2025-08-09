"use client"

import type React from "react"
import { useState } from "react"
import VerticalHeroSlider from "./VerticalBanner" // Assuming this path
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa"
import { useGlobalContext } from "../../context/ScreenProvider"
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
} from "lucide-react";


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

  const { is4K } = useGlobalContext()

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
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@dekoshurcrafts",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@DeKoshurCrafts",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@DeKoshurCrafts",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "De Koshur Crafts",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <div className="min-h-screen bg-[#e4e6eb] overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <VerticalHeroSlider />
      </section>

      {/* Contact Sections */}
      <section className={is4K ? "py-24 px-8 sm:px-12 lg:px-16" : "py-12 px-4 sm:px-6 lg:px-8"}>
        <div className={is4K ? "max-w-[2000px] mx-auto" : "max-w-7xl mx-auto"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {contactSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Top Color Strip */}
                  <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>

                  {/* Content */}
                  <div
                    className={
                      is4K
                        ? "p-10 sm:p-12 flex flex-col justify-between h-full"
                        : "p-6 sm:p-8 flex flex-col justify-between h-full"
                    }
                  >
                    <div className={is4K ? "flex items-center mb-6 sm:mb-8" : "flex items-center mb-4 sm:mb-6"}>
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${section.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={is4K ? "w-8 h-8 sm:w-10 sm:h-10" : "w-5 h-5 sm:w-6 sm:h-6"} />
                      </div>
                      <h3
                        className={
                          is4K
                            ? "text-3xl sm:text-4xl font-bold text-[#0f172a] group-hover:text-[#1b4f68] transition-colors duration-300"
                            : "text-xl sm:text-2xl font-bold text-[#0f172a] group-hover:text-[#1b4f68] transition-colors duration-300"
                        }
                      >
                        {section.title}
                      </h3>
                    </div>

                    <p
                      className={
                        is4K
                          ? "text-[#346880] mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed"
                          : "text-[#346880] mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed"
                      }
                    >
                      {section.description}
                    </p>

                    <div className={is4K ? "space-y-4 text-sm sm:text-lg" : "space-y-3 text-[12px] sm:text-base"}>
                      <div className="flex items-center text-[#1b4f68] hover:text-[#2a5f7a] transition-colors duration-300">
                        <Mail className={is4K ? "w-7 h-7 mr-4" : "w-5 h-5 mr-3"} />
                        <a href={`mailto:${section.email}`} className="hover:underline break-all">
                          {section.email}
                        </a>
                      </div>
                      <div className="flex items-center text-[#1b4f68] hover:text-[#2a5f7a] transition-colors duration-300">
                        <Phone className={is4K ? "w-7 h-7 mr-4" : "w-5 h-5 mr-3"} />
                        <a href={`tel:${section.phone}`} className="hover:underline">
                          {section.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-[#346880]">
                        <Clock className={is4K ? "w-7 h-7 mr-4" : "w-5 h-5 mr-3"} />
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
      <section
        className={
          is4K
            ? "py-20 px-8 sm:px-12 lg:px-16 bg-gradient-to-r from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-hover-color)]"
            : "py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-hover-color)]"
        }
      >
        <div className={is4K ? "max-w-[2000px] mx-auto" : "max-w-7xl mx-auto"}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Text Content */}
            <div className="text-white space-y-4">
              <h2 className={is4K ? "text-5xl font-bold" : "text-3xl font-bold"}>
                Contact <span className="text-[var(--secondary-color)]">Us</span>
              </h2>

              {/* Address List */}
              <div className={is4K ? "space-y-4 text-base text-[#e4e6eb]" : "space-y-3 text-sm text-[#e4e6eb]"}>
                <div className="flex items-start gap-3">
                  <MapPin
                    className={
                      is4K
                        ? "w-7 h-7 text-[var(--secondary-hover-color)] mt-1"
                        : "w-5 h-5 text-[var(--secondary-hover-color)] mt-1"
                    }
                  />
                  <div>
                    <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>Corporation Address</p>
                    <p>4445 Corporation Ln Ste 264, Virginia Beach, VA 23462 - USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className={
                      is4K
                        ? "w-7 h-7 text-[var(--secondary-hover-color)] mt-1"
                        : "w-5 h-5 text-[var(--secondary-hover-color)] mt-1"
                    }
                  />
                  <div>
                    <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>Business Principal</p>
                    <p>9480 Main St #1185, Fairfax, VA 22031 - Greater Washington</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className={
                      is4K
                        ? "w-7 h-7 text-[var(--secondary-hover-color)] mt-1"
                        : "w-5 h-5 text-[var(--secondary-hover-color)] mt-1"
                    }
                  />
                  <div>
                    <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>Kashmir Office</p>
                    <p>Artisan Lane-2, Gousia Colony Ext, Zakura, Srinagar 190006</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className={is4K ? "space-y-4 pt-6 text-base text-[#e4e6eb]" : "space-y-3 pt-4 text-sm text-[#e4e6eb]"}
              >
                <div className="flex items-start gap-3">
                  <Clock
                    className={
                      is4K ? "w-7 h-7 text-[var(--secondary-color)] mt-1" : "w-5 h-5 text-[var(--secondary-color)] mt-1"
                    }
                  />
                  <div>
                    <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>USA Hours</p>
                    <p>Mon–Fri: 9:00 AM – 5:00 PM (EST)</p>
                    <p>Sat–Sun: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className={
                      is4K ? "w-7 h-7 text-[var(--secondary-color)] mt-1" : "w-5 h-5 text-[var(--secondary-color)] mt-1"
                    }
                  />
                  <div>
                    <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>India Hours</p>
                    <p>Mon–Fri: 9:30 AM – 6:30 PM (IST)</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Coordination */}
              <div
                className={
                  is4K
                    ? "flex items-start gap-3 pt-6 text-base text-[#e4e6eb]"
                    : "flex items-start gap-3 pt-4 text-sm text-[#e4e6eb]"
                }
              >
                <Clock
                  className={
                    is4K ? "w-7 h-7 text-[var(--secondary-color)] mt-1" : "w-5 h-5 text-[var(--secondary-color)] mt-1"
                  }
                />
                <div>
                  <p className={is4K ? "font-medium text-lg" : "font-medium text-base"}>Time Coordination</p>
                  <p>India is 9.5 hrs ahead of EST.</p>
                  <p>Meetings: 8–11 AM EST / 5:30–8:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Map or Placeholder */}
            <div className="bg-white rounded-xl p-2 shadow-lg h-full flex flex-col">
              <div className="bg-gray-200 rounded-lg flex-grow flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className={is4K ? "w-14 h-14 mx-auto mb-4" : "w-10 h-10 mx-auto mb-2"} />
                  <p className={is4K ? "text-lg font-medium" : "text-base font-medium"}>Interactive Map</p>
                  <p className={is4K ? "text-base" : "text-sm"}>Office Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section
        className={
          is4K ? "py-24 sm:py-32 px-8 sm:px-12 lg:px-16 bg-white" : "py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        }
      >
        <div className={is4K ? "max-w-[2000px] mx-auto text-center" : "max-w-4xl mx-auto text-center"}>
          <h2
            className={
              is4K
                ? "text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 sm:mb-8"
                : "text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 sm:mb-6"
            }
          >
            Stay <span className="text-[#d85834]">Connected</span>
          </h2>
          <p
            className={
              is4K
                ? "text-base sm:text-lg md:text-xl text-[#346880] mb-12 sm:mb-16 leading-relaxed"
                : "text-sm sm:text-base md:text-lg text-[#346880] mb-8 sm:mb-12 leading-relaxed"
            }
          >
            Follow us for the latest updates, artisan stories, new product releases, and much more.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href="#"
                  className={`${is4K ? "group bg-gradient-to-br from-[#e4e6eb] to-white p-8 sm:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2" : "group bg-gradient-to-br from-[#e4e6eb] to-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"} ${social.color}`}
                >
                  <IconComponent
                    className={
                      is4K
                        ? "w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 text-[#1b4f68] group-hover:scale-125 transition-transform duration-300"
                        : "w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#1b4f68] group-hover:scale-125 transition-transform duration-300"
                    }
                  />
                  <h4
                    className={
                      is4K
                        ? "font-medium sm:font-semibold text-base sm:text-lg text-[#0f172a] mb-2"
                        : "font-medium sm:font-semibold text-sm sm:text-base text-[#0f172a] mb-1"
                    }
                  >
                    {social.name}
                  </h4>
                  <p className={is4K ? "text-sm sm:text-base text-[#346880]" : "text-xs sm:text-sm text-[#346880]"}>
                    {social.handle}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={is4K ? "py-32 px-8 sm:px-12 lg:px-16" : "py-16 px-4 sm:px-6 lg:px-8"}>
        <div className={is4K ? "max-w-[2000px] mx-auto" : "max-w-4xl mx-auto"}>
          <div className="text-center mb-12">
            <h2
              className={
                is4K
                  ? "text-5xl md:text-6xl font-bold text-[#0f172a] mb-8"
                  : "text-3xl md:text-4xl font-bold text-[#0f172a] mb-6"
              }
            >
              Get in <span className="text-[var(--secondary-color)]">Touch</span>
            </h2>
            <p className={is4K ? "text-[#346880] text-xl leading-relaxed" : "text-[#346880] text-lg px-2 text-left md:text-center lg:text-center sleading-relaxed"}>
              For general inquiries, please fill out the contact form below, and we will get back to you as soon as
              possible.
            </p>
          </div>

          <div
            className={
              is4K ? "bg-white rounded-3xl shadow-2xl p-12 md:p-16" : "bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            }
          >
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={
                      is4K
                        ? "block text-base font-semibold text-[#0f172a] mb-3"
                        : "block text-sm font-semibold text-[#0f172a] mb-2"
                    }
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className={
                        is4K
                          ? "absolute left-4 top-1/2 transform -translate-y-1/2 text-[#346880] w-7 h-7"
                          : "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#346880] w-5 h-5"
                      }
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={
                        is4K
                          ? "w-full pl-16 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                          : "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                      }
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={
                      is4K
                        ? "block text-base font-semibold text-[#0f172a] mb-3"
                        : "block text-sm font-semibold text-[#0f172a] mb-2"
                    }
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      className={
                        is4K
                          ? "absolute left-4 top-1/2 transform -translate-y-1/2 text-[#346880] w-7 h-7"
                          : "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#346880] w-5 h-5"
                      }
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={
                        is4K
                          ? "w-full pl-16 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                          : "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1b4f68] focus:outline-none transition-colors duration-300"
                      }
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiryType"
                  className={
                    is4K
                      ? "block text-base font-semibold text-[#0f172a] mb-3"
                      : "block text-sm font-semibold text-[#0f172a] mb-2"
                  }
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className={
                    is4K
                      ? "w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                      : "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                  }
                >
                  <option value="general">General Inquiry</option>
                  <option value="artisan">Artisan Partnership</option>
                  <option value="business">Business Partnership</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={
                    is4K
                      ? "block text-base font-semibold text-[#0f172a] mb-3"
                      : "block text-sm font-semibold text-[#0f172a] mb-2"
                  }
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={
                    is4K
                      ? "w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                      : "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-color)] focus:outline-none transition-colors duration-300"
                  }
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={
                    is4K
                      ? "block text-base font-semibold text-[#0f172a] mb-3"
                      : "block text-sm font-semibold text-[#0f172a] mb-2"
                  }
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={
                    is4K
                      ? "w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-hover-color)] focus:outline-none transition-colors duration-300 resize-none"
                      : "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary-hover-color)] focus:outline-none transition-colors duration-300 resize-none"
                  }
                  placeholder="Please include all information relevant to your inquiry..."
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    is4K
                      ? "inline-flex items-center px-12 py-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white font-semibold rounded-xl hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-color)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      : "inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white font-semibold rounded-xl hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-color)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  }
                >
                  {isSubmitting ? (
                    <>
                      <div
                        className={
                          is4K
                            ? "animate-spin rounded-full h-7 w-7 border-b-2 border-white mr-4"
                            : "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                        }
                      ></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className={is4K ? "w-7 h-7 mr-4" : "w-5 h-5 mr-3"} />
                      Send
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
