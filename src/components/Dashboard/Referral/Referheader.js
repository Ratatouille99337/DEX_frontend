import React from "react";
import "../../../assets/css/Referral/refheader.scss";
import Button from "../../Buttons/Button";
const Referheader = () => {
  return (
    <div className="refheader">
      <div className="reftotal">
        <div className="reftext">
          <div className="text">
            <p>Refer Friends. Get 100 USDT Trading Fee Credit Each.</p>
          </div>
          <div className="subtext">
            <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-3kwgah"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z" fill="currentColor"></path></svg>
            </div>
            <p>View referral rules</p>
          </div>
        </div>
        <div className="refbut">
          <div className="grebut">
            <p>Lite Referral ID</p>
            <p>CPA_00#Q^#BXWC</p>
          </div>
          <div className="grebut">
            <p>Lite Referral Link</p>
            <p>https://ww...BXWC</p>
          </div>
          <Button
            className="btn default-btn"
            type="link"
            text="Invite Friends"
            link="#"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Referheader;
