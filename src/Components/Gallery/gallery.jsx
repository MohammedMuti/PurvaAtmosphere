import React from "react";
import "../../Styles/Gallery/gallery.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

const Gallery = () => {
  return (
    <React.Fragment>
      <div className="gallery">
        <div className="header">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-content">
          <div className="gallery-container">
            <div className="row1">
              <div className="row1-c1">
                <div className="row1-r1">
                  <div className="e1">
                    <img src={require("../../images/gal-1.jpeg")} alt="" />
                  </div>
                  <div className="e2">
                    <img src={require("../../images/gal-2.jpeg")} alt="" />
                  </div>
                  <div className="e3">
                    <img src={require("../../images/gal-3.jpeg")} alt="" />
                  </div>
                </div>
                <div className="row1-r2">
                  <div className="e1">
                    <img src={require("../../images/gal-4.jpeg")} alt="" />
                  </div>
                  <div className="e2">
                    <img src={require("../../images/gal-5.jpeg")} alt="" />
                  </div>
                </div>
              </div>
              <div className="row1-c2">
                <img src={require("../../images/gal-7.jpeg")} alt="" />
              </div>
            </div>
            <div className="row2">
              <div className="e1">
                <img src={require("../../images/gal-6.jpeg")} alt="" />
              </div>
              <div className="e2">
                <img src={require("../../images/gal-3.jpeg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
