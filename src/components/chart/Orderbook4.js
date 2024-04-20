import React from "react";
import "../../assets/css/orderbook4.scss";

const OrderBook4 = () => {
  const sellOrders = [
    {
      price: "PNT/USDT",
      quantity: "-9.62%",
      total: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 16"
          fill="none"
          class="css-3kwgah"
        >
          <path
            d="M19.484 3v2.676L16.02 8.353l-3.465-2.677V3l3.465 2.676L19.484 3z"
            fill="currentColor"
          ></path>
          <path
            d="M19.484 7.647v2.676L16.02 13l-3.465-2.676V7.648l3.465 2.676 3.464-2.676zM10.04 9.216H3.02V6.784h7.02v2.432zm18.98 0H22V6.784h7.02v2.432z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    { price: "13:40:07", quantity: "New", total: "09:32:40" },

    {
      price: "AEVO/USDT",
      quantity: "+5.52%",
      total: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 16"
          fill="none"
          class="css-3kwgah"
        >
          <path
            d="M12.535 11V8.5L16 6l3.465 2.5V11L16 8.5 12.535 11zm9.445-3.636H29v2.272h-7.02V7.364zM3 7.364h7.02v2.272H3V7.364z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    { price: "13:40:07", quantity: "New", total: "09:32:40" },

    // Add more sell orders here
  ];

  return (
    <div className="scroll4">
      <ul>
        {sellOrders.map((order, index) => (
          <div className="price" key={index}>
            <div className="first" style={{ color: "#0ecb81" }}>
              {order.price}
            </div>
            <div className="second">{order.quantity}</div>
            <div className="third" >{order.total}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default OrderBook4;
