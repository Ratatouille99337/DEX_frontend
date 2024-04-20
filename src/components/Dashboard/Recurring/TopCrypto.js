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
import Buycard2 from "../../Currencies/Buycard2";
import "../../../assets/css/Recurring/topCrypto.scss";
import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";

import tree from "../../../assets/image/tree.svg";
import coin from "../../../assets/image/coin.svg";
import add from "../../../assets/image/add.svg";

const TopCrypto = () => {
  return (
    <div className="container">
      <div className="card2">
        <div className="cardarea2">
          <Buycard2 cardlogo={usd} cardtitle="Buy with TRY" />
          <Buycard2 cardlogo={eur} cardtitle="Buy with USD" />
          <Buycard2 cardlogo={try1} cardtitle="Buy with EUR" />
          <Buycard2 cardlogo={aud} cardtitle="Buy with PHP" />
          <Buycard2 cardlogo={vnd} cardtitle="Buy with AUD" />
          <Buycard2 cardlogo={rub} cardtitle="Buy with GBP" />
        </div>
        <hr className="hr" />
        <div className="toGmp">
          <Buycard2 cardlogo={btc} cardtitle="ADA to BTC" />
          <Buycard2 cardlogo={eth} cardtitle="ADA to ETH" />
          <Buycard2 cardlogo={dot} cardtitle="ADA to DOT" />
          <Buycard2 cardlogo={xrp} cardtitle="ADA to XRP" />
          <Buycard2 cardlogo={shib} cardtitle="ADA to SHIB" />
          <Buycard2 cardlogo={usdt} cardtitle="ADA to USDT" />
          <Buycard2 cardlogo={apt} cardtitle="ADA to APT" />
          <Buycard2 cardlogo={bnb} cardtitle="BNB to GBP" />
          <Buycard2 cardlogo={doge} cardtitle="DOGE to GBP" />
          <Buycard2 cardlogo={ada} cardtitle="ADA to GBP" />
        </div>
      </div>
    </div>
  );
};

export default TopCrypto;
