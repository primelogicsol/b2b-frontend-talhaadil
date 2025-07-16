"use client";

import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isTrue: boolean;
  iframeSrc: string;
  handelClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isTrue, iframeSrc, handelClose }) => {
  return (
    <AnimatePresence>
      {isTrue && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handelClose}
        >
          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-4xl px-4 sm:px-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent close on iframe click
          >
            {/* Video Embed (16:9 aspect ratio) */}
            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={iframeSrc}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>

            {/* Close Button */}
            <motion.button
              onClick={handelClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 text-black rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
