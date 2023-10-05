"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/product_new.scss";
import Back_url from "@/app/_components/Back_url";
import Category_select from "@/app/_components/Category_select";
import Tag from "@/app/_components/Tag";
import Description from "@/app/_components/Description";
import { useEffect, useState } from "react";

export default () => {
  // 업로드 이미지 배열
  const [images, setImages] = useState<string[]>([]);

  // 업로드한 이미지를 미리보기로 보여주는 함수
  const onUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    if (!files[0]) return;
    if (images.length + files.length > 12) {
      return alert("최대 12개 사진만 첨부할 수 있습니다.");
    }
    const readAndPreview = (file: any) => {
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        const reader = new FileReader();
        reader.onload = () =>
          setImages((prev) => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      }
    };
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  };

  // 업로드한 이미지를 삭제하는 함수
  const onDelectPhoto = (idx: number) => {
    setImages([
      ...images.slice(0, idx),
      ...images.slice(idx + 1, images.length),
    ]);
  };

  // "main" | "category" | "tag" | "description" | "location" | "search_location" | "etc"
  const [viewMode, setViewMode] = useState("main");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("카테고리");
  const [tag, setTag] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [shipfeeInclude, setShipfeeInclude] = useState(false);

  // input에 천원 단위(,) 넣는 함수
  const addComma = (price: string) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  // input에 천원 단위(,) 넣는 함수
  const onChangePoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    let str = value.replaceAll(",", "");
    setPrice(str);
  };

  return (
    <div className="product_new_page">
      <div className="product_new_header">
        <div className="product_new_header_wrapper">
          <Back_url>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="#1E1D29">
                  <path
                    fillRule="evenodd"
                    d="M19 8.996H3.66L9.657 3.75a1 1 0 0 0-1.316-1.506l-8 7c-.008.007-.01.018-.019.025a.975.975 0 0 0-.177.24c-.018.03-.045.054-.059.087a.975.975 0 0 0 0 .802c.014.033.041.057.06.088.05.087.103.17.176.239.008.007.011.018.02.025l8 7a.996.996 0 0 0 1.41-.095 1 1 0 0 0-.095-1.411L3.66 10.996H19a1 1 0 1 0 0-2"
                  ></path>
                </g>
              </svg>
            </button>
          </Back_url>
          <h1>상품등록</h1>
        </div>
      </div>
      <div className="product_new_form">
        <div className="product_img_container">
          <div className="input_div">
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              multiple={true}
              onChange={(e) => onUploadPhoto(e)}
            />
            <strong>{images.length} / 12</strong>
          </div>
          {images.map((el, i) => {
            return (
              <div key={i} className="img_div">
                <img src={el} />
                <button type="button" onClick={() => onDelectPhoto(i)}>
                  <img src="/icons/img_delete.svg" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="form_wrapper">
          <label className="product_name">
            <span className="required">*</span>
            <input
              type="text"
              placeholder="상품명"
              maxLength={40}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <button
            type="button"
            className="product_BTN"
            onClick={() => setViewMode("category")}
          >
            <span className="required">*</span>
            <span className={category === "카테고리" ? "gray" : "black"}>
              {category}
            </span>
            <img src="/icons/right_arrow.svg" />
          </button>
          <Category_select
            viewMode={viewMode}
            setViewMode={setViewMode}
            setCategory={setCategory}
          />
          <button
            type="button"
            className="product_BTN"
            onClick={() => setViewMode("tag")}
          >
            <span className={tag.length === 0 ? "gray" : "black"}>
              {tag.length === 0
                ? "#연관태그입력"
                : tag.map((el, i) => {
                    return <span style={{ marginRight: "6px" }}>#{el}</span>;
                  })}
            </span>
            <img src="/icons/right_arrow.svg" />
          </button>
          <Tag
            viewMode={viewMode}
            setViewMode={setViewMode}
            tag={tag}
            setTag={setTag}
          />
          <button
            type="button"
            className="product_BTN"
            onClick={() => setViewMode("description")}
          >
            <span className="required">*</span>
            <span className={description.length === 0 ? "gray" : "black"}>
              {description.length === 0 ? (
                "상품설명"
              ) : (
                <span style={{ marginRight: "6px" }}>{description}</span>
              )}
            </span>
            <img src="/icons/right_arrow.svg" />
          </button>
          <Description
            viewMode={viewMode}
            setViewMode={setViewMode}
            setDescription={setDescription}
          />
          <label className="product_price">
            <span className="required">*</span>
            <img src="/icons/money_won.svg" />
            <input
              type="text"
              placeholder="0"
              maxLength={40}
              onChange={(e) => onChangePoints(e)}
              value={addComma(price)}
              onKeyDown={(e) => {
                if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
                  e.preventDefault();
                }
              }}
            />
            <div className="shipfee_wrapper">
              <label htmlFor="includeShippingCost">
                <input
                  id="includeShippingCost"
                  name="includeShippingCost"
                  type="checkbox"
                  checked={shipfeeInclude}
                  onChange={() => setShipfeeInclude(!shipfeeInclude)}
                />
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5790A3A2-74E4-43BA-9A35-E8E0C300CCC1</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-51.000000, -634.000000)"
                      fill={shipfeeInclude ? "#FF5058" : "#9B99A9"}
                    >
                      <g
                        id="Group-10"
                        transform="translate(0.000000, 383.000000)"
                      >
                        <g transform="translate(0.000000, 159.000000)">
                          <g
                            id="Group-9"
                            transform="translate(51.000000, 92.000000)"
                          >
                            <g
                              id="Icon-(아이콘)/-ic_accept"
                              transform="translate(-0.000000, -0.000000)"
                            >
                              <path
                                d="M6.326,16.674 C6.502,16.85 6.732,16.938 6.963,16.938 C7.193,16.938 7.424,16.85 7.599,16.674 L18.737,5.536 C19.089,5.185 19.089,4.615 18.737,4.264 C18.386,3.912 17.815,3.912 17.464,4.264 L6.963,14.765 L2.537,10.339 C2.185,9.987 1.615,9.987 1.264,10.339 C0.912,10.69 0.912,11.26 1.264,11.612 L6.326,16.674 Z"
                                id="Fill-1"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                배송비포함
              </label>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
