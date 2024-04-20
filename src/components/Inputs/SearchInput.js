import React from "react";

// load assets
import "../../assets/css/searchinp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
const SearchInput = ({ style = {} }) => {
  return (
    <div className="search-container">
      <button type="submit">
        <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faSearchengin} />
      </button>
      <input type="text" style={style} placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
