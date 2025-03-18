import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";

const Camera = () => {
    const videoRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((err) => {
                    console.error("Error accessing the camera: ", err);
                });
        }
    }, [isOpen]);

    return (
        <>
            {/* Toggle Button */}
            <button className="camera-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close Camera" : "Open Camera"}
            </button>

            {/* Camera Modal */}
            {isOpen && (
                <div className="camera-modal">
                    <div className="camera-header">
                        <h2 className="camera-title">Live Camera</h2>
                        <button className="camera-close-btn" onClick={() => setIsOpen(false)}>✖</button>
                    </div>
                    <video ref={videoRef} autoPlay playsInline className="camera-video"></video>
                </div>
            )}
        </>
    );
};

export default Camera;
