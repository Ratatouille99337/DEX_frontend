import React from "react";
import "../../../assets/css/Loged/Dashboard/Recent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import avatar from "../../../assets/image/default-avatar.png";
import Fav1 from "../Fav1";
const Recent = () => {
  return (
      <div className="recent">
        <div className="header">
          <p style={{fontSize:"20px"}}>Recent Transacitons</p>
          <p>More &#129170;</p>
        </div>
        <div className="img">
        <svg class="bn-svg text-[72px]" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M84 28H64V8l20 20z" fill="#AEB4BC"></path><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M24 8h40v20h20v60H24V8zm10 30h40v4H34v-4zm40 8H34v4h40v-4zm-40 8h40v4H34v-4z" fill="#AEB4BC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.137 64.105c7.828 5.781 18.916 5.127 26.005-1.963 7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.284 0-7.09 7.09-7.744 18.177-1.964 26.005l-14.3 14.3 4.243 4.243 14.3-14.3zM43.9 57.9c-5.467 5.468-14.331 5.468-19.799 0-5.467-5.467-5.467-14.331 0-19.799 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8z" fill="#AEB4BC"></path></svg>
        </div>
        <p style={{color:"#8892a1", marginBottom:"30px"}}>No records</p>
      </div>

  );
};

export default Recent;
