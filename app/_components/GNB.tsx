"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../_styles/global.scss";
import "../_styles/gnb.scss";

interface Props {
  pageState: string;
}

export default ({ pageState }: Props) => {
  const pathname = usePathname();
  console.log(pageState);

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
