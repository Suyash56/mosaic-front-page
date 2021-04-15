import React from "react";
import banner from "../images/Banner.png";
import product from "../images/product.png";
import "../css/banner.css";

function Concerns({ bgColor, title }) {
  return (
    <>
      <div className="rectangle_img">
        <img src={product} />
      </div>
      <div className="rectangle" style={{ backgroundColor: bgColor }}></div>

      <div className="Title">
        <p className="title" style={{ color: "white" }}>
          {title}
        </p>
      </div>
    </>
  );
}

export default function Banner() {
  const concernsInfo = [
    {
      bgColor: "rgba(42, 101, 141, 1)",
      title: "Hair",
    },
    {
      bgColor: "rgba(235, 150, 51, 1)",
      title: "Skin",
    },
    {
      bgColor: "rgba(0, 112, 97, 1)",
      title: "Weight",
    },
  ];

  return (
    <div
      className="app__banner"
      style={{ background: `url(${banner}) 50% no-repeat` }}
    >
      <div className="heading">
        <p className="main_title">Heading Title</p>
        <p className="para">
          We are the country’s first holistic wellness platform for men. We talk
          to men, listen to them and understand their needs
        </p>
        <p className="sub_title">What’s your concern?</p>
        <div className="concerns">
          {concernsInfo.map((element, index) => {
            return (
              <div className="product">
                <Concerns
                  key={index}
                  bgColor={element.bgColor}
                  title={element.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
