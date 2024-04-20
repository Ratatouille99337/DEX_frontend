import React from "react";
import "../../../assets/css/P2p/header.scss";
import Signin from "../../Login/signin";
import Signup from "../../Login/signup";
const P2pheader = () => {
  return (
    <div className="container">
      <div className="p2pheader">
        <p style={{fontSize:"32px", marginTop:"20px"}}>
          Trade easily with BNB - Buy and sell with your preferred payment
          methods
        </p>
        <p style={{color:"#8892a1"}}>
          Exchange BNB on Binance P2P. Find the best deals below to buy and sell
          BNB
        </p>
        <div className="login">
          <div className="sign-up">
            <Signup text="Register" style={{width:"120px", padding:"5px 0"}}/>
          </div>
          <div className="sign-in">
            <Signin text="Sign in" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2pheader;
