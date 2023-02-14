import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCampground,
  faChevronDown,
  faChevronUp,
  faPlayCircle,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";

const AmenityCom = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const rotate = activeDropdown ? "rotate(0)" : "rotate(180deg)";
  // console.log(activeDropdown);
  return (
    <React.Fragment>
      <div className="amenities-list-container">
        <div
          className="amenities-container"
          onClick={() => setActiveDropdown(!activeDropdown)}
        >
          <div className="amenities-list-content">
            {props.icon}
            <h2>{props.name}</h2>
          </div>
          <div className="amenities-button">
            <FontAwesomeIcon
              className="dropDropIcon"
              icon={faChevronUp}
              style={{
                float: "right",
                transform: rotate,
                transition: "all 0.4s ease",
              }}
            />
          </div>
        </div>
        <div
          className={
            activeDropdown
              ? "amenities-content-container active"
              : "amenities-content-container"
          }
        >
          <Swiper
            loop={true}
            grabCursor={true}
            speed={1000}
            spaceBetween={20}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src={require("../../images/gal-1.jpeg")} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src={require("../../images/gal-2.jpeg")} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src={require("../../images/gal-3.jpeg")} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AmenityCom;
