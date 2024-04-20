import React from "react";

// load assets
import "../../assets/css/Recurring/crypto.scss";

const Cryptos = ({ img, currencyName, dollar, percent, className }) => {
  return (
    <div className="cryptos">
      <div className="coinName">
        <div className="coinGroup">
          <div className="img">
            <img src={img} />
          </div>
          <div className="currencyName">{currencyName}</div>
        </div>
        <div className="dollar">
          <p>{dollar}</p>
        </div>
      </div>
      <div className="coinName">
        
          <p>HistoricalROI</p>
       
        <div className="value">
          {percent.indexOf("-") >= 0 ? (
            <p style={{ color: "#F6465D" }}>{percent}</p>
          ) : (
            <p>{percent}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cryptos;
