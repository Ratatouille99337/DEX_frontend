import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import Earnsearch from "../components/Dashboard/Earn/Earnsearch";
import Earnproducts from "../components/Dashboard/Earn/Earnproducts";
import Earncalc from "../components/Dashboard/Earn/Earncalc";

const Earn = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Earnheader />
        <Carousel />
        <Earnsearch />
        <Earnproducts />
        <Earncalc />
        <Faq />
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Earn;
