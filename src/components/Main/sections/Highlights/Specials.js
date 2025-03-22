import React from "react";

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
    imagem: require("../../../assets/bruchetta.svg"),
    name: "Brushetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
  },
  {
    id: 3,
    imagem: require("../../../assets/lemon dessert.jpg"),
    name: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];


const Specials = () => {
    return (
        <section className="specials">
            <h2 className="specials__title">This weeks specials</h2>
            <div className="specials__container">
                {topDishes.map((dish) => {
                    return (
                        <div key={dish.id} className="specials__item">
                            <img src={dish.imagem} alt={dish.name} />
                            <h3 className="specials__item-title">{dish.name}</h3>
                            <p className="specials__item-description">{dish.description}</p>
                            <p className="specials__item-price">${dish.price}</p>
                        </div>
                    );
                })}
                <div className="specials__button">
                    <button className="btn btn--primary">Order a delivery</button>
                </div>
            </div>
        </section>
    );
};
export default Specials;