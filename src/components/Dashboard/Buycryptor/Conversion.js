import React from "react";
import "../../../assets/css/Buycryptor/conversion.scss";
import ConversionCard from "../../Currencies/Conversioncard";
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

const convData = [
  {
    id: 1,
    conName: "USD",
    conRate: "69,331.00",
    img: usd,
  },
  {
    id: 2,
    conName: "TRY",
    conRate: "2,246,324.55",
    img: try1,
  },
  {
    id: 3,
    conName: "RUB",
    conRate: "6,328,534.10",
    img: rub,
  },
  {
    id: 4,
    conName: "EUR",
    conRate: "64,262.91",
    img: eur,
  },
  {
    id: 5,
    conName: "SAR",
    conRate: "259,991.27",
    img: sar,
  },
  {
    id: 6,
    conName: "AUD",
    conRate: "106,076.44",
    img: aud,
  },
  {
    id: 7,
    conName: "BRL",
    conRate: "348,041.64",
    img: brl,
  },
  {
    id: 8,
    conName: "VND",
    conRate: "1,731,896,122.50",
    img: vnd,
  },
  {
    id: 9,
    conName: "INR",
    conRate: "5,777,352.62",
    img: inr,
  },
];
const Conversion = () => {
  return (
    <div className="container">
      <div className="conversion">
        <div className="conTitle">Popular Bitcoin Conversions</div>
        <div className="conSubTitle">
          A selection of other popular currency conversions of Bitcoin to
          various fiat currencies.
        </div>
        <div className="conCoin">
          {convData.map((item, key) => {
            return (
              <div className="conEach">
                <ConversionCard key={key} conItem={item} />
              </div>
            );
          })}
        </div>
        <div className="conBottomTitle">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
};

export default Conversion;
