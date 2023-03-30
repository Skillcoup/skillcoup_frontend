import React, { useEffect, useState } from 'react'
import { logStaticPageView } from '../../Service/analytics.service'
import './index.css'


const WeServeForComponent = ({ title, imgSrc }) => {

  return (
    <div className='flex flex-col justify-center items-center border-2 shadow-2xl max-w-[20rem] w-[16rem] h-[16rem] mr-16 ml-16 mb-4 mt-4 pt-4 pb-4'>
      <img src={imgSrc} height={100} width={100} alt={title} />
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

useEffect(()=>{
  console.log("im here ")
  logStaticPageView("EarlyAccess_Home","direct");
},[])

  return (
    <div>
      <div className='flex flex-row justify-between  bg-skillcoup-graident'>
        {/* left side div */}
        <div className='flex flex-col justify-center ml-20'>
          <div className='flex flex-row'>
            <h2 className='font-bold text-6xl'>Make Your</h2>
            <h2 className='font-bold text-6xl bg-skillcoup-gradient-text ml-2'> {changingtext}</h2>
          </div>
          <h2 className='font-bold text-6xl'>Work for You</h2>
          <button className='mt-3 ml-3 global-btn-large'>Get Early Access</button>
        </div>
        <div className='flex mt-10 mr-16'>
          <img src='https://res.cloudinary.com/skillcoup/image/upload/v1680190584/5260432-removebg-preview_1_gaoxno.svg' height="100%" width="100%" />
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
      {/* Signup for early Access */}
      <div className='flex justify-center flex-col items-center'>
        <h2 className=' mt-20 font-bold text-5xl skillcoup-header-dark-color'>Signup for Early Access</h2>
        <button className='mt-5 ml-3 global-btn-large'>Get Early Access</button>
      </div>
    </div>
  )
}

export default EarlyAccessHomeComponent