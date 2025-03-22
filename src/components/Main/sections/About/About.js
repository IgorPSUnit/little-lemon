import React from "react";
import { AboutSection } from "./About.styles";
import { AboutImg } from "./About.styles";
const About = () => {
    return (
        <AboutSection>
            <div className="about__content">
                <h2 className="about__title">Little Lemon</h2>
                <h3 className="about__subtitle">Chicago</h3>
                <p className="about__description">We are a family owned restaurant that has been serving the Chicago area for over 20 years. We are proud to offer a variety of dishes that are made from the freshest ingredients and prepared by our experienced chefs. Our goal is to provide our customers with a dining experience that is both delicious and memorable. We look forward to serving you soon!</p>
            </div>
            <div className="about__images">
                <AboutImg src={require("../../../assets/restaurant.jpg")} alt="About image" />
            </div>
        </AboutSection>
    );
};
export default About;