import React from "react";
import "../../../assets/css/Earn/calc.scss";
import earn from "../../../assets/image/earn.svg";
import ProductCard from "../../Currencies/ProductCard";
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
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
import AreaChart from "../../chart/FlexibleAreaChart";
const productData = [
  {
    productlogo: usdt,
    producttitle: "USDT",
    productpercent: "7.79%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: sol,
    producttitle: "SOL",
    productpercent: "0.89%~86.99%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: bnb,
    producttitle: "BNB",
    productpercent: "0.37%~101.58%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: eth,
    producttitle: "BNB",
    productpercent: "45%~81.5%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: btc,
    producttitle: "BNB",
    productpercent: "23.37%~95.58%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: usdc,
    producttitle: "BNB",
    productpercent: "40.37%~61.58%",
    productduration: "Fixed",
  },
  {
    productlogo: dot,
    producttitle: "BNB",
    productpercent: "5.43%~34.9%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: arb,
    producttitle: "BNB",
    productpercent: "4.7%~19.38%",
    productduration: "Fixed",
  },
  {
    productlogo: fil,
    producttitle: "BNB",
    productpercent: "12.8%~97.8%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: ltc,
    producttitle: "BNB",
    productpercent: "34.3%~71.54%",
    productduration: "Flexible/Fixed",
  },
];

const Earncalc = () => {
  return (
    <div className="container">
      <div className="calc">
        <div className="calctitle">Calculate your crypto earnings</div>
        <div className="interest">
          <p>I have</p>
          <Input
            className="input default-input"
            type="text"
            placeholder="1000"
          />
          <div className="p1">and I am interested in Flexible investment</div>
        </div>
        <div className="offer">
          <div className="leftoffer">
            <div className="leftoffertitle">
              <p>Products on offer</p>
            </div>
            <div className="leftborder">
              <div className="lefttoptext">
                <p>Simple Earn</p>
                <div className="p1">principle-protected</div>
              </div>
              <p>0.01%</p>
            </div>

            <div className="leftbut">
              <Button
                className="btn default-btn"
                type="link"
                text="Subscribe Now"
                link="/register"
                style={{ width: "100px" }}
              />
            </div>
          </div>
          <div className="rightoffer">
            <div className="rightoffertitle">Estimated Earnings</div>
            <div className="rightofferpro">+0.4 1000SATS</div>
            <div className="rightoffertick">
              <div className="firsthalf">
                <Input
                  className="input default-input"
                  type="checkbox"
                  style={{ width: "100%" }}
                />
                <p>Match My Assets</p>
              </div>
              <div className="firsthalf">
                <Input
                  className="input default-input"
                  type="checkbox"
                  style={{ width: "100%" }}
                />
                <p>Match My Assets</p>
              </div>
            </div>
            <div className="rightoffergraph">
            <AreaChart/>
            </div>
          </div>
        </div>
        <p style={{fontSize:"12px"}}>This calculation is an estimate of rewards you will earn in cryptocurrency over the selected timeframe. It does not display the actual or predicted APR in any fiat currency. APR is subject to change at any time and the estimated earnings may be different from the actual earnings generated.</p>
      </div>
    </div>
  );
};

export default Earncalc;
