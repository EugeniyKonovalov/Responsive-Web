import React from "react";
import BtnMain from "../Button/BtnMain";

const PricingCardStarter = () => {
  return (
    <div className="pricing-plan pricing-plan--starter">
      <header className="plan-header">
        <p className="plan-name">Starter</p>
        <p className="plan-price">
          <span>$</span>399
        </p>
        <p className="plan-text">per month. That's just $13 per meal!</p>
      </header>
      <ul className="list">
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>1 meal per day</span>
        </li>
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>Order from 11am to 9pm</span>
        </li>
        <li className="list-item">
          <ion-icon name="checkmark-outline"></ion-icon>
          <span>Delivery is free</span>
        </li>
        <li className="list-item">
          <ion-icon name="close-outline"></ion-icon>
        </li>
      </ul>
      <div className="plan-sign-up">
        <BtnMain />
      </div>
    </div>
  );
};

export default PricingCardStarter;
