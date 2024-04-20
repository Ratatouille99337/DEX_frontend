import React from "react";
import "../../assets/css/orderbook.scss";

const OrderBook = () => {
  // Sample data for buy and sell orders
  const buyOrders = [
    { price: 38543.78, quantity: 7565.45, total: 269806.46 },
{ price: 72501.23, quantity: 3454.23, total: 217503.69 },
{ price: 54012.95, quantity: 12434.43, total: 648155.40 },
{ price: 46302.12, quantity: 9454.09, total: 416719.08 },
{ price: 69231.88, quantity: 5232.34, total: 346159.40 },
{ price: 37786.43, quantity: 8094.3, total: 302291.44 },
{ price: 57929.67, quantity: 10343.98, total: 579296.70 },
{ price: 39999.11, quantity: 15234.36, total: 599986.65 },
{ price: 65432.10, quantity: 6224.09, total: 392592.60 },
{ price: 37123.45, quantity: 1124.36, total: 408357.95 },
{ price: 42575.00, quantity: 4342.2, total: 170300.00 },
{ price: 71111.78, quantity: 26452.9, total: 142223.56 },
{ price: 46302.12, quantity: 9454.09, total: 416719.08 },
{ price: 69231.88, quantity: 5232.34, total: 346159.40 },
{ price: 37786.43, quantity: 8094.3, total: 302291.44 },
{ price: 57929.67, quantity: 10343.98, total: 579296.70 },
{ price: 39999.11, quantity: 15234.36, total: 599986.65 },
{ price: 65432.10, quantity: 6224.09, total: 392592.60 },
{ price: 69231.88, quantity: 5232.34, total: 346159.40 },
{ price: 37786.43, quantity: 8094.3, total: 302291.44 },
{ price: 57929.67, quantity: 10343.98, total: 579296.70 },
{ price: 39999.11, quantity: 15234.36, total: 599986.65 },
{ price: 65432.10, quantity: 6224.09, total: 392592.60 },
{ price: 37123.45, quantity: 1124.36, total: 408357.95 },
{ price: 42575.00, quantity: 4342.2, total: 170300.00 },
{ price: 71111.78, quantity: 26452.9, total: 142223.56 },
{ price: 46302.12, quantity: 9454.09, total: 416719.08 },
{ price: 69231.88, quantity: 5232.34, total: 346159.40 },
{ price: 37786.43, quantity: 8094.3, total: 302291.44 },
{ price: 57929.67, quantity: 10343.98, total: 579296.70 },
{ price: 39999.11, quantity: 15234.36, total: 599986.65 },
{ price: 65432.10, quantity: 6224.09, total: 392592.60 },
    // Add more buy orders here
  ];



  return (
    <div class="scroll">
      <ul>
        {buyOrders.map((order, index) => (
          <div className="price" key={index}>
            <div className="first">{order.price}</div>
            <div className="second">{order.quantity}</div>
            <div className="third">{order.total}</div>
          </div>
        ))}
        
      </ul>
    </div>
  );
};

export default OrderBook;
