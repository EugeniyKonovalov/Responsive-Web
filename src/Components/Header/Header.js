import React, { useEffect, useState } from "react";
import "./styles/Header.css";
import FeaturedIn from "./FeaturedIn";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Logo from "./Logo";
import BtnMobileNav from "../Button/BtnMobileNav";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const show = () => setNavShow(true);
  const onHide = () => setNavShow(false);

  useEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];

        !ent.isIntersecting
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    obs.observe(sectionHeroEl);
  }, []);

  return (
    <div>
      <header className={!navShow ? "header" : "header nav-open"}>
        <Logo />
        <Navigation onHide={onHide} />
        <BtnMobileNav show={show} onHide={onHide} />
      </header>
      <main>
        <Hero />
        <FeaturedIn />
      </main>
    </div>
  );
};

export default Header;
