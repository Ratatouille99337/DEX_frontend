import React from "react";
import "../../../assets/css/Loged/Dashboard/order.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";
import Fav1 from "../Fav1";
const Orders1 = () => {
  return (
    <div className="order">
      <div className="headerord">
        <p>Open Orders</p>
        <p>Open History</p>
        <p>Trade History</p>
      </div>
      <div className="selects">
        <select>
          <option>All</option>
          <option>Limit Order</option>
          <option>Stop-Limit Order</option>
          <option>Limit-Maker</option>
          <option>Trailing Stop</option>
        </select>
        <select>
          <option>All</option>
          <option>Limit Order</option>
          <option>Stop-Limit Order</option>
          <option>Limit-Maker</option>
          <option>Trailing Stop</option>
        </select>
        <select>
          <option>All</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Date</th>
            <th>Pair</th>
            <th>Type</th>
            <th>Side</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Amount per Iceberg Order</th>
            <th>Filled</th>
            <th>Total</th>
            <th>Trigger Conditions</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders1;
