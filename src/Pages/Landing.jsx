import React, { useEffect, useState } from "react";
import Navbar from "../Modules/Navbar/Navbar";
import "./Landing.css";

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

    return (
        <div id="main" className={isLoading ? "is-loading" : ""}>
            <Navbar />
            <h1>Standard <span style={{ color: "#37D100" }}>Chartered</span> </h1>
        </div>
    );
};

export default Landing;
