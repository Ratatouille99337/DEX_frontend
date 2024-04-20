import React from "react";
import { Link, Redirect } from "react-router-dom";
import Coinfromto from "../../Currencies/Coinfromto";
import Cryptos from "../../Currencies/Cryptos";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
import "../../../assets/css/Recurring/plan.scss";
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
import Signin from "../../Login/signin";

const Plan = () => {
  return (
    <div className="container">
      <div className="plan">
        <div className="createPlan">
          <div className="createRecurringPlan">
            <div className="text">Create Recurring plan</div>
            <div className="button">Auto-Invest with Stablecoin </div>
          </div>
          <div className="selectAssets">
            <p>Select Assets</p>
          </div>
          <div className="selectAssetsCon">
            <div className="usd">
              <Coinfromto cardlogo={usd} cardtitle="USD" />
            </div>
            <p>To</p>
            <div className="btc">
              <Coinfromto cardlogo={btc} cardtitle="BTC" />
            </div>
          </div>
          <div className="selectAssets">
            <p>Amount</p>
          </div>
          <div className="input">
            <Input
              className="input default-input"
              type="text"
              placeholder="15.00-20,000.00"
              style={{ width: "100%" }}
            />
          </div>

          <div className="selectAssets">
            <p>Repeat</p>
          </div>
          <div className="select">
            <select>
              <option>Weekly, Saturday, 02:00 (UTC-7)</option>
              <option>Biweekly, Tuesday, 01:00 (UTC-7)</option>
              <option>Monthly, 3rd, 02:00 (UTC-7)</option>
            </select>
          </div>
          <div className="receive">
            <p>You receive 0 BTC.</p>
          </div>
          <div className="button">
  
            <Signin
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "15px 20px",
                  backgroundColor: "#f0b90b",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
                text="Sign in"
              />

          </div>
        </div>
        <div className="top">
          <div className="topCryptos">
            <p>Top Cryptos</p>
          </div>
          <div className="settingTime">
            <p>Setting time</p>
            <p>3Y</p>
            <p>1Y</p>
            <p>6M</p>
            <p>3M</p>
          </div>
          <div className="coinRank">
            <Cryptos
              img={btc}
              currencyName="BTC"
              dollar="$714301"
              percent="450.00%"
            />
            <Cryptos
              img={sol}
              currencyName="SOL"
              dollar="$3595"
              percent="45.04%"
            />
            <Cryptos
              img={eth}
              currencyName="ETH"
              dollar="$615.74"
              percent="23.53%"
            />
            <Cryptos
              img={dot}
              currencyName="DOT"
              dollar="$87.23"
              percent="12.98%"
            />
            <Cryptos
              img={ada}
              currencyName="ADA"
              dollar="$3.21"
              percent="4.3%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
