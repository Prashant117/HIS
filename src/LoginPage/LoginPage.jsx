// src/LoginPage.jsx
import React from 'react';
import bgImage from "../assets/background_login.jpg"; 
import emidasLogo from '../assets/emidasLogoShort.png';

export default function LoginPage({
  doctorNumber,
  setDoctorNumber,
  password,
  setPassword,
  onLogin,
  error,
}) {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md animate-fade-in-up">
          <h1 className="text-3xl font-bold text-center mb-2">
          <img src={emidasLogo} alt="logo" className="w-8 h-8 inline-block mr-4" />
            <span className="text-green-600">E</span>Midas
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Enter your email address and password to access Doctor panel.
          </p>

          <form className="space-y-4" onSubmit={onLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Doctor Number
              </label>
              <input
                type="text"
                value={doctorNumber}
                onChange={(e) => setDoctorNumber(e.target.value)}
                placeholder="Enter your doctor number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition-all"
            >
              Log In
            </button>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
              Forgot your password?
            </a>
          </div>

          <footer className="mt-6 text-center text-xs text-gray-400">
            2024 – 2025 © Hospital Management System
          </footer>
        </div>
      </div>
    </div>
  );
}
