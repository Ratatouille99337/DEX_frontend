import React from "react";
import SquareItem from "./SquareItem";

// load assets
import "../../assets/css/squaretotal.scss";
import square1 from "../../assets/image/square1.png";
import square2 from "../../assets/image/square2.png";
import square3 from "../../assets/image/square3.png";
import square4 from "../../assets/image/square4.png";

const faqData = [
  {
    img: square1,
    title: "dedotfi",
    content: "De.Fi is Web3 Antivirus & Social Fi..."
  },  
  {
    img: square2,
    title: "Binance Risk Sniper",
    content: "Stay ahead on risk warnings, risk sniping, and shared risk..."
  },  
  {
    img: square3,
    title: "Optimisus",
    content: "Optimisus is a dubai-based media platform, covering crypto, NFT,..."
  },  
  {
    img: square4,
    title: "Remotecrypto",
    content: "I'm a remote crypto writer and researcher. I write about the latest..."
  }  
];

const Squaretotal = () => {
  return (

      <div className="squaretotal">
        <p style={{fontSize:"20px"}}>Square</p>
        {faqData.map((item, key) => {
          return <SquareItem key={key} squareItem={item} />;
        })}
      </div>
 
  );
};

export default Squaretotal;
