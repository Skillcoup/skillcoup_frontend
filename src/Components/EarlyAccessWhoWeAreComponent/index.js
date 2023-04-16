import React from "react";

import "./index.css";

import EarlyAccessNavbar from "../EarlyAccessNavbar";
import EarlyAccessFooter from "../EarlyAccessFooter";
import StayUpdatedComponent from "../StayUpdatedComponent";
import { useNavigate } from "react-router";
import Lottie from "react-lottie";
import creativityAnimation from "../../assets/Animation/creativityPlatform.json"

const featuresArray = [
  {
    imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1681633946/EarlyAccessWhoWeAre/seacurePayment_qhslql.png",
    title: "Safe Payment"
  },
  {
    imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1681633946/EarlyAccessWhoWeAre/verified-user_w7lhoh.png",
    title: "Verified Profiles"
  },
  {
    imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1681633946/EarlyAccessWhoWeAre/encrypted_oho9wx.png",
    title: "Protected Data"
  },
  {
    imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1681633946/EarlyAccessWhoWeAre/idea_plcr5p.png",
    title: "Pool of Opportunities"
  },

]

const FeaturesComponent = ({ imgSrc, title }) => {
  return (
    <div className="flex items-center justify-start ml-3 mb-10 space-x-4 pl-10 pr-10 pt-4 pb-4 w-1/4  mr-3 border-2 border-gray-200 skillcoup-light-bg rounded-xl drop-shadow-lg">
      <img src={imgSrc} className="" width={50} height={50} />
      <h3 className="flex font-semibold">{title}</h3>
    </div>
  )
}

const EarlyAccesswhoWeAreComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: creativityAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <EarlyAccessNavbar index={2} />
      <div className='flex flex-row justify-between  bg-skillcoup-graident'>
        {/* left side div */}
        <div className='flex flex-col justify-center ml-20'>
          <div className='flex flex-row'>
            <h1 className='font-bold text-6xl'>Platform for</h1>
          </div>
          <h2 className='font-bold text-6xl'>Creativity & Work</h2>
          <button className='mt-5 ml-3 global-btn-large' onClick={() => { navigate("/early-access") }}>Get Early Access</button>
        </div>
        <div className='flex mt-10 w-1/2 justify-end'>
          <img src="https://res.cloudinary.com/skillcoup/image/upload/v1680193825/EarlyAccessWhoWeAre/who-we-are_rexlkl.png" height="80%" width="80%" />
          {/* <Lottie options={defaultOptions} width="50%" /> */}
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
        <button className="global-btn-large mt-5 mb-10">Get Early Access</button>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-3 space-x-36">
        {featuresArray.slice(0, 2).map((item) => {
          return (

            <FeaturesComponent title={item.title} imgSrc={item.imgSrc} />
          )
        })}
      </div>
      <div className="flex justify-center flex-wrap mt-3 space-x-36">
        {featuresArray.slice(2, 4).map((item) => {
          return (

            <FeaturesComponent title={item.title} imgSrc={item.imgSrc} />
          )
        })}
      </div>
      <div className="row header" style={{ justifyContent: "center", marginTop: "5%" }}>
        Blogs For You
      </div>
      <div className="row mb-5" style={{
        justifyContent: "space-around",
        maxWidth: "100vw",
        width: "fit-content",
        minWidth: "70vw",
        margin: "auto",
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


      <StayUpdatedComponent />
      <EarlyAccessFooter />
    </>
  );
};

export default EarlyAccesswhoWeAreComponent;
