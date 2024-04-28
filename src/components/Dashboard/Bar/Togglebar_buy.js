import React, { useState, useEffect } from "react";
import "../../../assets/css/togglebar_buy.scss";
import Input from "../../Inputs/Input";
import btc from "../../../assets/image/btc.png";
import bnb from "../../../assets/image/bnb.png";
import eth from "../../../assets/image/eth.png";
import sell from "../../../assets/image/sell.svg";
import Button from "../../Buttons/Button";
import Signup from "../../Login/signup";

import axios from "axios";
import { devApiLink } from "../../../config";
import { AnimatePresence, motion } from "framer-motion";
import SelectCard from "../../Currencies/SelectCard";

const Togglebar_buy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [modalFlag1, setModalFlag1] = useState(false);
  const [modalFlag2, setModalFlag2] = useState(false);
  const [modalFlag3, setModalFlag3] = useState(false);
  const [modalFlag4, setModalFlag4] = useState(false);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [GuideData, setGuideData] = useState([]);

  const [buyvalue, setbuyvalue] = useState("");
  const [sellvalue, setsellvalue] = useState("");
  const [buyreceivevalue, setbuyreceivevalue] = useState("");
  const [sellreceivevalue, setsellreceivevalue] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(devApiLink + "/market/coins", {})
        .then((response) => {
          //  response.data.data.sort((a, b) => a.quote.USD.price - b.quote.USD.price);
          setGuideData(response.data.data);
          //console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const selectCoin1 = (item) => {
    console.log(item.guidetext);

    document.getElementById(
      "coinlogo1"
    ).src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`;
    document.getElementById("buttontitle1").innerHTML = item.symbol;
    setModalFlag1(!modalFlag1);
  };

  const selectCoin2 = (item) => {
    console.log(item.guidetext);

    document.getElementById(
      "coinlogo2"
    ).src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`;
    document.getElementById("buttontitle2").innerHTML = item.symbol;
    setModalFlag2(!modalFlag2);
  };

  const selectCoin3 = (item) => {
    console.log(item.guidetext);

    document.getElementById(
      "coinlogo3"
    ).src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`;
    document.getElementById("buttontitle3").innerHTML = item.symbol;
    setModalFlag3(!modalFlag3);
  };

  const selectCoin4 = (item) => {
    console.log(item.guidetext);

    document.getElementById(
      "coinlogo4"
    ).src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`;
    document.getElementById("buttontitle4").innerHTML = item.symbol;
    setModalFlag4(!modalFlag4);
  };

  return (
    <div>
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
                  <div className="priceNum">
                    <Input
                      className="input default-input"
                      type="number"
                      placeholder="Enter Amount"
                      value={buyvalue}
                      handleUpdate={setbuyvalue}
                    />
                  </div>

                  <div
                    className="imgName"
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalFlag1(!modalFlag1)}
                  >
                    <div className="img">
                      <img id="coinlogo1" src={bnb} />
                    </div>
                    <div className="currencyName" id="buttontitle1">
                      BNB
                    </div>
                  </div>
                </div>
              </div>

              <div className="change">
                <div className="title">spend</div>
                <div className="price">
                  <div className="priceNum">
                    <Input
                      className="input default-input"
                      type="number"
                      placeholder="0.00"
                      value={buyreceivevalue}
                      handleUpdate={setbuyreceivevalue}
                    />
                  </div>

                  <div
                    className="imgName"
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalFlag2(!modalFlag2)}
                  >
                    <div className="img">
                      <img id="coinlogo2" src={bnb} />
                    </div>
                    <div className="currencyName" id="buttontitle2">
                      BNB
                    </div>
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
                      type="number"
                      placeholder="Enter Amount"
                      value={sellvalue}
                      handleUpdate={setsellvalue}
                    />
                  </div>
                  <div
                    className="imgName"
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalFlag3(!modalFlag3)}
                  >
                    <div className="img">
                      <img id="coinlogo3" src={bnb} />
                    </div>
                    <div className="currencyName" id="buttontitle3">
                      BNB
                    </div>
                  </div>
                </div>
              </div>

              <div className="change">
                <div className="title">spend</div>
                <div className="price">
                  <div className="priceNum">
                    <Input
                      className="input default-input"
                      type="number"
                      placeholder="0.00"
                      value={sellreceivevalue}
                      handleUpdate={setsellreceivevalue}
                    />
                  </div>
                  <div
                    className="imgName"
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalFlag4(!modalFlag4)}
                  >
                    <div className="img">
                      <img id="coinlogo4" src={bnb} />
                    </div>
                    <div className="currencyName" id="buttontitle4">
                      BNB
                    </div>
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

      <div className="modalView">
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
                    {GuideData.map((item, key) => {
                      return (
                        <div onClick={() => selectCoin1(item)}>
                          {/* <div  onClick={() => setModalFlag2(!modalFlag2)}> */}
                          <SelectCard key={key} guideItem={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}{" "}
        {modalFlag2 && (
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
                      onClick={() => setModalFlag2(!modalFlag2)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    {GuideData.map((item, key) => {
                      return (
                        <div onClick={() => selectCoin2(item)}>
                          <SelectCard key={key} guideItem={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {modalFlag3 && (
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
                      onClick={() => setModalFlag2(!modalFlag2)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    {GuideData.map((item, key) => {
                      return (
                        <div onClick={() => selectCoin3(item)}>
                          <SelectCard key={key} guideItem={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {modalFlag4 && (
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
                      onClick={() => setModalFlag2(!modalFlag2)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    {GuideData.map((item, key) => {
                      return (
                        <div onClick={() => selectCoin4(item)}>
                          <SelectCard key={key} guideItem={item} />
                        </div>
                      );
                    })}
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

export default Togglebar_buy;
