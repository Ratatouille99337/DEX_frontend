import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header from "./Header";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Getrewards from "../components/Dashboard/Reward/Getrewards";
import Rewardheader from "../components/Dashboard/Reward/Rewardheader";
import Referheader from "../components/Dashboard/Referral/Referheader";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import Earnsearch from "../components/Dashboard/Earn/Earnsearch";
import Earnproducts from "../components/Dashboard/Earn/Earnproducts";
import Earncalc from "../components/Dashboard/Earn/Earncalc";
import Refertip from "../components/Dashboard/Referral/Refertip";
import Referover from "../components/Dashboard/Referral/Referover";
import Referre from "../components/Dashboard/Referral/Referre";
import Referref from "../components/Dashboard/Referral/Referref";
import Convert from "../components/Dashboard/Convert/Convert";
import ConvCar from "../components/Dashboard/Convert/ConvCar";
const Convert1 = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Convert />
        <ConvCar/>
        <Detail/>
      </div>
      <Footer />
    </div>
  );
};

export default Convert1;
