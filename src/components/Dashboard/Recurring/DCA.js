import React from "react";
import { Link, Redirect } from "react-router-dom";
import Cryptos from "../../Currencies/Cryptos";
import TotalCost from "../../Currencies/TotalCost";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
import "../../../assets/css/Recurring/dca.scss";
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

const DCA = () => {
  return (
    <div className="container">
      <div className="dollarCost">
        <div className="text">
          <div className="dca">
            <div className="que">What is DCA?</div>
            <div className="con">
              DCA is an investment strategy where an investor invests fixed
              amounts at regular intervals to reduce the influence of volatility
              over their investment.
            </div>
          </div>

          <div className="dca">
            <div className="que">
              How do I calculate the DCA amount for my crypto investments?
            </div>
            <div className="con">
              DCA amount = Total cost / Total no. of shares
            </div>
          </div>
        </div>
        <div className="pay">
          <div className="period">
            <div className="last">Last week</div>
            <div className="after">After a month</div>
          </div>
          <div className="bill">
            <div className="costCard">
              <TotalCost
                img={btc}
                currencyName="BTC"
                dollar="$714301"
                percent="10"
                total="$2000"
              />
            </div>
            <p>+</p>
            <div className="costCard">
              <TotalCost
                img={btc}
                currencyName="BTC"
                dollar="$714301"
                percent="10"
                total="$4000"
              />
            </div>
          </div>
          <div className="totalCost1">
            <div className="value">Total Cost</div>
            <div className="price">$6,000</div>
          </div>
          <div className="totalCost1">
            <div className="value">Total BNB Amount</div>
            <div className="price">20</div>
          </div>
          <div className="totalCost1">
            <div className="value">Average Cost</div>
            <div className="price">$6,000 ÷ 20 = $300/token</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCA;
