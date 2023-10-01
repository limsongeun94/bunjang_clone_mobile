"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type propstype = {
  bannerArr: string[];
};

function Carousel(props: propstype) {
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
      {props.bannerArr.map((el, i) => {
        return (
          <div key={i}>
            <img width="100%" src={el} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
