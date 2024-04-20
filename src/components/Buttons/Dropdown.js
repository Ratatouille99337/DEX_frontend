import React, { useState } from "react";
import "../../assets/css/dropdown.scss";
import ocean from "../../assets/image/ocean.png";
import req from "../../assets/image/req.png";
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



const DropdownButton = ({ title, items }) => {
  const [themeFlag, setThemeFlag] = useState(
  localStorage.themeMode === "dark" ? "dark" : "light"
);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleChangeTheme = () => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (themeFlag === "dark") {
      node.setAttribute("href", "/assets/css/light.css");
      setThemeFlag("light");
      localStorage.setItem("themeMode", "light");
    } else {
      node.setAttribute("href", "/assets/css/dark.css");
      setThemeFlag("dark");
      localStorage.setItem("themeMode", "dark");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("dextool-header").append(node);
  };
  return (
    <div className="dropdown">
      <button type="button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="logheader">st***@gmail.com</div>
          <div className="subsymbol">
            <div className="unverified">
              <div className="img">
                <FontAwesomeIcon icon={faAddressCard} />
              </div>
              <p>Unverified</p>
            </div>
            <div className="regular">
              <div className="img">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <p>Regular User</p>
            </div>
          </div>
          <div className="twitterpart">
            <div className="twitter">
              <div className="img">
                <FontAwesomeIcon icon={faXTwitter} />
              </div>
              <p>Link twitter</p>
            </div>
          </div>
          {items.map((dropdownItems, index) => (
            <a
              className="drop-content"
              key={index}
              onClick={() => setIsOpen(false)}
              href={dropdownItems.href}
            >
              <div className="img">
                <FontAwesomeIcon
                  style={{ fontSize: "18px" }}
                  icon={dropdownItems.img}
                />
              </div>
              <p>{dropdownItems.each}</p>
            </a>
          ))}
          <a
            className="drop-content"
            onClick={handleChangeTheme}
          >
            <div className="img">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faBrush} />
            </div>
            <p>Theme</p>
          </a>

          <a
            className="drop-content"
            onClick={() => setIsOpen(false)}
            href="/"
          >
            <div className="img">
              <FontAwesomeIcon
                style={{ fontSize: "18px" }}
                icon={faRightFromBracket}
              />
            </div>
            <p>Logout</p>
          </a>
          
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
