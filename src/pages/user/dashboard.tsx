import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut,
  Info,
  Users,
  CheckCircle,
  Calendar,
  Clock,
  AlertCircle,
  Vote,
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()

  // ambil status voting dari localStorage
  const [hasVoted] = useState(() => {
    return localStorage.getItem('hasVoted') === 'true'
  })

  const [activeTab, setActiveTab] = useState('informasi')

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ================= HEADER / NAVBAR ================= */}
      <div className="bg-gradient-to-r from-[#F6AB36] to-[#f59e1b] p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <img
              src="/images/logo_osis.png"
              alt="Logo OSIS"
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <h1 className="text-white font-bold text-lg">
              Pemilihan Ketua OSIS
            </h1>
            <p className="text-white text-xs">Tahun Ajaran 2025/2026</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-bold text-sm">Ahmad Rizki</p>
            <p className="text-xs">XII IPA 1 · 2021001</p>
          </div>

          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold text-[#F6AB36]">
            A
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white hover:underline"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          {/* INFORMASI */}
          <button
            onClick={() => setActiveTab('informasi')}
            className={`flex items-center gap-2 py-3 border-b-2 ${
              activeTab === 'informasi'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            <Info size={18} />
            Informasi
          </button>

          {/* KANDIDAT */}
          <button
            onClick={() => navigate('/user/voting')}
            className="flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-orange-600"
          >
            <Users size={18} />
            Kandidat
          </button>

          {/* ✅ CUMA INI YANG DIBENERIN */}
          <button
            disabled={!hasVoted}
            onClick={() => navigate('/user/votingSuccess')}
            className={`flex items-center gap-2 py-3 border-b-2 ${
              hasVoted
                ? 'border-transparent text-gray-500 hover:text-orange-600'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <Vote size={18} />
            Voting
            {hasVoted && (
              <CheckCircle size={18} className="text-green-500" />
            )}
          </button>
        </div>
      </div>

      {/* ================= BANNER ================= */}
      {hasVoted && (
        <div className="bg-green-100 border-l-4 border-green-500 p-3 mx-6 mt-4">
          <p className="text-green-800 text-sm font-medium">
            ✅ Anda sudah melakukan voting. Terima kasih atas partisipasi Anda!
          </p>
        </div>
      )}

      {/* ================= KONTEN INFORMASI ================= */}
      {activeTab === 'informasi' && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Welcome */}
          <div className="bg-white rounded-xl border-2 border-blue-400 p-8 text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Selamat Datang !</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Terima kasih telah berpartisipasi dalam pemilihan Ketua OSIS Tahun
              Ajaran 2025/2026. Suara Anda sangat berarti untuk masa depan
              organisasi siswa kita.
            </p>
          </div>

          {/* Jadwal & Tentang OSIS */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Jadwal */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-orange-500" />
                Jadwal Pemilihan
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between bg-orange-50 px-4 py-2 rounded-full">
                  <span>Tanggal Mulai</span>
                  <span className="text-orange-600 font-semibold">
                    2026-01-10
                  </span>
                </div>

                <div className="flex justify-between bg-orange-50 px-4 py-2 rounded-full">
                  <span>Tanggal Selesai</span>
                  <span className="text-orange-600 font-semibold">
                    2026-01-15
                  </span>
                </div>

                <div className="flex justify-between bg-orange-50 px-4 py-2 rounded-full">
                  <span>Waktu</span>
                  <span className="flex items-center gap-1 text-orange-600 font-semibold">
                    <Clock size={14} /> 08.00 - 15.00
                  </span>
                </div>

                <div className="flex justify-between bg-orange-50 px-4 py-2 rounded-full">
                  <span>Status</span>
                  <span className="bg-green-200 text-green-800 px-3 rounded-full text-xs font-bold">
                    Aktif
                  </span>
                </div>
              </div>
            </div>

            {/* Tentang OSIS */}
            <div className="bg-white rounded-2xl border-2 border-blue-400 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Info size={20} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tentang OSIS
                </h3>
              </div>

              <p className="text-gray-800 leading-relaxed mb-6">
                <strong>Organisasi Siswa Intra Sekolah (OSIS)</strong> adalah
                organisasi resmi di sekolah yang menjadi wadah bagi siswa untuk
                mengembangkan diri, berorganisasi, dan berkontribusi untuk
                kemajuan sekolah.
              </p>

              <p className="text-gray-800 leading-relaxed">
                Ketua OSIS memiliki peran penting dalam memimpin organisasi,
                mengkoordinasikan program kerja, dan menjadi jembatan komunikasi
                antara siswa dengan pihak sekolah.
              </p>
            </div>
          </div>

          {/* Informasi Penting */}
          <div className="bg-blue-50 border border-blue-300 rounded-xl p-5">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-600" />
              <div>
                <h4 className="font-bold text-blue-800 mb-2">
                  Hal Penting yang Perlu Diperhatikan
                </h4>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                  <li>Setiap siswa hanya dapat memilih SATU KALI</li>
                  <li>Pilihan yang sudah dikonfirmasi TIDAK DAPAT DIUBAH</li>
                  <li>Voting hanya sesuai jadwal</li>
                  <li>Gunakan hak pilih dengan bijak</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
