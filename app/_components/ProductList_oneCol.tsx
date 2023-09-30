import "@/app/_styles/productlist.scss";

export default () => {
  return (
    <div className="oneCol_page">
      <div className="product_wrapper">
        <div className="product_img_wrapper"></div>
        <div className="product_text_wrapper">
          <div className="product_price">30000</div>
          <div className="product_title">
            제품제목 제품제목 제품제목 제품제목 제품제목 제품제목 제품제목
            제품제목 제품제목 제품제목 제품제목 제품제목 제품제목 제품제목
            제품제목 제품제목 제품제목 제품제목 제품제목 제품제목 제품제목
          </div>
          <div className="product_zzimloca">
            <div className="product_zzim">
              <img
                src="/icons/product_img_heart.svg"
                width="12px"
                height="12px"
              />
              <span>10</span>
            </div>
            <div className="product_location">
              <img src="/icons/location.svg" width="11px" height="12px" />
              <span>위치없음</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
