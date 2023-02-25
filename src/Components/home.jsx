import React, { useState } from "react";
import Navbar from "./Common/Navbar/Navbar";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "../Styles/Home/home.css";
import About from "./About/about";
import Prices from "./Price/price";
import Aminities from "./Amenities/amenities";
import { useEffect } from "react";
import PopUp from "./popup/popup";
import ContactComp from "./Common/Contact/ContactComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "./Gallery/gallery";
import ContactUs from "./Contact/ContactUs";

const Home = () => {
  const [popup, setPopup] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => setPopup(true), 15000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <React.Fragment>
      <div className="home-seperator">
        <div className="home">
          <Navbar />
          <PopUp popup={popup} setPopup={setPopup} />
          <Swiper
          // loop={true}
          // speed={2000}
          // grabCursor={true}
          // spaceBetween={20}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          // modules={[Autoplay, Pagination, Navigation]}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide slide s1">
                  <div className="background-overlay">
                    <div className="content">
                      <h3>Welcome to our Apartments</h3>
                      <h1>Purva Atmosphere</h1>
                      <h2>Thanisandra, Bangalore</h2>
                      <h4>
                        Trusted | 30 Years of Experience | On-Time Delivery
                        {/* <Typewriter 
                                            loop={true}
                                            speed={40}
                                            text='Trusted | 30 Years of Experience | On-Time Delivery'
                                            delay={1000}
                                            random={100}
                                            /> */}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="swiper-slide slide s2">
                  <div className="background-overlay">
                    <div className="content">
                      <h3>Welcome to our Apartments</h3>
                      <h1>Purva Atmosphere</h1>
                      <h2>Thanisandra, Bangalore</h2>
                      <h4>
                        Trusted | 30 Years of Experience | On-Time Delivery
                        <Typewriter 
                                            loop={true}
                                            speed={40}
                                            text='Trusted | 30 Years of Experience | On-Time Delivery'
                                            delay={1000}
                                            random={100}
                                            />
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide s3">
                  <div className="background-overlay">
                    <div className="content">
                      <h3>Welcome to our Apartments</h3>
                      <h1>Purva Atmosphere</h1>
                      <h2>Thanisandra, Bangalore</h2>
                      <h4>
                        Trusted | 30 Years of Experience | On-Time Delivery
                        <Typewriter 
                                            loop={true}
                                            speed={40}
                                            text='Trusted | 30 Years of Experience | On-Time Delivery'
                                            delay={1000}
                                            random={100}
                                            />
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </div>
          </Swiper>
          <About />
          <Prices />
          <Aminities />
          <Gallery />
          <ContactUs />
          <div className="floating-icons">
            <div className="whatsapp-float-icon">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <div className="side-contact">
          <div className="form">
            <div className="form-heading">
              <h1>Contact Us Now</h1>
            </div>
            <div className="form-content">
              <ContactComp popup={popup} setPopup={setPopup} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
