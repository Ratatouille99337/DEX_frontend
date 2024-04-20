import React from "react";
import "../../../assets/css/Buycryptor/cardarea1.scss";
import Coincard from "../../Currencies/Coincard";
import Buycard from "../../Currencies/Buycard";
import Buycard_re from "../../Currencies/Buycard_re";

import enter from "../../../assets/image/enter.svg";
import confirm from "../../../assets/image/confirm.svg";
import receive from "../../../assets/image/receive.svg";

const Howtobuy = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="carta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            fill="none"
            class="css-hxx8pe"
          >
            <path
              d="M77 46l4 4 4-4-4-4-4 4zM20 8l3 3 3-3-3-3-3 3zM8 37l2 2 2-2-2-2-2 2z"
              fill="#474D57"
            ></path>
            <path
              d="M36 83h24V53L48 65 36 53v30z"
              fill="url(#user-dark_svg__paint0_linear_9461:24876)"
            ></path>
            <path
              d="M47.998 45.001c-9.941 0-18-8.06-18-18 0-9.942 8.059-18 18-18 9.94 0 18 8.06 18 18 0 9.941-8.059 18-18 18z"
              fill="url(#user-dark_svg__paint1_linear_9461:24876)"
            ></path>
            <path
              d="M36 53h-8c-8.837 0-16 7.163-16 16v14h24V53z"
              fill="url(#user-dark_svg__paint2_linear_9461:24876)"
            ></path>
            <path
              d="M60 83h24V69c0-8.837-7.163-16-16-16h-8v30z"
              fill="url(#user-dark_svg__paint3_linear_9461:24876)"
            ></path>
            <defs>
              <linearGradient
                id="user-dark_svg__paint0_linear_9461:24876"
                x1="48"
                y1="83"
                x2="48"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
              <linearGradient
                id="user-dark_svg__paint1_linear_9461:24876"
                x1="47.998"
                y1="45.001"
                x2="47.998"
                y2="9"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
              <linearGradient
                id="user-dark_svg__paint2_linear_9461:24876"
                x1="48"
                y1="53"
                x2="48"
                y2="83"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#929AA5"></stop>
                <stop offset="1" stop-color="#76808F"></stop>
              </linearGradient>
              <linearGradient
                id="user-dark_svg__paint3_linear_9461:24876"
                x1="48"
                y1="53"
                x2="48"
                y2="83"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#929AA5"></stop>
                <stop offset="1" stop-color="#76808F"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p>Tips</p>
        </div>

        <div className="cardarea1">
          <Buycard_re
            cardlogo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-hxx8pe"><path d="M77 46l4 4 4-4-4-4-4 4zM20 8l3 3 3-3-3-3-3 3zM8 37l2 2 2-2-2-2-2 2z" fill="#474D57"></path><path d="M36 83h24V53L48 65 36 53v30z" fill="url(#user-dark_svg__paint0_linear_9461:24876)"></path><path d="M47.998 45.001c-9.941 0-18-8.06-18-18 0-9.942 8.059-18 18-18 9.94 0 18 8.06 18 18 0 9.941-8.059 18-18 18z" fill="url(#user-dark_svg__paint1_linear_9461:24876)"></path><path d="M36 53h-8c-8.837 0-16 7.163-16 16v14h24V53z" fill="url(#user-dark_svg__paint2_linear_9461:24876)"></path><path d="M60 83h24V69c0-8.837-7.163-16-16-16h-8v30z" fill="url(#user-dark_svg__paint3_linear_9461:24876)"></path><defs><linearGradient id="user-dark_svg__paint0_linear_9461:24876" x1="48" y1="83" x2="48" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="user-dark_svg__paint1_linear_9461:24876" x1="47.998" y1="45.001" x2="47.998" y2="9" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="user-dark_svg__paint2_linear_9461:24876" x1="48" y1="53" x2="48" y2="83" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="user-dark_svg__paint3_linear_9461:24876" x1="48" y1="53" x2="48" y2="83" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>}
            cardtitle="Step 1"
            cardcontent="Share your referral link with friends so we deposit more than %20"
          />
          <Buycard_re
            cardlogo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-hxx8pe"><path fill="#474D57" d="M12 84h72V42H12z"></path><path d="M26 30h44L48 8 26 30z" fill="url(#withdraw-dark_svg__paint0_linear)"></path><circle r="22" transform="matrix(1 0 0 -1 48 57)" fill="#F8D33A"></circle><circle r="15.053" transform="matrix(1 0 0 -1 48 57)" fill="url(#withdraw-dark_svg__paint1_linear)"></circle><path d="M39.895 57L48 65.105 56.105 57 48 48.895 39.895 57z" fill="#F0B90B"></path><path d="M74 20l2-2 2 2-2 2-2-2z" fill="#474D57"></path><path d="M17 47.5l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5zM71 75.5l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5z" fill="#fff"></path><defs><linearGradient id="withdraw-dark_svg__paint0_linear" x1="48" y1="30" x2="48" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="withdraw-dark_svg__paint1_linear" x1="15.053" y1="0" x2="15.053" y2="30.105" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>}
            cardtitle="Step 2"
            cardcontent="Invite friends to sign up and accumulatively deposit more than $50"
          />
          <Buycard_re
            cardlogo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-hxx8pe"><path transform="matrix(1 0 0 -1 8 41)" fill="url(#gift_svg__paint0_linear_26712_55123)" d="M0 0h34v18H0z"></path><path transform="rotate(-180 88 41)" fill="url(#gift_svg__paint1_linear_26712_55123)" d="M88 41h34v18H88z"></path><path transform="matrix(1 0 0 -1 12 84)" fill="url(#gift_svg__paint2_linear_26712_55123)" d="M0 0h30v43H0z"></path><path transform="rotate(-180 84 84)" fill="url(#gift_svg__paint3_linear_26712_55123)" d="M84 84h30v43H84z"></path><path fill="url(#gift_svg__paint4_linear_26712_55123)" d="M46 23h4v18h-4z"></path><path fill="url(#gift_svg__paint5_linear_26712_55123)" d="M46 41h4v43h-4z"></path><path d="M50 8h-4v8.172l-5.586-5.586-2.828 2.828L43.172 19H35v4h26v-4h-8.172l5.586-5.586-2.828-2.828L50 16.172V8z" fill="url(#gift_svg__paint6_linear_26712_55123)"></path><path opacity="0.3" d="M72 12l4 4 4-4-4-4-4 4zM2 51l3 3 3-3-3-3-3 3zM62 91h3v-3h-3v3z" fill="#AEB4BC"></path><defs><linearGradient id="gift_svg__paint0_linear_26712_55123" x1="17" y1="0" x2="17" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="gift_svg__paint1_linear_26712_55123" x1="105" y1="41" x2="105" y2="59" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="gift_svg__paint2_linear_26712_55123" x1="15" y1="0" x2="15" y2="43" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="gift_svg__paint3_linear_26712_55123" x1="99" y1="84" x2="99" y2="127" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="gift_svg__paint4_linear_26712_55123" x1="48" y1="23" x2="48" y2="41" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="gift_svg__paint5_linear_26712_55123" x1="48" y1="41" x2="48" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="gift_svg__paint6_linear_26712_55123" x1="48" y1="23" x2="48" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>}
            cardtitle="Step 3"
            cardcontent="Receive 100 USDT trading fee rebate voucher completely with account"
          />
        </div>
        <div className="cardarea1">
          <Buycard_re
            cardlogo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1lmdvh0"><path d="M8 4H2v16h10V8a4 4 0 00-4-4z" fill="url(#educate-g_svg__paint0_linear)"></path><path d="M8 16H2v4h10a4 4 0 00-4-4z" fill="#76808F"></path><path d="M16 4h6v16H12V8a4 4 0 014-4z" fill="url(#educate-g_svg__paint1_linear)"></path><path d="M16 16h6v4H12a4 4 0 014-4z" fill="#76808F"></path><defs><linearGradient id="educate-g_svg__paint0_linear" x1="7" y1="20" x2="7" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="educate-g_svg__paint1_linear" x1="17" y1="20" x2="17" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>}
            cardtitle="Share your Lite Referral ID / link with a friend who does not have a Binance account."
            cardcontent="Regular Task:
Referees must accumulatively deposit more than $50 within 14 days of registration. Both referrer and referee will be rewarded with a 100 USDT trading fee rebate voucher each.

Disclaimer: You can only claim one reward per referral. For example, you will not be eligible for Standard Referral rewards if friends sign up using your [Lite Referral Mode] ID / link."
          />
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
