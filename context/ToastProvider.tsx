"use client"

import type React from "react"

import { createContext, useContext, useState, useCallback } from "react"
import { X } from "lucide-react"

type ToastContextType = {
  showToast: (msg: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("")
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const showToast = useCallback(
    (msg: string) => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      setMessage(msg)
      setVisible(true)

      const id = setTimeout(() => setVisible(false), 10000)
      setTimeoutId(id)
    },
    [timeoutId],
  )

  const hideToast = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    setVisible(false)
  }, [timeoutId])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
          <div className="bg-white border-l-4 border-[var(--primary-color)] rounded-lg shadow-xl backdrop-blur-sm min-w-[260px] max-w-[400px] p-5 transform transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full flex-shrink-0 mt-1"></div>
              <div className="flex-1 min-w-0">
                <p className="text-[var(--primary-color)] text-sm font-medium leading-relaxed break-words">{message}</p>
              </div>
              <button
                onClick={hideToast}
                className="flex-shrink-0 p-1 rounded-full hover:bg-[var(--primary-color)] transition-colors duration-200"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 text-[var(--primary-color)] opacity-60 hover:opacity-100" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-1 bg-[var(--secondary-light-color)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--primary-color)] rounded-full animate-[shrink_4000ms_linear_forwards]"
                style={{
                  animation: "shrink 4000ms linear forwards",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
        
        @keyframes slide-in-from-right-full {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .slide-in-from-right-full {
          animation-name: slide-in-from-right-full;
        }
      `}</style>
    </ToastContext.Provider>
  )
}
