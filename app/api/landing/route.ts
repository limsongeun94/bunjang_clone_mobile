import { NextRequest, NextResponse } from "next/server";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

// endpoint: /api/landing
export async function GET(req: NextRequest) {
  //const index_products = products.slice(0, 50);
  const ret = {
    products: products.slice(0, 50),
    categories,
  };

  return new NextResponse(JSON.stringify(ret));
}
