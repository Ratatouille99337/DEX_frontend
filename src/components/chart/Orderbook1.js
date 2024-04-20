import React from "react";
import "../../assets/css/orderbook1.scss";

const OrderBook1 = () => {
  const sellOrders = [
    { price: 65234.50, quantity: 1832.67, total: 1219773.62 },
    { price: 48321.25, quantity: 1255.34, total: 595857.86 },
    { price: 71888.77, quantity: 2323.45, total: 1685924.92 },
    { price: 53789.32, quantity: 1532.78, total: 848811.55 },
    { price: 62999.99, quantity: 19232.99, total: 1259497.20 },
    { price: 51123.45, quantity: 14655.76, total: 754896.92 },
    { price: 69567.88, quantity: 2452.22, total: 1545604.78 },
    { price: 44555.66, quantity: 974.99, total: 445082.54 },
    { price: 57321.44, quantity: 136.88, total: 966205.61 },
    { price: 73222.33, quantity: 23454.32, total: 1780096.86 },
    { price: 48321.25, quantity: 1255.34, total: 595857.86 },
    { price: 71888.77, quantity: 2323.45, total: 1685924.92 },
    { price: 53789.32, quantity: 1532.78, total: 848811.55 },
    { price: 62999.99, quantity: 19232.99, total: 1259497.20 },
    { price: 51123.45, quantity: 14655.76, total: 754896.92 },
    { price: 69567.88, quantity: 2452.22, total: 1545604.78 },
    { price: 62999.99, quantity: 19232.99, total: 1259497.20 },
    { price: 51123.45, quantity: 14655.76, total: 754896.92 },
    { price: 69567.88, quantity: 2452.22, total: 1545604.78 },
    { price: 44555.66, quantity: 974.99, total: 445082.54 },
    { price: 57321.44, quantity: 136.88, total: 966205.61 },
    { price: 73222.33, quantity: 23454.32, total: 1780096.86 },
    { price: 48321.25, quantity: 1255.34, total: 595857.86 },
    { price: 71888.77, quantity: 2323.45, total: 1685924.92 },
    { price: 53789.32, quantity: 1532.78, total: 848811.55 },
    { price: 62999.99, quantity: 19232.99, total: 1259497.20 },
    { price: 51123.45, quantity: 14655.76, total: 754896.92 },
    { price: 69567.88, quantity: 2452.22, total: 1545604.78 },
    // Add more sell orders here
  ];

  return (
    <div className="scroll1">
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

export default OrderBook1;
