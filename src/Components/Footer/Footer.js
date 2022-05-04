import React from "react";
import "./styles/Footer.css";
import Logo from "../Header/Logo";
import Contact from "./Contact";
import FooterNav from "./FooterNav";
import { socialLogoName } from "../../content";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--5-footer">
          <div className="logo-col">
            <div className="footer-logo">
              <Logo />
            </div>
            <ul className="social-link">
              {socialLogoName.map((item) => (
                <li key={item}>
                  <a className="footer-link" href="/">
                    <ion-icon name={item}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear} by Omnifood, Inc. All rights
              reserved.
            </p>
          </div>
          <Contact />
          <FooterNav />
        </div>
      </footer>
    </>
  );
};

export default Footer;
