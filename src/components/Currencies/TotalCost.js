import React from "react";

// load assets
import "../../assets/css/Recurring/totalcost.scss";

const TotalCost = ({ img, currencyName, dollar, percent, total, className }) => {
  return (
    <div className="totalCost">
      <div className="totalCostName">
        <div className="totalCostGroup">
          <div className="totalCostimg">
            <img src={img} />
          </div>
          <div className="currencyName">{currencyName}</div>
        </div>
        <div className="dollar">
          <p>{dollar}</p>
        </div>
      </div>

      <div className="totalCostName1">
        <p>Amount</p>

        <div className="value">
          {percent.indexOf("-") >= 0 ? (
            <p style={{ color: "#F6465D" }}>{percent}</p>
          ) : (
            <p>{percent}</p>
          )}
        </div>
      </div>
      <div className="totalCostName1">
        <p>Total Cost</p>

        <div className="value">
         {total}
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
