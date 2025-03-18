import React, { useState, useEffect } from "react";
import "./VideoPopUp.css";

const loanVideos = {
    personalLoan: "https://www.youtube.com/embed/UK-ADURq_Kg",
    homeLoan: "https://www.youtube.com/embed/34lNTv1NdXY",
    businessLoan: "https://www.youtube.com/embed/OyIvOYoG1yM",
    carLoan: "https://www.youtube.com/embed/Rj2tl3vOXeU",
    educationLoan: "https://www.youtube.com/embed/FwmtfhqY-jk",
    loanAgainstProperty: "https://www.youtube.com/embed/oS3jLX8aQfE"
};

// Function to convert loan name to camelCase
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
}

const VideoPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState("");

    useEffect(() => {
        const loan = localStorage.getItem("selectedLoan");
        if (loan) {
            const camelCaseLoan = toCamelCase(loan); // Convert to camelCase
            if (loanVideos[camelCaseLoan]) {
                setSelectedLoan(loanVideos[camelCaseLoan]); // Get the correct video URL
            }
        }
    }, []);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            {/* Button to Open Video Popup */}
            <button className="VideoPopUp-open-button" onClick={handleOpen}>
                Watch The Video To Learn More >
            </button>

            {/* Video Modal */}
            {isOpen && selectedLoan && (
                <div className="VideoPopUp-modal">
                    <div className="VideoPopUp-content">
                        {/* Close Button */}
                        <button className="VideoPopUp-close-button" onClick={handleClose}>×</button>

                        {/* Embed YouTube Video */}
                        <iframe
                            className="VideoPopUp-video"
                            src={selectedLoan}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPopUp;
