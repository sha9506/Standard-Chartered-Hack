import React, { useEffect, useRef } from "react";
import "./AiVoiceAnimation.css";

const AiVoiceAnimation = () => {
    const aiRef = useRef(null);

    useEffect(() => {
        // Initialize animation parameters
        const minBaseScale = 0.95;
        const maxBaseScale = 1.1;
        let animationFrameId;

        // Simulate the animation without microphone access
        const simulateAnimation = () => {
            // Generate a slight random variation to simulate natural sound patterns
            const randomFactor = Math.sin(Date.now() / 500) * 0.2 + 0.8;
            
            const minScale = minBaseScale * randomFactor;
            const maxScale = maxBaseScale * randomFactor;

            if (aiRef.current) {
                aiRef.current.style.setProperty("--min-scale", minScale.toFixed(2));
                aiRef.current.style.setProperty("--max-scale", maxScale.toFixed(2));
                aiRef.current.classList.add("ai-voice-breathing");
            }

            animationFrameId = requestAnimationFrame(simulateAnimation);
        };

        // Start simulation
        simulateAnimation();

        // Cleanup animation frame on unmount
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
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