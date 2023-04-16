import React from "react";


import "./footer.css";
import { useNavigate } from "react-router-dom";

const EarlyAccessFooter = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="p-1" style={{
      backgroundColor: "#072756",
        justifyContent: "center",
        display: "flex",
        marginTop: "20px",
 
    }}>
        <button className="footer-button" onClick={()=>{navigate("/")}}>Home</button>
        {/* Vertical Line Separating two Buttons */}
        <div className="vl"></div>
        <button className="footer-button" onClick={()=>{navigate("/who-we-are")}}>Who We Are</button>
    </div>
    </>
  );
};

export default EarlyAccessFooter;
