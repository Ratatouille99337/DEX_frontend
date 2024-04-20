import React from "react";
import Header from "./Header";
import Advertising from "../components/Dashboard/Advertising";
import Trade from "../components/Dashboard/Trade";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";
import Detail from "../components/Dashboard/Detail";
import Tradechart from "../components/Dashboard/Tradechart.js";
import Totaltrade from "../components/Dashboard/Totaltrade.js";
import Modal from "../components/Dashboard/Modal";
import Footer from "./Footer";
import Tradehr from "./Tradehr";
import OrderBook from "../components/chart/Orderbook";


// load assets
import "../assets/css/dashboard.scss";

const TradeSport = () => {
  return (
    <>
      <Header />
      <Tradehr />
      <div className="dashboard">   
        <Totaltrade/>
        <Detail />
      </div>
      <Footer />
      
    </>
  );
};

export default TradeSport;
