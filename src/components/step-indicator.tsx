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
    <div className="max-w-[1000px] mx-auto">
      <div className=" px-1 py-2 rounded-lg overflow-x-auto">
        <ol className="flex items-center w-max lg:w-full">
          {steps.map((step, stepIdx) => (
            <li
              key={step.id}
              className={`flex items-center ${stepIdx !== steps.length - 1 ? "w-full" : ""}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step.status === "complete"
                      ? "bg-blue-600 border-blue-600"
                      : step.status === "current"
                      ? "border-blue-600 bg-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {step.status === "complete" ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm font-medium ${
                        step.status === "current" ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {step.id}
                    </span>
                  )}
                </div>
                <div className="text-xs mt-2 whitespace-nowrap">
                  <span
                    className={`font-medium ${
                      step.status !== "upcoming" ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </span>
                  <span className="block text-gray-400">(Approx 5 Min)</span>
                </div>
              </div>
              {stepIdx !== steps.length - 1 && (
                <div
                  className={`w-full h-0.5 ${
                    step.status === "complete" ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

