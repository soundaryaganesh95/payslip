import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import './LoginPage.jsx';
import './LoginPage.css';
// Assuming the logo is in the /public folder
const VetriLogo = '/vetri_logo.png'; 

const HomePage = () => {
    const navigate = useNavigate();

    const handleGeneratePayslip = () => {
        navigate('/payslip'); 
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="home-container">
            
            {/* --- HEADER SECTION: Dark Purple Background --- */}
            <div className="header-wrapper">
                <div className="header-content-wrapper">
                    <header className="header">
                        <div>
                            <h1 className="header-title">VETRI IT SYSTEMS</h1>
                            <p className="header-subtitle">-Employee Payslip-</p>
                        </div>
                        <div className="button-group">
                            <button 
                                className="generate-button" 
                                onClick={handleGeneratePayslip}
                            >
                                Generate Payslip
                            </button>
                            <button 
                                className="logout-button" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </header>
                    <hr className="separator" /> 
                </div>
            </div>
            {/* --- END HEADER AREA --- */}
            
            <div className="home-main-content">
                
                {/* Content Area Title (Green Block) */}
                <div className="content-area">
                    <h2 className="content-title">EMPLOYEE PAYSLIP GENERATOR</h2>
                </div>
                
                {/* Payslip Info Card (White Card) */}
                <div className="payslip-card">
                    
                    {/* MAIN FLEX CONTAINER: Logo/Address on Left, Date on Right */}
                    <div className="card-top-section">
                        
                        {/* LEFT SIDE: Wrapper for Logo and Company Address */}
                        <div className="logo-and-details-group">
                            <img src={VetriLogo} alt="Vetri Logo" className="logo" /> 
                            
                            {/* COMPANY DETAILS */}
                            <div className="company-details">
                                <p className="company-name">VETRI IT SYSTEMS PVT LTD.,</p>
                                <p className="address-line">Shanthi complex, Second floor,</p>
                                <p className="address-line">Surandai, Tenkasi - 627 859</p>
                                <p className="address-line">India</p>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Payslip Month */}
                        <div className="payslip-month-container">
                            <p className="payslip-month-label">Payslip for the Month</p>
                            <p className="payslip-month">OCTOBER 2025</p>
                        </div>

                    </div>
                    {/* --- END card-top-section --- */}
                    
                </div>
            </div>
        </div>
    );
};

export default HomePage;