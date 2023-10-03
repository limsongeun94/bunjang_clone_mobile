import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import ProductList from "@/app/_components/ProductList";
import Back_url from "@/app/_components/Back_url";

export default async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const res = await fetch(
    "http://localhost:3000/api/search?page=1&size=60&keyword=" + searchParams!.q
  );
  const data = await res.json();

  console.log();

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
            placeholder="검색어를 입력해주세요"
            maxLength={40}
            value={searchParams!.q}
          />
          <a>
            <img src="/icons/search_red.svg" width="15px" height="15px" />
          </a>
        </div>
      </div>
      <ProductList product={data} />
    </div>
  );
};
