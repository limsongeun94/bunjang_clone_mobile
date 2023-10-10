"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/category.scss";
import ProductList from "@/app/_components/ProductList";
import Back_url from "@/app/_components/Back_url";
import type { Product } from "@/app/_interface/index";
import axios from "@/app/_libs/axios";
import { useEffect, useState } from "react";
import Link from "next/link";

type InitialData = {
  categoryId: string;
  categoryName: string;
  initial_product: {
    page: number;
    size: number;
    list: Product[];
    total: number;
    pages: number;
  };
};

export default ({ initial_product, categoryId, categoryName }: InitialData) => {
  const [productPage, setProductPage] = useState(2);
  const [productList, setProductList] = useState<Product[]>([]);

  const showMoreProduct = () => {
    axios
      .get("/product", {
        params: { page: productPage, size: 60, category: categoryId },
      })
      .then((res) => {
        setProductList([...productList, ...res.data.list]);
      });
  };

  useEffect(() => {
    showMoreProduct();
  }, [productPage]);

  return (
    <div className="category_page">
      <div className="category_header">
        <div className="category_wrapper">
          <Back_url>
            <button className="backBtn">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="#1E1D29" className="Plx Plx--above ">
                  <path
                    fillRule="evenodd"
                    d="M19 8.996H3.66L9.657 3.75a1 1 0 0 0-1.316-1.506l-8 7c-.008.007-.01.018-.019.025a.975.975 0 0 0-.177.24c-.018.03-.045.054-.059.087a.975.975 0 0 0 0 .802c.014.033.041.057.06.088.05.087.103.17.176.239.008.007.011.018.02.025l8 7a.996.996 0 0 0 1.41-.095 1 1 0 0 0-.095-1.411L3.66 10.996H19a1 1 0 1 0 0-2"
                  ></path>
                </g>
              </svg>
            </button>
          </Back_url>
          <h1>{categoryName}</h1>
          <Link href="/search?tab=recent" className="link searchBtn">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="#333"
                fillRule="evenodd"
                d="M1.937 7.747a5.817 5.817 0 0 1 5.81-5.81 5.817 5.817 0 0 1 5.812 5.81 5.817 5.817 0 0 1-5.811 5.811 5.817 5.817 0 0 1-5.811-5.81M13.86 12.49a7.695 7.695 0 0 0 1.635-4.743C15.496 3.476 12.02 0 7.748 0S0 3.476 0 7.747c0 4.272 3.476 7.748 7.748 7.748a7.703 7.703 0 0 0 4.742-1.635l3.857 3.855a.966.966 0 0 0 1.369 0 .967.967 0 0 0 0-1.37l-3.855-3.855z"
                className="Plx Plx--above "
              ></path>
            </svg>
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
