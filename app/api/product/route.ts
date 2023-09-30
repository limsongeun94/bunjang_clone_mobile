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
  const category = req.nextUrl.searchParams.get("category");

  if (category) data = data.filter((x) => x.category_id == category);

  const ret = {
    page,
    size,
    list: data.slice((page - 1) * size, page * size),
    total: data.length,
    pages: Math.floor(data.length / size) + (data.length % size ? 1 : 0),
  };

  return new NextResponse(JSON.stringify(ret));
}
