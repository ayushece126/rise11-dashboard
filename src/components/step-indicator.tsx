import { Check } from 'lucide-react'

const steps = [
  { id: 1, name: "Preliminary", status: "complete" },
  { id: 2, name: "Your Details", status: "complete" },
  { id: 3, name: "KYC", status: "current" },
  { id: 4, name: "Parties", status: "upcoming" },
  { id: 5, name: "Claim", status: "upcoming" },
  { id: 6, name: "Review", status: "upcoming" },
  { id: 7, name: "Payment", status: "upcoming" },
]

export function StepIndicator() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <ol className="flex items-center w-full min-w-max space-x-2 sm:space-x-4">
        {steps.map((step, stepIdx) => (
          <li
            key={step.id}
            className={`flex items-center ${
              stepIdx !== steps.length - 1 ? "flex-1" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 ${
                  step.status === "complete"
                    ? "bg-blue-600 border-blue-600"
                    : step.status === "current"
                    ? "border-blue-600 bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {step.status === "complete" ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      step.status === "current" ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </span>
                )}
              </div>
              <div className="text-center mt-2">
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    step.status !== "upcoming" ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
                <span className="block text-[10px] sm:text-xs text-gray-400">(Approx 5 Min)</span>
              </div>
            </div>
            {stepIdx !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  step.status === "complete" ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

