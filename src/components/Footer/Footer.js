import React from "react";
import logo from "./Little Lemon logo white.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FooterContact, FooterContainer, FooterContent, FooterLinks, FooterLogo, FooterSocialIcons, FooterUlLinks } from "./Footer.styles";


const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-logo">
                <FooterLogo src={logo} alt="Logo do footer" />
            </div>
            <FooterContent>
                <FooterLinks>
                    <h4>Navigation</h4>
                    <FooterUlLinks>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Online Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </FooterUlLinks>
                </FooterLinks>
                <FooterContact>
                    <h4>Contact Us</h4>
                    <p>123 Main Street</p>
                    <p>Anytown, USA 12345</p>
                    <a href="">littlelemon@restaurant.com</a>
                </FooterContact>
                <FooterSocialIcons>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook}  style={{ color: '#EDEFEE', fontSize: '24px' }}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: '#EDEFEE', fontSize: '24px', marginLeft: '12px' }}/>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter}  style={{ color: '#EDEFEE', fontSize: '24px', marginLeft: '12px' }}/>
                    </a>
                </FooterSocialIcons>
            </FooterContent>
        </FooterContainer>
    );
};
export default Footer;