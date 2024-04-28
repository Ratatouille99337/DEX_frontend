import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Deposit/SelectCard.scss";

const SelectCard = ({ guideItem }) => {
  return (
    <div className="guideCard">
      <div className="guideimg">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${guideItem?.id}.png`}
          alt="Coin"
        />
      </div>
      <div className="guideCon">
        <div className="guidetitle">
          <p>{guideItem?.symbol}</p>
        </div>
        <div className="guidetext">
          <p>{guideItem?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
