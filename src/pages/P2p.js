import React from "react";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Earnheader from "../components/Dashboard/Earn/Earnheader";
import Carousel from "../components/Signed/Carousel";
import Faq from "../components/Dashboard/Faq";
import P2pheader from "../components/Dashboard/P2p/P2pheader";
import P2pbuy from "../components/Dashboard/P2p/P2pbuy";
import P2psearch from "../components/Dashboard/P2p/P2psearch";
const P2p = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <P2pheader />
        <P2pbuy />
        <P2psearch/>
        <Faq />
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default P2p;
