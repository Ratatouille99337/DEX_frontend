import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Deposit/SelectCard.scss";

const SelectCard = ({ guideItem }) => {
  return (
    <div className="guideCard">
      <div className="guideimg">
        <img src={guideItem?.guidelogo} />
      </div>
      <div className="guideCon">
        <div className="guidetitle">
          <p>{guideItem?.guidetitle}</p>
        </div>
        <div className="guidetext">
          <p>{guideItem?.guidetext}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
