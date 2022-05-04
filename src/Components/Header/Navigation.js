import React from "react";
import { navigation } from "../../content";
import BtnNav from "../Button/BtnNav";

const Navigation = ({ onHide }) => {
  return (
    <div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navigation.map((item) => (
            <li key={item.title}>
              <a onClick={onHide} className="main-nav-link" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}

          <li>
            <BtnNav onHide={onHide} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
