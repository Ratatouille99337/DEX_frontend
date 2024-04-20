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
      <div className="btcChange">{coinItem?.btc} BTC</div>
      <div className="usdChange">{coinItem?.usd} USD</div>
    </div>
  );
};

export default Coinchange;
