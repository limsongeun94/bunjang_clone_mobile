"use client";

import { useState, useEffect } from "react";
import "../styles/global.scss";
import "../styles/gnb.scss";

interface Props {
  pageState: string;
}

export default ({ pageState }: Props) => {
  console.log(pageState);

  return (
    <nav>
      <div></div>
      <div></div>
      <div></div>
    </nav>
  );
};
