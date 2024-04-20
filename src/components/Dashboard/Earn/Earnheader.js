import React from "react";
import "../../../assets/css/Earn/earnheader.scss";
import earn from "../../../assets/image/earn.svg";

const Earnheader = () => {
  return (
    <div className="container">
      <div className="earnheader">
        <div className="lefttext">
          <div className="earnnav">
            <div className="p1">Overview</div>
            <p>Simple Earn</p>
            <p>High Yield</p>
            <p>Auto-Invest</p>
          </div>
          <div className="earntitle">Earn</div>
          <div className="earntext">
            Simple & Secure. Search popular coins and start earning.
          </div>
        </div>
        <div className="rightimg">
          <div className="img">
        
            <img src={earn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnheader;
