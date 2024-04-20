import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/coincard.scss";

const Coincard = ({ title, className, coinDatas }) => {
  return (
    <div className="eachCoin">
      <div className="coinHeader">
        <div className="hotCoin">
          {title}
        </div>
      </div>
      <div className="coinRank">
        {
          coinDatas.map(({ coinlogo, currencyName, dollar, percent }) => {
            return(
              <Coin
              img={coinlogo}
              currencyName={currencyName}
              percent={percent}
              dollar={dollar}
              
            />
            )
            
          })
        }
      </div>
    </div>


  );
};

export default Coincard;
