"use client"
import { useState } from 'react'
import { Bell, User, Menu } from 'lucide-react'
import { Sidebar } from "@/components/sidebar"
import { StepIndicator } from "@/components/step-indicator"
import { ClaimForm } from "@/components/claim-form"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 flex flex-col w-full">
        <div className="bg-white p-4 lg:p-6 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
          <div className="flex gap-4">
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
        <div className="flex-1 bg-gray-50 pt-6 px-4 md:px-6 overflow-auto">
          <div className="bg-white rounded-tr-3xl shadow-sm">
            <div className="max-w-[1100px] mx-auto rounded-lg py-6 space-y-6">
              <StepIndicator />
              <ClaimForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

