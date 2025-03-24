import styled from "styled-components";

export const HeroSection = styled.section`
    background-color: #495e57;
    display: flex;
    flex-direction: row;
    `;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width:50%;
    
    h1{
        color: #f4ce14;
        line-height: 65px;
        margin:0px;
    }
    h4{
        
        color: #edefee;
        margin-bottom: 5px;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
        color: #edefee;
        padding-bottom: 32px;
    }

    `;

export const HeroImage = styled.img`
        width: auto;
        height: 380px;
        align-self: center;
            border-radius: 15px;
    `;