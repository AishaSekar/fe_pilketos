import { useState } from 'react';
import { User, Edit2, Trash2, Plus } from 'lucide-react';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../index.css";

const Kandidat = () => {
  const [activeMenu, setActiveMenu] = useState('Kandidat');

  const [candidates] = useState([
    {
      id: 1,
      nama: 'Ahmad Pratama',
      visi: 'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.'
      ],
      totalSuara: 77
    },
    {
      id: 2,
      nama: 'Siti Nurhaliza',
      visi: 'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.'
      ],
      totalSuara: 77
    },
    {
      id: 3,
      nama: 'Agus Nugroho',
      visi: 'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.'
      ],
      totalSuara: 77
    }
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Manajemen Kandidat
              </h1>
              <p className="text-gray-500 text-lg">
                Kelola data kandidat ketua OSIS
              </p>
            </div>

            <button className="flex items-center space-x-2 bg-[#F6AB36] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e59a25] transition-all shadow-lg">
              <Plus size={20} />
              <span>Tambah Kandidat</span>
            </button>
          </div>

          {/* Kandidat Grid */}
          <div className="grid grid-cols-3 gap-8">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Kandidat {candidate.id}
                  </h3>
                  <p className="text-lg font-semibold text-[#F6AB36]">
                    {candidate.nama}
                  </p>
                </div>

                {/* Visi */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[#F6AB36] mb-2">Visi</h4>
                  <p className="text-sm text-gray-600">
                    {candidate.visi}
                  </p>
                </div>

                {/* Misi */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#F6AB36] mb-2">Misi</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    {candidate.misi.map((misi, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {misi}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Total Suara */}
                <div className="mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      Total Suara
                    </span>
                    <span className="text-2xl font-bold text-[#F6AB36]">
                      {candidate.totalSuara}
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-[#F6AB36] text-white px-4 py-2.5 rounded-full font-semibold hover:bg-[#e59a25]">
                    <Edit2 size={16} />
                    <span>Edit</span>
                  </button>

                  <button className="flex-1 flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-red-600">
                    <Trash2 size={16} />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Kandidat;
