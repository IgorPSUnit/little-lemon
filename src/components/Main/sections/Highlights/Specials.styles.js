import styled from "styled-components";

export const SpecialsSection = styled.section`
    background-color: ffff;
    
`;

export const HeaderContainer = styled.div`
    display: flex;
    padding: 32px;
    justify-content: space-between;
        align-items: center;

`;

export const SpecialsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding:32px;
    align-items: center;
    justify-content: center;
    `;

export const SpecialsCard = styled.div`
    display: flex;
    background-color:#EDEFEE;
    flex-direction: row;
    gap: 60px;
    border-radius:10px;
    width: 265px;
    height: 440px;
    .specials__item-price{ 
        color: #EE9972;
    }
    `;

export const SpecialTittleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

export const SpecialDescription = styled.p`
    height: 114px;
    margin-bottom: 50px;
    `;

export const SpecialImg = styled.img`
    max-height: 145px;
    width:100%;
    border-top-left-radius: 10px;  
    border-top-right-radius: 10px;

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

export const SpecialCardContent = styled.div`
    padding: 12px;
    
`;