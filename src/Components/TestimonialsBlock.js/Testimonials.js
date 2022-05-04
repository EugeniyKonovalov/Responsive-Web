import React from "react";
import { testimonials } from "../../content";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials">
        {testimonials.map((item, index) => (
          <figure className="testimonial" key={index}>
            <img
              className="testimonial-img"
              src={item.imgUrl}
              alt={`Customer ${item.name} `}
            />
            <blockquote className="testimonial-text">{item.text}</blockquote>
            <p className="testimonial-name">&mdash; {item.name}</p>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
