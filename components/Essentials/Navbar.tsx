"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FiLock } from "react-icons/fi"
import { X, Mountain, ChevronRight, ChevronDown, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { UserProfileDisplay } from "./UserProfileDisplay"
import Cookies from "js-cookie"
import { useAuthentication } from "@/context/AuthenticationWrapper"
import Image from "next/image"
import { getUserProfile } from "@/services/admin"

function LockTooltip({
  children,
  isVisible,
  onHoverChange,
}: {
  children: React.ReactNode
  isVisible: boolean
  onHoverChange: (isHovering: boolean) => void
}) {
  const router = useRouter()

  return (
    <div className="relative group" onMouseEnter={() => onHoverChange(true)} onMouseLeave={() => onHoverChange(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-white text-[var(--primary-color)] text-sm rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-auto border border-white"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center">
              <p className="mb-1">First you need to register</p>
              <button
                onClick={() => router.push("/login")}
                className="text-[var(--secondary-color)] hover:text-[var(--secondary-hover-color)] underline text-xs"
              >
                Click here to login
              </button>
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[var(--primary-color)]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileLockTooltip({
  children,
  isVisible,
  onHoverChange,
}: {
  children: React.ReactNode
  isVisible: boolean
  onHoverChange: (isHovering: boolean) => void
}) {
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isVisible) {
        const target = event.target as Element
        const tooltipElement = document.querySelector("[data-mobile-tooltip]")
        const triggerElement = document.querySelector("[data-mobile-trigger]")

        if (tooltipElement && triggerElement && !tooltipElement.contains(target) && !triggerElement.contains(target)) {
          onHoverChange(false)
        }
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isVisible, onHoverChange])

  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            data-mobile-tooltip
            className="absolute top-full left-4 right-4 mt-2 px-4 py-3 bg-white text-[var(--primary-color)] text-sm rounded-lg shadow-lg z-50 border border-white pointer-events-auto"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center">
              <p className="mb-2">First you need to register</p>
              <button
                onClick={() => router.push("/login")}
                className="text-[var(--secondary-color)] hover:text-[var(--secondary-hover-color)] underline text-sm"
              >
                Click here to login
              </button>
            </div>
            <div className="absolute bottom-full left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[var(--primary-color)]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface DropdownItem {
  label: string
  href: string
}

interface NestedDropdownItem extends DropdownItem {
  subItems?: DropdownItem[]
}

interface DesktopDropdownProps {
  title: string
  items: NestedDropdownItem[]
  isActive?: boolean
  isSignedIn?: boolean
}

interface MobileDropdownProps {
  title: string
  items: NestedDropdownItem[]
  onLinkClick?: () => void
  isSignedIn?: boolean
}

function DesktopSubDropdown({ item }: { item: NestedDropdownItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
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
  )
}

function DesktopDropdown({ title, items, isActive, isSignedIn }: DesktopDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const isPartnership = title.toLowerCase() === "partnerships"

  const handleMouseEnter = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(false)
    }
  }

  const handleClick = () => {
    if (isPartnership && !isSignedIn) {
      setShowTooltip(!showTooltip)
    }
  }

  const handleTooltipHoverChange = (isHovering: boolean) => {
    if (isPartnership && !isSignedIn) {
      setShowTooltip(isHovering)
    }
  }

  return (
    <LockTooltip isVisible={showTooltip} onHoverChange={handleTooltipHoverChange}>
      <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          onClick={handleClick}
          className={`flex items-center gap-洗涤 2 py-2 cursor-pointer text-white text-md font-medium relative transition-colors duration-300 ease-in-out ${isActive ? "text-[var(--secondary-color)]" : "hover:text-[var(--secondary-hover-color)]"}`}
        >
          {title}
          {isPartnership && !isSignedIn && <FiLock size={14} />}
          <span
            className={`absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
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
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LockTooltip>
  )
}

function MobileSubDropdown({
  item,
  onLinkClick,
}: {
  item: NestedDropdownItem
  onLinkClick?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 py-3 px-8 text-white/90 text-base hover:bg-white/10 rounded-lg transition-all duration-300"
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
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
  )
}

function MobileDropdown({ title, items, onLinkClick, isSignedIn }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const isPartnership = title.toLowerCase() === "partnerships"

  const toggleDropdown = () => {
    if (!isPartnership || isSignedIn) {
      setIsOpen(!isOpen)
    } else if (isPartnership && !isSignedIn) {
      setShowTooltip(!showTooltip)
    }
  }

  const handleTooltipHoverChange = (isHovering: boolean) => {
    if (isPartnership && !isSignedIn) {
      setShowTooltip(isHovering)
    }
  }

  return (
    <MobileLockTooltip isVisible={showTooltip} onHoverChange={handleTooltipHoverChange}>
      <div className="w-full">
        <button
          data-mobile-trigger
          onClick={toggleDropdown}
          className="w-full flex items-center gap-2 py-4 px-10 text-white text-lg font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          <span>{title}</span>
          {isPartnership && !isSignedIn && <FiLock size={16} />}
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </button>
        <AnimatePresence>
          {isOpen && (!isPartnership || isSignedIn) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden bg-white/5 rounded-lg mx-4 mb-2"
            >
              <div className="py-2">
                {items.map((item, index) =>
                  item.subItems ? (
                    <MobileSubDropdown key={index} item={item} onLinkClick={onLinkClick} />
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
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MobileLockTooltip>
  )
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [showProcessTooltip, setShowProcessTooltip] = useState(false)
  const [showRegistrationTooltip, setShowRegistrationTooltip] = useState(false)
  const [showMobileProcessTooltip, setShowMobileProcessTooltip] = useState(false)
  const [showMobileRegistrationTooltip, setShowMobileRegistrationTooltip] = useState(false)
  const [userName, setUserName] = useState("John Doe")

  const { handleLogout } = useAuthentication()
  const router = useRouter()
  const user_role = Cookies.get("user_role")
  console.log(user_role)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("access_token");
        let userName = "John Doe";

        const userProfile = await getUserProfile();
        console.log(userProfile.data)
        if (userProfile?.data?.username) {
          userName = userProfile.data.username;
        }


        setUserName(userName);
        setIsSignedIn(true);

        console.log("isSignedIn:", !!token);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      
      }
    };

    fetchUser();
  }, []);

  const blogDropdownItems: NestedDropdownItem[] = [
    {
      label: "Our Brand",
      href: "#",
      subItems: [
        { label: "Story", href: "/our-brand/brand-story" },
        { label: "Credentials", href: "/our-brand/brand-credentials" },
      ],
    },
    {
      label: "Our Niche",
      href: "#",
      subItems: [
        { label: "Location", href: "/our-niche/location" },
        { label: "Business", href: "/our-niche/business" },
        { label: "Network", href: "/our-niche/network" },
        { label: "Product", href: "/our-niche/product" },
      ],
    },
    { label: "Our Values", href: "/our-values" },
    { label: "Our Team", href: "/our-team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ]

  let pageDropdownItems: NestedDropdownItem[] = []

  if (user_role === "buyer") {
    pageDropdownItems = [
      {
        label: "Core Trade",
        href: "/core-trade",
        subItems: [
          { label: "Drop Shipping", href: "/core-trade/dropshipping-ecommerce" },
          { label: "Consignment", href: "/core-trade/consignment" },
          { label: "Distribution", href: "/core-trade/wholesale&distribution" },
          { label: "Export", href: "/core-trade/import-export" },
        ],
      },
      {
        label: "Brand Expansion",
        href: "/brand-growth",
        subItems: [
          { label: "Exhibition", href: "/brand-growth/exhibition" },
          { label: "Auction", href: "/brand-growth/auction&bidding" },
          { label: "White-Label", href: "/brand-growth/white-label" },
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
          { label: "Logistics", href: "/institutional/logistics" },
          { label: "Museum", href: "/institutional/museum-institutional" },
          { label: "NGO Supplier", href: "/institutional/ngo&government" },
          { label: "Technology Partnership", href: "/institutional/technology-partnership" },
        ],
      },
    ]
  } else {
    pageDropdownItems = [
      {
        label: "Core Trade",
        href: "/core-trade",
        subItems: [
          { label: "E-Commerce", href: "/core-trade/dropshipping-ecommerce" },
          { label: "Consignment", href: "/core-trade/consignment" },
          { label: "Wholesale", href: "/core-trade/wholesale&distribution" },
          { label: "Import", href: "/core-trade/import-export" },
        ],
      },
      {
        label: "Brand Expansion",
        href: "/brand-growth",
        subItems: [
          { label: "Exhibition", href: "/brand-growth/exhibition" },
          { label: "Bidding", href: "/brand-growth/auction&bidding" },
          { label: "White-Label", href: "/brand-growth/white-label" },
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
          { label: "Logistics", href: "/institutional/logistics" },
          { label: "Museum", href: "/institutional/museum-institutional" },
          { label: "NGO Buyer", href: "/institutional/ngo&government" },
          { label: "Technology Partnership", href: "/institutional/technology-partnership" },
        ],
      },
    ]
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const registeredStatus = Cookies.get("is_registered")
    setIsRegistered(registeredStatus === "true")
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out bg-[var(--primary-color)] ${isScrolled ? "py-2 shadow-lg border-b-[var(--secondary-color)] border-b-2" : "py-4"}`}
      >
        <div className="container mx-auto flex items-center justify-between transition-all duration-500 px-4">
          <Link href="/" className="flex items-center space-x-2 transition-all duration-500 z-60">

            <Image src="/images/logo3.png" alt="Dekoshur Crafts" width={isScrolled ? 80 : 160} height={isScrolled ? 70 : 100} />
            
          </Link>

          <div className="hidden lg:flex items-center space-x-8 transition-all duration-500">
            <Link
              href="/"
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>
            <DesktopDropdown title="About Us" items={blogDropdownItems} />
            <DesktopDropdown title="Partnerships" items={pageDropdownItems} isSignedIn={true} />

            <LockTooltip
              isVisible={showProcessTooltip}
              onHoverChange={(isHovering) => !isSignedIn && setShowProcessTooltip(isHovering)}
            >
              <div>
                <Link
                  href={isSignedIn ? "/process" : "#"}
                  className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out flex items-center"
                  onClick={(e) => {
                    if (!isSignedIn) {
                      e.preventDefault()
                      setShowProcessTooltip(!showProcessTooltip)
                      return
                    }
                  }}
                >
                  Process
                  {!isSignedIn && <FiLock size={14} className="ml-2" />}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
                </Link>
              </div>
            </LockTooltip>

            <LockTooltip
              isVisible={showRegistrationTooltip}
              onHoverChange={(isHovering) => !isSignedIn && setShowRegistrationTooltip(isHovering)}
            >
              <div>
                <Link
                  href={isSignedIn ? "/registration" : "#"}
                  className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out flex items-center"
                  onClick={(e) => {
                    if (!isSignedIn) {
                      e.preventDefault()
                      setShowRegistrationTooltip(!showRegistrationTooltip)
                      return
                    }
                  }}
                >
                  Registration
                  {!isSignedIn && <FiLock size={14} className="ml-2" />}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
                </Link>
              </div>
            </LockTooltip>

            <Link
              href="/appointment"
              className="py-2 text-white text-md font-medium relative group hover:text-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out"
            >
              Book Appointment
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary-hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {isSignedIn ? (
              <UserProfileDisplay
                role={user_role ?? ""}
                userName={userName}
                userAvatarSrc="/placeholder.svg?height=120&width=120"
              />
            ) : (
              <>
                <button
                  onClick={() => {
                    router.push("/login")
                  }}
                  className="cursor-pointer text-white text-lg font-medium px-4 py-2 hover:text-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    router.push("/signup")
                  }}
                  className="cursor-pointer bg-[var(--secondary-color)] text-gray-200 px-6 py-2 rounded-full font-bold text-lg hover:bg-[var(--secondary-hover-color)] hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Register
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none z-60 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2 left-0 w-full h-0.5 bg-white"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-4 left-0 w-full h-0.5 bg-white origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-full h-full bg-[var(--primary-color)] z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <Mountain size={32} className="text-[var(--secondary-color)]" />
                    <span className="text-white font-bold text-xl">Dekoshur Crafts</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

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

                    <MobileLockTooltip
                      isVisible={showMobileProcessTooltip}
                      onHoverChange={(isHovering) => !isSignedIn && setShowMobileProcessTooltip(isHovering)}
                    >
                      <div>
                        <Link
                          data-mobile-trigger
                          href={isSignedIn ? "/process" : "#"}
                          className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                          onClick={(e) => {
                            if (!isSignedIn) {
                              e.preventDefault()
                              setShowMobileProcessTooltip(!showMobileProcessTooltip)
                              return
                            }
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <span>Process</span>
                          {!isSignedIn && <FiLock size={16} className="ml-2" />}
                        </Link>
                      </div>
                    </MobileLockTooltip>

                    <MobileLockTooltip
                      isVisible={showMobileRegistrationTooltip}
                      onHoverChange={(isHovering) => !isSignedIn && setShowMobileRegistrationTooltip(isHovering)}
                    >
                      <div>
                        <Link
                          data-mobile-trigger
                          href={isSignedIn ? "/registration" : "#"}
                          className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                          onClick={(e) => {
                            if (!isSignedIn) {
                              e.preventDefault()
                              setShowMobileRegistrationTooltip(!showMobileRegistrationTooltip)
                              return
                            }
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <span>Registration</span>
                          {!isSignedIn && <FiLock size={16} className="ml-2" />}
                        </Link>
                      </div>
                    </MobileLockTooltip>

                    <Link
                      href="/appointment"
                      className="flex items-center py-4 px-6 text-white text-lg font-medium hover:bg-white/10 rounded-lg mx-4 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </div>

                <div className="p-6 border-t border-white/10 space-y-3">
                  {isSignedIn ? (
                    <>
                      <button
                        disabled={isRegistered === false}
                        className="w-full flex items-center justify-center gap-2 text-white text-lg font-medium py-4 px-6 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          if (isRegistered) {
                            setIsMobileMenuOpen(false)
                            router.push("/profile")
                          }
                        }}
                      >
                        {isRegistered === false && <Lock size={18} />}
                        <span>Dashboard</span>
                      </button>
                      <button
                        className="w-full flex items-center justify-center text-white text-lg font-medium py-4 px-6 hover:bg-white/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          handleLogout()
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
                          setIsMobileMenuOpen(false)
                          router.push("/login")
                        }}
                      >
                        <span>Log In</span>
                      </button>
                      <button
                        className="w-full flex items-center justify-center bg-[var(--secondary-color)] text-gray-200 py-4 px-6 rounded-lg font-bold text-lg hover:bg-[var(--secondary-hover-color)] transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          router.push("/signup")
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
  )
}