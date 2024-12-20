import Image from "next/image"
import Link from "next/link"
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col">
      <div className="p-4">
        <div className="mb-8">
          <Image src="/placeholder.svg" alt="Jur Logo" width={100} height={40} className="text-blue-600" />
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <Briefcase className="w-5 h-5" />
            My Cases
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <Activity className="w-5 h-5" />
            Activities
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <Calendar className="w-5 h-5" />
            Calendar
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <FileText className="w-5 h-5" />
            Files
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            <Scale className="w-5 h-5" />
            Open a Dispute
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-sm mb-2">Get Justice on every Claims</h3>
          <Image
            src="/placeholder.svg"
            alt="Justice Illustration"
            width={200}
            height={150}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

