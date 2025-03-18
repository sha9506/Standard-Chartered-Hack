import { useEffect, useState } from "react";
import FeatureSection from "../Modules/LoanFeatureSection/FeatureSection";
import Navbar from "../Modules/Navbar";
import { useNavigate } from "react-router-dom";

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
        <div className="voice-Main">
            <Navbar />
            <div className="voice-Main-Head">
                The loan you have selected is
                <span className="loan-selected-green"> {selectedLoan || "N/A"}</span>
            </div>
            <div className="voice-Main-Head">Voice Chat</div>
            <div className="voice-Main-Head">
                <button className="voice-Main-Head-Button" onClick={() => { navigate('/upload-doc') }}>Upload Doc > </button>
            </div>
            <FeatureSection selectedLoan={selectedLoan} />
        </div>
    );
};

export default VoiceChat;
