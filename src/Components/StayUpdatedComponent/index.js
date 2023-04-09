import React from "react";

import "./index.css";

const StayUpdatedComponent = () => {
    return (
        <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="footer-card m-4">
          <div className="card-head text-align-center">
            <h2 className="footer-card-header mt-5 mb-3">Stay updated at</h2>
          </div>
          {/* Inline Row of Icons */}
          <div className="row mt-2 mb-5" style={{ justifyContent: "center" }}>
            <img
              src='https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Instagram_c3s6js.svg'
              style={{
                width: "70px",
              }}
              alt="Instagram"
              className="footer-icon"
            />
            <img
              src='https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/LinkedIn_qtlpuw.svg'
              style={{
                width: "70px",
              }}
              alt="Linkedin"
              className="footer-icon"
            />
            <img
              src='https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Facebook_npsgjc.svg'
              style={{
                width: "70px",
              }}
              alt="Facebook"
              className="footer-icon"
            />
            <img
              src='https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Twitter_sp9gwu.svg'
              style={{
                width: "70px",
              }}
              alt="Twitter"
              className="footer-icon"
            />
            <img
              src='https://res.cloudinary.com/skillcoup/image/upload/v1680195755/EarlyAccessFooter/logos/Telegram_sxysze.svg'
              style={{
                width: "70px",
              }}
              alt="Telegram"
              className="footer-icon"
            />
          </div>
        </div>
      </div>
    );
};

export default StayUpdatedComponent;