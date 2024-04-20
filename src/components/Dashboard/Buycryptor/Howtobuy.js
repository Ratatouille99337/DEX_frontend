import React from "react";
import "../../../assets/css/Buycryptor/cardarea.scss";
import Coincard from "../../Currencies/Coincard";
import Buycard from "../../Currencies/Buycard";

import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";


const Howtobuy = () => {
  
  return (
    <div className="container">
      <div className="card">
        <p>
           How to Buy Crypto
        </p>
      <div className="cardarea">
        <Buycard
          cardlogo={enter} 
          cardtitle="1.Enter Amount & Select Payment"
          cardcontent="Enter the amount, select the available payment method, and choose the payment account or bind the payment card."
        />
        <Buycard
          cardlogo={confirm} 
          cardtitle="2.Confirm Order"
          cardcontent="Confirmation of transaction detail information, including trading pair quotes, fees, and other explanatory tips."
        />
        <Buycard
          cardlogo={receive} 
          cardtitle="3.Receive Crypto"
          cardcontent="After successful payment, the purchased crypto to will reach Spot Wallet."
        />
      </div>
      </div>
    </div>
  );
};

export default Howtobuy;