export interface User {
  id: number
  name: string
  email: string
  phone: string
  kpiScore: number
  documents: Document[]
  joinDate: string
  status: "active" | "inactive" | "pending"
  type: "buyer" | "vendor"

  // Business Information
  businessInfo: {
    businessName: string
    businessLegalStructure: string
    businessType: string
    businessEstablishedYear: number
    businessRegistrationNumber: string
    brandAffiliations?: string
    streetAddress1: string
    streetAddress2?: string
    city: string
    stateRegion: string
    country: string
    postalCode: string
    website?: string
    annualTurnover: string
    gstNumber: string
    taxIdentificationNumber: string
    importExportCode?: string
  }

  // Business Contact Person
  businessContact: {
    name: string
    email: string
    phone: string
    whatsapp?: string
    district: string
    pinCode: string
    state: string
    country: string
  }

  // Business Credibility Assessment
  credibilityAssessment: {
    materialStandard: number // 1-10
    qualityLevel: number // 1-10
    sustainabilityLevel: number // 1-10
    serviceLevel: number // 1-10
    standardsLevel: number // 1-10
  }

  // Certifications
  certifications: {
    seekingAuthenticity: boolean
    giCertification: boolean
    handloomMark: boolean
    craftMark: boolean
    indiaHandmade: boolean
    qualityCouncil: boolean
    exportCouncil: boolean
    blockChain: boolean
  }

  // Banking Information
  bankingInfo: {
    bankName: string
    accountName: string
    accountType: string
    accountNumber: string
    ifscCode: string
    swiftBisCode?: string
    ibanCode?: string
  }

  // Banking & Compliance Issues
  complianceIssues: {
    kycChallenges: boolean
    gstComplianceIssues: boolean
    femaPaymentDifficulties: boolean
    digitalBankingImpact: boolean
    fraudCybersecurityIssues: boolean
    paymentGatewayChallenges: boolean
    accountActivityIssues: boolean
    regulatoryActions: boolean
  }
}

export interface Document {
  id: number
  title: string
  filename: string
  uploadDate: string
  size: string
  type: string
}

export interface Job {
  id: number
  title: string
  description: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  department: string
  salary: {
    min: number
    max: number
    currency: string
  }
  postedDate: string
  deadline: string
  applications: number
  status: "active" | "closed" | "draft"
  requirements: {
    experience: {
      min: number
      max: number
    }
    education: string
    skills: string[]
    languages: string[]
  }
  responsibilities: string[]
  benefits: string[]
  workingHours: string
  remote: boolean
  urgency: "low" | "medium" | "high"
  contactPerson: {
    name: string
    email: string
    phone: string
  }
}

export interface TeamMember {
  id: number
  name: string
  role: string
  email: string
  department: string
  joinDate: string
  avatar: string
}

export interface Appointment {
  id: number
  userName: string
  service: string
  date: string
  time: string
  status: "confirmed" | "pending" | "cancelled"
  type: "meeting" | "interview" | "consultation"
}

