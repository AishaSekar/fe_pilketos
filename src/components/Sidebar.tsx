import React from 'react';
import { Home, Users, UserCircle, Settings, BarChart3, FileText, LogOut } from 'lucide-react';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Data Pemilih' },
    { icon: UserCircle, label: 'Kandidat' },
    { icon: Settings, label: 'Pengaturan' },
    { icon: BarChart3, label: 'Monitoring' },
    { icon: FileText, label: 'Laporan' }
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-[#F6AB36] to-[#f59e1b] text-white flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg hover-scale overflow-hidden">
          <img 
            src="/images/logo_osis.png" 
            alt="Logo OSIS" 
            className="w-full h-full object-contain p-2"
          />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.label === activeMenu;
          return (
            <button
              key={index}
              onClick={() => setActiveMenu(item.label)}
              className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 hover-scale ${
                isActive
                  ? 'bg-white text-[#F6AB36] shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Icon size={24} />
              <span className="font-semibold text-lg">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button className="m-4 flex items-center space-x-4 px-6 py-4 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 hover-scale">
        <LogOut size={24} />
        <span className="font-semibold text-lg">Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;