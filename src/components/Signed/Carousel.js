import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/image/slide1.png";
import slide2 from "../../assets/image/slide2.png";
import slide3 from "../../assets/image/slide3.png";
import slide4 from "../../assets/image/slide4.png";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img src={slide1} style={{ width: "100%" }} alt="1" />
        </div>
        <div>
          <img src={slide2} style={{ width: "100%" }} alt="2" />
        </div>
        <div>
          <img src={slide3} style={{ width: "100%" }} alt="3" />
        </div>
        <div>
          <img src={slide4} style={{ width: "100%" }} alt="4" />
        </div>
        {/* ... Add as many slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
