import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  User,
  LogOut,
  CheckCircle,
  Info,
  Users,
  Vote,
} from 'lucide-react'

export default function VotingSuccess() {
  const navigate = useNavigate()

  const [hasVoted, setHasVoted] = useState<boolean>(false)

  // ===== AMBIL STATUS VOTING BIAR NEMPEL TERUS =====
  useEffect(() => {
    const voted = localStorage.getItem('hasVoted')
    if (voted === 'true') {
      setHasVoted(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= NAVBAR ================= */}
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

      {/* ================= NAV TABS ================= */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => navigate('/user/dashboard')}
              className="flex items-center gap-2 px-4 py-3 text-gray-500 hover:text-orange-500"
            >
              <Info className="w-5 h-5" />
              Informasi
            </button>

            <button
              onClick={() => navigate('/user/voting')}
              className="flex items-center gap-2 px-4 py-3 text-gray-500 hover:text-orange-500"
            >
              <Users className="w-5 h-5" />
              Kandidat
            </button>

            <button
              onClick={() => navigate('/user/votingSuccess')}
              className="flex items-center gap-2 px-4 py-3 text-orange-500 border-b-2 border-orange-500 font-semibold"
            >
              <Vote className="w-5 h-5" />
              Voting
              {hasVoted && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS BANNER ================= */}
      {hasVoted && (
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Anda sudah melakukan voting. Terima kasih atas partisipasi Anda!
          </div>
        </div>
      )}

      {/* ================= SUCCESS CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 p-6 rounded-full">
                <CheckCircle className="w-24 h-24 text-green-500" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Anda Sudah Melakukan Voting
              </h2>
              <p className="text-gray-600 text-lg">
                Terima kasih atas partisipasi Anda dalam pemilihan Ketua OSIS.
                Suara Anda telah berhasil dicatat dan tersimpan dengan aman.
              </p>
            </div>

            <div className="bg-green-50 border border-green-300 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <p className="text-sm text-green-800">
                Akun Anda telah terkunci secara otomatis setelah voting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
