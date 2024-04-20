import React from "react";
import "../../../assets/css/Loged/Dashboard/Settings.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import eur from "../../../assets/image/eur.png";
import avatar from "../../../assets/image/default-avatar.png";
import Fav1 from "../Fav1";
const Setting = () => {
  return (
    <div className="totalset">
      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Recent Transacitons</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Nickname</p>
              </div>
              <div className="content">
                <p>
                  Set a customized nickname for your profile. Real names or
                  social account names are not recommended.
                </p>
              </div>
            </div>
            <div className="button">
              {/* <div className="img">
                <img src=""/>
              </div> */}
              <p>Anonymous-User-36534</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Avatar</p>
              </div>
              <div className="content">
                <p>
                  Select an avatar to personalize your account. You can purchase
                  your own avatar in NFT Marketplace
                </p>
              </div>
            </div>
            <div className="button">
              <div className="img">
                <img src={avatar} />
              </div>

              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>C2C Profile</p>
              </div>
              <div className="content">
                <p>
                  Edit your C2C nickname, manage your payment methods and the
                  list of users you follow.
                </p>
              </div>
            </div>
            <div className="button">
              <div className="img">
                <img src={eur} />
              </div>
              <p>st*****.com</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Notifications</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Notification Language</p>
              </div>
              <div className="content">
                <p>
                  This will affect the language settings of E-mail and App push.
                </p>
              </div>
            </div>
            <div className="button">
              {/* <div className="img">
                <img src=""/>
              </div> */}
              <p>Default</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Notification Preferences</p>
              </div>
              <div className="content">
                <p>
                  Once configured, you will receive relevant on-site inbox
                  notifications within the app and website.
                </p>
              </div>
            </div>
            <div className="button">
              <p>Activities, System Messages</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Preferences</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Color Preference</p>
              </div>
            </div>
            <div className="button">
              <div className="img">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.74478 1.66679L10.6552 6.57726L9.42762 7.80487L6.61198 4.98923L6.61198 14.1675L4.87587 14.1675L4.87587 4.99007L2.06105 7.8049L0.833432 6.57728L5.7439 1.66681L5.74432 1.66724L5.74478 1.66679Z"
                    fill="#0ECB81"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.0778 17.5015L18.9882 12.591L17.7606 11.3634L14.945 14.179L14.945 5.0008L13.2089 5.0008L13.2089 14.1782L10.3941 11.3634L9.16644 12.591L14.0769 17.5015L14.0773 17.501L14.0778 17.5015Z"
                    fill="#F6465D"
                  ></path>
                </svg>
              </div>
              <p>Green Up / Red Down</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Style Settings</p>
              </div>
            </div>
            <div className="button">
              <p>Color vision deficiency</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Shortcuts</p>
              </div>
            </div>
            <div className="button">
              <p>Enable</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Theme</p>
              </div>
            </div>
            <div className="button">
              <p>Dark</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Style Settings</p>
              </div>
            </div>
            <div className="button">
              <p>Color vision deficiency</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Trade</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Order Confirmation Reminders</p>
              </div>
              <div className="content">
                <p>
                  If the order reminder function is enabled, it will need to be
                  reconfirmed every time an order is submitted.
                </p>
              </div>
            </div>
            <div className="button">
              {/* <div className="img">
                <img src=""/>
              </div> */}
              <p>Stop-Limit Order, Auto Borrow/Repay for Margin</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Fee Deduction</p>
              </div>
              <div className="content">
                <p>Use BNB to pay fees</p>
              </div>
            </div>
            <div className="button">
              <p>Spot fees</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Withdraw Setting</p>
              </div>
              <div className="content">
                <p>
                  Choose to withdraw on-chain or through internal transfer for
                  Binance addresses.
                </p>
              </div>
            </div>
            <div className="button">
              <p>Withdraw Through Internal Transfer</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Link Account</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Link X Account</p>
              </div>
              <div className="content">
                <p>Link your X Account to Binance</p>
              </div>
            </div>
            <div className="button">
              <p>Not Linked</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indset">
        <div className="setheader">
          <p style={{ fontSize: "20px" }}>Privacy</p>
        </div>
        <div className="setcon">
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Advertising</p>
              </div>
              <div className="content">
                <p>
                  Binance may share usage data to 3rd party ad platforms to help
                  improve our targeting and marketing quality.
                </p>
              </div>
            </div>
            <div className="button">
              <p>On</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="text">
              <div className="title">
                <p>Analytics</p>
              </div>
              <div className="content">
                <p>
                  Binance may share usage data to 3rd party analytics platforms
                  to help improve our products and marketing.
                </p>
              </div>
            </div>
            <div className="button">
              <p>On</p>
              <div className="editbutton">
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
