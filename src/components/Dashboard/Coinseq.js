import React, { useState, useEffect } from "react";
import "../../assets/css/coinseq.scss";
import Coin from "../Currencies/Coin";
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

import axios from "axios";
import { devApiLink } from "../../config";

const Coinseq = () => {
  const [hotcoinData1, sethotCoinData1] = useState([]);
  const [hotcoinData11, sethotCoinData11] = useState([]);
  const [hotcoinData12, sethotCoinData12] = useState([]);
  const [hotcoinData21, sethotCoinData21] = useState([]);
  const [hotcoinData22, sethotCoinData22] = useState([]);
  const [hotcoinData31, sethotCoinData31] = useState([]);
  const [hotcoinData32, sethotCoinData32] = useState([]);
  const [hotcoinData2, sethotCoinData2] = useState([]);
  const [hotcoinData3, sethotCoinData3] = useState([]);

  const [newcoinData1, setnewCoinData1] = useState([]);
  const [newcoinData11, setnewCoinData11] = useState([]);
  const [newcoinData12, setnewCoinData12] = useState([]);
  const [newcoinData2, setnewCoinData2] = useState([]);
  const [newcoinData21, setnewCoinData21] = useState([]);
  const [newcoinData22, setnewCoinData22] = useState([]);
  const [newcoinData3, setnewCoinData3] = useState([]);
  const [newcoinData31, setnewCoinData31] = useState([]);
  const [newcoinData32, setnewCoinData32] = useState([]);

  const [topcoinData1, settopCoinData1] = useState([]);
  const [topcoinData11, settopCoinData11] = useState([]);
  const [topcoinData12, settopCoinData12] = useState([]);
  const [topcoinData2, settopCoinData2] = useState([]);
  const [topcoinData21, settopCoinData21] = useState([]);
  const [topcoinData22, settopCoinData22] = useState([]);
  const [topcoinData3, settopCoinData3] = useState([]);
  const [topcoinData31, settopCoinData31] = useState([]);
  const [topcoinData32, settopCoinData32] = useState([]);

  const [volcoinData1, setvolCoinData1] = useState([]);
  const [volcoinData11, setvolCoinData11] = useState([]);
  const [volcoinData12, setvolCoinData12] = useState([]);
  const [volcoinData2, setvolCoinData2] = useState([]);
  const [volcoinData21, setvolCoinData21] = useState([]);
  const [volcoinData22, setvolCoinData22] = useState([]);
  const [volcoinData3, setvolCoinData3] = useState([]);
  const [volcoinData31, setvolCoinData31] = useState([]);
  const [volcoinData32, setvolCoinData32] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(devApiLink + "/market/coins", {})
        .then((response) => {
          //response.data.data.sort((a, b) => a.quote.USD.price - b.quote.USD.price);
          sethotCoinData1(response.data.data[3]);
          sethotCoinData2(response.data.data[0]);
          sethotCoinData3(response.data.data[1]);

          sethotCoinData11(response.data.data[3].quote.USD.price.toFixed(2));
          sethotCoinData12(
            response.data.data[3].quote.USD.percent_change_24h.toFixed(2)
          );
          sethotCoinData21(response.data.data[0].quote.USD.price.toFixed(2));
          sethotCoinData22(
            response.data.data[0].quote.USD.percent_change_24h.toFixed(2)
          );
          sethotCoinData31(response.data.data[1].quote.USD.price.toFixed(2));
          sethotCoinData32(
            response.data.data[1].quote.USD.percent_change_24h.toFixed(2)
          );

          setnewCoinData1(response.data.data[97]);
          setnewCoinData2(response.data.data[98]);
          setnewCoinData3(response.data.data[99]);

          setnewCoinData11(response.data.data[97].quote.USD.price.toFixed(2));
          setnewCoinData12(
            response.data.data[97].quote.USD.percent_change_24h.toFixed(2)
          );
          setnewCoinData21(response.data.data[98].quote.USD.price.toFixed(2));
          setnewCoinData22(
            response.data.data[98].quote.USD.percent_change_24h.toFixed(2)
          );
          setnewCoinData31(response.data.data[99].quote.USD.price.toFixed(2));
          setnewCoinData32(
            response.data.data[99].quote.USD.percent_change_24h.toFixed(2)
          );

          response.data.data.sort(
            (a, b) =>
              b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h
          );

          settopCoinData1(response.data.data[0]);
          settopCoinData2(response.data.data[1]);
          settopCoinData3(response.data.data[2]);

          settopCoinData11(response.data.data[0].quote.USD.price.toFixed(2));
          settopCoinData12(
            response.data.data[0].quote.USD.percent_change_24h.toFixed(2)
          );
          settopCoinData21(response.data.data[1].quote.USD.price.toFixed(6));
          settopCoinData22(
            response.data.data[1].quote.USD.percent_change_24h.toFixed(2)
          );
          settopCoinData31(response.data.data[2].quote.USD.price.toFixed(6));
          settopCoinData32(
            response.data.data[2].quote.USD.percent_change_24h.toFixed(2)
          );

          response.data.data.sort(
            (a, b) => b.quote.USD.price - a.quote.USD.price
          );

          setvolCoinData1(response.data.data[0]);
          setvolCoinData2(response.data.data[1]);
          setvolCoinData3(response.data.data[2]);

          setvolCoinData11(response.data.data[0].quote.USD.price.toFixed(2));
          setvolCoinData12(
            response.data.data[0].quote.USD.percent_change_24h.toFixed(2)
          );
          setvolCoinData21(response.data.data[1].quote.USD.price.toFixed(2));
          setvolCoinData22(
            response.data.data[1].quote.USD.percent_change_24h.toFixed(2)
          );
          setvolCoinData31(response.data.data[2].quote.USD.price.toFixed(2));
          setvolCoinData32(
            response.data.data[2].quote.USD.percent_change_24h.toFixed(2)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="coinseq">
        <div className="subCoinGroup">
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">Hot Coins</div>
              <div className="more"></div>
            </div>
            <div className="coinRank">
              <Coin
                img={hotcoinData1.id}
                currencyName={hotcoinData1.name}
                dollar={hotcoinData11}
                percent={hotcoinData12}
              />
              <Coin
                img={hotcoinData2.id}
                currencyName={hotcoinData2.name}
                dollar={hotcoinData21}
                percent={hotcoinData22}
              />
              <Coin
                img={hotcoinData3.id}
                currencyName={hotcoinData3.name}
                dollar={hotcoinData31}
                percent={hotcoinData32}
              />
            </div>
          </div>
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">New Listing</div>
              <div className="more"></div>
            </div>
            <div className="coinRank">
              <Coin
                img={newcoinData1.id}
                currencyName={newcoinData1.name}
                dollar={newcoinData11}
                percent={newcoinData12}
              />
              <Coin
                img={newcoinData2.id}
                currencyName={newcoinData2.name}
                dollar={newcoinData21}
                percent={newcoinData22}
              />
              <Coin
                img={newcoinData3.id}
                currencyName={newcoinData3.name}
                dollar={newcoinData31}
                percent={newcoinData32}
              />
            </div>
          </div>
        </div>
        <div className="subCoinGroup">
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">Top Gainer Coin</div>
              <div className="more"></div>
            </div>
            <div className="coinRank">
              <Coin
                img={topcoinData1.id}
                currencyName={topcoinData1.name}
                dollar={topcoinData11}
                percent={topcoinData12}
              />
              <Coin
                img={topcoinData2.id}
                currencyName={topcoinData2.name}
                dollar={topcoinData21}
                percent={topcoinData22}
              />
              <Coin
                img={topcoinData3.id}
                currencyName={topcoinData3.name}
                dollar={topcoinData31}
                percent={topcoinData32}
              />
            </div>
          </div>
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">Top Volume Coin</div>
              <div className="more"></div>
            </div>
            <div className="coinRank">
              <Coin
                img={volcoinData1.id}
                currencyName={volcoinData1.name}
                dollar={volcoinData11}
                percent={volcoinData12}
              />
              <Coin
                img={volcoinData2.id}
                currencyName={volcoinData2.name}
                dollar={volcoinData21}
                percent={volcoinData22}
              />
              <Coin
                img={volcoinData3.id}
                currencyName={volcoinData3.name}
                dollar={volcoinData31}
                percent={volcoinData32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinseq;
