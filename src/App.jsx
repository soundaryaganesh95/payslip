import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PayslipPage from './pages/PayslipPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>

      {/* Default first page → HOMEPAGE */}
      <Route path="/" element={<HomePage />} />

      {/* Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Home Route */}
      <Route path="/home" element={<HomePage />} />

      {/* Payslip Page */}
      <Route path="/payslip" element={<PayslipPage />} />

    </Routes>
  );
}

export default App;
