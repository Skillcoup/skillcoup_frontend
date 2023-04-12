import React from "react";

import "./index.css";

const StayUpdatedComponent = () => {


  const socialMediaArray = [
    {
      name : "Instagram",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Instagram_c3s6js.svg",
      link: ""
    },
    {
      name : "Linkedin",
      imgSrc: 'https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/LinkedIn_qtlpuw.svg',
      link: ""
    },
    { name : "Facebook",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Facebook_npsgjc.svg",
      link: ""
    },
    {
      name : "Twitter",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Twitter_sp9gwu.svg",
      link: ""
    },
    {
      name : "Telegram",
      imgSrc: "https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Telegram_sxysze.svg",
      link: ""
    },
  ]

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="footer-card m-4">
        <div className="card-head text-align-center">
          <h2 className="footer-card-header mb-3">Stay updated at</h2>
        </div>
        {/* Inline Row of Icons */}
        <div className="flex flex-row justify-center">
          {socialMediaArray.map((item) => {
            return (
              <a href={item.link}>
              <img src={item.imgSrc} height={40} width={40} alt={item.name} className="ml-4 mr-4"/>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default StayUpdatedComponent;