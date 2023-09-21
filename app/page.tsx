import Image from "next/image";
import "./styles/global.scss";

export default function Home() {
  return (
    <div className="index_page">
      <div className="search">
        <div>
          <input placeholder="찾고 싶은 상품을 검색해보세요" />
        </div>
      </div>
    </div>
  );
}
