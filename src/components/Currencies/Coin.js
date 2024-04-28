import React from "react";

// load assets
import "../../assets/css/coin.scss";

const Coin = ({
  img,
  currencyName,
  currencyTotalName,
  dollar,
  percent,
  className,
}) => {
  return (
    <div className="currency1">
      <div className="imgName">
        <div className="img">
          <img
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${img}.png`}
            alt="Coin"
          />
        </div>
        <div className="currencyName">{currencyName}</div>
        <div className="currencyTotalName">{currencyTotalName}</div>
      </div>
      <div className="dollar">${dollar}</div>
      {percent <= 0 ? (
        <div className="percent" style={{ color: "#F6465D" }}>
          {percent}%
        </div>
      ) : (
        <div className="percent">{percent}%</div>
      )}
    </div>
  );
};

export default Coin;
