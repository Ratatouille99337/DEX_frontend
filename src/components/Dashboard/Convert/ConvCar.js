import React, { useState, useEffect } from "react";
import "../../../assets/css/Convert/ConvCar.scss";
import Marquee from "./CarouselCon";

const ConvCar = () => {
  return (
    <Marquee duration={10}>
      <span>Your repeating text or images go here.</span>
    </Marquee>
  );
};

export default ConvCar;
