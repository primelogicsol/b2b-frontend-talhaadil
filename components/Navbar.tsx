"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropDownMenu";
import { Menu, X } from "lucide-react"; // Using Lucide React for icons

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const blogDropdownItems = [
    { label: "Blog", href: "#blog" },
    { label: "Blog List", href: "#blog-list" },
    { label: "Blog Details", href: "#blog-details" },
    { label: "Blog Details 02", href: "#blog-details-02" },
  ];

  const pageDropdownItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-[var(--softtec-blue)] p-4 shadow-md relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <Image
            src="/softtec-logo-icon.png"
            alt="Softtec Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white text-2xl font-bold">Softtec</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="px-4 py-2 text-white text-lg font-medium relative group hover:text-[var(--softtec-yellow)] transition-colors duration-300 ease-in-out"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>
          <DropdownMenu title="Page" items={pageDropdownItems} />
          <Link
            href="#"
            className="px-4 py-2 text-white text-lg font-medium relative group hover:text-[var(--softtec-yellow)] transition-colors duration-300 ease-in-out"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-white text-lg font-medium relative group hover:text-[var(--softtec-yellow)] transition-colors duration-300 ease-in-out"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>
          <DropdownMenu
            title="Blog"
            items={blogDropdownItems}
          />
          <Link
            href="#"
            className="px-4 py-2 text-white text-lg font-medium relative group hover:text-[var(--softtec-yellow)] transition-colors duration-300 ease-in-out"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="cursor-pointer text-white text-lg font-medium px-4 py-2 hover:text-[var(--softtec-yellow)] hover:scale-105 transition-all duration-300 ease-in-out">
            Log In
          </button>
          <button className="cursor-pointer bg-[var(--softtec-yellow)] text-[var(--softtec-blue)] px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-[var(--softtec-blue)] shadow-lg py-8 px-6 z-30 transform transition-transform duration-300 ease-in-out animate-slide-in">
          <div className="flex flex-col items-start space-y-6">
            <Link
              href="#"
              className="text-white text-lg font-medium hover:text-[var(--softtec-yellow)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <DropdownMenu title="Page" items={pageDropdownItems} />

            <Link
              href="#"
              className="text-white text-lg font-medium hover:text-[var(--softtec-yellow)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-white text-lg font-medium hover:text-[var(--softtec-yellow)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <DropdownMenu
              title="Blog"
              items={blogDropdownItems}
              isActive={true}
            />

            <Link
              href="#"
              className="text-white text-lg font-medium hover:text-[var(--softtec-yellow)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <button className="text-white text-lg font-medium py-2 transform hover:scale-105 hover:text-[var(--softtec-yellow)] transition-all duration-300">
              Log In
            </button>

            <button className="bg-[var(--softtec-yellow)] text-[var(--softtec-blue)] px-6 py-3 rounded-full font-bold text-lg transform hover:scale-105 hover:bg-yellow-400 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
