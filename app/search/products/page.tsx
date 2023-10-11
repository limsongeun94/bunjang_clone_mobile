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
    process.env.NEXT_PUBLIC_API_HOST +
      "/search?page=1&size=60&keyword=" +
      searchParams!.q
  );
  const data = await res.json();

  return <View initial_product={data} searchId={searchParams!.q} />;
};
