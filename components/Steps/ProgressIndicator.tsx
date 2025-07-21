interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1
              const isCompleted = stepNumber < currentStep
              const isCurrent = stepNumber === currentStep

              return (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                      isCompleted
                        ? "bg-[var(--primary-color)] text-white shadow-lg scale-110"
                        : isCurrent
                          ? "bg-[var(--secondary-color)] text-white shadow-lg scale-110 ring-4 ring-[var(--secondary-color)]/20"
                          : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                    }`}
                  >
                    {isCompleted ? "✓" : stepNumber}
                  </div>
                  {stepNumber < totalSteps && (
                    <div
                      className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                        isCompleted ? "bg-[var(--primary-color)]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center mt-3">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      </div>
    </div>
  )
}
