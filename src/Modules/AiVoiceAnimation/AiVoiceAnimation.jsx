import React, { useEffect, useRef, useState } from "react";
import "./AiVoiceAnimation.css";

const AiVoiceAnimation = () => {
    const aiRef = useRef(null);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!navigator.mediaDevices?.getUserMedia) {
            alert("Your browser does not support getUserMedia!");
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioCtx.createMediaStreamSource(stream);
                const analyser = audioCtx.createAnalyser();

                analyser.fftSize = 256;
                source.connect(analyser);

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                function animate() {
                    requestAnimationFrame(animate);
                    analyser.getByteFrequencyData(dataArray);

                    let sum = dataArray.reduce((a, b) => a + b, 0);
                    let average = sum / dataArray.length;
                    let newScale = Math.max(0.1, Math.min(2, average / 128));

                    const minScale = 1 - 0.05 * newScale;
                    const maxScale = 1 + 0.1 * newScale;

                    if (aiRef.current) {
                        aiRef.current.style.setProperty("--min-scale", minScale.toFixed(2));
                        aiRef.current.style.setProperty("--max-scale", maxScale.toFixed(2));
                        aiRef.current.classList.add("ai-voice-breathing");
                    }
                }

                animate();
                setIsListening(true);
            })
            .catch((err) => {
                console.error("Error accessing microphone:", err);
                alert("Microphone access denied or an error occurred.");
            });

        return () => setIsListening(false);
    }, []);

    return (
        <div className="ai-voice" ref={aiRef}>
            <div className="ai-voice-container">
                <div className="ai-voice-c ai-voice-c4"></div>
                <div className="ai-voice-c ai-voice-c1"></div>
                <div className="ai-voice-c ai-voice-c2"></div>
                <div className="ai-voice-c ai-voice-c3"></div>
                <div className="ai-voice-rings">
                    <div className="ai-voice-rings"></div>
                </div>
            </div>
            <div className="ai-voice-glass"></div>
        </div>
    );
};

export default AiVoiceAnimation;