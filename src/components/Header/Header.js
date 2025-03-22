import React from 'react';
import logo from './Logo.png';
import Nav from '../Nav/Nav';
import { Container } from '../StyleGuide/StyleGuide.styles';
import { HeaderContainer, Logo } from './Header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Container> 
                    <Logo src={logo} alt="Logo do navegador" />
                    <Nav />
            </Container>
        </HeaderContainer>
       
    );
};

export default Header;
