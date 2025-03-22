import React from "react";
import { SpecialsSection, SpecialsCardContainer, SpecialsCard, SpecialImg, SpecialDescription, SpecialTittleSection, SpecialDeliveryButton, HeaderContainer} from "./Specials.styles";
import { PrimaryButton, PrimaryH3 } from "../../../StyleGuide/StyleGuide.styles";
import BruschettaIcon from "../../../assets/bruchetta.svg";

const topDishes = [
  {
    id: 1,
    imagem: require("../../../assets/greek salad.jpg"),
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
  },
  {
    id: 2,
    imagem: require("../../../assets/bruchetta.jpg"),
    name: "Brushetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
  },
  {
    id: 3,
    imagem: require("../../../assets/lemon dessert.jpg"),
    name: "Lemon Dessert",
    price: 5.99,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];


const Specials = () => {
    return (
        <SpecialsSection>
              <HeaderContainer>
                <h2 className="specials__title">This weeks specials</h2>
                <PrimaryButton>Order a delivery</PrimaryButton>
              </HeaderContainer>
              <SpecialsCardContainer>
                  {topDishes.map((dish) => {
                      return (
                        <SpecialsCard>
                            <div key={dish.id} className="specials__item">
                                <SpecialImg src={dish.imagem} alt={dish.name} />
                                <SpecialTittleSection>
                                  <PrimaryH3 className="specials__item-title">{dish.name}</PrimaryH3>
                                  <h3 className="specials__item-price">${dish.price}</h3>
                                </SpecialTittleSection>
                                <SpecialDescription>{dish.description}</SpecialDescription>
                                <SpecialDeliveryButton>Order a delivery</SpecialDeliveryButton>
                            </div>
                          </SpecialsCard>
                      );
                  })}
              </SpecialsCardContainer>
        </SpecialsSection>
    );
};
export default Specials;