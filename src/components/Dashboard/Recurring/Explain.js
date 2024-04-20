import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../assets/css/Recurring/explain.scss";

const Explain = () => {
  return (
    <div className="container">
      <div className="explain">
        <div className="eachExplain">
          <div className="expTitle">Missing Out on Large Gains</div>
          <div className="expcon">
            DCA does not include lump sum investments during market dips, thus
            you may miss out on a larger profit.
          </div>
        </div>

        <div className="eachExplain">
          <div className="expTitle">Crypto Facts</div>
          <div className="expcon">
            Such large gains require investors to time the market correctly
            which is almost impossible, which is why DCA can help smooth out
            market timings.
          </div>
        </div>

        <div className="eachExplain">
          <div className="expTitle">
            Lack of Detailed Investment Information
          </div>
          <div className="expcon">
            DCA strategy does not help identify good investments. Hence, it’s
            important to DYOR before committing to a DCA approach.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explain;
