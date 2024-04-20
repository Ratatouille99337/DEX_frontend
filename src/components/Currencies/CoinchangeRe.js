import React, { useEffect } from "react";

// load assets
import "../../assets/css/Buycryptor/Coinchange.scss";

const Coinchange = ({ coinItem }) => {
  // useEffect(() => {
  //   return () => {}
  // }, []);

  // useEffect(() => {
    
  // }, [coinItem])
  
  return (
    <div className="eachChange">
      <div className="btcChange">{coinItem?.btc} USD</div>
      <div className="usdChange">{coinItem?.usd} BTC</div>
    </div>
  );
};

export default Coinchange;
