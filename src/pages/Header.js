import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faDownload } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Button1 from "../components/Buttons/Button1";
import SignButton from "../components/Buttons/SignButton";
import { AnimatePresence, motion } from "framer-motion";
import google from "../assets/image/google-icon.png";
import apple from "../assets/image/apple-icon.png";
import DropdownButton1 from "../components/Buttons/Dropdown1";
import Signin from "../components/Login/signin";
import Signup from "../components/Login/signup";

// load assets
import Logo from "../assets/image/brand.png";
import "../assets/css/header.scss";
import login from "../";
const Header = () => {

  return (
    <div className="header">
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="/buycryptor" rel="referronor">
              Buy Crypto
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              <Link to="/markets">Markets</Link>
            </a>
          </div>
          <div className="menu-item">
            <DropdownButton1 title="Trade" />
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Futures
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              <Link to="/earn">Earn</Link>
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              Square
            </a>
          </div>
          <div className="menu-item">
            <a href="/" rel="referronor">
              More
            </a>
          </div>
        </div>
      </div>
      <div className="action">
        <div className="search">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faSearchengin} />
        </div>
        <div className="sign-in">
          <Signin 
            text="Sign In"
          />
        </div>
        <div className="sign-up">
          <Signup 
            text="Sign Up"
          />
        </div>
        <div className="download">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faDownload} />
        </div>
        <div className="global">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faGlobe} />
        </div>
      </div>
    </div>
  );
};

export default Header;
