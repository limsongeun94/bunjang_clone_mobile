"use client";

import "./styles/index.scss";
import { withIronSessionSsr } from "iron-session/next";
import { ironSessionOptions } from "@/app/libs/session";
import axios from "@/app/libs/axios";
import type { Banner, Category, Product, User } from "@/app/interface";
import { useEffect, useState } from "react";
import Carousel from "./component/carousel";

interface IndexProps {
  data: {
    banners: Array<Banner>;
    products: Array<Product>;
    categories: Array<Category>;
  };
  user: User;
}

export default function Home() {
  return (
    <div className="index_page">
      <div className="search">
        <input placeholder="찾고 싶은 상품을 검색해보세요" />
        <button>
          <img src="./icons/search.svg" />
        </button>
        <button>
          <img src="./icons/zzim.svg" />
        </button>
      </div>
      <Carousel />
    </div>
  );
}
