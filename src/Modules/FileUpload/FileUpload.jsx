import React, { useState, useEffect } from "react";
import "./FileUpload.css";
import { UploadIcon, CloseIcon } from "./icons";
import LoanDoc from "../../DummyData/LoanDoc";
import { useNavigate } from "react-router-dom";

const allowedExtensions = ["png", "jpg", "gif", "pdf"];
const maxFileSize = 10 * 1024 * 1024; // 10MB

const UploadDocFileUpload = () => {
    const [files, setFiles] = useState({});
    const [documentList, setDocumentList] = useState([]);
    const navigate = useNavigate();

    function toCamelCase(str) {
        return str
            .toLowerCase() // Convert the string to lowercase
            .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase()); // Remove non-alphanumeric characters & capitalize next letter
    }

    useEffect(() => {
        // Fetch the selected loan type from local storage
        const selectedLoanType = toCamelCase(localStorage.getItem("selectedLoan"));

        if (selectedLoanType && LoanDoc[selectedLoanType]) {
            setDocumentList(LoanDoc[selectedLoanType]);

            // Initialize file state dynamically
            const initialFiles = LoanDoc[selectedLoanType].reduce((acc, doc) => {
                acc[doc.key] = null;
                return acc;
            }, {});
            setFiles(initialFiles);
        }
    }, []);

    const handleFileChange = (event, key) => {
        const file = event.target.files[0];

        if (file) {
            const fileSize = file.size;
            const fileExt = file.name.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExt)) {
                alert("Invalid file format. Only JPG, PNG, GIF, and PDF allowed.");
                return;
            }
            if (fileSize > maxFileSize) {
                alert("File is too large. Max 10 MB.");
                return;
            }

            setFiles((prev) => ({ ...prev, [key]: file }));
        }
    };

    const handleRemove = (key) => {
        setFiles((prev) => ({ ...prev, [key]: null }));
    };

    const formatFileName = (name) => {
        return name.length > 18
            ? `${name.substr(0, 9)}...${name.substr(name.length - 6)}`
            : name;
    };

    const handleSubmit = () => {
        // if (Object.values(files).includes(null)) {
        //     alert("Please upload all required documents.");
        //     return;
        // }
        console.log("Uploaded Files:", files);
        navigate('/status?status=success')
    };

    return (
        <div className="upload-doc-container">
            <p className="upload-doc-instructions">
                Only JPG, PNG, GIF, and PDF documents are supported. Max size: 10MB.
            </p>

            <ul className="upload-doc-file-list">
                {documentList.map(({ label, key }) => (
                    <li key={key} className={`upload-doc-file-item ${files[key] ? "uploaded" : ""}`}>
                        <div className="upload-doc-file-details">
                            <span className="upload-doc-icon">
                                <UploadIcon />
                            </span>
                            <div className="upload-doc-file-info">
                                <span className="upload-doc-file-name">
                                    {files[key] ? formatFileName(files[key].name) : label}
                                </span>
                                {files[key] && (
                                    <span className="upload-doc-file-size">
                                        {(files[key].size / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="upload-doc-file-actions">
                            <input
                                type="file"
                                id={key}
                                onChange={(e) => handleFileChange(e, key)}
                                hidden
                            />
                            {!files[key] ? (
                                <label htmlFor={key} className="upload-doc-upload-btn">
                                    Add File
                                </label>
                            ) : (
                                <button className="upload-doc-remove-btn" onClick={() => handleRemove(key)}>
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <button className="upload-doc-submit-btn" onClick={handleSubmit}>
                Continue
            </button>
        </div>
    );
};

export default UploadDocFileUpload;
