import React from "react";
import logo from "../images/logo.png";
import userLogo from "../images/user.png";
import basket from "../images/basket.png";
import search from "../images/search.png";
import whatsapp from "../images/whatsapp.png";

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
          <img src={logo} />
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
          <img src={search} />
        </div>
        <div className="social_icon">
          <img src={whatsapp} />
        </div>
        <div className="social_icon user_logo">
          <img src={userLogo} />
        </div>
        <div className="social_icon">
          <img src={basket} />
        </div>
      </div>
    </div>
  );
}
