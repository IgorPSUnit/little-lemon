import React from "react";

const About = () => {
    return (
        <section className="about">
            <div className="about__content">
                <h2 className="about__title">Little Lemon</h2>
                <h3 className="about__subtitle">Chicago</h3>
                <p className="about__description">We are a family owned restaurant that has been serving the Chicago area for over 20 years. We are proud to offer a variety of dishes that are made from the freshest ingredients and prepared by our experienced chefs. Our goal is to provide our customers with a dining experience that is both delicious and memorable. We look forward to serving you soon!</p>
            </div>
            <div className="about__images">
                <img src={require("../../../assets/restaurant.jpg")} alt="About image" />
            </div>
        </section>
    );
};
export default About;