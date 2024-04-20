import React from "react";
import { Link, Redirect } from "react-router-dom";
import Cryptos from "../../Currencies/Cryptos";
import TotalCost from "../../Currencies/TotalCost";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";

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
import Buycard1 from "../../Currencies/Buycard1";
import "../../../assets/css/Recurring/benefits.scss";
import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";

import tree from "../../../assets/image/tree.svg";
import coin from "../../../assets/image/coin.svg";
import add from "../../../assets/image/add.svg";

const Benefits = () => {
  return (
    <div className="container">
      <div className="card1">
        <div className="cardarea1">
          <Buycard1
            cardlogo={tree}
            cardtitle="Steady Portfolio Growth"
            cardcontent="Consistent investments at periodic intervals gradually grows your crypto wealth over time and reap the gains of invested projects’ growth."
          />
          <Buycard1
            cardlogo={coin}
            cardtitle="Disciplined Saving"
            cardcontent="Automates your crypto purchases and ensures you invest with discipline regardless of market conditions."
          />
          <Buycard1
            cardlogo={enter}
            cardtitle="Risk Reduction"
            cardcontent="Manages impact from the volatile crypto market by spreading out your investments and smoothing out price swings."
          />
          <Buycard1
            cardlogo={confirm}
            cardtitle="Convenience & Flexibility"
            cardcontent="Choose between weekly, bi-weekly or even monthly purchases and cryptocurrencies you want to buy beforehand."
          />
          <Buycard1
            cardlogo={receive}
            cardtitle="Easy Access to Binance Ecosystem"
            cardcontent="Get your stash of crypto ready to explore other Binance products such as staking, spot trading, or even buying your first NFT."
          />
          <Buycard1
            cardlogo={add}
            cardtitle="Emotional Detachment"
            cardcontent="Remove the stress of timing the market and making impulsive decisions based on market conditions."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
