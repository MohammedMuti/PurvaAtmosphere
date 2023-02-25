import React from "react";
import "../../Styles/Contact/ContactUs.css";
import ContactComp from "../Common/Contact/ContactComp";
import "../../Styles/Contact/contact.css";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="Contact-us">
        <div className="header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-content">
          <div className="contact-location">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31092.402873340092!2d77.63413!3d13.064268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19cd10cc5161%3A0x95264b2a77b017e2!2sPurva%20Atmosphere!5e0!3m2!1sen!2sin!4v1677325926874!5m2!1sen!2sin"
                width="500"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading={"lazy"}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contactForm">
            <ContactComp />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
