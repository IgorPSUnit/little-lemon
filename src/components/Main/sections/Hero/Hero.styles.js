import styled from "styled-components";

export const HeroSection = styled.section`
    background-color: #495e57;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 330px;
    height: 420px;
    
    h1{
        font-size: 3rem;
        color: #f4ce14;
        margin-bottom: 5px;
    }
    h3{
        font-size: 1.5rem;
        color: #edefee;
        margin-bottom: 5px;
    }

    p{
        font-size: 1rem;
        color: #edefee;
        padding-bottom: 32px;
    }

    `;

export const HeroImage = styled.img`
        width: 375px;
        height: 325px;
        align-self: center;
    `;