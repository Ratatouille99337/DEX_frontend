import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Deposit/guideCard.scss";

const GuideCard = ({ guidelogo, guidetitle }) => {
  return (
    <div className="guideCard3">
      <div className="guideimg">
        <img src={guidelogo} />
      </div>
      <div className="guideCon">
        <div className="guidetitle">
          <p>{guidetitle}</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
