import React from "react";

import Packing from "./packing.JPG";

import "./contact.styles.scss";

const Contact = () => (
  <div className="contact-container">
    <div className="contact-bg">
      <img className="packing" src={Packing} alt="packing" />
    </div>
    <div className="form">
      <span>צור קשר</span>
      <span>ת.ד 723</span>
      <span>ישראל</span>
      <a className="mail" href="mailto: din6@bezeqint.net">
        din6@bezeqint.net
      </a>
    </div>
  </div>
);

export default Contact;
