import FileUpload from "../Modules/FileUpload/FileUpload";
import Navbar from "../Modules/Navbar"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const UploadDoc = () => {
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
        <div className="UploadDoc-Main">
            <Navbar />
            <div className="voice-Main-Head">
                The loan you have selected is
                <span className="loan-selected-green"> {selectedLoan || "N/A"}</span>
            </div>
            <div className="UploadDoc-Main-text">Upload your documents</div>
            <FileUpload />
        </div>
    )
}

export default UploadDoc;