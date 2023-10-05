import "../_styles/global.scss";
import "../_styles/description.scss";
import { useState, useRef } from "react";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export default ({ viewMode, setViewMode, setDescription }: ModalProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    setDescription(inputValue);
    setViewMode("mode");
  };

  return (
    <div
      className={`description_component modal_bg ${
        viewMode === "description" ? "modal_shown" : "modal_hidden"
      }`}
    >
      <div className="description_header">
        <button onClick={() => setViewMode("main")}>
          <img src="/icons/back.svg" />
        </button>
        <h1>상품설명</h1>
        <button onClick={onSubmit}>
          <img src="/icons/check.svg" />
        </button>
      </div>
      <div className="description_container">
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          ref={ref}
          maxLength={2000}
        ></textarea>
        <div
          onClick={() => ref.current!.focus()}
          className={`placeholder ${
            inputValue.length >= 1 ? "hidden" : "show"
          }`}
        >
          여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등
          구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)
          <span>
            안전하고 건전한 거래 환경을 위해 과학기술정보통신부,
            한국인터넷진흥원과 번개장터(주)가 함께 합니다.
          </span>
        </div>
        <div style={{ color: "rgb(155, 153, 169)" }}>
          {inputValue.length}/2000
        </div>
      </div>
    </div>
  );
};
