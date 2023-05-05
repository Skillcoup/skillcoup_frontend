import React, { useRef } from "react";

import "./index.css";

import EarlyAccessNavbar from "../EarlyAccessNavbar";
import EarlyAccessFooter from "../EarlyAccessFooter";
import StayUpdatedComponent from "../StayUpdatedComponent";
import { useNavigate } from "react-router";
import Lottie from "react-lottie";
import creativityAnimation from "../../assets/Animation/creativityPlatform.json"
import BlogShowcaseComponent from "../UI/BlogShowcaseComponent";

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

const blogArray = [
  {
    title: "How Freelancing Saved Businesses during the Pandemic",
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qXu3f2pPvoKifSG1GRbjqg.jpeg",
    content: "In the last year, Freelancing has exploded onto the job market and many established names are now turning to freelancers for short term as well as regular work requirements. In this article, let’s examine the reasons for sudden rise in popularity of Freelancing and the reasons behind it."
  },
  {
    title: "5 Reasons Why You should hire Freelancers",
    imgSrc: "https://miro.medium.com/v2/resize:fit:2468/format:webp/1*nYonUA11exVdth-4CBU8HA.jpeg",
    content: "We are very well aware of the reasons that professionals have to go for Freelancing, but today we will discuss why hiring freelancers is an attractive option for clients and business owners."
  },
  {
    title: "How to Grow Your Freelance Career: A Comprehensive Guide",
    imgSrc: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*pGiAzO_43rkIIAFb0d4rMw.jpeg",
    content: "In this article, let’s explore some simple tips and ways through which freelancers can expand their network and gain access to more projects and clients."
  },
]

const FeaturesComponent = ({ imgSrc, title }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="flex items-center justify-start md:ml-3 mb-10 space-x-3 pl-2 md:space-x-4 md:pl-10 md:pr-10 pt-4 pb-4 w-2/5 md:w-1/4  md:mr-3 border-2 border-gray-200 skillcoup-light-bg rounded-xl drop-shadow-lg">
      {windowSize.current[0] < 640 && (<img src={imgSrc} className="" width={20} height={20} />)}
      {windowSize.current[0] >= 640 && (<img src={imgSrc} className="" width={50} height={50} />)}
      <h3 className="flex text-xs font-medium md:font-semibold">{title}</h3>
    </div>
  )
}

const EarlyAccesswhoWeAreComponent = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
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
        <div className='flex flex-col justify-center mt-3 md:mt-0 ml-10 md:ml-20'>
          <div className='flex flex-row'>
            <h1 className='font-bold text-2xl md:text-5xl'>Platform for</h1>
          </div>
          <h2 className='font-bold text-2xl md:text-5xl bg-skillcoup-gradient-text'>Creativity & Work</h2>
          {windowSize.current[0] < 640 && (<button className='mt-3 ml-3 global-btn-large-mobile' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
          {windowSize.current[0] >= 640 && (<button className='mt-5 ml-3 global-btn-large' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
        </div>
        <div className='hidden md:flex mt-10 w-1/2 justify-end'>
          <img src="https://res.cloudinary.com/skillcoup/image/upload/v1680193825/EarlyAccessWhoWeAre/who-we-are_rexlkl.png" height="80%" width="80%" />
          {/* <Lottie options={defaultOptions} width="50%" /> */}
        </div>
      </div>

      <div className="flex flex-col mt-10 md:mt-24 justify-center">
        <h2 className='flex justify-center mt-10 mb-10  font-bold text-2xl md:text-5xl skillcoup-header-dark-color'>We Believe</h2>


        {windowSize.current[0] >= 640 && (<div className="flex justify-center">
          <text className="font-normal text-center text-lg tracking-widest w-4/5">
            Skillcoup is a dynamic and user-friendly freelance platform that aims to empower young professionals to monetize their skills and thrive in the freelance industry. Our no commission platform connects freelancers with renowned clients, creating mutually beneficial environment where everyone wins.

            We offer affordable freelance services that help our clients improve their balance sheets and achieve their business objectives. At the same time, our platform provides a safe and engaging atmosphere for young professionals to develop their skills and build their careers.

            As a freelance platform, Skillcoup is dedicated to driving growth and success in the freelance industry. Whether you're a freelancer looking for new opportunities or a client seeking skilled labor, we have got you covered. Join us today and be part of a community that values freelancing and helps you succeed in the gig economy.
          </text>
        </div>)}
        {windowSize.current[0] < 640 && (
          <div className="flex justify-center">
            <text className="font-normal text-justify text-lg tracking-widest w-4/5">
              Skillcoup connects young professionals with clients to provide affordable freelance services that benefit both parties. Join us to grow your skills or achieve your business objectives.
            </text>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center mt-16 md:mt-28">
        {windowSize.current[0] >= 640 && (<h3 className="flex justify-center mt-10  font-bold text-xl md:text-5xl skillcoup-header-dark-color">Join the revolution in freelancing with</h3>)}
        {windowSize.current[0] < 640 && (<h3 className="flex justify-center mt-10  font-bold text-xl md:text-5xl skillcoup-header-dark-color">Join the revolution with</h3>)}
        <br />
        <h3 className="flex justify-center mb-6 md:mb-10  font-bold text-xl md:text-5xl skillcoup-header-dark-color"> <span className="bg-skillcoup-gradient-text">Skillcoup</span>'s early access program</h3>

      </div>
      <div className="flex justify-center mb-20">

        {windowSize.current[0] < 640 && (<button className='mt-3 ml-3 global-btn-large-mobile' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
        {windowSize.current[0] >= 640 && (<button className='mt-5 ml-3 global-btn-large' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
      </div>

      <div className="flex flex-wrap justify-center mt-10 mb-3 space-x-12 md:space-x-36">
        {featuresArray.slice(0, 2).map((item) => {
          return (

            <FeaturesComponent title={item.title} imgSrc={item.imgSrc} />
          )
        })}
      </div>
      <div className="flex justify-center flex-wrap mt-3 space-x-12 md:space-x-36">
        {featuresArray.slice(2, 4).map((item) => {
          return (

            <FeaturesComponent title={item.title} imgSrc={item.imgSrc} />
          )
        })}
      </div>
      <div className="mt-28 mb-20">
        <h3 className="flex justify-center mb-6 md:mb-10  font-bold text-xl md:text-5xl skillcoup-header-dark-color">Blogs For You</h3>
        <div className="flex space-x-3 justify-center">

          {blogArray.map((blog) => {
            return (<BlogShowcaseComponent title={blog.title} imgSrc={blog.imgSrc} content={blog.content} />)
          })}

        </div>
      </div>


      <StayUpdatedComponent />
      <EarlyAccessFooter />
    </>
  );
};

export default EarlyAccesswhoWeAreComponent;
