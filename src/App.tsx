import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./pages/Login";

// ADMIN
import AdminDashboard from "./pages/admin/dashboard";
import DataPemilih from "./pages/admin/dataPemilih";
import Kandidat from "./pages/admin/kandidat";
import Pengaturan from "./pages/admin/pengaturan";

// USER
import UserDashboard from "./pages/user/dashboard";
import VotingKandidat from "./pages/user/voting";
import VotingSuccess from "./pages/user/votingSuccess";

/* ===== Layout Kosong (WAJIB untuk nested route) ===== */
const AdminLayout = () => <Outlet />;
const UserLayout = () => <Outlet />;

export default function App() {
  return (
    <Routes>
      {/* =================== */}
      {/* DEFAULT & LOGIN */}
      {/* =================== */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* =================== */}
      {/* ADMIN ROUTES */}
      {/* =================== */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="data-pemilih" element={<DataPemilih />} />
        <Route path="kandidat" element={<Kandidat />} />
        <Route path="pengaturan" element={<Pengaturan />} />
      </Route>

      {/* =================== */}
      {/* USER ROUTES */}
      {/* =================== */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Navigate to="/user/dashboard" replace />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="voting" element={<VotingKandidat />} />

        {/* ✅ CUMA INI YANG DIBENERIN */}
        <Route path="votingSuccess" element={<VotingSuccess />} />
      </Route>

      {/* =================== */}
      {/* FALLBACK */}
      {/* =================== */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
