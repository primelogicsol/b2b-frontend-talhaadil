"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface VideoData {
  id: string
  title: string
  description: string
  videoSrc: string // URL to the actual video file
  thumbnailSrc: string // URL to the thumbnail image
}

// Sample dynamic video data
const videos: VideoData[] = [
  {
    id: "1",
    title: "LEADERSHIP",
    description: "A vision for the future of our organization.",
    videoSrc: "/placeholder.mp4", // Replace with your actual video URL
    thumbnailSrc: "/placeholder.svg?height=400&width=600", // Replace with your actual thumbnail
  },
  {
    id: "2",
    title: "De Koshur Crafts B2B Connect Vendor Partnership Portal",
    description: "Connecting businesses and fostering partnerships globally.",
    videoSrc: "/placeholder.mp4",
    thumbnailSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Celebrating US BUSINESS",
    description: "Highlighting growth and innovation across the United States.",
    videoSrc: "/videos/v2.mp4",
    thumbnailSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Global Reach",
    description: "Expanding horizons and connecting continents through our network.",
    videoSrc: "/placeholder.mp4",
    thumbnailSrc: "/placeholder.svg?height=400&width=600",
  },
]

function VideoCard({ video, onClick }: { video: VideoData; onClick: () => void }) {
  return (
    <motion.div
      className="relative w-full h-64 rounded-xl overflow-hidden cursor-pointer group border border-gray-700"
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <video
        src={video.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        aria-label={`Background video for ${video.title}`}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold">{video.title}</h3>
        <p className="text-sm mt-1">{video.description}</p>
      </div>
    </motion.div>
  )
}

function VideoModal({ video, onClose }: { video: VideoData; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        className="relative bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold p-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close video"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{video.title}</h2>
        <div className="relative w-full pb-[56.25%] h-0">
          {" "}
          {/* 16:9 aspect ratio container */}
          <video
            src={video.videoSrc}
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full rounded-md"
            aria-label={`Playing video: ${video.title}`}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-gray-300 mt-4">{video.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  const openModal = (video: VideoData) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-6 md:p-10 border-t-4 border-t-[#4a4a6a]">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Our Vision in Motion
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our key initiatives and partnerships through engaging video content. Click on any video to learn more.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => openModal(video)} />
        ))}
      </div>

      <AnimatePresence>{selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}</AnimatePresence>
    </div>
  )
}
