import React from "react";
import "../../../assets/css/Reward/getreward.scss";
import reward from "../../../assets/image/rewards.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faDownload,
  faBell,
  faFile,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

import {
  faAddressCard,
  faGem,
  faHouse,
  faWallet,
  faBookmark,
  faUser,
  faUserPlus,
  faGear,
  faBrush,
  faUsers,
  faRightFromBracket,
  faUsersLine,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import sol from "../../../assets/image/sol.png";
import Button from "../../Buttons/Button";

const Getrewards = () => {
  return (
    <div className="container">
      <div className="getheader">
        <div className="starter">
          <p>Get Rewards</p>
        </div>
        <div className="substarter">
          <p>Complete these tasks to earn daily rewards!</p>
        </div>
        <p>Onboarding Tasks</p>
        <div className="rewardCard">
          <div className="left">
            <div className="img">
              <svg
             
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="bn-svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 20H22V15H2V20ZM2 13V4H22V13H11V7H4V13H2ZM17 7H13V9H17V7Z"
                  fill="url(#paint0_linear_252_29455_0.9381710957389793)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 10C9.5 11.1046 8.60457 12 7.5 12C6.39543 12 5.5 11.1046 5.5 10C5.5 8.89543 6.39543 8 7.5 8C8.60457 8 9.5 8.89543 9.5 10ZM11 15V17H4V15H11ZM13 15V17H20V15H13ZM20 13V11H13V13H20Z"
                  fill="#76808F"
                ></path>
                <rect x="1" y="11" width="22" height="2" fill="#76808F"></rect>
                <defs>
                  <linearGradient
                    id="paint0_linear_252_29455_0.9381710957389793"
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F0B90B"></stop>
                    <stop offset="1" stop-color="#F8D33A"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="left_right">
              <p style={{fontSize:"18px"}}>
                Complete Identity Verification to get a 20 USDT Trading Fee
                Rebate voucher
              </p>
              <div className="rebate">
                <p>Reward</p>
                <div className="icon">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faSquarePollHorizontal}
                  />
                  <p>20 USDT Trading Fee Rebate Voucher</p>
                </div>
              </div>
              <div className="rebate1">
                <p>Time Left to Complete Task</p>
                <p>09 Days 14 Hours 14 Minutes</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="button">
              <Button
                className="default-btn"
                type="link"
                text="Do Task"
                link="/accounts"
                style={{ width: "fit-content",padding:"3px 10px", borderRadius:"5px" }}
              />
              <div className="rule">
                <svg
                  class="bn-svg TaskRuleTrigger-icon ul-svg-container"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Rules</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rewardCard">
          <div className="left">
            <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bn-svg"><path d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9L15 16Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 8C12.866 8 16 11.134 16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8ZM9 18L6 15L9 12L12 15L9 18Z" fill="url(#paint0_linear_252_29453_0.9248434226669822)"></path><defs><linearGradient id="paint0_linear_252_29453_0.9248434226669822" x1="9" y1="22" x2="9" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
            </div>
            <div className="left_right">
              <p style={{fontSize:"18px"}}>
              Trade crypto worth at least 10 USD and get a 50 USDT Trading Fee Rebate voucher
              </p>
              <div className="rebate1">
                <p>Progress</p>
                <p>0/10 USDT</p>
              </div>
              <div className="rebate">
                <p>Reward</p>
                <div className="icon">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faSquarePollHorizontal}
                  />
                  <p>20 USDT Trading Fee Rebate Voucher</p>
                </div>
              </div>
              <div className="rebate1">
                <p>Time Left to Complete Task</p>
                <p>09 Days 14 Hours 14 Minutes</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="button">
              <Button
                className="default-btn"
                type="link"
                text="Do Task"
                link="/accounts"
                style={{ width: "fit-content",padding:"3px 10px", borderRadius:"5px" }}
              />
              <div className="rule">
                <svg
                  class="bn-svg TaskRuleTrigger-icon ul-svg-container"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Rules</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rewardCard">
          <div className="left">
            <div className="img">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bn-svg"><rect width="18" height="11" transform="matrix(1 0 0 -1 3 21)" fill="url(#paint0_linear_252_29456_0.8600572041616343)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6997 2.00012L10.6997 2.00012L10.6997 13.362L10.3967 13.3593L6.23779 13.4001L12.2126 19.375L18.1875 13.4001L14.0112 13.3911L13.6997 13.3883L13.6997 2.00012Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear_252_29456_0.8600572041616343" x1="9" y1="0" x2="9" y2="11" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
            </div>
            <div className="left_right">
              <p style={{fontSize:"18px"}}>
              Buy crypto (via P2P/ Fiat/ 3rd Party) worth at least 10 USD and get a 30 USDT Trading Fee Rebate voucher
              </p>
              <div className="rebate1">
                <p>Progress</p>
                <p>0/10 USDT</p>
              </div>
              <div className="rebate">
                <p>Reward</p>
                <div className="icon">
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faSquarePollHorizontal}
                  />
                  <p>30 USDT Trading Fee Rebate Voucher</p>
                </div>
              </div>
              <div className="rebate1">
                <p>Time Left to Complete Task</p>
                <p>09 Days 14 Hours 14 Minutes</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="button">
              <Button
                className="default-btn"
                type="link"
                text="Do Task"
                link="/accounts"
                style={{ width: "fit-content",padding:"3px 10px", borderRadius:"5px" }}
              />
              <div className="rule">
                <svg
                  class="bn-svg TaskRuleTrigger-icon ul-svg-container"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Rules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getrewards;
