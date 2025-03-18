import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RejectionAnimation from "../Modules/RejectAnimation/RejectionAnimation";
import CheckmarkAnimation from "../Modules/SuccessAnimation/CheckmarkAnimation";
import Navbar from "../Modules/Navbar/Navbar";
import "./Status.css";

const Status = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status"); // Get the `status` from URL
    const applicationId = queryParams.get("id") || "default";

    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch report data from API
        const fetchReport = async () => {
            try {
                setLoading(true);
                // Replace with your actual API endpoint
                const response = await fetch(`https://ai-for-loan-manager.onrender.com/api/report`);
                console.log(response);
                if (!response.ok) {
                    throw new Error(`API responded with status: ${response.status}`);
                }

                const data = await response.json();
                setReport(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching report:", err);
                setError(err.message);

                // For demo purposes - remove in production
                // Using sample data when API fails
                setReport({
                    "report_date": "2025-03-17",
                    "applicant": {
                        "name": "Unknown",
                        "date_of_birth": "1992-07-15",
                        "gender": "Male"
                    },
                    "loan_details": {
                        "loan_amount": "Rs10,00,000",
                        "loan_purpose": "Purchase of a New Car",
                        "loan_term": "5 years",
                        "interest_rate": "9.2%",
                        "estimated_emi": "₹20,855.56"
                    },
                    "financial_overview": {
                        "monthly_income": "Rs1,50,000",
                        "monthly_expenses": "Rs50,000",
                        "credit_score": 620
                    },
                    "eligibility_assessment": {
                        "overall_status": "REJECTED_WITH_CONDITIONS",
                        "key_factors": [
                            {
                                "factor_name": "Credit Score",
                                "value": 620,
                                "threshold": 700,
                                "status": "FAIL",
                                "description": "Credit score is a measure of creditworthiness based on credit history."
                            },
                            {
                                "factor_name": "Income Level",
                                "value": "₹150,000.00",
                                "threshold": "₹50,000.00",
                                "status": "PASS",
                                "description": "Monthly income should be sufficient to cover loan payments."
                            },
                            {
                                "factor_name": "Debt-to-Income Ratio",
                                "value": "0.33",
                                "threshold": "0.5",
                                "status": "PASS",
                                "description": "The ratio of monthly expenses to income should be below the threshold."
                            },
                            {
                                "factor_name": "Employment Stability",
                                "value": "8 years",
                                "threshold": "2 years",
                                "status": "PASS",
                                "description": "Stable employment history is required for loan approval."
                            },
                            {
                                "factor_name": "Loan-to-Value Ratio",
                                "value": "1.00",
                                "threshold": "0.8",
                                "status": "FAIL",
                                "description": "The ratio of loan amount to asset value should be below the threshold."
                            }
                        ],
                        "detailed_factors": [
                            "Credit score (620) below minimum requirement (700)",
                            "Loan amount too high relative to property value"
                        ],
                        "recommendations": [
                            "Work on improving your credit score",
                            "Consider a smaller loan amount or providing additional collateral"
                        ]
                    },
                    "conclusion": {
                        "is_approved": false,
                        "approval_type": "REJECTED_WITH_CONDITIONS",
                        "next_steps": "Please address the issues mentioned in the recommendations"
                    }
                });
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [applicationId]);

    const getStatusClass = (status) => {
        switch (status) {
            case "APPROVED": return "status-approved";
            case "APPROVED_WITH_CONDITIONS": return "status-approved-conditions";
            case "REJECTED": return "status-rejected";
            case "REJECTED_WITH_CONDITIONS": return "status-rejected-conditions";
            default: return "status-pending";
        }
    };

    const getStatusDisplay = (status) => {
        switch (status) {
            case "APPROVED": return "Approved";
            case "APPROVED_WITH_CONDITIONS": return "Conditionally Approved";
            case "REJECTED": return "Rejected";
            case "REJECTED_WITH_CONDITIONS": return "Rejected with Conditions";
            default: return "Pending Review";
        }
    };

    const getFactorIcon = (status) => {
        return status === "PASS" ? "✓" : "✗";
    };

    return (
        <div className="status-page">
            <Navbar />

            <div className="status-container">
                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading your loan application report...</p>
                    </div>
                ) : error && !report ? (
                    <div className="error-message">
                        <h3>Error Loading Report</h3>
                        <p>{error}</p>
                    </div>
                ) : report && (
                    <>
                        <div className="report-header">
                            <div className="report-date">
                                Report Date: {report.report_date}
                            </div>
                            <h1>Loan Application Report</h1>

                            {/* Highlighted Status Banner */}
                            <div className={`status-banner ${getStatusClass(report.eligibility_assessment.overall_status)}`}>
                                <h2>
                                    {report.conclusion.is_approved ?
                                        <CheckmarkAnimation size="small" /> :
                                        <RejectionAnimation size="small" />
                                    }
                                    Status: {getStatusDisplay(report.eligibility_assessment.overall_status)}
                                </h2>
                            </div>
                        </div>

                        <div className="report-content">
                            {/* Applicant Section */}
                            <section className="report-section">
                                <h3>Applicant Information</h3>
                                <div className="info-grid">
                                    <div className="info-item">
                                        <span className="info-label">Name</span>
                                        <span className="info-value">{report.applicant.name}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Date of Birth</span>
                                        <span className="info-value">{report.applicant.date_of_birth}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Gender</span>
                                        <span className="info-value">{report.applicant.gender}</span>
                                    </div>
                                </div>
                            </section>

                            {/* Loan Details Section */}
                            <section className="report-section">
                                <h3>Loan Details</h3>
                                <div className="info-grid">
                                    {Object.entries(report.loan_details).map(([key, value]) => (
                                        <div className="info-item" key={key}>
                                            <span className="info-label">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                            <span className="info-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Financial Overview Section */}
                            <section className="report-section">
                                <h3>Financial Overview</h3>
                                <div className="info-grid">
                                    {Object.entries(report.financial_overview).map(([key, value]) => (
                                        <div className="info-item" key={key}>
                                            <span className="info-label">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                            <span className="info-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Eligibility Assessment Section */}
                            <section className="report-section">
                                <h3>Eligibility Assessment</h3>

                                <div className="factors-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Factor</th>
                                                <th>Your Value</th>
                                                <th>Required</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {report.eligibility_assessment.key_factors.map((factor, index) => (
                                                <tr key={index} className={factor.status === "PASS" ? "factor-pass" : "factor-fail"}>
                                                    <td>
                                                        <div className="factor-name">{factor.factor_name}</div>
                                                        <div className="factor-description">{factor.description}</div>
                                                    </td>
                                                    <td>{factor.value}</td>
                                                    <td>{factor.threshold}</td>
                                                    <td>
                                                        <span className={`factor-status ${factor.status.toLowerCase()}`}>
                                                            {getFactorIcon(factor.status)} {factor.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="detailed-factors">
                                    <h4>Issues Identified:</h4>
                                    <ul>
                                        {report.eligibility_assessment.detailed_factors.map((factor, index) => (
                                            <li key={index}>{factor}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="recommendations">
                                    <h4>Recommendations:</h4>
                                    <ul>
                                        {report.eligibility_assessment.recommendations.map((recommendation, index) => (
                                            <li key={index}>{recommendation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Conclusion Section */}
                            <section className="report-section conclusion-section">
                                <h3>Conclusion</h3>
                                <p className="next-steps">{report.conclusion.next_steps}</p>
                            </section>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Status;