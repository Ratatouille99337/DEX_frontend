import React from "react";
import "../../../assets/css/Buycryptor/bmarkets.scss";
import LineChart from "../../chart/LineChart.js";
import ChartComponent from "../../chart/LightweightChart.js";
import btc from "../../../assets/image/btc.png";
import graph from "../../../assets/image/gragh.png";
import eth from "../../../assets/image/eth.png";
import usdt from "../../../assets/image/usdt.png";
import bnb from "../../../assets/image/bnb.png";
import sol from "../../../assets/image/sol.png";
import xrp from "../../../assets/image/xrp.png";
import usdc from "../../../assets/image/usdc.png";
import doge from "../../../assets/image/doge.png";
import ada from "../../../assets/image/ada.png";
import avax from "../../../assets/image/avax.png";
import shib from "../../../assets/image/shib.png";
import dot from "../../../assets/image/dot.png";
import link from "../../../assets/image/link.png";
import wbtc from "../../../assets/image/wbtc.png";
import trx from "../../../assets/image/trx.png";
import matic from "../../../assets/image/matic.png";
import bch from "../../../assets/image/bch.png";
import icp from "../../../assets/image/icp.png";
import near from "../../../assets/image/near.png";
import uni from "../../../assets/image/uni.png";
import ltc from "../../../assets/image/ltc.png";
import apt from "../../../assets/image/apt.png";
import dai from "../../../assets/image/dai.png";
import stx from "../../../assets/image/stx.png";
import fil from "../../../assets/image/fil.png";
import atom from "../../../assets/image/atom.png";
import arb from "../../../assets/image/arb.png";
import rndr from "../../../assets/image/rndr.png";
import imx from "../../../assets/image/imx.png";
import ethfi from "../../../assets/image/ethfi.png";
import bome from "../../../assets/image/bome.png";
import aevo from "../../../assets/image/aevo.png";
import ocean from "../../../assets/image/ocean.png";
import req from "../../../assets/image/req.png";

const Bmarkets = (props) => {
  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];
  return (
    <div className="container">
      <div className="bmarkets">
        <div className="p">Bitcoin Markets</div>

        <div className="bmarketsarea">
          <div className="graph">
            <div className="bmarketstitle">
              <div className="p">BTC/USD</div>
              <div className="p">$ 70,553.95</div>
            </div>
            <div className="bmarketspercent">
              <div className="img">
                <img src={btc} />
                <img src={ada} style={{ marginLeft: "-10px" }} />
              </div>
              <div className="p">+2.11%</div>
            </div>
            <div className="bmarketsgraph">
              <ChartComponent {...props} data={initialData} />
            </div>
          </div>

          <div className="bmarketsexp">
            <div className="expTotalTitle">
              <div className="totalTitle">Markets</div>
            </div>
            <div className="expTitle">
              <div className="expSubTitle">Popularity</div>
              <div className="expSubTitle">Market Cap</div>
            </div>
            <div className="bmarketsprice">
              <div className="price">
                <div className="priceValue">#1</div>
                <div className="priceValue">$1,375.42B</div>
              </div>
            </div>
            <div className="expTitle">
              <div className="expSubTitle">Volume</div>
              <div className="expSubTitle">Circulation Supply</div>
            </div>
            <div className="bmarketsprice">
              <div className="price">
                <div className="priceValue">$31.38B</div>
                <div className="priceValue">19.67M</div>
              </div>
            </div>
            <div className="explain">
              <div className="explainCon">
                Bitcoin is experiencing a rise in value this week. Currently,
                Bitcoin is priced at $69,934.41 per BTC, with a circulating
                supply of 19.67M BTC, resulting in a total market capitalisation
                of $1,375.42B. Over the past 24 hours, the trading volume for
                Bitcoin has increased by $-791,370,054,242.66, representing a
                -25.2159% rise. Moreover, BTC worth $31.38B has been traded in
                the last day.
              </div>
            </div>
            <div className="expTotalTitle">
              <div className="totalTitle">Conversion Tables</div>
            </div>
            <div className="expTitle">
              <div className="expSubTitle">7 days exchange rate</div>
              <div className="expSubTitle">24-hour exchange rate</div>
            </div>
            <div className="bmarketsprice">
              <div className="price">
                <div className="priceValue">+5.48%</div>
                <div className="priceValue">-0.65%</div>
              </div>
            </div>
            <div className="expTitle">
              <div className="expSubTitle">1 month exchange rate</div>
              <div className="expSubTitle">3 month exchange rate</div>
            </div>
            <div className="bmarketsprice">
              <div className="price">
                <div className="priceValue">+20.98%</div>
                <div className="priceValue">+66.53%</div>
              </div>
            </div>
            <div className="explain">
              <div className="explainCon">
                Bitcoin's exchange rate is experiencing a decline.
              </div>
            </div>
            <div className="explain">
              <div className="explainCon">
                Currently, the value of 1 BTC is 69,934.41 USD, indicating that
                purchasing 5 BTC would cost 349,672.04 USD. Conversely, 1.00 USD
                can be exchanged for 0.0000143 BTC, and 50.00 USD can be
                exchanged for 0.000715 BTC, exclusive of platform or gas fees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmarkets;
