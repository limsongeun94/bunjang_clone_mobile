"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import Back_url from "@/app/_components/Back_url";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { TouchEvent, KeyboardEvent } from "react";
import { KeyWord } from "@/app/_interface";

export default ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let popular_keyword_arr = [
    { rank: 1, name: "산리오" },
    { rank: 2, name: "마이멜로디" },
    { rank: 3, name: "시나모롤" },
    { rank: 4, name: "스티커" },
    { rank: 5, name: "제일복권" },
    { rank: 6, name: "폼폼푸린" },
    { rank: 7, name: "쿠로미" },
    { rank: 8, name: "키티" },
    { rank: 9, name: "키링" },
    { rank: 10, name: "포챠코" },
  ];

  const inputRef = useRef<HTMLInputElement>(null);

  const [keywords, setKeywords] = useState<string[]>([]);
  const doSearch = (
    e: KeyboardEvent<HTMLInputElement> | TouchEvent<HTMLAnchorElement>
  ) => {
    const { key } = e as React.KeyboardEvent<HTMLInputElement>;
    const { type } = e as TouchEvent<HTMLAnchorElement>;
    if (key === "Enter" || type === "touchend") {
      if (inputRef.current!.value === "") {
        return;
      } else {
        console.log(inputRef.current!.value);
        let new_keywords: KeyWord[] = [inputRef.current!.value, ...keywords];
        setKeywords(new_keywords);
        localStorage.setItem("$KEYWORDS", JSON.stringify(new_keywords));
        inputRef.current!.value = "";
      }
    }
  };

  const getKeywords = () => {
    let localData = JSON.parse(localStorage.getItem("$KEYWORDS") ?? "[]");
    setKeywords(localData);
  };

  useEffect(() => getKeywords(), []);

  const deleteAllKeywords = () => {
    localStorage.removeItem("$KEYWORDS");
  };

  const deleteKeyword = (value: string) => {
    let new_keywords = keywords.filter((x) => x !== value);
    setKeywords(new_keywords);
    localStorage.setItem("$KEYWORDS", JSON.stringify(new_keywords));
  };

  return (
    <div className="search_page">
      <div className="search_pad">
        <Back_url>
          <button>
            <img src="/icons/back.svg" />
          </button>
        </Back_url>
        <input
          onKeyUp={doSearch}
          placeholder="검색어를 입력해주세요"
          maxLength={40}
          ref={inputRef}
        />
        <a onTouchEnd={doSearch}>
          <img src="/icons/search_red.svg" width="15px" height="15px" />
        </a>
      </div>
      <div className="search_word_container">
        <div className="search_word_tab_wrap">
          <Link
            href="/search?tab=recent"
            className={`search_word_tab ${
              searchParams?.tab === "recent" ? "red" : ""
            } link`}
          >
            최근검색어
          </Link>
          <Link
            href="/search?tab=popular"
            className={`search_word_tab ${
              searchParams?.tab === "popular" ? "red" : ""
            } link`}
          >
            인기검색어
          </Link>
        </div>
        {searchParams?.tab === "recent" ? (
          <div>
            {keywords.map((el, i) => {
              return (
                <div key={i} className="recent_search_word">
                  <span>{el}</span>
                  <button onClick={() => deleteKeyword(el)}>
                    <img
                      src="/icons/keyword_delete.svg"
                      width="24px"
                      height="24px"
                    />
                  </button>
                </div>
              );
            })}
            <button onClick={deleteAllKeywords} className="keyword_all_delete">
              <img src="/icons/keyword_alldelete.svg" />
              검색어 전체 삭제
            </button>
          </div>
        ) : (
          popular_keyword_arr.map((el, i) => {
            return (
              <div key={i} className="popular_search_word">
                <span>
                  <span className="rank">{el.rank}</span>
                  {el.name}
                </span>
                <span className="sell">판매</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
