import React from "react";
import "../../../assets/css/Loged/Dashboard/identification.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";
import idenavatar from "../../../assets/image/idenavatar.svg";
import Fav1 from "../Fav1";
import Button from "../../Buttons/Button";

const Identification = () => {
  return (
    <div className="identification">
      <div className="piden">
        <p style={{ fontSize: "30px" }}>Identification</p>
      </div>
      <div className="unverified">
        <div className="img">
          <img src={idenavatar} />
        </div>
        <div className="text">
          <p>Anonymous-User-36534</p>
          <div className="unbut">
            <p>Unverified</p>
          </div>
        </div>
      </div>
      <hr className="idenhr" />
      <div className="getiden">
        <div className="idenleft">
          <div className="idencard">
            <p>Get your identity verified to buy and trade on Binance</p>
            <Button
              className="btn default-btn"
              type="link"
              text="Get Verified"
              link="/register"
              style={{ width: "40%" }}
            />
          </div>
          <hr className="idenhr" />
          <div className="limit">
            <div className="limittitle">
              <p>Account Limits</p>
            </div>
            <div className="lock">
              <div className="locksen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-bka6he"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p>Fiat Deposit & Withdrawal Limits</p>
            </div>
            <div className="lock">
              <div className="locksen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-bka6he"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p>Crypto Deposit Limit</p>
            </div>
            <div className="lock">
              <div className="locksen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-bka6he"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p>Crypto Withdrawal Limit</p>
            </div>
            <div className="lock">
              <div className="locksen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-bka6he"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p>P2P Transaction Limits</p>
            </div>
          </div>
        </div>
        <div className="idenfaq">
          <p>FAQ</p>
          <p style={{ fontSize: "12px" }}>Identity Verification</p>
        </div>
      </div>
    </div>
  );
};

export default Identification;
