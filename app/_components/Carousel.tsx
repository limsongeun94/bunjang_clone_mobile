"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img width="100%" src="./banners/bag banner - phone.jpg" />
      </div>
      <div>
        <img width="100%" src="./banners/nuigurumi banner - phone.jpg" />
      </div>
      <div>
        <img width="100%" src="./banners/keyring banner - phone.jpg" />
      </div>
    </Slider>
  );
}

export default Carousel;
