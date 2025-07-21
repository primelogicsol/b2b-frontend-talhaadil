import TeamCard from "@/components/Cards/TeamCard";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import RectangleSection from "@/components/Section/RectangleSection";
import TeamGrid from "@/components/Material/TeamGrid";
import React from "react";
import TeamPage from "@/components/Essentials/TeamPage";
import SectionTitle from "@/components/Section/SectionTitle";
function page() {
  // ================= DATA ==================

  // 2A. TECHNOLOGY & PRODUCT DIVISION — Engineering & DevOps
  const engineeringDevOps = [
    {
      name: "Zeeshan Ahmed",
      title: "Lead Software Engineer",
      imageUrl: "/images/fake3.jpg",
      email: "zeeshan.ahmed@example.com",
    },
    {
      name: "Usman Javed",
      title: "Frontend Developer",
      imageUrl: "/images/fake4.jpg",
      email: "usman.javed@example.com",
    },
    {
      name: "Ayesha Bano",
      title: "Backend Developer",
      imageUrl: "/images/fake5.jpg",
      email: "ayesha.bano@example.com",
    },
    {
      name: "Rizwan Ali",
      title: "QA Engineer",
      imageUrl: "/images/fake6.jpg",
      email: "rizwan.ali@example.com",
    },
  ];

  // 2B. TECHNOLOGY & PRODUCT DIVISION — Blockchain & AI Systems
  const blockchainAI = [
    {
      name: "Sara Khan",
      title: "Blockchain Traceability Engineer",
      imageUrl: "/images/fake7.jpg",
      email: "sara.khan@example.com",
    },
    {
      name: "Taimoor Iqbal",
      title: "AI Personalization Developer",
      imageUrl: "/images/fake8.jpg",
      email: "taimoor.iqbal@example.com",
    },
    {
      name: "Maham Rashid",
      title: "Data Systems Analyst",
      imageUrl: "/images/fake9.jpg",
      email: "maham.rashid@example.com",
    },
    {
      name: "Adnan Mirza",
      title: "Security & Authentication Lead",
      imageUrl: "/images/fake10.jpg",
      email: "adnan.mirza@example.com",
    },
  ];

  // 2C. TECHNOLOGY & PRODUCT DIVISION — Integration & CMS
  const integrationCMS = [
    {
      name: "Sadia Noor",
      title: "API Integration Manager",
      imageUrl: "/images/fake11.jpg",
      email: "sadia.noor@example.com",
    },
    {
      name: "Omer Yousaf",
      title: "CMS Architect",
      imageUrl: "/images/fake12.jpg",
      email: "omer.yousaf@example.com",
    },
    {
      name: "Samiullah Khan",
      title: "DevOps Manager",
      imageUrl: "/images/fake13.jpg",
      email: "samiullah.khan@example.com",
    },
    {
      name: "Rabia Gul",
      title: "Platform Support Engineer",
      imageUrl: "/images/fake14.jpg",
      email: "rabia.gul@example.com",
    },
  ];

  // 3A. VENDOR ONBOARDING & ARTISAN SUPPORT — Onboarding & Training
  const onboardingTraining = [
    {
      name: "Hafsa Rehman",
      title: "Vendor Onboarding Manager",
      imageUrl: "/images/fake15.jpg",
      email: "hafsa.rehman@example.com",
    },
    {
      name: "Mehwish Tariq",
      title: "Digital Literacy Trainer",
      imageUrl: "/images/fake16.jpg",
      email: "mehwish.tariq@example.com",
    },
    {
      name: "Noman Aziz",
      title: "GI Documentation Specialist",
      imageUrl: "/images/fake17.jpg",
      email: "noman.aziz@example.com",
    },
    {
      name: "Iqra Hussain",
      title: "Vendor Dashboard Support Officer",
      imageUrl: "/images/fake18.jpg",
      email: "iqra.hussain@example.com",
    },
  ];

  // 3B. VENDOR ONBOARDING & ARTISAN SUPPORT — Support & Welfare
  const supportWelfare = [
    {
      name: "Amir Junaid",
      title: "Vendor Helpdesk Lead",
      imageUrl: "/images/fake19.jpg",
      email: "amir.junaid@example.com",
    },
    {
      name: "Farah Ali",
      title: "Grievance & Retention Manager",
      imageUrl: "/images/fake20.jpg",
      email: "farah.ali@example.com",
    },
    {
      name: "Shazia Karim",
      title: "Women’s Collective Coordinator",
      imageUrl: "/images/fake21.jpg",
      email: "shazia.karim@example.com",
    },
    {
      name: "Bilal Sajid",
      title: "Tool & Tech Support Officer",
      imageUrl: "/images/fake22.jpg",
      email: "bilal.sajid@example.com",
    },
  ];

  // 4A. LOGISTICS & PACKAGING — Logistics Operations
  const logisticsOps = [
    {
      name: "Owais Khan",
      title: "Logistics Manager",
      imageUrl: "/images/fake23.jpg",
      email: "owais.khan@example.com",
    },
    {
      name: "Fatima Javed",
      title: "Fulfillment Coordinator",
      imageUrl: "/images/fake24.jpg",
      email: "fatima.javed@example.com",
    },
    {
      name: "Salman Iqbal",
      title: "Customs Compliance Officer",
      imageUrl: "/images/fake25.jpg",
      email: "salman.iqbal@example.com",
    },
    {
      name: "Nadia Noor",
      title: "Order Tracking Specialist",
      imageUrl: "/images/fake26.jpg",
      email: "nadia.noor@example.com",
    },
  ];

  // 4B. LOGISTICS & PACKAGING — Packaging & Handling
  const packagingHandling = [
    {
      name: "Imran Ali",
      title: "Eco-Packaging Designer",
      imageUrl: "/images/fake27.jpg",
      email: "imran.ali@example.com",
    },
    {
      name: "Sadaf Nazeer",
      title: "Unboxing Experience Lead",
      imageUrl: "/images/fake28.jpg",
      email: "sadaf.nazeer@example.com",
    },
    {
      name: "Abdul Rehman",
      title: "Fragile Goods Safety Engineer",
      imageUrl: "/images/fake29.jpg",
      email: "abdul.rehman@example.com",
    },
    {
      name: "Maryam Yusuf",
      title: "Branding & Label Compliance Officer",
      imageUrl: "/images/fake30.jpg",
      email: "maryam.yusuf@example.com",
    },
  ];

  // 5. SUSTAINABILITY & ESG DIVISION
  const sustainabilityESG = [
    {
      name: "Shahbaz Khan",
      title: "Head of Sustainability",
      imageUrl: "/images/fake31.jpg",
      email: "shahbaz.khan@example.com",
    },
    {
      name: "Anum Rafiq",
      title: "Carbon Tagging Analyst",
      imageUrl: "/images/fake32.jpg",
      email: "anum.rafiq@example.com",
    },
    {
      name: "Uswa Raza",
      title: "Craft Waste Circularity Officer",
      imageUrl: "/images/fake33.jpg",
      email: "uswa.raza@example.com",
    },
    {
      name: "Naveed Aslam",
      title: "ESG Policy Integration Manager",
      imageUrl: "/images/fake34.jpg",
      email: "naveed.aslam@example.com",
    },
  ];

  // 6. COMPLIANCE & LEGAL DIVISION
  const complianceLegal = [
    {
      name: "Tahir Mehmood",
      title: "Chief Compliance Officer",
      imageUrl: "/images/fake35.jpg",
      email: "tahir.mehmood@example.com",
    },
    {
      name: "Kiran Shah",
      title: "GI/IP Legal Advisor",
      imageUrl: "/images/fake36.jpg",
      email: "kiran.shah@example.com",
    },
    {
      name: "Omer Farooq",
      title: "Vendor Contract Officer",
      imageUrl: "/images/fake37.jpg",
      email: "omer.farooq@example.com",
    },
    {
      name: "Hina Rauf",
      title: "Labor Ethics Auditor",
      imageUrl: "/images/fake38.jpg",
      email: "hina.rauf@example.com",
    },
  ];

  // 7. QUALITY ASSURANCE & TRACEABILITY DIVISION
  const qualityAssurance = [
    {
      name: "Shafqat Ali",
      title: "Master Craft Appraiser",
      imageUrl: "/images/fake39.jpg",
      email: "shafqat.ali@example.com",
    },
    {
      name: "Lubna Akhtar",
      title: "GI Verification Officer",
      imageUrl: "/images/fake40.jpg",
      email: "lubna.akhtar@example.com",
    },
    {
      name: "Waqas Ahmad",
      title: "Product Grading Specialist",
      imageUrl: "/images/fake41.jpg",
      email: "waqas.ahmad@example.com",
    },
    {
      name: "Hira Iqbal",
      title: "Quality Dispute Resolution Lead",
      imageUrl: "/images/fake42.jpg",
      email: "hira.iqbal@example.com",
    },
  ];

  // 8A. GLOBAL PARTNERSHIPS — Global Strategy & Franchise
  const globalStrategy = [
    {
      name: "Muneeb Hassan",
      title: "Global Partnership Director",
      imageUrl: "/images/fake43.jpg",
      email: "muneeb.hassan@example.com",
    },
    {
      name: "Adeel Ahmed",
      title: "US Franchise Manager",
      imageUrl: "/images/fake44.jpg",
      email: "adeel.ahmed@example.com",
    },
    {
      name: "Hania Zafar",
      title: "MENA Trade Liaison",
      imageUrl: "/images/fake45.jpg",
      email: "hania.zafar@example.com",
    },
    {
      name: "Sohail Tariq",
      title: "Licensing Legal Officer",
      imageUrl: "/images/fake46.jpg",
      email: "sohail.tariq@example.com",
    },
  ];

  // 8B. GLOBAL PARTNERSHIPS — Program Operations
  const programOps = [
    {
      name: "Rashid Mehmood",
      title: "Consignment Program Manager",
      imageUrl: "/images/fake47.jpg",
      email: "rashid.mehmood@example.com",
    },
    {
      name: "Aqsa Noor",
      title: "Exhibition & Event Coordinator",
      imageUrl: "/images/fake48.jpg",
      email: "aqsa.noor@example.com",
    },
    {
      name: "Imtiaz Siddiqi",
      title: "Dropshipping Relations Lead",
      imageUrl: "/images/fake49.jpg",
      email: "imtiaz.siddiqi@example.com",
    },
    {
      name: "Farheen Ali",
      title: "Partner Onboarding Specialist",
      imageUrl: "/images/fake50.jpg",
      email: "farheen.ali@example.com",
    },
  ];

  // 9. MARKETING & BUYER ENGAGEMENT DIVISION
  const marketingBuyerEngagement = [
    {
      name: "Zoya Khan",
      title: "Chief Marketing Officer",
      imageUrl: "/images/team-zoya.jpg",
      email: "zoya.khan@example.com",
    },
    {
      name: "Shahzaib Rafiq",
      title: "Campaign Manager",
      imageUrl: "/images/fake51.jpg",
      email: "shahzaib.rafiq@example.com",
    },
    {
      name: "Aiman Tariq",
      title: "CRM & Buyer Loyalty Officer",
      imageUrl: "/images/fake52.jpg",
      email: "aiman.tariq@example.com",
    },
    {
      name: "Hassan Javed",
      title: "Communications & PR Specialist",
      imageUrl: "/images/fake53.jpg",
      email: "hassan.javed@example.com",
    },
  ];

  // 10. MEDIA & VISUAL CONTENT DIVISION
  const mediaContent = [
    {
      name: "Sadaqat Ali",
      title: "Visual Content Director",
      imageUrl: "/images/fake54.jpg",
      email: "sadaqat.ali@example.com",
    },
    {
      name: "Areeba Saleem",
      title: "Craft Videographer",
      imageUrl: "/images/fake55.jpg",
      email: "areeba.saleem@example.com",
    },
    {
      name: "Waleed Hassan",
      title: "Product Photographer",
      imageUrl: "/images/fake56.jpg",
      email: "waleed.hassan@example.com",
    },
    {
      name: "Samina Yousuf",
      title: "Post-Production Editor",
      imageUrl: "/images/fake57.jpg",
      email: "samina.yousuf@example.com",
    },
  ];

  // 11. CRAFT RESEARCH & DOCUMENTATION DIVISION
  const craftResearch = [
    {
      name: "Humaira Tariq",
      title: "Head of Craft Research",
      imageUrl: "/images/fake58.jpg",
      email: "humaira.tariq@example.com",
    },
    {
      name: "Nashit Ali",
      title: "GI Region Data Analyst",
      imageUrl: "/images/fake59.jpg",
      email: "nashit.ali@example.com",
    },
    {
      name: "Iqbal Junaid",
      title: "Artisan Biographer",
      imageUrl: "/images/fake60.jpg",
      email: "iqbal.junaid@example.com",
    },
    {
      name: "Madiha Noor",
      title: "Cultural Translator",
      imageUrl: "/images/fake61.jpg",
      email: "madiha.noor@example.com",
    },
  ];

  // 12. FINANCE, GRANTS & INVESTMENT DIVISION
  const financeDivision = [
    {
      name: "Bilal Ahmed",
      title: "Chief Financial Officer",
      imageUrl: "/images/team-bilal.jpg",
      email: "bilal.ahmed@example.com",
    },
    {
      name: "Hafeez Khan",
      title: "Financial Controller",
      imageUrl: "/images/fake62.jpg",
      email: "hafeez.khan@example.com",
    },
    {
      name: "Sumaira Gul",
      title: "Grants Program Manager",
      imageUrl: "/images/fake63.jpg",
      email: "sumaira.gul@example.com",
    },
    {
      name: "Junaid Aslam",
      title: "Investor Relations Officer",
      imageUrl: "/images/fake64.jpg",
      email: "junaid.aslam@example.com",
    },
  ];

  // 13. CUSTOMER & VENDOR SUPPORT DIVISION
  const customerVendorSupport = [
    {
      name: "Amna Rauf",
      title: "Global Support Manager",
      imageUrl: "/images/fake65.jpg",
      email: "amna.rauf@example.com",
    },
    {
      name: "Furqan Ali",
      title: "Buyer Support Agent",
      imageUrl: "/images/fake66.jpg",
      email: "furqan.ali@example.com",
    },
    {
      name: "Kinza Mehmood",
      title: "Vendor Helpdesk Officer",
      imageUrl: "/images/fake67.jpg",
      email: "kinza.mehmood@example.com",
    },
    {
      name: "Zainab Akbar",
      title: "Knowledgebase & FAQ Editor",
      imageUrl: "/images/fake68.jpg",
      email: "zainab.akbar@example.com",
    },
  ];

  // 14. TRADE INTELLIGENCE & RISK DIVISION
  const tradeIntelligence = [
    {
      name: "Shaheryar Malik",
      title: "Trade Intelligence Lead",
      imageUrl: "/images/fake69.jpg",
      email: "shaheryar.malik@example.com",
    },
    {
      name: "Adeel Jamil",
      title: "Global Trends Analyst",
      imageUrl: "/images/fake70.jpg",
      email: "adeel.jamil@example.com",
    },
    {
      name: "Laiba Khan",
      title: "Conflict Risk Planner",
      imageUrl: "/images/fake71.jpg",
      email: "laiba.khan@example.com",
    },
    {
      name: "Umar Farid",
      title: "Policy Response Coordinator",
      imageUrl: "/images/fake72.jpg",
      email: "umar.farid@example.com",
    },
  ];

  // 15. MONITORING & IMPACT DIVISION
  const monitoringImpact = [
    {
      name: "Adil Hussain",
      title: "M&E Officer",
      imageUrl: "/images/fake73.jpg",
      email: "adil.hussain@example.com",
    },
    {
      name: "Eman Tariq",
      title: "ESG Impact Analyst",
      imageUrl: "/images/fake74.jpg",
      email: "eman.tariq@example.com",
    },
    {
      name: "Saqib Zaman",
      title: "Social ROI Evaluator",
      imageUrl: "/images/fake75.jpg",
      email: "saqib.zaman@example.com",
    },
    {
      name: "Sadia Nadeem",
      title: "Transparency Report Lead",
      imageUrl: "/images/fake76.jpg",
      email: "sadia.nadeem@example.com",
    },
  ];

  // 16. LOCALIZATION & REGIONAL TRADE DIVISION
  const localizationTrade = [
    {
      name: "Nashit Rafiq",
      title: "Localization Manager",
      imageUrl: "/images/fake77.jpg",
      email: "nashit.rafiq@example.com",
    },
    {
      name: "Hira Naveed",
      title: "Regional Trade Lead – US",
      imageUrl: "/images/fake78.jpg",
      email: "hira.naveed@example.com",
    },
    {
      name: "Hassan Imran",
      title: "Regional Trade Lead – MENA",
      imageUrl: "/images/fake79.jpg",
      email: "hassan.imran@example.com",
    },
    {
      name: "Maryam Saleem",
      title: "Regional Trade Lead – Europe",
      imageUrl: "/images/fake80.jpg",
      email: "maryam.saleem@example.com",
    },
  ];

  // 17. ETHICS, INCLUSION & TRANSPARENCY DIVISION
  const ethicsInclusion = [
    {
      name: "Sadaf Yousaf",
      title: "Head of Inclusion",
      imageUrl: "/images/fake81.jpg",
      email: "sadaf.yousaf@example.com",
    },
    {
      name: "Aqeel Tariq",
      title: "Accessibility & Equity Officer",
      imageUrl: "/images/fake82.jpg",
      email: "aqeel.tariq@example.com",
    },
    {
      name: "Kiran Batool",
      title: "Ethics Audit Coordinator",
      imageUrl: "/images/fake83.jpg",
      email: "kiran.batool@example.com",
    },
    {
      name: "Haris Khalid",
      title: "Transparency Reporting Manager",
      imageUrl: "/images/fake84.jpg",
      email: "haris.khalid@example.com",
    },
  ];

  // 18. INNOVATION & CRAFT-TECH LAB
  const innovationLab = [
    {
      name: "Fahad Ali",
      title: "Innovation Lab Director",
      imageUrl: "/images/fake85.jpg",
      email: "fahad.ali@example.com",
    },
    {
      name: "Areej Qureshi",
      title: "AR/VR Craft Experience Developer",
      imageUrl: "/images/fake86.jpg",
      email: "areej.qureshi@example.com",
    },
    {
      name: "Kamran Tariq",
      title: "Blockchain/NFT Tag Lead",
      imageUrl: "/images/fake87.jpg",
      email: "kamran.tariq@example.com",
    },
    {
      name: "Sidra Anwar",
      title: "Sustainable Dye Researcher",
      imageUrl: "/images/fake88.jpg",
      email: "sidra.anwar@example.com",
    },
  ];

  // 19. ADMIN & CMS CONTROL DIVISION
  const adminCMSControl = [
    {
      name: "Naeem Akhtar",
      title: "Super Admin",
      imageUrl: "/images/fake89.jpg",
      email: "naeem.akhtar@example.com",
    },
    {
      name: "Ambar Liaquat",
      title: "CMS Workflow Manager",
      imageUrl: "/images/fake90.jpg",
      email: "ambar.liaquat@example.com",
    },
    {
      name: "Waseem Javed",
      title: "Role Permissions Coordinator",
      imageUrl: "/images/fake91.jpg",
      email: "waseem.javed@example.com",
    },
    {
      name: "Mahnoor Hassan",
      title: "Internal Testing & Moderation Lead",
      imageUrl: "/images/fake92.jpg",
      email: "mahnoor.hassan@example.com",
    },
  ];

  const teamMembers = [
   
    {
      isImportant: true,
      name: "Sana Malik",
      title: "Chief Operating Officer",
      email: "sana.malik@example.com",
      imageUrl: "/images/team-sana.jpg",
      description:
        "Sana ensures smooth daily operations and alignment with sustainability goals. Her expertise in business management helps provide artisans with access to markets, fair wages, and strategic growth opportunities.",
      quote:
        "Our artisans are the backbone of this platform. My role is to ensure they have everything they need to succeed.",
     
    },
     {
      name: "Fayaz Ahmad Khan",
      isImportant: true,
      isCeo: true,
      title: "Founder & CEO",
      email : "fayaz.ahmad@example.com",
      imageUrl: "/images/team-fayaz.jpg", // Make sure the image exists in your public/images folder
      description:
        "As the founder of De Koshur Crafts, Fayaz is the visionary behind the platform. With 10+ years of experience in international trade and sustainability, he's committed to empowering artisans and preserving Kashmir’s rich heritage.",
      quote:
        "Our mission is to ensure that the authentic crafts of Kashmir are celebrated and respected around the world.",
      social: {
        facebook: "#",
        vimeo: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      isImportant: true,
      name: "Asad Iqbal",
      title: "Chief Technology Officer",
      email:"asad.iqbal@example.com",
      imageUrl: "/images/team-asad.jpg",
      description:
        "Asad leads the tech innovation at De Koshur Crafts. From blockchain traceability to AI-driven tools, he ensures the platform is cutting-edge, secure, and optimized for artisan growth and global trade.",
      quote:
        "Technology is a tool for empowerment. We use it to help our artisans grow their businesses and reach international markets.",
      
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <VerticalHeroSlider />
      </section>

      {/* Rectangle Highlight Section */}
      <RectangleSection />

      Team Members Section
       <section className="py-20 bg-[var(--primary-color)] text-center">
      <SectionTitle SubTitle='Our Team' Title='Our Leadership Team'/>
        <p className="text-gray-300 mb-12 mt-6 max-w-3xl mx-auto">
          Our core team members bring vision, innovation, and commitment to the heart of De Koshur Crafts.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto ">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </section> 
    

      {/* ================= MAIN 2 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Technology & Product Division
      </h1>

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Engineering & DevOps
      </h2>
     <TeamGrid team={engineeringDevOps} />

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Blockchain & AI Systems
      </h2>
      <TeamGrid team={blockchainAI} />

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Integration & CMS
      </h2>
      <TeamGrid team={integrationCMS} />

      {/* ================= MAIN 3 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Vendor Onboarding & Artisan Support Division
      </h1>

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Onboarding & Training
      </h2>
     <TeamGrid team={onboardingTraining} />

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Support & Welfare
      </h2>
      <TeamGrid team={supportWelfare} />

      {/* ================= MAIN 4 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Logistics & Packaging Division
      </h1>

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Logistics Operations
      </h2>
      <TeamGrid team={logisticsOps} />

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Packaging & Handling
      </h2>
      <TeamGrid team={packagingHandling} />

      {/* ================= MAIN 5 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Sustainability & ESG Division
      </h1>
      <TeamGrid team={sustainabilityESG} />

      {/* ================= MAIN 6 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Compliance & Legal Division
      </h1>
      <TeamGrid team={complianceLegal} />

      {/* ================= MAIN 7 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Quality Assurance & Traceability Division
      </h1>
     <TeamGrid team={qualityAssurance} />

      {/* ================= MAIN 8 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Global Partnerships & Expansion Division
      </h1>

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Global Strategy & Franchise
      </h2>
      <TeamGrid team={globalStrategy} />

      <h2 className="text-3xl font-bold text-[var(--secondary-color)] mt-12 mb-6 text-center">
        Program Operations
      </h2>
      <TeamGrid team={programOps} />

      {/* ================= MAIN 9 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Marketing & Buyer Engagement Division
      </h1>
      <TeamGrid team={marketingBuyerEngagement} />

      {/* ================= MAIN 10 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Media & Visual Content Division
      </h1>
      <TeamGrid team={mediaContent} />

      {/* ================= MAIN 11 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Craft Research & Documentation Division
      </h1>
      <TeamGrid team={craftResearch} />

      {/* ================= MAIN 12 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Finance, Grants & Investment Division
      </h1>
      <TeamGrid team={financeDivision} />

      {/* ================= MAIN 13 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Customer & Vendor Support Division
      </h1>
      <TeamGrid team={customerVendorSupport} />

      {/* ================= MAIN 14 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Trade Intelligence & Risk Division
      </h1>
      <TeamGrid team={tradeIntelligence} />

      {/* ================= MAIN 15 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Monitoring & Impact Division
      </h1>
      <TeamGrid team={monitoringImpact} />

      {/* ================= MAIN 16 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Localization & Regional Trade Division
      </h1>
      <TeamGrid team={localizationTrade} />

      {/* ================= MAIN 17 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Ethics, Inclusion & Transparency Division
      </h1>
      <TeamGrid team={ethicsInclusion} />
      {/* ================= MAIN 18 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Innovation & Craft‑Tech Lab
      </h1>
      <TeamGrid team={innovationLab} />

      {/* ================= MAIN 19 ================= */}
      <h1 className="text-4xl font-extrabold text-[var(--primary-color)] mt-20 mb-12 text-center">
        Admin & CMS Control Division
      </h1>
        <TeamGrid team={adminCMSControl}/>
      <TeamPage />
    </div>
  );
}

export default page;
