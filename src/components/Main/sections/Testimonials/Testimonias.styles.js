import styled from "styled-components";

export const TestimonialsSection = styled.section`
    background-color: #495e57;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 14rem;
    `;

export const TestomonialsHeader = styled.div`
    h1{
    font-family: 'Markazi', sans serif;
    color:#EDEFEE;
    }
`;

export const TestimonialsContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    h3{
        font-size: 1rem;
        color: #000;
        margin-bottom: 5px;
    }

    p{
        font-size: 0.8rem;
        color: #000;
        padding-bottom: 32px;
    }

    `;

export const TestimonialsCards = styled.div`
    display: flex;
    background-color: #EDEFEE;
    flex-direction: row;
    margin:10px;
    border-radius:10px;
    padding: 12px;
`;

export const TestimonialsCardsHeader = styled.div`
    height: 90px;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap:13px;
    justify-content: center
    ;

`;

export const TestimonialPerfil = styled.img`
    align-self: center;
    width:32px;
    height:32px;
`;