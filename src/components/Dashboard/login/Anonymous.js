import React from "react";
import "../../../assets/css/Loged/Dashboard/anonymous.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";

const Anonymous = () => {
  return (

      <div className="dash">
        <div className="left">
          <div className="leftimg">
            <img src={avatar} />
          </div>
          <div className="leftpart">
            <p>Anonymous-User-23423</p>
            <div className="icon">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faClock} />
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faTwitter} />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="each">
            <p>User Id</p>
            <p>876957576</p>
          </div>
          <div className="each">
            <p>VIP Level</p>
            <p>Regular User</p>
          </div>
          <div className="each">
            <p>User Type</p>
            <p>Personal</p>
          </div>
          <div className="each">
            <p>Following</p>
            <p>0</p>
          </div>
          <div className="each">
            <p>Following</p>
            <p>0</p>
          </div>
        </div>
      </div>
   
  );
};

export default Anonymous;
