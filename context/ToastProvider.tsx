"use client"

import { createContext, useContext, useState, useCallback } from "react"

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

  const showToast = useCallback((msg: string) => {
    setMessage(msg)
    setVisible(true)
    setTimeout(() => setVisible(false), 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-5 right-5 z-50 bg-white text-[var(--primary-color)] border border-[var(--primary-color)] px-6 py-4 rounded-md shadow-xl w-[300px] max-w-full">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  )
}
