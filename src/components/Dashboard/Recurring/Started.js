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
import "../../../assets/css/Recurring/started.scss";
import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";

import tree from "../../../assets/image/tree.svg";
import coin from "../../../assets/image/coin.svg";
import add from "../../../assets/image/add.svg";

const Benefits = () => {
  return (
    <div className="container">
      <div className="card3">
        <div className="cardarea3">
          <Buycard1
            cardlogo={tree}
            cardtitle="Select debit/credit card"
            cardcontent="Log in to your Binance account and tap on the [Credit/Debit Card] option on the app homepage or top header on the website."
          />
          <Buycard1
            cardlogo={coin}
            cardtitle="Select crypto and enable Recurring Buy"
            cardcontent="Next, choose your crypto to purchase and enable the Recurring Buy feature on the same page."
          />
          <Buycard1
            cardlogo={enter}
            cardtitle="Select your fiat currency"
            cardcontent="Choose from over 40+ fiat currencies and pick your preferred local currency."
          />
          <Buycard1
            cardlogo={confirm}
            cardtitle="Set up the frequency"
            cardcontent="Choose between weekly, bi-weekly or monthly intervals. You can also select the day and time for your Recurring Buy."
          />
          <Buycard1
            cardlogo={receive}
            cardtitle="Select your payment methods"
            cardcontent="We currently accept Visa or Mastercard payments. You can choose to use one of your existing cards or add a new card."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
