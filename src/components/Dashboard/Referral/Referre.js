import React from "react";
import "../../../assets/css/Buycryptor/referre.scss";
import Coincard from "../../Currencies/Coincard";
import Buycard from "../../Currencies/Buycard";
import Buycard_re from "../../Currencies/Buycard_re";

import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";
const Referre = () => {
  return (
    <div className="container">
      <div className="card5">
        <div className="totalca">
          <div className="leftcard">
            <div className="carta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-imgbg5"
              >
                <path
                  d="M3 21h18V8H3v13z"
                  fill="url(#gift-g_svg__paint0_linear)"
                ></path>
                <path
                  d="M7 8h4v4H3v2h8v7h2v-7h8v-2h-8V8h4V6h-2.586l1.793-1.793-1.414-1.414L13 4.586V2h-2v2.586L9.207 2.793 7.793 4.207 9.586 6H7v2z"
                  fill="#76808F"
                ></path>
                <defs>
                  <linearGradient
                    id="gift-g_svg__paint0_linear"
                    x1="12"
                    y1="21"
                    x2="12"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F0B90B"></stop>
                    <stop offset="1" stop-color="#F8D33A"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p>My Rewards</p>
            </div>
          </div>
          <div className="rightcard">
            <Input
              className="input default-input"
              type="date"
              placeholder=""
              style={{ width: "100%" }}
            />
            <Input
              className="input default-input"
              type="date"
              placeholder=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="referre">
          <div className="reftop">
            <p>ID</p>
            <p>Distribution Data</p>
            <p>Bonus</p>
            <p>Reward Type</p>
            <p>Status</p>
          </div>
          <div className="refbottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="none"
              class="css-1kggtik"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z"
                fill="url(#not-found-data_svg__paint0)"
              ></path>
              <path
                opacity="0.15"
                d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z"
                fill="#929AA5"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z"
                fill="url(#not-found-data_svg__paint1)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"
                fill="url(#not-found-data_svg__paint2)"
              ></path>
              <defs>
                <linearGradient
                  id="not-found-data_svg__paint0"
                  x1="55"
                  y1="8"
                  x2="55"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#929AA5" stop-opacity="0.1"></stop>
                  <stop
                    offset="1"
                    stop-color="#929AA5"
                    stop-opacity="0.25"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="not-found-data_svg__paint1"
                  x1="4.172"
                  y1="68.75"
                  x2="24.328"
                  y2="68.75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#929AA5"></stop>
                  <stop offset="1" stop-color="#76808F"></stop>
                </linearGradient>
                <linearGradient
                  id="not-found-data_svg__paint2"
                  x1="15"
                  y1="48"
                  x2="55"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#929AA5"></stop>
                  <stop offset="1" stop-color="#76808F"></stop>
                </linearGradient>
              </defs>
            </svg>
            <Button
              className="btn default-btn"
              type="link"
              text="Invite Friends"
              link="/accounts"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referre;





