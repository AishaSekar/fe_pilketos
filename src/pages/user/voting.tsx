import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  User,
  LogOut,
  CheckCircle,
  Info,
  Users,
  Vote,
  Lightbulb,
} from 'lucide-react'

export default function VotingOSIS() {
  const navigate = useNavigate()

  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  // ===== AMBIL STATUS VOTING (BIAR NEMPEL TERUS) =====
  useEffect(() => {
    const voted = localStorage.getItem('hasVoted')
    const candidate = localStorage.getItem('selectedCandidate')

    if (voted === 'true') {
      setHasVoted(true)
      setSelectedCandidate(candidate ? Number(candidate) : null)
    }
  }, [])

  const candidates = [
    {
      id: 1,
      name: 'Ahmad Pratama',
      number: 1,
      visi:
        'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.',
      ],
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      number: 2,
      visi:
        'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.',
      ],
    },
    {
      id: 3,
      name: 'Budi Santoso',
      number: 3,
      visi:
        'Membangun OSIS yang inovatif, kolaboratif, dan berintegritas untuk kemajuan sekolah.',
      misi: [
        'Menjadi penggerak kegiatan positif dan berprestasi siswa.',
        'Membangun solidaritas dan karakter yang berakhlak.',
      ],
    },
  ]

  const handleVote = (candidateId: number) => {
    setSelectedCandidate(candidateId)
    setHasVoted(true)

    localStorage.setItem('hasVoted', 'true')
    localStorage.setItem('selectedCandidate', String(candidateId))
  }

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

            <button className="flex items-center gap-2 px-4 py-3 text-orange-500 border-b-2 border-orange-500 font-semibold">
              <Users className="w-5 h-5" />
              Kandidat
            </button>

            {/* ==== FIX DI SINI (BISA DIKLIK KALO SUDAH VOTING) ==== */}
            <button
              onClick={() => hasVoted && navigate('/user/votingSuccess')}
              className={`flex items-center gap-2 px-4 py-3 ${
                hasVoted
                  ? 'text-orange-500 border-b-2 border-orange-500 font-semibold cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <Vote className="w-5 h-5" />
              Voting
              {hasVoted && <CheckCircle className="w-5 h-5 text-green-500" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS ================= */}
      {hasVoted && (
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Anda sudah melakukan voting.
          </div>
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Kandidat Ketua OSIS
          </h2>
          <p className="text-gray-600">
            Pelajari profil, visi, dan misi setiap kandidat dengan seksama
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition"
            >
              <div className="absolute -top-4 -right-4 bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {candidate.number}
              </div>

              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-orange-300 to-yellow-400 p-1 rounded-full">
                  <div className="bg-white p-4 rounded-full">
                    <User className="w-16 h-16 text-orange-500" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 font-semibold">
                  Kandidat {candidate.number}
                </p>
                <h3 className="text-xl font-bold text-orange-500">
                  {candidate.name}
                </h3>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-orange-500 mb-2">Visi :</h4>
                <p className="text-sm text-gray-700">{candidate.visi}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-orange-500 mb-2">Misi :</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  {candidate.misi.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={() => handleVote(candidate.id)}
                disabled={hasVoted}
                className={`w-full py-3 rounded-full font-semibold transition ${
                  hasVoted && selectedCandidate === candidate.id
                    ? 'bg-green-500 text-white'
                    : hasVoted
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:from-orange-500 hover:to-yellow-500'
                }`}
              >
                {hasVoted && selectedCandidate === candidate.id
                  ? 'Terpilih ✓'
                  : 'Pilih Kandidat Ini'}
              </button>
            </div>
          ))}
        </div>

        {/* ================= TIPS (DI BAWAH KANDIDAT) ================= */}
        <div className="bg-blue-50 border border-blue-400 rounded-xl px-5 py-4 flex items-center gap-3">
          <Lightbulb className="text-blue-600" />
          <p className="text-sm text-blue-800">
            <strong>Tips:</strong> Bacalah visi dan misi setiap kandidat dengan
            teliti. Pilih kandidat yang paling sesuai dengan harapan Anda.
          </p>
        </div>
      </div>
    </div>
  )
}
