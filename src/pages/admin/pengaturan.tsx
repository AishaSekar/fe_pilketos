import React, { useState } from 'react'
import { Save, Info } from 'lucide-react'
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
        <Header />

        <div className="p-8">
          {/* JUDUL */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Pengaturan Pemilihan
            </h1>
            <p className="text-gray-400 text-lg">
              Atur jadwal dan status pemilihan
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* FORM */}
            <div className="col-span-2 bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Pengaturan Waktu
              </h2>

              <div className="space-y-6">
                {/* TANGGAL & JAM MULAI */}
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

                {/* TANGGAL & JAM SELESAI */}
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

                {/* STATUS PEMILIHAN */}
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-medium">Status Pemilihan</span>
                    <span className="text-sm text-gray-400">
                      {statusPemilihan
                        ? 'Voting sedang berlangsung'
                        : 'Voting belum dimulai'}
                    </span>
                  </div>

                  <button
                    onClick={() => setStatusPemilihan((prev) => !prev)}
                    className={`w-16 h-8 rounded-full relative transition ${
                      statusPemilihan
                        ? 'bg-orange-400'
                        : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
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

            {/* STATUS + INFORMASI */}
            <div className="space-y-6">
              {/* STATUS SAAT INI */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-6">
                  Status Saat Ini
                </h3>

                <div className="flex items-center justify-between bg-orange-100 border border-orange-400 rounded-2xl p-4">
                  <div>
                    <div className="text-sm text-gray-500">Status</div>
                    <div className="text-2xl font-bold">
                      {currentStatus.status}
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full bg-green-500" />
                </div>

                <div className="bg-gray-100 rounded-2xl p-4 mt-4">
                  <div className="text-sm text-gray-500">
                    Periode Pemilihan
                  </div>
                  <div className="font-semibold">
                    {currentStatus.periode}
                  </div>
                </div>
              </div>

              {/* INFORMASI */}
              <div className="bg-blue-50 border border-blue-400 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-400 text-white rounded-full p-2">
                    <Info size={20} />
                  </div>
                  <h4 className="font-bold text-lg">
                    Informasi
                  </h4>
                </div>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Aktifkan pemilihan saat voting sudah siap dimulai
                  </li>
                  <li>
                    Pastikan tanggal dan waktu sudah sesuai
                  </li>
                  <li>
                    Siswa hanya bisa voting saat status aktif
                  </li>
                  <li>
                    Nonaktifkan pemilihan setelah periode voting selesai
                  </li>
                </ul>
              </div>
            </div>
            {/* END RIGHT SIDE */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pengaturan
