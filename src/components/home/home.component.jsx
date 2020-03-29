import React from "react";

import Background from "./bg.jpg";

import "./home.styles.scss";

const Home = () => (
  <div className="bg">
    <img className="background" src={Background} alt="background" />
    <div className="home-container">
      <span className="main-home">GOLD PARTS</span>
      <span className="sub-home">ייבוא ושיווק חלקי חילוף למשאיות ומסחריות</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=+972523575588"
        className="contact-button"
      >
        לקבלת הצעת מחיר
      </a>
    </div>
  </div>
);

export default Home;
