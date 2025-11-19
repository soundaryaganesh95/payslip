// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PayslipPage from './pages/PayslipPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>

      {/* Login Route */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />   {/* Default page */}

      {/* Home Route */}
      <Route path="/home" element={<HomePage />} />  {/* REQUIRED */}

      {/* Payslip Route */}
      <Route path="/payslip" element={<PayslipPage />} />

    </Routes>
  );
}

export default App;
