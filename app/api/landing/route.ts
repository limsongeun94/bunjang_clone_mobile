import { NextRequest, NextResponse } from "next/server";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

// endpoint: /api/landing
export async function GET(req: NextRequest) {
  const ret = {
    products,
    categories,
  };

  return new NextResponse(JSON.stringify(ret));
}
