import React from "react";


import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="p-1" style={{
      width: "100vw",
      backgroundColor: "#072756",
        justifyContent: "center",
        display: "flex",
        marginTop: "20px",
        marginBottom: "-10%"
    }}>
        <button className="footer-button">Home</button>
        {/* Vertical Line Separating two Buttons */}
        <div className="vl"></div>
        <button className="footer-button">Who We Are</button>
    </div>
    </>
  );
};

export default Footer;
