import React from "react";
import Features from "./Features";
import PricingCardComplete from "./PricingCardComplete";
import PricingCardStarter from "./PricingCardStarter";
import "./styles/Pricing.css";

const Pricing = () => {
  return (
    <div>
      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
          <PricingCardStarter />
          <PricingCardComplete />
        </div>
        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>
        <div className="container grid grid--4-cols ">
          <Features />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
