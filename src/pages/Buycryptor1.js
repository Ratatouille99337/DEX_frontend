import React from "react";
import Nav from "../components/Dashboard/Buycryptor/Nav";
import Nav1 from "../components/Dashboard/Buycryptor/Nav1";
import Buy from "../components/Dashboard/Buycryptor/Buy";
import Buy1 from "../components/Dashboard/Buycryptor/Buy1";
import Howtobuy from "../components/Dashboard/Buycryptor/Howtobuy";
import Bmarkets from "../components/Dashboard/Buycryptor/Bmarkets";
import Change from "../components/Dashboard/Buycryptor/Change";
import Conversion from "../components/Dashboard/Buycryptor/Conversion";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Header1 from "./Header1";

const Buycryptor1 = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <Nav1 />
        <Buy1 />
        <Howtobuy />
        <Bmarkets />
        <Change />
        <Conversion />
        <Detail />
      </div>
      <Footer />   
    </div>
  );
};

export default Buycryptor1;
