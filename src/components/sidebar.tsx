import Image from "next/image"
import Link from "next/link"
import { LayoutDashboard, Briefcase, Activity, Calendar, FileText, Scale, X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Image src="/placeholder.svg" alt="Jur Logo" width={100} height={40} className="text-blue-600" />
            <button onClick={onClose} className="md:hidden p-2 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="space-y-2 flex-grow">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-sm">My Cases</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <Activity className="w-5 h-5" />
              <span className="text-sm">Activities</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Calendar</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm">Files</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              <Scale className="w-5 h-5" />
              <span className="text-sm">Open a Dispute</span>
            </Link>
          </nav>
          <div className="mt-auto">
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
      </div>
    </>
  )
}
