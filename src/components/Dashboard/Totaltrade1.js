import React from "react";
import "../../assets/css/Trade/totrade.scss";
import OrderBook from "../chart/Orderbook";
import OrderBook1 from "../chart/Orderbook1";
import OrderBook2 from "../chart/Orderbook2";
import OrderBook3 from "../chart/Orderbook3";
import OrderBook4 from "../chart/Orderbook4";
import Tradechart from "./Tradechart";
import SearchInput from "../Inputs/SearchInput";
import Togglebar from "./Bar/Togglebar";
import "../../assets/css/w3.css";
import "../../assets/css/add.css";
import Input from "../Inputs/Input";
const Totaltrade = () => {
  return (
    <div className="container">
      <div className="totlist">
        <div className="firstList">
          <div className="tradenav">
            <div className="tradenavTitle">BTC/USDT</div>
            <div className="tradenavSubTitle">
              <div className="eachSubTitle">
                <p style={{ color: "#0ecb81", fontSize: "16px" }}>70,023.01</p>
                <p>70,023.01</p>
              </div>
              <div className="eachSubTitle">
                <p>24h Change</p>
                <p style={{ color: "#f6465d" }}>-498.23</p>
              </div>
              <div className="eachSubTitle">
                <p>24h High</p>
                <p>71,316.00</p>
              </div>
              <div className="eachSubTitle">
                <p>24h Low</p>
                <p>69,808.52</p>
              </div>
              <div className="eachSubTitle">
                <p>24h Volume(BTC)</p>
                <p>20,089.13</p>
              </div>
              <div className="eachSubTitle">
                <p>24h Volumne(USDT)</p>
                <p>1,426,339.11</p>
              </div>
            </div>
          </div>

          <div className="tradegraph">
            <div className="realtimelist">
              <div className="flist">
                <div className="symbol">
                  <div className="eachsymbol">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="css-3kwgah"
                    >
                      <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
                      <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="css-3kwgah"
                    >
                      <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="css-3kwgah"
                    >
                      <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <select>
                    <option>0.01</option>
                    <option>0.1</option>
                    <option>1</option>
                    <option>10</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
                <div className="pricetitle">
                  <div className="pfirst">Price(USDT)</div>
                  <div className="psecond">Amount(BTC)</div>
                  <div className="pthird">Total</div>
                </div>
                <div className="totallist">
                  <OrderBook />
                </div>
              </div>
              <div className="slist">
                <div className="pricetitle1">
                  <div
                    className="pfirst"
                    style={{ fontSize: "16px", color: "#0ecb81" }}
                  >
                    70,023.01
                  </div>
                  <div className="psecond">70,023.01</div>
                  <div className="pthird">More</div>
                </div>
                <div className="totallist1">
                  <OrderBook1 />
                </div>
                <div className="progressbar">
                  <div className="w3-light-grey w3-round flex">
                    <div
                      className="w3-container w3-round"
                      style={{
                        width: "36.43%",
                        backgroundColor: "rgb(14, 203, 129)",
                      }}
                    >
                      36.43%
                    </div>
                    <div
                      className="w3-container w4"
                      style={{ width: "63.57%", backgroundColor: "#f6465d" }}
                    >
                      63.57%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="klinegraph">
              <div className="topgraphnav">
                <div className="toprighttext">
                  <p style={{ color: "#f0b90b" }}>Chart</p>
                  <p>Info</p>
                  <p>Trading Data</p>
                </div>
                <div className="toplefttext">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="css-y4lg06"
                  >
                    <path
                      d="M14.121 12l3.44-3.44L21 12V3h-9l3.44 3.44L12 9.878l2.121 2.12zM3 12l3.44 3.44L9.878 12 12 14.12l-3.44 3.44L12 21H3v-9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="css-nutj79"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 11V3h8v8H3zm2-6h4v4H5V5zM3 21v-8h8v8H3zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 2h-4v4h4V5zM13 21v-8h8v8h-8zm2-6h4v4h-4v-4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="timegraphnav">
                <div className="subrighttext">
                  <p>Time</p>
                  <p>1s</p>
                  <p>15m</p>
                  <p>1H</p>
                  <p>4H</p>
                  <p>1D</p>
                  <p>1W</p>
                  <p style={{ color: "#f0b90b" }}>1M</p>
                </div>
                <div className="sublefttext">
                  <p style={{ color: "#f0b90b" }}>Original</p>
                  <p>Trading View</p>
                  <p>Depth</p>
                </div>
              </div>
              <div className="realgraph1">
                <Tradechart />
              </div>
              <div className="selectgraph">
                <Togglebar />
              </div>
            </div>
          </div>
        </div>
        <div className="secondList">
          <div className="fcol">
            <div className="sesearch">
              <SearchInput style={{ width: "100%" }} />
            </div>
            <div className="sesymbol">
              <p>USDT</p>
              <p>FDUSD</p>
              <p>USDC</p>

              <p>BNB</p>
              <p>BTC</p>
            </div>
            <div className="sepricetitle">
              <div className="pfirst">Price(USDT)</div>
              <div className="psecond">Amount(BTC)</div>
              <div className="pthird">Total</div>
            </div>
            <div className="setotallist">
              <OrderBook2 />
            </div>
          </div>
          <div className="scol">
            <div className="scol_first">
              <div className="thtitle">Market Trades</div>
              <div className="ssepricetitle">
                <div className="pfirst">Price(USDT)</div>
                <div className="psecond">Amount(BTC)</div>
                <div className="pthird">Time</div>
              </div>
              <div className="ssetotallist">
                <OrderBook3 />
              </div>
            </div>
            <div className="scol_second">
              <div className="fthtitle">Top Movers FAQ</div>
              <div className="ffipricetitle">
                <p>All</p>
                <p>Change</p>
                <p>New</p>
                <p>Fluctuation</p>
                <p>Volume</p>
              </div>
              <div className="fsetotallist">
                <OrderBook4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totaltrade;
