import React, { useState } from 'react';
import { Search, Edit2, Trash2, RotateCcw } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const DataPemilih: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('Data Pemilih');
  const [searchTerm, setSearchTerm] = useState('');

  const voters = [
    { nis: '202101', nama: 'Ahmad Rizki', kelas: 'XII IPA 1', status: 'Sudah Memilih' },
    { nis: '202102', nama: 'Siti Aisyah', kelas: 'XII IPS 2', status: 'Sudah Memilih' },
    { nis: '202103', nama: 'Budi Santoso', kelas: 'XII IPA 1', status: 'Sudah Memilih' },
    { nis: '202104', nama: 'Dewi Lestari', kelas: 'XI IPA 1', status: 'Belum Memilih' },
    { nis: '202105', nama: 'Eko Prasetyo', kelas: 'XI IPA 1', status: 'Belum Memilih' },
    { nis: '202106', nama: 'Fitri Handayani', kelas: 'XII IPA 1', status: 'Sudah Memilih' },
    { nis: '202107', nama: 'Gilang Pratama', kelas: 'XI IPS 1', status: 'Belum Memilih' },
    { nis: '202108', nama: 'Hana Safitri', kelas: 'XII IPA 2', status: 'Sudah Memilih' },
    { nis: '202109', nama: 'Indra Gunawan', kelas: 'XI IPA 1', status: 'Belum Memilih' },
    { nis: '202110', nama: 'Denis Mulya', kelas: 'XII IPA 2', status: 'Sudah Memilih' },
  ];

  const filteredVoters = voters.filter(v =>
    v.nis.includes(searchTerm) ||
    v.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.kelas.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex-1 overflow-auto p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Data Pemilih</h1>
          <p className="text-gray-500 mb-8">Kelola data siswa yang berhak memilih</p>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Cari NIS, nama, atau kelas..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-[#F6AB36]"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left">NIS</th>
                  <th className="px-6 py-4 text-left">Nama</th>
                  <th className="px-6 py-4 text-left">Kelas</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredVoters.map((v, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{v.nis}</td>
                    <td className="px-6 py-4">{v.nama}</td>
                    <td className="px-6 py-4">{v.kelas}</td>
                    <td className="px-6 py-4">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                        v.status === 'Sudah Memilih'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {v.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      {v.status === 'Sudah Memilih' && (
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                          <RotateCcw size={18} />
                        </button>
                      )}
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredVoters.length === 0 && (
              <div className="text-center py-10 text-gray-400">
                Tidak ada data ditemukan
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPemilih;
