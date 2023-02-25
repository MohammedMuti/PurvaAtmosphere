import React from "react";
import "../../Styles/About/about.css";
import floor from "../../images/resources/Floor-Plan.svg";
import brochure from "../../images/resources/Icons_brochure.svg";
import Master from "../../images/resources/Master-Plan.svg";
import tour from "../../images/resources/Virtual-Tour.svg";

const About = () => {
  return (
    <React.Fragment>
      <div className="About-us">
        <div className="header">
          <h1>About Us</h1>
        </div>
        <div className="about-main-content">
          <div className="about-us-para">
            <h2>Purva Atmosphere</h2>
            <div className="about-us-content">
              <p>
                Atmosphere- An ultra-modern, bold, luxurious, sophisticated
                apartment project. Atmosphere consists of three tower blocks of
                33 residential floors. Two towers comprises of 2 & 3 bed units
                while the central tower has larger 3 and 4 bed units. The
                central tower is topped with a Sky club on the 34th floor, which
                links to landscaped terraces of the other two towers, providing
                a large community space in the sky.
              </p>
              <p>
                The three towers are designed to be sleek, minimal, contemporary
                and international in character with abundant natural light and
                ventilation for all living spaces. They are bold with a strong
                rectangular geometry, yet minimal, understated elegance and
                timeless. Utmost care is taken to minimize wastage of internal
                spaces within each apartment with minimal or no corridors in
                most apartments.
              </p>
            </div>
          </div>
          <div className="about-us-resources">
            <div className="about-resource-head">
              <p>Resources</p>
            </div>
            <div className="resource-container">
              <div className="main-resources">
                <div className="resource-box">
                  <img src={floor} alt="" />
                  <p>Floor Plan</p>
                </div>
                <div className="resource-box">
                  <img src={brochure} alt="" />
                  <p>Brochure</p>
                </div>
                <div className="resource-box">
                  <img src={Master} alt="" />
                  <p>Master Plan</p>
                </div>
                <div className="resource-box">
                  <img src={tour} alt="" />
                  <p>Virtual Tour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
