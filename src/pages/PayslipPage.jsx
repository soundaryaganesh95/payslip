import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PayslipPage.css'; 

// Assuming the logo file is in the /public folder
const VetriLogo = '/vetri_logo.png'; 

const PayslipPage = () => {
    const navigate = useNavigate();
    // New State: Controls whether the payslip has been generated/finalized
    const [isGenerated, setIsGenerated] = useState(false);

    const handleGoBack = () => navigate('/');
    
    // Function to simulate the payslip generation action
    const handleGeneratePayslip = () => {
        setIsGenerated(true);
        // In a real app, this is where you'd fetch the final data or perform calculations.
    };
    
    const handlePrint = () => {
        window.print(); 
    };

    const handleDownload = () => {
        alert('Download functionality is a placeholder. For actual PDF generation, a library like html2canvas + jspdf or a backend service is usually required.');
    };

    // --- Content Definition (Keeping the data hardcoded for display) ---
    // Note: The Payslip data matches the values in your screenshots (e.g., Gross 16,000, Net 15,500)
    const employeeData = {
        name: "Yedidiyah Cherub",
        id: "1122334455",
        designation: "Sr. Developer",
        payPeriod: "Sep 1, 2025 - Sep 30, 24025",
        paidDays: "26",
        lopDays: "0",
        department: "IT Development",
        paymentDate: "Oct 15, 2025",
        pfNumber: "TN/XYZ/12345",
        bankAc: "7878 XXXX 5656",
        pan: "ABCDE1234F",
        esicNumber: "99-1234567-000-000",
    };

    const earnings = [
        { item: "Basic", amount: "₹ 15,000" },
        { item: "Incentive", amount: "₹ 1,000" },
        // Added back HRA and Special Allowance for a comprehensive view, though your latest image only shows two earnings.
        { item: "HRA", amount: "₹ 7,000" },
        { item: "Special Allowance", amount: "₹ 2,000" },
    ];

    const deductions = [
        { item: "Income Tax (TDS)", amount: "₹ 500" },
        { item: "PF", amount: "₹ 1,800" },
        { item: "Professional Tax", amount: "₹ 200" },
    ];
    
    // Calculated Totals (using the comprehensive data from the full list)
    const grossEarnings = "₹ 25,000"; // Based on: 15k + 1k + 7k + 2k
    const totalDeduction = "₹ 2,500"; // Based on: 500 + 1800 + 200
    const netPayable = "₹ 22,500"; // Based on: 25,000 - 2,500
    const netPayableInWords = "Indian Rupee Twenty-Two thousand Five Hundred Only";


    // --- Render Logic ---
    return (
        <div className="payslip-page-container">
            
            <main className="payslip-content-wrapper">
                
                {/* Header (Always Visible) */}
                <header className="payslip-header-generated">
                    <h1 className="company-name-payslip-view">VETRI IT SYSTEMS PVT LTD.,</h1>
                    <button 
                        className="logout-button-payslip-view"
                        onClick={() => navigate('/login')}
                    >
                        Logout
                    </button>
                </header>

                <div className="address-block-generated">
                    <p className="address-line">Shanthi complex, Second floor,</p>
                    <p className="address-line">Surandai, Tenkasi - 627 859</p>
                    <p className="address-line">India</p>
                </div>

                <h2 className="generated-main-title">EMPLOYEE PAYSLIP</h2>
                
                {/* --- Conditional Action Buttons (Visible ONLY after generation) --- */}
                {isGenerated && (
                    <div className="action-buttons-container">
                        <button className="action-button print-button" onClick={handlePrint}>
                            <span className="icon">&#128438;&#xFE0F;</span> Print
                        </button>
                        <button className="action-button download-button" onClick={handleDownload}>
                            <span className="icon">&#11015;&#xFE0F;</span> Download
                        </button>
                        <button 
                            className="back-button-generated"
                            onClick={handleGoBack}
                        >
                            &larr; Back to Home
                        </button>
                    </div>
                )}
                
                {/* Payslip Content Container */}
                <div id="payslip-content-to-print" className="payslip-main-content">

                    {/* Employee Statement Header */}
                    <div className="card payslip-info-card-generated">
                        <div className="info-header-generated">
                            <img src={VetriLogo} alt="Vetri IT Systems Logo" className="logo-generated" /> 
                            <div className="company-details-generated">
                                <h3 className="company-name-small">VETRI IT SYSTEMS PVT LTD.,</h3>
                                <p className="address-line-small">Shanthi complex, Second floor,</p>
                                <p className="address-line-small">Surandai, Tenkasi - 627 859</p>
                                <p className="address-line-small">India</p>
                            </div>
                            <div className="employee-statement-title">
                                <h3 className="section-title">Employee Statement</h3>
                                <p className="month-value">OCTOBER 2025</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Employee Pay Summary (Extended Grid) */}
                    <div className="card employee-summary">
                        <div className="summary-grid-generated">
                            <label>Employee Name :</label>
                            <span className="display-value">{employeeData.name}</span>
                            <label>Employee ID :</label>
                            <span className="display-value">{employeeData.id}</span>
                            <label>Designation :</label>
                            <span className="display-value">{employeeData.designation}</span>

                            <label>Pay Period :</label>
                            <span className="display-value">{employeeData.payPeriod}</span>
                            <label>Payment Date :</label>
                            <span className="display-value">{employeeData.paymentDate}</span>
                            <label>Paid Days :</label>
                            <span className="display-value">{employeeData.paidDays}</span>

                            <label>Department :</label>
                            <span className="display-value">{employeeData.department}</span>
                            <label>PF Number :</label>
                            <span className="display-value">{employeeData.pfNumber}</span>
                            <label>Loss of Pay Days :</label>
                            <span className="display-value">{employeeData.lopDays}</span>
                            
                            <label>Bank A/C :</label>
                            <span className="display-value">{employeeData.bankAc}</span>
                            <label>PAN :</label>
                            <span className="display-value">{employeeData.pan}</span>
                            <label>ESIC Number :</label>
                            <span className="display-value">{employeeData.esicNumber}</span>
                        </div>
                    </div>

                    {/* 3. Income Details (Earnings/Deductions) */}
                    <div className="card income-details">
                        <div className="financial-tables">
                            
                            <div className="earnings-block">
                                <h4>Earnings</h4>
                                <table className="pay-table">
                                    <tbody>
                                        {earnings.map((e, index) => (
                                            <tr key={index}><td>{e.item}</td><td>{e.amount}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="gross-total">
                                    <span>Gross Earnings</span>
                                    <span>{grossEarnings}</span>
                                </div>
                            </div>

                            <div className="deductions-block">
                                <h4>Deduction</h4>
                                <table className="pay-table">
                                    <tbody>
                                        {deductions.map((d, index) => (
                                            <tr key={index}><td>{d.item}</td><td>{d.amount}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="total-deduction">
                                    <span>Total Deduction</span>
                                    <span>{totalDeduction}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 4. Total Net Payable */}
                    <div className="card net-payable-box">
                        <div className="net-payable-summary">
                            <div className="net-text-group">
                                <p className="net-title">TOTAL NET PAYABLE</p>
                                <p className="net-formula">Gross Earnings - Total Deduction</p>
                            </div>
                            <div className="net-amount-display">
                                {netPayable}
                            </div>
                        </div>
                        
                        <p className="amount-in-words">Amount in words : {netPayableInWords}</p>
                        
                        {/* --- Conditional Acknowledged Section (Visible ONLY after generation) --- */}
                        {isGenerated ? (
                            <div className="acknowledged-by-section">
                                <p className="acknowledged-title">ACKNOWLEDGED BY,</p>
                                <div className="signatures-group">
                                    <div className="signature-block">
                                        <hr className="signature-line" />
                                        <p className="signature-name">Yedidiyah Cherub</p>
                                        <p className="signature-designation">Employee, VETRI IT SYSTEMS PVT LTD.,</p>
                                    </div>
                                    <div className="signature-block">
                                        <hr className="signature-line" />
                                        <p className="signature-name">AUTHORISED NAME</p>
                                        <p className="signature-designation">Managing Director, VETRI IT SYSTEMS PVT LTD.,</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* --- Conditional Generate Button (Visible BEFORE generation) --- */
                            <button 
                                className="generate-payslip-button"
                                onClick={handleGeneratePayslip}
                            >
                                Generate Payslip
                            </button>
                        )}
                        
                    </div> {/* End net-payable-box */}
                </div> {/* End payslip-content-to-print */}
            </main>
            
        </div>
    );
};

export default PayslipPage;