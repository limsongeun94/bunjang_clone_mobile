import "../_styles/global.scss";
import "../_styles/category_select.scss";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default ({ viewMode, setViewMode, setCategory }: ModalProps) => {
  const category_list = [
    "피규어/인형",
    "학습도구/문구/필기류",
    "팬시/포토카드",
    "인형/피규어(보이그룹)",
    "희귀/수집품",
    "키링/키케이스",
    "기타(키덜트)",
    "파우치/정리함(화장품)",
    "액세서리",
    "기타",
    "인형(유아용)",
    "케이스/보호필름/액세서리",
    "의류/패션잡화",
    "네일아트/스티커",
    "가방/지갑",
    "닌텐도/NDS/Wii",
    "텀블러/물병",
    "액세서리(기타)",
    "퍼프/거울(뷰티소품)",
    "만화",
  ];
  return (
    <div
      className={`category_select_component modal_bg ${
        viewMode === "category" ? "modal_shown" : "modal_hidden"
      }`}
    >
      <div className="category_select_header">
        <div className="category_select_header_wrapper">
          <button onTouchEnd={() => setViewMode("main")}>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <g fill="#1E1D29">
                <path
                  fillRule="evenodd"
                  d="M19 8.996H3.66L9.657 3.75a1 1 0 0 0-1.316-1.506l-8 7c-.008.007-.01.018-.019.025a.975.975 0 0 0-.177.24c-.018.03-.045.054-.059.087a.975.975 0 0 0 0 .802c.014.033.041.057.06.088.05.087.103.17.176.239.008.007.011.018.02.025l8 7a.996.996 0 0 0 1.41-.095 1 1 0 0 0-.095-1.411L3.66 10.996H19a1 1 0 1 0 0-2"
                ></path>
              </g>
            </svg>
          </button>
          <h1>상품등록</h1>
        </div>
      </div>
      <div className="category_list_wapper">
        <div className="category_list_header">전체 카테고리</div>
        <div className="category_list">
          {category_list.map((el, i) => {
            return (
              <div
                onTouchEnd={() => {
                  setCategory(el);
                  setViewMode("main");
                }}
                key={i}
                className="category_list_item"
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
