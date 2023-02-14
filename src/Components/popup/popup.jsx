import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../Styles/popup/popup.css";
import ContactComp from "../Common/Contact/ContactComp";

const PopUp = (props) => {
  return (
    <React.Fragment>
      <div className={props.popup ? "pop-container active" : "pop-container"}>
        <div className="pop-main">
          <div className="pop-head">
            <h2>Download Brochure</h2>
            <FontAwesomeIcon
              onClick={() => {
                props.setPopup(false);
              }}
              icon={faClose}
            />
          </div>
          <div className="pop-body">
            <ContactComp />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
