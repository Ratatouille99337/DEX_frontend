import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Header1 from "./Header1";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Earnheader1 from "../components/Dashboard/Earn/Earnheader1";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import Earnsearch from "../components/Dashboard/Earn/Earnsearch";
import Earnproducts from "../components/Dashboard/Earn/Earnproducts";
import Earncalc from "../components/Dashboard/Earn/Earncalc";

const Earn1 = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <Earnheader1 />
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

export default Earn1;
