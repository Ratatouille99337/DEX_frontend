import React from "react";
import Header1 from "./Header1";
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
import Footer1 from "./Footer1";
import Sidebar from "../components/Slidebars/Sidebar";
import Sidebar_acc from "../components/Slidebars/Sidebar_acc";
import Anonymous from "../components/Dashboard/login/Anonymous";
import Started from "../components/Dashboard/login/Started";
import Estimate from "../components/Dashboard/login/Estimate";
import MarketsDis from "../components/Dashboard/login/MarketsDis";
import MarketsDis1 from "../components/Dashboard/login/MarketsDis1";
import Square from "../components/Dashboard/login/Square";
import Recent from "../components/Dashboard/login/Recent";
import Orders from "../components/Dashboard/login/Orders";
import Identification from "../components/Dashboard/login/Identification";

// load assets
import "../assets/css/dashboard.scss";

const Account = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <div className="part">
          <div className="leftpart">
            <Sidebar_acc />
          </div>
          <div className="rightpart">
            <Identification />
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Account;
