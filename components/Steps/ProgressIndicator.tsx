import { useEffect, useState } from "react"

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768) // Tailwind md breakpoint
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Compute steps to render
  let stepsToRender: number[]
  if (isSmall) {
    if (totalSteps <= 3) {
      stepsToRender = Array.from({ length: totalSteps }, (_, i) => i + 1)
    } else if (currentStep === 1) {
      stepsToRender = [1, 2, 3]
    } else if (currentStep === totalSteps) {
      stepsToRender = [totalSteps - 2, totalSteps - 1, totalSteps]
    } else {
      stepsToRender = [currentStep - 1, currentStep, currentStep + 1]
    }
  } else {
    stepsToRender = Array.from({ length: totalSteps }, (_, i) => i + 1)
  }

  return (
    <div className= "bg-white/95 backdrop-blur-sm shadow-lg z-50 px-4 py-3">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {stepsToRender.map((stepNumber, idx) => {
              const isCompleted = stepNumber < currentStep
              const isCurrent = stepNumber === currentStep
              return (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-300 ${
                      isCompleted
                        ? "bg-[var(--primary-color)] text-white shadow-lg scale-105"
                        : isCurrent
                        ? "bg-[var(--secondary-color)] text-white shadow-lg scale-110 ring-4 ring-[var(--secondary-color)]/20"
                        : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                    }`}
                  >
                    {isCompleted ? "✓" : stepNumber}
                  </div>
                  {idx < stepsToRender.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                        stepNumber < currentStep ? "bg-[var(--primary-color)]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center mt-2 sm:mt-3">
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      </div>
    </div>
  )
}
