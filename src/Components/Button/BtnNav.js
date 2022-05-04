import React from "react";

const BtnNav = ({ onHide }) => {
  return (
    <div>
      <a onClick={onHide} href="#cta" className="btn btn--full btn--nav">
        Try for free
      </a>
    </div>
  );
};

export default BtnNav;
