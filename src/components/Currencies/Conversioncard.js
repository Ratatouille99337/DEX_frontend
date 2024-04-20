import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Buycryptor/concard.scss";
import btc from "../../assets/image/btc.png";

const ConversionCard = ({ conItem }) => {
  return (
    <div className="eachCard">
      <div className="cardText">
        <div className="cardHeader">{conItem?.conName} </div>
        <div className="cardCon">{conItem?.conRate}</div>
      </div>
      <div className="cardRank">
        <div className="imggroup">
          <img src={btc} />

        </div>
        <div className="img">
          <img src={conItem?.img} />
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
