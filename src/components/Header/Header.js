import React from 'react';
import './Header.css';
import logo from './Logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">
                <img src={logo} alt="Logo do navegador" />
            </div>

            <Nav />
        </header>
    );
};

export default Header;
