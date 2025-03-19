import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Menu</a></li>
                <li><a href=''>Reserve a Table!</a></li>
            </ul>
        </nav>
    );
};

export default Nav;