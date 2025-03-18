import './Cards.css';
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Cards = () => {

    const navigate = useNavigate();

    // Function to handle card click and save to localStorage
    const handleCardClick = (loanType) => {
        localStorage.setItem("selectedLoan", loanType);
        navigate("/voice");
    };

    const selectedLoan = localStorage.getItem("selectedLoan");
    console.log(selectedLoan);

    return (
        <div className="feat bg-gray pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="section-head col-sm-12">
                        <h4><span>Choose your</span> Loan</h4>
                        <p>Choose the right loan that fits your needs and let our AI Branch Manager guide you through a smooth and hassle-free journey.</p>
                    </div>

                    {/** Loan Cards */}
                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Personal Loan")}>
                        <div className="item">
                            <span className="icon feature_box_col_one"><FaGlobe /></span>
                            <h6>Personal Loan</h6>
                            <p>Cover your personal expenses with ease...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Home Loan")}>
                        <div className="item">
                            <span className="icon feature_box_col_two"><FaAnchor /></span>
                            <h6>Home Loan</h6>
                            <p>Turn your dream home into reality...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Business Loan")}>
                        <div className="item">
                            <span className="icon feature_box_col_three"><FaHourglassHalf /></span>
                            <h6>Business Loan</h6>
                            <p>Fuel your business growth with instant funding...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Car Loan")}>
                        <div className="item">
                            <span className="icon feature_box_col_four"><FaDatabase /></span>
                            <h6>Car Loan</h6>
                            <p>Drive your dream car home with our flexible car loan options...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Education Loan")}>
                        <div className="item">
                            <span className="icon feature_box_col_five"><FaUpload /></span>
                            <h6>Education Loan</h6>
                            <p>Empower your future with hassle-free education financing...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" onClick={() => handleCardClick("Loan Against Property (LAP)")}>
                        <div className="item">
                            <span className="icon feature_box_col_six"><FaCamera /></span>
                            <h6>Loan Against Property (LAP)</h6>
                            <p>Leverage your property's value for large funding needs...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cards;