export interface MonthlyData {
  month: string
  users: number
  revenue: number
  appointments: number
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1-555-0123",
    kpiScore: 85,
    joinDate: "2024-01-15",
    status: "active",
    type: "buyer",
    documents: [
      {
        id: 1,
        title: "Business License",
        filename: "john_license.pdf",
        uploadDate: "2024-01-15",
        size: "2.3 MB",
        type: "PDF",
      },
      {
        id: 2,
        title: "Tax Certificate",
        filename: "john_tax.pdf",
        uploadDate: "2024-01-20",
        size: "5.1 MB",
        type: "PDF",
      },
    ],
    businessInfo: {
      businessName: "Smith Trading Co.",
      businessLegalStructure: "Private Limited Company",
      businessType: "Import/Export",
      businessEstablishedYear: 2018,
      businessRegistrationNumber: "U74999DL2018PTC334567",
      brandAffiliations: "Global Craft Alliance",
      streetAddress1: "123 Business District",
      streetAddress2: "Suite 456",
      city: "New York",
      stateRegion: "New York",
      country: "United States",
      postalCode: "10001",
      website: "www.smithtrading.com",
      annualTurnover: "$2,500,000",
      gstNumber: "29ABCDE1234F1Z5",
      taxIdentificationNumber: "ABCDE1234F",
      importExportCode: "ABCDE1234567890",
    },
    businessContact: {
      name: "John Smith",
      email: "john.smith@smithtrading.com",
      phone: "+1-555-0123",
      whatsapp: "+1-555-0123",
      district: "Manhattan",
      pinCode: "10001",
      state: "New York",
      country: "United States",
    },
    credibilityAssessment: {
      materialStandard: 8,
      qualityLevel: 9,
      sustainabilityLevel: 7,
      serviceLevel: 8,
      standardsLevel: 9,
    },
    certifications: {
      seekingAuthenticity: true,
      giCertification: true,
      handloomMark: false,
      craftMark: true,
      indiaHandmade: false,
      qualityCouncil: true,
      exportCouncil: true,
      blockChain: false,
    },
    bankingInfo: {
      bankName: "Chase Bank",
      accountName: "Smith Trading Co.",
      accountType: "Business Current",
      accountNumber: "1234567890",
      ifscCode: "CHAS0001234",
      swiftBisCode: "CHASUS33",
      ibanCode: "US12CHAS0001234567890",
    },
    complianceIssues: {
      kycChallenges: false,
      gstComplianceIssues: false,
      femaPaymentDifficulties: false,
      digitalBankingImpact: true,
      fraudCybersecurityIssues: false,
      paymentGatewayChallenges: false,
      accountActivityIssues: false,
      regulatoryActions: false,
    },
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91-9876543210",
    kpiScore: 92,
    joinDate: "2024-01-18",
    status: "active",
    type: "vendor",
    documents: [
      {
        id: 3,
        title: "Artisan Certificate",
        filename: "rajesh_cert.pdf",
        uploadDate: "2024-01-18",
        size: "1.8 MB",
        type: "PDF",
      },
      {
        id: 4,
        title: "Product Catalog",
        filename: "rajesh_catalog.pdf",
        uploadDate: "2024-01-25",
        size: "8.2 MB",
        type: "PDF",
      },
    ],
    businessInfo: {
      businessName: "Kashmir Handicrafts",
      businessLegalStructure: "Sole Proprietorship",
      businessType: "Handicraft Manufacturing",
      businessEstablishedYear: 2015,
      businessRegistrationNumber: "UDYAM-JK-03-0012345",
      brandAffiliations: "Kashmir Craft Council",
      streetAddress1: "Dal Lake Road",
      streetAddress2: "Near Floating Gardens",
      city: "Srinagar",
      stateRegion: "Jammu & Kashmir",
      country: "India",
      postalCode: "190001",
      website: "www.kashmirhandicrafts.in",
      annualTurnover: "₹15,00,000",
      gstNumber: "01ABCDE1234F1Z5",
      taxIdentificationNumber: "ABCDE1234F",
      importExportCode: "ABCDE1234567891",
    },
    businessContact: {
      name: "Rajesh Kumar",
      email: "rajesh@kashmirhandicrafts.in",
      phone: "+91-9876543210",
      whatsapp: "+91-9876543210",
      district: "Srinagar",
      pinCode: "190001",
      state: "Jammu & Kashmir",
      country: "India",
    },
    credibilityAssessment: {
      materialStandard: 9,
      qualityLevel: 10,
      sustainabilityLevel: 8,
      serviceLevel: 9,
      standardsLevel: 8,
    },
    certifications: {
      seekingAuthenticity: true,
      giCertification: true,
      handloomMark: true,
      craftMark: true,
      indiaHandmade: true,
      qualityCouncil: false,
      exportCouncil: false,
      blockChain: true,
    },
    bankingInfo: {
      bankName: "State Bank of India",
      accountName: "Rajesh Kumar",
      accountType: "Current Account",
      accountNumber: "9876543210",
      ifscCode: "SBIN0001234",
      swiftBisCode: "SBININBB",
      ibanCode: "",
    },
    complianceIssues: {
      kycChallenges: true,
      gstComplianceIssues: false,
      femaPaymentDifficulties: true,
      digitalBankingImpact: false,
      fraudCybersecurityIssues: false,
      paymentGatewayChallenges: true,
      accountActivityIssues: false,
      regulatoryActions: false,
    },
  },
]

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    description:
      "We are looking for an experienced frontend developer to join our dynamic engineering team. You will be responsible for building scalable, high-performance web applications using modern JavaScript frameworks and ensuring excellent user experiences across all platforms.",
    location: "New York, NY",
    type: "full-time",
    department: "Engineering",
    salary: {
      min: 120000,
      max: 150000,
      currency: "USD",
    },
    postedDate: "2024-02-01",
    deadline: "2024-03-15",
    applications: 24,
    status: "active",
    requirements: {
      experience: {
        min: 5,
        max: 8,
      },
      education: "Bachelor's degree in Computer Science or related field",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
        "Jest",
        "Cypress",
        "Git",
        "Webpack",
        "Node.js",
      ],
      languages: ["English (Fluent)", "Spanish (Optional)"],
    },
    responsibilities: [
      "Develop and maintain high-quality frontend applications using React and TypeScript",
      "Collaborate with designers and backend developers to implement user interfaces",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with the latest frontend technologies and best practices",
      "Mentor junior developers and contribute to team knowledge sharing",
    ],
    benefits: [
      "Competitive salary with annual reviews",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible working hours and remote work options",
      "Professional development budget ($2,000/year)",
      "Unlimited PTO policy",
      "Modern equipment and tools",
      "Team building events and company retreats",
    ],
    workingHours: "40 hours/week, flexible schedule",
    remote: true,
    urgency: "high",
    contactPerson: {
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      phone: "+1-555-0199",
    },
  },
  {
    id: 2,
    title: "Product Manager",
    description:
      "Lead product development and strategy for our core platform. Work with cross-functional teams to deliver exceptional products that solve real customer problems and drive business growth.",
    location: "San Francisco, CA",
    type: "full-time",
    department: "Product",
    salary: {
      min: 140000,
      max: 180000,
      currency: "USD",
    },
    postedDate: "2024-02-03",
    deadline: "2024-03-20",
    applications: 18,
    status: "active",
    requirements: {
      experience: {
        min: 4,
        max: 7,
      },
      education: "Bachelor's degree in Business, Engineering, or related field",
      skills: [
        "Product Strategy",
        "User Research",
        "Data Analysis",
        "Agile/Scrum",
        "Roadmap Planning",
        "A/B Testing",
        "SQL",
        "Figma",
        "Jira",
        "Analytics Tools",
      ],
      languages: ["English (Native)", "Mandarin (Plus)"],
    },
    responsibilities: [
      "Define and execute product strategy and roadmap",
      "Conduct market research and competitive analysis",
      "Gather and prioritize product requirements from stakeholders",
      "Work closely with engineering and design teams",
      "Analyze product metrics and user feedback",
      "Manage product launches and go-to-market strategies",
      "Present product updates to leadership and stakeholders",
    ],
    benefits: [
      "Competitive salary with equity options",
      "Comprehensive health benefits",
      "Flexible PTO and sabbatical options",
      "Learning and development stipend",
      "Commuter benefits",
      "Catered meals and snacks",
      "Gym membership reimbursement",
      "Stock option plan",
    ],
    workingHours: "40-45 hours/week",
    remote: false,
    urgency: "medium",
    contactPerson: {
      name: "Michael Chen",
      email: "michael.chen@company.com",
      phone: "+1-555-0188",
    },
  },
  {
    id: 3,
    title: "UX Designer",
    description:
      "Create beautiful and intuitive user experiences for our products. Collaborate with product and engineering teams to design interfaces that delight users and drive engagement.",
    location: "Remote",
    type: "full-time",
    department: "Design",
    salary: {
      min: 90000,
      max: 120000,
      currency: "USD",
    },
    postedDate: "2024-02-05",
    deadline: "2024-03-25",
    applications: 31,
    status: "active",
    requirements: {
      experience: {
        min: 3,
        max: 6,
      },
      education: "Bachelor's degree in Design, HCI, or related field",
      skills: [
        "Figma",
        "Sketch",
        "Adobe Creative Suite",
        "Prototyping",
        "User Research",
        "Wireframing",
        "Design Systems",
        "HTML/CSS",
        "Usability Testing",
        "Information Architecture",
      ],
      languages: ["English (Fluent)"],
    },
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and developers",
      "Maintain and evolve design systems",
      "Present design concepts to stakeholders",
      "Stay current with design trends and best practices",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health and wellness benefits",
      "Professional development budget",
      "Home office setup allowance",
      "Flexible working hours",
      "Annual company retreat",
      "Creative software licenses",
    ],
    workingHours: "40 hours/week, flexible",
    remote: true,
    urgency: "low",
    contactPerson: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@company.com",
      phone: "+1-555-0177",
    },
  },
  {
    id: 4,
    title: "DevOps Engineer",
    description:
      "Build and maintain our cloud infrastructure. Ensure scalability, security, and reliability of our systems while implementing best practices for continuous integration and deployment.",
    location: "Austin, TX",
    type: "full-time",
    department: "Engineering",
    salary: {
      min: 110000,
      max: 140000,
      currency: "USD",
    },
    postedDate: "2024-02-07",
    deadline: "2024-03-30",
    applications: 15,
    status: "active",
    requirements: {
      experience: {
        min: 4,
        max: 8,
      },
      education: "Bachelor's degree in Computer Science or equivalent experience",
      skills: [
        "AWS/Azure/GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Python",
        "Bash",
        "Monitoring Tools",
        "CI/CD",
        "Linux",
      ],
      languages: ["English (Fluent)"],
    },
    responsibilities: [
      "Design and implement scalable cloud infrastructure",
      "Automate deployment and monitoring processes",
      "Ensure system security and compliance",
      "Troubleshoot production issues",
      "Optimize system performance and costs",
      "Collaborate with development teams on CI/CD",
      "Document infrastructure and processes",
    ],
    benefits: [
      "Competitive salary with bonuses",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Professional certification support",
      "Conference attendance budget",
      "Stock options",
      "Relocation assistance",
      "On-call compensation",
    ],
    workingHours: "40 hours/week with on-call rotation",
    remote: false,
    urgency: "high",
    contactPerson: {
      name: "David Kim",
      email: "david.kim@company.com",
      phone: "+1-555-0166",
    },
  },
  {
    id: 5,
    title: "Marketing Specialist",
    description:
      "Drive growth through digital marketing campaigns and content strategy. Analyze performance and optimize for results while building brand awareness and customer engagement.",
    location: "Chicago, IL",
    type: "contract",
    department: "Marketing",
    salary: {
      min: 60000,
      max: 80000,
      currency: "USD",
    },
    postedDate: "2024-02-10",
    deadline: "2024-03-10",
    applications: 22,
    status: "active",
    requirements: {
      experience: {
        min: 2,
        max: 5,
      },
      education: "Bachelor's degree in Marketing, Communications, or related field",
      skills: [
        "Digital Marketing",
        "Google Analytics",
        "SEO/SEM",
        "Social Media",
        "Content Creation",
        "Email Marketing",
        "Adobe Creative Suite",
        "HubSpot",
        "A/B Testing",
        "Data Analysis",
      ],
      languages: ["English (Native)", "Spanish (Preferred)"],
    },
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Create engaging content for various channels",
      "Analyze campaign performance and ROI",
      "Manage social media presence",
      "Collaborate with design and product teams",
      "Conduct market research and competitor analysis",
      "Optimize website content for SEO",
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible schedule",
      "Remote work options",
      "Professional development opportunities",
      "Access to marketing tools and software",
      "Performance bonuses",
      "Networking events",
      "Potential for full-time conversion",
    ],
    workingHours: "30-40 hours/week, flexible",
    remote: true,
    urgency: "medium",
    contactPerson: {
      name: "Lisa Wang",
      email: "lisa.wang@company.com",
      phone: "+1-555-0155",
    },
  },
  {
    id: 6,
    title: "Data Scientist Intern",
    description:
      "Join our data science team to work on exciting machine learning projects. Gain hands-on experience with real-world data problems while contributing to product insights and business intelligence.",
    location: "Boston, MA",
    type: "internship",
    department: "Data Science",
    salary: {
      min: 25,
      max: 35,
      currency: "USD",
    },
    postedDate: "2024-02-12",
    deadline: "2024-02-28",
    applications: 45,
    status: "active",
    requirements: {
      experience: {
        min: 0,
        max: 1,
      },
      education: "Currently pursuing Bachelor's or Master's in Data Science, Statistics, or related field",
      skills: [
        "Python",
        "R",
        "SQL",
        "Machine Learning",
        "Statistics",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Jupyter",
        "Data Visualization",
      ],
      languages: ["English (Fluent)"],
    },
    responsibilities: [
      "Analyze large datasets to extract insights",
      "Build and evaluate machine learning models",
      "Create data visualizations and reports",
      "Collaborate with cross-functional teams",
      "Present findings to stakeholders",
      "Assist with data pipeline development",
      "Document analysis and methodologies",
    ],
    benefits: [
      "Competitive internship stipend",
      "Mentorship from senior data scientists",
      "Access to cutting-edge tools and technologies",
      "Networking opportunities",
      "Flexible summer schedule",
      "Potential for full-time offer",
      "Learning and development resources",
      "Company events and activities",
    ],
    workingHours: "40 hours/week (Summer program)",
    remote: false,
    urgency: "high",
    contactPerson: {
      name: "Dr. Jennifer Liu",
      email: "jennifer.liu@company.com",
      phone: "+1-555-0144",
    },
  },
]

