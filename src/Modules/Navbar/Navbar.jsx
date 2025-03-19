import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../Assets/logo.png';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);

    // Preload the logo image
    useEffect(() => {
        const img = new Image();
        img.src = logo;
        img.onload = () => setIsLogoLoaded(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >= 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navigation-wrap bg-light ${scroll ? "scroll-on" : "start-style"}`}>
            <div className="container">
                <nav className="navbar">
                    <a className="navbar-brand" href="./">
                        <div className="logo-placeholder"></div>
                        <img 
                            className={`logo-image ${!isLogoLoaded ? 'loading' : ''}`} 
                            src={logo} 
                            alt="logo"
                            onLoad={() => setIsLogoLoaded(true)}
                        />
                    </a>
                    <div className="collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="./">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./loanOption">Loan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./loanOption?a=b">Loan Type</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;