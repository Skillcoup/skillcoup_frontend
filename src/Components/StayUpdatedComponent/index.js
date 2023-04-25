import React, { useRef } from "react";



const StayUpdatedComponent = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const socialMediaArray = [
    {
      name: "Instagram",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Instagram_c3s6js.svg",
      link: ""
    },
    {
      name: "Linkedin",
      imgSrc: 'https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/LinkedIn_qtlpuw.svg',
      link: ""
    },
    {
      name: "Facebook",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Facebook_npsgjc.svg",
      link: ""
    },
    {
      name: "Twitter",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Twitter_sp9gwu.svg",
      link: ""
    },
    {
      name: "Telegram",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Telegram_sxysze.svg",
      link: ""
    },
  ]

  return (
    <div className="flex justify-center ">
      <div className="flex mt-12 mb-16 pt-10 pb-10 rounded-2xl shadow-xl flex-col skillcoup-light-bg w-2/3 items-center justify-center" >
        <h3 className=" text-xl font-semibold md:text-3xl mb-12">Stay updated at</h3>
        {windowSize.current[0] >= 640 && (<div className="flex flex-row justify-center">
          {socialMediaArray.map((item) => {
            return (
              <a href={item.link}>
                <img src={item.imgSrc} height={40} width={40} alt={item.name} className="ml-4 mr-4" />
              </a>
            )
          })}
        </div>)}
        {windowSize.current[0] < 640 && (<div className="flex flex-row justify-center">
          {socialMediaArray.map((item) => {
            return (
              <a href={item.link}>
                <img src={item.imgSrc} height={30} width={30} alt={item.name} className="ml-4 mr-4" />
              </a>
            )
          })}
        </div>)}

      </div>
    </div>
  );
};

export default StayUpdatedComponent;