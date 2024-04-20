import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Bots/bots.scss";
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
import bots from "../../../assets/image/bots.png";

const Botsheader = () => {
  return (
    <div className="container">
      <div className="Botsheader">
        <div className="leftbotstitle">
          <p style={{fontSize:"40px"}}>Trading Bots</p>
          <p style={{color:"#8892a1"}}>
            Deploy Binance automation tools to trade crypto like a pro. Identify
            and replicate trending strategies on the largest exchange with
            unparalleled liquidity.
          </p>
          <div className="number">
            <div className="leftbum">
              <p style={{color:"#8892a1"}}>Active Strategies</p>
              <p style={{fontSize:"20px"}}>131,186</p>
            </div>
            <div className="rightbum">
              <p style={{color:"#8892a1"}}>Total Value</p>
              <p style={{fontSize:"20px"}}>$123,082,766.05</p>
            </div>
          </div>
          <Button
            className="btn default-btn"
            type="link"
            text="Trade Now"
            link="/trade"
            style={{ width: "100px" }}
          />
        </div>
        <div className="rightbots">
          <div className="righttext">
            <p style={{fontSize:"16px"}}>Explore Simple Trading Bots</p>
            <p>Learn how to start your first Spot Grid order</p>
            <p style={{color:"#f0b90b"}}>Learn more</p>
          </div>
          <div className="leftimg">
            <img src={bots} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Botsheader;
