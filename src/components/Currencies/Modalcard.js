import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Deposit/guideCard.scss";

const GuideCard = ({ guidelogo, guidetitle, guidetext }) => {
  return (
    <div className="guideCard">
      <div className="img">
        <img src={guidelogo} />
      </div>
      <div className="guideCon">
        <div className="guidetitle">
          <p>{guidetitle}</p>
        </div>
        <div className="guidetext">
          <p>{guidetext}</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
