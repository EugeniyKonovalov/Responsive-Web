import React from "react";
import InputGroup from "./InputGroup";

import "./styles/Form.css";

const Form = () => {
  return (
    <div>
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
              <InputGroup />
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
