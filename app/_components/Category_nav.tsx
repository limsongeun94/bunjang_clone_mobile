"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "../_styles/global.scss";
import "../_styles/category_nav.scss";
import Link from "next/link";

export default () => {
  const searchParams = useSearchParams();
  const menu = searchParams.get("menu");

  // 스크롤 막는 함수
  useEffect(() => {
    if (menu === "true") {
      document.body.style.cssText = `overflow: hidden`;
    } else {
      document.body.style.cssText = `overflow: auto`;
    }
    return () => {
      document.body.style.cssText = `overflow: auto`;
    };
  }, [menu]);

  if (menu === "true") {
    return (
      <div className="category_nav">
        <div className="title">
          <h1>카테고리</h1>
          <Link href="/" className="link closeBtn">
            <img src="/icons/close.svg" width="15px" height="15px" />
          </Link>
        </div>
        <h2>중고거래</h2>
        <div className="category_list">
          <div>피규어/인형</div>
          <div>학습도구/문구/필기류</div>
          <div>팬시/포토카드</div>
          <div>인형/피규어(보이그룹)</div>
          <div>희귀/수집품</div>
          <div>키링/키케이스</div>
          <div>기타(키덜트)</div>
          <div>파우치/정리함(화장품)</div>
          <div>액세서리</div>
          <div>기타</div>
          <div>인형(유아용)</div>
          <div>케이스/보호필름/액세서리</div>
          <div>의류/패션잡화</div>
          <div>네일아트/스티커</div>
          <div>가방/지갑</div>
          <div>닌텐도/NDS/Wii</div>
          <div>텀블러/물병</div>
          <div>액세서리(기타)</div>
          <div>퍼프/거울(뷰티소품)</div>
          <div>만화</div>
        </div>
      </div>
    );
  }
};
