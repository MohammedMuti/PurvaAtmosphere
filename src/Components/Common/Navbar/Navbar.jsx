import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import svg from "../../../images/Purvankara1.svg";
import "../../../Styles/Navbar/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(50);
  const [fade, setFade] = useState(true);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
      setLastScrollY(window.scrollY);
    });
  });

  useEffect(() => {
    const handleFade = (event) => {
      if (window.scrollY > 200) {
        setFade(false);
      } else setFade(true);
    };
    window.addEventListener("scroll", handleFade);

    return () => {
      window.removeEventListener("scroll", handleFade);
    };
  });

  return (
    <React.Fragment>
      <div
        style={
          fade
            ? { backgroundColor: "rgba(0, 0, 0, 0)" }
            : { backgroundColor: "rgba(0, 0, 0, 0.5)" }
        }
        className={navbar ? "navbar active" : "navbar"}
      >
        <div className="navbar-container">
          <div className="navbar-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbar-image">
            <img src={svg} alt="" />
          </div>
          {/* <div className="navbar-links">
            <ul className={click ? "lists" : "active"}>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
            </ul>
            <button className="bars-btn" onClick={handleClick}>
              btn
            </button>
          </div> */}
          <div className="button">
            <FontAwesomeIcon icon={faPhone} />
            <button>Call-now</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
