"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/_styles/global.scss";
import { useEffect, useState } from "react";

type propstype = {
  imageUrl: string;
  imageCount: number;
};

function Carousel(props: propstype) {
  // 부모 컴포넌트로부터 img_url과 이미지 갯수를 받아와
  // img_url의 배열을 만드는 함수
  const [img_arr, setImg_arr] = useState<string[]>([]);
  const madeImgArr = () => {
    let arr = [];
    for (let i = 1; i <= props.imageCount; i++) {
      arr.push(
        props.imageUrl.replace("{cnt}", i.toString()).replace("{res}", "750")
      );
    }
    setImg_arr([...arr]);
  };
  useEffect(() => {
    madeImgArr();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
      {img_arr.map((el, i) => {
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
