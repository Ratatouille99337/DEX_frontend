import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header1 from "./Header1";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Getrewards from "../components/Dashboard/Reward/Getrewards";
import Rewardheader from "../components/Dashboard/Reward/Rewardheader";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import Earnsearch from "../components/Dashboard/Earn/Earnsearch";
import Earnproducts from "../components/Dashboard/Earn/Earnproducts";
import Earncalc from "../components/Dashboard/Earn/Earncalc";

const Rewards = () => {
  return (
    <div>
      <Header1 />
      <div className="dashboard">
        <Rewardheader />
        <Getrewards />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Rewards;
