import React, { useEffect, useState } from 'react'
import { logStaticPageView } from '../../Service/analytics.service'
import './index.css'
import StayUpdatedComponent from '../StayUpdatedComponent'
import EarlyAccessFooter from '../EarlyAccessFooter'
import EarlyAccessNavbar from '../EarlyAccessNavbar'
import { useNavigate } from 'react-router'


const WeServeForComponent = ({ title, imgSrc }) => {

  return (
    <div className='flex flex-col justify-center items-center border-2 shadow-2xl max-w-[20rem] w-[14rem] h-[14rem] mx-auto  mb-4 mt-4 pt-4 pb-4'>
      <img src={imgSrc} className="mx-auto" height={100} width={100} alt={title} />
      <h2 className='flex mt-4 font-semibold skillcoup-header-dark-color'>{title}</h2>
    </div>
  )
}


const EarlyAccessHomeComponent = () => {

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
    <div>
      <EarlyAccessNavbar index={1} />
      <div className='flex flex-row justify-between  bg-skillcoup-graident'>
        {/* left side div */}
        <div className='flex flex-col mt-20 ml-5 justify-center v-screen'>
          <div className='flex flex-row'>
            <h2 className='font-bold header-platform whitespace-nowrap'>Make Your</h2>
            <h2 className='font-bold header-platform bg-skillcoup-gradient-text ml-2'> {changingtext}</h2>
          </div>
          <h2 className='font-bold header-platform whitespace-nowrap'>Work for You</h2>
          <button className='mt-3 ml-3 global-btn-large' onClick={()=>{navigate("/early-access")}}>Get Early Access</button>
        </div>
        <div className='flex justify-end flex-col items-end m-0 p-0'>
          <img src='https://res.cloudinary.com/skillcoup/image/upload/v1680190584/5260432-removebg-preview_1_gaoxno.svg' height="90%" width="90%" />
        </div>
      </div>
      <h2 className='flex justify-center mt-10 mb-2 font-bold text-4xl skillcoup-header-dark-color'>We Serve For</h2>
      <div className='flex flex-wrap mr-44 ml-44 justify-center '>
        {weServeForArray.slice(0, 3).map((item) => {
          return (
            <WeServeForComponent title={item.title} imgSrc={item.img} />
          )
        })}
      </div>
      <div className='flex flex-wrap mr-40 ml-40 justify-center '>
        {weServeForArray.slice(3, 6).map((item) => {
          return (
            <WeServeForComponent title={item.title} imgSrc={item.img} />
          )
        })}
      </div>

      <div className='flex justify-center flex-col items-center'>
        <h2 className=' mt-20 font-bold text-5xl skillcoup-header-dark-color'>The commission-free revolution of freelancing</h2>
        <h2 className=' font-medium mt-3 text-4xl skillcoup-header-dark-color'>Keep 100% of what you earn with Skillcoup</h2>
        <button className='mt-5 ml-3 global-btn-large'>Get Early Access</button>
      </div>

      {/* what we offer section */}
      <h2 className='flex justify-center mt-10 mb-2 font-bold text-4xl skillcoup-header-dark-color'>What we offer</h2>

      <div className="justify-content-center flex-on row">
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <p class="text-features-color">No commission</p>
            <p class="text-features">Platform</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features-color m-1">{"Verified"}</p>
            <p class="text-features m-1">{"Profiles"}</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features-color m-1">Priority</p>
            <p class="text-features m-1">Support</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features m-1">Post a Job-</p>
            <p class="text-features-color m-1"> It's</p>
            <p class="text-features-color m-1">Free</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features m-1">Early Access</p>
            <p class="text-features-color m-1">to new updates</p>
          </div>
        </div>
      </div>
      {/* Signup for early Access */}
      <div className='flex justify-center flex-col items-center'>
        <h2 className=' mt-20 font-bold text-5xl skillcoup-header-dark-color'>Signup for Early Access</h2>
        <button className='mt-5 ml-3 global-btn-large'>Get Early Access</button>
      </div>

      <StayUpdatedComponent />
      <EarlyAccessFooter />
    </div>
  )
}

export default EarlyAccessHomeComponent