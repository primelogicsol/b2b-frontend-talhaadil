"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCard1Props {
  BlogImg?: string;
  Title?: string;
  Content?: string;
}

const VerticalBlogCard: React.FC<BlogCard1Props> = ({
  BlogImg = "/assets/images/dummy-blog.jpg",
  Title = "The Future of Web Development",
  Content = "Discover the upcoming trends and technologies shaping the future of web development, and how you can stay ahead of the curve."
}) => {
  return (
    <div className="overflow-hidden mb-8 rounded-b-[30px] shadow-md bg-white">
      {/* Blog Image */}
      <div className="w-full">
        <Image
          src={BlogImg}
          alt="blog1"
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="relative z-[1] p-6 sm:p-8 md:p-10">
        {/* Date Box */}
        <div className="absolute -top-6 left-6 bg-orange-600 text-white rounded-md px-6 py-2 text-sm shadow-md">
          <h4 className="flex items-center gap-2">
            <i className="bi bi-calendar2-check"></i>
            20 June 2024
            <span className="relative ml-10 pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-orange-300"></span>
              <i className="bi bi-chat-left-text ml-2"></i>
              Comment-05
            </span>
          </h4>
        </div>

        {/* Title */}
        <h3 className="mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 font-poppins leading-snug hover:text-orange-600 transition duration-300">
          <Link href="/blog/blog-details">{Title}</Link>
        </h3>

        {/* Content */}
        <p className="text-gray-700 mt-4 mb-6">{Content}</p>

        {/* Read More Button */}
        <div>
          <Link
            href="/blog/blog-details"
            className="text-gray-600 hover:text-orange-600 font-medium text-base transition duration-300 inline-flex items-center gap-2"
          >
            READ MORE <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalBlogCard;
