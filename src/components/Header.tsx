import React from 'react';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari"
              className="w-full pl-6 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-[#F6AB36] focus:outline-none transition-all duration-300 text-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>
        <div className="ml-8 flex items-center space-x-4">
          <div className="text-right">
            <div className="font-bold text-gray-800 text-lg">Administrator</div>
            <div className="text-sm text-gray-500">Super Admin</div>
          </div>
          <div className="w-16 h-16 bg-[#F6AB36] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;