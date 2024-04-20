import React, { useState } from "react";
import "../../assets/css/dropdown1.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
  faRightFromBracket,
  faUsersLine,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import { faHubspot } from "@fortawesome/free-brands-svg-icons";
import {
  faUpRightAndDownLeftFromCenter,
  faPeopleCarryBox,
  faMaximize,
  faRobot,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

import Buycard from "../Currencies/Buycard";

const DropdownButton1 = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown1">
      <button type="button" onClick={toggleDropdown}>
        {title}
        <svg
        class="bn-svg header-menu-item_dropdown-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
          fill="currentColor"
        ></path>
      </svg>
      </button>
      

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-con">
            <div className="leftcol">
              <p>Basic</p>
              <a className="spot" href="/trade">
                <div className="img">
                  <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                </div>
                <div className="text">
                  <p>Spot</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    {" "}
                    Buy and sell on the Spot market with advanced tools
                  </p>
                </div>
              </a>
              <a className="spot" href="/trade">
                <div className="img">
                  <FontAwesomeIcon icon={faMaximize} />
                </div>
                <div className="text">
                  <p>Margin</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    Increase your profits with leverage
                  </p>
                </div>
              </a>
              <a className="spot" href="#">
                <div className="img">
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                </div>
                <div className="text">
                  <p>P2P</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    Buy & sell cryptocurrencies using bank transfer and 800+
                    options
                  </p>
                </div>
              </a>
              <a className="spot" href="/convert">
                <div className="img">
                  <FontAwesomeIcon icon={faHubspot} />
                </div>
                <div className="text">
                  <p>Convert & Block Trade</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    The easiest way to trade at all sizes
                  </p>
                </div>
              </a>
            </div>
            <div className="rightcol">
              <p>Advanced</p>
              <a className="spot" href="/bots">
                <div className="img">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <div className="text">
                  <p>Trading Bots</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    Trade smarter with our various automated strategies-easy,
                    fast and reliable
                  </p>
                </div>
              </a>
              <a className="spot" href="/api">
                <div className="img">
                  <FontAwesomeIcon icon={faAtom} />
                </div>
                <div className="text">
                  <p>APIs</p>
                  <p style={{ fontSize: "12px", color: "#848e9c" }}>
                    Unlimited opportunities with one key
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton1;
