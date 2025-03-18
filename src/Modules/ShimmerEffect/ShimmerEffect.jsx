import React from "react";
import "./ShimmerEffect.css";

const ShimmerEffect = () => {
    return (
        <div className="shimmer-container">
            {/* Logo */}
            <div className="logo shimmer"></div>

            {/* Title */}
            <h1 className="title">
                The loan you have selected is <span className="highlight">Business Loan</span>
            </h1>
            <p className="subtitle shimmer">Voice Chat</p>

            {/* Upload Button */}
            <button className="upload-button shimmer">Upload Doc &gt;</button>

            {/* Content Grid */}
            <div className="content-grid">
                {/* Left Section */}
                <div className="content-item">
                    <div className="icon shimmer"></div>
                    <h3>Purpose</h3>
                    <p>
                        Business loans provide financial support for expanding a business,
                        purchasing new equipment, hiring employees, or managing operational
                        expenses.
                    </p>
                </div>

                {/* Center Section (Shimmer Circle) */}
                <div className="content-item">
                    <div className="shimmer-circle shimmer"></div>
                </div>

                {/* Right Section */}
                <div className="content-item">
                    <div className="icon shimmer"></div>
                    <h3>Repayment Tenure</h3>
                    <p>
                        Repayment terms range from 12 to 84 months, with flexible EMI options to suit
                        different business cash flow cycles.
                    </p>
                </div>

                {/* Bottom Left Section */}
                <div className="content-item">
                    <div className="icon shimmer"></div>
                    <h3>Loan Amount</h3>
                    <p>
                        Business owners can avail loans ranging from ₹1,00,000 to ₹5 Cr, based on their
                        business turnover, profitability, and creditworthiness.
                    </p>
                </div>

                {/* Bottom Right Section */}
                <div className="content-item">
                    <div className="icon shimmer"></div>
                    <h3>Eligibility</h3>
                    <p>
                        Eligibility is based on business turnover, tax filings, and financial health.
                        Applicants need to submit GST registration, company registration, and bank
                        statements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShimmerEffect;
