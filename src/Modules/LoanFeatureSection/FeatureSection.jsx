import React, { useState } from "react";
import "./FeatureSection.css";
import { FaInstagram, FaRocket, FaMusic, FaHeart } from "react-icons/fa";
import AiVoiceAnimation from "../AiVoiceAnimation/AiVoiceAnimation";
import LoanDetails from "../../DummyData/LoanDetails";


const FeatureSection = ({ selectedLoan }) => {

    function toCamelCase(str) {
        return str
            .toLowerCase() // Convert the string to lowercase
            .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase()); // Remove non-alphanumeric characters & capitalize next letter
    }


    const loanDetails = LoanDetails[toCamelCase(selectedLoan)] ? LoanDetails[toCamelCase(selectedLoan)] : [];



    return (
        <section>
            {
                loanDetails.length > 0 ? <div className="feature-section-container">
                    {/* Left Section */}
                    <div className="feature-section-col feature-section-left feature-section-text">
                        <div>
                            {
                                loanDetails[0].icon
                            }
                            <h3>{loanDetails[0].title}</h3>
                            <p>
                                {loanDetails[0].description}
                            </p>
                        </div>
                        <div>
                            {
                                loanDetails[1].icon
                            }
                            <h3>{loanDetails[1].title}</h3>
                            <p>
                                {loanDetails[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Middle Section (Image) */}
                    <div className="feature-section-col feature-section-middle">
                        <div>
                            <AiVoiceAnimation />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="feature-section-col feature-section-right feature-section-text">
                        <div>
                            {
                                loanDetails[2].icon
                            }
                            <h3>{loanDetails[2].title}</h3>
                            <p>
                                {loanDetails[2].description}
                            </p>
                        </div>
                        <div>
                            {
                                loanDetails[3].icon
                            }
                            <h3>{loanDetails[3].title}</h3>
                            <p>
                                {loanDetails[3].description}
                            </p>
                        </div>
                    </div>
                </div> : null
            }

        </section>
    );
};

export default FeatureSection;