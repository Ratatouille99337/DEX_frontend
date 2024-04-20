import React, { useState } from "react";
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
  faUserPlus,
  faGear,
  faBrush,
  faUsers,
  faRightFromBracket,
  faUsersLine,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Button1 from "../components/Buttons/Button1";
import SignButton from "../components/Buttons/SignButton";
import { AnimatePresence, motion } from "framer-motion";
import google from "../assets/image/google-icon.png";
import apple from "../assets/image/apple-icon.png";
import DropdownButton from "../components/Buttons/Dropdown";
import DropdownButton1 from "../components/Buttons/Dropdown1";
import DropdownButton2 from "../components/Buttons/Dropdown2";
// load assets
import Logo from "../assets/image/brand.png";
import "../assets/css/header1.scss";

const Header1 = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const [modalFlag1, setModalFlag1] = useState(false);

  const dropdownItems = [
    {
      img: faHouse,
      each: "Dashboard",
      href: "/loginedDashboard",
    },
    {
      img: faWallet,
      each: "Assets",
      href: "/assets",
    },
    {
      img: faBookmark,
      each: "Orders",
      href: "/orders",
    },
    {
      img: faUser,
      each: "Account",
      href: "/account",
    },
    {
      img: faUserPlus,
      each: "Referral",
      href: "/referral",
    },
    {
      img: faSquarePollHorizontal,
      each: "Rewards Hub",
      href: "/rewards",
    },
    // {
    //   img: faUsers,
    //   each: "Sub Accounts",
    //   href: "/subaccount",
    // },
    {
      img: faGear,
      each: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="header">
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="/buycryptor1" rel="referronor">
              Buy Crypto
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              <Link to="/markets1">Markets</Link>
            </a>
          </div>
          <div className="menu-item">
            <a rel="referronor">
              {/* <Link to="/trade">Trade</Link> */}
              <DropdownButton2 title="Trade" />
            </a>
          </div>
          <div className="menu-item">
            <a href="#" rel="referronor">
              Futures
            </a>
          </div>
          <div className="menu-item">
            <a href="/earn1" rel="referronor">
             <Link to="/earn1">Earn</Link>
            </a>
          </div>
          <div className="menu-item">
            <a href="#" rel="referronor">
              Square
            </a>
          </div>
          <div className="menu-item">
            <a href="#" rel="referronor">
              More
            </a>
          </div>
        </div>
      </div>
      <div className="action">
        <div className="search">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faSearchengin} />
        </div>

        <div className="sign-up">
          <div
            className="sign-modal"
            onClick={() => setModalFlag(!modalFlag)}
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
            // style={{
            //   fontSize: "18px",
            //   backgroundColor: "transparent",
            //   color: "inherit",
            // }}
            // icon={faDownload}
            />
            Deposit
          </div>
        </div>

        <div className="download">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faDownload} />
        </div>
        <div className="loggedin">
          <DropdownButton
            title={
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faUser} />
            }
            items={dropdownItems}
          />
        </div>
        <div className="file">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faFile} />
        </div>
        <div className="announcement">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faBell} />
        </div>
        <div className="global">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faGlobe} />
        </div>
      </div>
      <div className="modalView">
        {modalFlag && (
          <AnimatePresence>
            <motion.div
              animate="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-20%" },
              }}
              exit="hidden"
              initial="hidden"
            >
              <div className="modal">
                <div className="modal-content">
                  <div class="imgcontainer">
                    <span
                      onClick={() => setModalFlag(!modalFlag)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="UserName"
                    />
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Email"
                    />
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="PhoneNumber"
                    />
                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Password"
                    />
                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Confirm Password"
                    />

                    <Button
                      className="btn default-btn"
                      type="link"
                      text="Sign Up"
                      link="/register"
                      style={{ width: "100%" }}
                    />

                    <hr class="modalLine" />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Google"
                      link="/register"
                      img={google}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Apple"
                      link="/register"
                      img={apple}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {modalFlag1 && (
          <AnimatePresence>
            <motion.div
              animate="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-20%" },
              }}
              exit="hidden"
              initial="hidden"
            >
              <div className="modal">
                <div className="modal-content">
                  <div class="imgcontainer">
                    <span
                      onClick={() => setModalFlag1(!modalFlag1)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Email"
                    />

                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Password"
                    />

                    <Button
                      className="btn default-btn"
                      type="link"
                      text="Sign In"
                      link="/accounts"
                      style={{ width: "100%" }}
                    />

                    <hr class="modalLine" />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Google"
                      link="/register"
                      img={google}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Apple"
                      link="/register"
                      img={apple}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Header1;
