import React from "react";
import "../css/products.css";
import cardImg from "../images/card.png";

function Products() {
  const productArray = ["", "", ""];
  return (
    <>
      <div className="app_brand">
        <div className="app_brand_title">
          <h2 className="brand_title">New Launches</h2>
        </div>
        <div className="container">
          <div className="launches skin">Hair</div>
          <label className="launches">Skin</label>
          <label className="launches">Weight</label>
        </div>
        <div className="products">
          <div className="product_frame">
            {productArray.map((ele) => {
              return (
                <div className="card">
                  <div className="tag">New Launch</div>
                  <img src={cardImg} alt="" className="card_img" />
                  <div className="rating">⭐4.5</div>
                  <h2 className="card_title">Hair fall Control Shampoo</h2>
                  <div className="for">
                    <span className="for_title">For</span>
                    <span>Hair fall reduction</span>
                  </div>
                  <div className="with">
                    <span className="with_title">With</span>
                    <span style={{ paddingRight: "20px" }}>Keratin</span>
                    <span>Biotin</span>
                  </div>
                  <div className="with">
                    <span style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                      Niacinamide
                    </span>
                    <span>Vitamin B5</span>
                  </div>
                  <div className="price">
                    <span>RS 399</span>
                    <p>₹1194</p>
                    <label>🎉 17% OFF</label>
                  </div>
                  <div className="card_buttons">
                    <div className="addtocart">
                      <p>Add to Cart</p>
                    </div>
                    <div className="buynow">
                      <p>Buy Now</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="navigation"></div>
      </div>
    </>
  );
}

export default Products;
