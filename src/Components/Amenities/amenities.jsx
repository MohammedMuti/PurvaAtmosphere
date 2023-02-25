import {
  faBaseballBatBall,
  faDumbbell,
  faHouse,
  faParking,
  faPlayCircle,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../Styles/Amenites/amenities.css";
import AmenityCom from "./amenityComponent";

const Amenities = () => {
  return (
    <React.Fragment>
      <div className="amenities">
        <div className="heading">
          <h1>Amenities</h1>
        </div>
        <div className="amenity-main">
          <div className="amenity-container">
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Basket Ball court.png")}
                alt=""
              />
              <p>Basket Ball court</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Car Parking.png")}
                alt=""
              />
              <p>Car Parking</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Club House.png")}
                alt=""
              />
              <p>Club House</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Gym.png")}
                alt=""
              />
              <p>Gym</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Kids Play Area.png")}
                alt=""
              />
              <p>Kids Play Area</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Landscape Garden.png")}
                alt=""
              />
              <p>Landscape Garden</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Mini Theatre.png")}
                alt=""
              />
              <p>Mini Theatre</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Power Backup.png")}
                alt=""
              />
              <p>Power Backup</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Swimming Pool.png")}
                alt=""
              />
              <p>Swimming Pool</p>
            </div>
            <div className="amenity-content">
              <img
                src={require("../../images/website icons for real estate/Tennis Court.png")}
                alt=""
              />
              <p>Tennis Court</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Amenities;
