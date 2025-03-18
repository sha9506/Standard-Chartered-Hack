import {
    FaMoneyBillWave, FaHandHoldingUsd, FaRegCreditCard, FaPiggyBank,
    FaHome, FaTools, FaBuilding, FaIndustry,
    FaCar, FaGasPump, FaGraduationCap, FaBook,
    FaBalanceScale, FaLandmark, FaFileContract
} from "react-icons/fa";

const LoanDetails = {
    personalLoan: [
        { icon: <FaMoneyBillWave className="feature-section-icon" />, title: "Purpose", description: "Personal loans can be used for various financial needs, including travel, weddings, home renovations, or emergency medical expenses. They offer flexibility without requiring collateral." },
        { icon: <FaHandHoldingUsd className="feature-section-icon" />, title: "Loan Amount", description: "The loan amount ranges from ₹50,000 to ₹25,00,000, depending on the applicant's credit score, income, and repayment capacity." },
        { icon: <FaRegCreditCard className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment terms range from 12 to 60 months, offering manageable EMI options that can be customized according to your financial stability." },
        { icon: <FaPiggyBank className="feature-section-icon" />, title: "Eligibility", description: "Loan eligibility is determined by factors such as monthly income, credit score, employment type (salaried or self-employed), and previous repayment history." }
    ],
    homeLoan: [
        { icon: <FaHome className="feature-section-icon" />, title: "Purpose", description: "Home loans are designed for purchasing a new house, constructing a home, or renovating an existing property. They provide long-term financing with lower interest rates." },
        { icon: <FaTools className="feature-section-icon" />, title: "Loan Amount", description: "Eligible borrowers can avail home loans ranging from ₹5,00,000 to ₹10 Cr, depending on income, property value, and lender policies." },
        { icon: <FaBuilding className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment tenure varies from 10 to 30 years, allowing homebuyers to structure EMIs according to their affordability and financial planning." },
        { icon: <FaIndustry className="feature-section-icon" />, title: "Eligibility", description: "Applicants must have stable employment, a good credit score, and submit property-related documents to be eligible for a home loan." }
    ],
    businessLoan: [
        { icon: <FaBuilding className="feature-section-icon" />, title: "Purpose", description: "Business loans provide financial support for expanding a business, purchasing new equipment, hiring employees, or managing operational expenses." },
        { icon: <FaIndustry className="feature-section-icon" />, title: "Loan Amount", description: "Business owners can avail loans ranging from ₹1,00,000 to ₹5 Cr, based on their business turnover, profitability, and creditworthiness." },
        { icon: <FaRegCreditCard className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment terms range from 12 to 84 months, with flexible EMI options to suit different business cash flow cycles." },
        { icon: <FaBalanceScale className="feature-section-icon" />, title: "Eligibility", description: "Eligibility is based on business turnover, tax filings, and financial health. Applicants need to submit GST registration, company registration, and bank statements." }
    ],
    carLoan: [
        { icon: <FaCar className="feature-section-icon" />, title: "Purpose", description: "Car loans help individuals purchase new or used vehicles without financial strain, offering competitive interest rates and flexible repayment terms." },
        { icon: <FaGasPump className="feature-section-icon" />, title: "Loan Amount", description: "Loan amounts range from ₹1,00,000 to ₹1 Cr, based on the car model, applicant's income, and credit score." },
        { icon: <FaPiggyBank className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment periods vary between 12 and 84 months, making it easy for borrowers to choose an EMI plan that suits their budget." },
        { icon: <FaMoneyBillWave className="feature-section-icon" />, title: "Eligibility", description: "Eligibility depends on income level, credit score, and car valuation. Both salaried and self-employed individuals can apply for a car loan." }
    ],
    educationLoan: [
        { icon: <FaGraduationCap className="feature-section-icon" />, title: "Purpose", description: "Education loans provide financial assistance for students pursuing higher education in India or abroad, covering tuition fees, living expenses, and study materials." },
        { icon: <FaBook className="feature-section-icon" />, title: "Loan Amount", description: "Students can avail loans ranging from ₹50,000 to ₹50,00,000, depending on the course, university, and co-applicant's financial strength." },
        { icon: <FaRegCreditCard className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment tenure extends from 5 to 15 years, with a moratorium period until course completion and job acquisition." },
        { icon: <FaHandHoldingUsd className="feature-section-icon" />, title: "Eligibility", description: "Eligibility requires proof of admission, a co-applicant’s financial stability, and necessary KYC documents such as Aadhaar, PAN, and bank statements." }
    ],
    loanAgainstProperty: [
        { icon: <FaLandmark className="feature-section-icon" />, title: "Purpose", description: "A Loan Against Property (LAP) allows individuals to leverage their real estate assets to secure substantial funds for business, education, or medical needs." },
        { icon: <FaFileContract className="feature-section-icon" />, title: "Loan Amount", description: "Loan amounts range from ₹5,00,000 to ₹10 Cr, depending on property valuation and applicant’s income." },
        { icon: <FaHandHoldingUsd className="feature-section-icon" />, title: "Repayment Tenure", description: "Repayment tenures vary between 10 and 20 years, with structured EMIs ensuring manageable repayments." },
        { icon: <FaBuilding className="feature-section-icon" />, title: "Eligibility", description: "Applicants must own a property and have a stable income with a good credit history. Property documents and income proofs are required." }
    ]
};

export default LoanDetails;
