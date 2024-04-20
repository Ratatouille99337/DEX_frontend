import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Convert/convert.scss";
import Button from "../../Buttons/Button";
import Modalcard from "../../Currencies/Modalcard";
import { AnimatePresence, motion } from "framer-motion";
import GuideCard from "../../Currencies/GuideCard";
import btc from "../../../assets/image/btc.png";
import usd from "../../../assets/image/usd.png";
import eur from "../../../assets/image/eur.png";
import brl from "../../../assets/image/brl.png";
import try1 from "../../../assets/image/try.png";
import sar from "../../../assets/image/sar.png";
import vnd from "../../../assets/image/vnd.png";
import rub from "../../../assets/image/rub.png";
import aud from "../../../assets/image/aud.png";
import inr from "../../../assets/image/inr.png";
import bit from "../../../assets/image/bit.png";

const Convert = () => {
  return (
    <div className="container">
      <div className="convert">
        <div className="conheader">
          <p>Binance Convert</p>
        </div>
        <div className="concontent">
          <div className="top">
            <div className="topleft">
              <p>Trade Now to Share %5,000 in BTC Token Vouchers!</p>
            </div>
            <div className="topimg">
              <img src={bit} />
            </div>
          </div>
          <div className="marketbut">
            <div className="eachbut">
              <p>Market</p>
            </div>
            <div className="eachbut">
              <p>Limit</p>
            </div>
          </div>
          <div className="wallet">
            <div className="leftwa">
              <p>Wallet</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="circledInfoF css-1l3piql"
                style={{ height: "16px", width: "16px", color: "#8892a1" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="rightcheck">
              <div className="eachcheck">
                <input type="checkbox" />
                <p>Spot</p>
              </div>
              <div className="eachcheck">
                <input type="checkbox" />
                <p>Funding</p>
              </div>
            </div>
          </div>
          <div className="convcard">
            <div className="leftconcard">
              <div className="toptex">
                <p>From</p>
              </div>
              <div className="bottex">
                <p style={{ fontSize: "20px" }}>0.00</p>
                <p style={{ fontSize: "12px" }}>0.00027-200</p>
              </div>
            </div>
            <div className="rightconcard">
              <p style={{ fontSize: "12px", color: "#8892a1" }}>Balace:-BTC</p>
              <div className="corner">
                <div className="img">
                  <img src={eur} />
                </div>
                <p>BTC</p>
              </div>
            </div>
          </div>
          <div className="convcard">
            <div className="leftconcard">
              <div className="toptex">
                <p>To</p>
              </div>
              <div className="bottex">
                <p>0.00</p>
                <p>0.000014-0.11</p>
              </div>
            </div>
            <div className="rightconcard">
              <p style={{ fontSize: "12px", color: "#8892a1" }}>Balace:-BTC</p>
              <div className="corner">
                <div className="img">
                  <img src={eur} />
                </div>
                <p>BTC</p>
              </div>
            </div>
          </div>
          <div className="conbutton">
            <Button
              className="btn default-btn"
              type="link"
              text="Enter an amount"
              link="/register"
              style={{ width: "100%" }}
            />
          </div>
          <div className="zero">
            <div className="eachzero">
              <div className="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  fill="none"
                  class="css-auq1lr"
                >
                  <path
                    opacity="0.3"
                    d="M71 8l2-2 2 2-2 2-2-2zM4 78l3-3 3 3-3 3-3-3zM88 68.5l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5zM81 66.14V81H66.14l-6.35 11L48 85.193 36.21 92l-6.35-11H15V66.14L4 59.79 10.807 48 4 36.21l11-6.35V15h14.86l6.35-11L48 10.807 59.79 4l6.35 11H81v14.86l11 6.35L85.193 48 92 59.79l-11 6.35z"
                    fill="#AEB4BC"
                  ></path>
                  <path
                    d="M75 62.842V75H62.842l-5.196 9L48 78.43 38.354 84l-5.196-9H21V62.842l-9-5.196L17.57 48 12 38.354l9-5.196V21h12.158l5.196-9L48 17.57 57.646 12l5.196 9H75v12.158l9 5.196L78.43 48 84 57.646l-9 5.196z"
                    fill="url(#low-fees_svg__paint0_linear_26712_54985)"
                  ></path>
                  <path
                    d="M39.695 66.368l22.957-36.736h-6.347L33.348 66.368h6.347zm-4.02-16.526c5.607 0 8.675-3.053 8.675-10.42 0-7.37-3.068-10.422-8.675-10.422C30.068 29 27 32.053 27 39.421c0 7.368 3.068 10.421 8.675 10.421zm0-4.21c-1.64 0-2.38-1.053-2.38-3.158v-6.106c0-2.105.74-3.157 2.38-3.157s2.38 1.052 2.38 3.157v6.106c0 2.105-.74 3.158-2.38 3.158zM60.325 67C65.932 67 69 63.947 69 56.579c0-7.368-3.068-10.421-8.675-10.421-5.607 0-8.675 3.053-8.675 10.42 0 7.37 3.068 10.422 8.675 10.422zm0-4.21c-1.64 0-2.38-1.053-2.38-3.158v-6.106c0-2.105.74-3.158 2.38-3.158s2.38 1.053 2.38 3.158v6.106c0 2.105-.74 3.157-2.38 3.157z"
                    fill="url(#low-fees_svg__paint1_linear_26712_54985)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="low-fees_svg__paint0_linear_26712_54985"
                      x1="48"
                      y1="12"
                      x2="48"
                      y2="84"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#929AA5"></stop>
                      <stop offset="1" stop-color="#76808F"></stop>
                    </linearGradient>
                    <linearGradient
                      id="low-fees_svg__paint1_linear_26712_54985"
                      x1="48"
                      y1="67"
                      x2="48"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>Zero Fees</p>
            </div>
            <div className="eachzero">
              <div className="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  fill="none"
                  class="css-auq1lr"
                >
                  <path
                    d="M21.462 81.053C26.672 86.263 31.736 88 36.139 88l22.994-.011c8.296 0 15.021-6.725 15.021-15.022h-27.77l-9.04-9.136 1.9-1.899 5.828 5.828a8.714 8.714 0 0012.324 0L42.636 53H21.462v28.052z"
                    fill="url(#crypto-loans_svg__paint0_linear_965_15507)"
                  ></path>
                  <path
                    fill="url(#crypto-loans_svg__paint1_linear_965_15507)"
                    d="M8 53.001h13.461v35H8z"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M15.999 31.95l6 6-6 6-6-6 6-6zM84.54 84.501l3.5-3.5 3.5 3.5-3.5 3.5-3.5-3.5zM79.003 12.003h5v5h-5v-5z"
                    fill="#AEB4BC"
                  ></path>
                  <circle
                    r="15"
                    transform="matrix(1 0 0 -1 45.855 22.95)"
                    fill="#F8D33A"
                  ></circle>
                  <circle
                    r="10.263"
                    transform="matrix(1 0 0 -1 45.855 22.951)"
                    fill="url(#crypto-loans_svg__paint2_linear_965_15507)"
                  ></circle>
                  <path
                    d="M40.328 22.95l5.526 5.526 5.527-5.526-5.527-5.526-5.526 5.526z"
                    fill="#F0B90B"
                  ></path>
                  <circle
                    r="15"
                    transform="matrix(1 0 0 -1 73.04 50.134)"
                    fill="#F8D33A"
                  ></circle>
                  <circle
                    r="10.263"
                    transform="matrix(1 0 0 -1 73.04 50.136)"
                    fill="url(#crypto-loans_svg__paint3_linear_965_15507)"
                  ></circle>
                  <path
                    d="M67.513 50.134l5.526 5.527 5.527-5.527-5.527-5.526-5.526 5.526z"
                    fill="#F0B90B"
                  ></path>
                  <defs>
                    <linearGradient
                      id="crypto-loans_svg__paint0_linear_965_15507"
                      x1="45.563"
                      y1="53.001"
                      x2="45.563"
                      y2="88.001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F8D33A"></stop>
                      <stop offset="1" stop-color="#F0B90B"></stop>
                    </linearGradient>
                    <linearGradient
                      id="crypto-loans_svg__paint1_linear_965_15507"
                      x1="21.462"
                      y1="62.878"
                      x2="8"
                      y2="62.878"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#929AA5"></stop>
                      <stop offset="1" stop-color="#76808F"></stop>
                    </linearGradient>
                    <linearGradient
                      id="crypto-loans_svg__paint2_linear_965_15507"
                      x1="10.263"
                      y1="0"
                      x2="10.263"
                      y2="20.526"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                    <linearGradient
                      id="crypto-loans_svg__paint3_linear_965_15507"
                      x1="10.263"
                      y1="0"
                      x2="10.263"
                      y2="20.526"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>Zero Fees</p>
            </div>
            <div className="eachzero">
              <div className="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  fill="none"
                  class="css-auq1lr"
                >
                  <circle
                    r="23.5"
                    transform="matrix(1 0 0 -1 61.5 34.5)"
                    fill="url(#spot_svg__paint0_linear_33242_26687)"
                  ></circle>
                  <path
                    opacity="0.3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M61.5 51.036c9.133 0 16.537-7.404 16.537-16.537S70.633 17.962 61.5 17.962 44.963 25.366 44.963 34.5 52.367 51.036 61.5 51.036zm0-24.996l-8.46 8.46 8.46 8.46 8.46-8.46-8.46-8.46z"
                    fill="#AEB4BC"
                  ></path>
                  <circle
                    r="23.5"
                    transform="matrix(1 0 0 -1 34.5 61.5)"
                    fill="#F8D33A"
                  ></circle>
                  <circle
                    r="16.537"
                    transform="matrix(1 0 0 -1 34.5 61.5)"
                    fill="url(#spot_svg__paint1_linear_33242_26687)"
                  ></circle>
                  <path
                    d="M26.04 61.5l8.46 8.46 8.46-8.46-8.46-8.46-8.46 8.46z"
                    fill="#F0B90B"
                  ></path>
                  <g opacity="0.3" fill="#AEB4BC">
                    <path d="M36 12H12v24l24-24zM31 22.5l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5zM61 68l4-4 4 4-4 4-4-4zM8 45l-2 2 2 2 2-2-2-2zM84 84H60l24-24v24z"></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="spot_svg__paint0_linear_33242_26687"
                      x1="23.5"
                      y1="0"
                      x2="23.5"
                      y2="47"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#929AA5"></stop>
                      <stop offset="1" stop-color="#76808F"></stop>
                    </linearGradient>
                    <linearGradient
                      id="spot_svg__paint1_linear_33242_26687"
                      x1="16.537"
                      y1="0"
                      x2="16.537"
                      y2="33.074"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>Zero Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
