import React, { useEffect, useState, useRef } from 'react'
import { logStaticPageView } from '../../Service/analytics.service'
import './index.css'
import StayUpdatedComponent from '../StayUpdatedComponent'
import EarlyAccessFooter from '../EarlyAccessFooter'
import EarlyAccessNavbar from '../EarlyAccessNavbar'
import { useNavigate } from 'react-router'
import Lottie from "react-lottie";
import workHardAnimation from "../../assets/Animation/MultiTasking.json"
import checkMark from "../../assets/CheckMarkPng.png"
import { classNames } from '../../lib/class-names'


const WeServeForComponent = ({ title, imgSrc }) => {
  let showSmall = title.length < 17 ? false : true;
  return (
    <div className='flex flex-col justify-center items-center rounded-xl border-2 shadow-2xl w-[8rem] h-[8rem] ml-5 mr-5 mt-6 p-10 lg:max-w-[20rem] lg:w-[14rem] lg:h-[14rem] md:mr-12 md:ml-12 lg:mb-4 lg:mt-4 lg:pt-4 lg:pb-4'>
      <img src={imgSrc} alt={title} width={100} height={100} />
      <h2 className={classNames('flex mt-4 items-center font-semibold skillcoup-header-dark-color', showSmall && ('text-sm'))}>{title}</h2>
    </div>
  )
}


