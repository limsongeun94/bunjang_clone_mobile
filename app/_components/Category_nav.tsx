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
          <Link href="/categories/930100" className="link category_list_item">
            피규어/인형
          </Link>
          <Link
            href="/categories/900500200"
            className="link category_list_item"
          >
            학습도구/문구/필기류
          </Link>
          <Link
            href="/categories/910100001"
            className="link category_list_item"
          >
            팬시/포토카드
          </Link>
          <Link
            href="/categories/910100008"
            className="link category_list_item"
          >
            인형/피규어(보이그룹)
          </Link>
          <Link href="/categories/990100" className="link category_list_item">
            희귀/수집품
          </Link>
          <Link href="/categories/400600" className="link category_list_item">
            키링/키케이스
          </Link>
          <Link href="/categories/930999" className="link category_list_item">
            기타(키덜트)
          </Link>
          <Link
            href="/categories/410800200"
            className="link category_list_item"
          >
            파우치/정리함(화장품)
          </Link>
          <Link
            href="/categories/500116005"
            className="link category_list_item"
          >
            액세서리
          </Link>
          <Link href="/categories/999" className="link category_list_item">
            기타
          </Link>
          <Link
            href="/categories/500119004"
            className="link category_list_item"
          >
            인형(유아용)
          </Link>
          <Link
            href="/categories/600700003"
            className="link category_list_item"
          >
            케이스/보호필름/액세서리
          </Link>
          <Link
            href="/categories/910100006"
            className="link category_list_item"
          >
            의류/패션잡화
          </Link>
          <Link
            href="/categories/410700200"
            className="link category_list_item"
          >
            네일아트/스티커
          </Link>
          <Link href="/categories/430" className="link category_list_item">
            가방/지갑
          </Link>
          <Link
            href="/categories/600600001"
            className="link category_list_item"
          >
            닌텐도/NDS/Wii
          </Link>
          <Link
            href="/categories/800400040"
            className="link category_list_item"
          >
            텀블러/물병
          </Link>
          <Link href="/categories/400999" className="link category_list_item">
            액세서리(기타)
          </Link>
          <Link
            href="/categories/410800100"
            className="link category_list_item"
          >
            퍼프/거울(뷰티소품)
          </Link>
          <Link
            href="/categories/900100010"
            className="link category_list_item"
          >
            만화
          </Link>
        </div>
      </div>
    );
  }
};
