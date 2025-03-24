import React from "react";
import { TestimonialsContent, TestimonialsSection, TestimonialsCards, TestimonialsCardsHeader, TestomonialsHeader, TestimonialPerfil } from "./Testimonias.styles";
import { Container } from "../../../StyleGuide/StyleGuide.styles";
import Perfil from "./perfil.png";


const listTestimonials = [
    {
        id: 1,
        name: "John Doe",
        title: "Customer",
        image: {Perfil},
        description: "The Little Lemon in Chicago is fantastic! The Mediterranean dishes are fresh, flavorful, and beautifully presented. Highly recommend their signature lemon chicken!",
    },
    {
        id: 2,
        name: "Jane Doe",
        title: "Customer",
        image: {Perfil},
        description: "I absolutely loved my visit to Little Lemon! The cozy atmosphere and delicious Greek salad made my evening perfect. Can't wait to go back!",
    },
    {
        id: 3,
        name: "John Smith",
        title: "Customer",
        image: {Perfil},
        description: "Little Lemon offers an amazing dining experience. The seafood platter was fresh and perfectly seasoned. Truly a gem in Chicago!",
    },
    {
        id: 4,
        name: "Emily Johnson",
        title: "Customer",
        image: {Perfil},
        description: "Outstanding service and mouthwatering dishes! The hummus platter was divine, and the staff made us feel like family. Definitely my new go-to spot!",
    },
];


const Testimonials = () => {
    return (
        <TestimonialsSection>
            <TestomonialsHeader>
                <h1 className="testimonials__title">Testimonials</h1>
            </TestomonialsHeader>
            <TestimonialsContent>
                    {listTestimonials.map((testimonial) => {
                        return (
                            <TestimonialsCards>
                                <div key={testimonial.id} className="testimonials__item">
                                    <TestimonialsCardsHeader>
                                        <TestimonialPerfil src={Perfil} alt="image perfil"/>
                                        <h2 className="testimonials__item-name">{testimonial.name}</h2>
                                    </TestimonialsCardsHeader>
                                        <h3 className="testimonials__item-title">{testimonial.title}</h3>
                                        <p className="testimonials__item-description">{testimonial.description}</p>
                                </div>
                            </TestimonialsCards>
                            );
                        })}
            </TestimonialsContent>
        </TestimonialsSection>
    );
};
export default Testimonials;