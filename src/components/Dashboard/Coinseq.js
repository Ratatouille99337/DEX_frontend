import React from "react";
import "../../assets/css/coinseq.scss";
import Coin from "../Currencies/Coin";
import btc from "../../assets/image/btc.png";
import eth from "../../assets/image/eth.png";
import usdt from "../../assets/image/usdt.png";
import bnb from "../../assets/image/bnb.png";
import sol from "../../assets/image/sol.png";
import xrp from "../../assets/image/xrp.png";
import usdc from "../../assets/image/usdc.png";
import doge from "../../assets/image/doge.png";
import ada from "../../assets/image/ada.png";
import avax from "../../assets/image/avax.png";
import shib from "../../assets/image/shib.png";
import dot from "../../assets/image/dot.png";
import link from "../../assets/image/link.png";
import wbtc from "../../assets/image/wbtc.png";
import trx from "../../assets/image/trx.png";
import matic from "../../assets/image/matic.png";
import bch from "../../assets/image/bch.png";
import icp from "../../assets/image/icp.png";
import near from "../../assets/image/near.png";
import uni from "../../assets/image/uni.png";
import ltc from "../../assets/image/ltc.png";
import apt from "../../assets/image/apt.png";
import dai from "../../assets/image/dai.png";
import stx from "../../assets/image/stx.png";
import fil from "../../assets/image/fil.png";
import atom from "../../assets/image/atom.png";
import arb from "../../assets/image/arb.png";
import rndr from "../../assets/image/rndr.png";
import imx from "../../assets/image/imx.png";
import ethfi from "../../assets/image/ethfi.png";
import bome from "../../assets/image/bome.png";
import aevo from "../../assets/image/aevo.png";
import ocean from "../../assets/image/ocean.png";
import req from "../../assets/image/req.png";


const Coinseq = () => {
  return (
    <div className="container">
      <div className="coinseq"> 
        <div className="subCoinGroup">
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">
                Hot Coins
              </div>
              <div className="more">
                More
              </div>
            </div>
            <div className="coinRank">
              <Coin      
                img={bnb}
                currencyName="BNB"
                dollar="$579.30"
                percent="-2.19%"
              />
              <Coin
                img={btc}
                currencyName="BTC"
                dollar="$70.19K"
                percent="-0.65%"
              />
              <Coin
                img={eth}
                currencyName="ETH"
                dollar="$3.58K"
                percent="-1.31%"
              />
            </div>
          </div>
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">
                Hot Coins
              </div>
              <div className="more">
                More
              </div>
            </div>
            <div className="coinRank">
              <Coin
                img={ethfi}
                currencyName="ETHFI"
                dollar="$6.24"
                percent="+32.37%"
              />
              <Coin
                img={eth}
                currencyName="ETH"
                dollar="$0.012896"
                percent="-8.78%"
              />
              <Coin
                img={aevo}
                currencyName="AEVO"
                dollar="$2.78"
                percent="+9.88%"
              />
            </div>
          </div>
        </div>
        <div className="subCoinGroup">
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">
                Hot Coins
              </div>
              <div className="more">
                More
              </div>
            </div>
            <div className="coinRank">
              <Coin
                img={ethfi}
                currencyName="ETHFI"
                dollar="$6.24"
                percent="+32.37%"
              />
              <Coin
                img={ocean}
                currencyName="OCEAN"
                dollar="$1.57"
                percent="+31.36%"
              />
              <Coin
                img={req}
                currencyName="REQ"
                dollar="$0.1857"
                percent="+25.64%"
              />
            </div>
          </div>
          <div className="eachCoin">
            <div className="coinHeader">
              <div className="hotCoin">
                Hot Coins
              </div>
              <div className="more">
                More
              </div>
            </div>
            <div className="coinRank">
              <Coin
                img={btc}
                currencyName="BTC"
                dollar="$70.19K"
                percent="-0.65%"
               
              />
              <Coin
                img={eth}
                currencyName="ETC"
                dollar="$3.58K"
                percent="-1.31%"
              />
              <Coin
                img={sol}
                currencyName="SOL"
                dollar="$187.25"
                percent="-3.85%"
              />
            </div>
          </div>
        </div> 
          
      </div>
      
    </div>  
  );
};

export default Coinseq;