"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/productlist.scss";
import { useState, useEffect } from "react";
import type { Product } from "@/app/_interface/index";
import Link from "next/link";

type PropsType = {
  initial_product: {
    page: number;
    size: number;
    list: Product[];
    total: number;
    pages: number;
  };
  more_productList: Product[];
  productPage: number;
  setProductPage: React.Dispatch<React.SetStateAction<number>>;
};

export default ({
  initial_product,
  more_productList,
  productPage,
  setProductPage,
}: PropsType) => {
  const [colType, setColType] = useState("three"); // "three" | "one" | "two"

  const changeViewType = () => {
    if (colType === "three") {
      setColType("one");
    } else if (colType === "one") {
      setColType("two");
    } else if (colType === "two") {
      setColType("three");
    }
  };

  return (
    <section className="product_list">
      <div className="filter">
        <div className="product_count">
          <strong>
            {initial_product.total
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </strong>
          <span>개</span>
        </div>
        <button className="view_filter" onClick={changeViewType}>
          {colType === "three" ? (
            <img src="/icons/oneCol_btn.svg" width="15px" height="15px" />
          ) : colType === "one" ? (
            <img src="/icons/twoCol_btn.svg" width="15px" height="15px" />
          ) : (
            <img src="/icons/threeCol_btn.svg" width="15px" height="15px" />
          )}
        </button>
      </div>
      {colType === "three" ? (
        <div className="threeCol_page">
          {initial_product.list.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>원</span>
                  </div>
                  <div className="product_title">{product.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : colType === "one" ? (
        <div className="oneCol_page">
          {initial_product.list.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="product_title">{product.name}</div>
                  <div className="product_zzimloca">
                    <div className="product_zzim">
                      <img
                        src="/icons/product_img_heart.svg"
                        width="12px"
                        height="12px"
                      />
                      <span>{product.num_faved}</span>
                    </div>
                    <div className="product_location">
                      <img
                        src="/icons/location.svg"
                        width="11px"
                        height="12px"
                      />
                      <span>
                        {product.location ? product.location : "위치없음"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="twoCol_page">
          {initial_product.list.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>원</span>
                  </div>
                  <div className="product_title">{product.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {colType === "three" ? (
        <div className="threeCol_page">
          {more_productList.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>원</span>
                  </div>
                  <div className="product_title">{product.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : colType === "one" ? (
        <div className="oneCol_page">
          {more_productList.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="product_title">{product.name}</div>
                  <div className="product_zzimloca">
                    <div className="product_zzim">
                      <img
                        src="/icons/product_img_heart.svg"
                        width="12px"
                        height="12px"
                      />
                      <span>{product.num_faved}</span>
                    </div>
                    <div className="product_location">
                      <img
                        src="/icons/location.svg"
                        width="11px"
                        height="12px"
                      />
                      <span>
                        {product.location ? product.location : "위치없음"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="twoCol_page">
          {more_productList.map((product) => {
            return (
              <Link
                href={`/products/${product.pid}`}
                key={product.pid}
                className="link product_wrapper"
              >
                <div className="product_img_wrapper">
                  <img src={product.product_image.replace("{res}", "354")} />
                </div>
                <div className="product_text_wrapper">
                  <div className="product_price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>원</span>
                  </div>
                  <div className="product_title">{product.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <button
        onClick={() => setProductPage(productPage + 1)}
        className="more_view"
      >
        <img src="/icons/more_view.svg" width="15px" height="15px" />
        상품 더보기
      </button>
    </section>
  );
};
