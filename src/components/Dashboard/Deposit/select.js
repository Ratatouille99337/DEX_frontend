import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Deposit/select.scss";
import Button from "../../Buttons/Button";
import Modalcard from "../../Currencies/Modalcard";
import { AnimatePresence, motion } from "framer-motion";
import GuideCard from "../../Currencies/GuideCard";
import btc from "../../../assets/image/btc.png";
import usd from "../../../assets/image/usd.png";
import eur from "../../../assets/image/eur.png";
import brl from "../../../assets/image/brl.png";
import try1 from "../../../assets/image/try.png";
import sar from "../../../assets/image/sar.png";
import vnd from "../../../assets/image/vnd.png";
import rub from "../../../assets/image/rub.png";
import aud from "../../../assets/image/aud.png";
import inr from "../../../assets/image/inr.png";
import Signin from "../../Login/signin";
import SelectCard from "../../Currencies/SelectCard";

const GuideData = [
  {
    guidelogo:  usd ,
    guidetitle: "USD",
    guidetext: "USD",
  },
  {
    guidelogo:  eur ,
    guidetitle: "EUR",
    guidetext: "Euro",
  },
  {
    guidelogo:  brl ,
    guidetitle: "BRL",
    guidetext: "Brazilian Real",
  },
  {
    guidelogo:  try1 ,
    guidetitle: "TRY",
    guidetext: "Turkish Lira",
  },
  {
    guidelogo:  sar ,
    guidetitle: "SAR",
    guidetext: "Saudi Riyal",
  },
  {
    guidelogo:  vnd ,
    guidetitle: "VND",
    guidetext: "Vietnamese Dong",
  },
  {
    guidelogo:  rub ,
    guidetitle: "RUB",
    guidetext: "Rubul",
  },
  {
    guidelogo:  aud ,
    guidetitle: "AUD",
    guidetext: "Australian Dollar",
  },
  {
    guidelogo:  inr ,
    guidetitle: "INR",
    guidetext: "Indian Rupi",
  },
];
const Select = () => {
  const [modalFlag2, setModalFlag2] = useState(false);
  return (
    <div className="container">
      <div className="select">
        <div className="subtitle">1. Select currency</div>
        <div className="label">Currency</div>
        <div className="currencySel" onClick={() => setModalFlag2(!modalFlag2)}>
          <div className="img">
            <img src={usd} />
          </div>
          <div className="buttontitle">USD</div>
          <div className="buttonsubtitle">USD</div>
        </div>
        <div className="label">Deposit with</div>
        <div className="currencyButton">Recommended</div>
        <div className="radio">
          <input type="radio" />
          <div className="radioVal">
            <div className="img">
              <img src={usd} />
            </div>
            <div className="radioText">Bank Transfer (Al Salam)</div>
          </div>
        </div>
        <div className="radio">
          <input type="radio" />
          <div className="radioVal">
            <div className="img">
              <img src={usd} />
            </div>
            <div className="radioText">Bank Card (Visa/MC)</div>
          </div>
        </div>
        <div className="button">
        <Signin
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "15px 20px",
                  backgroundColor: "#f0b90b",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
                text="Sign in"
              />
        </div>
      </div>

      <div className="modalView">
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
                        <div  onClick={() => setModalFlag2(!modalFlag2)}>
                        <SelectCard 
                          key={key} guideItem={item} />
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

export default Select;
