import React from "react";
import SearchInput from "../../Inputs/SearchInput";
import "../../../assets/css/Earn/earnsearch.scss";
import Input from "../../Inputs/Input";

function Earnsearch() {
  return (
    <div className="container">
      <div className="earnsearch">
        <div className="search">
          <SearchInput style={{width:"100%"}} />
        </div>
        <div className="selectdata">
          <select className="selecttype">
            <option>All Durations</option>
            <option>Flexible</option>
            <option>Fixed</option>
          </select>
          <select className="selecttype">
            <option>All Products</option>
            <option>Principal-protected</option>
            <option>High Yield</option>
          </select>
          <div className="checkon">
            <Input
              className="input default-input"
              type="checkbox"
              style={{ width: "100%" }}
            />
            <p>Match My Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earnsearch;
