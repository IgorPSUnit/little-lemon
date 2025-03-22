import React from "react";

const listTestimonials = [
    {
        id: 1,
        name: "John Doe",
        title: "Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        name: "Jane Doe",
        title: "Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        name: "John Smith",
        title: "Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <div className="testimonials__container">
                {listTestimonials.map((testimonial) => {
                    return (
                        <div key={testimonial.id} className="testimonials__item">
                            <p className="testimonials__item-description">{testimonial.description}</p>
                            <h3 className="testimonials__item-name">{testimonial.name}</h3>
                            <p className="testimonials__item-title">{testimonial.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Testimonials;