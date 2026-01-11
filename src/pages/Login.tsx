import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import '../index.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#F6AB36]">

      {/* Background Logo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-60 animate-bg"
        style={{
          backgroundImage: "url('../../public/images/Login bg.png')",
          backgroundSize: "95%",
        }}
      />

      {/* Container utama */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center">

        {/* KIRI (Welcome) */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-14 text-[#B45309]">
        </div>

        {/* KANAN (LOGIN) */}
        <div className="md:w-1/2 w-full flex items-center justify-center animate-fadeInUp">
          <div
            className="
              w-full max-w-md px-6 md:px-8 py-8
              bg-white/70 backdrop-blur-md
              rounded-xl shadow-xl
              text-black
              animate-login
            "
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Login
            </h1>

            {/* Username */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Username</label>
              <input
                type="text"
                placeholder="masukkan username"
                className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Password dengan show/hide */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="masukkan password"
                  className="w-full px-3 py-2 pr-10 rounded-md bg-white border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {/* Tombol toggle password - diperbaiki positioning */}
               
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Login
            </button>

            {/* Lupa password */}
            <p className="text-center mt-5 text-sm">
              Lupa password?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Reset password
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
