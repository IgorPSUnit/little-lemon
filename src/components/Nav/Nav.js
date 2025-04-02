import React from 'react';
import { NavContainer, NavLinks } from './Nav.styles';
import { Outlet, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <NavContainer>
                <NavLinks>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/reservation'>Reservations</NavLink></li>
                    <li><NavLink to='/order'>Order Online</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </NavLinks>
            </NavContainer>
            <Outlet/>
        </>
    );
};

export default Nav;