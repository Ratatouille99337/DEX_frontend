import React from "react";
import "../../../assets/css/Buycryptor/referover.scss";
import Coincard from "../../Currencies/Coincard";
import Buycard from "../../Currencies/Buycard";
import Buycard_re from "../../Currencies/Buycard_re";

import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";
import Button from "../../Buttons/Button";

const Referover = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="carta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="css-imgbg5"
          >
            <path
              d="M12 18a8 8 0 100-16v8l-5.657 5.657A7.975 7.975 0 0012 18z"
              fill="url(#authenticator-google-g_svg__paint0_linear)"
            ></path>
            <path
              d="M12 10l-5.657 5.657A8 8 0 0112 2v8zM13 20h7v2h-7zM4 20h7v2H4z"
              fill="#76808F"
            ></path>
            <defs>
              <linearGradient
                id="authenticator-google-g_svg__paint0_linear"
                x1="13.172"
                y1="18"
                x2="13.172"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.333" stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#FBDA3C"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p>Overview</p>
        </div>

        <div className="refercar">
          <div className="top">
            <div className="lefttop">
              <p>Trading Fee Rebate Voucher (USDT)</p>
              <p>0</p>
            </div>
            <div className="lefttop">
              <p>Total Referrals</p>
              <p>0</p>
            </div>
            <div className="lefttop">
              <p>Successful Referrals</p>
              <p>0</p>
            </div>
          </div>
          <div className="bottom">
            <p>Your account has not been verified yet.</p>
          </div>
          <div className="bottom">
            <Button
              className="btn default-btn"
              type="link"
              text="Sign In"
              link="/accounts"
              style={{ width: "10%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referover;
