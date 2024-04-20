import React from "react";

// load assets
import "../../assets/css/totalCoin.scss";

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
      {totalCoin.percent.indexOf("-") >= 0 ? (
        <div className="percent" style={{ color: "#F6465D" }}>
          {totalCoin.percent}
        </div>
      ) : (
        <div className="percent">{totalCoin.percent}</div>
      )}

      <div className="Bdollar">{totalCoin.Bdollar}</div>
      <div className="market">{totalCoin.market}</div>
      <div className="actionicon3">
        <svg
          class="bn-svg h-5 w-5"
          alt="Detail"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 3H3v18h9.222A5.5 5.5 0 0118 11.97V3zM5.02 9.286L8.556 5.75l3.182 3.182 3.181-3.182 1.061 1.06-4.242 4.243-3.182-3.182-2.475 2.475-1.061-1.06zm12.544 9.278a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zm1.414-4.242a4.002 4.002 0 01.744 4.63l2.276 2.278-1.767 1.767-2.277-2.276a4.002 4.002 0 01-4.633-6.4 4 4 0 015.657 0z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="actionicon2">
        <svg
          class="bn-svg h-5 w-5"
          alt="Trade"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 3h3v4h3v9.999h-3v4h-3v-4h-3V7h3V3zm3 7h-3v3.999h3V10z"
            fill="currentColor"
          ></path>
          <path d="M8 11h3v6H8v4H5v-4H2v-6h3V7h3v4z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default TotalCoin;
