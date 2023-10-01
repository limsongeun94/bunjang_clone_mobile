import { NextRequest, NextResponse } from "next/server";
import products from "@/data/detail.json";

// endpoint: /api/product/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  let data = products as Record<string, any>;

  const id = params.id;
  const ret = data[id];

  return new NextResponse(JSON.stringify(ret));
}
