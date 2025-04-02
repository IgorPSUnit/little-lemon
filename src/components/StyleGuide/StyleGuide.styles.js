import {createGlobalStyle,  styled}  from 'styled-components';

export const Container = styled.div`
    padding: 2rem 14rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const PrimaryButton = styled.button`
    background-color: #f4ce14;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Karla', sans-serif;
    font-size: 1em;
    font-weight: 700;
    height: 45px;
    line-height: 23px;
    outline: none;
    padding: 10px;
    transition: all .2s ease-in-out;
    width: 180px;
`;

export const Link = styled.a`
    text-decoration:none;
    color:#333;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover{
    color:#495e57;
    }

`;

export const Headlines = styled.h*`
    font-family: 'Markazi', serif;
`;

export const Paragrafs = styled.p`
    font-family: 'Karla', sans serif;
`;

export const GlobalStyle = createGlobalStyle`
    h1, h2, h3 {
        font-family: 'Markazi', serif;
    }
    h1{
        font-size:70px;
    }

    p {
        font-family: 'Karla', sans-serif;
    }`;