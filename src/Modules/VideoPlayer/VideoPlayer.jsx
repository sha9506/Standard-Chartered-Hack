import React, { useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/6ulpIHkU_hw");
    const [skipClicked, setSkipClicked] = useState(false);

    const handleSkip = () => {
        if (!skipClicked) {
            // First click: Change video URL
            setVideoUrl("https://www.youtube.com/embed/rpE13kvlR1w");
            setSkipClicked(true);
        } else {
            // Second click: Scroll to loanCard
            const loanCard = document.getElementById("loanCard");
            if (loanCard) {
                loanCard.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    const handleHindi = () => {
        setVideoUrl("https://www.youtube.com/embed/ffK9HUUkzNM");
    };

    const handleTamil = () => {
        setVideoUrl("https://www.youtube.com/embed/dg5hfJG-B1Q");
    };

    const handleEnglish = () => {
        setVideoUrl("https://www.youtube.com/embed/6ulpIHkU_hw");
    };

    return (
        <div className="video-player-container">
            {/* Embed YouTube Video */}
            <iframe
                className="video-player-video"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className="video-player-controls">
                <button className="video-player-skip-button" onClick={handleHindi}>Hindi</button>
                <button className="video-player-skip-button" onClick={handleTamil}>Tamil</button>
                <button className="video-player-skip-button" onClick={handleEnglish}>English</button>
                <button className="video-player-skip-button" onClick={handleSkip}>Skip > </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
