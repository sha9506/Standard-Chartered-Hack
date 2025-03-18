import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";

const Camera = () => {
    const videoRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            startCamera();
            registerFace(); // Call API when camera opens
        }
    }, [isOpen]);

    const startCamera = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
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
    };

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
