import React from "react";
import Header from "./Header";
import Advertising from "../components/Dashboard/Advertising";
import Trade from "../components/Dashboard/Trade";
import Faq from "../components/Dashboard/Faq";
import Fav from "../components/Dashboard/Fav";
import Overview from "../components/Dashboard/Overview";
import Coinseq from "../components/Dashboard/Coinseq";
import VerifyUser from "../components/Dashboard/VerifyUser";
import Detail from "../components/Dashboard/Detail";
import Modal from "../components/Dashboard/Modal";
import Footer from "./Footer";
import Header1 from "./Header1";


// load assets
import "../assets/css/dashboard.scss";

const Markets = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <Overview />
        <Coinseq />
        <Fav />
        <Detail />
      </div>
      <Footer />   
    </div>
  );
};

export default Markets;
