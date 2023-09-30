import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: NextRequest) {
  const ret = {
    products: (products as Array<any>).slice(0, 50),
  };

  return new NextResponse(JSON.stringify(ret));
}
