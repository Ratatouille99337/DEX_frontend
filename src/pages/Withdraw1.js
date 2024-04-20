import React from "react";
import Nav from "../components/Dashboard/Buycryptor/Nav";
import Nav1 from "../components/Dashboard/Buycryptor/Nav1";
import Buy from "../components/Dashboard/Buycryptor/Buy";
import Howtobuy from "../components/Dashboard/Buycryptor/Howtobuy";
import Bmarkets from "../components/Dashboard/Buycryptor/Bmarkets";
import Change from "../components/Dashboard/Buycryptor/Change";
import Conversion from "../components/Dashboard/Buycryptor/Conversion";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Header1 from "./Header1";
import Title1 from "../components/Dashboard/Deposit/title1";
import Select from "../components/Dashboard/Deposit/select";
import Title2 from "../components/Dashboard/Deposit/title2";
import Select2 from "../components/Dashboard/Deposit/select2";
import Explain from "../components/Dashboard/Recurring/Explain";
import Plan from "../components/Dashboard/Recurring/Plan";
import DCA from "../components/Dashboard/Recurring/DCA";
import Benefits from "../components/Dashboard/Recurring/Benefits";
import Started from "../components/Dashboard/Recurring/Started";
import TopCrypto from "../components/Dashboard/Recurring/TopCrypto";
import Guides from "../components/Dashboard/Recurring/Guides";
import FaqGuide from "../components/Dashboard/FaqGuide";

const Deposit = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <Nav1 />
        <Title2 />
        <Select2 />
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Deposit;
