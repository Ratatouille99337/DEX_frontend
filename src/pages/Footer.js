import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTelegram,
  faTiktok,
  faReddit,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleDollarToSlot,
  faCoins,
  faGlobe,
  faMoon,
  faMortarPestle,
  faSun,
  faX,
} from "@fortawesome/free-solid-svg-icons";

// load assets
import "../assets/css/footer.scss";

const AboutUsData = [
  {
    name: "About",
  },
  {
    name: "Business Contacts",
  },
  {
    name: "Careers",
  },
  {
    name: "Announcements",
  },
  {
    name: "News",
  },
  {
    name: "Press",
  },
  {
    name: "Legal",
  },
  {
    name: "Terms",
  },
  {
    name: "Privacy",
  },
  {
    name: "Building Trust",
  },
  {
    name: "Blog",
  },
  {
    name: "Community",
  },
  {
    name: "Sitemap",
  },
  {
    name: "Risk Warning",
  },
  {
    name: "Notices",
  },
  {
    name: "Downloads",
  },
  {
    name: "Desktop Application",
  },
];

const productData = [
  {
    name: "Exchange",
  },
  {
    name: "Buy Crypto",
  },
  {
    name: "Leveraged Tokens",
  },
  {
    name: "TradingView",
  },
  {
    name: "Pay",
  },
  {
    name: "Academy",
  },
  {
    name: "Live",
  },
  {
    name: "Tax",
  },
  {
    name: "Gift Card",
  },
  {
    name: "Launchpad & Launchpool",
  },
  {
    name: "Auto-Invest",
  },
  {
    name: "ETH Staking",
  },
  {
    name: "NFT",
  },
  {
    name: "BNB",
  },
  {
    name: "BABT",
  },
  {
    name: "Research",
  },
  {
    name: "Charity",
  },
];

const BusinessData = [
  {
    name: "P2P Merchant Application",
  },
  {
    name: "P2Pro Merchant Application",
  },
  {
    name: "Listing Application",
  },
  {
    name: "Institutional & VIP Services",
  },
  {
    name: "Labs",
  },
];

const LearnData = [
  {
    name: "Learn * Earn",
  },
  {
    name: "Browse Crypto Prices",
  },
  {
    name: "Bitcoin Price",
  },
  {
    name: "Ethereum Price",
  },
  {
    name: "Browse Crypto Price Predictions",
  },
  {
    name: "Bitcoin Price Prediction",
  },
  {
    name: "Ethereum Price Prediction",
  },
  {
    name: "Buy Bitcoin",
  },
  {
    name: "Buy BNB",
  },
  {
    name: "Buy Ripple",
  },
  {
    name: "Buy Dogecoin",
  },
  {
    name: "Buy Ethereum",
  },
  {
    name: "Buy Tradable Altcoins",
  },
];

const ServiceData = [
  {
    name: "Affiliate",
  },
  {
    name: "Referral",
  },
  {
    name: "OTC Trading",
  },
  {
    name: "Historical Market Data",
  },
  {
    name: "Proof of Reserves",
  },
];

const SupportData = [
  {
    name: "24/7 Chat Support",
  },
  {
    name: "Support Center",
  },
  {
    name: "Product Feedback & Suggestions",
  },
  {
    name: "Fees",
  },
  {
    name: "APIs",
  },
  {
    name: "Binance Verify",
  },
  {
    name: "Trading Rules",
  },
  {
    name: "Binance Airdrop Portal",
  },
  {
    name: "Law Enforcement Requests",
  },
];

const Footer = () => {
  const [themeFlag, setThemeFlag] = useState(
    localStorage.themeMode === "dark" ? "dark" : "light"
  );

  const handleChangeTheme = () => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (themeFlag === "dark") {
      node.setAttribute("href", "/assets/css/light.css");
      setThemeFlag("light");
      localStorage.setItem("themeMode", "light");
    } else {
      node.setAttribute("href", "/assets/css/dark.css");
      setThemeFlag("dark");
      localStorage.setItem("themeMode", "dark");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("dextool-header").append(node);
  };

  return (
    
      <div className="container auto" >
        <div className="footer">
          <hr className="footerLine" />
          <div className="preference">
            <div className="year">Binance© 2024</div>
            <div className="cookie"><a href="#">Cookie Preferences</a></div>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
