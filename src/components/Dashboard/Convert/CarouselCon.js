import React from "react";
import "../../../assets/css/Convert/ConvCar.scss";
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
const Marquee = ({ children, duration }) => {
  const marqueeStyle = {
    whiteSpace: "nowrap",
    display: "inline-block",
    animationName: "marquee",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };

  return (
    <div className="cream">
      <p style={{ fontSize: "18px" , marginTop:"50px"}}>
        Convert CREAM (Cream Finance) to other currencies
      </p>
      <p style={{ color: "#8892a1" }}>
        Swap your Cream Finance to other currencies easily in one go!
      </p>
      <div class="marquee-container">
        <div class="marquee-slider">
          <div className="eachslide">
            <div className="img">
              <img src={btc} />
            </div>
            <p>BTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={graph} />
            </div>
            <p>GRAPH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={eth} />
            </div>
            <p>ETH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={usdt} />
            </div>
            <p>USDT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={bnb} />
            </div>
            <p>BNB</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={sol} />
            </div>
            <p>SOL</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={xrp} />
            </div>
            <p>XRP</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={usdc} />
            </div>
            <p>USDC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={doge} />
            </div>
            <p>DOGE</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={ada} />
            </div>
            <p>ADA</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={avax} />
            </div>
            <p>AVAX</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={shib} />
            </div>
            <p>SHIB</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={dot} />
            </div>
            <p>DOT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={link} />
            </div>
            <p>LINK</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={wbtc} />
            </div>
            <p>WBTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={trx} />
            </div>
            <p>TRX</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={matic} />
            </div>
            <p>MATIC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={bch} />
            </div>
            <p>BCH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={icp} />
            </div>
            <p>ICP</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={near} />
            </div>
            <p>NEAR</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={uni} />
            </div>
            <p>UNI</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={ltc} />
            </div>
            <p>LTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={apt} />
            </div>
            <p>APT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={dai} />
            </div>
            <p>DAI</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={stx} />
            </div>
            <p>STX</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={fil} />
            </div>
            <p>FIL</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={atom} />
            </div>
            <p>ATOM</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={arb} />
            </div>
            <p>ARB</p>
          </div>
        </div>
        <div class="marquee-slider">
          <div className="eachslide">
            <div className="img">
              <img src={shib} />
            </div>
            <p>SHIB</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={dot} />
            </div>
            <p>DOT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={link} />
            </div>
            <p>LINK</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={wbtc} />
            </div>
            <p>WBTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={trx} />
            </div>
            <p>TRX</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={matic} />
            </div>
            <p>MATIC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={bch} />
            </div>
            <p>BCH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={icp} />
            </div>
            <p>ICP</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={near} />
            </div>
            <p>NEAR</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={uni} />
            </div>
            <p>UNI</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={ltc} />
            </div>
            <p>LTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={apt} />
            </div>
            <p>APT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={dai} />
            </div>
            <p>DAI</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={stx} />
            </div>
            <p>STX</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={fil} />
            </div>
            <p>FIL</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={atom} />
            </div>
            <p>ATOM</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={arb} />
            </div>
            <p>ARB</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={btc} />
            </div>
            <p>BTC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={graph} />
            </div>
            <p>GRAPH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={eth} />
            </div>
            <p>ETH</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={usdt} />
            </div>
            <p>USDT</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={bnb} />
            </div>
            <p>BNB</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={sol} />
            </div>
            <p>SOL</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={xrp} />
            </div>
            <p>XRP</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={usdc} />
            </div>
            <p>USDC</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={doge} />
            </div>
            <p>DOGE</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={ada} />
            </div>
            <p>ADA</p>
          </div>
          <div className="eachslide">
            <div className="img">
              <img src={avax} />
            </div>
            <p>AVAX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
