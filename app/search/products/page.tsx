import "@/app/_styles/index.scss";
import "@/app/_styles/search.scss";
import ProductList from "@/app/_components/ProductList";
import Back_url from "@/app/_components/Back_url";
import View from "./view";

export default async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const res = await fetch(
    "http://localhost:3000/api/search?page=1&size=60&keyword=" + searchParams!.q
  );
  const data = await res.json();

  return (
    <View initial_product={data} searchId={searchParams!.q} />
    // <div className="search_page">
    //   <div className="search_pad_wrap">
    //     <div className="search_pad">
    //       <Back_url>
    //         <button>
    //           <img src="/icons/back.svg" />
    //         </button>
    //       </Back_url>
    //       <div className="search_input">
    //         <Link href="/search?tab=recent" className="link">
    //           <input
    //             placeholder="검색어를 입력해주세요"
    //             maxLength={40}
    //             defaultValue={searchParams!.q}
    //           />
    //         </Link>
    //       </div>
    //       <a>
    //         <img src="/icons/search_red.svg" width="15px" height="15px" />
    //       </a>
    //     </div>
    //   </div>
    //   <ProductList product={data} />
    // </div>
  );
};
