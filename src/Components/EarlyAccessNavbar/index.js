import React from "react";
import logo from "../../assets/skillcoup_blue.png";

import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const EarlyAccessNavbar = ({ index }) => {
  const navigate = useNavigate();
  const logoNavigation = () => {
    navigate("/")
  }
  if (index === 1)
    return (
      // IF index is 1
      <>
        <div
          className="p-1 skillcoup-dark-bg justify-center items-center"

        >
          <p className="font-thin text-white flex justify-center">
            {" "}
            Our alpha launch date will be revealed soon!
          </p>
        </div>
        <div className="navbar">
          <Link to={"/"}>
            <div className="navbar-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          <div className="navbar-buttons">
            <button className="active-button" onClick={() => { navigate("/") }}>
              Home
            </button>
            <button className="navbar-button" onClick={() => { navigate("/who-we-are") }}>
              Who we are
            </button>
          </div>
        </div>
      </>
    );
  if (index === 2)
    return (
      // IF index is 1
      <>
        <div
          className="p-1"
          style={{
            width: "100vw",
            backgroundColor: "#072756",
          }}
        >
          <p className="card-header-new pt-2">
            {" "}
            Our alpha launch date will be revealed soon!
          </p>
        </div>
        <div className="navbar">
          <Link to={"/"}>
            <div className="navbar-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          <div className="navbar-buttons">
            <button className="navbar-button" onClick={() => { navigate("/") }}>Home</button>
            <button className="active-button" onClick={() => { navigate("/who-we-are") }}>Who we are</button>
          </div>
        </div>
      </>
    );
  else
    return (
      // IF index is 1
      <>
        <div className="navbar">
          <Link to={"/"}>
            <div className="navbar-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          <div className="navbar-buttons">
            <button className="navbar-button" onClick={() => { navigate("/") }}>Home</button>
            <button className="navbar-button" onClick={() => { navigate("/who-we-are") }}>Who We Are</button>
          </div>
        </div>
      </>
    );
};

export default EarlyAccessNavbar;
