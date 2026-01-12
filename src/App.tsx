import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard'
import DataPemilih from './pages/admin/dataPemilih'
import Kandidat from './pages/admin/kandidat'
import Pengaturan from './pages/admin/pengaturan'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/data-pemilih" element={<DataPemilih />} />
      <Route path="/kandidat" element={<Kandidat/>} />
      <Route path="/pengaturan" element={<Pengaturan/>} />
    </Routes>
  )
}
