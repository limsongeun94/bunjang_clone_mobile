import "../_styles/global.scss";
import "../_styles/tag.scss";
import { KeyboardEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState, useRef } from "react";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  tag: string[];
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
};

export default ({ viewMode, setViewMode, tag, setTag }: ModalProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const madeTagList = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    // String.trim() : 문자열의 시작과 끝에 공백을 제거해줌.
    const newTag = (e.target as HTMLInputElement).value.trim();

    if (e.code === "Space") {
      if (tag.some((el) => el === newTag)) {
        (e.target as HTMLInputElement).value = "";
        return;
      } else if (newTag === "") {
        return;
      } else if (newTag.length > 9) {
        (e.target as HTMLInputElement).value = "";
        return;
      } else {
        setTag([...tag, newTag]);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  const [value, setValue] = useState("");

  return (
    <div
      className={`tag_component modal_bg ${
        viewMode === "tag" ? "modal_shown" : "modal_hidden"
      }`}
    >
      <div className="tag_header">
        <button onClick={() => setViewMode("main")}>
          <img src="/icons/back.svg" />
        </button>
        <h1>연관태그</h1>
        <button>
          <img src="/icons/check.svg" />
        </button>
      </div>
      <div className="tag_input">
        <div className="taglist">
          {tag.map((el, i) => {
            return (
              <div key={i}>
                #{el}
                <button>
                  <img src="/icons/tag_delete.svg" width="20px" height="20px" />
                </button>
              </div>
            );
          })}
        </div>
        <input onKeyUp={(e) => madeTagList(e)} />
        <TextareaAutosize
          minRows={1}
          ref={ref}
          onChange={(e) => setValue(e.target.value)}
          value={tag + value}
        >
          {tag.map((el) => "#" + el).join(" ")}
        </TextareaAutosize>
      </div>
      <div className="tag_description">
        <ul>
          <li>
            <p>태그는 띄어쓰기로 등록되며 최대 9자까지 입력할 수 있습니다.</p>
          </li>
          <li>
            <p>
              태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을 보장하지는
              않습니다.
            </p>
          </li>
          <li>
            <p>검색 광고는 태그정보를 기준으로 노출됩니다.</p>
          </li>
          <li>
            <p>
              상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을
              입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
