import React from "react";
import "../../Styles/price/price.css";

const Prices = () => {
  return (
    <React.Fragment>
      <div className="Price-List-container">
        <div className="price-heading">
          <h1>Our Prices</h1>
        </div>
        <div className="Price-Container">
          <div className="price-box">
            <div className="price-main-box">
              <img src={require("../../images/2bhk.webp")} alt="" />
              <h2 className="price-title">2BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
            <div className="price-main-box">
              <img src={require("../../images/2bhk.webp")} alt="" />
              <h2 className="price-title">2BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
            <div className="price-main-box">
              <img src={require("../../images/2bhk.webp")} alt="" />
              <h2 className="price-title">2BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Prices;
