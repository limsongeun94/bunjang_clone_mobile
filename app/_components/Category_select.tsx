import "../_styles/global.scss";
import "../_styles/category_select.scss";

export default () => {
  return (
    <div className="category_select_component">
      <div className="category_select_header">
        <div className="category_select_header_wrapper">
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
          <h1>상품등록</h1>
        </div>
      </div>
    </div>
  );
};
