import React from "react";
import "../../../assets/css/Reward/rewardheader.scss";
import reward from "../../../assets/image/rewards.svg";

const Rewardheader = () => {
  return (
    <div className="rewheader">
      <div className="titlecen">
        <div className="title">
          <p>Join activities and earn attractive rewards in Rewards Hub.</p>
        </div>
        <div className="subtitle">
          <p>Grab the rewards before they run out!</p>
        </div>
        <div className="points">
          <div className="num">
            <p style={{ fontSize: "30px" }}>0</p>
            <p>Point</p>
          </div>
          <div className="poin">
            <p style={{ fontSize: "30px" }}>0</p>
            <p>Vouchers</p>
          </div>
        </div>
        <div className="shop">
          <p>Rewards Shop</p>
          <p>My Vouchers</p>
        </div>
      </div>
    </div>
  );
};

export default Rewardheader;
