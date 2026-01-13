import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/dashboard";
import DataPemilih from "./pages/admin/dataPemilih";
import Kandidat from "./pages/admin/kandidat";
import Pengaturan from "./pages/admin/pengaturan";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/data-pemilih" element={<DataPemilih />} />
      <Route path="/admin/kandidat" element={<Kandidat />} />
      <Route path="/admin/pengaturan" element={<Pengaturan />} />
    </Routes>
  );
}
