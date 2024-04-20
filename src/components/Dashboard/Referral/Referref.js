import React from "react";
import "../../../assets/css/Buycryptor/referref.scss";
import Coincard from "../../Currencies/Coincard";
import Buycard from "../../Currencies/Buycard";
import Buycard_re from "../../Currencies/Buycard_re";

import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";
const Referref = () => {
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
              d="M17 13v3h2v-3h3v-2h-3V8h-2v3h-3v2h3zM3 18a4 4 0 014-4h4a4 4 0 014 4v3H3v-3z"
              fill="#76808F"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
              fill="url(#referral-g_svg__paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="referral-g_svg__paint0_linear"
                x1="9"
                y1="12"
                x2="9"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p>My Referrals</p>
        </div>
        <div className="totalca">
          <div className="leftcard">
            <p>All</p>
            <p>Successful</p>
            <p>Pending</p>
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
            <p>Registered</p>
            <p>Task completed</p>
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

export default Referref;
