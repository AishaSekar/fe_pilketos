import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Sidebar.tsx";
import Header from "../../components/Header.tsx";
import "../../index.css"

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const stats = [
    { label: 'Total Pemilih', value: 50, icon: '👥', color: 'bg-blue-100', iconColor: 'text-blue-500' },
    { label: 'Kandidat', value: 3, icon: '👤', color: 'bg-purple-100', iconColor: 'text-purple-500' },
    { label: 'Suara Masuk', value: 44, icon: '✓', color: 'bg-green-100', iconColor: 'text-green-500' },
    { label: 'Partisipasi', value: 77, icon: '📈', color: 'bg-orange-100', iconColor: 'text-orange-500' }
  ];

  const recentActivities = [
    { name: 'Ahmad Rizky', class: 'XII IPA 1', action: 'Telah memilih', time: '2 menit lalu', initial: 'A' },
    { name: 'Siti Aisyah', class: 'XII IPA 1', action: 'Telah memilih', time: '5 menit lalu', initial: 'S' },
    { name: 'Budi Santoso', class: 'XII IPA 2', action: 'Telah memilih', time: '8 menit lalu', initial: 'B' },
    { name: 'Dewi Lestari', class: 'XII IPA 2', action: 'Telah memilih', time: '10 menit lalu', initial: 'D' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header Component */}
        <Header />

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-500 text-lg">Ringkasan data pemilihan ketua OSIS</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift ${
                  animateStats ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">{stat.label}</span>
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-2xl shadow-md`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-[#F6AB36]">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Status Voting */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Status Voting</h2>
              
              {/* Sudah Memilih */}
              <div className="bg-green-50 rounded-2xl p-6 mb-4 border-2 border-green-200 hover-scale transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-3xl">✓</span>
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">Sudah Memilih</div>
                      <div className="text-4xl font-bold text-green-600">10</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-600 text-sm">Persentase</div>
                    <div className="text-3xl font-bold text-green-600">25%</div>
                  </div>
                </div>
              </div>

              {/* Belum Memilih */}
              <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 hover-scale transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-3xl">✕</span>
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">Belum Memilih</div>
                      <div className="text-4xl font-bold text-red-600">5</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-600 text-sm">Persentase</div>
                    <div className="text-3xl font-bold text-red-600">45%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Aktivitas Terbaru</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 slide-in-right"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-[#F6AB36] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {activity.initial}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{activity.name}</div>
                      <div className="text-sm text-gray-500">
                        {activity.class} • {activity.action}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;