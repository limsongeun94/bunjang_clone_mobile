"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import Back_url from "@/app/_components/Back_url";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { TouchEvent, KeyboardEvent } from "react";

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

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const result = localStorage.getItem("keywords") || "[]";
  //     setKeywords(JSON.parse(result));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("keywords", JSON.stringify(keywords));
  // }, [keywords]);

  const inputRef = useRef<HTMLInputElement>(null);

  const doSearch = (
    e: KeyboardEvent<HTMLInputElement> | TouchEvent<HTMLAnchorElement>
  ) => {
    const { keyCode } = e as React.KeyboardEvent<HTMLInputElement>;
    const { type } = e as TouchEvent<HTMLAnchorElement>;
    let id = 0;
    if (keyCode === 13) {
      console.log(inputRef.current && inputRef.current.value);
      localStorage.setItem(
        "keywords",
        JSON.stringify({
          id: id++,
          keyword: inputRef.current && inputRef.current.value,
        })
      );
    } else if (type === "touchend") {
      console.log(inputRef.current && inputRef.current.value);
    }
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
              searchParams.tab === "recent" ? "red" : ""
            } link`}
          >
            최근검색어
          </Link>
          <Link
            href="/search?tab=popular"
            className={`search_word_tab ${
              searchParams.tab === "popular" ? "red" : ""
            } link`}
          >
            인기검색어
          </Link>
        </div>
        {searchParams.tab === "recent" ? (
          <div className="recent_search_word">
            <span>안녕?</span>
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
