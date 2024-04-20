import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Recurring/cardfromto.scss";

const Coinfromto = ({ cardlogo, cardtitle}) => {
  return (
    <div className="formCard">
      <div className="img">
        <img src={cardlogo}/>
      </div>
      <div className="title">
        <p>{cardtitle}</p>
      </div>
    </div>


  );
};

export default Coinfromto;
