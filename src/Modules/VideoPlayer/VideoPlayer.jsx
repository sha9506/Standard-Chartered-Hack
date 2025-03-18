import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
    const handleSkip = () => {
        console.log("Skip");

        const loanCard = document.getElementById("loanCard");
        if (loanCard) {
            loanCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="video-player-container">
            {/* Embed YouTube Video */}
            <iframe
                className="video-player-video"
                src="https://www.youtube.com/embed/7W6aMv3jj9c?si=GH-g7cncBLOtkdek"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className="video-player-controls">
                <button className="video-player-skip-button" onClick={handleSkip}>Skip</button>
            </div>
        </div>
    );
};

export default VideoPlayer;