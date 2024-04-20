import React, { useEffect } from "react";

// load assets
import "../../assets/css/scroll.css";

const XScroll = ({ ScrollItem }) => {
  return (
    <div class="scroll-container">
      <div class="scroll-content">
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>USDT </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>FDUSD </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>USDC </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>TUSD </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>BNB </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>BTC </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>ALTS </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>Zones </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>Margin </p>
        <p style={{ display: "inline-block" ,marginLeft:"10px"}}>Grid </p>
      </div>
    </div>
    //   <div className="eachChange">
    //     <div className="btcChange">{scrollitem?.indtext}
    //     </div>
    //  </div>
  );
};

export default XScroll;
