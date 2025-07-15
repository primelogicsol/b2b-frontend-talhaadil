import BlogCard1 from "@/components/BlogCard1";
import BlogCardStyle2 from "@/components/BlogCardStyle2";
import Features from "@/components/Features";
import Services1 from "@/components/Services1";
import Pricing from "@/components/Pricing";
import About4 from "@/components/About4";
import ProjectDetail from "@/components/ProjectDetail";
import Faq from "@/components/Faq";
import ServiceDetail from "@/components/ServiceDetail";


const blogPosts = [
  {
    BlogImg: "/images/blog1.jpg", // make sure this image exists in /public/images/
    Title: "Unlocking the Power of Handmade Art",
    Content: "Discover how traditional crafts can elevate modern living and preserve cultural heritage.",
  },
  {
    BlogImg: "/images/blog2.jpg",
    Title: "Why Artisanal Products Matter",
    Content: "Explore the value of handmade over mass-produced goods in today’s fast-paced world.",
  },
  {
    BlogImg: "/images/blog3.jpg",
    Title: "Inside the Artist’s Studio",
    Content: "A behind-the-scenes look at the process and passion of local artisans.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
        Our Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <BlogCard1
            key={index}
            BlogImg={post.BlogImg}
            Title={post.Title}
            Content={post.Content}
          />
        ))}
      </div>
      <main className="max-w-7xl mx-auto px-4 py-12">
      <BlogCardStyle2
        BlogImg="/images/blog2.jpg"
        Title="The Legacy of Local Artisans"
        Content="Learn how regional crafts are being revived by the next generation of artists."
      />
    </main>
    <div>
      <Features/>
      <Services1/>
      <Pricing/>
    </div>
    <main   className="bg-white min-h-screen">
      <About4
        MainImg="/assets/images/inner/about-img.png"
        SubTitle="ABOUT US"
        Title="We Are <span>Experts</span> in Tech Solutions"
        Content="We bring cutting-edge technology and deep domain expertise to solve modern business challenges. Our agile teams deliver results that make a real impact."
        listTitle1="Customer-Centric Development"
        listTitle2="Agile Project Management"
        BoxTitle1="15"
        BoxTitle2="Years of Experience"
      />
    </main>
    <ProjectDetail/>
    <Faq/>
    
    <ServiceDetail/>
    </main>
  );
}
