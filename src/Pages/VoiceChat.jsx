import { useEffect, useState } from "react";
import FeatureSection from "../Modules/LoanFeatureSection/FeatureSection";
import { useNavigate } from "react-router-dom";
import Navbar from "../Modules/Navbar/Navbar";

const VoiceChat = () => {
    const navigate = useNavigate();
    const [selectedLoan, setSelectedLoan] = useState("");

    useEffect(() => {
        // Retrieve selected loan from localStorage
        const loan = localStorage.getItem("selectedLoan");
        if (loan) {
            setSelectedLoan(loan);
        }
    }, []);

    return (
        <div className="voice-Main page-margin">
            <Navbar />
            <div className="voice-Main-Head">
                The loan you have selected is
                <span className="loan-selected-green"> {selectedLoan || "N/A"}</span>
            </div>
            <div className="voice-Main-Head">Voice Chat</div>
            <div className="voice-Main-Head">
                <button className="voice-Main-Head-Button" onClick={() => { navigate('/chat') }}>Chat Now > </button>
            </div>
            <FeatureSection selectedLoan={selectedLoan} />
        </div>
    );
};

export default VoiceChat;
