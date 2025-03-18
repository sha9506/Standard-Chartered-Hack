import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from '../../Assets/logo.png';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

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
                        <img className="logo-image" src={logo} alt="logo" />
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
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;