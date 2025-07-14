import { Navbar } from "@/component/Navbar"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--softtec-blue)] flex flex-col">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        <div className="container mx-auto py-16 px-4 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[var(--softtec-yellow)] text-lg font-semibold mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-[var(--softtec-yellow)] mr-2"></span>
              WELLCOME TO SOFTEC
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
              AI Driven <br /> Solutions
            </h1>
            {/* Add more hero content here if needed */}
          </div>
        </div>
        {/* Abstract 3D object in the background */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 h-auto opacity-70">
          <Image
            src="/abstract-3d-object.png"
            alt="Abstract 3D Object"
            width={800}
            height={800}
            className="object-contain w-full h-full"
          />
        </div>
      </main>
    </div>
  )
}
