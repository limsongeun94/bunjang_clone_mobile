"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../_styles/global.scss";
import "../_styles/gnb.scss";

export default () => {
  const pathname = usePathname();

  return (
    <nav>
      <div
        className={pathname === "/" ? "index_homeBtn" : "myshop_homeBtn"}
      ></div>
      <div className="regiBtn"></div>
      <div
        className={pathname === "/" ? "index_myshopBtn" : "myshop_myshopBtn"}
      ></div>
    </nav>
  );
};
