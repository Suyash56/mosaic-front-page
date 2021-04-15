import React, { useState } from "react";
import logo from "../images/logo.png";
import vector from "../images/Vector.png";
import userLogo from "../images/user.png";
import basket from "../images/basket.png";

import "../css/header.css";

export default function Header() {
  return (
    <div className="app__header">
      <div className="header_logo">
        <div className="mobile_logo">
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1606295435/staging/Home/Images/bodywise-logo.png" />
        </div>
      </div>
      <div className="header_frame">
        <ul className="frame_ul">
          <li className="frame_li">Shop</li>
          <li className="frame_li">Take Self - Assessment</li>
          <li className="frame_li">
            Choose Concers <span className="dropdown"></span>
          </li>
          <li className="frame_li">All Products</li>
          <li className="frame_li">Book Consultation</li>
        </ul>
      </div>
      <div className="icons">
        <div className="social_icon">
          <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1603950724/staging/Home/Images/u_search.svg" />
        </div>
        <div className="social_icon">
          <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1603950724/staging/Home/Images/WhastApp.svg" />
        </div>
        <div className="social_icon user_logo" >
          <img src={userLogo} />
        </div>
        <div className="social_icon">
          <img src={basket} />
        </div>
      </div>
    </div>
  );
}
