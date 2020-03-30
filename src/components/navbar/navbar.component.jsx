import React from "react";

import "./navbar.component.scss";
import { LogoContainer } from "../logo-container/logo-container.component";

export const NavBar = () => (
  <div className="main-header">
    <div className="options">
      <LogoContainer />
      <span className="option">אודות</span>
      <span className="option">צור קשר</span>
      <span className="option">מיקום</span>
      <span className="option">מותגים</span>
    </div>
  </div>
);
