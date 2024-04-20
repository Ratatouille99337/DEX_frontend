import React from "react";

import "../../../assets/css/Earn/earnheader1.scss";
import earn from "../../../assets/image/earn.svg";

const Earnheader1 = () => {
  return (
    <div className="container">
      <div className="earnheader1">
        <div className="lefttext">
          <div className="earnnav">
            <div className="p1">Overview</div>
            <p>Simple Earn</p>
            <p>High Yield</p>
            <p>Auto-Invest</p>
          </div>
          <div className="earntitle">Earn</div>
          <div className="earntext">
            Simple & Secure. Search popular coins and start earning.
          </div>
        </div>
        <div className="rightimg">
          <div className="holding">
            <div className="top">
              <div className="left">
                <p>My Holdings</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  name="EyeHideF"
                  class="fontSize-18 iconNormal css-3kwgah"
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
              <div className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-94sbqg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-94sbqg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <p>********</p>
            <p>********</p>
            <hr />
            <p>30-Day Profit</p>
            <p>********</p>
            <p>********</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnheader1;
