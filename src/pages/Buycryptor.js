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

const Buycryptor = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Nav />
        <Buy />
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

export default Buycryptor;
