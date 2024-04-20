import React from "react";
import "../../../assets/css/Loged/Dashboard/squaretotal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";
import gift1 from "../../../assets/image/gift1.png";
import Fav1 from "../Fav1";
import Squaretotal from "../Squaretotal";

const Square = () => {
  return (

      <div className="square">
        <div className="leftsquare">
          <Squaretotal />
        </div>
        <div className="explain">
          <div className="announce">
              <p style={{fontSize:"18px"}}>Announcements</p>
              <div className="subtitle">
                  <p>Binance Introduces Binace Options Enhanced Program</p>  
                  <p style={{color: "#8892a1"}}>2024-04-05</p>  
              </div>
              <div className="subtitle">
                  <p>Binance Completes Integration of 35 New dApps on Binance Web3 Walllert</p>  
                  <p style={{color: "#8892a1"}}>2024-04-05</p>  
              </div>
          </div>
          <div className="car">
              <p style={{fontSize:"18px"}}>Invite Friends & Share of $100,000</p>
              <div className="img">
                 <img src={gift1}/>
              </div>
          </div>
        </div>
      </div>
 
  );
};

export default Square;
