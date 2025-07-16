"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCardStyle2Props {
  BlogImg?: string;
  Title?: string;
  Content?: string;
}

const HoriozontalBlogCard: React.FC<BlogCardStyle2Props> = ({
  BlogImg = "/assets/images/dummy-blog.jpg",
  Title = "How to Build Modern Web Apps",
  Content = "Learn how to craft sleek, responsive, and scalable web applications with the latest tools and best practices."
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 overflow-hidden shadow-md rounded-md bg-white mb-8">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={BlogImg}
          alt="blog image"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-6">
        {/* Date & Comments */}
        <div className="bg-orange-600 text-white px-4 py-2 rounded-md mb-4 text-sm shadow">
          <h4 className="flex flex-wrap items-center gap-3">
            <i className="bi bi-calendar2-check"></i>
            20 June 2024
            <span className="relative pl-5 ml-auto">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-orange-300"></span>
              <i className="bi bi-chat-left-text ml-2"></i>
              Comment-05
            </span>
          </h4>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-orange-600 transition duration-300 mb-3">
          <Link href="/blog/blog-details">{Title}</Link>
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-5">{Content}</p>

        {/* Read More Button */}
        <div>
          <Link
            href="/blog/blog-details"
            className="text-gray-600 hover:text-orange-600 font-medium inline-flex items-center gap-2 transition duration-300"
          >
            READ MORE <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HoriozontalBlogCard;
