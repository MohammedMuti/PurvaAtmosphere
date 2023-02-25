import React from "react";
import "../../Styles/price/price.css";

const Prices = () => {
  return (
    <React.Fragment>
      <div className="Price-List-container">
        <div className="header">
          <h1>Our Prices</h1>
        </div>
        <div className="Price-Container">
          <div className="price-box">
            <div className="price-main-box b1">
              <img src={require("../../images/2bhk.webp")} alt="" />
              <h2 className="price-title">2BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
            <div className="price-main-box b2">
              <img src={require("../../images/3bhk.webp")} alt="" />
              <h2 className="price-title">3BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
            <div className="price-main-box b3">
              <img src={require("../../images/4bhk.webp")} alt="" />
              <h2 className="price-title">4BHK</h2>
              <p>1286 sqft - 1326 sqft</p>
              <p>1.30 Cr onwards</p>
              <button>Get Breakup</button>
            </div>
          </div>
        </div>
        <div className="master-plan">
          <div className="master-plan-container">
            <img src={require("../../images/masterplan.webp")} alt="" />
            <p>Master Plan</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Prices;
