import React from "react";

import Packing from "./packing.JPG";

import "./contact.styles.scss";

export const Contact = () => (
  <div className="contact-container">
    <div className="contact-bg">
      <img className="packing" src={Packing} alt="packing" />
    </div>
    <div className="form-container">
      <div className="form">
        <span className="header-contact">צור קשר</span>
        <span className="sub-header-contact">ת.ד 723</span>
        <span className="sub-header-contact">ישראל</span>
        <a className="mail sub-header-contact" href="mailto: din6@bezeqint.net">
          din6@bezeqint.net
        </a>
      </div>
    </div>
  </div>
);
