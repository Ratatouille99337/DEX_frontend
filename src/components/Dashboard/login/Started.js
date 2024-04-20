import React from "react";
import "../../../assets/css/Loged/Dashboard/started.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock ,faSquarePollHorizontal} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";
import gift from "../../../assets/image/gift.gif";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
const Started = () => {
  return (

      <div className="started">
        <p></p>
        <hr className="startdHr" />
        <div className="pending">
          <div className="card1">
            <div className="cardtext">
              <p>
                Verify Your Identity to Get 20 USDT Trading Fee Rebate Voucher
              </p>
              <Button
                className="btn default-btn"
                type="link"
                text="Verify"
                link="/register"
                style={{ width: "50px" }}
              />
            </div>
            <div className="img">
              <img src={gift} />
            </div>
          </div>
          <div className="card23">
          <div className="card2">
            <p>Deposit 10 USDT</p>
            <div className="icontitle">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faSquarePollHorizontal} />
              <p>30 USDT</p>
            </div>
            <div className="icontitle1">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faClock} />
              <p>Pending</p>
            </div>
          </div>
          <div className="card2">
            <p>Trade 10 USDT</p>
            <div className="icontitle">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faSquarePollHorizontal} />
              <p>30 USDT</p>
            </div>
            <div className="icontitle1">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faClock} />
              <p>Pending</p>
            </div>
          </div>
        </div></div>
      </div>

  );
};

export default Started;
