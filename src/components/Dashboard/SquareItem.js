import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/squarecard.scss";
const SquareItem = ({ squareItem, key }) => {
  return (
    <div className="squareitem" key={key}>
      <div className="left">
        <div className="img">
          <img src={squareItem.img}/>
        </div>
        <div className="right">
          <p style={{fontSize:"18px"}}>{squareItem.title}</p>
          <p>{squareItem.content}</p>
        </div>
      </div>
      <div className="button">
      <p>follow</p>
      </div>
    </div>
  );
};

export default SquareItem;
