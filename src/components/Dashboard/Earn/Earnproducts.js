import React from "react";
import "../../../assets/css/Earn/products.scss";
import earn from "../../../assets/image/earn.svg";
import ProductCard from "../../Currencies/ProductCard";
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

const productData = [
  {
    productlogo: usdt,
    producttitle: "USDT",
    productpercent: "7.79%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: sol,
    producttitle: "SOL",
    productpercent: "0.89%~86.99%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: bnb,
    producttitle: "BNB",
    productpercent: "0.37%~101.58%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: eth,
    producttitle: "BNB",
    productpercent: "45%~81.5%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: btc,
    producttitle: "BNB",
    productpercent: "23.37%~95.58%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: usdc,
    producttitle: "BNB",
    productpercent: "40.37%~61.58%",
    productduration: "Fixed",
  },
  {
    productlogo: dot,
    producttitle: "BNB",
    productpercent: "5.43%~34.9%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: arb,
    producttitle: "BNB",
    productpercent: "4.7%~19.38%",
    productduration: "Fixed",
  },
  {
    productlogo: fil,
    producttitle: "BNB",
    productpercent: "12.8%~97.8%",
    productduration: "Flexible/Fixed",
  },
  {
    productlogo: ltc,
    producttitle: "BNB",
    productpercent: "34.3%~71.54%",
    productduration: "Flexible/Fixed",
  },
];

const Earnproducts = () => {
  return (
    <div className="container">
      <div className="products">
        <div className="productsHeader">All Products</div>
        <div className="productsTitle">
          <p>Coins</p>
          <p>Est.APR</p>
          <p>Duration</p>
          <p style={{ flex: "1" }}>
            <svg
              style={{ width: "20px" }}
              class="bn-svg row-overview__toggle-225AY"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                fill="currentColor"
              ></path>
            </svg>
          </p>
        </div>
        <div className="eachProducts">
          {productData.map((item, key) => {
            return <ProductCard key={key} productItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Earnproducts;
