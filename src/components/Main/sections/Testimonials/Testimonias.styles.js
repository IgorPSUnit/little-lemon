import styled from "styled-components";

export const TestimonialsSection = styled.section`
    background-color: #495e57;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

export const TestimonialsContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 330px;
    height: 420px;
    justify-content: space-between;
    
    h3{
        font-size: 1rem;
        color: #edefee;
        margin-bottom: 5px;
    }

    p{
        font-size: 0.8rem;
        color: #edefee;
        padding-bottom: 32px;
    }

    `;

export const TestimonialsCards = styled.div`
display: flex;
flex-direction: row;
`;