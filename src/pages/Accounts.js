import React from "react";
import Header1 from "./Header1";
import Modal from "../components/Dashboard/Modal";
import LinkAccounts from "../components/Signed/Account";
import Carousel from "../components/Signed/Carousel";
import Footer from "./Footer";
import Trade from "../components/Dashboard/Trade";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";
import Detail from "../components/Dashboard/Detail";

// load assets
import "../assets/css/dashboard.scss";

const Accounts = () => {
  return (
    <>
      <Header1 />
      <div className="dashboard">
        <LinkAccounts />
        <Carousel />
        <Trade />
        <Faq />

        <Detail />
      </div>
      <Footer />
    </>
  );
};

export default Accounts;
