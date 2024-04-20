import React from "react";
import TotalCoin from "../Currencies/TotalCoin";
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

import "../../assets/css/fav.scss";

const coinData = [
  {
    id: 1,
    img: btc,
    currencyName: "BTC",
    currencyTotalName: "Bitcoin",
    dollar: "$70,865.90",
    percent: "+5.77%",
    Bdollar: "$34.00B",
    market: "$1,380.42B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 2,
    img: eth,
    currencyName: "ETH",
    currencyTotalName: "Ethereum",
    dollar: "$3,583.05",
    percent: "-1.31%",
    Bdollar: "16.19B",
    market: "$430.22B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 3,
    img: usdt,
    currencyName: "USDT",
    currencyTotalName: "TetherUS",
    dollar: "$1.00",
    percent: "+0.20%",
    Bdollar: "$75.02B",
    market: "$104.36B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 4,
    img: bnb,
    currencyName: "BNB",
    currencyTotalName: "BNB",
    dollar: "$579.30",
    percent: "-2.19%",
    Bdollar: "$2.07B",
    market: "$86.62B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 5,
    img: sol,
    currencyName: "SOL",
    currencyTotalName: "Solana",
    dollar: "$187.25",
    percent: "-3.85%",
    Bdollar: "$3.41B",
    market: "$83.19B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 6,
    img: xrp,
    currencyName: "XRP",
    currencyTotalName: "Ripple",
    dollar: "$0.6212",
    percent: "-3.45%",
    Bdollar: "$2.02B",
    market: "$34.09B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 7,
    img: usdc,
    currencyName: "USDC",
    currencyTotalName: "USD Coin",
    dollar: "$0.9999",
    percent: "+0.01%",
    Bdollar: "$8.69B",
    market: "$32.34B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 8,
    img: doge,
    currencyName: "DOGE",
    currencyTotalName: "Dogecoin",
    dollar: "$0.18338",
    percent: "-0.56%",
    Bdollar: "$3.21B",
    market: "$26.34B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 9,
    img: ada,
    currencyName: "ADA",
    currencyTotalName: "Cardano",
    dollar: "$0.6535",
    percent: "-3.68%",
    Bdollar: "$591.07M",
    market: "$23.25B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 10,
    img: avax,
    currencyName: "AVAX",
    currencyTotalName: "Avalanche",
    dollar: "$55.30",
    percent: "-4.69%",
    Bdollar: "$877.50M",
    market: "$20.87B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 11,
    img: shib,
    currencyName: "SHIB",
    currencyTotalName: "SGUBA INU",
    dollar: "$0.00003053",
    percent: "-2.08%",
    Bdollar: "$2.21B",
    market: "$17.99B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 12,
    img: dot,
    currencyName: "DOT",
    currencyTotalName: "Polkadot",
    dollar: "$9.56",
    percent: "-3.72%",
    Bdollar: "$357.95M",
    market: "$13.64B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 13,
    img: link,
    currencyName: "LINK",
    currencyTotalName: "ChainLink",
    dollar: "$19.70",
    percent: "-4.05%",
    Bdollar: "$526.01M",
    market: "$11.56B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 14,
    img: wbtc,
    currencyName: "WBTC",
    currencyTotalName: "Wrappped Bitcoin",
    dollar: "$70,137.74",
    percent: "-0.76%",
    Bdollar: "$308.36M",
    market: "$10.90B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 15,
    img: trx,
    currencyName: "TRX",
    currencyTotalName: "TRON",
    dollar: "$0.12044",
    percent: "-1.02%",
    Bdollar: "$321.21M",
    market: "$10.57B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 16,
    img: matic,
    currencyName: "MATIC",
    currencyTotalName: "Polygon",
    dollar: "$1.04",
    percent: "-2.77%",
    Bdollar: "$410.79M",
    market: "$10.26B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 17,
    img: bch,
    currencyName: "BCH",
    currencyTotalName: "Bitcoin Cash",
    dollar: "$494.10",
    percent: "+1.19%",
    Bdollar: "$795.60M",
    market: "$9.72B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 18,
    img: icp,
    currencyName: "ICP",
    currencyTotalName: "Internet Computer",
    dollar: "$19.50",
    percent: "+0.58%",
    Bdollar: "$574.12M",
    market: "$8.99B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 19,
    img: near,
    currencyName: "NEAR",
    currencyTotalName: "MEAR Protocol",
    dollar: "$7.70",
    percent: "-3.12%",
    Bdollar: "$710.55M",
    market: "$8.12B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 20,
    img: uni,
    currencyName: "UNI",
    currencyTotalName: "Uniswap",
    dollar: "$12.60",
    percent: "-0.95%",
    Bdollar: "$156.86M",
    market: "$7.54B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 21,
    img: ltc,
    currencyName: "LTC",
    currencyTotalName: "Litecoin",
    dollar: "$97.41",
    percent: "+6.70%",
    Bdollar: "$1.26B",
    market: "$7.24B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 22,
    img: apt,
    currencyName: "APT",
    currencyTotalName: "Aptos",
    dollar: "$17.92",
    percent: "-2.21%",
    Bdollar: "$657.17M",
    market: "$7.10B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 23,
    img: dai,
    currencyName: "DAI",
    currencyTotalName: "Dai",
    dollar: "$0.99979336",
    percent: "+0.90%",
    Bdollar: "$533.85M",
    market: "$5.34B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 24,
    img: stx,
    currencyName: "STX",
    currencyTotalName: "Stacks",
    dollar: "$3.49",
    percent: "-2.23%",
    Bdollar: "$186.00M",
    market: "$5.06B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 25,
    img: fil,
    currencyName: "FIL",
    currencyTotalName: "Filecoin",
    dollar: "$9.38",
    percent: "-2.08%",
    Bdollar: "$376.84M",
    market: "$4.94B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 26,
    img: atom,
    currencyName: "ATOM",
    currencyTotalName: "Cosmos",
    dollar: "$12.13",
    percent: "-1.17%",
    Bdollar: "$290.51M",
    market: "$4.74B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 27,
    img: etc,
    currencyName: "ETC",
    currencyTotalName: "Ethereum Classic",
    dollar: "$31.75",
    percent: "-3.14%",
    Bdollar: "$273.93M",
    market: "$4.64B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 28,
    img: arb,
    currencyName: "ARB",
    currencyTotalName: "Arbitrum",
    dollar: "$1.69",
    percent: "-3.02%",
    Bdollar: "$542.64M",
    market: "$4.47B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 29,
    img: rndr,
    currencyName: "RNDR",
    currencyTotalName: "Render Token",
    dollar: "$11.51",
    percent: "+0.81%",
    Bdollar: "$346.14M",
    market: "$4.39B",
    actionicon1: btc,
    actionicon2: btc,
  },
  {
    id: 30,
    img: imx,
    currencyName: "IMX",
    currencyTotalName: "ImmutableX",
    dollar: "$2.98",
    percent: "-6.03%",
    Bdollar: "$93.32M",
    market: "$4.24B",
    actionicon1: btc,
    actionicon2: btc,
  },

];

