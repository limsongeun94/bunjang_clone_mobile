import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: NextRequest) {
  let data = products as Array<any>;

  const page = parseInt(
    (req.nextUrl.searchParams.get("page") as string) ?? "1"
  );
  const size = parseInt(
    (req.nextUrl.searchParams.get("size") as string) ?? "60"
  );
  const keyword = req.nextUrl.searchParams.get("keyword");

  if (keyword) {
    data = data.filter((x) => {
      const name = (x.name as string).replace(/ /g, "");
      return name.includes(keyword);
    });
  } else {
    data = [];
  }

  const ret = {
    page,
    size,
    list: data.slice((page - 1) * size, page * size),
    total: data.length,
    pages: Math.floor(data.length / size) + (data.length % size ? 1 : 0),
  };

  return new NextResponse(JSON.stringify(ret));
}
