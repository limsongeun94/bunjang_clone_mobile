"use client";

import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import Back_url from "@/app/_components/Back_url";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { KeyboardEvent, MouseEvent } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  // 최근검색어 배열
  const [keywords, setKeywords] = useState<string[]>([]);

  // 검색 결과로 이동하는 함수
  const goSearchResult = (value: string) => {
    router.push(`/search/products?q=${value}`);
    value;
  };

  // 검색어를 입력하면 최근검색어 배열과 localstorage에 저장하는 함수
  const doSearch = (
    e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    const { key } = e as KeyboardEvent<HTMLInputElement>;
    const { button } = e as MouseEvent<HTMLAnchorElement>;

    if (key === "Enter" || button === 0) {
      if (inputRef.current!.value === "") {
        return;
      } else {
        let new_keywords = [inputRef.current!.value, ...keywords];
        localStorage.setItem("$KEYWORDS", JSON.stringify(new_keywords));
        setKeywords(new_keywords);
        goSearchResult(inputRef.current!.value);
        inputRef.current!.value = "";
      }
    }
  };

  // localstorage에 저장된 최근검색어를 꺼내와 최근검색어 배열로 세팅하는 함수
  const getKeywords = () => {
    let localData = JSON.parse(localStorage.getItem("$KEYWORDS") ?? "[]");
    setKeywords(localData);
  };
  useEffect(() => getKeywords(), []);

  // 모든 최근검색어를 제거하는 함수
  const deleteAllKeywords = () => {
    localStorage.removeItem("$KEYWORDS");
    setKeywords([]);
  };

  // 특정 최근검색어를 제거하는 함수
  const deleteKeyword = (value: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let new_keywords = keywords.filter((x) => x !== value);
    localStorage.setItem("$KEYWORDS", JSON.stringify(new_keywords));
    setKeywords(new_keywords);
  };

  return (
    <div className="search_page">
      <div className="search_pad_wrap">
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
            className="search_input"
          />
          <a onClick={doSearch}>
            <img src="/icons/search_red.svg" width="15px" height="15px" />
          </a>
        </div>
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
        <div style={{ height: "50px" }} />
        {searchParams?.tab === "recent" ? (
          <div>
            {keywords.map((el, i) => {
              return (
                <Link
                  key={i}
                  href={`/search/products?q=${el}`}
                  className="link recent_search_word"
                >
                  <span>{el}</span>
                  <button onClick={(e) => deleteKeyword(el, e)}>
                    <img
                      src="/icons/keyword_delete.svg"
                      width="24px"
                      height="24px"
                    />
                  </button>
                </Link>
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
              <Link
                key={i}
                href={`/search/products?q=${el.name}`}
                className="link popular_search_word"
              >
                <span>
                  <span className="rank">{el.rank}</span>
                  {el.name}
                </span>
                <Link href="/products/new" className="sell link">
                  판매
                </Link>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
