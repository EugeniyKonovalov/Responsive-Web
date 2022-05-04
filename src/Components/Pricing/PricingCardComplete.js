import React from "react";
import BtnMain from "../Button/BtnMain";
const PricingCardComplete = () => {
  return (
    <div className="pricing-plan pricing-plan--complete">
      <header className="plan-header">
        <p className="plan-name">Complete</p>
        <p className="plan-price">
          <span>$</span>649
        </p>
        <p className="plan-text">per month. That's just $11 per meal!</p>
      </header>
      <ul className="list">
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>
            <strong>2 meals</strong> per day
          </span>
        </li>
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>
            Order <strong>24/7</strong>
          </span>
        </li>
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>Delivery is free</span>
        </li>
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>Get access to latest recipes</span>
        </li>
      </ul>
      <div className="plan-sign-up">
        <BtnMain />
      </div>
    </div>
  );
};

export default PricingCardComplete;
