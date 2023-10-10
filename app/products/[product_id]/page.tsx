import "@/app/_styles/index.scss";
import "@/app/_styles/product.scss";
import Carousel from "@/app/_components/Carousel_product";
import Footer from "@/app/_components/Footer";
import Back_url from "@/app/_components/Back_url";
import Link from "next/link";

export default async ({ params }: { params: { product_id: string } }) => {
  const res = await fetch(
    "http://localhost:3000/api/product/" + params.product_id
  );
  const data = await res.json();

  return (
    <div className="product_detail_page">
      <div className="product_headnav">
        <Back_url>
          <button>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <g fill="#fff">
                <path
                  fillRule="evenodd"
                  d="M19 8.996H3.66L9.657 3.75a1 1 0 0 0-1.316-1.506l-8 7c-.008.007-.01.018-.019.025a.975.975 0 0 0-.177.24c-.018.03-.045.054-.059.087a.975.975 0 0 0 0 .802c.014.033.041.057.06.088.05.087.103.17.176.239.008.007.011.018.02.025l8 7a.996.996 0 0 0 1.41-.095 1 1 0 0 0-.095-1.411L3.66 10.996H19a1 1 0 1 0 0-2"
                ></path>
              </g>
            </svg>
          </button>
        </Back_url>
        <div>
          <Link href="/" className="link">
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#ffffff">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.801 12.4016L16 7.9576L23.199 12.4016V24.0006H16.901V16.3736C16.901 15.8766 16.497 15.4736 16 15.4736C15.503 15.4736 15.1 15.8766 15.1 16.3736V24.0006H8.801V12.4016ZM7.901 25.7996H24.1C24.597 25.7996 25 25.3976 25 24.9006V11.8996C25 11.5876 24.838 11.2976 24.572 11.1336L16.473 6.1346C16.184 5.9546 15.817 5.9546 15.528 6.1346L7.428 11.1336C7.162 11.2976 7 11.5876 7 11.8996V24.9006C7 25.3976 7.404 25.7996 7.901 25.7996V25.7996Z"
                ></path>
              </g>
            </svg>
          </Link>
          <Link href="/search?tab=recent" className="link">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M1.937 7.747a5.817 5.817 0 0 1 5.81-5.81 5.817 5.817 0 0 1 5.812 5.81 5.817 5.817 0 0 1-5.811 5.811 5.817 5.817 0 0 1-5.811-5.81M13.86 12.49a7.695 7.695 0 0 0 1.635-4.743C15.496 3.476 12.02 0 7.748 0S0 3.476 0 7.747c0 4.272 3.476 7.748 7.748 7.748a7.703 7.703 0 0 0 4.742-1.635l3.857 3.855a.966.966 0 0 0 1.369 0 .967.967 0 0 0 0-1.37l-3.855-3.855z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <Carousel imageUrl={data.imageUrl} imageCount={data.imageCount} />
      <div className="product_basicInfo_wrap">
        <div className="product_title">{data.name}</div>
        <div className="product_price">
          {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          {data.bunpayHope ? (
            <span>
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
        <div className="product_tiemzzimview_wrap">
          <div className="product_time">
            {data.updatedAt.slice(0, 10).replaceAll("-", ".")}
          </div>
          <div className="product_zzimview_wrap">
            <div className="product_zzim">
              <span className="product_zzim_img">
                <svg width="15px" height="15px" viewBox="0 0 30 30">
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-40.000000, -957.000000)"
                      fill="#CCCCCC"
                      fillRule="nonzero"
                    >
                      <g
                        id="Group-3"
                        transform="translate(0.000000, 748.000000)"
                      >
                        <g
                          id="Group-16"
                          transform="translate(40.000000, 205.000000)"
                        >
                          <g
                            id="Group-9"
                            transform="translate(0.000000, 4.000000)"
                          >
                            <g id="icon_detail_bookmark_c">
                              <g>
                                <path
                                  d="M15,30 L12.825,27.8419619 C5.1,20.2070845 0,15.1716621 0,8.99182561 C0,3.95640327 3.63,0 8.25,0 C10.86,0 13.365,1.32425068 15,3.41689373 C16.635,1.32425068 19.14,0 21.75,0 C26.37,0 30,3.95640327 30,8.99182561 C30,15.1716621 24.9,20.2070845 17.175,27.8583106 L15,30 Z"
                                  id="Path"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              {data.metrics.favoriteCount}
            </div>
            <div className="product_view">
              <img
                src="/icons/product_img_view.svg"
                width="22px"
                height="15px"
              />
              {data.metrics.viewCount}
            </div>
          </div>
        </div>
      </div>
      <div className="product_explaininfo_wrap">
        <div className="product_usedship_wrap">
          <span>{data.status === "USED" ? "중고상품" : "새상품"}</span>
          <span>
            {data.includeShippingCost ? "배송비 무료" : "배송비 별도"}
          </span>
        </div>
        <div className="product_count">
          <strong>수량</strong>
          <span>{data.qty}개</span>
        </div>
        <pre className="product_explain">{data.description}</pre>
        <ul className="product_etc_explain">
          <li>
            거래지역
            <span>
              <svg width="15px" height="15px" viewBox="0 0 30 30">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-158.000000, -2024.000000)"
                    stroke="#888888"
                    strokeWidth="1.5"
                  >
                    <g
                      id="Group-13"
                      transform="translate(0.000000, 1209.000000)"
                    >
                      <g
                        id="Group-29"
                        transform="translate(30.000000, 811.000000)"
                      >
                        <g
                          id="Group-26"
                          transform="translate(128.000000, 0.000000)"
                        >
                          <g
                            id="location"
                            transform="translate(0.000000, 4.000000)"
                          >
                            <g
                              id="Group-10"
                              transform="translate(4.000000, 0.000000)"
                            >
                              <path
                                d="M10.7735964,14.4054257 C13.2736767,14.4054257 15.2971929,12.4187008 15.2971929,9.97771286 C15.2971929,7.53672497 13.2736767,5.55 10.7735964,5.55 C8.27351617,5.55 6.25,7.53672497 6.25,9.97771286 C6.25,12.4187008 8.27351617,14.4054257 10.7735964,14.4054257 Z"
                                id="Path"
                              ></path>
                              <path
                                d="M10.7929961,28.8922327 L10.8131426,28.8703331 C10.8508986,28.8290776 10.8508986,28.8290776 10.9257828,28.746089 C11.0217412,28.6394256 11.1286408,28.5190295 11.2439583,28.3876125 C11.6023068,27.9792348 11.9842561,27.5304885 12.3794688,27.0523838 C13.6086324,25.5654151 14.7714304,24.032916 15.8249822,22.4997929 C17.3135618,20.3336196 18.4937244,18.2954494 19.3385289,16.4129069 C20.3344911,14.193528 20.8359922,12.2524699 20.8359922,10.5967598 C20.8359922,5.15602384 16.3483753,0.75 10.7929961,0.75 C5.23761688,0.75 0.75,5.15602384 0.75,10.5967598 C0.75,12.2524699 1.25150108,14.193528 2.24746327,16.4129069 C3.09226774,18.2954494 4.27243037,20.3336196 5.76101001,22.4997929 C6.81456176,24.032916 7.97735977,25.5654151 9.20652341,27.0523838 C9.60173609,27.5304885 9.98368539,27.9792348 10.3420339,28.3876125 C10.4573514,28.5190295 10.564251,28.6394256 10.6602094,28.746089 C10.7350936,28.8290776 10.7350936,28.8290776 10.7728496,28.8703331 L10.7929961,28.8922327 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {data.location ? data.location : "위치정보 없음"}
            </span>
          </li>
          <li>
            카테고리{" "}
            <Link
              href={`/categories/${data.category.id}`}
              className="link red"
              style={{ marginLeft: "10px" }}
            >
              {data.category.name}
            </Link>
          </li>
          <li>
            상품태그
            <span className="tag_wrapper">
              {data.keywords.length === 0
                ? "정보없음"
                : data.keywords.map((el: string) => {
                    return (
                      <Link
                        href={`/search/products?q=${el}`}
                        className="link red"
                      >
                        #{el}
                      </Link>
                    );
                  })}
            </span>
          </li>
        </ul>
      </div>
      <Footer />
      <div style={{ height: "56px" }} />
      <div className="product_trade">
        <button>번개톡</button>
        <button>번개페이 안전결제</button>
      </div>
    </div>
  );
};
