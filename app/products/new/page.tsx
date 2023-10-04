"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/product_new.scss";
import Back_url from "@/app/_components/Back_url";
import Category_select from "@/app/_components/Category_select";
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
      <form className="product_new_form">
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
                <button type="button" onTouchEnd={() => onDelectPhoto(i)}>
                  <img src="/icons/img_delete.svg" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="form_wrapper">
          <label className="product_name">
            <span className="required">*</span>
            <input type="text" placeholder="상품명" maxLength={40} value="" />
          </label>
          <button type="button" className="product_category">
            <span className="required">*</span>
            <span>카테고리</span>
            <img src="/icons/right_arrow.svg" />
          </button>
          <Category_select />
        </div>
      </form>
    </div>
  );
};
