import React from "react";
import "../../assets/css/orderbook3.scss";

const OrderBook3 = () => {
  const sellOrders = [
    { price: 65234.5, quantity: 1832.67, total: "09:32:41" },
    { price: 48321.25, quantity: 1255.34, total: "09:32:40" },
    { price: 71888.77, quantity: 2323.45, total: "09:32:40" },
    { price: 53789.32, quantity: 1532.78, total: "09:32:39" },
    { price: 62999.99, quantity: 19232.99, total: "09:32:38" },
    { price: 51123.45, quantity: 14655.76, total: "09:32:38" },
    { price: 69567.88, quantity: 2452.22, total: "09:32:35" },
    { price: 44555.66, quantity: 974.99, total: "09:32:35" },
    { price: 57321.44, quantity: 136.88, total: "09:32:34" },
    { price: 73222.33, quantity: 23454.32, total: "09:32:33" },
    { price: 48321.25, quantity: 1255.34, total: "09:32:32" },
     { price: 53789.32, quantity: 1532.78, total: "09:32:39" },
    { price: 62999.99, quantity: 19232.99, total: "09:32:38" },
    { price: 51123.45, quantity: 14655.76, total: "09:32:38" },
    { price: 69567.88, quantity: 2452.22, total: "09:32:35" },
    { price: 44555.66, quantity: 974.99, total: "09:32:35" },
    { price: 57321.44, quantity: 136.88, total: "09:32:34" },
    { price: 73222.33, quantity: 23454.32, total: "09:32:33" },
    { price: 48321.25, quantity: 1255.34, total: "09:32:32" },

    // Add more sell orders here
  ];

  return (
    <div className="scroll3">
      <ul>
        {sellOrders.map((order, index) => (
          <div className="price" key={index}>
            <div className="first" style={{ color: "#0ecb81" }}>
              {order.price}
            </div>
            <div className="second">{order.quantity}</div>
            <div className="third">{order.total}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook3;