export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Cooper",
    role: "Engineering Manager",
    email: "alice.cooper@company.com",
    department: "Engineering",
    joinDate: "2023-03-15",
    avatar: "AC",
  },
  {
    id: 2,
    name: "Bob Wilson",
    role: "Senior Developer",
    email: "bob.wilson@company.com",
    department: "Engineering",
    joinDate: "2023-06-20",
    avatar: "BW",
  },
  {
    id: 3,
    name: "Carol Martinez",
    role: "Product Designer",
    email: "carol.martinez@company.com",
    department: "Design",
    joinDate: "2023-08-10",
    avatar: "CM",
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Product Manager",
    email: "daniel.kim@company.com",
    department: "Product",
    joinDate: "2023-09-05",
    avatar: "DK",
  },
  {
    id: 5,
    name: "Eva Rodriguez",
    role: "Marketing Director",
    email: "eva.rodriguez@company.com",
    department: "Marketing",
    joinDate: "2023-11-12",
    avatar: "ER",
  },
]

export const mockAppointments: Appointment[] = [
  {
    id: 1,
    userName: "John Smith",
    service: "Technical Interview",
    date: "2024-02-15",
    time: "10:00 AM",
    status: "confirmed",
    type: "interview",
  },
  {
    id: 2,
    userName: "Sarah Johnson",
    service: "Product Demo",
    date: "2024-02-16",
    time: "2:00 PM",
    status: "confirmed",
    type: "meeting",
  },
  {
    id: 3,
    userName: "Mike Davis",
    service: "Consultation",
    date: "2024-02-17",
    time: "11:30 AM",
    status: "pending",
    type: "consultation",
  },
  {
    id: 4,
    userName: "Emily Wilson",
    service: "Follow-up Meeting",
    date: "2024-02-18",
    time: "3:30 PM",
    status: "confirmed",
    type: "meeting",
  },
  {
    id: 5,
    userName: "David Brown",
    service: "Code Review",
    date: "2024-02-19",
    time: "9:00 AM",
    status: "confirmed",
    type: "meeting",
  },
  {
    id: 6,
    userName: "Lisa Anderson",
    service: "HR Interview",
    date: "2024-02-20",
    time: "1:00 PM",
    status: "pending",
    type: "interview",
  },
]

export const monthlyData: MonthlyData[] = [
  { month: "Jan", users: 45, revenue: 12500, appointments: 28 },
  { month: "Feb", users: 52, revenue: 15200, appointments: 34 },
  { month: "Mar", users: 48, revenue: 13800, appointments: 31 },
  { month: "Apr", users: 61, revenue: 18900, appointments: 42 },
  { month: "May", users: 55, revenue: 16700, appointments: 38 },
  { month: "Jun", users: 67, revenue: 21300, appointments: 45 },
]
