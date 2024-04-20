import React from "react";
import Header from "./Header";
import Advertising from "../components/Dashboard/Advertising";
import Trade from "../components/Dashboard/Trade";
import Faq from "../components/Dashboard/Faq";
import VerifyUser from "../components/Dashboard/VerifyUser";
import Detail from "../components/Dashboard/Detail";
import Modal from "../components/Dashboard/Modal";
import Footer from "./Footer";


// load assets
import "../assets/css/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">   
        <Advertising />
        <Trade />
        <Faq />
        <VerifyUser />
        <Detail />
      </div>
      <Footer />
      
    </>
  );
};

export default Dashboard;
