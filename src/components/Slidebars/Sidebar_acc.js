import React, { useState } from "react";
import "../../assets/css/sidebar.scss";

import { Link, Redirect } from "react-router-dom";
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
  faUsers,
  faUserPlus,
  faGear,
  faBrush,
  faRightFromBracket,
  faUsersLine,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

const Sidenav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <nav className="sidenav1">
      <ul>
        <li>
          <a href="/loginedDashboard">
            <div className="img">
              <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faHouse} />
            </div>
            <p>Dashboard</p>
          </a>
        </li>
        <li onClick={toggleDropdown}>
          <button className="dropdown-btn">
            <div className="first">
              <div className="img">
                <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faWallet} />
              </div>
              <p>Assets</p>
            </div>
            <div className="second">&#11167;</div>
          </button>
          <div className={`dropdown-container${isDropdownOpen ? " show" : ""}`}>
            <a href="/assets">Overview</a>
            <a href="#service1">Spot</a>
            <a href="#service1">Margin</a>
            <a href="#service1">Futures</a>
            <a href="#service1">Options</a>
            <a href="#service1">Trading Bots</a>
            <a href="#service1">Earn</a>
            <a href="#service1">Funding</a>
          </div>
        </li>
        <li onClick={toggleDropdown1}>
          <button className="dropdown-btn">
            <div className="first">
              <div className="img">
                <FontAwesomeIcon
                  style={{ fontSize: "16px" }}
                  icon={faBookmark}
                />
              </div>
              <p>Orders</p>
            </div>
            <div className="second">&#11167;</div>
          </button>
          <div
            className={`dropdown-container${isDropdownOpen1 ? " show" : ""}`}
          >
            <a href="/orders" >
              Spot Order
            </a>
            <a href="#service2">P2P Order</a>
            <a href="#service3">Transaction History</a>
          </div>
        </li>
        <li>
          <a href="/rewards">
            <div className="img">
              <FontAwesomeIcon
                style={{ fontSize: "16px" }}
                icon={faSquarePollHorizontal}
              />
            </div>
            <p>Rewards Hub</p>
          </a>
        </li>
        <li>
          <a href="/referral">
            <div className="img">
              <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faUserPlus} />
            </div>
            <p>Referral</p>
          </a>
        </li>
        <li onClick={toggleDropdown2}>
          <button className="dropdown-btn">
            <div className="first">
              <div className="img">
                <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faUser} />
              </div>
              <p>Account</p>
            </div>
            <div className="second">&#11167;</div>
          </button>
          <div
            className={`dropdown-container${isDropdownOpen2 ? " show" : ""}`}
          >
            <a href="/account" style={{ color: "var(--color)" }}>Identification</a>
            <a href="#service1">Security</a>
            <a href="#service1">Payment</a>
            <a href="#service1">API Management</a>
            <a href="#service1">Account Statement</a>
            <a href="#service1">Financial Reports</a>
          </div>
        </li>
        <li>
          <a href="#home">
            <div className="img">
              <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faUsers} />
            </div>
            <p>Sub Accounts</p>
          </a>
        </li>
        <li>
          <a href="/settings">
            <div className="img">
              <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faGear} />
            </div>
            <p>Settings</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
