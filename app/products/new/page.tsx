"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/product_new.scss";
import Back_url from "@/app/_components/Back_url";
import Category_select from "@/app/_components/Category_select";
import Tag from "@/app/_components/Tag";
import Description from "@/app/_components/Description";
import ETC from "@/app/_components/ETC";
import Location from "@/app/_components/Location";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]); // 업로드 이미지 배열
  const [name, setName] = useState("");
  const [category, setCategory] = useState("카테고리");
  const [tag, setTag] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [shipfeeInclude, setShipfeeInclude] = useState(false);
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [used, setUsed] = useState(true);
  const [exchangeable, setExchangeable] = useState(false);
  const [safepay, setSafepay] = useState(true);

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

  // input에 천원 단위(,) 넣는 함수
  const addComma = (price: string) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  // input에 천원 단위(,) 넣는 함수 (input에 ,를 입력했으면 모두 지워주는 함수)
  const onChangePoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    let str = value.replaceAll(",", "");
    setPrice(str);
  };

  const onSubmit = () => {
    const condition =
      images.length > 0 &&
      name !== "" &&
      category !== "카테고리" &&
      description !== "";
    if (condition) {
      console.log(images);
      console.log(name);
      console.log(category);
      console.log(tag);
      console.log(description);
      console.log(price);
      console.log(shipfeeInclude);
      console.log(location);
      console.log(quantity);
      console.log(used);
      console.log(exchangeable);
      console.log(safepay);
      router.push("/");
    }
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
          <button
            type="button"
            className="product_BTN"
            onClick={() => setViewMode("location")}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/icons/upload_location.svg"
                style={{ marginRight: "3px" }}
              />
              <span>{location === "" ? "지역설정안함" : location}</span>
            </span>
            <img src="/icons/right_arrow.svg" />
          </button>
          <Location
            viewMode={viewMode}
            setViewMode={setViewMode}
            location={location}
            setLocation={setLocation}
          />
          <button
            type="button"
            className="product_BTN etc_BTN"
            onClick={() => setViewMode("etc")}
          >
            <div className="text_wrapper">
              <span>수량</span>
              <span>중고상품</span>
              <span>교환불가</span>
            </div>
            <img src="/icons/right_arrow.svg" />
          </button>
          <ETC
            viewMode={viewMode}
            setViewMode={setViewMode}
            quantity={quantity}
            setQuantity={setQuantity}
            used={used}
            setUsed={setUsed}
            exchangeable={exchangeable}
            setExchangeable={setExchangeable}
          />
        </div>
      </div>
      <div style={{ height: "50px" }} />
      <div className="submit_wrapper">
        <button
          onClick={() => setSafepay(!safepay)}
          className="bunpay_btn"
          style={safepay ? {} : { border: "1px solid rgb(229, 229, 229)" }}
        >
          <div
            style={
              safepay ? { color: "black" } : { color: "rgb(178, 178, 178)" }
            }
          >
            안전결제 환영
            <svg
              width="35"
              height="16"
              viewBox="0 0 35 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <rect width="35" height="16" rx="2" fill="#D80C18"></rect>
              <path
                d="M19.7109 12.1373V3.75684H18.4194V6.87588H17.6401V8.13846H18.4194V12.1373H19.7109Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6001 11.5171V10.3293L14.2271 10.3051L14.2116 5.10747H13.6774V3.91968H18.0197V5.10747H17.4877L17.47 10.182L18.0881 10.1578V11.3258L13.6001 11.5171ZM16.2051 5.10767H15.4942L15.5097 10.257L16.1874 10.2306L16.2051 5.10767Z"
                fill="white"
              ></path>
              <rect
                x="20.2251"
                y="3.70874"
                width="1.31131"
                height="8.58947"
                fill="white"
              ></rect>
              <rect
                x="28.6648"
                y="3.70874"
                width="1.34883"
                height="8.58947"
                fill="white"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3908 11.0662C22.9464 10.6644 22.7021 10.0522 22.6579 9.2295C22.6549 9.15543 22.6521 9.082 22.6493 9.00935C22.6418 8.81451 22.6345 8.62529 22.6248 8.44424C22.6116 8.19569 22.6116 7.94713 22.6116 7.70298C22.6116 7.45882 22.6138 7.21026 22.6248 6.96171C22.6359 6.71315 22.6469 6.4514 22.6579 6.17865C22.7021 5.35599 22.9493 4.7423 23.3908 4.34197C23.8713 3.92536 24.4941 3.70878 25.1304 3.73708C25.461 3.73375 25.7898 3.78427 26.104 3.88665C26.3897 3.98072 26.6512 4.13615 26.87 4.34197C27.0938 4.55761 27.2685 4.81866 27.3822 5.10744C27.5164 5.44938 27.5911 5.81166 27.6029 6.17865C27.6049 6.21884 27.6069 6.25888 27.6089 6.29876C27.6204 6.5295 27.6316 6.7545 27.6316 6.96831V7.71397C27.6316 7.79504 27.6323 7.87658 27.6331 7.95845C27.6346 8.12318 27.636 8.28921 27.6316 8.45524C27.625 8.7038 27.6162 8.96115 27.6029 9.2295C27.592 9.59802 27.5173 9.9619 27.3822 10.3051C27.267 10.5918 27.0925 10.8511 26.87 11.0662C26.6512 11.272 26.3897 11.4274 26.104 11.5215C25.7897 11.6231 25.4608 11.6729 25.1304 11.6689C24.4944 11.6978 23.8716 11.482 23.3908 11.0662ZM24.1215 5.76507C24.0582 6.01655 24.0205 6.27373 24.0089 6.53274C23.9824 6.90887 23.9692 7.2982 23.9692 7.70293C23.9692 8.10766 23.9824 8.49919 24.0089 8.87532C24.0205 9.1336 24.0582 9.39006 24.1215 9.64079C24.1639 9.81721 24.2388 9.98427 24.3423 10.1335C24.4287 10.2515 24.5454 10.3441 24.68 10.4019C24.8201 10.4588 24.9703 10.4865 25.1216 10.4832C25.2727 10.486 25.4229 10.4583 25.5631 10.4019C25.6977 10.3441 25.8144 10.2515 25.9008 10.1335C26.0044 9.9843 26.0793 9.81723 26.1216 9.64079C26.1857 9.39016 26.2242 9.13369 26.2364 8.87532C26.2607 8.49919 26.2739 8.11206 26.2739 7.70953C26.2739 7.307 26.2607 6.91327 26.2364 6.53274C26.2242 6.27365 26.1857 6.01645 26.1216 5.76507C26.0792 5.58932 26.0044 5.42297 25.9008 5.27456C25.815 5.15599 25.6982 5.06317 25.5631 5.00621C25.4229 4.94976 25.2727 4.92208 25.1216 4.92482C24.9703 4.92153 24.8201 4.94923 24.68 5.00621C24.5449 5.06317 24.4281 5.15599 24.3423 5.27456C24.2387 5.42297 24.1639 5.58932 24.1215 5.76507Z"
                fill="white"
              ></path>
              <path
                d="M11.5437 7.43587H8.68881L9.15183 3.22974C9.15812 3.17162 9.09143 3.1371 9.05075 3.1773L3.81873 8.38985C3.7793 8.42918 3.80656 8.49822 3.86067 8.49778L6.64423 8.46676L6.24538 12.7712C6.23993 12.8293 6.30661 12.8625 6.34687 12.8223L11.5852 7.54425C11.6242 7.50536 11.5974 7.43675 11.5437 7.43675V7.43587Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            role="img"
            fill={safepay ? "#D80C18" : "#CCC"}
          >
            <g fill="current" fillRule="evenodd">
              <g fill="current">
                <g>
                  <path
                    d="M7.5 16.667c-.221 0-.433-.088-.59-.244l-5-5c-.21-.21-.292-.518-.215-.805.077-.288.302-.512.59-.59.287-.076.594.006.804.216l4.363 4.364 9.415-10.984c.3-.349.825-.39 1.175-.09.349.299.39.824.09 1.174l-10 11.666c-.15.177-.368.283-.6.292H7.5"
                    transform="translate(-308 -798) translate(308 798)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button onClick={onSubmit} className="submit_btn">
          등록
        </button>
      </div>
    </div>
  );
};
