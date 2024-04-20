import React from "react";
import "../../../assets/css/Reward/rewardheader.scss";
import "../../../assets/css/Apibal/apivip.scss";
import reward from "../../../assets/image/rewards.svg";
import api2 from "../../../assets/image/api2.png";
import apiimg2 from "../../../assets/image/apiimg2.svg";
import apiimg3 from "../../../assets/image/apiimg3.svg";
const Made = () => {
  return (
    <div className="ApiVip">
      <div className="img">
        <img src={apiimg3} />
      </div>
      <div className="vipcon">
        <div className="viptitle">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.9556 8.00001L4.95557 8L4.95557 40L44.9556 40L44.9556 8.00001ZM38.9556 30H22.9556V34H38.9556V30Z" fill="url(#paint0_linear_1325_4588)"></path><path d="M4.95557 8H44.9556V12H4.95557V8Z" fill="#76808F"></path><path d="M9.64209 18.3431L12.4705 15.5146L20.9558 23.9999L12.4705 32.4852L9.64209 29.6568L15.2989 23.9999L9.64209 18.3431Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear_1325_4588" x1="24.9556" y1="40" x2="24.9556" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
          <p>Made for Developers</p>
        </div>
        <div className="vipcon">
          <p>
           Facing a problem in development? Find help from the developer community. We would like to hear from your! Share your thoughts with us.
          </p>
        </div>
        <div className="vipbot">
          <div className="eachbot">
           
            <p>Dev Forum</p>
          </div>
          <div className="eachbot">
           
            <p>Dev Telegram</p>
          </div>
          <div className="eachbot">
           
            <p>Feedback Survey</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Made;
