import React from "react";

const BtnMobileNav = ({ show, onHide }) => {
  return (
    <>
      <button className="btn-mobile-nav">
        <ion-icon name="menu-outline" onClick={show}></ion-icon>
        <ion-icon name="close-outline" onClick={onHide}></ion-icon>
      </button>
    </>
  );
};

export default BtnMobileNav;
