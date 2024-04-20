import React, { useState } from "react";
import "../../../assets/css/togglebar_buy.scss";
import Input from "../../Inputs/Input";
import btc from "../../../assets/image/btc.png";
import bnb from "../../../assets/image/bnb.png";
import eth from "../../../assets/image/eth.png";
import sell from "../../../assets/image/sell.svg";
import Button from "../../Buttons/Button";
import Signup from "../../Login/signup";

const Togglebar_buy = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Buy
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Sell
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="spend">
            <div className="change">
              <div className="title">spend</div>
              <div className="price">
                <div className="priceNum">15.00-20,000.00</div>
                <div className="imgName">
                  <div className="img">
                    <img src={bnb} />
                  </div>
                  <div className="currencyName">BNB</div>
                </div>
              </div>
            </div>

            <div className="change">
              <div className="title">spend</div>
              <div className="price">
                <div className="priceNum">0.00</div>
                <div className="imgName">
                  <div className="img">
                    <img src={btc} />
                  </div>
                  <div className="currencyName">BTC</div>
                </div>
              </div>
            </div>

            <div className="button">
              <Signup
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "15px 20px",
                  backgroundColor: "#f0b90b",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
                text="Sign Up"
              />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="spend">
            <div className="change">
              <div className="title">spend</div>
              <div className="price">
                <div className="priceNum">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Enter Amount"
                    />
                </div>
                <div className="imgName">
                  <div className="img">
                    <img src={btc} />
                  </div>
                  <div className="currencyName">BTC</div>
                </div>
              </div>
            </div>

            <div className="change">
              <div className="title">spend</div>
              <div className="price">
                <div className="priceNum">0.00</div>
                <div className="imgName">
                  <div className="img">
                    <img src={bnb} />
                  </div>
                  <div className="currencyName">BNB</div>
                </div>
              </div>
            </div>

            <div className="button">
              <Signup
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "15px 20px",
                  backgroundColor: "#f0b90b",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
                text="Sign Up"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Togglebar_buy;

