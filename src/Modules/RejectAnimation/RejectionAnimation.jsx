import React from "react";
import "./RejectionAnimation.css";

const RejectionAnimation = () => {
    return (
        <div className="rejection-container">
            <div className="rejection">
                {[...Array(6)].map((_, index) => (
                    <svg
                        key={index}
                        className="confetti"
                        height="19"
                        viewBox="0 0 19 19"
                        width="19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                            fill="#D10037"
                        />
                    </svg>
                ))}

                <svg
                    className="rejection__cross"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 12L36 36M36 12L12 36"
                        stroke="white"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </svg>

                <svg
                    className="rejection__back"
                    viewBox="0 0 120 115"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z"
                        fill="#D10037"
                    />
                </svg>
            </div>
            <p className="error-text">Your Loan is Rejected</p>
        </div>
    );
};

export default RejectionAnimation;
