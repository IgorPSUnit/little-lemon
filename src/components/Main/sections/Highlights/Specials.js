import React from "react";
import { SpecialsSection, SpecialsCardContainer, SpecialsCard, SpecialImg, SpecialDescription, SpecialTittleSection, SpecialDeliveryButton, HeaderContainer, SpecialCardContent} from "./Specials.styles";
import { PrimaryButton, Link } from "../../../StyleGuide/StyleGuide.styles";
import order from "../../../assets/order.svg";

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
    imagem: require("../../../assets/bruschetta.jpg"),
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
                                <SpecialCardContent>
                                  <SpecialTittleSection>
                                    <h3 className="specials__item-title">{dish.name}</h3>
                                    <h3 className="specials__item-price">${dish.price}</h3>
                                  </SpecialTittleSection>
                                  <SpecialDescription>{dish.description}</SpecialDescription>
                                  <Link>Order a delivery  &nbsp;<img src={order} alt="order do footer" /></Link>
                                </SpecialCardContent>
                            </div>
                          </SpecialsCard>
                      );
                  })}
              </SpecialsCardContainer>
        </SpecialsSection>
    );
};
export default Specials;