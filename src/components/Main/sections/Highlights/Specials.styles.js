import styled from "styled-components";

export const SpecialsSection = styled.section`
    background-color: ffff;
`;

export const HeaderContainer = styled.div`
    display: flex;
    padding: 32px;
    justify-content: space-between;

`;

export const SpecialsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    `;

export const SpecialsCard = styled.div`
    display: flex;
    background-color:#EDEFEE;
    flex-direction: row;
    gap: 60px;
    padding: 12px;
    border-radius:8px;
    width: 265px;
    height: 440px;
    .specials__item-price{ 
        font-family: 'Markazi', serif;
        color: #EE9972;
    }
    `;

export const SpecialTittleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

export const SpecialDescription = styled.p`
    font-family: 'Markazi', serif;
    height: 114px;
    `;

export const SpecialImg = styled.img`
    max-height: 145px;
    width:100%;
`;

export const SpecialDeliveryButton = styled.button`
    background-color: #f4ce14;
        color: #495e57;
        border: none;
        padding: 12px 20px;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 10px;

        &:hover{
            background-color: #495e57;
            color: #f4ce14;
        }
`;

