import React from "react";
import FaqItem from "./FaqItem";

// load assets
import "../../assets/css/faq.scss";

const faqData = [
  {
    id: 1,
    question: "What is a cryptocurrency exchange?",
    answer: `<a class="answer-link" href="https://www.binance.com/en/price">Cryptocurrency</a> exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like <a class="answer-link" href="https://www.binance.com/en/price/bitcoin">Bitcoin</a>, <a class="answer-link" href="https://www.binance.com/en/price/ethereum">Ethereum</a>, and <a class="answer-link" href="https://www.binance.com/en/price/tether">Tether</a>. The Binance exchange is the largest crypto exchange by trade volume.`,
  },
  {
    id: 2,
    question: "What products does Binance provide?",
    answer: `Binance is the world's leading cryptocurrency exchange, catering to 169 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.<br><br>With Binance users can:<br> <li class="list-item-content">Trade hundreds of cryptocurrencies on <a class="answer-link" href="https://www.binance.com/en/trade/BTC_USDT?theme=light&amp;type=spot">Spot</a>, <a class="answer-link" href="https://www.binance.com/en/trade/BTC_USDT?theme=light&amp;type=spot">Margin</a>, and <a class="answer-link" href="https://www.binance.com/en/futures/markets/um">Futures</a> markets.</li>
    <li class="list-item-content">Buy and sell cryptocurrencies with <a class="answer-link" href="https://p2p.binance.com/en/trade/all-payments/USDT?fiat=EUR">Binance P2P</a>.</li><li class="list-item-content">Earn interest on your crypto with <a class="answer-link" href="https://www.binance.com/en/earn">Binance Earn</a>.</li><li class="list-item-content">Buy or earn new tokens on <a class="answer-link" href="https://launchpad.binance.com/en">Binance Launchpad</a>.</li><li class="list-item-content">Trade, stake, and loan NFTs on <a class="answer-link" href="https://www.binance.com/en/nft/home">Binance NFT</a> marketplace.</li>`,
  },
  {
    id: 3,
    question: "How to buy Bitcoin and other cryptocurrencies on Binance",
    answer: `There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to <a class="answer-link" href="https://www.binance.com/en/support/faq/how-to-buy-cryptocurrency-on-binance-homepage-400c38f5e0cd4b46a1d0805c296b5582">purchase crypto</a> on Binance. Before getting started, please make sure you’ve completed <a class="answer-link" href="https://www.binance.com/en/support/faq/how-to-complete-identity-verification-360027287111">Identity Verification</a> for your Binance account.`,
  }
  
];

const FaqGuide = () => {
  return (
    <div className="container">
      <div className="faq-section">
        <h2 className="title">Frequently Asked Questions</h2>
        {faqData.map((item, key) => {
          return <FaqItem key={key} faqItem={item} />;
        })}
      </div>
    </div>
  );
};

export default FaqGuide;
