import {createGlobalStyle,  styled}  from 'styled-components';

export const Container = styled.div`
    padding: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const PrimaryButton = styled.button`
        background-color: #f4ce14;
        color: #495e57;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 10px;

        &:hover{
            background-color: #495e57;
            color: #f4ce14;
        }

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

    p {
        font-family: 'Karla', sans-serif;
    }`;