import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import './HomePage.jsx';


// Assuming the logo is in the /public folder
const VetriLogo = '/vetri_logo.png'; 
// Assuming the illustration is also in the /public folder
const LoginIllustration = '/login illustration.png'; 

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here.
        // For now, navigate to the HomePage on successful login.
          navigate('/home'); 
        //setPage('home');
    };

    return (
        <div className="login-container">
            <div className="login-left-panel">
                <div className="logo-section">
                    <img src={VetriLogo} alt="Vetri Logo" className="login-logo" />
                    <div className="title-group">
                        <h1 className="login-title">VETRI IT SYSTEMS</h1>
                        <p className="login-subtitle">-Employee Payslip-</p>
                    </div>
                </div>
                {/* Illustration goes here */}
                <img src={LoginIllustration} alt="Payroll Illustration" className="login-illustration" />
            </div>

            <div className="login-right-panel">
                <h2 className="welcome-header">Hello, Welcome Back!</h2>
                <p className="login-prompt">Login to continue</p>
                
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-group">
                        <i className="fas fa-user"></i> {/* Placeholder for icon */}
                        <input type="text" placeholder="Username/Email" required />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-lock"></i> {/* Placeholder for icon */}
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="options-group">
                        <label className="remember-me">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;