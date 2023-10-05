"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import "../_styles/global.scss";
import "../_styles/gnb.scss";

export default () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav>
      <div
        className={pathname === "/" ? "index_homeBtn" : "myshop_homeBtn"}
      ></div>
      <div
        onClick={() => router.push("/products/new")}
        className="regiBtn"
      ></div>
      <div
        className={pathname === "/" ? "index_myshopBtn" : "myshop_myshopBtn"}
      ></div>
    </nav>
  );
};
