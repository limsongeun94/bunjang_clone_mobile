import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

export default function IndexPage() {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="./banners/bag banner - phone.jpg" />
        </div>
        <div>
          <img src="./banners/nuigurumi banner - phone.jpg" />
        </div>
        <div>
          <img src="./banners/keyring banner - phone.jpg" />
        </div>
      </Slider>
    </div>
  );
}
