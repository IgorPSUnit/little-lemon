import React from 'react';
import { NavContainer, NavLinks } from './Nav.styles';

const Nav = () => {
    return (
        <NavContainer>
            <NavLinks>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Menu</a></li>
                <li><a href=''>Reservations</a></li>
                <li><a href=''>Order Online</a></li>
                <li><a href=''>Login</a></li>
            </NavLinks>
        </NavContainer>
    );
};

export default Nav;