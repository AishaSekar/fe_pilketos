import React, { useState } from 'react'
import { Save } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

const Pengaturan = () => {
  const [activeMenu, setActiveMenu] = useState('Pengaturan')

  const [tanggalMulai, setTanggalMulai] = useState('')
  const [jamMulai, setJamMulai] = useState('')
  const [tanggalSelesai, setTanggalSelesai] = useState('')
  const [jamSelesai, setJamSelesai] = useState('')
  const [statusPemilihan, setStatusPemilihan] = useState(true)

  const currentStatus = {
    status: 'Aktif',
    periode: '2026-01-10 08:00 - 2026-01-15 15:00',
  }

  const handleSimpan = () => {
    alert('Pengaturan berhasil disimpan!')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* KONTEN */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <Header />

        {/* ISI HALAMAN */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Pengaturan Pemilihan
            </h1>
            <p className="text-gray-400 text-lg">
              Atur jadwal dan status pemilihan
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* FORM PENGATURAN */}
            <div className="col-span-2 bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Pengaturan Waktu
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Tanggal Mulai
                    </label>
                    <input
                      type="date"
                      value={tanggalMulai}
                      onChange={(e) => setTanggalMulai(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Jam Mulai
                    </label>
                    <input
                      type="time"
                      value={jamMulai}
                      onChange={(e) => setJamMulai(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Tanggal Selesai
                    </label>
                    <input
                      type="date"
                      value={tanggalSelesai}
                      onChange={(e) => setTanggalSelesai(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Jam Selesai
                    </label>
                    <input
                      type="time"
                      value={jamSelesai}
                      onChange={(e) => setJamSelesai(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                {/* STATUS */}
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                  <span>Status Pemilihan</span>
                  <button
                    onClick={() => setStatusPemilihan(!statusPemilihan)}
                    className={`w-16 h-8 rounded-full relative transition ${
                      statusPemilihan ? 'bg-orange-400' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition ${
                        statusPemilihan ? 'translate-x-8' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* SIMPAN */}
                <button
                  onClick={handleSimpan}
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <Save size={20} />
                  Simpan Pengaturan
                </button>
              </div>
            </div>

            {/* STATUS SAAT INI */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-4">Status Saat Ini</h3>
                <div className="bg-green-50 p-4 rounded-xl border">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="text-2xl font-bold">
                    {currentStatus.status}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border mt-4">
                  <div className="text-sm text-gray-500">
                    Periode Pemilihan
                  </div>
                  <div className="font-semibold">
                    {currentStatus.periode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pengaturan
