import { NextRequest, NextResponse } from "next/server";
import categories from "@/data/categories_flat.json";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const title = categories.find((x) => x.id == id)?.title;

  return new NextResponse(title);
}
