import { Bell, User } from 'lucide-react'
import { Sidebar } from "@/components/sidebar"
import { StepIndicator } from "@/components/step-indicator"
import { ClaimForm } from "@/components/claim-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="bg-white p-2 lg:p-4">
          <div className="flex justify-end gap-4">
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="sr-only">Notifications</span>
            </button>
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
              <User className="w-5 h-5" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="bg-gray-50 rounded-t-3xl shadow-sm">
            <div className="max-w-[1100px] mx-auto px-1 py-2 space-y-6">
              <StepIndicator />
              <ClaimForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

0

