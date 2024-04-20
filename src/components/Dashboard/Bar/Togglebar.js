import React, { useState } from "react";
import "../../../assets/css/togglebar.scss";
import Input from "../../Inputs/Input";
const Togglebar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabs-containert">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Spot
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Cross 5
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          Isolated
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          Grid
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="tab-text">
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-text">
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <div className="columnSubTitle">
                    <p>Normal</p>
                    <p>Borrow</p>
                    <p>Repay</p>
                  </div>
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <div className="columnSubTitle">
                    <p>Normal</p>
                    <p>Borrow</p>
                    <p>Repay</p>
                  </div>
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="tab-text">
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <div className="columnSubTitle">
                    <p>Normal</p>
                    <p>Borrow</p>
                    <p>Repay</p>
                  </div>
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-con">
              <div className="sub-title">
                <p style={{ color: "#f0b90b" }}>Limit</p>
                <p>Market</p>
                <p>Stop-limit</p>
              </div>
              <div className="tab-change">
                <div className="columntab">
                  <div className="columnSubTitle">
                    <p>Normal</p>
                    <p>Borrow</p>
                    <p>Repay</p>
                  </div>
                  <p>Avbl-BTC</p>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="changeprice">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <hr />
                  <div className="logbutton">
                    <p>Log In or Register Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="tab-text">
            <div className="tab-column-1">
              <div className="c1title">1.Parameters</div>
              <div className="c1content">
                <div className="eachcon">
                  <div className="rightcon">Time Period</div>
                  <div className="leftcon">
                    <p>3D</p>
                    <p>7D</p>
                    <p>30D</p>
                    <p>180D</p>
                  </div>
                </div>
                <div className="eachcon">
                  <div className="rightcon">Price Range</div>
                  <div className="leftcon">58143.19-74610.40 USDT</div>
                </div>
                <div className="eachcon">
                  <div className="rightcon">Grid Number</div>
                  <div className="leftcon">31</div>
                </div>
                <div className="eachcon">
                  <div className="rightcon">Profit/grid</div>
                  <div className="leftcon">0.51%-0.71%</div>
                </div>
                <div className="eachcon">
                  <div className="rightcon">
                    Copy parameters to Manual Settings.
                  </div>
                  <div className="leftcon"></div>
                </div>
              </div>
            </div>
            <div className="tab-column-2">
              <div className="c2title">2.Inverstment</div>
              <div className="c2subtitle">Avbl:0.00USDT</div>
              <div className="c2rate">
                <p>Total</p>
                <p>197.8 USDT</p>
              </div>
              <hr className="c2hr" />
              <div className="c2logbutton">
                <p>Log In or Register Now</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Togglebar;
