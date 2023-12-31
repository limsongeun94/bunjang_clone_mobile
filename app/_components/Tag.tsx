import "../_styles/global.scss";
import "../_styles/tag.scss";
import { KeyboardEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useState, useRef } from "react";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  tag: string[];
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
};

export default ({ viewMode, setViewMode, tag, setTag }: ModalProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      ref.current!.value = ref.current!.value.split("\n").join(" ");
      if (ref.current!.value.split("#").length - 1 >= 5) {
        ref.current!.value = ref.current!.value.slice(0, -1);
      }
      ref.current!.value = ref.current!.value.replaceAll(" ", " #");
      ref.current!.value = ref.current!.value.replaceAll("##", "#");
    }
    if (e.code === "Space") {
      if (ref.current!.value.split("#").length - 1 >= 5) {
        ref.current!.value = ref.current!.value.slice(0, -1);
      }
      ref.current!.value = ref.current!.value.replaceAll(" ", " #");
      ref.current!.value = ref.current!.value.replaceAll("##", "#");
    }
  };

  // 체크 버튼을 누르면 textarea에 입력한 값이 tag에 set 되는 함수
  const onSubmit = () => {
    if (ref.current!.value.charAt(ref.current!.value.length - 1) === "#") {
      ref.current!.value = ref.current!.value.slice(0, -2);
      let new_tag;
      new_tag = ref.current!.value.replaceAll("#", " ");
      new_tag = new_tag.replaceAll("  ", " ");
      new_tag = new_tag.split(" ");
      setTag(new_tag);
      setViewMode("main");
    } else {
      let new_tag;
      new_tag = ref.current!.value.replaceAll("#", " ");
      new_tag = new_tag.replaceAll("  ", " ");
      new_tag = new_tag.split(" ");
      setTag(new_tag);
      setViewMode("main");
    }
  };

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
        <button onClick={onSubmit}>
          <img src="/icons/check.svg" />
        </button>
      </div>
      <div className="tag_input">
        <TextareaAutosize
          minRows={1}
          ref={ref}
          onKeyUp={onEnterText}
          placeholder="태그를 입력해주세요"
          spellCheck={false}
        ></TextareaAutosize>
      </div>
      <div className="tag_description">
        <ul>
          <li>
            <p>태그는 띄어쓰기로 등록됩니다.</p>
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
