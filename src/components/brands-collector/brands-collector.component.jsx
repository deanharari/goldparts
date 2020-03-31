import React, { Component } from "react";

import "./brands-collector.styles.scss";

import Marquee, { Motion } from "react-marquee-slider";
import times from "lodash/times";

const imagesContext = require.context(
  "../../assets/images/brands-images/",
  false
);

export const BrandsCollector = () => (
  <div className="brands-collector">
    <span className="brands-header">מותגים</span>
    {imagesContext.keys().map((itemPath, index) => {
      const src = imagesContext(itemPath);
      console.log(itemPath, src);
      return <img key={index} src={src} alt={"brand"} />;
    })}
  </div>
);
