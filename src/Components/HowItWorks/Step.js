import React from "react";
import { steps } from "../../content";

const Step = () => {
  return (
    <div>
      {steps.map((item) => (
        <div key={item.number} className="grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">0{item.number}</p>
            <h3 className="heading-tertiary">{item.title}</h3>
            <p className="step-description">{item.text}</p>
          </div>

          <div
            className={
              item.number == 2
                ? "step-img-box "
                : "step-img-box  step-img-reverse "
            }
          >
            <img
              src={item.imgUrl}
              className="step-img"
              alt="iPhone app preferences selection screen"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
