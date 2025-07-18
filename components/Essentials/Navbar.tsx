"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropDownMenu";
import { Menu, X } from "lucide-react";
import { Mountain } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const blogDropdownItems = [
    { label: "Our Values", href: "/our-values" },
    { label: "Our Story", href: "/our-story"},
    { label: "Business Niche", href: "#blog-details" },
    { label: "Our Team", href: "#blog-details-02" },
    { label: "Careers", href: "#blog-details-02" },
    { label: "Contact Us", href: "#blog-details-02" },
  ];

  const pageDropdownItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out bg-[var(--primary-color)] ${
        isScrolled
          ? "py-1  shadow-md border-b-[var(--secondary-color)] border-b-2"
          : "py-4 "
      }`}
    >
      <div className="container mx-auto flex items-center justify-between transition-all duration-500 px-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center space-x-2 transition-all duration-500"
        >
          {/* <Image
            src="/softtec-logo-icon.png"
            alt="Softtec Logo"
            width={isScrolled ? 24 : 48}
            height={isScrolled ? 24 : 48}
            className="transition-all duration-500" */}
          <Mountain
            size={isScrolled ? 24 : 48}
            className="text-[var(--secondary-color)]"
          />
          <span
            className={`text-white font-bold transition-all duration-500 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Dekoshur Crafts
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 transition-all duration-500">
          <Link
            href="#"
            className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>
          <DropdownMenu title="About Us" items={blogDropdownItems} />
          <DropdownMenu title="Partnerships" items={pageDropdownItems} />

          <Link
            href="#"
            className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
          >
            Process
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>

          <Link
            href="#"
            className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
          >
            Registration
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>

          <Link
            href="#"
            className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
          >
            Book Appointment
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>

          
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="cursor-pointer text-white text-lg font-medium px-4 py-2 hover:text-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out">
            Log In
          </button>
          <button className="cursor-pointer bg-[var(--secondary-color)] text-gray-200 px-6 py-2 rounded-full font-bold text-lg hover:bg-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-[var(--primary-color)] shadow-lg py-8 px-6 z-30 transform transition-transform duration-300 ease-in-out animate-slide-in">
          <div className="flex flex-col items-start space-y-6">
            {["Home", "Portfolio", "Pricing", "Contact"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-white text-lg font-medium hover:text-[var(--secondary-hover-color)] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <DropdownMenu title="Page" items={pageDropdownItems} />
            <DropdownMenu title="Blog" items={blogDropdownItems} isActive />
            <button className="text-white text-lg font-medium py-2 transform hover:scale-105 hover:text-[var(--secondary-hover-color)] transition-all duration-300">
              Log In
            </button>
            <button className="bg-[var(--secondary-color)] text-gray-200 px-6 py-3 rounded-full font-bold text-lg transform hover:scale-105 hover:bg-[var(--secondary-hover-color)] transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
