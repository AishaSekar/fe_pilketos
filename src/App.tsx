import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard'
import DataPemilih from './pages/admin/dataPemilih'
import Kandidat from './pages/admin/kandidat'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/data-pemilih" element={<DataPemilih />} />
      <Route path="/kandidat" element={<Kandidat/>} />
    </Routes>
  )
}
