"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import ProductList from "@/app/_components/ProductList";
import Back_url from "@/app/_components/Back_url";
import Link from "next/link";
import type { Product } from "@/app/_interface/index";
import axios from "axios";
import { useEffect, useState } from "react";

type InitialData = {
  searchId: string | string[] | undefined;
  initial_product: {
    page: number;
    size: number;
    list: Product[];
    total: number;
    pages: number;
  };
};

export default ({ initial_product, searchId }: InitialData) => {
  const [productPage, setProductPage] = useState(2);
  const [productList, setProductList] = useState<Product[]>([]);

  const showMoreProduct = () => {
    axios
      .get("/api/search", {
        params: { page: productPage, size: 60, keyword: searchId },
      })
      .then((res) => {
        setProductList([...productList, ...res.data.list]);
      });
  };

  useEffect(() => {
    showMoreProduct();
  }, [productPage]);

  return (
    <div className="search_page">
      <div className="search_pad_wrap">
        <div className="search_pad">
          <Back_url>
            <button>
              <img src="/icons/back.svg" />
            </button>
          </Back_url>
          <div className="search_input">
            <Link href="/search?tab=recent" className="link">
              <input
                placeholder="검색어를 입력해주세요"
                maxLength={40}
                defaultValue={searchId}
              />
            </Link>
          </div>
          <Link href="/search?tab=recent" className="link">
            <img src="/icons/search_red.svg" width="15px" height="15px" />
          </Link>
        </div>
      </div>
      <div style={{ height: "50px" }} />
      <ProductList
        initial_product={initial_product}
        more_productList={productList}
        productPage={productPage}
        setProductPage={setProductPage}
      />
    </div>
  );
};
