import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import App from './App'
import './index.css'
//import Dashboard from "./pages/admin/dashboard.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
