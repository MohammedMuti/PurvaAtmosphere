import React from "react";
import "../../Styles/Tour/virtualTour.css";

const Tour = () => {
  return (
    <React.Fragment>
      <div className="tour">
        <div className="header">
          <h1>Virtual Tour</h1>
        </div>
        <div className="tour-content">
          <div className="tour-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1hvsAIoBbnU"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tour;
