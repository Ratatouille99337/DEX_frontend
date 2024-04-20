
import React from "react";
import "../../../assets/css/Buycryptor/change.scss";
import Coinchange from "../../Currencies/Coinchange";
import CoinchangeRe from "../../Currencies/CoinchangeRe";

const currencyRateData = [
  {
    id: 1,
    btc: "0.5",
    usd: "34,328.79",
  },
  {
    id: 2,
    btc: "1",
    usd: "69,446.35",
  },
  {
    id: 3,
    btc: "5",
    usd: "347,231.77",
  },
  {
    id: 4,
    btc: "10",
    usd: "694,463.53",
  },
  {
    id: 5,
    btc: "50",
    usd: "3.47M",
  },
  {
    id: 6,
    btc: "100",
    usd: "6.94M",
  },
  {
    id: 7,
    btc: "500",
    usd: "34.72M",
  },
  {
    id: 8,
    btc: "1000",
    usd: "69.45M",
  },
];

const currencyRateDataRe = [
  {
    id: 1,
    btc: "0.5",
    usd: "0.0000072",
  },
  {
    id: 2,
    btc: "1",
    usd: "0.0000144",
  },
  {
    id: 3,
    btc: "5",
    usd: "0.000072",
  },
  {
    id: 4,
    btc: "10",
    usd: "0.000144",
  },
  {
    id: 5,
    btc: "50",
    usd: "0.00072",
  },
  {
    id: 6,
    btc: "100",
    usd: "0.00144",
  },
  {
    id: 7,
    btc: "500",
    usd: "0.0071998",
  },
  {
    id: 8,
    btc: "1000",
    usd: "0.0143996",
  },
];

const Change = () => {
  return (
    <div className="container">
      <div className="change">
        <div className="eachcard">
          <div className="changeTitle">
            <div className="p">BTC to USD</div>
          </div>
          <div className="stepRate">
            {currencyRateData.map((item, key) => {
              return <Coinchange key={key} coinItem={item} />;
            })}
          </div>
        </div>
        <div className="eachcard">
          <div className="changeTitle">
            <div className="p">USD to BTC</div>
          </div>
          <div className="stepRate">
            {currencyRateDataRe.map((item, key) => {
              return <CoinchangeRe key={key} coinItem={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Change;
