import React, { useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import Currency from "../Currencies/Currency";
import Signup from "../Login/signup";
// load assets
import "../../assets/css/advertising.scss";
import reigisterGift from "../../assets/image/register-gift.svg";
import google from "../../assets/image/google-icon.png";
import apple from "../../assets/image/apple-icon.png";
import btc from "../../assets/image/btc.png";
import eth from "../../assets/image/eth.png";
import bnb from "../../assets/image/bnb.png";
import xrp from "../../assets/image/xrp.png";

const Advertising = () => {
  return (
    <div className="container">
      <div className="adver-section">
        <div className="ad-view">
          <div className="trust-section">
            <div className="trust">
              <h2 className="trust-num">
                183,973,234
                <div className="desc">
                  <div>Users</div>
                  <div>Trust Us</div>
                </div>
              </h2>
            </div>
            <div className="sign-section">
              <div className="sign-up">
                <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                <Signup text="Sign Up" style={{ padding: "15px 40px" }} />
              </div>
              <div className="sign-text">
                <img src={reigisterGift} />
                Sign up now and get up to 100 USDT in rewards
              </div>
            </div>
          </div>
          <div className="other-section">
            <div className="other-login">
              Or Connect With
              <div className="icon">
                <a href="/google">
                  <img src={google} />
                </a>
                <a href="/apple">
                  <img src={apple} />
                </a>
              </div>
            </div>
            <div className="download">
              App Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1sjfhlp"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="trading-view">
          <div className="totalCurrency">
            <Currency
              img={btc}
              currencyName="BTC"
              currencyTotalName="Bitcoin"
              dollar="$70,865.90"
              percent="+5.77%"
            />
            <Currency
              img={eth}
              currencyName="EHT"
              currencyTotalName="Ethereum"
              dollar="$3,635.79"
              percent="+5.47%"
            />
            <Currency
              img={bnb}
              currencyName="BNB"
              currencyTotalName="BNB"
              dollar="$590.80"
              percent="+2.32%"
            />
            <Currency
              img={xrp}
              currencyName="XRP"
              currencyTotalName="Ripple"
              dollar="$0.6417"
              percent="+1.99%"
            />
            <div className="detail">View All 350+ Coins</div>
          </div>

          <div className="explain">
            <div className="each">
              Arkon Energy Plans Euronext Amsterdam Listing Through Merger With
              BM3EAC Corp
            </div>
            <div className="each">
              Gunzilla Games Raises $30 Million for Upcoming Free Battle Royale
              Game 'Off the Grid'
            </div>
            <div className="each">
              Cube.Exchange Introduces Guardian Council to Prevent Fraud
            </div>
            <div className="detail">View All News</div>
          </div>
          <div className="countDown">
            <div className="each">Bitcoin Halving Countdown</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
