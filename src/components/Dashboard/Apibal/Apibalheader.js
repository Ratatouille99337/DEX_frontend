import React from "react";
import "../../../assets/css/Reward/rewardheader.scss";
import "../../../assets/css/Apibal/apiheader.scss";
import reward from "../../../assets/image/rewards.svg";
import api2 from "../../../assets/image/api2.png";
const Apibalheader = () => {
  return (
    <div className="apiheader">
      <div className="titlecen">
        <div className="text">
          <div className="title">
            <p>Binance API</p>
          </div>
          <div className="subtitle">
            <p>Unlimited Opportunities with One Key.</p>
          </div>
        </div>
        <div className="img">
          <img src={api2} />
        </div>
      </div>
    </div>
  );
};

export default Apibalheader;
