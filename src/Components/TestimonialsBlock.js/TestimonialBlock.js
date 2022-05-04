import React from "react";
import "./styles/TestimonialBlock.css";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const TestimonialBlock = () => {
  return (
    <>
      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>
          <Testimonials />
        </div>
        <Gallery />
      </section>
    </>
  );
};

export default TestimonialBlock;
