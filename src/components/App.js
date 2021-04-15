import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Frame from "./Frame";
import Help from "./Help";
import Products from "./Products";
import "../css/app.css"

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <Frame />
        <Products />
        <Frame />
        <Help />
      </div>
    </>
  );
}
