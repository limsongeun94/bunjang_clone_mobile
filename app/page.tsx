// "use client";

import "./_styles/global.scss";
import "./_styles/index.scss";
import Carousel from "./_components/Carousel_index";
import Footer from "./_components/Footer";
import GNB from "./_components/GNB";
import Category from "./_components/Category_nav";
import type { Product } from "@/app/_interface/index";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/landing");
  const data = await res.json();

  // 날짜 형식에 맞게 변환하는 함수
  const showDate = (update_time: number): string => {
    const myDate = new Date(update_time * 1000);
    return (
      myDate.getFullYear() +
      "." +
      (myDate.getMonth() + 1 > 9
        ? (myDate.getMonth() + 1).toString()
        : "0" + (myDate.getMonth() + 1)) +
      "." +
      (myDate.getDate() > 9
        ? myDate.getDate().toString()
        : "0" + myDate.getDate().toString())
    );
  };

  // 제목 24자 넘어가는 부분 ...으로 바꿔주는 함수
  const showTitle = (title: string): string => {
    return title?.length > 24 ? title.substr(0, 23) + "..." : title;
  };

  let banner = [
    "./banners/bag banner - phone.jpg",
    "./banners/nuigurumi banner - phone.jpg",
    "./banners/keyring banner - phone.jpg",
  ];

  return (
    <div className="index_page">
      <Category />
      <div className="search">
        <Link href="/search?tab=recent" className="link input_wrap">
          <input
            type="text"
            className="input_wrap"
            placeholder="찾고 싶은 상품을 검색해보세요"
          />
        </Link>
        <Link className="btn32" href="/search?tab=recent">
          <img src="./icons/search.svg" />
        </Link>
        <button className="btn32">
          <img src="./icons/zzim.svg" />
        </button>
      </div>
      <Carousel bannerArr={banner} />
      <section className="category_section">
        <Link href="/categories/930100" className="link category_item">
          <img src="/icons/category_figure.png" />
          <div>피규어/인형</div>
        </Link>
        <Link href="/categories/900500200" className="link category_item">
          <img src="/icons/category_fancy.png" />
          <div>문구/필기류</div>
        </Link>
        <Link href="/categories/910100001" className="link category_item">
          <img src="/icons/category_photocard.png" />
          <div>팬시/포토카드</div>
        </Link>
        <Link href="/categories/990100" className="link category_item">
          <img src="icons/category_collectibles.png" />
          <div>희귀/수집품</div>
        </Link>
        <Link href="/?menu=true" className="link category_item">
          <div>
            <img src="/icons/category_all.png" />
            <div>전체보기</div>
          </div>
        </Link>
      </section>
      <section className="product_section">
        {data.products.map((product: Product) => {
          return (
            <Link
              href={`/products/` + product.pid}
              className="link product_box"
            >
              <div className="product_img_box">
                <img
                  className="product_img"
                  src={product.product_image.replace("{res}", "354")}
                />
                {product.bun_pay_filter_enabled === true ? (
                  <span className="product_pay">
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
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="product_title">{showTitle(product.name)}</div>
              <div className="product_price">
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </div>
              <div className="product_zzim_time">
                <div className="product_zzim">{product.num_faved}</div>
                <div className="product_time">
                  {showDate(product.update_time)}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <Footer />
      <div style={{ height: "3.5rem" }} />
      <div className="gnb_container">
        <GNB />
      </div>
    </div>
  );
}
