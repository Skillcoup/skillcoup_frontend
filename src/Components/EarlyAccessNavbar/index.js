import React from "react";
import logo from "../../assets/skillcoup_blue.png";

import "./navbar.css";

const EarlyAccessNavbar = (props) => {
  if (props.index === 1)
    return (
      // IF index is 1
      <>
        <div className="navbar">
          <div className="navbar-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="navbar-buttons">
            <button className="active-button" href="/">
              Home
            </button>
            <button className="navbar-button">
              Who We Are
            </button>
          </div>
        </div>
      </>
    );
  if (props.index === 2)
    return (
      // IF index is 1
      <>
        <div className="navbar">
          <div className="navbar-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="navbar-buttons">
            <button className="navbar-button">Home</button>
            <button className="active-button">Who We Are</button>
          </div>
        </div>
      </>
    );
  else
    return (
      // IF index is 1
      <>
        <div className="navbar">
          <div className="navbar-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="navbar-buttons">
            <button className="navbar-button">Home</button>
            <button className="navbar-button">Who We Are</button>
          </div>
        </div>
      </>
    );
};

export default EarlyAccessNavbar;
