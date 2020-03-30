import React from "react";
import Logo from "./Golden-mercedes.png";

import "./logo-container.styles.scss";

export const LogoContainer = () => (
  <div className="logo-container">
    <div className="context-container">
      <span>GOLD PARTS</span>
      <span className="occupation">ייבוא ושיווק חלפים למשאיות</span>
    </div>

    <img className="logo" src={Logo} alt="golden-mercedes" />
  </div>
);
