import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Markets from "./pages/Markets";
import Markets1 from "./pages/Markets1";
import Buycryptor from "./pages/Buycryptor";
import Buycryptor1 from "./pages/Buycryptor1";
import Recurring from "./pages/Recurring";
import Recurring1 from "./pages/Recurring1";
import Deposit from "./pages/Deposit";
import Deposit1 from "./pages/Deposit1";
import Withdraw1 from "./pages/Withdraw1";
import Withdraw from "./pages/Withdraw";
import TradeSpot from "./pages/TradeSpot";
import TradeSpot1 from "./pages/TradeSpot1";
import Accounts from "./pages/Accounts";
import Earn from "./pages/Earn";
import Earn1 from "./pages/Earn1";
import P2p from "./pages/P2p";
import LoginedDashboard from "./pages/LoginedDashboard";
import Assets from "./pages/Assets";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Rewards from "./pages/Rewards";
import Settings from "./pages/Settings";
import Referral from "./pages/Referral";
import Convert from "./pages/Convert";
import Convert1 from "./pages/Convert1";
import Bots from "./pages/Bots";
import Bots1 from "./pages/Bots1";
import Apibal from "./pages/Apibal";
import Apibal1 from "./pages/Apibal1";

const App = () => {
  useEffect(() => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (localStorage.themeMode === "dark") {
      node.setAttribute("href", "/assets/css/dark.css");
    } else {
      node.setAttribute("href", "/assets/css/light.css");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("dextool-header").append(node);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/*" exact element={<NotFound />} />
          <Route path="/markets" exact element={<Markets />} />
          <Route path="/markets1" exact element={<Markets1 />} />
          <Route path="/buycryptor" exact element={<Buycryptor />} />
          <Route path="/buycryptor1" exact element={<Buycryptor1 />} />
          <Route path="/recurring" exact element={<Recurring />} />
          <Route path="/recurring1" exact element={<Recurring1 />} />
          <Route path="/deposit" exact element={<Deposit />} />
          <Route path="/deposit1" exact element={<Deposit1 />} />
          <Route path="/withdraw1" exact element={<Withdraw1 />} />
          <Route path="/withdraw" exact element={<Withdraw />} />
          <Route path="/trade" exact element={<TradeSpot />} />
          <Route path="/trade1" exact element={<TradeSpot1 />} />
          <Route path="/accounts" exact element={<Accounts />} />
          <Route path="/earn" exact element={<Earn />} />
          <Route path="/earn1" exact element={<Earn1 />} />
          <Route path= "/p2p" exact element={<P2p />} />
          <Route path= "/loginedDashboard" exact element={<LoginedDashboard />} />
          <Route path= "/assets" exact element={<Assets />} />
          <Route path= "/orders" exact element={<Orders />} />
          <Route path= "/account" exact element={<Account />} />
          <Route path= "/referral" exact element={<Referral />} /> 
          <Route path= "/rewards" exact element={<Rewards />} />
          <Route path= "/settings" exact element={<Settings />} />
          <Route path= "/convert" exact element={<Convert />} />
          <Route path= "/convert1" exact element={<Convert1 />} />
          <Route path= "/Bots" exact element={<Bots />} />
          <Route path= "/Bots1" exact element={<Bots1 />} />
          <Route path= "/api" exact element={<Apibal />} />
          <Route path= "/api1" exact element={<Apibal1 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
