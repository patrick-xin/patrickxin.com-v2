import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const json = await request.json();
  const { slug } = json;

  await prisma.post.create({
    data: {
      slug,
    },
  });
  return NextResponse.json({ success: true });
}
