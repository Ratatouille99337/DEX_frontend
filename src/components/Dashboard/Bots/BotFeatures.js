import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Bots/botFeatures.scss";
import Button from "../../Buttons/Button";
import Modalcard from "../../Currencies/Modalcard";
import { AnimatePresence, motion } from "framer-motion";
import GuideCard from "../../Currencies/GuideCard";
import btc from "../../../assets/image/btc.png";
import usd from "../../../assets/image/usd.png";
import eur from "../../../assets/image/eur.png";
import brl from "../../../assets/image/brl.png";
import try1 from "../../../assets/image/try.png";
import sar from "../../../assets/image/sar.png";
import vnd from "../../../assets/image/vnd.png";
import rub from "../../../assets/image/rub.png";
import aud from "../../../assets/image/aud.png";
import inr from "../../../assets/image/inr.png";
import bit from "../../../assets/image/bit.png";
import fimage1 from "../../../assets/image/fimage1.jpg";
import fimage2 from "../../../assets/image/fimage2.jpg";
import fimage3 from "../../../assets/image/fimage3.png";

const BotFeatures = () => {
  return (
    <div className="container">
      <div className="botfeatures">
        <div className="botfcard">
          <div className="eachfcard">
            <div className="img">
              <img src={fimage1} />
            </div>
            <p style={{ fontSize: "20px" }}>Intuitive Automation</p>
            <p>
              Set up your algorithmic bot and automate your orders in a few
              clicks with TWAP, VP algos, and Grid trading.
            </p>
          </div>
          <div className="eachfcard">
            <div className="img">
              <img src={fimage2} />
            </div>
            <p style={{ fontSize: "20px" }}>Trending strategies</p>
            <p>
              Replicate and customize the most profitable Grid Trading
              strategies across a wide range of trading pairs.
            </p>
          </div>
          <div className="eachfcard">
            <div className="img">
              <img src={fimage3} />
            </div>
            <p style={{ fontSize: "20px" }}>Deep Liquidity</p>
            <p>
              Optimize order executions and reduce slippage while capturing
              market trends on the largest exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotFeatures;
