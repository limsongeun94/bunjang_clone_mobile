import "@/app/_styles/index.scss";
import "@/app/_styles/myshop.scss";
import Footer from "@/app/_components/Footer";
import GNB from "@/app/_components/GNB";
import Link from "next/link";

export default ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams?.tab);

  return (
    <div className="my_shop_page">
      <div className="shop_info">
        <img className="shop_info_icons" src="/icons/shop_icons.png" />
        <div className="shop_info_text">
          <h2>내상점</h2>
          <div className="star_wrapper">
            <img src="/icons/star.svg" width="12px" height="12px" />
            <img src="/icons/star.svg" width="12px" height="12px" />
            <img src="/icons/star.svg" width="12px" height="12px" />
            <img src="/icons/star.svg" width="12px" height="12px" />
            <img src="/icons/star.svg" width="12px" height="12px" />
          </div>
        </div>
      </div>
      <div className="line">
        <div />
      </div>
      <nav className="tab">
        <Link
          href="/my-shop?tab=sale"
          className={`${
            searchParams?.tab === "sale" ? "active" : "noneactive"
          } link`}
        >
          판매중
        </Link>
        <Link
          href="/my-shop?tab=done"
          className={`${
            searchParams?.tab === "done" ? "active" : "noneactive"
          } link`}
          style={{ marginLeft: "24px" }}
        >
          판매완료
        </Link>
        <div
          className={searchParams?.tab === "sale" ? "line_sale" : "line_done"}
        />
      </nav>
      <div className="list_container">
        {searchParams?.tab === "sale" ? (
          <article>
            <div className="img_container">
              <img className="product_img" src="/속눈썹.jpg" />
            </div>
            <div className="list_info_container">
              <div className="list_title">아이래쉬 인조속눈썹</div>
              <div className="list_price">
                1,000<span>원</span>
              </div>
            </div>
          </article>
        ) : (
          <article>
            <div className="img_container">
              <img className="product_img" src="/속눈썹.jpg" />
              <div className="done_layer">
                <img src="/icons/done.svg" width="45px" height="45px" />
              </div>
            </div>
            <div className="list_info_container">
              <div className="list_title">판매완료되었습니다</div>
              <div className="list_price">
                99,999<span>원</span>
              </div>
            </div>
          </article>
        )}
      </div>
      <Footer />
      <div style={{ height: "3.5rem" }} />
      <div className="gnb_container">
        <GNB />
      </div>
    </div>
  );
};
