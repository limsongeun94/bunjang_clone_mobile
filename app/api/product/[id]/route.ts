import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

// endpoint: /api/product/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  let data = products as Array<any>;

  const id = params.id;
  const ret = data.find((x) => x.pid == id);

  return new NextResponse(JSON.stringify(ret));
}
