"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import { X, Mountain, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { UserProfileDisplay } from "./UserProfileDisplay";
import Cookies from "js-cookie";
import { useAuthentication } from "@/context/AuthenticationWrapper";


interface DropdownItem {
  label: string;
  href: string;
}

interface NestedDropdownItem extends DropdownItem {
  subItems?: DropdownItem[];
}

interface DesktopDropdownProps {
  title: string;
  items: NestedDropdownItem[];
  isActive?: boolean;
  isSignedIn?: boolean;
}

interface MobileDropdownProps {
  title: string;
  items: NestedDropdownItem[];
  onLinkClick?: () => void;
  isSignedIn?: boolean;
}

function DesktopSubDropdown({ item }: { item: NestedDropdownItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[var(--primary-color)] transition-colors duration-200 flex items-center justify-between"
      >
        {item.label}
        <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
      <AnimatePresence>
        {isOpen && item.subItems && (
          <motion.div
            className="absolute left-full top-0 mt-0 ml-2 w-48 bg-white shadow-xl rounded-lg py-2 z-20"
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {item.subItems.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.href}
                className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[var(--primary-color)] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function DesktopDropdown({ title, items, isActive, isSignedIn }: DesktopDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isPartnership = title.toLowerCase() === "partnerships";

  const handleMouseEnter = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-2 py-2 cursor-pointer text-white text-md font-medium relative transition-colors duration-300 ease-in-out ${isActive
          ? "text-[var(--secondary-color)]"
          : "hover:text-[var(--secondary-hover-color)]"
          }`}
      >
        {title}
        {isPartnership && !isSignedIn && <FiLock size={14} />}
        <span
          className={`absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (!isPartnership || isSignedIn) && (
          <motion.div
            className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-10"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, index) =>
              item.subItems ? (
                <DesktopSubDropdown key={index} item={item} />
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[var(--primary-color)] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function MobileSubDropdown({
  item,
  onLinkClick,
}: {
  item: NestedDropdownItem;
  onLinkClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 py-3 px-8 text-white/90 text-base hover:bg-white/10 rounded-lg transition-all duration-300"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && item.subItems && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white/5 rounded-lg mx-2 mb-1"
          >
            <div className="py-1">
              {item.subItems.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  onClick={onLinkClick}
                  className="px-10 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span className="flex-1">{subItem.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({ title, items, onLinkClick, isSignedIn }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isPartnership = title.toLowerCase() === "partnerships";

  const toggleDropdown = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center gap-2 py-4 px-10 text-white text-lg font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
      >
        <span>{title}</span>
        {isPartnership && !isSignedIn && <FiLock size={16} />}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (!isPartnership || isSignedIn) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white/5 rounded-lg mx-4 mb-2"
          >
            <div className="py-2">
              {items.map((item, index) =>
                item.subItems ? (
                  <MobileSubDropdown
                    key={index}
                    item={item}
                    onLinkClick={onLinkClick}
                  />
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onLinkClick}
                    className="px-8 py-3 text-md text-white/90 text-base hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
                  >
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { handleLogout } = useAuthentication();
  const router = useRouter();
  const user_role = Cookies.get('user_role')
  console.log(user_role)
  useEffect(() => {
    const token = Cookies.get('access_token')




    if (token) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
    console.log(isSignedIn)
  }, [])

  const blogDropdownItems: DropdownItem[] = [
    { label: "Our Values", href: "/our-values" },
    { label: "Our Story", href: "/our-story" },
    { label: "Our Team", href: "/our-team" },
    { label: "Business Niche", href: "/business-niche" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  let pageDropdownItems: NestedDropdownItem[] = [];

if (user_role === "buyer") {
  pageDropdownItems = [
    {
      label: "Core Trade",
      href: "/core-trade",
      subItems: [
        { label: "Drop Shipping", href: "/core-trade/dropshipping-ecommerce" },
        { label: "Export", href: "/core-trade/import-export" },
        { label: "Distribution", href: "/core-trade/wholesale&distribution" },
        { label: "Consignment", href: "/core-trade/consignment" },
      ],
    },
    {
      label: "Brand Expansion",
      href: "/brand-growth",
      subItems: [
        { label: "Auction", href: "/brand-growth/auction&bidding" },
        { label: "White-Label", href: "/brand-growth/white-label" },
        { label: "Exhibition", href: "/brand-growth/exhibition" },
        { label: "Brick & Mortar", href: "/brand-growth/brick&mortar" },
      ],
    },
    {
      label: "Collaborative",
      href: "/collaborative",
      subItems: [
        { label: "Packaging", href: "/collaborative/packaging" },
        { label: "Design Collaboration", href: "/collaborative/design-collaboration" },
        { label: "Storytelling & Media", href: "/collaborative/storytelling&media" },
        { label: "Warehouse", href: "/collaborative/warehouse" },
      ],
    },
    {
      label: "Institutional",
      href: "/institutional",
      subItems: [
        { label: "Institutional", href: "/institutional/museum-institutional" },
        { label: "Logistics", href: "/institutional/logistics" },
        { label: "NGO Supplier", href: "/institutional/ngo&government" },
        { label: "Technology Partnership", href: "/institutional/technology-partnership" },
      ],
    },
  ];
} else {
  pageDropdownItems = [
    {
      label: "Core Trade",
      href: "/core-trade",
      subItems: [
        { label: "E-Commerce", href: "/core-trade/dropshipping-ecommerce" },
        { label: "Import", href: "/core-trade/import-export" },
        { label: "Wholesale", href: "/core-trade/wholesale&distribution" },
        { label: "Consignment", href: "/core-trade/consignment" },
      ],
    },
    {
      label: "Brand Expansion",
      href: "/brand-growth",
      subItems: [
        { label: "Bidding", href: "/brand-growth/auction&bidding" },
        { label: "White-Label", href: "/brand-growth/white-label" },
        { label: "Exhibition", href: "/brand-growth/exhibition" },
        { label: "Brick & Mortar", href: "/brand-growth/brick&mortar" },
      ],
    },
    {
      label: "Collaborative",
      href: "/collaborative",
      subItems: [
        { label: "Packaging", href: "/collaborative/packaging" },
        { label: "Design Collaboration", href: "/collaborative/design-collaboration" },
        { label: "Storytelling & Media", href: "/collaborative/storytelling&media" },
        { label: "Warehouse", href: "/collaborative/warehouse" },
      ],
    },
    {
      label: "Institutional",
      href: "/institutional",
      subItems: [
        { label: "Museum", href: "/institutional/museum-institutional" },
        { label: "Logistics", href: "/institutional/logistics" },
        { label: "NGO Buyer", href: "/institutional/ngo&government" },
        { label: "Technology Partnership", href: "/institutional/technology-partnership" },
      ],
    },
  ];
}


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out bg-[var(--primary-color)] ${isScrolled
          ? "py-2 shadow-lg border-b-[var(--secondary-color)] border-b-2"
          : "py-4"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between transition-all duration-500 px-4">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-all duration-500 z-60"
          >
            <Mountain
              size={isScrolled ? 28 : 48}
              className="text-[var(--secondary-color)]"
            />
            <span
              className={`text-white font-bold transition-all duration-500 ${isScrolled ? "text-md md:text-2xl" : "text-xl md:text-3xl"
                }`}
            >
              Dekoshur Crafts
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 transition-all duration-500">
            <Link
              href="/"
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>
            <DesktopDropdown title="About Us" items={blogDropdownItems} />
            <DesktopDropdown title="Partnerships" items={pageDropdownItems} isSignedIn={isSignedIn} />
            <Link
              href={isSignedIn ? "/process" : "#"}
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out flex items-center"
              onClick={(e) => {
                if (!isSignedIn) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              Process
              {!isSignedIn && <FiLock size={14} className="ml-2" />}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>

            <Link
              href={isSignedIn ? "/registration" : "#"}
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out flex items-center"
              onClick={(e) => {
                if (!isSignedIn) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              Registration
              {!isSignedIn && <FiLock size={14} className="ml-2" />}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>

            <Link
              href="/appointment"
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
            >
              Book Appointment
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>
          </div>

          {/* Desktop Buttons / User Profile */}
          <div className="hidden lg:flex items-center space-x-4">
            {isSignedIn ? (
              <UserProfileDisplay
                userName="John Doe"
                userAvatarSrc="/placeholder.svg?height=120&width=120"
                onClick={() => {
                  router.push("/profile");
                }}
              />
            ) : (
              <>
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="cursor-pointer text-white text-lg font-medium px-4 py-2 hover:text-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    router.push("/signup");
                  }}
                  className="cursor-pointer bg-[var(--secondary-color)] text-gray-200 px-6 py-2 rounded-full font-bold text-lg hover:bg-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none z-60 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2 left-0 w-full h-0.5 bg-white"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-4 left-0 w-full h-0.5 bg-white origin-center"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 w-full h-full bg-[var(--primary-color)] z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <Mountain
                      size={32}
                      className="text-[var(--secondary-color)]"
                    />
                    <span className="text-white font-bold text-xl">
                      Dekoshur Crafts
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-6">
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Home</span>
                    </Link>
                    <MobileDropdown
                      title="About Us"
                      items={blogDropdownItems}
                      onLinkClick={() => setIsMobileMenuOpen(false)}
                    />
                    <MobileDropdown
                      title="Partnerships"
                      items={pageDropdownItems}
                      onLinkClick={() => setIsMobileMenuOpen(false)}
                      isSignedIn={isSignedIn}
                    />
                    <Link
                      href={isSignedIn ? "/process" : "#"}
                      className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                      onClick={(e) => {
                        if (!isSignedIn) {
                          e.preventDefault();
                          return;
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span>Process</span>
                      {!isSignedIn && <FiLock size={16} className="ml-2" />}
                    </Link>

                    <Link
                      href={isSignedIn ? "/registration" : "#"}
                      className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                      onClick={(e) => {
                        if (!isSignedIn) {
                          e.preventDefault();
                          return;
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span>Registration</span>
                      {!isSignedIn && <FiLock size={16} className="ml-2" />}
                    </Link>

                    <Link
                      href="/appointment"
                      className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 border-t border-white/10 space-y-3">
                  {isSignedIn ? (
                    <>
                      <button
                        className="w-full flex items-center justify-center text-white text-lg font-medium py-4 px-6 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push("/profile");
                        }}
                      >
                        <span>View Profile</span>
                      </button>
                      <button
                        className="w-full flex items-center justify-center text-white text-lg font-medium py-4 px-6 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push("/login");
                        }}
                      >
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-center text-white text-lg font-medium py-4 px-6 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          handleLogout()
                        }}
                      >
                        <span>Log In</span>
                      </button>
                      <button
                        className="w-full flex items-center justify-center bg-[var(--secondary-color)] text-gray-200 py-4 px-6 rounded-lg font-bold text-lg hover:bg-[var(--secondary-hover-color)] transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push("/signup");
                        }}
                      >
                        <span>Register</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
