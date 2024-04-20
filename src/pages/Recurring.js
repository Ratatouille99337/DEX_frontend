import React from "react";
import Nav from "../components/Dashboard/Buycryptor/Nav";
import Buy from "../components/Dashboard/Buycryptor/Buy";
import Howtobuy from "../components/Dashboard/Buycryptor/Howtobuy";
import Bmarkets from "../components/Dashboard/Buycryptor/Bmarkets";
import Change from "../components/Dashboard/Buycryptor/Change";
import Conversion from "../components/Dashboard/Buycryptor/Conversion";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import RecurringTitle from "../components/Dashboard/Recurring/RecurringTitle";
import RecurringTitle1 from "../components/Dashboard/Recurring/RecurringTitle1";
import RecurringTitle2 from "../components/Dashboard/Recurring/RecurringTitle2";
import RecurringTitle3 from "../components/Dashboard/Recurring/RecurringTitle3";
import RecurringTitle4 from "../components/Dashboard/Recurring/RecurringTitle4";
import RecurringTitle5 from "../components/Dashboard/Recurring/RecurringTitle5";
import RecurringTitle6 from "../components/Dashboard/Recurring/RecurringTitle6";
import Explain from "../components/Dashboard/Recurring/Explain";
import Plan from "../components/Dashboard/Recurring/Plan";
import DCA from "../components/Dashboard/Recurring/DCA";
import Benefits from "../components/Dashboard/Recurring/Benefits";
import Started from "../components/Dashboard/Recurring/Started";
import TopCrypto from "../components/Dashboard/Recurring/TopCrypto";
import Guides from "../components/Dashboard/Recurring/Guides";
import FaqGuide from "../components/Dashboard/FaqGuide";

const Recurring = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Nav />
        <RecurringTitle />
        <Plan />
        <RecurringTitle1 />
        <DCA />
        <RecurringTitle2 />
        <Benefits />
        <RecurringTitle3 />
        <Explain />
        <RecurringTitle4 />
        <Started/>
        <RecurringTitle5 />
        <TopCrypto />
        <RecurringTitle6 />
        <Guides />
        <FaqGuide />
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Recurring;
