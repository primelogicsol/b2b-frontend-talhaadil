import { GlobalProvider } from "./ScreenProvider"
import { ToastProvider } from "./ToastProvider"
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </GlobalProvider>
  )
}
