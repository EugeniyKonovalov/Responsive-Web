import React from "react";
import { footerNav } from "../../content";

const FooterNav = () => {
  return (
    <>
      {footerNav.map((nav, index) => (
        <nav key={index} className="nav-col">
          <p className="footer-heading">{nav.name}</p>
          <ul className="footer-nav">
            {nav.list.map((item) => (
              <li key={item}>
                <a className="footer-link" href="/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </>
  );
};

export default FooterNav;
