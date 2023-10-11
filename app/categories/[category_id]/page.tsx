import "@/app/_styles/index.scss";
import "@/app/_styles/category.scss";
import ProductList from "@/app/_components/ProductList";
import Back_url from "@/app/_components/Back_url";

import View from "./view";

export default async ({ params }: { params: { category_id: string } }) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_HOST +
      "/product?page=1&size=60&category=" +
      params.category_id
  );
  const data = await res.json();

  const res_category = await fetch(
    process.env.NEXT_PUBLIC_API_HOST + "/category?id=" + params.category_id
  );
  const category_name = await res_category.text();

  return (
    <View
      initial_product={data}
      categoryName={category_name}
      categoryId={params.category_id}
    />
  );
};
