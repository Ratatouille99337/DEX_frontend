import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Getrewards from "../components/Dashboard/Reward/Getrewards";
import Rewardheader from "../components/Dashboard/Reward/Rewardheader";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import Earnsearch from "../components/Dashboard/Earn/Earnsearch";
import Earnproducts from "../components/Dashboard/Earn/Earnproducts";
import Earncalc from "../components/Dashboard/Earn/Earncalc";
import Apibalheader from "../components/Dashboard/Apibal/Apibalheader";
import Apiconnect from "../components/Dashboard/Apibal/Apiconnect";
import ApiVip from "../components/Dashboard/Apibal/ApiVip";
import Made from "../components/Dashboard/Apibal/Made";
import Apilink from "../components/Dashboard/Apibal/Apilink";


const Apibal = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Apibalheader />
        <Apiconnect />
        <ApiVip />
        <Apilink />
        <Made/>
        <Faq/>
        <Detail/>
      </div>
      <Footer />
    </div>
  );
};

export default Apibal;
