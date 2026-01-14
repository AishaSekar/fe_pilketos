import React from 'react'
import {
  Home,
  Users,
  UserCircle,
  Settings,
  BarChart3,
  FileText,
  LogOut,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
  activeMenu: string
  setActiveMenu: (menu: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate()

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Data Pemilih', path: '/admin/data-pemilih' },
    { icon: UserCircle, label: 'Kandidat', path: '/admin/kandidat' },
    { icon: Settings, label: 'Pengaturan', path: '/admin/pengaturan' },
    { icon: BarChart3, label: 'Monitoring', path: '/admin/monitoring' },
    { icon: FileText, label: 'Laporan', path: '/admin/laporan' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    navigate('/login', { replace: true })
  }

  return (
    <div className="w-72 bg-gradient-to-b from-[#F6AB36] to-[#f59e1b] text-white flex flex-col shadow-2xl">

      {/* LOGO */}
      <div className="p-6 flex justify-center">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <img
            src="/images/logo_osis.png"
            alt="Logo Sekolah"
            className="w-full h-full object-contain p-2"
          />
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, i) => {
          const Icon = item.icon
          const isActive = activeMenu === item.label

          return (
            <button
              key={i}
              onClick={() => {
                setActiveMenu(item.label)
                navigate(item.path)
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition
                ${
                  isActive
                    ? 'bg-white text-[#F6AB36] shadow-lg'
                    : 'hover:bg-white/20'
                }`}
            >
              <Icon size={22} />
              <span className="font-semibold text-lg">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="m-4 flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-white/20 transition"
      >
        <LogOut size={22} />
        <span className="font-semibold">Logout</span>
      </button>
    </div>
  )
}

export default Sidebar
