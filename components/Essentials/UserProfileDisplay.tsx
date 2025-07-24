"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface UserProfileDisplayProps {
  userName: string
  userAvatarSrc: string
  onClick: () => void
}

export function UserProfileDisplay({ userName, userAvatarSrc, onClick }: UserProfileDisplayProps) {
  return (
    <motion.button
      className="flex items-center space-x-2 cursor-pointer group"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label={`View profile for ${userName}`}
    >
      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[var(--secondary-hover-color)] transition-colors duration-300">
        <Image
          src={"/images/testpic.avif"}
          alt={`${userName}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <span className="text-white text-md font-medium group-hover:text-[var(--secondary-hover-color)] transition-colors duration-300 hidden md:inline">
        {userName}
      </span>
    </motion.button>
  )
}
