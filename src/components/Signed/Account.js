import React, { useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import Currency from "../Currencies/Currency";

// load assets
import "../../assets/css/Loged/account.scss";
import reigisterGift from "../../assets/image/register-gift.svg";
import google from "../../assets/image/google-icon.png";
import apple from "../../assets/image/apple-icon.png";
import btc from "../../assets/image/btc.png";
import eth from "../../assets/image/eth.png";
import bnb from "../../assets/image/bnb.png";
import xrp from "../../assets/image/xrp.png";

const Account = () => {
  return (
    <div className="container">
      <div className="adver-section">
        <div className="ad-view">
          <div className="trust-section">
            <div className="trust">
              <h2 className="trust-num">
                Verify Your Account
                <div className="desc">
                  <div>and Get 20 USDT in Vouchers</div>
                </div>
              </h2>
              <div className="p">
                Your Estimated Balance
                <svg
                  class="bn-svg text-[16px]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.94 5.06l16 16 2.12-2.12-2.446-2.447L23 12l-5.555-5.69a7.566 7.566 0 00-9.883-.87L5.06 2.94 2.939 5.06zm6.747 2.506a5 5 0 016.747 6.747L9.687 7.566z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1 12l2.29-2.346 10.198 10.198a7.574 7.574 0 01-6.933-2.162L1 12z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="p1">******</div>
              <div className="p2">Today's PnL Today's PnL ******</div>

              <Button
                className="btn default-btn"
                type="link"
                text="Verify Now"
                link="/register"
                style={{ width: "150px" }}
              />

              <div className="p3">
                <svg
                  class="bn-svg mirror flex-none text-[16px] text-iconNormal mr-4xs"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.002 7H16l4-4v16l-4-4h-4v6H7v-6H4.002V7z"
                    fill="currentColor"
                  ></path>
                </svg>
                Binance Spot API to Increase Request Weight Limits
              </div>
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

export default Account;
