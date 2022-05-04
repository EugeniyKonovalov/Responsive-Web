import React from "react";
import BtnForm from "../Button/BtnForm";

const InputGroup = () => {
  return (
    <div>
      <form className="cta-form" action="#">
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" placeholder="John Smith" required />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="me@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="select-where">Where did you hear from us?</label>
          <select id="select-where" required>
            <option value="">Please choose one option:</option>
            <option value="friends">Friends and family</option>
            <option value="youtube">YouTube video</option>
            <option value="podcast">Podcasst</option>
            <option value="ad">Facebook ad</option>
            <option value="other">Other</option>
          </select>
        </div>
        <BtnForm />
      </form>
    </div>
  );
};

export default InputGroup;
