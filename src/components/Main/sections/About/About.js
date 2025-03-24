import React from "react";
import { AboutContent, AboutSection } from "./About.styles";
import { AboutImg1, AboutImg2, ImgDiv, Img2 } from "./About.styles";
import { Container } from "../../../StyleGuide/StyleGuide.styles";
const About = () => {
    return (
        <AboutSection>
            <Container>
                <AboutContent>
                    <h2 className="about__title">Little Lemon</h2>
                    <h3 className="about__subtitle">Chicago</h3>
                    <p className="about__description">We are a family owned restaurant that has been serving the Chicago area for over 20 years. We are proud to offer a variety of dishes that are made from the freshest ingredients and prepared by our experienced chefs. Our goal is to provide our customers with a dining experience that is both delicious and memorable. We look forward to serving you soon!</p>
                </AboutContent>
                    <ImgDiv>
                        <AboutImg1 src={require("../../../assets/restaurant.jpg")} alt="About image 1" />
                        <AboutImg2 src={require("../../../assets/restaurant chef B.jpg")} alt="About image 2" />
                    </ImgDiv>
            </Container>
        </AboutSection>
    );
};
export default About;