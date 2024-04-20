import React from "react";
import { Link, Redirect } from "react-router-dom";
import Cryptos from "../../Currencies/Cryptos";
import TotalCost from "../../Currencies/TotalCost";
import GuideCard from "../../Currencies/GuideCard";
import "../../../assets/css/Recurring/guides.scss";
import blog1 from "../../../assets/image/blog1.png";
import blog2 from "../../../assets/image/blog2.png";
import blog3 from "../../../assets/image/blog3.svg";

const Guides = () => {
  return (
    <div className="container">
      <div className="guides1">
        <div className="guideCard1">
          <div className="eachCard1">
            <GuideCard
              guidelogo={blog1}
              guidetitle="How To Grow Your Crypto Portfolio with Recurring Buy"
            />
            <GuideCard
              guidelogo={blog2}
              guidetitle="Crypto Recurring Investments:Benefits and How to Start"
            />
            <GuideCard
              guidelogo={blog3}
              guidetitle="How to Use Recurring Buy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
