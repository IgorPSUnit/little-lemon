import styled from "styled-components";

export const NavContainer = styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-decoration: none;
    padding-left: 64px;
`;

export const NavLinks = styled.ul`
    list-style: none;
    display:flex;
    flex-direction: row;

    li a{
        text-decoration: none;
        color:  #333;
        font-weight: 600;
        padding-left: 32px;
    }
`;