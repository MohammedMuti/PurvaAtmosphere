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
        <div className="Amenity-main">
          <AmenityCom
            name="Swimming Pool"
            icon={<FontAwesomeIcon icon={faSwimmingPool} />}
          />
          <AmenityCom
            name="Club House"
            icon={<FontAwesomeIcon icon={faHouse} />}
          />
          <AmenityCom
            name="Car Parking"
            icon={<FontAwesomeIcon icon={faParking} />}
          />
          <AmenityCom
            name="Gymnasium"
            icon={<FontAwesomeIcon icon={faDumbbell} />}
          />
          <AmenityCom
            name="Kids Play Area"
            icon={<FontAwesomeIcon icon={faBaseballBatBall} />}
          />
          <AmenityCom
            name="Mini Theatre"
            icon={<FontAwesomeIcon icon={faPlayCircle} />}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Amenities;
