import React from "react";
import "../../../assets/css/Buycryptor/buy.scss";
import Coincard from "../../Currencies/Coincard";
import Coin from "../../Currencies/Coin";
import Button from "../../Buttons/Button";
import btc from "../../../assets/image/btc.png";
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
import Togglebar from "../Bar/Togglebar";
import Togglebar_buy1 from "../Bar/Togglebar_buy1";

const Nav = () => {
  const coinDatas = [
    {
      coinlogo: 1,
      currencyName: "BNB",
      dollar: "579.30",
      percent: "-2.19",
    },
    { coinlogo: 1027, currencyName: "STX", dollar: "532.12", percent: "4.1" },
    {
      coinlogo: 825,
      currencyName: "ETHFI",
      dollar: "353.90",
      percent: "-2.9",
    },
    {
      coinlogo: 1839,
      currencyName: "UNI",
      dollar: "239.43",
      percent: "-1.49",
    },
    { coinlogo: 5426, currencyName: "REQ", dollar: "79.12", percent: "13.19" },
  ];
  return (
    <div className="container">
      <div className="buycrypto">
        <div className="buy">
          <div className="text">Buy Crypto</div>
          <div className="hotlist">
            <Coincard title="Hot Cryptos" coinDatas={coinDatas} />
          </div>
        </div>
        <div className="sell">
          <Togglebar_buy1 />
          {/* <div className="spend">
          <div className="alter">
            <p>BUY</p>
            <p>SELL</p>
          </div>
          <div className="change">
             <div className="title">
                spend
              </div>
              <div className="price">
                <div className="priceNum">
                  15.00-20,000.00
                </div>
                <div className="imgName">
                  <div className="img">
                     <img src={bnb}/>
                  </div>
                   <div className="currencyName">
                      BNB
                    </div>
                </div>

               
              </div>
          </div>

          <div className="change">
             <div className="title">
                spend
              </div>
              <div className="price">
                <div className="priceNum">
                  0.00
                </div>
                <div className="imgName">
                  <div className="img">
                     <img src={btc}/>
                  </div>
                   <div className="currencyName">
                      BTC
                    </div>
                </div>

               
              </div>
          </div>

          <div className="button">
                <Button
                  className="btn default-btn"
                  type="link"
                  text="Sign Up"
                  link="/register"
                  style={{ width: "100%" }}
                />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
