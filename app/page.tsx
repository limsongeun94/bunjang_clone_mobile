"use client";

import { useState, useEffect } from "react";
import "./styles/global.scss";
import "./styles/index.scss";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import GNB from "./component/GNB";

export default function Home() {
  const [pageState, setPageState] = useState("");
  useEffect(() => {
    setPageState("home");
  }, []);

  return (
    <div className="index_page">
      <div className="search">
        <input type="text" placeholder="찾고 싶은 상품을 검색해보세요" />
        <button>
          <img src="./icons/search.svg" />
        </button>
        <button>
          <img src="./icons/zzim.svg" />
        </button>
      </div>
      <Carousel />
      <Footer />
      <GNB pageState={pageState} />
    </div>
  );
}
