import React from "react";
import hero from "../../../assets/restauranfood.jpg";
import { HeroSection, HeroContent, HeroImage } from "./Hero.styles";
import { Container, PrimaryButton} from "../../../../components/StyleGuide/StyleGuide.styles";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <h1 className="hero__title">Little Lemon</h1>
          <h3 className="hero__subtitle">Chicago</h3>
          <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <PrimaryButton className="btn btn--primary">Reserve a table</PrimaryButton>  
        </HeroContent>
        <HeroImage src={hero} alt="Hero image" />
      </Container>
    </HeroSection>
  );
}
export default Hero;