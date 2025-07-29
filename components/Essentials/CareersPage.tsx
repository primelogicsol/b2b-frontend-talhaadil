"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Target,
  Leaf,
  Shield,
  HandHeart,
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import VerticalHeroSlider from "./VerticalBanner";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
const benefits = [
  {
    title: "Make a Difference",
    description:
      "Help shape a platform that values craft, supports fair trade, and builds lasting cultural growth."
  },
  {
    title: "Team Collaboration",
    description:
      "Work inside a group that shares ideas, builds trust, and grows strong through open support."
  },
  {
    title: "Career Progression",
    description:
      "Gain rich learning chances that grow your skill set and keep you moving toward better roles."
  },
  {
    title: "Flexible Schedule",
    description:
      "Enjoy a balanced approach that values your time and allows remote work with true freedom."
  },
  {
    title: "Diverse Inclusion",
    description:
      "Be part of a team that honors each background and creates space where all members belong."
  },
  {
    title: "Diverse Inclusion",
    description:
      "Be part of a team that honors each background and creates space where all members belong."
  },
  {
    title: "Diverse Inclusion",
    description:
      "Be part of a team that honors each background and creates space where all members belong."
  },
  {
    title: "Positive Culture",
    description:
      "Join a mindful workplace that blends kind values and clear goals for steady shared success."
  }
]
  const filters = [
    { value: "all", label: "All Departments" },
    { value: "operations", label: "Operations" },
    { value: "marketing", label: "Marketing" },
    { value: "support", label: "Support" },
  ];
  const jobOpenings = [
    {
      id: "ecommerce-manager",
      title: "E-Commerce Manager",
      location: "Washington",
      type: "Full-time",
      department: "Operations",
      description:
        "Oversee the day-to-day operations of our online marketplace, managing product listings, customer service, and logistics.",
      responsibilities: [
        "Oversee product listings, inventory management, and order fulfillment",
        "Work closely with the marketing team to implement digital marketing campaigns",
        "Ensure customer satisfaction through efficient and proactive support",
      ],
      qualifications: [
        "3+ years of experience in e-commerce management",
        "Strong communication and organizational skills",
        "Knowledge of e-commerce platforms (Shopify, WooCommerce, etc.)",
      ],
      email: "ecommerce@dekoshurcrafts.com",
    },
    {
      id: "artisan-liaison",
      title: "Artisan Liaison Coordinator",
      location: "Remote",
      type: "Full-time",
      department: "Operations",
      description:
        "Manage relationships with artisans, supporting them in business development and ensuring access to necessary resources.",
      responsibilities: [
        "Provide guidance to artisans on pricing, marketing, and product quality",
        "Coordinate training and workshops for artisan development",
        "Monitor artisan sales and ensure fair compensation",
      ],
      qualifications: [
        "2+ years of experience working with artisans or in a fair-trade environment",
        "Strong interpersonal and communication skills",
        "A passion for craftsmanship and sustainable business practices",
      ],
      email: "artisan@dekoshurcrafts.com",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Specialist",
      location: "Washington",
      type: "Full-time",
      department: "Marketing",
      description:
        "Manage social media platforms, advertising campaigns, and content strategy to raise brand awareness.",
      responsibilities: [
        "Develop and execute digital marketing campaigns across social media, Google Ads, and email",
        "Create engaging content to promote artisan stories and products",
        "Analyze performance metrics and adjust strategies for optimal results",
      ],
      qualifications: [
        "3+ years of experience in digital marketing, including social media management and SEO",
        "Strong knowledge of Google Ads, Facebook Ads, and content marketing strategies",
        "Excellent writing, editing, and communication skills",
      ],
      email: "marketing@dekoshurcrafts.com",
    },
    {
      id: "customer-support",
      title: "Customer Support Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Support",
      description:
        "Be the first point of contact for customers, handling inquiries and ensuring exceptional customer experience.",
      responsibilities: [
        "Answer customer inquiries via email, phone, and live chat",
        "Assist with order tracking, returns, and product issues",
        "Provide feedback to the team on common customer concerns",
      ],
      qualifications: [
        "2+ years of experience in customer service or support",
        "Strong communication and problem-solving skills",
        "Ability to handle high volumes of inquiries while maintaining a positive attitude",
      ],
      email: "support@dekoshurcrafts.com",
    },
  ];

  const internships = [
    {
      title: "Marketing Intern",
      description: "Assist in digital marketing campaigns and content creation",
    },
    {
      title: "E-Commerce Intern",
      description: "Support day-to-day operations of our online platform",
    },
    {
      title: "Operations Intern",
      description: "Assist with inventory management and logistics",
    },
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Empowerment",
      description:
        "We empower artisans by giving them a platform to showcase their talents, a voice in the global marketplace, and the resources to grow their businesses.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We are committed to sustainable practices in all aspects of our business, from eco-friendly materials to carbon-neutral shipping and fair trade principles.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We value transparency and ethical practices. Our commitment to fair wages, safe working conditions, and authenticity ensures responsible operations.",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      job.department.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="careers-page overflow-x-hidden">
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section {
          padding: 80px 0;

        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--primary-color);
        }

        .why-work-section {
          background: var(--primary-header-color);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .search-filter-section {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .search-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .search-input {
          flex: 1;
          min-width: 250px;
          padding: 12px 16px 12px 20px;
          border: 2px solid var(--primary-header-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-hover-color);
        }

        .search-wrapper {
          flex: 1;
        }

        .filter-select {
          padding: 12px 16px;
          border: 2px solid var(--primary-header-color);
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          color: var(--primary-color);
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: var(--primary-hover-color);
        }

        .jobs-grid {
          display: grid;
          gap: 2rem;
        }

        .job-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .job-header {
          padding: 2rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .job-info {
          flex: 1;
        }

        .job-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--primary-color);
        }

        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .job-description {
          color: var(--primary-dark-slate);
          margin-bottom: 1rem;
        }

        .expand-button {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 8px;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expand-button:hover {
          background: var(--primary-hover-color);
          transform: scale(1.1);
        }

        .job-details {
          padding: 0 2rem 2rem;
          border-top: 1px solid var(--primary-header-color);
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .job-section {
          margin: 1.5rem 0;
        }

        .job-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0.8rem;
        }

        .job-section ul {
          list-style: none;
          padding: 0;
        }

        .job-section li {
          padding: 0.3rem 0;
          padding-left: 1.2rem;
          position: relative;
        }

        .job-section li::before {
          content: "•";
          color: var(--secondary-color);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .apply-button {
          background: var(--secondary-color);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .apply-button:hover {
          background: var(--secondary-hover-color);
          transform: translateY(-2px);
        }

        .internships-section {
          background: var(--primary-header-color);
        }

        .internships-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .internship-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .internship-card:hover {
          transform: translateY(-5px);
        }

        .internship-icon {
          background: var(--secondary-hover-color);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          background: linear-gradient(
            135deg,
            var(--primary-cyan-color),
            var(--primary-color)
          );
          color: white;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .value-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .cta-section {
          background: var(--primary-color) 0%;

          color: white;
          text-align: center;
          padding: 80px 20px;
          border-bottom: 80px solid var(--primary-header-color);
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .cta-button {
          background: white;
          color: var(--secondary-color);
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover {
          background: var(--primary-header-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .contact-info {
          background: var(--primary-dark-slate);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }

        .contact-methods {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-cyan-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-method:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .search-container {
            flex-direction: column;
            align-items: stretch;
          }

          .search-wrapper {
            min-width: auto;
          }

          .job-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .job-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .contact-methods {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .section {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section>
        <VerticalHeroSlider />
      </section>

      {/* Why Work Section */}
      <section className="section why-work-section">
        <div className="container">
          <h2 className="section-title">Why Work at De Koshur Crafts?</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "var(--primary-light-text-color)",
            }}
          >
            We believe in building a supportive, inclusive, and empowering work
            environment. We are a diverse team committed to sustainability,
            innovation, and ethical business practices.
          </p>
         <div className="benefits-grid">
      {benefits.map((b, i) => (
        <div className="benefit-card" key={i}>
          <div className="benefit-title">{b.title}</div>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Current Job Openings</h2>

          <div className="search-filter-section px-4 py-4">
            <div className="search-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between max-w-full">
              {/* Search box */}
              <div className="relative w-full sm:flex-1 sm:max-w-[400px] lg:max-w-[300px]">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-2 border-[var(--primary-header-color)] rounded-lg py-3 pr-12 pl-4 text-base transition-colors duration-300 focus:outline-none focus:border-[var(--primary-hover-color)]"
                />
                <button
                  type="button"
                  className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-[var(--primary-hover-color)]"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Custom Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex justify-between items-center w-full sm:w-[200px] border-2 border-[var(--primary-header-color)] rounded-lg py-3 px-4 text-base transition-colors duration-300 focus:outline-none focus:border-[var(--primary-hover-color)]"
                >
                  {filters.find((f) => f.value === selectedFilter)?.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown && (
                  <ul className="absolute z-10 mt-1 w-full sm:w-[200px] border rounded-lg shadow bg-white">
                    {filters.map((f) => (
                      <li
                        key={f.value}
                        onClick={() => {
                          setSelectedFilter(f.value);
                          setOpenDropdown(false);
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white rounded-lg"
                      >
                        {f.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div
                  className="job-header"
                  onClick={() => toggleJobExpansion(job.id)}
                >
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <div className="job-meta-item">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="job-meta-item">
                        <Clock size={16} />
                        {job.type}
                      </div>
                      <div className="job-meta-item">
                        <Briefcase size={16} />
                        {job.department}
                      </div>
                    </div>
                    <p className="job-description">{job.description}</p>
                  </div>
                  <button className="expand-button">
                    {expandedJob === job.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>

                {expandedJob === job.id && (
                  <div className="job-details">
                    <div className="job-section">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="job-section">
                      <h4>Skills & Qualifications:</h4>
                      <ul>
                        {job.qualifications.map((qual, index) => (
                          <li key={index}>{qual}</li>
                        ))}
                      </ul>
                    </div>

                    <a href={`mailto:${job.email}`} className="apply-button">
                      <Mail size={16} />
                      Apply Now
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="section internships-section">
        <div className="container">
          <h2 className="section-title">Internship Opportunities</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "var(--primary-light-text-color)",
            }}
          >
            We offer internship programs that provide hands-on experience in
            various aspects of the business, including marketing, e-commerce,
            operations, and product development.
          </p>

          <div className="internships-grid">
            {internships.map((internship, index) => (
              <div key={index} className="internship-card">
                <div className="internship-icon">
                  <GraduationCap size={24} />
                </div>
                <h3 className="value-title">{internship.title}</h3>
                <p>{internship.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="mailto:internships@dekoshurcrafts.com"
              className="apply-button"
            >
              <Mail size={16} />
              Apply for Internships
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Culture & Values</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "var(--primary-light-text-color)",
            }}
          >
            We believe that a strong, cohesive company culture is the key to our
            success. Here are the core values that drive everything we do at De
            Koshur Crafts.
          </p>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section
        className="section"
        style={{ background: "var(--primary-header-color)" }}
      >
        <div className="container">
          <h2 className="section-title">How to Apply</h2>
          <div
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "2rem",
                color: "var(--primary-light-text-color)",
              }}
            >
              If you are passionate about sustainability, fair trade, and
              empowering Kashmiri artisans, De Koshur Crafts might be the
              perfect place for you.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "2rem",
                color: "var(--primary-light-text-color)",
              }}
            >
              To apply for any open positions, please send your resume and cover
              letter to careers@dekoshurcrafts.com.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "var(--primary-color)",
              }}
            >
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Join Our Team and Make a Difference</h2>
          <p
            style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: "0.9" }}
          >
            Are you ready to be part of a mission-driven company that is making
            a global impact?
          </p>
          <p style={{ fontSize: "1.1rem", opacity: "0.8" }}>
            We are always looking for passionate individuals to join our team.
            Browse our open positions or internships, apply today, and become
            part of De Koshur Crafts.
          </p>

          <div className="cta-buttons">
            <a href="#job-openings" className="cta-button">
              <Briefcase size={20} />
              Explore Career Opportunities
            </a>
            <a href="mailto:careers@dekoshurcrafts.com" className="cta-button">
              <Mail size={20} />
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
