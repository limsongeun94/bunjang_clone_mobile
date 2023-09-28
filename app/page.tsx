// "use client";

import "./styles/global.scss";
import "./styles/index.scss";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import GNB from "./components/GNB";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/landing");
  const data = await res.json();
  console.log(data);
  const pageState = "";
  // const [pageState, setPageState] = useState("");
  // useEffect(() => {
  //   setPageState("home");
  // }, []);

  return (
    <div className="index_page">
      <div className="search">
        <input type="text" placeholder="찾고 싶은 상품을 검색해보세요" />
        <button>
          <img src="./icons/search.svg" />
        </button>
        <button>
          <img src="./icons/zzim.svg" />
        </button>
      </div>
      <Carousel />
      <Footer />
      <GNB pageState={data} />
    </div>
  );
}
