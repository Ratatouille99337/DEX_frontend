import React, { useState, useEffect } from "react";
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

import axios from "axios";
import { devApiLink } from "../../config";

const Fav = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(devApiLink + "/market/coins", {})
        .then((response) => {
          //console.log(response.data.data);
          setCoinData(response.data.data);
          // console.log(coinData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

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
              Get a comprehensive snapshot of all cryptocurrencies available on
              Binance. This page displays the latest prices, 24-hour trading
              volume, price changes, and market capitalizations for all crypt...
            </div>
            <div className="explainMore">Show More</div>
          </div>
        </div>
        <div className="firthMenu">
          <div className="totalcurrencyMenu">
            <div className="imgNameMenu">Name</div>
            <div className="dollarMenu">
              Price
              <select>
                <option>1h</option>
                <option>4h</option>
                <option>24h</option>
              </select>
            </div>
            <div className="percentMenu">Change</div>
            <div className="BdollarMenu">24h Volume</div>
            <div className="marketMenu">Market Cap</div>
            <div className="actioniconMenu">Actions</div>
          </div>
        </div>
        <div className="firth">
          {coinData.map((item, key) => {
            return <TotalCoin key={coinData._id} totalCoin={item} />;
          })}
        </div>
        <div className="fifth">
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a class="active" href="#">
              1
            </a>
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
