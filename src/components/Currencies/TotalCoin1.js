import React from "react";

// load assets
import "../../assets/css/totalCoin1.scss";

const TotalCoin = ({ totalCoin, key }) => {
  return (
    <div className="totalcurrency" key={key}>
      <div className="imgName">
        <div className="img">
          <img src={totalCoin.img} />
        </div>
        <div className="currencyName">{totalCoin.currencyName}</div>
        <div className="currencyTotalName">{totalCoin.currencyTotalName}</div>
      </div>
 
      

      <div className="dollar">{totalCoin.dollar}</div> 
      <div className="Bdollar">{totalCoin.Bdollar}</div> 
      {totalCoin.percent.indexOf("-") >= 0 ? (
        <div className="percent" style={{ color: "#F6465D" }}>
        &#8605;{totalCoin.percent}
        </div>
      ) : (
        <div className="percent"> &#8605;{totalCoin.percent}</div>
      )}

      
      <div className="actionicon1">
        <a href="">Cash In</a>
      </div>
    </div>
  );
};

export default TotalCoin;