const Fav = () => {
  return (
    <div className="container">
      <div className="fav">
        <div className="first">
          <div className="subfirst">
            <a href="#">Favorites</a>
            <a href="#">All Cryptos</a>
            <a href="#">Spot/Margin Market</a>
          </div>
          <div className="subfirst">
            <a href="#">Futures Markets</a>
            <a href="#">New Listing</a>
            <a href="#">Zones</a>
          </div>
        </div>

        <div className="second">
          <div className="subsecond">
            <a href="#">All</a>
            <a href="#">RWA</a>
            <a href="#">Meme</a>
          </div> 
          <div className="subsecond">
            <a href="#">payments</a>
            <a href="#">AI</a>
            <a href="#">Layer 1/Layer 2</a> 
          </div>
          <div className="subsecond">
            <a href="#">Metaverse</a>
            <a href="#">Monitoring</a>
            <a href="#">Others</a>
          </div>
        </div>

        <div className="third">
          <div className="explain">
            <div className="explainTitle">
              Top Tokens by Market Capitalization
            </div>
            <div className="explainContent">
              Get a comprehensive snapshot of all cryptocurrencies available on Binance. This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all crypt...
            </div>
            <div className="explainMore">
              Show More
            </div>
          </div>
        </div>
        <div className="firthMenu">
          <div className="totalcurrencyMenu">
            <div className="imgNameMenu">
              Name
            </div>
            <div className="dollarMenu">
              Price
              <select>
                <option>1h</option>
                <option>4h</option>
                <option>24h</option>
              </select>
              
            </div>
            <div className="percentMenu">
              Change

            </div>
            <div className="BdollarMenu">
              24h Volume
            </div>
            <div className="marketMenu">
              Market Cap
            </div>
            <div className="actioniconMenu">
              Actions
            </div>
          </div>
        </div>
        <div className="firth">
          {coinData.map((item, key) => {
            return (
              <TotalCoin
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
    </div>
  );
};

export default Fav;