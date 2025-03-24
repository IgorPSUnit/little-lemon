import styled from "styled-components";

export const AboutSection = styled.section`
    background-color: #edefee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 373px;
    height: 468px;
    h3{
        margin-top:0px;
    }
`;

export const ImgDiv = styled.div`
    position: relative;
    width: 600px;
    height: 500px;
`;

export const AboutImg1 = styled.img`
    position: absolute;
    z-index: 1;
    width: 50%;
    height: 50%;
    left: 25;  
    top: 25%;  
    transform: translateY(25%);  
    
`;

export const AboutImg2 = styled.img`
    position: absolute;
    z-index: 99;
    width: 50%;
    height: 50%;
    right: 15%;  
    top: 25%;  
    transform: translateY(-25%); 
`;