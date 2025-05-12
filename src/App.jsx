import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard';

function LoginWrapper() {
  const navigate = useNavigate();
  const [doctorNumber, setDoctorNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (doctorNumber === 'doctor123' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try doctor123 / password');
    }
  };

  return (
    <LoginPage
      doctorNumber={doctorNumber}
      setDoctorNumber={setDoctorNumber}
      password={password}
      setPassword={setPassword}
      onLogin={handleLogin}
      error={error}
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginWrapper />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
