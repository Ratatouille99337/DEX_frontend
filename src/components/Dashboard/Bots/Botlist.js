import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Bots/botlist.scss";
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
import bots from "../../../assets/image/bots.png";

const Botlist = () => {
  return (
    <div className="container">
      <div className="botlist">
        <p style={{ fontSize: "25px" }}>Bot List</p>
        <div className="botgird">
          <div className="eachgrid">
            <div className="topgrid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                class="css-y451ui"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.765 7.154L14 3.92V2.667H2v5.529L4.996 5.2l.943.943L2 10.08v1.252h12V5.805l-2.292 2.292-.943-.943zm-1.904.944L6.914 6.152l.943-.943 1.946 1.947-.942.942zM5.48 4.722l.942-.943.943.943-.943.943-.943-.943zm4.802 2.909l.943.943-.943.943-.942-.943.942-.943z"
                  fill="currentColor"
                ></path>
                <path d="M2 14h12v-1.334H2V14z" fill="currentColor"></path>
              </svg>
              <p>Spot Grid</p>
            </div>
            <p>Buy low and sell high 24/7 automatically with just one click.</p>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Volatile Markets</p>
            </div>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Preset Ranges</p>
            </div>
            <div className="bottom">
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1rd75c1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="eachgrid">
            <div className="topgrid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-y451ui"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 3H4v18h12a4 4 0 004-4V3zm-9.84 3.667l3.35 3.314 1.753-1.752L13.8 6.768H18v4.197L16.535 9.5l-3.018 3.017-3.351-3.313L6 13.367v-2.544l4.16-4.156zM6 15.333h12v2H6v-2z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Futures Grid</p>
            </div>
            <p>
              Amplify your purchasing power with an advanced version of Grid
              Trading.
            </p>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Short Orders</p>
            </div>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>USD-M/COIN-M</p>
            </div>
            <div className="bottom">
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1rd75c1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="eachgrid">
            <div className="topgrid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-y451ui"
              >
                <path
                  d="M3.031 13.408h7.592V21a9.057 9.057 0 01-7.592-7.592zM20.93 13.408h-7.592V21a9.057 9.057 0 007.592-7.592zM4.693 6.683a9.004 9.004 0 00-1.662 4.01h5.672l-4.01-4.01zM12.582 10.693h8.387C20.314 6.339 16.556 3 12.019 3a9.01 9.01 0 00-5.368 1.763l5.93 5.93z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Rebalancing Bot</p>
            </div>
            <p>
              A Long term position strategy supporting an investment porfolio.
            </p>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Diversify risk</p>
            </div>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Dynamic rebalance</p>
            </div>
            <div className="bottom">
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1rd75c1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="eachgrid">
            <div className="topgrid">
              <svg
                width="100%"
                height="100%"
                size="20"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
                class="bn-svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.206 3h4.5v4.5h-1.5v2.069l1.682 1.681h2.068v-1.5h4.5v4.5h-4.5v-1.5h-2.069l-2.431 2.432-2.432-2.432H7.956v1.5h-1.5v4h3.614a2.501 2.501 0 110 1.5H4.956v-5.5h-1.5v-4.5h4.5v1.5h2.068l1.683-1.683V7.5h-1.501V3z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Algo Order</p>
            </div>
            <p>Enhance execution of large orders in smaller blocks</p>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>TWAP and POV</p>
            </div>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Reduce execution costs</p>
            </div>
            <div className="bottom">
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1rd75c1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="eachgrid">
            <div className="topgrid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
                class="css-y451ui"
              >
                <path
                  d="M8.00024 23.9658L8.00024 23.8574L4.00024 23.8574V23.9658C4.00002 29.0815 5.95304 34.2037 9.85811 38.1088C17.6686 45.9193 30.3319 45.9193 38.1424 38.1088L42.5989 33.6523L45.4374 36.4909V27.9854H36.9319L39.7704 30.8239L35.3139 35.2804C29.0656 41.5288 18.9349 41.5288 12.6865 35.2804C9.56176 32.1556 8.00005 28.0639 8.00024 23.9658Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M35.3138 12.5769C29.0655 6.32853 18.9348 6.32853 12.6864 12.5769L8.22994 17.0334L11.0682 19.8717H2.56274L2.56275 11.3662L5.40151 14.205L9.858 9.74849C17.6685 1.938 30.3318 1.938 38.1423 9.74849C42.0473 13.6536 44.0004 18.7758 44.0001 23.8915V23.9999H40.0001V23.8915C40.0003 19.7934 38.4386 15.7017 35.3138 12.5769Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0003 13.9287C18.4774 13.9287 14.0003 18.4059 14.0003 23.9287C14.0003 29.4516 18.4774 33.9287 24.0003 33.9287C29.5231 33.9287 34.0002 29.4516 34.0002 23.9287C34.0002 18.4059 29.5231 13.9287 24.0003 13.9287ZM24.0004 27.6129L27.6846 23.9287L24.0004 20.2445L20.3162 23.9287L24.0004 27.6129Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Auto-Invest</p>
            </div>
            <p>Use Binance Auto-Invest to accumulate crypto overtime.</p>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Create Your Plan</p>
            </div>
            <div className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1uqrljd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Recurring Investment</p>
            </div>
            <div className="bottom">
              <p>Create</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-1rd75c1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Botlist;
