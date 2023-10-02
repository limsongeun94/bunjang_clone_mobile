"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/productlist.scss";
import { useState, useEffect } from "react";
import type { Product } from "@/app/_interface/index";

type PropsType = {
  product: {
    page: number;
    size: number;
    list: Product[];
    total: number;
    pages: number;
  };
};

export default ({ product }: PropsType) => {
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
            {product.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
          {product.list.map((product) => {
            return (
              <div key={product.pid} className="product_wrapper">
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
              </div>
            );
          })}
        </div>
      ) : colType === "one" ? (
        <div className="oneCol_page">
          {product.list.map((product) => {
            return (
              <div key={product.pid} className="product_wrapper">
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
              </div>
            );
          })}
        </div>
      ) : (
        <div className="twoCol_page">
          {product.list.map((product) => {
            return (
              <div key={product.pid} className="product_wrapper">
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
              </div>
            );
          })}
        </div>
      )}
      <button className="more_view">
        <img src="/icons/more_view.svg" width="15px" height="15px" />
        상품 더보기
      </button>
    </section>
  );
};
