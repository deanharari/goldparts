import React from "react";

import Marquee from "react-double-marquee";

import "./brands-collector.styles.scss";

const imagesContext = require.context(
  "../../assets/images/brands-images/",
  false
);

export const BrandsCollector = () => (
  <div className="brands-collector">
    <div
      className="brands-collector-container"
      style={{
        whiteSpace: "nowrap"
      }}
    >
      <span className="header">מותגים</span>
      <Marquee direction="left">
        {imagesContext.keys().map((itemPath, index) => {
          const src = imagesContext(itemPath);
          return <img className="slider" key={index} src={src} alt={"brand"} />;
        })}
      </Marquee>
    </div>
  </div>
);
