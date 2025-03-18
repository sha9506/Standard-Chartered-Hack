import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";

const Camera = () => {
    const videoRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const streamUrl = "http://127.0.0.1:5000/video_feed";

    useEffect(() => {
        if (isOpen) {
            registerFace(); // Call API when camera opens
        }
    }, [isOpen]);

    const registerFace = () => {
        const requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        fetch("http://127.0.0.1:5000/register_face", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log("Face Registered:", result))
            .catch((error) => console.error("API Error:", error));
    };

    return (
        <>
            <button className="camera-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close Camera" : "Open Camera"}
            </button>

            {isOpen && (
                <div className="camera-modal">
                    <div className="camera-header">
                        <h2 className="camera-title">Live Camera Stream</h2>
                        <button className="camera-close-btn" onClick={() => setIsOpen(false)}>✖</button>
                    </div>
                    {/* For MJPEG streams from Flask, we use an img tag instead of video */}
                    <img
                        src={streamUrl}
                        alt="Video Stream"
                        className="camera-video"
                    />
                </div>
            )}
        </>
    );
};

export default Camera;