import { AuthenticationProvider } from "./AuthenticationWrapper"
import { GlobalProvider } from "./ScreenProvider"
import { ToastProvider } from "./ToastProvider"
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticationProvider>
      <GlobalProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </GlobalProvider>
    </AuthenticationProvider>
  )
}