const EarlyAccessHomeComponent = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: workHardAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [changingtext, setChangingtext] = useState("Skill");

  const weServeForArray = [
    {
      img: 'https://res.cloudinary.com/skillcoup/image/upload/v1680193442/EarlyAccessHome/DesignImg_yxxdsx.svg',
      title: "Design"
    },
    {
      img: 'https://res.cloudinary.com/skillcoup/image/upload/v1680193442/EarlyAccessHome/Digitalmarketing_ustk0k.svg',
      title: "Digital Marketing"
    },
    {
      img: 'https://res.cloudinary.com/skillcoup/image/upload/v1680193442/EarlyAccessHome/WritingnTranslation_pjhg7c.svg',
      title: "Writing & Translation"
    },
    {
      img: '',
      title: "Web & App Development"
    },
    {
      img: 'https://res.cloudinary.com/skillcoup/image/upload/v1680193442/EarlyAccessHome/MusicnAudio_qaxw8a.svg',
      title: "Music & Audio"
    },
    {
      img: 'https://res.cloudinary.com/skillcoup/image/upload/v1680193442/EarlyAccessHome/VideoNAnimation_naqddp.svg',
      title: "Video & Animation"
    }
  ]

  useEffect(() => {

    const intervalId = setInterval(() => {
      setChangingtext((prevText) => {
        return prevText === "Skill" ? "Money" : "Skill";
      });
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [])

  useEffect(() => {

    logStaticPageView("EarlyAccess_Home", "direct");
  }, [])

  const navigate = useNavigate();
  return (
    <div className='overflow-hidden global-bg-color'>
      <EarlyAccessNavbar index={1} />
      <div className='flex flex-row justify-between '>
        {/* left side div */}
        <div className='flex flex-col justify-center mt-5 ml-14 lg:ml-20'>
          <div className='flex flex-row'>
            {/* h1 */}
            <h1 className='font-bold text-4xl lg:text-6xl'>Make Your</h1>
            <h2 className='text-4xl font-bold lg:text-6xl bg-skillcoup-gradient-text ml-2'> {changingtext}</h2>
          </div>
          <h2 className='text-4xl font-bold lg:text-6xl'>Work for You</h2>
          {windowSize.current[0] >= 640 && (<button className='mt-5 ml-3 global-btn-large' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
          {windowSize.current[0] < 640 && (<button className='mt-3 ml-3 global-btn-large-mobile' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}
        </div>
        <div className='hidden md:flex mt-10 mr-16'>
          <img src='https://res.cloudinary.com/skillcoup/image/upload/v1680190584/5260432-removebg-preview_1_gaoxno.svg' height="100%" width="100%" />

        </div>
      </div>
      {windowSize.current[0] >= 640 && (<div>

        <h2 className='flex justify-center mt-10 lg:mt-10 lg:mb-10 font-bold text-3xl lg:text-5xl skillcoup-header-dark-color'>We Serve For</h2>
        <div className='flex flex-wrap mr-44 ml-44 justify-center '>
          {weServeForArray.slice(0, 3).map((item) => {
            return (
              <WeServeForComponent title={item.title} imgSrc={item.img} />
            )
          })}
        </div>
        <div className='flex flex-wrap mr-40 ml-40 mb-14 justify-center '>
          {weServeForArray.slice(3, 6).map((item) => {
            return (
              <WeServeForComponent title={item.title} imgSrc={item.img} />
            )
          })}
        </div>
      </div>)}
      {windowSize.current[0] < 640 && (
        <div>
          <h2 className='flex justify-center mt-10 lg:mt-10 lg:mb-10 font-bold text-3xl lg:text-5xl skillcoup-header-dark-color'>We Serve For</h2>
          <div className='flex flex-wrap justify-center'>
            {weServeForArray.map((item) => {
              return (
                <WeServeForComponent title={item.title} imgSrc={item.img} />
              )
            })}
          </div>
        </div>
      )}

      <div className='flex justify-center mb-32 flex-col items-center'>
        {windowSize.current[0] < 640 && (<h3 className='mt-20 font-bold text-xl skillcoup-header-dark-color'>The commission-free revolution</h3>)}
        {windowSize.current[0] >= 640 && (<h3 className='mt-20 font-bold text-5xl skillcoup-header-dark-color'>The commission-free revolution of freelancing</h3>)}
        <h3 className=' font-light mt-3 text-md md:text-4xl skillcoup-header-dark-color'>Keep 100% of what you earn with Skillcoup</h3>
        {windowSize.current[0] >= 640 && (<button className='mt-5 mb-2 ml-3 global-btn-large'>Get Early Access</button>)}
        {windowSize.current[0] < 640 && (<button className='mt-4 ml-3 global-btn-large-mobile' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}

      </div>

      {/* what we offer section */}
      <h2 className='flex justify-center mt-10 mb-10  font-bold text-3xl md:text-5xl skillcoup-header-dark-color'>What we offer</h2>

      <div className="justify-content-center flex-on row space-y-4">
        <div className="p-3 shadow-md rounded-2xl w-2/3 h-1/12 bg-white">

          <div className='flex justify-center ml-6'>
            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg">No commission</p>
            <p class="skillcoup-header-dark-color font-medium md:font-semibold md:text-xl text-lg pl-1">Platform</p>
          </div>
        </div>
        <div className="p-3 shadow-md rounded-2xl w-2/3  bg-white">
          <div className='flex justify-center ml-6'>
            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg">{"Verified"}</p>
            <p class="skillcoup-header-dark-color font-medium md:font-semibold md:text-xl text-lg pl-1">{"Profiles"}</p>
          </div>
        </div>
        <div className="p-3 shadow-md rounded-2xl w-2/3 bg-white">
          <div className='flex justify-center ml-6'>

            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg">Priority</p>
            <p class="skillcoup-header-dark-color font-medium md:font-semibold md:text-xl text-lg pl-1">Support</p>
          </div>
        </div>
        <div className="p-3 shadow-md rounded-2xl w-2/3  bg-white">

          <div className='flex justify-center ml-6'>

            <p class="tskillcoup-header-dark-color font-medium md:font-semibold md:text-xl text-lg pl-1">Post a Job-</p>
            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg"> It's</p>
            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg">Free</p>
          </div>
        </div>
        <div className="p-3 shadow-md rounded-2xl w-2/3 bg-white">

          <div className='flex justify-center ml-6'>

            <p class="skillcoup-header-dark-color font-medium md:font-semibold md:text-xl text-lg pl-1">Early Access</p>
            <p class="skillcoup-header-pop-color font-medium md:font-semibold md:text-xl text-lg">to new updates</p>
          </div>
        </div>
      </div>
      {/* Signup for early Access */}
      <div className='flex justify-center flex-col items-center mt-10 mb-12 md:mt-16 md:mb-24'>
        <h2 className=' mt-20 font-bold text-3xl md:text-5xl skillcoup-header-dark-color'>Signup for Early Access</h2>
        {windowSize.current[0] > 640 && (<button className='mt-5 ml-3 global-btn-large'>Get Early Access</button>)}
        {windowSize.current[0] <= 640 && (<button className='mt-3 ml-3 global-btn-large-mobile' onClick={() => { navigate("/early-access") }}>Get Early Access</button>)}

      </div>


      <StayUpdatedComponent />

      <EarlyAccessFooter />
    </div>
  )
}

export default EarlyAccessHomeComponent