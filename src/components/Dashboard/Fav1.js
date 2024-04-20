import React from "react";
import TotalCoin1 from "../Currencies/TotalCoin1";
import btc from "../../assets/image/btc.png";
import eth from "../../assets/image/eth.png";
import usdt from "../../assets/image/usdt.png";
import bnb from "../../assets/image/bnb.png";
import sol from "../../assets/image/sol.png";
import xrp from "../../assets/image/xrp.png";
import usdc from "../../assets/image/usdc.png";
import doge from "../../assets/image/doge.png";
import ada from "../../assets/image/ada.png";
import avax from "../../assets/image/avax.png";
import shib from "../../assets/image/shib.png";
import dot from "../../assets/image/dot.png";
import link from "../../assets/image/link.png";
import wbtc from "../../assets/image/wbtc.png";
import trx from "../../assets/image/trx.png";
import matic from "../../assets/image/matic.png";
import bch from "../../assets/image/bch.png";
import icp from "../../assets/image/icp.png";
import near from "../../assets/image/near.png";
import uni from "../../assets/image/uni.png";
import ltc from "../../assets/image/ltc.png";
import apt from "../../assets/image/apt.png";
import dai from "../../assets/image/dai.png";
import stx from "../../assets/image/stx.png";
import fil from "../../assets/image/fil.png";
import atom from "../../assets/image/atom.png";
import arb from "../../assets/image/arb.png";
import rndr from "../../assets/image/rndr.png";
import imx from "../../assets/image/imx.png";
import ethfi from "../../assets/image/ethfi.png";
import bome from "../../assets/image/bome.png";
import aevo from "../../assets/image/aevo.png";
import ocean from "../../assets/image/ocean.png";
import req from "../../assets/image/req.png";
import etc from "../../assets/image/etc.png";

import "../../assets/css/fav1.scss";

const coinData = [
  {
    id: 1,
    img: btc,
    currencyName: "BTC",
    currencyTotalName: "Bitcoin",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 2,
    img: eth,
    currencyName: "ETH",
    currencyTotalName: "Ethereum",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 3,
    img: usdt,
    currencyName: "USDT",
    currencyTotalName: "TetherUS",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 4,
    img: bnb,
    currencyName: "BNB",
    currencyTotalName: "BNB",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 5,
    img: sol,
    currencyName: "SOL",
    currencyTotalName: "Solana",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 6,
    img: xrp,
    currencyName: "XRP",
    currencyTotalName: "Ripple",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 7,
    img: usdc,
    currencyName: "USDC",
    currencyTotalName: "USD Coin",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 8,
    img: doge,
    currencyName: "DOGE",
    currencyTotalName: "Dogecoin",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 9,
    img: ada,
    currencyName: "ADA",
    currencyTotalName: "Cardano",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 10,
    img: avax,
    currencyName: "AVAX",
    currencyTotalName: "Avalanche",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 11,
    img: shib,
    currencyName: "SHIB",
    currencyTotalName: "SGUBA INU",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 12,
    img: dot,
    currencyName: "DOT",
    currencyTotalName: "Polkadot",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 13,
    img: link,
    currencyName: "LINK",
    currencyTotalName: "ChainLink",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  {
    id: 14,
    img: wbtc,
    currencyName: "WBTC",
    currencyTotalName: "Wrappped Bitcoin",
    dollar: "******",
    Bdollar: "$34.00B",
    percent: "0.00%",
    actionicon1: "Cash In"
  },
  
];

const Fav1 = () => {
  return (

      <div className="fav">
        <div className="first">
          <div className="subfirst">
            <a href="#">Markets</a>
            <a href="#">Discover</a>
          </div>
        </div>

        <div className="second">
          <div className="subsecond">
            <a href="#">All</a>
            <a href="#">RWA</a>
            <a href="#">Meme</a>
          </div> 
          <div className="subsecond">
            <a href="#">Favorite</a>
            <a href="#">Top Gainers</a>
            <a href="#">24h Volume</a> 
          </div>
        </div>


        <div className="firthMenu">
          <div className="totalcurrencyMenu">
            <div className="imgNameMenu">
              Popular Coins
            </div>
            <div className="percentMenu">
              Amount
             
            </div>
            <div className="BdollarMenu">
              Coin Price

            </div>
            <div className="marketMenu">
              Growth(last 3 years)
            </div>
            <div className="actioniconMenu">
              Actions
            </div>
          </div>
        </div>
        <div className="firth">
          {coinData.map((item, key) => {
            return (
              <TotalCoin1
                key={key}
                totalCoin={item}
              />
            )
          })}
        </div>
        <div className="fifth">
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a class="active" href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
   
  );
};

export default Fav1;