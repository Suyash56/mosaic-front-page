import React from "react";
import image from "../images/image.png";
import "../css/help.css";

export default function Help() {
  return (
    <div className="app__help">
      <div className="app_help_title">
        <p className="help_title">How It Works</p>
      </div>
      <div className="group1">
        <img className="help_image" src={image} />
        <div className="group2">
          <div className="block">
            <p className="block_title">1. Help us know you</p>
            <p className="block_para">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </p>
          </div>
          <div className="block b2">
            <p className="block_title">2. Help us know you</p>
            <p className="block_para">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </p>
          </div>
          <div className="block">
            <p className="block_title">3. Help us know you</p>
            <p className="block_para">
              Know what you're looking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consultation with our renowned experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
