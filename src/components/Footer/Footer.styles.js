import styled from "styled-components";
export const FooterContainer = styled.footer`
    height:332px;
    background: #495E57;
    display: flex;
    gap:36px;
    padding: 2rem 14rem;
`;

export const FooterLogo = styled.img`
    height: 320px;
    width: 100%;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction = row;
    gap:60px;
`;

export const FooterLinks = styled.div`
    display:flex;
    flex-direction:column;
    h4{
        color:#f4ce14;
        font-family: 'Karla', sans-serif
        font-size: 23px;
        font-weight: 800;
        line-height: 23px;
        margin-bottom: 1.5rem;
    }
`;
export const FooterUlLinks = styled.ul`
    list-style: none;
    display:flex;
    flex-direction: column;
    padding: unset;

    li a{
        text-decoration: none;
        color:#EDEFEE;
    }`;

export const FooterContact = styled.div`
    display:flex;
    flex-direction: column;
    h4{
        color:#f4ce14;
        font-family: 'Karla', sans-serif
        font-size: 23px;
        font-weight: 800;
        line-height: 23px;
        margin-bottom: 1.5rem;
    }
    p{
        color:#EDEFEE;
    }
    a{
        text-decoration: none;
        color:#EDEFEE;
    }
`;

export const FooterSocialIcons = styled.div`
    display:flex;
    padding-top: 18px;
`;


