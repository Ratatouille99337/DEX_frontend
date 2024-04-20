import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Buycryptor/buycard2.scss";

const Buycard2 = ({ cardlogo, cardtitle}) => {
  return (
    <div className="buyWith">
    
      <div className="buyWithLogo">
        <div className="buyCardImg">
          <img src={cardlogo}/>
        </div>
      </div>
      <div className="buyCardTitle">
          {cardtitle}
      </div>
    </div>


  );
};

export default Buycard2;
