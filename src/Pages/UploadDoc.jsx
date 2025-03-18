import FileUpload from "../Modules/FileUpload/FileUpload";
import { useEffect, useState } from "react";
import Navbar from "../Modules/Navbar/Navbar";


const UploadDoc = () => {
    const [selectedLoan, setSelectedLoan] = useState("");

    useEffect(() => {
        // Retrieve selected loan from localStorage
        const loan = localStorage.getItem("selectedLoan");
        if (loan) {
            setSelectedLoan(loan);
        }
    }, []);

    return (
        <div className="UploadDoc-Main page-margin">
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