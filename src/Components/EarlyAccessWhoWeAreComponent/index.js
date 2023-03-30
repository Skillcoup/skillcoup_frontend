import React from "react";

import "./index.css";

import EarlyAccessNavbar from "../EarlyAccessNavbar";
import EarlyAccessFooter from "../EarlyAccessFooter";
import StayUpdatedComponent from "../StayUpdatedComponent";

const EarlyAccesswhoWeAreComponent = () => {
  return (
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
      <EarlyAccessNavbar index={2} />
      <div
        className="row"
        style={{
          justifyContent: "space-evenly",
          width: "100vw",
        }}
      >
        <div
          className="who-we-are-title"
          style={{
            maxWidth: "60vw",
            marginTop: "10%",
          }}
        >
          Platform for
          <br />
          Creativity & Work
          <br />
          <button className="btn-early-access">Get Early Access</button>
        </div>
        <div
          className="who-we-are-title"
          style={{
            width: "40vw",
            marginTop: "2.5%",
          }}
        >
          <img
            src="https://res.cloudinary.com/skillcoup/image/upload/v1680193825/EarlyAccessWhoWeAre/who-we-are_rexlkl.png"
            style={{
              width: "100%",
            }}
            alt="who we are"
            className="who-we-are-image"
          />
        </div>
      </div>

      <div
        className="row header"
        style={{ justifyContent: "center", marginTop: "5%" }}
      >
        We Believe
      </div>
      <div
        className="mt-1 ms-1"
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <text
          className="text-contnt"
          style={{
            width: "80vw",
          }}
        >
          At Skillcoup, we are passionate about empowering professionals to
          monetize their skills and thrive in the freelance industry. Our
          platform offers a dynamic and user-friendly experience that connects
          young professionals with renowned clients on their own terms. With our
          focus on generating work opportunities for the youth, we provide a
          valuable source of skilled labor to clients, helping them to achieve
          their goals while also nurturing the next generation of talent.
          <br />
          <br />
          Our mission is to create a mutually beneficial arrangement where
          <strong> everyone wins</strong>.
          <br />
          <br />
          By providing affordable freelance services, we help our clients to
          improve their balance sheets and achieve their business objectives. At
          the same time, we offer a safe and engaging atmosphere for young
          professionals to develop their skills and build their careers.
          <br />
          <br />
          Whether you're a freelancer looking for new opportunities or a client
          seeking skilled labor, Skillcoup has you covered. Join us today and be
          part of a community that is dedicated to driving growth and success in
          the freelance industry.
        </text>
      </div>
      <div className="row header" style={{ justifyContent: "center" }}>
        Join the revolution of freelancing with
        <br />
        Skillcoup's early access program
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="mt-2 mb-1"
      >
        <button className="btn-early-access">Get Early Access</button>
      </div>

      <div className="row header" style={{ justifyContent: "center", marginTop:"5%"}}>
        Blogs For You
      </div>
      <div className="row mb-5" style={{
        justifyContent: "space-around",
        maxWidth: "100vw",
        width: "fit-content",
        minWidth: "70vw",
        margin:"auto",
        display: "flex",
      }}>
        <div className="blog-card">
          <img
            src="https://res.cloudinary.com/skillcoup/image/upload/v1680194829/EarlyAccessWhoWeAre/pexels-picjumbocom-196659_1_qczyca.png"
            style={{
              width: "100%",
            }}
            alt="who we are"
            className="mt-3"
          />
          <div className="blog-card-content mt-2 mb-2">
          We are very well aware of the reasons that professionals have to go for Freelancing, but today we will discuss why hiring freelancers is an attractive option for clients and business owners.
            </div>  
        </div>
                <div className="blog-card">
          <img
            src="https://res.cloudinary.com/skillcoup/image/upload/v1680195221/EarlyAccessWhoWeAre/blog2_1_w3byn8.png"
            style={{
              width: "100%",
            }}
            alt="who we are"
            className="mt-3"
          />
          <div className="blog-card-content mt-2 mb-2">
          We are very well aware of the reasons that professionals have to go for Freelancing, but today we will discuss why hiring freelancers is an attractive option for clients and business owners.
            </div>  
        </div>
        <div className="blog-card">
          <img
            src="https://res.cloudinary.com/skillcoup/image/upload/v1680195236/EarlyAccessWhoWeAre/blog3_1_u44llk.png"
            style={{
              width: "100%",
            }}
            alt="who we are"
            className="mt-3"
          />
          <div className="blog-card-content mt-2 mb-2">
          We are very well aware of the reasons that professionals have to go for Freelancing, but today we will discuss why hiring freelancers is an attractive option for clients and business owners.
            </div>  
        </div>
      </div>
          
      <div className="row" style={{
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80vw",
        maxWidth: "100vw",
        width: "80vw",
        margin: "auto",
      }}>
        <div style={{
          maxWidth: "20vw",
        }}>
          <img
          src='https://res.cloudinary.com/skillcoup/image/upload/v1680197176/EarlyAccessWhoWeAre/Icon_aqir0y.svg'
          alt="icon"
          />
          <text>{"  Safe Payment"}</text>
        </div >
        <div style={{
          maxWidth: "20vw",
        }}>
        <img
          src='https://res.cloudinary.com/skillcoup/image/upload/v1680197176/EarlyAccessWhoWeAre/Icon_aqir0y.svg'
          alt="icon"
          />
          <text>{"  Plenty of Opportunities"}</text>
        </div>
        <div style={{
          maxWidth: "20vw",
        }}>
        <img
          src='https://res.cloudinary.com/skillcoup/image/upload/v1680197176/EarlyAccessWhoWeAre/Icon_aqir0y.svg'
          alt="icon"
          />
          <text>{"  Verified Profiles"}</text>
        </div>
        <div style={{
          maxWidth: "20vw",
        }}>
        <img
          src='https://res.cloudinary.com/skillcoup/image/upload/v1680197176/EarlyAccessWhoWeAre/Icon_aqir0y.svg'
          alt="icon"
          />
          <text>{"  Protected Data"}</text>
        </div>
      </div>

      <StayUpdatedComponent /> 
      <EarlyAccessFooter />
    </>
  );
};

export default EarlyAccesswhoWeAreComponent;
