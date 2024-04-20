import React from "react";
import "../../assets/css/orderbook2.scss";

const OrderBook2 = () => {
  const sellOrders = [
    { price: "FIRO/USDT", quantity: 0.23423, total: -17.23 },
    { price: "OAX/USDT", quantity: 2.4, total: -15.73 },
    { price: "CFX/USDT", quantity: 1.2128, total: -14.34 },
    { price: "FIRO/BTC", quantity: 12.16, total: -14.29 },
    { price: "REI/USDT", quantity: 8.09, total: -13.64 },
    { price: "CFX/BTC", quantity: 1.23, total: -13.23 },
    { price: "OAX/BTC", quantity: 2.338, total: -11.98 },
    { price: "RVN/USDT", quantity: 1.232, total: -11.42 },
    { price: "ETHFI/USDT", quantity: 8.03, total: -10.73 },
    { price: "ATA/USDT", quantity: 7.32, total: -8.52 },
    { price: "NKN/USDT", quantity: 8.09, total: -7.93 },
    { price: "FIRO/BTC", quantity: 3.12, total: -4.33 },
    { price: "CFX/BTC", quantity: 1.23, total: -13.23 },
    { price: "OAX/BTC", quantity: 5.38, total: -11.98 },
    { price: "RVN/USDT", quantity: 11.22, total: -11.42 },
    { price: "ETHFI/USDT", quantity: 8.03, total: -10.73 },
    { price: "REI/USDT", quantity: 8.09, total: -13.64 },
    { price: "CFX/BTC", quantity: 1.23, total: -13.23 },
    { price: "OAX/BTC", quantity: 2.338, total: -11.98 },
    { price: "RVN/USDT", quantity: 1.232, total: -11.42 },
    { price: "ETHFI/USDT", quantity: 8.03, total: -10.73 },
    { price: "ATA/USDT", quantity: 7.32, total: -8.52 },
    { price: "NKN/USDT", quantity: 8.09, total: -7.93 },
    { price: "FIRO/BTC", quantity: 3.12, total: -4.33 },
    { price: "CFX/BTC", quantity: 1.23, total: -13.23 },
    { price: "OAX/BTC", quantity: 5.38, total: -11.98 },
    { price: "RVN/USDT", quantity: 11.22, total: -11.42 },
    { price: "ETHFI/USDT", quantity: 8.03, total: -10.73 },
    // Add more sell orders here
  ];

  return (
    <div className="scroll2">
      <ul>
        {sellOrders.map((order, index) => (
          <div className="price" key={index}>
            <div className="first" style={{ color: "#8892a1" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="css-omng2l"
              >
                <path
                  d="M21.4 10.8c-.3-1.1-.3-1.1-.7-2.1l-6-.1L12.8 3h-2.2l-2 5.6-5.9.1c-.3 1.1-.3 1.1-.7 2.1l4.8 3.6L5 20.1l1.8 1.3 4.9-3.4 4.9 3.4c.9-.7.9-.6 1.8-1.3l-1.8-5.7 4.8-3.6z"
                  fill="currentColor"
                ></path>
              </svg>
              {order.price}
              <span className="mark">5x</span>
            </div>
            <div className="second" style={{ color: "rgb(14, 203, 129)" }}>
              {order.quantity}
            </div>
            <div className="third" style={{ color: "#f6465d" }}>
              {order.total}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook2;
