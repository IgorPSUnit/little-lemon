import React from "react";
import logo from "./Little Lemon logo white.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Logo do footer" />
            </div>
            <div className="footer-content">
                <div className="footer-nav-links">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Online Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>123 Main Street</p>
                    <p>Anytown, USA 12345</p>
                    <a href=""></a>
                </div>
                <div className="footer-icons">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
        </footer>
    );
};
export default Footer;